import { useEffect, useId, useRef, useState, type ReactNode } from "react";
import { createPortal } from "react-dom";
import {
  useAccessibilitySettings,
  type A11ySettings,
  type FontScale,
  type LetterSpacing,
  type LineSpacing,
  type TextAlign,
  type Saturation,
} from "../../hooks/useAccessibilitySettings";

const PersonGlyph = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
    <circle cx="12" cy="12" r="10.5" fill="none" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="12" cy="6.5" r="1.4" fill="currentColor" />
    <path
      d="M6.5 9.5 h11 M12 9.5 v4 M12 13.5 l-2.5 5 M12 13.5 l2.5 5"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      fill="none"
    />
  </svg>
);

const CloseIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
    <path d="M6 6 L18 18 M18 6 L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const Chevron = () => (
  <svg viewBox="0 0 16 16" aria-hidden="true" focusable="false" className="a11y-section-chev">
    <path d="M3 6 L8 11 L13 6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const Icon = ({ d }: { d: string }) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
    <path d={d} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const FOCUSABLE =
  'a[href],button:not([disabled]),textarea:not([disabled]),input:not([disabled]),select:not([disabled]),[tabindex]:not([tabindex="-1"])';

function announce(msg: string, region: HTMLElement | null) {
  if (!region) return;
  region.textContent = "";
  window.setTimeout(() => {
    region.textContent = msg;
  }, 30);
}

type TileProps = {
  active: boolean;
  onClick: () => void;
  icon: ReactNode;
  label: string;
  /** "switch" -> aria-checked; "pressed" -> aria-pressed */
  mode: "switch" | "pressed";
};
function Tile({ active, onClick, icon, label, mode }: TileProps) {
  const aria =
    mode === "switch"
      ? { role: "switch" as const, "aria-checked": active }
      : { "aria-pressed": active };
  return (
    <button type="button" className="a11y-tile" onClick={onClick} {...aria}>
      <span className="a11y-tile-icon">{icon}</span>
      <span className="a11y-tile-label">{label}</span>
    </button>
  );
}

type Section = "content" | "visual" | "navigation";

function Disclosure({
  id,
  title,
  open,
  onToggle,
  children,
}: {
  id: string;
  title: string;
  open: boolean;
  onToggle: () => void;
  children: ReactNode;
}) {
  return (
    <div className="a11y-section">
      <button
        type="button"
        className="a11y-section-header"
        aria-expanded={open}
        aria-controls={id}
        onClick={onToggle}
      >
        <span>{title}</span>
        <Chevron />
      </button>
      <div id={id} role="region" aria-label={title} hidden={!open} className="a11y-section-panel">
        {children}
      </div>
    </div>
  );
}

export function AccessibilityWidget() {
  const { settings, update, reset, hydrated } = useAccessibilitySettings();
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [openSection, setOpenSection] = useState<Section>("content");
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const panelRef = useRef<HTMLDivElement | null>(null);
  const closeRef = useRef<HTMLButtonElement | null>(null);
  const liveRef = useRef<HTMLDivElement | null>(null);
  const guideRef = useRef<HTMLDivElement | null>(null);

  const uid = useId().replace(/:/g, "");
  const panelId = `a11y-panel-${uid}`;
  const titleId = `a11y-title-${uid}`;
  const secIds = {
    content: `a11y-sec-content-${uid}`,
    visual: `a11y-sec-visual-${uid}`,
    navigation: `a11y-sec-nav-${uid}`,
  };

  useEffect(() => setMounted(true), []);

  // Focus trap + Escape + inert background on mobile
  useEffect(() => {
    if (!open) return;
    const previouslyFocused = document.activeElement as HTMLElement | null;
    const t = window.setTimeout(() => closeRef.current?.focus(), 20);

    const scope = document.getElementById("a11y-scope");
    const isMobile = window.matchMedia("(max-width: 640px)").matches;
    if (scope && isMobile) scope.setAttribute("inert", "");

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.stopPropagation();
        setOpen(false);
        return;
      }
      if (e.key === "Tab" && panelRef.current) {
        const nodes = Array.from(
          panelRef.current.querySelectorAll<HTMLElement>(FOCUSABLE),
        ).filter((n) => !n.hasAttribute("disabled"));
        if (nodes.length === 0) return;
        const first = nodes[0];
        const last = nodes[nodes.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      window.clearTimeout(t);
      document.removeEventListener("keydown", onKey);
      if (scope) scope.removeAttribute("inert");
      previouslyFocused?.focus?.();
    };
  }, [open]);

  // Reading guide follows pointer Y — rendered in portal, unaffected by scope filters
  useEffect(() => {
    if (!settings.readingGuide) return;
    const coarse = window.matchMedia("(pointer: coarse)").matches;
    if (coarse) return;
    const onMove = (e: PointerEvent) => {
      if (guideRef.current) guideRef.current.style.top = `${e.clientY}px`;
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, [settings.readingGuide]);

  // Announcements — only after hydration and on actual user change
  const firstAnnounce = useRef(true);
  useEffect(() => {
    if (!hydrated) return;
    if (firstAnnounce.current) {
      firstAnnounce.current = false;
      return;
    }
  }, [settings, hydrated]);

  const say = (msg: string) => announce(msg, liveRef.current);

  const setFontScale = (v: FontScale) => {
    update("fontScale", v);
    say(`Font size ${v} percent`);
  };
  const setLetter = (v: LetterSpacing) => {
    update("letterSpacing", v);
    say(`Letter spacing ${v === "normal" ? "normal" : v === "wide" ? "wide" : "wider"}`);
  };
  const setLine = (v: LineSpacing) => {
    update("lineSpacing", v);
    const label = v === "normal" ? "normal" : v.replace("_", ".");
    say(`Line spacing ${label}`);
  };
  const setAlign = (v: TextAlign) => {
    update("textAlign", v);
    say(`Text alignment ${v === "default" ? "default" : v}`);
  };
  const setSat = (v: Saturation) => {
    update("saturation", v);
    say(`Saturation ${v}`);
  };
  const toggle = <K extends keyof A11ySettings>(key: K, label: string) => {
    const next = !settings[key];
    update(key, next as A11ySettings[K]);
    say(`${label} ${next ? "on" : "off"}`);
  };

  const trigger = (
    <button
      ref={triggerRef}
      type="button"
      className="a11y-trigger"
      aria-label="Accessibility options"
      aria-expanded={open}
      aria-controls={panelId}
      aria-haspopup="dialog"
      onClick={() => setOpen((v) => !v)}
    >
      <PersonGlyph />
    </button>
  );

  const panel = open ? (
    <>
      <div className="a11y-scrim" onClick={() => setOpen(false)} aria-hidden="true" />
      <div
        ref={panelRef}
        id={panelId}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="a11y-panel"
      >
        <div className="a11y-panel-header">
          <h2 id={titleId}>Accessibility</h2>
          <button
            ref={closeRef}
            type="button"
            className="a11y-close"
            aria-label="Close accessibility options"
            onClick={() => setOpen(false)}
          >
            <CloseIcon />
          </button>
        </div>

        <div className="a11y-body">
          <Disclosure
            id={secIds.content}
            title="Content"
            open={openSection === "content"}
            onToggle={() => setOpenSection(openSection === "content" ? ("" as Section) : "content")}
          >
            <div role="group" aria-labelledby={`${secIds.content}-fs`}>
              <span id={`${secIds.content}-fs`} className="a11y-group-label">Font size</span>
              <div className="a11y-grid">
                {([100, 125, 150, 200] as FontScale[]).map((v) => (
                  <Tile
                    key={v}
                    mode="pressed"
                    active={settings.fontScale === v}
                    onClick={() => setFontScale(v)}
                    icon={<span style={{ fontWeight: 800, fontSize: v === 100 ? 12 : v === 125 ? 14 : v === 150 ? 16 : 18 }}>Aa</span>}
                    label={`${v}%`}
                  />
                ))}
              </div>
            </div>

            <div role="group" aria-labelledby={`${secIds.content}-ls`}>
              <span id={`${secIds.content}-ls`} className="a11y-group-label">Letter spacing</span>
              <div className="a11y-grid">
                {(["normal", "wide", "wider"] as LetterSpacing[]).map((v) => (
                  <Tile
                    key={v}
                    mode="pressed"
                    active={settings.letterSpacing === v}
                    onClick={() => setLetter(v)}
                    icon={<span style={{ letterSpacing: v === "normal" ? 0 : v === "wide" ? "0.15em" : "0.25em", fontWeight: 700 }}>A B</span>}
                    label={v === "normal" ? "Normal" : v === "wide" ? "Wide" : "Wider"}
                  />
                ))}
              </div>
            </div>

            <div role="group" aria-labelledby={`${secIds.content}-lh`}>
              <span id={`${secIds.content}-lh`} className="a11y-group-label">Line spacing</span>
              <div className="a11y-grid">
                {(["normal", "1_5", "1_8", "2_0"] as LineSpacing[]).map((v) => (
                  <Tile
                    key={v}
                    mode="pressed"
                    active={settings.lineSpacing === v}
                    onClick={() => setLine(v)}
                    icon={<Icon d="M4 6 h16 M4 12 h16 M4 18 h16" />}
                    label={v === "normal" ? "Normal" : v.replace("_", ".")}
                  />
                ))}
              </div>
            </div>

            <div role="group" aria-labelledby={`${secIds.content}-ta`}>
              <span id={`${secIds.content}-ta`} className="a11y-group-label">Text alignment</span>
              <div className="a11y-grid">
                {(
                  [
                    ["default", "Default", "M4 6 h16 M4 12 h12 M4 18 h16"],
                    ["left", "Left", "M4 6 h16 M4 12 h10 M4 18 h14"],
                    ["center", "Center", "M6 6 h12 M8 12 h8 M6 18 h12"],
                    ["right", "Right", "M4 6 h16 M10 12 h10 M6 18 h14"],
                  ] as [TextAlign, string, string][]
                ).map(([v, label, d]) => (
                  <Tile
                    key={v}
                    mode="pressed"
                    active={settings.textAlign === v}
                    onClick={() => setAlign(v)}
                    icon={<Icon d={d} />}
                    label={label}
                  />
                ))}
              </div>
            </div>

            <div role="group" aria-labelledby={`${secIds.content}-df`}>
              <span id={`${secIds.content}-df`} className="a11y-group-label">Reading support</span>
              <div className="a11y-grid">
                <Tile
                  mode="switch"
                  active={settings.dyslexiaFont}
                  onClick={() => toggle("dyslexiaFont", "Dyslexia-friendly font")}
                  icon={<span style={{ fontFamily: "'Atkinson Hyperlegible', serif", fontWeight: 700 }}>Ag</span>}
                  label="Dyslexia font"
                />
              </div>
            </div>
          </Disclosure>

          <Disclosure
            id={secIds.visual}
            title="Visual"
            open={openSection === "visual"}
            onToggle={() => setOpenSection(openSection === "visual" ? ("" as Section) : "visual")}
          >
            <div role="group" aria-labelledby={`${secIds.visual}-adj`}>
              <span id={`${secIds.visual}-adj`} className="a11y-group-label">Adjustments</span>
              <div className="a11y-grid">
                <Tile
                  mode="switch"
                  active={settings.highContrast}
                  onClick={() => toggle("highContrast", "High contrast")}
                  icon={<Icon d="M12 3 v18 M12 3 a9 9 0 0 1 0 18" />}
                  label="High contrast"
                />
                <Tile
                  mode="switch"
                  active={settings.invert}
                  onClick={() => toggle("invert", "Invert colours")}
                  icon={<Icon d="M12 3 a9 9 0 1 0 0 18 z" />}
                  label="Invert colours"
                />
                <Tile
                  mode="switch"
                  active={settings.greyscale}
                  onClick={() => toggle("greyscale", "Greyscale")}
                  icon={<Icon d="M4 12 a8 8 0 1 0 16 0 a8 8 0 1 0 -16 0" />}
                  label="Greyscale"
                />
              </div>
            </div>

            <div role="group" aria-labelledby={`${secIds.visual}-sat`}>
              <span id={`${secIds.visual}-sat`} className="a11y-group-label">Saturation</span>
              <div className="a11y-grid">
                {(["normal", "low", "high"] as Saturation[]).map((v) => (
                  <Tile
                    key={v}
                    mode="pressed"
                    active={settings.saturation === v}
                    onClick={() => setSat(v)}
                    icon={<Icon d="M12 3 C 7 10 5 14 12 21 C 19 14 17 10 12 3 z" />}
                    label={v === "normal" ? "Normal" : v === "low" ? "Low" : "High"}
                  />
                ))}
              </div>
            </div>
          </Disclosure>

          <Disclosure
            id={secIds.navigation}
            title="Navigation"
            open={openSection === "navigation"}
            onToggle={() => setOpenSection(openSection === "navigation" ? ("" as Section) : "navigation")}
          >
            <div role="group" aria-labelledby={`${secIds.navigation}-aids`}>
              <span id={`${secIds.navigation}-aids`} className="a11y-group-label">Aids</span>
              <div className="a11y-grid">
                <Tile
                  mode="switch"
                  active={settings.largeCursor}
                  onClick={() => toggle("largeCursor", "Large cursor")}
                  icon={<Icon d="M6 4 v14 L10 14 L13 20 L16 19 L13 13 L18 13 z" />}
                  label="Large cursor"
                />
                <Tile
                  mode="switch"
                  active={settings.highlightLinks}
                  onClick={() => toggle("highlightLinks", "Highlight links")}
                  icon={<Icon d="M10 14 a4 4 0 0 1 0 -6 l3 -3 a4 4 0 0 1 6 6 l-1 1 M14 10 a4 4 0 0 1 0 6 l-3 3 a4 4 0 0 1 -6 -6 l1 -1" />}
                  label="Highlight links"
                />
                <Tile
                  mode="switch"
                  active={settings.readingGuide}
                  onClick={() => toggle("readingGuide", "Reading guide")}
                  icon={<Icon d="M3 12 h18 M6 8 h12 M6 16 h12" />}
                  label="Reading guide"
                />
                <Tile
                  mode="switch"
                  active={settings.pauseAnimations}
                  onClick={() => toggle("pauseAnimations", "Pause animations")}
                  icon={<Icon d="M9 6 v12 M15 6 v12" />}
                  label="Pause animations"
                />
              </div>
            </div>
          </Disclosure>
        </div>

        <div className="a11y-footer">
          <button
            type="button"
            className="a11y-reset"
            onClick={() => {
              reset();
              say("All accessibility settings reset");
            }}
          >
            Reset all settings
          </button>
        </div>

        <div ref={liveRef} className="a11y-sr-only" role="status" aria-live="polite" />
      </div>
    </>
  ) : null;

  const readingGuide =
    settings.readingGuide && mounted ? (
      <div ref={guideRef} className="a11y-reading-guide" aria-hidden="true" style={{ top: "50%" }} />
    ) : null;

  if (!mounted) return null;

  return createPortal(
    <div className="a11y-widget-root">
      {trigger}
      {panel}
      {readingGuide}
    </div>,
    document.body,
  );
}

export default AccessibilityWidget;