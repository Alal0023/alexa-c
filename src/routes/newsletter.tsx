import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { CSS } from "./index";

const CALENDLY_URL = "https://calendly.com/alexandra-ciobanu-3pgd/30min";
const FIVERR_URL = "https://www.fiverr.com/alexaci_/design-and-build-your-landing-page-with-senior-ux-and-real-code";
const LINKEDIN_URL = "https://www.linkedin.com/in/alexa-ciobanu/";
const SUBSTACK_URL = "https://substack.com/home/post/p-206289599";

const DESC =
  "Basic-Good-Great — one true story from practice, one lesson, one rep you can run the same day. Weekly, Thursday mornings, five minutes.";

export const Route = createFileRoute("/newsletter")({
  head: () => ({
    meta: [
      { title: "Newsletter — Basic-Good-Great · Alexa C." },
      { name: "description", content: DESC },
      { property: "og:title", content: "Basic-Good-Great — the newsletter" },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://alexa-c.lovable.app/newsletter" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Basic-Good-Great — the newsletter" },
      { name: "twitter:description", content: DESC },
    ],
    links: [{ rel: "canonical", href: "https://alexa-c.lovable.app/newsletter" }],
  }),
  component: NewsletterPage,
});

type Issue = {
  n: string;
  date: string;
  title: string;
  blurb: string;
  status: "published" | "coming" | "launch";
  statusLabel: string;
};

const ISSUES: Issue[] = [
  { n: "№ 01", date: "THU 9 JUL", title: "Basic, Good, Great", blurb: "Everything I make, I make three times. The framework that moved accessibility from 80% to 95% at Amazon.", status: "published", statusLabel: "PUBLISHED" },
  { n: "№ 02", date: "MON 13 JUL", title: "The volunteer years", blurb: "Curiosity is unpaid right up until it isn't.", status: "published", statusLabel: "PUBLISHED" },
  { n: "№ 03", date: "THU 16 JUL", title: "The 8th of March hackathon", blurb: "Went to socialise. Left with a completely different way of building.", status: "published", statusLabel: "THIS THURSDAY" },
  { n: "№ 04", date: "MON 20 JUL", title: "Interviews without leads", blurb: "Getting interviews and getting offers are two different funnels.", status: "coming", statusLabel: "COMING" },
  { n: "№ 05", date: "THU 23 JUL", title: "Start here: the basics", blurb: "The on-ramp to the whole series, from your first line of alt text.", status: "coming", statusLabel: "COMING" },
  { n: "LAUNCH", date: "THU 30 JUL · 9:00", title: "Issue 1 — the first email", blurb: "The build diary begins. Subscribe to get it the morning it lands.", status: "launch", statusLabel: "SUBSCRIBER FIRST" },
];

const EXTRA_CSS = `
.aurora-root .nl-hero{ position:relative; overflow:hidden; padding:80px 0 40px; text-align:center; }
.aurora-root .nl-hero .aura{ width:520px; height:520px; }
.aurora-root .nl-hero .aura.a1{ background:#9B5CFF; top:-180px; left:50%; transform:translateX(-50%); opacity:.28; }
.aurora-root .nl-dots{ display:inline-flex; gap:14px; align-items:center; margin-bottom:18px; position:relative; z-index:2; }
.aurora-root .nl-dots .d{ width:44px; height:44px; border-radius:50%; }
.aurora-root .nl-dots .d.d1{ border:1.5px dashed var(--muted); }
.aurora-root .nl-dots .d.d2{ border:1.5px solid #9B5CFF; }
.aurora-root .nl-dots .d.d3{ background:var(--grad-tight); box-shadow:0 0 40px rgba(155,92,255,.6); }
.aurora-root .nl-hero .eyebrow{ display:block; margin-bottom:14px; color:#9B5CFF; }
.aurora-root .nl-hero h1{ font-weight:800; font-size:64px; line-height:1; letter-spacing:-.04em; margin:0 auto 18px; position:relative; z-index:2; }
.aurora-root .nl-hero p.lede{ font-size:19px; line-height:1.5; color:var(--muted); max-width:620px; margin:0 auto 32px; font-weight:500; position:relative; z-index:2; }
.aurora-root .nl-form{ display:flex; gap:10px; max-width:520px; margin:0 auto; position:relative; z-index:2; flex-wrap:wrap; justify-content:center; }
.aurora-root .nl-form input{ flex:1; min-width:240px; padding:16px 22px; border-radius:100px; background:var(--surface); border:1px solid var(--line); color:var(--ink); font:inherit; font-size:15px; }
.aurora-root .nl-form input::placeholder{ color:var(--muted); }
.aurora-root .nl-form input:focus{ outline:none; border-color:#9B5CFF; box-shadow:0 0 0 3px rgba(155,92,255,.25); }
.aurora-root .nl-form button{ font-weight:800; font-size:16px; padding:16px 30px; border-radius:100px; background:var(--grad-pv); color:#0C0A18; border:0; cursor:pointer; background-size:200% 100%; background-position:0% 50%; transition:background-position .6s ease, transform .25s ease; }
.aurora-root .nl-form button:hover{ background-position:100% 50%; transform:translateY(-2px); }
.aurora-root .nl-meta{ font-family:var(--mono); font-size:12px; letter-spacing:.14em; color:var(--muted); margin-top:16px; position:relative; z-index:2; text-transform:uppercase; }
.aurora-root .nl-meta a{ color:inherit; border-bottom:1px solid var(--line); }
.aurora-root .nl-meta a:hover{ color:var(--ink); }

.aurora-root .nl-list{ padding:60px 0 100px; }
.aurora-root .nl-list .wrap{ max-width:900px; }
.aurora-root .nl-item{ display:block; padding:26px 32px; border:1px solid var(--line); border-radius:20px; background:var(--surface); margin-bottom:16px; transition:transform .2s ease, border-color .2s ease; }
.aurora-root .nl-item:hover{ transform:translateY(-2px); border-color:#9B5CFF; }
.aurora-root .nl-item .head{ display:flex; justify-content:space-between; align-items:center; gap:12px; margin-bottom:10px; flex-wrap:wrap; }
.aurora-root .nl-item .meta{ font-family:var(--mono); font-size:12px; letter-spacing:.14em; color:var(--muted); text-transform:uppercase; }
.aurora-root .nl-item .status{ font-family:var(--mono); font-size:11px; letter-spacing:.18em; text-transform:uppercase; }
.aurora-root .nl-item[data-status="published"] .status{ color:#36E0C8; }
.aurora-root .nl-item[data-status="coming"] .status{ color:var(--muted); }
.aurora-root .nl-item[data-status="launch"]{ border:1.5px solid transparent; background:linear-gradient(var(--surface),var(--surface)) padding-box, var(--grad-tight) border-box; }
.aurora-root .nl-item[data-status="launch"] .status{ color:#FF6FD8; }
.aurora-root .nl-item h3{ font-weight:800; font-size:22px; letter-spacing:-.02em; margin:0 0 6px; }
.aurora-root .nl-item p{ color:var(--muted); font-size:15px; line-height:1.5; margin:0; }

.aurora-root .nl-elsewhere{ padding:0 0 80px; }
.aurora-root .nl-elsewhere .wrap{ max-width:900px; text-align:center; }
.aurora-root .nl-elsewhere .eyebrow{ display:block; margin-bottom:18px; }
.aurora-root .nl-elsewhere .platforms{ display:flex; gap:14px; justify-content:center; flex-wrap:wrap; }
.aurora-root .nl-elsewhere .platforms a{ display:inline-flex; align-items:center; gap:10px; padding:14px 22px; border-radius:100px; background:var(--surface); border:1px solid var(--line); font-weight:700; font-size:15px; transition:border-color .2s, transform .2s; }
.aurora-root .nl-elsewhere .platforms a:hover{ border-color:#9B5CFF; transform:translateY(-2px); }

@media (max-width:720px){
  .aurora-root .nl-hero{ padding:56px 0 32px; }
  .aurora-root .nl-hero h1{ font-size:40px; }
  .aurora-root .nl-hero p.lede{ font-size:16px; }
  .aurora-root .nl-item{ padding:20px 22px; }
  .aurora-root .nl-item h3{ font-size:18px; }
}
`;

function NewsletterPage() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    const saved = (typeof window !== "undefined" && localStorage.getItem("theme")) as "dark" | "light" | null;
    if (saved) setTheme(saved);
  }, []);
  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    if (typeof window !== "undefined") localStorage.setItem("theme", next);
  };

  return (
    <div className={`aurora-root ${theme === "light" ? "light" : ""}`}>
      <style dangerouslySetInnerHTML={{ __html: CSS + EXTRA_CSS }} />

      <nav>
        <div className="wrap row">
          <a href="/" className="logo">Alexa <span className="grad-t">C.</span></a>
          <div className="menu">
            <a href="/#proof">Work</a>
            <a href="/#about">About</a>
            <a href="/newsletter">Newsletter</a>
            <a href="/#contact">Contact</a>
          </div>
          <button className="theme-tog" aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`} onClick={toggleTheme}>
            {theme === "dark" ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
            )}
          </button>
          <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="cta">Book a call</a>
          <button className="hamb" aria-label="Open menu" onClick={() => setMenuOpen(true)}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"><path d="M4 7h16M4 12h16M4 17h16"/></svg>
          </button>
        </div>
      </nav>

      <div className={`drawer ${menuOpen ? "open" : ""}`} role="dialog" aria-modal="true" aria-hidden={!menuOpen}>
        <div className="top">
          <div className="logo" style={{ fontWeight: 800, fontSize: 22 }}>Alexa <span className="grad-t">C.</span></div>
          <button className="close" aria-label="Close menu" onClick={() => setMenuOpen(false)}>✕</button>
        </div>
        <div className="links">
          <a href="/#proof" onClick={() => setMenuOpen(false)}>Work</a>
          <a href="/#about" onClick={() => setMenuOpen(false)}>About</a>
          <a href="/newsletter" onClick={() => setMenuOpen(false)}>Newsletter</a>
          <a href="/#contact" onClick={() => setMenuOpen(false)}>Contact</a>
        </div>
        <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="cta" onClick={() => setMenuOpen(false)}>Book a call</a>
      </div>

      <header className="nl-hero">
        <div className="aura a1"></div>
        <div className="wrap">
          <div className="nl-dots" aria-hidden="true">
            <span className="d d1"></span>
            <span className="d d2"></span>
            <span className="d d3"></span>
          </div>
          <span className="eyebrow">The newsletter</span>
          <h1>Basic-Good-Great</h1>
          <p className="lede">One true story from practice, one lesson, one rep you can run the same day. Weekly, Thursday mornings, five minutes.</p>
          <form className="nl-form" onSubmit={(e) => {
            e.preventDefault();
            const email = new FormData(e.currentTarget).get("email");
            if (typeof email === "string" && email) {
              window.open(`${SUBSTACK_URL}?utm_source=alexa-c&email=${encodeURIComponent(email)}`, "_blank", "noopener,noreferrer");
            }
          }}>
            <label htmlFor="nl-email" className="sr-only" style={{ position: "absolute", left: -9999 }}>Email</label>
            <input id="nl-email" name="email" type="email" placeholder="you@company.com" required />
            <button type="submit">Subscribe free</button>
          </form>
          <p className="nl-meta">
            By Alexandra Ciobanu · Unsubscribe any time · <a href={SUBSTACK_URL} target="_blank" rel="noopener noreferrer">Read on Substack ↗</a>
          </p>
        </div>
      </header>

      <section className="nl-list">
        <div className="wrap">
          {ISSUES.map((it) => {
            const href = it.status === "published" ? SUBSTACK_URL : SUBSTACK_URL;
            const isLink = it.status === "published";
            const inner = (
              <>
                <div className="head">
                  <span className="meta">{it.n} · {it.date}</span>
                  <span className="status">{it.statusLabel}</span>
                </div>
                <h3>{it.title}</h3>
                <p>{it.blurb}</p>
              </>
            );
            return isLink ? (
              <a key={it.n + it.title} href={href} target="_blank" rel="noopener noreferrer" className="nl-item" data-status={it.status}>{inner}</a>
            ) : (
              <div key={it.n + it.title} className="nl-item" data-status={it.status}>{inner}</div>
            );
          })}
        </div>
      </section>

      <section className="nl-elsewhere">
        <div className="wrap">
          <span className="eyebrow">Also find me on</span>
          <div className="platforms">
            <a href={SUBSTACK_URL} target="_blank" rel="noopener noreferrer">Substack ↗</a>
            <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
            <a href={FIVERR_URL} target="_blank" rel="noopener noreferrer">Fiverr ↗</a>
          </div>
        </div>
      </section>

      <footer>
        <div className="wrap row">
          <a href="/" className="logo">Alexa <span className="grad-t">C.</span></a>
          <div className="links">
            <a href="/#proof">Work</a>
            <a href="/#about">About</a>
            <a href="/newsletter">Newsletter</a>
            <a href="/#contact">Contact</a>
            <a href={FIVERR_URL} target="_blank" rel="noopener noreferrer" className="ext icon" aria-label="Fiverr">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M23 15.762a1.238 1.238 0 1 0 0-2.476 1.238 1.238 0 0 0 0 2.476zm-6.19-6.19h-2.303c-.874 0-1.35.667-1.35 1.556v.35h2.144v4.284h-2.144v2.428h6.905v-2.428h-2.111v-6.19zm-9.052 0v.397c-.54-.318-1.191-.508-1.937-.508-2.365 0-3.81 1.556-3.81 4.031 0 2.476 1.445 4.032 3.81 4.032.746 0 1.397-.19 1.937-.508v.397h2.588v-7.841h-2.588zm-1.635 5.428c-1.049 0-1.683-.635-1.683-1.635 0-1 .634-1.635 1.683-1.635.842 0 1.635.492 1.635 1.635 0 1.143-.793 1.635-1.635 1.635z"/></svg>
            </a>
            <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="ext icon" aria-label="LinkedIn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14zM8.339 18.338V9.883H5.667v8.455h2.672zM7.003 8.721a1.548 1.548 0 1 0 0-3.096 1.548 1.548 0 0 0 0 3.096zm11.335 9.617v-4.63c0-2.417-1.29-3.541-3.011-3.541-1.389 0-2.011.764-2.358 1.3v-1.115h-2.672c.035.755 0 8.455 0 8.455h2.672v-4.72c0-.24.017-.48.088-.652.194-.48.633-.977 1.372-.977.968 0 1.355.738 1.355 1.82v4.53h2.554z"/></svg>
            </a>
          </div>
          <div className="fine">© 2026 Alexa C. — UK</div>
        </div>
      </footer>
    </div>
  );
}