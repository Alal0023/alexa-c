import { useCallback, useEffect, useState } from "react";

export type FontScale = 100 | 125 | 150 | 200;
export type LetterSpacing = "normal" | "wide" | "wider";
export type LineSpacing = "normal" | "1_5" | "1_8" | "2_0";
export type TextAlign = "default" | "left" | "center" | "right";
export type Saturation = "normal" | "low" | "high";

export type A11ySettings = {
  v: 1;
  fontScale: FontScale;
  letterSpacing: LetterSpacing;
  lineSpacing: LineSpacing;
  textAlign: TextAlign;
  dyslexiaFont: boolean;
  highContrast: boolean;
  invert: boolean;
  greyscale: boolean;
  saturation: Saturation;
  largeCursor: boolean;
  highlightLinks: boolean;
  readingGuide: boolean;
  pauseAnimations: boolean;
};

export const STORAGE_KEY = "alexac-a11y-v1";

const prefersReducedMotion = (): boolean => {
  if (typeof window === "undefined") return false;
  try {
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  } catch {
    return false;
  }
};

export const defaultSettings = (): A11ySettings => ({
  v: 1,
  fontScale: 100,
  letterSpacing: "normal",
  lineSpacing: "normal",
  textAlign: "default",
  dyslexiaFont: false,
  highContrast: false,
  invert: false,
  greyscale: false,
  saturation: "normal",
  largeCursor: false,
  highlightLinks: false,
  readingGuide: false,
  pauseAnimations: prefersReducedMotion(),
});

const readStored = (): A11ySettings => {
  const def = defaultSettings();
  if (typeof window === "undefined") return def;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return def;
    const parsed = JSON.parse(raw) as Partial<A11ySettings>;
    if (!parsed || parsed.v !== 1) return def;
    return { ...def, ...parsed, v: 1 };
  } catch {
    return def;
  }
};

const writeStored = (s: A11ySettings) => {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(s));
  } catch {
    /* private-mode Safari */
  }
};

/** Apply settings to <html> data attributes. Filters are scoped by CSS to #a11y-scope. */
export const applySettings = (s: A11ySettings) => {
  if (typeof document === "undefined") return;
  const r = document.documentElement;
  r.dataset.a11yFontScale = String(s.fontScale);
  r.dataset.a11yLetterSpacing = s.letterSpacing;
  r.dataset.a11yLineSpacing = s.lineSpacing;
  r.dataset.a11yTextAlign = s.textAlign;
  r.dataset.a11yDyslexia = s.dyslexiaFont ? "on" : "off";
  r.dataset.a11yContrast = s.highContrast ? "high" : "off";
  r.dataset.a11yInvert = s.invert ? "on" : "off";
  r.dataset.a11yGreyscale = s.greyscale ? "on" : "off";
  r.dataset.a11ySaturation = s.saturation;
  r.dataset.a11yLargeCursor = s.largeCursor ? "on" : "off";
  r.dataset.a11yHighlightLinks = s.highlightLinks ? "on" : "off";
  r.dataset.a11yPauseAnimations = s.pauseAnimations ? "on" : "off";
  r.dataset.a11yReadingGuide = s.readingGuide ? "on" : "off";
};

export function useAccessibilitySettings() {
  const [settings, setSettings] = useState<A11ySettings>(defaultSettings);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    const s = readStored();
    setSettings(s);
    applySettings(s);
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    applySettings(settings);
    writeStored(settings);
  }, [settings, hydrated]);

  const update = useCallback(<K extends keyof A11ySettings>(key: K, value: A11ySettings[K]) => {
    setSettings((prev) => ({ ...prev, [key]: value }));
  }, []);

  const reset = useCallback(() => {
    const d = defaultSettings();
    setSettings(d);
  }, []);

  return { settings, update, reset, hydrated };
}