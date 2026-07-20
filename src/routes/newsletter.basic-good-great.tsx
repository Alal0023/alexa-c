import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { CSS } from "./index";

const CALENDLY_URL = "https://calendly.com/alexandra-ciobanu-3pgd/30min";
const FIVERR_URL = "https://www.fiverr.com/alexaci_/design-and-build-your-landing-page-with-senior-ux-and-real-code";
const LINKEDIN_URL = "https://www.linkedin.com/in/alexa-ciobanu/";
const SUBSTACK_URL = "https://substack.com/home/post/p-206289599";

const DESC =
  "Everything I make, I make three times. The Basic-Good-Great framework that moved accessibility from 80% to 95% at Amazon.";

export const Route = createFileRoute("/newsletter/basic-good-great")({
  head: () => ({
    meta: [
      { title: "Basic, Good, Great — Issue № 01 · Alexa C." },
      { name: "description", content: DESC },
      { property: "og:title", content: "Basic, Good, Great — Issue № 01" },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "https://alexa-c.lovable.app/newsletter/basic-good-great" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Basic, Good, Great — Issue № 01" },
      { name: "twitter:description", content: DESC },
    ],
    links: [{ rel: "canonical", href: "https://alexa-c.lovable.app/newsletter/basic-good-great" }],
  }),
  component: ArticlePage,
});

const EXTRA_CSS = `
.aurora-root .art-hero{ padding:80px 0 32px; text-align:center; position:relative; overflow:hidden; }
.aurora-root .art-hero .aura{ width:520px; height:520px; background:#9B5CFF; top:-200px; left:50%; transform:translateX(-50%); opacity:.24; }
.aurora-root .art-hero .wrap{ max-width:760px; position:relative; z-index:2; }
.aurora-root .art-hero .kicker{ font-family:var(--mono); font-size:12px; letter-spacing:.18em; text-transform:uppercase; color:#9B5CFF; margin-bottom:16px; display:block; }
.aurora-root .art-hero h1{ font-weight:800; font-size:56px; line-height:1.02; letter-spacing:-.035em; margin:0 0 18px; }
.aurora-root .art-hero .meta{ font-family:var(--mono); font-size:12px; letter-spacing:.14em; color:var(--muted); text-transform:uppercase; }
.aurora-root .art-hero .back{ display:inline-block; margin-bottom:22px; font-family:var(--mono); font-size:12px; letter-spacing:.14em; text-transform:uppercase; color:var(--muted); border-bottom:1px solid var(--line); padding-bottom:2px; }
.aurora-root .art-hero .back:hover{ color:var(--ink); }

.aurora-root .art-body{ padding:20px 0 80px; }
.aurora-root .art-body .wrap{ max-width:720px; }
.aurora-root .art-body p{ font-size:19px; line-height:1.65; color:var(--ink); margin:0 0 22px; font-weight:400; }
.aurora-root .art-body p.lede{ font-size:22px; line-height:1.55; color:var(--muted); font-weight:500; margin-bottom:32px; }
.aurora-root .art-body h2{ font-weight:800; font-size:30px; line-height:1.15; letter-spacing:-.02em; margin:44px 0 16px; }
.aurora-root .art-body h3{ font-weight:800; font-size:22px; margin:28px 0 12px; }
.aurora-root .art-body ul{ margin:0 0 22px; padding-left:22px; }
.aurora-root .art-body ul li{ font-size:19px; line-height:1.65; color:var(--ink); margin-bottom:10px; }
.aurora-root .art-body blockquote{ border-left:3px solid #9B5CFF; padding:6px 0 6px 22px; margin:28px 0; font-size:21px; line-height:1.5; color:var(--ink); font-style:italic; }
.aurora-root .art-body hr{ border:0; border-top:1px solid var(--line); margin:44px 0; }
.aurora-root .art-body .callout{ background:var(--surface); border:1px solid var(--line); border-radius:20px; padding:26px 28px; margin:32px 0; }
.aurora-root .art-body .callout p{ margin:0 0 12px; }
.aurora-root .art-body .callout p:last-child{ margin:0; }

.aurora-root .art-cta{ padding:20px 0 100px; }
.aurora-root .art-cta .wrap{ max-width:720px; text-align:center; }
.aurora-root .art-cta a.sub{ display:inline-block; font-weight:800; font-size:16px; padding:16px 30px; border-radius:100px; background:var(--grad-pv); color:#0C0A18; }
.aurora-root.light .art-cta a.sub{ color:#FFFFFF; }
.aurora-root .art-cta .meta{ display:block; margin-top:14px; font-family:var(--mono); font-size:12px; letter-spacing:.14em; text-transform:uppercase; color:var(--muted); }
.aurora-root .art-cta .meta a{ border-bottom:1px solid var(--line); }

@media (max-width:720px){
  .aurora-root .art-hero{ padding:56px 0 24px; }
  .aurora-root .art-hero h1{ font-size:36px; }
  .aurora-root .art-body p, .aurora-root .art-body ul li{ font-size:17px; }
  .aurora-root .art-body p.lede{ font-size:19px; }
  .aurora-root .art-body h2{ font-size:24px; }
}

.aurora-root.light .art-hero .kicker{ color:#6D3AE6; }
`;

function ArticlePage() {
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

      <header className="art-hero">
        <div className="aura" aria-hidden="true"></div>
        <div className="wrap">
          <a href="/newsletter" className="back">← All issues</a>
          <span className="kicker">Issue № 01 · Thu 9 July</span>
          <h1>Basic, Good, Great</h1>
          <p className="meta">By Alexandra Ciobanu · 5 min read</p>
        </div>
      </header>

      <article className="art-body">
        <div className="wrap">
          <p className="lede">Everything I make, I make three times. Once to be correct, once to be usable, once to be worth remembering. It sounds slow. It's the only reason accessibility at Amazon moved from 80% to 95% in a year.</p>

          <p>When I joined the accessibility team, the number on the wall was 80%. Not bad in isolation, terrible in context: one in five interactions still failed a screen-reader user, a keyboard-only user, someone who couldn't see the colour we'd chosen. "80% accessible" is like "80% waterproof."</p>

          <p>The tempting fix is to hire more auditors and file more tickets. We tried that. It moved the number a point or two, then stalled. Auditors find bugs; they don't change how the next component is built. So we stopped auditing our way out and started building in three passes.</p>

          <h2>1. Basic — the floor</h2>
          <p>Basic is non-negotiable and boring. Semantic HTML. Labels on inputs. Alt text on images that carry meaning, empty alt on the ones that don't. Focus states you can actually see. Contrast that clears 4.5:1 without squinting. Basic is the audit checklist — WCAG 2.2 AA, nothing more.</p>
          <p>Every component ships with Basic or it doesn't ship. There is no "we'll fix accessibility later" ticket. Later never comes; the ticket just ages into a stat on someone's slide.</p>

          <h2>2. Good — craft</h2>
          <p>Good is where most teams stop pretending. A screen-reader user can complete the flow, but it takes them 40 seconds and three wrong turns. Technically compliant. Practically hostile.</p>
          <p>Good means we actually run the flow with a screen reader on. We listen to how the labels read out loud. We check that error messages appear near the field, in text, not just as a red border. We make sure the keyboard tab order matches the visual order — because when it doesn't, nobody complains, they just leave.</p>
          <blockquote>Compliance is what the auditor sees. Craft is what the user feels.</blockquote>

          <h2>3. Great — the champions</h2>
          <p>Great is the pass most people never do, and it's the one that moved the number. Great means: a person with a disability uses this feature in their real life, on their real device, and tells us what actually happened. Not a proxy, not a heuristic — the actual human.</p>
          <p>We built a small panel of paid participants — blind, low-vision, motor-impaired, deaf, cognitively different — and any launch that touched a core flow ran past them first. Fifteen minutes of a real user is worth a week of an auditor.</p>

          <div className="callout">
            <p><b>The rep for this week.</b> Take one screen you shipped this month. Run it three times:</p>
            <p>1) Basic — does it pass axe or Lighthouse with zero critical issues?<br/>2) Good — can you complete the primary flow with your eyes closed and a screen reader on?<br/>3) Great — send it to one person with a disability and ask them to try. Not for feedback, for observation.</p>
            <p>You will find something. That's the point.</p>
          </div>

          <h2>Why three, not one</h2>
          <p>Because a single pass optimises for a single lens. Basic optimises for the auditor. Good optimises for the craftsperson. Great optimises for the user. Any one alone is a partial answer; three together is the only pattern that survived a year of shipping.</p>
          <p>80 → 95 didn't come from working harder. It came from stopping the pretence that one review was enough.</p>

          <hr/>

          <p>Next issue lands Thursday. If Basic-Good-Great is a framework you want to run on your own product, that's what the rest of this newsletter is for — one true story from practice, one lesson, one rep you can run the same day.</p>
        </div>
      </article>

      <section className="art-cta">
        <div className="wrap">
          <a className="sub" href={SUBSTACK_URL} target="_blank" rel="noopener noreferrer">Subscribe free on Substack</a>
          <span className="meta">Weekly · Thursday mornings · <a href={SUBSTACK_URL} target="_blank" rel="noopener noreferrer">Read on Substack ↗</a></span>
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