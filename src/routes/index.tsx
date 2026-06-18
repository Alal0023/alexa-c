import { createFileRoute } from "@tanstack/react-router";
import studioAsset from "../assets/alexa-studio.png.asset.json";
import wideAsset from "../assets/alexa-wide.png.asset.json";

const DESCRIPTION =
  "Senior product design without the agency price tag. Compliant, conversion-ready design — built in code. EAA & WCAG audits, AI-native UX, design systems.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Alexa C. — Compliant, conversion-ready design, built in code." },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: "Alexa C. — Senior Design Lead" },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:image", content: studioAsset.url },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Alexa C. — Senior Design Lead" },
      { name: "twitter:description", content: DESCRIPTION },
      { name: "twitter:image", content: studioAsset.url },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: AuroraLanding,
});

const CSS = `
.aurora-root{
  --bg:#0C0A18; --surface:#15122A; --surface-2:#120F24; --ink:#F3EEFF; --muted:#A99FC4;
  --line:#271F44; --line-soft:#1E1838; --radius:22px;
  --grad:linear-gradient(100deg,#FF6FD8,#9B5CFF 38%,#36E0C8 70%,#FFC24B);
  --grad-tight:linear-gradient(100deg,#FF6FD8 0%,#C66CEA 50%,#9B5CFF 100%);
  --jakarta:'Plus Jakarta Sans',system-ui,sans-serif; --mono:'Space Mono',monospace;
  --shadow:0 30px 70px -34px rgba(0,0,0,.7); --glow:0 0 70px rgba(155,92,255,.28);
  background:var(--bg); color:var(--ink); font-family:var(--jakarta);
  -webkit-font-smoothing:antialiased; text-rendering:optimizeLegibility;
  min-height:100vh;
}
.aurora-root *,.aurora-root *::before,.aurora-root *::after{ box-sizing:border-box; }
.aurora-root a{ color:inherit; text-decoration:none; }
.aurora-root .grad{ background:var(--grad); -webkit-background-clip:text; background-clip:text; color:transparent; }
.aurora-root .grad-t{ background:var(--grad-tight); -webkit-background-clip:text; background-clip:text; color:transparent; }
.aurora-root .wrap{ max-width:1240px; margin:0 auto; padding:0 48px; }
.aurora-root .eyebrow{ font-family:var(--mono); font-size:14px; letter-spacing:.18em; text-transform:uppercase; color:var(--muted); }
.aurora-root .aura{ position:absolute; border-radius:50%; filter:blur(90px); opacity:.34; z-index:0; pointer-events:none; }

.aurora-root nav{ position:sticky; top:0; z-index:50; backdrop-filter:blur(14px); background:rgba(12,10,24,.85); border-bottom:1px solid var(--line); }
.aurora-root nav .row{ display:flex; align-items:center; justify-content:space-between; height:78px; }
.aurora-root nav .logo{ font-weight:800; font-size:24px; letter-spacing:-.02em; }
.aurora-root nav .menu{ display:flex; gap:36px; font-size:16px; color:var(--muted); font-weight:600; }
.aurora-root nav .menu a:hover{ color:var(--ink); }
.aurora-root nav .cta{ font-weight:800; font-size:16px; padding:12px 24px; border-radius:100px; background:var(--grad-tight); color:#0C0A18; box-shadow:var(--shadow); }

.aurora-root .hero{ position:relative; overflow:hidden; padding:90px 0 70px; }
.aurora-root .hero .aura.a1{ width:620px; height:620px; background:#7D5CFF; top:-200px; left:-160px; }
.aurora-root .hero .aura.a2{ width:540px; height:540px; background:#FF6FD8; top:-160px; right:-140px; }
.aurora-root .hero .aura.a3{ width:520px; height:520px; background:#36E0C8; bottom:-260px; left:24%; opacity:.22; }
.aurora-root .hero .grid{ position:relative; z-index:2; display:grid; grid-template-columns:1.08fr .92fr; gap:60px; align-items:center; }
.aurora-root .hero .pill{ display:inline-flex; align-items:center; gap:10px; padding:11px 22px; border-radius:100px;
  background:var(--surface); border:1px solid var(--line); box-shadow:var(--shadow);
  font-family:var(--mono); font-size:13px; letter-spacing:.08em; text-transform:uppercase; color:var(--ink); }
.aurora-root .hero .pill .dot{ width:10px; height:10px; border-radius:50%; background:var(--grad-tight); }
.aurora-root .hero h1{ font-weight:800; font-size:88px; line-height:.95; letter-spacing:-.04em; margin:26px 0 0; }
.aurora-root .hero p.lede{ font-size:24px; line-height:1.5; color:var(--muted); max-width:600px; margin:26px 0 0; font-weight:500; }
.aurora-root .hero p.lede b{ color:var(--ink); font-weight:800; }
.aurora-root .hero .btns{ display:flex; gap:16px; margin-top:36px; flex-wrap:wrap; }
.aurora-root .btn{ font-weight:800; font-size:19px; padding:17px 34px; border-radius:100px; display:inline-flex; align-items:center; gap:10px; cursor:pointer; transition:transform .2s ease; }
.aurora-root .btn:hover{ transform:translateY(-2px); }
.aurora-root .btn.grad{ background:var(--grad-tight); color:#0C0A18; box-shadow:var(--shadow); -webkit-background-clip:border-box; background-clip:border-box; }
.aurora-root .btn.ghost{ background:var(--surface); color:var(--ink); border:1px solid var(--line); }
.aurora-root .hero .vis{ position:relative; display:flex; align-items:center; justify-content:center; min-height:480px; }
.aurora-root .hero .ring{ position:absolute; border-radius:50%; border:1px solid #37225C; }
.aurora-root .hero .portrait{ width:400px; height:400px; border-radius:50%; object-fit:cover; object-position:center 18%;
  position:relative; z-index:2; box-shadow:var(--shadow), var(--glow); border:2px solid #37225C; }
.aurora-root .hero .badge{ position:absolute; z-index:3; background:var(--surface); border:1px solid var(--line); border-radius:16px;
  padding:14px 18px; box-shadow:var(--shadow); }
.aurora-root .hero .badge .v{ font-weight:800; font-size:26px; }
.aurora-root .hero .badge .l{ font-family:var(--mono); font-size:12px; letter-spacing:.06em; color:var(--muted); text-transform:uppercase; margin-top:2px; }

.aurora-root .trust{ border-top:1px solid var(--line); border-bottom:1px solid var(--line); background:var(--surface-2); }
.aurora-root .trust .row{ display:flex; align-items:center; justify-content:space-between; gap:30px; padding:26px 0; flex-wrap:wrap; }
.aurora-root .trust .item{ font-family:var(--mono); font-size:15px; letter-spacing:.04em; color:var(--muted); display:flex; align-items:center; gap:10px; }
.aurora-root .trust .item b{ color:var(--ink); }
.aurora-root .trust .item .d{ width:7px; height:7px; border-radius:50%; background:var(--grad-tight); }

.aurora-root section.block{ position:relative; padding:104px 0; overflow:hidden; }
.aurora-root .shead{ max-width:760px; margin-bottom:54px; }
.aurora-root .shead h2{ font-weight:800; font-size:58px; line-height:1.02; letter-spacing:-.03em; margin:14px 0 0; }
.aurora-root .shead p{ font-size:21px; line-height:1.5; color:var(--muted); margin:16px 0 0; font-weight:500; }

.aurora-root .svc-grid{ display:grid; grid-template-columns:repeat(2,1fr); gap:24px; position:relative; z-index:2; }
.aurora-root .svc{ background:var(--surface); border:1px solid var(--line); border-radius:var(--radius); padding:38px;
  display:flex; flex-direction:column; gap:14px; transition:transform .25s ease, border-color .25s ease; }
.aurora-root .svc:hover{ transform:translateY(-6px); border-color:#3a2e63; }
.aurora-root .svc .no{ font-family:var(--mono); font-size:14px; letter-spacing:.1em; }
.aurora-root .svc h3{ font-weight:800; font-size:32px; margin:0; letter-spacing:-.01em; }
.aurora-root .svc p{ font-size:18px; line-height:1.5; color:var(--muted); margin:0; font-weight:500; }
.aurora-root .svc .meta{ display:flex; gap:22px; margin-top:8px; padding-top:18px; border-top:1px solid var(--line); }
.aurora-root .svc .meta .m .mv{ font-weight:800; font-size:18px; }
.aurora-root .svc .meta .m .ml{ font-family:var(--mono); font-size:12px; letter-spacing:.06em; color:var(--muted); text-transform:uppercase; margin-top:3px; }
.aurora-root .svc .hot{ margin-top:auto; font-family:var(--mono); font-size:13px; letter-spacing:.06em; text-transform:uppercase; }

.aurora-root .about .aura.a1{ width:540px; height:540px; background:#9B5CFF; top:-120px; right:-160px; opacity:.22; }
.aurora-root .about .grid{ position:relative; z-index:2; display:grid; grid-template-columns:.82fr 1.18fr; gap:62px; align-items:center; }
.aurora-root .about .portrait{ border-radius:var(--radius); overflow:hidden; border:1px solid var(--line); box-shadow:var(--shadow); aspect-ratio:4/5; }
.aurora-root .about .portrait img{ width:100%; height:100%; object-fit:cover; object-position:center 18%; display:block; }
.aurora-root .about ul{ list-style:none; padding:0; margin:28px 0 0; display:flex; flex-direction:column; gap:20px; }
.aurora-root .about li{ display:grid; grid-template-columns:62px 1fr; gap:18px; align-items:start; }
.aurora-root .about li .n{ font-family:var(--mono); font-size:13px; color:#0C0A18; background:var(--grad-tight); border-radius:8px; padding:7px 0; text-align:center; letter-spacing:.04em; font-weight:700; }
.aurora-root .about li .t{ font-size:21px; line-height:1.45; }
.aurora-root .about li .t b{ font-weight:700; }
.aurora-root .about li .t span{ color:var(--muted); }

.aurora-root .proc-grid{ display:grid; grid-template-columns:repeat(4,1fr); gap:20px; position:relative; z-index:2; }
.aurora-root .proc{ background:var(--surface-2); border:1px solid var(--line); border-radius:var(--radius); padding:30px; }
.aurora-root .proc .pn{ font-weight:800; font-size:40px; line-height:1; }
.aurora-root .proc h4{ font-weight:700; font-size:22px; margin:18px 0 8px; letter-spacing:-.01em; }
.aurora-root .proc p{ font-size:16px; line-height:1.45; color:var(--muted); margin:0; font-weight:500; }

.aurora-root .proof{ background:var(--surface-2); border-top:1px solid var(--line); border-bottom:1px solid var(--line); }
.aurora-root .proof .grid{ display:grid; grid-template-columns:repeat(3,1fr); gap:24px; position:relative; z-index:2; }
.aurora-root .quote{ background:var(--surface); border:1px solid var(--line); border-radius:var(--radius); padding:34px; display:flex; flex-direction:column; gap:20px; }
.aurora-root .quote .stars{ font-size:18px; letter-spacing:3px; }
.aurora-root .quote .q{ font-size:21px; line-height:1.45; font-weight:600; }
.aurora-root .quote .q em{ font-style:normal; background:var(--grad); -webkit-background-clip:text; background-clip:text; color:transparent; }
.aurora-root .quote .who{ display:flex; align-items:center; gap:12px; margin-top:auto; }
.aurora-root .quote .who img{ width:46px; height:46px; border-radius:50%; object-fit:cover; }
.aurora-root .quote .who .nm{ font-weight:700; font-size:16px; }
.aurora-root .quote .who .nm span{ display:block; font-family:var(--mono); font-size:12px; color:var(--muted); letter-spacing:.04em; margin-top:2px; }

.aurora-root .stats{ padding:84px 0; position:relative; overflow:hidden; }
.aurora-root .stats .aura.a1{ width:600px; height:600px; background:#36E0C8; bottom:-300px; left:10%; opacity:.16; }
.aurora-root .stats .aura.a2{ width:520px; height:520px; background:#FF6FD8; top:-280px; right:6%; opacity:.18; }
.aurora-root .stats .grid{ position:relative; z-index:2; display:grid; grid-template-columns:repeat(4,1fr); gap:30px; text-align:center; }
.aurora-root .stats .s .v{ font-weight:800; font-size:74px; line-height:1; letter-spacing:-.03em; }
.aurora-root .stats .s .l{ font-size:17px; color:var(--muted); margin-top:10px; font-weight:600; }

.aurora-root .cta-final{ position:relative; overflow:hidden; padding:120px 0; }
.aurora-root .cta-final .aura.a1{ width:720px; height:720px; background:#7D5CFF; top:-260px; left:50%; transform:translateX(-50%); opacity:.3; }
.aurora-root .cta-card{ position:relative; z-index:2; background:linear-gradient(160deg,#1B1533,#120F24); border:1px solid var(--line);
  border-radius:34px; padding:74px 70px; text-align:center; box-shadow:var(--shadow), var(--glow); }
.aurora-root .cta-card h2{ font-weight:800; font-size:66px; line-height:1.0; letter-spacing:-.035em; margin:14px 0 0; }
.aurora-root .cta-card p{ font-size:22px; color:var(--muted); margin:22px auto 0; max-width:620px; line-height:1.5; font-weight:500; }
.aurora-root .cta-card .btns{ display:flex; gap:16px; justify-content:center; margin-top:40px; flex-wrap:wrap; }

.aurora-root footer{ border-top:1px solid var(--line); padding:52px 0; }
.aurora-root footer .row{ display:flex; align-items:center; justify-content:space-between; gap:30px; flex-wrap:wrap; }
.aurora-root footer .logo{ font-weight:800; font-size:22px; }
.aurora-root footer .links{ display:flex; gap:28px; font-size:15px; color:var(--muted); font-weight:600; }
.aurora-root footer .links a:hover{ color:var(--ink); }
.aurora-root footer .fine{ font-family:var(--mono); font-size:13px; color:var(--muted); letter-spacing:.04em; }

@keyframes auroraFadeUp{ from{ opacity:0; transform:translateY(16px);} to{ opacity:1; transform:none;} }
.aurora-root .hero h1,.aurora-root .hero p.lede,.aurora-root .hero .pill,.aurora-root .hero .btns,.aurora-root .shead h2,.aurora-root .shead p,.aurora-root .cta-card h2,.aurora-root .cta-card p{
  animation: auroraFadeUp .9s cubic-bezier(.2,.7,.2,1) both;
}
.aurora-root .hero p.lede{ animation-delay:.12s; }
.aurora-root .hero .btns{ animation-delay:.22s; }
.aurora-root .shead p{ animation-delay:.1s; }
.aurora-root .hero .badge{ animation: auroraFadeUp 1s cubic-bezier(.2,.7,.2,1) both; }
.aurora-root .hero .badge:nth-of-type(1){ animation-delay:.35s; }
.aurora-root .hero .badge:nth-of-type(2){ animation-delay:.5s; }
@media (prefers-reduced-motion: reduce){
  .aurora-root *{ animation:none !important; transition:none !important; }
}

/* Swiss 12-col baseline grid alignment */
.aurora-root .wrap{ display:block; }
.aurora-root .hero .grid,.aurora-root .about .grid,.aurora-root .svc-grid,.aurora-root .proc-grid,.aurora-root .proof .grid,.aurora-root .stats .grid,.aurora-root .trust .row{ column-gap:32px; }

@media (max-width:980px){
  .aurora-root .wrap{ padding:0 28px; }
  .aurora-root .hero .grid,.aurora-root .about .grid{ grid-template-columns:1fr; }
  .aurora-root .hero .vis{ order:-1; }
  .aurora-root .svc-grid,.aurora-root .proc-grid,.aurora-root .proof .grid,.aurora-root .stats .grid{ grid-template-columns:1fr 1fr; }
  .aurora-root .hero h1{ font-size:64px; }
  .aurora-root .shead h2{ font-size:44px; }
  .aurora-root .cta-card{ padding:54px 28px; }
  .aurora-root .cta-card h2{ font-size:44px; }
}
@media (max-width:620px){
  .aurora-root nav .menu{ display:none; }
  .aurora-root .svc-grid,.aurora-root .proc-grid,.aurora-root .proof .grid,.aurora-root .stats .grid{ grid-template-columns:1fr; }
  .aurora-root .hero h1{ font-size:52px; }
  .aurora-root .hero .portrait{ width:300px; height:300px; }
}
`;

function AuroraLanding() {
  return (
    <div className="aurora-root">
      <style dangerouslySetInnerHTML={{ __html: CSS }} />

      <nav>
        <div className="wrap row">
          <div className="logo">Alexa <span className="grad-t">C.</span></div>
          <div className="menu">
            <a href="#services">Services</a>
            <a href="#about">About</a>
            <a href="#proof">Work</a>
            <a href="#contact">Contact</a>
          </div>
          <a href="#contact" className="cta">Book a call →</a>
        </div>
      </nav>

      <header className="hero">
        <div className="aura a1"></div><div className="aura a2"></div><div className="aura a3"></div>
        <div className="wrap grid">
          <div>
            <span className="pill"><span className="dot"></span> Design systems · Accessibility · AI UX</span>
            <h1>Compliant, conversion-ready design, <span className="grad">built in code.</span></h1>
            <p className="lede">Senior product design without the agency price tag. I turn brand rules into <b>production-ready, accessible systems</b> — and ship working AI apps while others are still in Figma.</p>
            <div className="btns">
              <a href="#contact" className="btn grad">Start a project →</a>
              <a href="#services" className="btn ghost">View the gigs</a>
            </div>
          </div>
          <div className="vis">
            <div className="ring" style={{ width: 440, height: 440 }}></div>
            <div className="ring" style={{ width: 560, height: 560 }}></div>
            <img className="portrait" src={studioAsset.url} alt="Alexa C., senior product designer" />
            <div className="badge" style={{ top: "8%", right: "2%" }}><div className="v grad-t">95%</div><div className="l">A11y coverage</div></div>
            <div className="badge" style={{ bottom: "9%", left: "-2%" }}><div className="v grad-t">15 yrs</div><div className="l">Ex-Amazon lead</div></div>
          </div>
        </div>
      </header>

      <div className="trust">
        <div className="wrap row">
          <div className="item"><span className="d"></span> <b>Ex-Amazon</b>&nbsp;Sr. Design Lead</div>
          <div className="item"><span className="d"></span> WCAG 2.1 AA &amp; <b>EAA</b> audits</div>
          <div className="item"><span className="d"></span> <b>Lovable</b> · Figma · Framer</div>
          <div className="item"><span className="d"></span> <b>4.9★</b> across projects</div>
        </div>
      </div>

      <section className="block" id="services">
        <div className="wrap">
          <div className="shead">
            <span className="eyebrow">What sells in 2026</span>
            <h2>Four gigs, <span className="grad">one specialist.</span></h2>
            <p>Each offer is scoped, fixed-price and shipped with accessibility built in — not bolted on at the end.</p>
          </div>
          <div className="svc-grid">
            <div className="svc">
              <div className="no grad-t">GIG A</div>
              <h3>Lovable &amp; AI app builds</h3>
              <p>A working full-stack MVP with a real backend in days — not a clickable mockup. Vibe-coded, then hardened by a senior eye.</p>
              <div className="meta"><div className="m"><div className="mv grad">10 days</div><div className="ml">Typical build</div></div><div className="m"><div className="mv grad">React · DB</div><div className="ml">Real stack</div></div></div>
              <div className="hot grad-t">▲ excellent demand</div>
            </div>
            <div className="svc">
              <div className="no grad-t">GIG B</div>
              <h3>EAA &amp; WCAG audits</h3>
              <p>Manual, legal-grade accessibility audits with a prioritised fix list. The European Accessibility Act is now enforced — this is the 2026 goldmine.</p>
              <div className="meta"><div className="m"><div className="mv grad">AA / AAA</div><div className="ml">WCAG 2.1</div></div><div className="m"><div className="mv grad">5 days</div><div className="ml">Turnaround</div></div></div>
              <div className="hot grad-t">▲ legally mandated</div>
            </div>
            <div className="svc">
              <div className="no grad-t">GIG C</div>
              <h3>AI-native product UX</h3>
              <p>Interfaces for agents and AI products — making automation feel controllable and trustworthy. The fastest-rising design niche of the year.</p>
              <div className="meta"><div className="m"><div className="mv grad">Agents</div><div className="ml">Specialism</div></div><div className="m"><div className="mv grad">Prototype</div><div className="ml">+ handoff</div></div></div>
              <div className="hot grad-t">▲ fastest-rising</div>
            </div>
            <div className="svc">
              <div className="no grad-t">GIG D</div>
              <h3>Design systems in code</h3>
              <p>Tokenised Figma → Framer / Webflow systems with accessibility built into every component, and docs your developers will actually use.</p>
              <div className="meta"><div className="m"><div className="mv grad">Tokens</div><div className="ml">Figma → code</div></div><div className="m"><div className="mv grad">Docs</div><div className="ml">Dev-ready</div></div></div>
              <div className="hot grad-t">▲ compounding value</div>
            </div>
          </div>
        </div>
      </section>

      <section className="block about" id="about">
        <div className="aura a1"></div>
        <div className="wrap grid">
          <div className="portrait"><img src={wideAsset.url} alt="Alexa C. in studio" /></div>
          <div>
            <span className="eyebrow">Who I am</span>
            <h2 style={{ fontWeight: 800, fontSize: 54, lineHeight: 1.02, letterSpacing: "-.03em", margin: "14px 0 0" }}>A design lead who ships <span className="grad">systems,</span> not screenshots.</h2>
            <p style={{ fontSize: 21, lineHeight: 1.5, color: "var(--muted)", margin: "18px 0 0", fontWeight: 500 }}>Fifteen years in design leadership — nearly a decade scaling design maturity and accessibility across global teams at Amazon. I turn brand rules into production-ready, compliant, interactive systems.</p>
            <ul>
              <li><span className="n">A11Y</span><span className="t"><b>Raised accessibility coverage 80% → 95%</b> <span>across a multi-brand creative org.</span></span></li>
              <li><span className="n">EAA</span><span className="t"><b>Manual WCAG 2.1 AA &amp; EAA audits</b> <span>— not automated widgets that fail in court.</span></span></li>
              <li><span className="n">AI</span><span className="t"><b>AI-native prototyping &amp; code handoff</b> <span>via Lovable, Figma and Framer.</span></span></li>
            </ul>
          </div>
        </div>
      </section>

      <section className="block" id="process" style={{ background: "var(--surface-2)", borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)" }}>
        <div className="wrap">
          <div className="shead">
            <span className="eyebrow">How it works</span>
            <h2>From brief to <span className="grad">shipped.</span></h2>
            <p>A calm, four-step path with a fixed price agreed up front — no surprises, no scope creep.</p>
          </div>
          <div className="proc-grid">
            <div className="proc"><div className="pn grad">01</div><h4>Discover</h4><p>A short call to scope the goal, audience and success metric. You get a fixed quote and timeline.</p></div>
            <div className="proc"><div className="pn grad">02</div><h4>Design</h4><p>Systemised, accessible design in real tokens and components — reviewed against a clear quality bar.</p></div>
            <div className="proc"><div className="pn grad">03</div><h4>Build</h4><p>Production-ready code or a hardened Lovable app, with accessibility verified before handoff.</p></div>
            <div className="proc"><div className="pn grad">04</div><h4>Handoff</h4><p>Docs, a fix list and a walkthrough so your team can run with it long after I'm gone.</p></div>
          </div>
        </div>
      </section>

      <section className="block proof" id="proof">
        <div className="wrap">
          <div className="shead">
            <span className="eyebrow">Proof</span>
            <h2>Buyers come back <span className="grad">for the rigour.</span></h2>
          </div>
          <div className="grid">
            <div className="quote">
              <div className="stars grad">★★★★★</div>
              <div className="q">“She resolved our EAA risk <em>and</em> sped up the build. We shipped compliant in a fortnight.”</div>
              <div className="who"><img src={studioAsset.url} alt="" /><div className="nm">Product Lead<span>// SaaS · UK</span></div></div>
            </div>
            <div className="quote">
              <div className="stars grad">★★★★★</div>
              <div className="q">“The design system <em>actually compiled.</em> Our devs used it day one with zero back-and-forth.”</div>
              <div className="who"><img src={studioAsset.url} alt="" /><div className="nm">Founder<span>// AI startup</span></div></div>
            </div>
            <div className="quote">
              <div className="stars grad">★★★★★</div>
              <div className="q">“Turned a vague idea into a <em>working AI app</em> in ten days. Genuinely senior work.”</div>
              <div className="who"><img src={studioAsset.url} alt="" /><div className="nm">Operator<span>// Fintech</span></div></div>
            </div>
          </div>
        </div>
      </section>

      <section className="stats">
        <div className="aura a1"></div><div className="aura a2"></div>
        <div className="wrap grid">
          <div className="s"><div className="v grad">15</div><div className="l">Years in design</div></div>
          <div className="s"><div className="v grad">95%</div><div className="l">Accessibility coverage</div></div>
          <div className="s"><div className="v grad">4.9★</div><div className="l">Average rating</div></div>
          <div className="s"><div className="v grad">10d</div><div className="l">From brief to MVP</div></div>
        </div>
      </section>

      <section className="cta-final" id="contact">
        <div className="aura a1"></div>
        <div className="wrap">
          <div className="cta-card">
            <span className="eyebrow">Open for Q3</span>
            <h2>Let's build something <span className="grad">that ships.</span></h2>
            <p>Tell me what you're making. I'll come back with a fixed price, a timeline, and a plan to make it accessible and fast.</p>
            <div className="btns">
              <a href="mailto:hello@alexac.studio" className="btn grad">hello@alexac.studio</a>
              <a href="#" className="btn ghost">See Fiverr profile →</a>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="wrap row">
          <div className="logo">Alexa <span className="grad-t">C.</span></div>
          <div className="links">
            <a href="#services">Services</a>
            <a href="#about">About</a>
            <a href="#proof">Work</a>
            <a href="#contact">Contact</a>
          </div>
          <div className="fine">© 2026 · Design Systems Studio · Remote</div>
        </div>
      </footer>
    </div>
  );
}
