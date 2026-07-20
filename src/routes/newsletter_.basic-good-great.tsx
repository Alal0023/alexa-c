import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { CSS } from "./index";
import fiverrLogoAsset from "../assets/fiverr-logo.png.asset.json";
import fig1 from "../assets/fig-01-basic-good-great.png.asset.json";
import fig2 from "../assets/fig-02-coverage-one-year.png.asset.json";
import fig3 from "../assets/fig-03-verdict-vs-direction.png.asset.json";

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

.aurora-root .art-body figure{ margin:36px 0; }
.aurora-root .art-body figure img{ width:100%; height:auto; display:block; border:1px solid var(--line); border-radius:16px; background:var(--surface); }
.aurora-root .art-body figure figcaption{ font-family:var(--mono); font-size:12px; letter-spacing:.14em; text-transform:uppercase; color:var(--muted); margin-top:12px; text-align:center; }
.aurora-root .art-body .sig{ font-family:var(--mono); font-size:14px; letter-spacing:.06em; color:var(--muted); margin-top:36px; }
.aurora-root footer .links a.ext.icon .mask{ width:22px; height:22px; display:block; background-color:currentColor; -webkit-mask-repeat:no-repeat; mask-repeat:no-repeat; -webkit-mask-position:center; mask-position:center; -webkit-mask-size:contain; mask-size:contain; }
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
          <span className="kicker">Issue № 01 · Published 9 July 2026</span>
          <h1>Basic, Good, <span className="grad-t">Great.</span></h1>
          <p className="meta">Everything I make, I make three times.</p>
        </div>
      </header>

      <article className="art-body">
        <div className="wrap">
          <p className="lede">Everything I make, I make three times.</p>

          <figure>
            <img src={fig1.url} alt="Three stacked bars labelled Basic, Good, Great — each one taller than the last, with a dashed 'one step better' arrow." />
            <figcaption>Fig. 1 — Three levels · Basic → Good → Great · one step better each time</figcaption>
          </figure>

          <p>Not three drafts of the same thing. Three deliberate states. The basic version exists so the thing is real. The good version exists so the thing is right. The great version is the one I aim at knowing I will not always land it, and knowing that the aiming improves the other two.</p>

          <p>I have applied this to design systems, to my CV, to my portfolio, to learning to draw, and to the newsletter you are reading now. The order is the whole method. Basic first, always, even when I can already see the great version in my head. Especially then. The great version in my head has never met a user, a deadline, or a rendering bug. The basic version has met all three by Friday.</p>

          <h2>Where it became a framework</h2>

          <p>Amazon, 2023. I was a design lead who had just started learning about accessibility. I honestly cannot tell you how I stumbled onto it, but it has served me well ever since, including in ways I did not expect, into motherhood, which is a thread for another issue.</p>

          <p>What I found was an army of designers producing inaccessible work, and a VP-level goal handed to me: move accessibility from 80% to 95% across three organisations producing roughly 500,000 visuals a month. I had one exceptional woman beside me who could run the numbers and the spreadsheets, because this was 2023 and there was, as yet, no AI to do it for us.</p>

          <p>The designers were not careless. They simply could not see it. A visual designer could pick the correct typeface and the correct background colour straight from the styleguide and still ship something that failed, and if the styleguide itself was wrong, then everything produced from it was wrong, at scale, every single month. Accessibility was invisible to the very people most responsible for it.</p>

          <p>So, with allies around me, two exceptional women in two other organisations, I built a visual guide. And here I genuinely do not know whether to write I or we, which tells you something true about how this kind of work actually gets done. The guide ran every kind of work a designer touches, text, logos, product images, illustration, UX screens, against three levels: Basic, Good, Great.</p>

          <div className="callout">
            <p><b>Basic</b> — the floor: the non-negotiable standard, WCAG for text, and a decided-upon internal minimum for everything the standard did not cover.</p>
            <p><b>Good</b> — craft: for the designers who already knew the standard and wanted to do a little more.</p>
            <p><b>Great</b> — for champions: the work almost nobody shipped, and for real reasons, the marketing copy that ran too long, the colour that did not exist in the styleguide, the minimum text size someone had set too small years ago and no one had touched since.</p>
          </div>

          <p>The guide was only half of it. The other half was persuasion. Monthly audits and audit banners run by people who volunteered their time, internal talks to socialise the guide, monthly reports for VPs, numbers crunched by hand, and slowly a team built around the processes so they would outlast any one of us. I am still grateful to those people. The framework was mine; the movement was ours.</p>

          <p>We measured 80% at the start. Across a year, we reached 95%.</p>

          <figure>
            <img src={fig2.url} alt="A line chart rising from 80% in month 1 to 95% in month 12, with a dashed continuation beyond marked 'beyond great'." />
            <figcaption>Fig. 2 — Coverage across one year · 80% → 95% · the last 5% is a place you visit</figcaption>
          </figure>

          <p>You may be wondering why not 100%. Because the last 5% is the hardest to chase, and a goal you can actually reach beats a goal that only sounds noble. Pure perfection does not exist; it is the thing beyond great, and beyond great is a place you visit, not a place you ship from.</p>

          <p>And because I had a little time left and a little creativity, I went to visit it anyway. I started a side study to build accessibility checkers into automated marketing production. I had the idea, I made the proof, I built the Figma mock, and then I did not manage to implement it the way I wanted. It stalled somewhere between its second and third version. That is the honest ending, and I am keeping it in: sometimes the great version is a thing you prove is possible and then set down, because insisting on something that has already stopped moving is its own kind of failure. You learn to leave it and go build elsewhere.</p>

          <p>But here is the part I only understood later, and it is the reason the guide worked at all. It never handed anyone a verdict. At any moment, every designer who used it knew exactly two things: where their work stood, and what one step better looked like.</p>

          <h2>A direction, not a verdict</h2>

          <figure>
            <img src={fig3.url} alt="Side-by-side diagram: A – Verdict, an arrow that stops at a wall with a red X. B – Direction, a staircase with dashed arrows pointing to the next step." />
            <figcaption>Fig. 3 — Verdict vs. direction · one arrives at the end, the other names the next step</figcaption>
          </figure>

          <p>That is the entire difference. A pass/fail standard gives you two possible states: you passed, or you are demoralised. It arrives at the end, usually as a list of everything wrong, and it offers no next move. Basic, Good, Great gives you a place to stand and a direction to walk, and the only question it ever asks is: what would one step better look like?</p>

          <p>People do not skip accessibility, or craft, or care, because they lack it. They skip it because "not good enough" is a door with no handle. Name the next step, and the guilt turns into work.</p>

          <p>I have found the same shape everywhere since.</p>

          <p>When I rebuilt my CV after nine years inside one company, the first version was basic, and it needed to be, because a basic CV that exists collects feedback and a great CV that lives in your head collects nothing. It got good when I asked friends for feedback. It got great when Jason Greene, a mentor from ADP List, talked me out of rewriting it for every single role, advice I should have taken sooner, and let one sharp version do the work instead. It gets invitations now.</p>

          <p>My portfolio ran the same three states, in order. Version one was basic: I was only just learning to vibe-code, and it showed. It got good when I took it to former Amazon colleagues in my network and learned, from their feedback, to push my own taste and personality back into what the AI generated instead of shipping its defaults. It got great when I filled it with the real thing: project pieces, images, the evidence rather than the promise.</p>

          <p>Basic first. Then good. Then, sometimes, great.</p>

          <h2>What this newsletter does with it</h2>

          <p>Every issue here is one true story from practice, one lesson, and one rep you can run the same day. The stories will not be about perfect work. They will be about which level the work was really on, how I knew, and what moving up one level actually cost, in hours and in pride.</p>

          <p>Accessibility runs through all of it, from your first line of alt text to expert-level auditing, because that is the discipline that taught me the method in the first place, and because it is where the distance between basic and great decides whether a real person can use the thing at all.</p>

          <p>And I will say this plainly now, so you never have to catch me at it: most weeks, the great version does not ship. I would rather tell you that in the first post than let you find it out by counting.</p>

          <h2>This week's rep</h2>

          <div className="callout">
            <p>Not homework. A rep, the kind you do at the gym: small, repeated, compounding. There will be one at the end of every issue.</p>
            <p>Take one thing you shipped this week. Anything. Write three lines: what its basic version required, what would have made it good, what great would have looked like. Do not fix anything yet. If you cannot name the basic version, that is the finding, and it is worth more than the fix.</p>
            <p><b>Basic is not a smaller word than great. It is only the earlier one.</b> So the question is not whether your work is basic. It is whether you can stand in front of it and say so.</p>
          </div>

          <p className="sig">— Alexandra</p>
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
              <span className="mask" style={{ WebkitMaskImage: `url(${fiverrLogoAsset.url})`, maskImage: `url(${fiverrLogoAsset.url})` }} aria-hidden="true" />
            </a>
            <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="ext icon" aria-label="LinkedIn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14zM8.339 18.338V9.883H5.667v8.455h2.672zM7.003 8.721a1.548 1.548 0 1 0 0-3.096 1.548 1.548 0 0 0 0 3.096zm11.335 9.617v-4.63c0-2.417-1.29-3.541-3.011-3.541-1.389 0-2.011.764-2.358 1.3v-1.115h-2.672c.035.755 0 8.455 0 8.455h2.672v-4.72c0-.24.017-.48.088-.652.194-.48.633-.977 1.372-.977.968 0 1.355.738 1.355 1.82v4.53h2.554z"/></svg>
            </a>
            <a href={SUBSTACK_URL} target="_blank" rel="noopener noreferrer" className="ext icon" aria-label="Substack">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.539 24V10.812H1.46zM22.539 0H1.46v2.836h21.08V0z"/></svg>
            </a>
          </div>
          <div className="fine">© 2026 Alexa C. — UK</div>
        </div>
      </footer>
    </div>
  );
}