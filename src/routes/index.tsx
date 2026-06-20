import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState, type ReactNode } from "react";
import studioAsset from "../assets/alexa-studio.png.asset.json";
import wideAsset from "../assets/alexa-wide.png.asset.json";
import sidneyAsset from "../assets/sidney.png.asset.json";
import ryanAsset from "../assets/ryan.png.asset.json";
import elodieAsset from "../assets/elodie.png.asset.json";
import volleyAdsAsset from "../assets/volley-ads.png.asset.json";

const DESCRIPTION =
  "Production-ready apps and landing pages for early-stage startups — real code, accessible by default, shipped in 5–10 days by an ex-Amazon senior designer.";

const FAQS: [string, string][] = [
  ["How does pricing work?", "Every project starts with a short call to scope the work. I send a fixed price before anything begins — no hourly billing, no surprise invoices, no creeping scope."],
  ["Can I see examples of your work before booking?", "Yes — this page and the linked live build are both real, working examples of the code and accessibility standard you'd be getting."],
  ["What's included in the price?", "For apps: design, full-stack build (real code, real database), an accessibility review, and handoff docs. For landing pages: design, build, an accessibility review, and a walkthrough so your team can run it after I'm gone."],
  ["How and when do I pay?", "50% upfront to secure your slot and kick off work, 50% on handoff once everything's signed off. No surprise invoices in between — the price agreed on the discovery call is the price you pay."],
  ["What if I don't like the result?", "Every project includes 2 rounds of revisions as standard, built into the fixed price — no extra charge. If you want changes beyond that, we'll agree a quick add-on price before I start, same as any other scope change."],
  ["What if my project ends up bigger than expected?", "If something genuinely changes scope mid-build, I'll flag it and requote before doing any extra work — you'll never get a bill you didn't agree to first."],
  ["You mention AI tools (Lovable, Claude Code, UX Pilot) — is this AI-generated work?", "I use AI tools to build faster, the way any senior engineer uses modern tooling — but nothing ships without me checking it line by line. Accessibility, code quality, and structure are all manually verified, not just generated and handed over."],
  ["Can I get just a landing page, or just an app?", "Both are separate offers — see the two options above. Landing pages typically take 5 days, full apps typically take 10."],
  ["What happens after handoff?", "You get the code, documentation, and a walkthrough call. The product is yours — no lock-in, no required ongoing retainer (though I'm available if you want continued support)."],
  ["Where are you based?", "UK-based, working UK hours (GMT/BST)."],
  ["I found you on Fiverr or LinkedIn — does anything change if I book directly instead?", "No — same process, same fixed-price approach, same accessibility standard either way."],
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Alexa C. — Apps & landing pages, live in 5–10 days." },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: "Alexa C. — Apps & landing pages, shipped in 5–10 days" },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://alexa-c.lovable.app/" },
      { property: "og:image", content: studioAsset.url },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Alexa C. — Apps & landing pages, shipped in 5–10 days" },
      { name: "twitter:description", content: DESCRIPTION },
      { name: "twitter:image", content: studioAsset.url },
    ],
    links: [{ rel: "canonical", href: "https://alexa-c.lovable.app/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Alexa C.",
          jobTitle: "Senior Designer & App Developer",
          description: DESCRIPTION,
          url: "https://alexa-c.lovable.app/",
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: FAQS.map(([q, a]) => ({
            "@type": "Question",
            name: q,
            acceptedAnswer: { "@type": "Answer", text: a },
          })),
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          provider: { "@type": "Person", name: "Alexa C." },
          name: "Landing pages & apps, shipped in 5–10 days",
          areaServed: "Worldwide",
          description: DESCRIPTION,
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "Offers",
            itemListElement: [
              { "@type": "Offer", itemOffered: { "@type": "Service", name: "Landing Pages" } },
              { "@type": "Offer", itemOffered: { "@type": "Service", name: "Apps" } },
            ],
          },
        }),
      },
    ],
  }),
  component: AuroraLanding,
});

const CSS = `
.aurora-root{
  --bg:#0C0A18; --surface:#15122A; --surface-2:#120F24; --ink:#F3EEFF; --muted:#A99FC4;
  --line:#271F44; --line-soft:#1E1838; --radius:22px;
  --grad:linear-gradient(100deg,#FF6FD8,#9B5CFF 38%,#36E0C8 70%,#FFC24B);
  --grad-tight:linear-gradient(100deg,#FF6FD8 0%,#C66CEA 50%,#9B5CFF 100%);
  --grad-pv:linear-gradient(100deg,#FF6FD8 0%,#9B5CFF 100%);
  --grad-vt:linear-gradient(100deg,#9B5CFF 0%,#36E0C8 100%);
  --grad-ta:linear-gradient(100deg,#36E0C8 0%,#FFC24B 100%);
  --grad-ap:linear-gradient(100deg,#FFC24B 0%,#FF6FD8 100%);
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
.aurora-root .stat-grad{ background:var(--grad); -webkit-background-clip:text; background-clip:text; color:transparent; display:inline-block; }
.aurora-root .wrap{ max-width:1240px; margin:0 auto; padding:0 48px; }
.aurora-root .eyebrow{ font-family:var(--mono); font-size:14px; letter-spacing:.18em; text-transform:uppercase; color:var(--muted); }
.aurora-root .aura{ position:absolute; border-radius:50%; filter:blur(90px); opacity:.34; z-index:0; pointer-events:none; }

.aurora-root nav{ position:sticky; top:0; z-index:50; backdrop-filter:blur(14px); background:rgba(12,10,24,.85); border-bottom:1px solid var(--line); }
.aurora-root nav .row{ display:flex; align-items:center; justify-content:space-between; height:78px; }
.aurora-root nav .logo{ font-weight:800; font-size:24px; letter-spacing:-.02em; }
.aurora-root nav .menu{ display:flex; gap:36px; font-size:16px; color:var(--muted); font-weight:600; }
.aurora-root nav .menu a:hover{ color:var(--ink); }
.aurora-root nav .cta{ font-weight:800; font-size:16px; padding:12px 24px; border-radius:100px; background:var(--grad-vt); color:#0C0A18; box-shadow:var(--shadow); transition:transform .25s ease, box-shadow .25s ease; }
.aurora-root nav .cta:hover{ transform:translateY(-2px); box-shadow:0 18px 36px -14px rgba(54,224,200,.5); }

.aurora-root .hero{ position:relative; overflow:hidden; padding:64px 0 110px; }
.aurora-root .hero .aura.a1{ width:620px; height:620px; background:#7D5CFF; top:-200px; left:-160px; }
.aurora-root .hero .aura.a2{ width:540px; height:540px; background:#FF6FD8; top:-160px; right:-140px; }
.aurora-root .hero .aura.a3{ width:520px; height:520px; background:#36E0C8; bottom:-260px; left:24%; opacity:.22; }
.aurora-root .hero .grid{ position:relative; z-index:2; display:grid; grid-template-columns:1.08fr .92fr; gap:60px; align-items:center; }
.aurora-root .hero .pill{ display:inline-flex; align-items:center; gap:10px; padding:11px 22px; border-radius:100px;
  background:var(--surface); border:1px solid var(--line); box-shadow:var(--shadow);
  font-family:var(--mono); font-size:13px; letter-spacing:.08em; text-transform:uppercase; color:var(--ink); }
.aurora-root .hero .pill .dot{ width:10px; height:10px; border-radius:50%; background:var(--grad-tight); }
.aurora-root .hero h1{ font-weight:800; font-size:64px; line-height:.98; letter-spacing:-.04em; margin:20px 0 0; }
.aurora-root .hero h1 .word.grad{ line-height:1.12; padding-bottom:.06em; }
.aurora-root .hero p.lede{ font-size:18px; line-height:1.5; color:var(--muted); max-width:560px; margin:18px 0 0; font-weight:500; }
.aurora-root .hero p.lede b{ color:var(--ink); font-weight:800; }
.aurora-root .hero .btns{ display:flex; gap:16px; margin-top:22px; flex-wrap:wrap; }
.aurora-root .btn{ font-weight:800; font-size:19px; padding:17px 34px; border-radius:100px; display:inline-flex; align-items:center; gap:10px; cursor:pointer; transition:transform .2s ease; }
.aurora-root .btn:hover{ transform:translateY(-2px); }
.aurora-root .btn.grad{ background:var(--grad-pv); color:#0C0A18; box-shadow:var(--shadow); background-size:200% 100%; background-position:0% 50%; transition:background-position .6s ease, transform .25s ease, box-shadow .25s ease; }
.aurora-root .btn.grad:hover{ background-position:100% 50%; transform:translateY(-3px); }
.aurora-root .btn.grad.alt-vt{ background-image:var(--grad-vt); }
.aurora-root .btn.grad.alt-pa{ background-image:var(--grad-pa); }
.aurora-root .btn.grad.alt-ta{ background-image:var(--grad-ta); }
.aurora-root .proof-grid .proof-card .visit{ background:var(--grad-pv); }
.aurora-root .proof-grid .proof-card:nth-child(2) .visit{ background:var(--grad-vt); }
.aurora-root .proof-grid .proof-card:nth-child(3) .visit{ background:var(--grad-ta); }
.aurora-root .proof-grid .proof-card:nth-child(4) .visit{ background:var(--grad-ap); }
.aurora-root .btn.ghost{ background:var(--surface); color:var(--ink); border:1px solid var(--line); }
.aurora-root .hero .vis{ position:relative; display:flex; align-items:center; justify-content:center; min-height:480px; }
.aurora-root .hero .ring{ position:absolute; border-radius:50%; border:1.5px solid #37225C; box-shadow:inset 0 0 0 0 transparent; }
.aurora-root .hero .portrait{ width:400px; height:400px; border-radius:50%; object-fit:cover; object-position:center 18%;
  position:relative; z-index:2; box-shadow:var(--shadow); border:2px solid #37225C; }
.aurora-root .hero .badge{ position:absolute; z-index:3; background:var(--surface); border:1px solid var(--line); border-radius:16px;
  padding:14px 18px; box-shadow:var(--shadow); }
.aurora-root .hero .badge .v{ font-weight:800; font-size:26px; }
.aurora-root .hero .badge .l{ font-family:var(--mono); font-size:12px; letter-spacing:.06em; color:var(--muted); text-transform:uppercase; margin-top:2px; }

.aurora-root .trust{ border-top:1px solid var(--line); border-bottom:1px solid var(--line); background:var(--surface-2); overflow:hidden; }
.aurora-root .trust .row{ display:flex; align-items:center; width:max-content; padding:22px 0; }
.aurora-root .trust .track{ display:flex; align-items:center; width:max-content; animation:trustScroll 22s linear infinite; }
.aurora-root .trust .track:hover{ animation-play-state:paused; }
.aurora-root .trust .item{ font-family:var(--mono); font-size:15px; letter-spacing:.04em; color:var(--muted); display:flex; align-items:center; gap:10px; flex-shrink:0; padding:0 40px; }
.aurora-root .trust .item b{ color:var(--ink); }
.aurora-root .trust .item .d{ width:7px; height:7px; border-radius:50%; background:var(--grad-tight); flex-shrink:0; }
@keyframes trustScroll{ from{ transform:translateX(-50%);} to{ transform:translateX(0);} }

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
.aurora-root .about .grid{ position:relative; z-index:2; display:grid; grid-template-columns:1.05fr 1fr; gap:56px; align-items:stretch; }
.aurora-root .about .portrait{ border-radius:var(--radius); overflow:hidden; border:1px solid var(--line); box-shadow:var(--shadow); align-self:stretch; min-height:100%; }
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
.aurora-root .proc h3{ font-weight:700; font-size:22px; margin:18px 0 8px; letter-spacing:-.01em; }
.aurora-root .proc p{ font-size:16px; line-height:1.45; color:var(--muted); margin:0; font-weight:500; }

.aurora-root .proof{ background:var(--surface-2); border-top:1px solid var(--line); border-bottom:1px solid var(--line); }
.aurora-root .proof .grid{ display:grid; grid-template-columns:repeat(3,1fr); gap:24px; position:relative; z-index:2; }
.aurora-root .quote{ background:var(--surface); border:1px solid var(--line); border-radius:var(--radius); padding:34px; display:flex; flex-direction:column; gap:20px; }
.aurora-root .quote .stars{ font-size:18px; letter-spacing:3px; }
.aurora-root .quote .q{ font-size:21px; line-height:1.45; font-weight:600; }
.aurora-root .quote .q em{ font-style:normal; background:var(--grad); -webkit-background-clip:text; background-clip:text; color:transparent; }
.aurora-root .quote .who{ display:flex; align-items:center; gap:12px; margin-top:auto; }
.aurora-root .quote .who .ava{ width:64px; height:64px; border-radius:50%; overflow:hidden; flex-shrink:0; border:1px solid var(--line); background:var(--surface-2); }
.aurora-root .quote .who .ava img{ width:100%; height:100%; object-fit:cover; object-position:30% 18%; transform:scale(1.9); transform-origin:30% 18%; display:block; }
.aurora-root .quote .who .ava img.ava-sidney{ object-position:55% 5%; transform:scale(1.54) translateY(-10px) translateX(-2px); transform-origin:55% 5%; }
.aurora-root .quote .who .ava img.ava-ryan{ object-position:40% 10%; transform:scale(1.615) translateY(-12px) translateX(-5px); transform-origin:40% 10%; }
.aurora-root .quote .who .ava img.ava-elodie{ object-position:65% 5%; transform:scale(1.9) translateY(-12px); transform-origin:65% 5%; }
.aurora-root .quote .who{ min-width:0; }
.aurora-root .quote .who .nm{ min-width:0; }
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

@keyframes auroraFadeUp{ from{ opacity:0; transform:translateY(34px);} to{ opacity:1; transform:none;} }
@keyframes auroraFloat{ 0%,100%{ transform:translateY(0);} 50%{ transform:translateY(-12px);} }
@keyframes auroraPulseRing{ 0%,100%{ opacity:.55; transform:scale(1);} 50%{ opacity:1; transform:scale(1.02);} }
@keyframes auroraWordIn{ from{ opacity:0; transform:translateY(60%); filter:blur(8px);} to{ opacity:1; transform:none; filter:none;} }
@keyframes auroraGradMove{ 0%,100%{ background-position:0% 50%;} 50%{ background-position:100% 50%;} }
@keyframes auroraSheen{ 0%{ transform:translateX(-120%) skewX(-20deg);} 60%,100%{ transform:translateX(220%) skewX(-20deg);} }
@keyframes auroraRiseBlur{ from{ opacity:0; transform:translateY(70px) scale(.96);} to{ opacity:1; transform:none;} }
@keyframes auroraSlideL{ from{ opacity:0; transform:translateX(-90px) rotate(-1.5deg);} to{ opacity:1; transform:none;} }
@keyframes auroraSlideR{ from{ opacity:0; transform:translateX(90px) rotate(1.5deg);} to{ opacity:1; transform:none;} }
@keyframes auroraZoomIn{ from{ opacity:0; transform:scale(.7) rotate(-4deg); filter:blur(12px);} to{ opacity:1; transform:none; filter:none;} }
@keyframes auroraTiltIn{ from{ opacity:0; transform:perspective(900px) rotateX(28deg) translateY(60px); transform-origin:50% 100%;} to{ opacity:1; transform:none;} }
@keyframes auroraCharIn{ from{ opacity:0; transform:translateY(110%) rotate(8deg);} to{ opacity:1; transform:none;} }
@keyframes auroraDrift{ 0%,100%{ transform:translate3d(0,0,0) scale(1);} 50%{ transform:translate3d(30px,-20px,0) scale(1.06);} }
@keyframes auroraOrbit{ from{ transform:rotate(0deg);} to{ transform:rotate(360deg);} }
@keyframes auroraCount{ from{ opacity:0; transform:translateY(40%) scale(.85);} to{ opacity:1; transform:none;} }
@keyframes auroraFadeOnly{ from{ opacity:0;} to{ opacity:1;} }

.aurora-root .word{ display:inline-block; opacity:0; animation: auroraWordIn .9s cubic-bezier(.2,.7,.2,1) both; will-change:transform,opacity,filter; }
.aurora-root .hero .pill{ animation: auroraFadeUp .9s cubic-bezier(.2,.7,.2,1) both; }
.aurora-root .hero .hero-rest{ animation: auroraFadeUp .9s cubic-bezier(.2,.7,.2,1) .85s both; }
.aurora-root .shead h2,.aurora-root .cta-card h2{ animation: auroraFadeUp .9s cubic-bezier(.2,.7,.2,1) both; }
.aurora-root .shead p,.aurora-root .cta-card p{ animation: auroraFadeUp .9s cubic-bezier(.2,.7,.2,1) .18s both; }

.aurora-root .hero .ring{ animation: auroraPulseRing 5s ease-in-out infinite; }
.aurora-root .hero .ring:nth-of-type(2){ animation-delay:1.4s; }

.aurora-root .hero .badge{ animation: auroraFadeUp 1s cubic-bezier(.2,.7,.2,1) 1.3s both, auroraFloat 5.5s ease-in-out 1.5s infinite; }
.aurora-root .hero .badge:nth-of-type(2){ animation-delay: 1.5s, 1.8s; }

/* Keep gradient text static so it never overrides word/reveal animations */
.aurora-root .grad,.aurora-root .grad-t{ background-size:100% 100%; display:inline-block; }
/* Never apply transforms/filters to gradient-clipped text — it renders as flipped/garbled glyphs on some GPUs */
.aurora-root .stats .v.grad,
.aurora-root .proc-line .step h3,
.aurora-root .proc-line .step .circle{ transform:none !important; filter:none !important; }
.aurora-root .stats [data-stagger].in-view > *{ animation:auroraFadeOnly .8s ease both; }
.aurora-root .stats [data-stagger].in-view > *:nth-child(1){ animation-delay:.05s; }
.aurora-root .stats [data-stagger].in-view > *:nth-child(2){ animation-delay:.18s; }
.aurora-root .stats [data-stagger].in-view > *:nth-child(3){ animation-delay:.31s; }
.aurora-root .stats .v{ transform:none !important; filter:none !important; }
/* Gradient word in hero needs BOTH the reveal animation and visible gradient */
.aurora-root .word.grad{ animation: auroraWordIn .9s cubic-bezier(.2,.7,.2,1) both; }

.aurora-root .btn.grad{ position:relative; overflow:hidden; }

.aurora-root .svc,.aurora-root .proc,.aurora-root .quote{ transition: transform .35s cubic-bezier(.2,.7,.2,1), border-color .35s ease, box-shadow .35s ease; }
.aurora-root .svc:hover,.aurora-root .quote:hover{ transform: translateY(-6px); box-shadow: 0 24px 50px -28px rgba(155,92,255,.35); border-color:#3a2e63; }

/* --- Theatrical scroll reveals (page-wide) --- */
.aurora-root [data-reveal]{ opacity:0; will-change:transform,opacity,filter; }
.aurora-root [data-reveal].in-view{ animation: auroraRiseBlur 1.1s cubic-bezier(.2,.75,.2,1) both; }
.aurora-root [data-reveal="left"].in-view{ animation: auroraSlideL 1.05s cubic-bezier(.2,.75,.2,1) both; }
.aurora-root [data-reveal="right"].in-view{ animation: auroraSlideR 1.05s cubic-bezier(.2,.75,.2,1) both; }
.aurora-root [data-reveal="zoom"].in-view{ animation: auroraZoomIn 1.1s cubic-bezier(.2,.75,.2,1) both; }
.aurora-root [data-reveal="tilt"].in-view{ animation: auroraTiltIn 1.15s cubic-bezier(.2,.75,.2,1) both; }
.aurora-root [data-reveal="count"].in-view{ animation: auroraCount 1s cubic-bezier(.2,.75,.2,1) both; }

/* Stagger children with data-stagger */
.aurora-root [data-stagger] > *{ opacity:0; }
.aurora-root [data-stagger].in-view > *{ animation: auroraRiseBlur .95s cubic-bezier(.2,.75,.2,1) both; }
.aurora-root [data-stagger].in-view > *:nth-child(1){ animation-delay:.05s; }
.aurora-root [data-stagger].in-view > *:nth-child(2){ animation-delay:.18s; }
.aurora-root [data-stagger].in-view > *:nth-child(3){ animation-delay:.31s; }
.aurora-root [data-stagger].in-view > *:nth-child(4){ animation-delay:.44s; }
.aurora-root [data-stagger].in-view > *:nth-child(5){ animation-delay:.57s; }
.aurora-root [data-stagger].in-view > *:nth-child(6){ animation-delay:.7s; }

/* Slower stagger for timeline steps so each dot appears clearly in sequence */
.aurora-root .steps[data-stagger].in-view > *:nth-child(1){ animation-delay:0s; }
.aurora-root .steps[data-stagger].in-view > *:nth-child(2){ animation-delay:.55s; }
.aurora-root .steps[data-stagger].in-view > *:nth-child(3){ animation-delay:1.1s; }
.aurora-root .steps[data-stagger].in-view > *:nth-child(4){ animation-delay:1.65s; }

/* Per-character split headlines */
.aurora-root .split{ display:inline-block; }
.aurora-root .split .ch{ display:inline-block; opacity:0; will-change:transform,opacity; white-space:pre; }
.aurora-root .split.in-view .ch{ animation: auroraCharIn .8s cubic-bezier(.2,.75,.2,1) both; }

/* Only the hero auras get a gentle drift — keeps the rest of the page calm */
.aurora-root .hero .aura{ animation: auroraDrift 18s ease-in-out infinite; }
.aurora-root .hero .aura.a2{ animation-duration:22s; animation-delay:-5s; }
.aurora-root .hero .aura.a3{ animation-duration:26s; animation-delay:-11s; }

/* Card hover gains a magnetic gradient outline */
.aurora-root .svc, .aurora-root .proc, .aurora-root .quote{ position:relative; }
.aurora-root .svc::before, .aurora-root .quote::before{
  content:""; position:absolute; inset:-1px; border-radius:inherit; padding:1px;
  background:var(--grad); -webkit-mask:linear-gradient(#000 0 0) content-box,linear-gradient(#000 0 0);
  -webkit-mask-composite:xor; mask-composite:exclude; opacity:0; transition:opacity .35s ease;
  pointer-events:none;
}
.aurora-root .svc:hover::before, .aurora-root .quote:hover::before{ opacity:.7; }

@media (prefers-reduced-motion: reduce){
  .aurora-root *{ animation:none !important; transition:none !important; }
  .aurora-root [data-reveal], .aurora-root [data-stagger] > *, .aurora-root .split .ch{ opacity:1 !important; }
}

/* Swiss 12-col baseline grid alignment */
.aurora-root .wrap{ display:block; }
.aurora-root .hero .grid,.aurora-root .about .grid,.aurora-root .svc-grid,.aurora-root .proc-grid,.aurora-root .proof .grid,.aurora-root .stats .grid,.aurora-root .trust .row{ column-gap:32px; }

@media (max-width:980px){
  .aurora-root .wrap{ padding:0 28px; }
  .aurora-root .hero .grid,.aurora-root .about .grid{ grid-template-columns:1fr; }
  .aurora-root .svc-grid,.aurora-root .proc-grid,.aurora-root .proof .grid,.aurora-root .stats .grid{ grid-template-columns:1fr 1fr; }
  .aurora-root .hero h1{ font-size:64px; }
  .aurora-root .shead h2{ font-size:44px; }
  .aurora-root .cta-card{ padding:54px 28px; }
  .aurora-root .cta-card h2{ font-size:44px; }
}
@media (max-width:620px){
  .aurora-root nav .menu{ display:none; }
  .aurora-root nav .cta{ display:none; }
  .aurora-root nav .hamb{ display:flex !important; }
  .aurora-root .hero h1{ font-size:52px; }
  .aurora-root .hero .portrait{ width:300px; height:300px; }
}

/* ============ Mobile hamburger + drawer ============ */
.aurora-root nav .hamb{ display:none; width:46px; height:46px; align-items:center; justify-content:center; background:var(--surface); border:1px solid var(--line); border-radius:14px; cursor:pointer; color:var(--ink); }
.aurora-root nav .hamb svg{ width:22px; height:22px; }
.aurora-root .drawer{ position:fixed; inset:0; z-index:100; background:rgba(12,10,24,.96); backdrop-filter:blur(20px); display:flex; flex-direction:column; padding:24px 28px 36px; transform:translateX(100%); transition:transform .35s cubic-bezier(.2,.7,.2,1); }
.aurora-root .drawer.open{ transform:none; }
.aurora-root .drawer .top{ display:flex; align-items:center; justify-content:space-between; height:78px; }
.aurora-root .drawer .close{ width:46px; height:46px; background:var(--surface); border:1px solid var(--line); border-radius:14px; color:var(--ink); font-size:22px; cursor:pointer; display:flex; align-items:center; justify-content:center; }
.aurora-root .drawer .links{ display:flex; flex-direction:column; gap:6px; margin-top:32px; flex:1; }
.aurora-root .drawer .links a{ font-family:var(--mono); font-size:16px; letter-spacing:.18em; text-transform:uppercase; color:var(--muted); padding:18px 0; border-bottom:1px solid var(--line-soft); font-weight:700; }
.aurora-root .drawer .links a:first-child{ border-top:1px solid var(--line-soft); }
.aurora-root .drawer .cta{ display:block; text-align:center; font-weight:800; font-size:18px; padding:18px 24px; border-radius:18px; background:var(--grad-pv); color:#0C0A18; margin-top:24px; }

/* ============ Mobile carousel ============ */
.aurora-root .mcar-ctrl{ display:none; }
.aurora-root .proof-card .visit-float{ display:none; }
@media (max-width:720px){
  .aurora-root .mcar-track{
    display:flex !important;
    grid-template-columns:none !important;
    overflow-x:auto;
    scroll-snap-type:x mandatory;
    gap:16px !important;
    padding:6px 12% 6px 0;
    margin:0 -28px 0 0;
    padding-left:0;
    scrollbar-width:none;
    -webkit-overflow-scrolling:touch;
  }
  .aurora-root .mcar-track::-webkit-scrollbar{ display:none; }
  .aurora-root .mcar-track > *{
    flex:0 0 88%;
    scroll-snap-align:start;
    min-width:0;
  }
  .aurora-root .mcar-ctrl{ display:flex !important; align-items:center; gap:14px; margin-top:22px; max-width:100%; }
  .aurora-root .mcar-pips{ display:flex; align-items:center; justify-content:center; gap:8px; padding:10px 18px; background:var(--surface); border:1px solid var(--line); border-radius:100px; flex:1; min-height:38px; }
  .aurora-root .mcar-pips{ min-width:0; }
  .aurora-root .mcar-pip{ width:6px; height:6px; border-radius:50%; background:var(--muted); opacity:.45; transition:width .3s ease, opacity .3s ease, background .3s ease; flex-shrink:0; }
  .aurora-root .mcar-pip.active{ width:24px; height:6px; border-radius:100px; background:var(--grad-tight); opacity:1; }
  .aurora-root .mcar-btn{ width:42px; height:42px; border-radius:50%; background:var(--surface); border:1px solid var(--line); color:var(--ink); font-size:20px; line-height:1; display:flex; align-items:center; justify-content:center; cursor:pointer; flex-shrink:0; font-family:var(--mono); }
  .aurora-root .mcar-btn:disabled{ opacity:.35; }
  /* Hero: text first then image */
  .aurora-root .hero .vis{ order:1; margin-top:32px; }
  /* Hero portrait constrained so it doesn't visually overflow */
  .aurora-root .hero{ padding:36px 0 56px; }
  .aurora-root .hero .vis{ min-height:340px; }
  .aurora-root .hero .portrait{ width:240px !important; height:240px !important; }
  .aurora-root .hero .ring{ display:none; }
  .aurora-root .hero .badge{ padding:10px 14px; }
  .aurora-root .hero .badge .v{ font-size:18px; }
  /* Stats: keep 3 columns on mobile, scale down */
  .aurora-root .stats{ padding:48px 0; }
  .aurora-root .stats .grid{ grid-template-columns:repeat(3,1fr) !important; gap:10px !important; }
  .aurora-root .stats .s .v{ font-size:30px !important; letter-spacing:-.02em; white-space:nowrap; }
  .aurora-root .stats .s .l{ font-size:11px; margin-top:6px; line-height:1.3; }
  /* Tame oversized inline headings on mobile */
  .aurora-root .about h2{ font-size:30px !important; line-height:1.08 !important; letter-spacing:-.02em !important; overflow-wrap:break-word; word-break:break-word; hyphens:auto; }
  .aurora-root .about p{ font-size:16px !important; }
  .aurora-root .about .portrait{ min-height:0 !important; max-height:60vh; aspect-ratio:4/5; }
  .aurora-root .about .portrait img{ object-position:center 12%; }
  .aurora-root .cell{ padding:22px; min-width:0; overflow:hidden; }
  .aurora-root .cell h3{ font-size:18px; overflow-wrap:break-word; word-break:break-word; }
  .aurora-root .cell p{ font-size:14px; overflow-wrap:break-word; word-break:break-word; }
  /* Section rhythm: tighter, consistent vertical spacing on mobile */
  .aurora-root section.block{ padding:48px 0 !important; }
  .aurora-root .shead{ margin-bottom:28px; }
  .aurora-root .shead h2{ font-size:34px !important; line-height:1.05; letter-spacing:-.02em; }
  .aurora-root .shead p{ font-size:16px !important; }
  .aurora-root .cta-final{ padding:56px 0 !important; }
  .aurora-root .cta-card{ padding:36px 22px !important; }
  .aurora-root .cta-card h2{ font-size:32px !important; line-height:1.05; }
  .aurora-root .cta-card p{ font-size:16px !important; }
  .aurora-root .pullquote{ font-size:19px; padding-left:18px; }
  /* Keep the connecting line behind the circles in carousel mode */
  .aurora-root .proc-line{ overflow:visible; }
  .aurora-root .proc-line::before{ content:""; display:block !important; position:absolute; top:44px; left:6%; right:6%; height:3px; border-radius:3px; background:var(--grad); opacity:.85; z-index:1; }
  .aurora-root .proc-line .step{ position:relative; z-index:2; }
  .aurora-root .proc-line .step .circle{ background:var(--bg); }
  /* Hide the 5th carousel card (Full portfolio) on mobile — keep only the rectangle below */
  .aurora-root .proof-car-desktop-mobile .mcar-track > a:nth-child(5){ display:none !important; }
  .aurora-root .proof-car-desktop-mobile .mcar-pip:nth-child(5){ display:none !important; }
  /* Full portfolio rectangle: stack vertically for breathing room */
  .aurora-root .proof-portfolio{ flex-direction:column; align-items:stretch; padding:24px 22px; gap:18px; text-align:left; }
  .aurora-root .proof-portfolio .l b{ font-size:17px; line-height:1.25; }
  .aurora-root .proof-portfolio .visit{ align-self:flex-start; padding:12px 22px !important; font-size:11px !important; }
  /* Sync-pop: cards animate together, not staggered */
  .aurora-root .pop-sync[data-stagger].in-view > *{ animation-delay:0s !important; }
}

/* CTA microcopy + secondary text link */
.aurora-root .cta-sub{ display:block; margin-top:14px; font-family:var(--mono); font-size:13px; letter-spacing:.04em; color:var(--muted); max-width:520px; }
.aurora-root .btn.link{ background:none; padding:17px 8px; color:var(--ink); font-weight:700; border-bottom:1px solid var(--line); border-radius:0; }
.aurora-root .btn.link:hover{ border-bottom-color:#9B5CFF; }

/* 2x2 competency / approach grid */
.aurora-root .grid-2x2{ display:grid; grid-template-columns:1fr 1fr; gap:24px; margin-top:32px; }
.aurora-root .cell{ background:var(--surface); border:1px solid var(--line); border-radius:var(--radius); padding:28px; }
.aurora-root .cell h3{ font-weight:800; font-size:20px; margin:0 0 10px; letter-spacing:-.01em; }
.aurora-root .cell p{ font-size:16px; line-height:1.5; color:var(--muted); margin:0; font-weight:500; }
@media (max-width:720px){ .aurora-root .grid-2x2{ grid-template-columns:1fr; } }

/* Pricing strike + accent */
.aurora-root .price{ font-family:var(--mono); font-size:14px; letter-spacing:.04em; color:var(--muted); margin-top:6px; }
.aurora-root .price s{ opacity:.55; margin-right:8px; }
.aurora-root .price b{ color:var(--ink); font-weight:800; }
.aurora-root .price em{ font-style:normal; background:var(--grad-tight); -webkit-background-clip:text; background-clip:text; color:transparent; font-weight:800; }
.aurora-root .pricing-note{ text-align:center; margin-top:28px; font-size:16px; color:var(--muted); }
.aurora-root .pricing-note a{ background:var(--grad-tight); -webkit-background-clip:text; background-clip:text; color:transparent; font-weight:800; }

/* FAQ */
.aurora-root .faq{ background:var(--surface-2); border-top:1px solid var(--line); border-bottom:1px solid var(--line); }
.aurora-root .faq-list{ display:flex; flex-direction:column; gap:14px; max-width:920px; }
.aurora-root details.q{ background:var(--surface); border:1px solid var(--line); border-radius:18px; padding:22px 26px; transition:border-color .25s ease; }
.aurora-root details.q[open]{ border-color:#3a2e63; }
.aurora-root details.q > summary{ cursor:pointer; list-style:none; font-weight:700; font-size:19px; display:flex; justify-content:space-between; gap:20px; align-items:center; letter-spacing:-.01em; }
.aurora-root details.q > summary::-webkit-details-marker{ display:none; }
.aurora-root details.q > summary::after{ content:"+"; font-family:var(--mono); font-size:22px; color:var(--muted); transition:transform .25s ease; }
.aurora-root details.q[open] > summary::after{ content:"−"; }
.aurora-root details.q .a{ margin-top:14px; font-size:17px; line-height:1.55; color:var(--muted); font-weight:500; }

/* How I Build pull-quote */
.aurora-root .pullquote{ font-weight:700; font-size:28px; line-height:1.35; letter-spacing:-.01em; max-width:920px; border-left:3px solid; border-image:var(--grad-tight) 1; padding:6px 0 6px 26px; margin:0 0 18px; }

/* Sync-pop: applies at all viewports so cards appear together */
.aurora-root .pop-sync[data-stagger].in-view > *{ animation-delay:0s !important; }

/* Connected process line */
.aurora-root .proc-line{ position:relative; margin-top:36px; }
.aurora-root .proc-line::before{
  content:""; position:absolute; left:5%; right:5%; top:38px; height:3px; border-radius:3px;
  background:var(--grad); z-index:1;
}
.aurora-root .proc-line .steps{ position:relative; z-index:2; display:grid; grid-template-columns:repeat(4,1fr); gap:20px; }
.aurora-root .proc-line .step{ display:flex; flex-direction:column; align-items:center; text-align:center; }
.aurora-root .proc-line .circle{ width:76px; height:76px; border-radius:50%; background:var(--bg); border:2px solid #37225C; display:flex; align-items:center; justify-content:center; font-family:var(--mono); font-weight:800; font-size:20px; color:var(--ink); box-shadow:var(--shadow); }
.aurora-root .proc-line .step h3{ font-weight:800; font-size:18px; margin:14px 0 6px; }
.aurora-root .proc-line .step p{ font-size:14px; color:var(--muted); margin:0; line-height:1.45; max-width:200px; }
@media (max-width:720px){
  .aurora-root .proc-line .steps{ grid-template-columns:1fr 1fr; }
}

/* Proof links */
.aurora-root .proof-grid{ display:grid; grid-template-columns:repeat(4,1fr); gap:18px; margin-top:8px; }
.aurora-root .proof-card{ display:block; position:relative; background:var(--surface); border:1px solid var(--line); border-radius:18px; overflow:hidden; transition:border-color .25s ease, transform .25s ease, box-shadow .25s ease; }
.aurora-root .proof-card:hover{ border-color:#9B5CFF; transform:translateY(-4px); box-shadow:0 24px 50px -28px rgba(155,92,255,.45); }
.aurora-root .proof-card .thumb{ aspect-ratio:4/3; width:100%; background:#0c0a18 center/cover no-repeat; border-bottom:1px solid var(--line); display:block; }
.aurora-root .proof-card .meta{ display:flex; flex-direction:column; gap:8px; padding:14px 16px 16px; }
.aurora-root .proof-card .meta .top{ display:flex; align-items:flex-start; justify-content:space-between; gap:10px; }
.aurora-root .proof-card .meta .ttl{ font-weight:800; font-size:15px; letter-spacing:-.01em; line-height:1.2; }
.aurora-root .proof-card .meta .sub{ font-family:var(--mono); font-size:10px; letter-spacing:.06em; color:var(--muted); text-transform:uppercase; }
.aurora-root .proof-card .visit{ font-family:var(--mono); font-size:10px; letter-spacing:.08em; text-transform:uppercase; color:#0C0A18; padding:6px 10px; border-radius:100px; background:var(--grad-vt); font-weight:800; white-space:nowrap; }
.aurora-root .proof-portfolio{ margin-top:22px; display:flex; align-items:center; justify-content:space-between; gap:18px; padding:22px 16px 22px 26px; background:var(--surface); border:1px solid var(--line); border-radius:18px; transition:border-color .25s ease, transform .25s ease; }
.aurora-root .proof-portfolio:hover{ border-color:#9B5CFF; transform:translateX(4px); }
.aurora-root .proof-portfolio .l{ display:flex; flex-direction:column; gap:4px; }
.aurora-root .proof-portfolio .l b{ font-weight:800; font-size:19px; }
.aurora-root .proof-portfolio .l span{ font-family:var(--mono); font-size:12px; letter-spacing:.06em; color:var(--muted); text-transform:uppercase; }
@media (max-width:980px){ .aurora-root .proof-grid{ grid-template-columns:1fr 1fr; } }
@media (max-width:560px){ .aurora-root .proof-grid{ grid-template-columns:1fr; } }
.aurora-root .founding{ margin-top:28px; padding:20px 24px; background:var(--surface); border:1px solid var(--line); border-left:3px solid; border-image:var(--grad-tight) 1; border-radius:12px; font-size:16px; color:var(--muted); width:100%; }
.aurora-root .founding b{ color:var(--ink); }

/* Final CTA platform line */
.aurora-root .platforms{ margin-top:28px; font-size:15px; color:var(--muted); }
.aurora-root .platforms a{ background:var(--grad-tight); -webkit-background-clip:text; background-clip:text; color:transparent; font-weight:800; }
.aurora-root .cta-card .email-line{ display:block; margin-top:18px; font-size:15px; color:var(--muted); }
.aurora-root .cta-card .email-line a{ color:var(--ink); border-bottom:1px solid var(--line); }

/* Tablet carousels for specific sections */
@media (max-width:980px) and (min-width:721px){
  .aurora-root .tablet-car .mcar-track{
    display:flex !important;
    grid-template-columns:none !important;
    overflow-x:auto;
    scroll-snap-type:x mandatory;
    gap:16px !important;
    padding:6px 12% 6px 0;
    margin:0 -28px 0 0;
    padding-left:0;
    scrollbar-width:none;
    -webkit-overflow-scrolling:touch;
  }
  .aurora-root .tablet-car .mcar-track::-webkit-scrollbar{ display:none; }
  .aurora-root .tablet-car .mcar-track > *{
    flex:0 0 88%;
    scroll-snap-align:start;
    min-width:0;
  }
  .aurora-root .tablet-car .mcar-ctrl{
    display:flex !important;
    align-items:center;
    gap:14px;
    margin-top:22px;
    max-width:100%;
  }
  .aurora-root .proof-car-desktop-mobile{ display:none; }
  .aurora-root .stats .s .v{ font-size:48px; }
}
@media (max-width:720px), (min-width:981px){
  .aurora-root .proof-car-tablet{ display:none; }
}
`;

function AuroraLanding() {
  // dummy to keep diff anchor
  return <AuroraLandingInner />;
}

function Carousel({
  children,
  className,
  stagger,
  style,
}: {
  children: ReactNode;
  className?: string;
  stagger?: boolean;
  style?: React.CSSProperties;
}) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [count, setCount] = useState(0);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    setCount(track.children.length);
    const onScroll = () => {
      const first = track.children[0] as HTMLElement | undefined;
      if (!first) return;
      const step = first.getBoundingClientRect().width + 16;
      const i = Math.round(track.scrollLeft / step);
      setIndex(Math.min(Math.max(i, 0), track.children.length - 1));
    };
    track.addEventListener("scroll", onScroll, { passive: true });
    return () => track.removeEventListener("scroll", onScroll);
  }, [children]);

  const go = (i: number) => {
    const track = trackRef.current;
    if (!track) return;
    const first = track.children[0] as HTMLElement | undefined;
    if (!first) return;
    const step = first.getBoundingClientRect().width + 16;
    track.scrollTo({ left: i * step, behavior: "smooth" });
  };

  return (
    <>
      <div
        ref={trackRef}
        className={`mcar-track ${className || ""}`}
        data-stagger={stagger ? "" : undefined}
        style={style}
      >
        {children}
      </div>
      <div className="mcar-ctrl" aria-hidden="true">
        <div className="mcar-pips">
          {Array.from({ length: count }).map((_, i) => (
            <span key={i} className={`mcar-pip ${i === index ? "active" : ""}`} />
          ))}
        </div>
        <button
          className="mcar-btn"
          aria-label="Previous"
          onClick={() => go(Math.max(0, index - 1))}
          disabled={index === 0}
        >
          ‹
        </button>
        <button
          className="mcar-btn"
          aria-label="Next"
          onClick={() => go(Math.min(count - 1, index + 1))}
          disabled={index >= count - 1}
        >
          ›
        </button>
      </div>
    </>
  );
}

function AuroraLandingInner() {
  const rootRef = useRef<HTMLDivElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in-view");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.18, rootMargin: "0px 0px -8% 0px" }
    );
    root.querySelectorAll("[data-reveal], [data-stagger]").forEach((el) => io.observe(el));

    // Count-up animation for stats
    const countIO = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          const el = e.target as HTMLElement;
          const target = parseFloat(el.dataset.countTo || "0");
          const suffix = el.dataset.countSuffix || "";
          const prefix = el.dataset.countPrefix || "";
          const duration = 1600;
          const start = performance.now();
          const isInt = Number.isInteger(target);
          const tick = (now: number) => {
            const p = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - p, 3);
            const val = target * eased;
            el.textContent = prefix + (isInt ? Math.round(val).toString() : val.toFixed(1)) + suffix;
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
          countIO.unobserve(el);
        });
      },
      { threshold: 0.5 }
    );
    root.querySelectorAll<HTMLElement>("[data-count-to]").forEach((el) => {
      el.textContent = (el.dataset.countPrefix || "") + "0" + (el.dataset.countSuffix || "");
      countIO.observe(el);
    });

    return () => { io.disconnect(); countIO.disconnect(); };
  }, []);

  return (
    <div className="aurora-root" ref={rootRef}>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />

      <nav>
        <div className="wrap row">
          <div className="logo">Alexa <span className="grad-t">C.</span></div>
          <div className="menu">
            <a href="#proof">Work</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </div>
          <a href="#contact" className="cta">Start a project →</a>
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
          <a href="#proof" onClick={() => setMenuOpen(false)}>Work</a>
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
          <a href="#faq" onClick={() => setMenuOpen(false)}>FAQ</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
        </div>
        <a href="#contact" className="cta" onClick={() => setMenuOpen(false)}>Start a project →</a>
      </div>

      <header className="hero">
        <div className="aura a1"></div><div className="aura a2"></div><div className="aura a3"></div>
        <div className="wrap grid">
          <div>
            <span className="pill"><span className="dot"></span> Apps · Landing pages · Accessibility</span>
            <h1>
              {"A working app or landing page, live on your domain in".split(" ").map((w, i) => (
                <span key={i} className="word" style={{ animationDelay: `${0.05 + i * 0.06}s`, marginRight: "0.28em" }}>{w}</span>
              ))}
              <span className="grad word" style={{ animationDelay: "0.85s" }}>5–10 days.</span>
            </h1>
            <div className="hero-rest">
              <p className="lede">I build for early-stage startups and small businesses — real code, not mockups.</p>
              <div className="btns">
                <a href="#contact" className="btn grad">Start a project →</a>
                <a href="#process" className="btn link">How it works ↓</a>
              </div>
            </div>
          </div>
          <div className="vis">
            <div className="ring" style={{ width: 440, height: 440 }}></div>
            <div className="ring" style={{ width: 560, height: 560 }}></div>
            <img className="portrait" src={studioAsset.url} alt="Alexa C., senior product designer" />
            <div className="badge" style={{ bottom: "9%", left: "-2%" }}><div className="v grad-t">15 years</div><div className="l">ex Amazon lead</div></div>
            <div className="badge" style={{ top: "6%", right: "-4%" }}><div className="v grad-t">95%</div><div className="l">a11y coverage</div></div>
          </div>
        </div>
      </header>

      <div className="trust">
        <div className="track">
          <div className="row" aria-hidden="true">
            <div className="item"><span className="d"></span> <b>Ex-Amazon</b>&nbsp;Sr. Design Lead</div>
            <div className="item"><span className="d"></span> WCAG 2.1/2.2 AA &amp; <b>EAA</b> ready</div>
            <div className="item"><span className="d"></span> <b>Lovable</b> · UX Pilot · Claude Code · React</div>
            <div className="item"><span className="d"></span> <b>UK</b>-based · GMT/BST</div>
          </div>
          <div className="row">
            <div className="item"><span className="d"></span> <b>Ex-Amazon</b>&nbsp;Sr. Design Lead</div>
            <div className="item"><span className="d"></span> WCAG 2.1/2.2 AA &amp; <b>EAA</b> ready</div>
            <div className="item"><span className="d"></span> <b>Lovable</b> · UX Pilot · Claude Code · React</div>
            <div className="item"><span className="d"></span> <b>UK</b>-based · GMT/BST</div>
          </div>
        </div>
      </div>

      <section className="block about" id="about">
        <div className="aura a1"></div>
        <div className="wrap grid">
          <div className="portrait" data-reveal="left"><img src={wideAsset.url} alt="Alexa C. in studio" /></div>
          <div data-reveal="right">
            <span className="eyebrow">Who I am</span>
            <h2 style={{ fontWeight: 800, fontSize: 54, lineHeight: 1.02, letterSpacing: "-.03em", margin: "14px 0 0" }}>A design lead who ships systems, not screenshots.</h2>
            <p style={{ fontSize: 21, lineHeight: 1.5, color: "var(--muted)", margin: "18px 0 0", fontWeight: 500 }}>Fifteen years in design leadership — nearly a decade scaling design and accessibility across global teams at Amazon — taught me the work matters less than whether people trust you to finish it. I now design and build apps and landing pages myself, end to end, using AI-native tools hardened by a senior eye. I answer messages, flag problems early, and don't take on more than I can deliver well.</p>
            <Carousel className="grid-2x2" stagger>
              <div className="cell"><h3 className="grad-t">Accessibility Process</h3><p>Every build manually checked against WCAG 2.1/2.2 AA — by me, not a scanner. Raised coverage 80% → 95% across a multi-brand organisation.</p></div>
              <div className="cell"><h3 className="grad-t">Build Process</h3><p>AI-native tools, reviewed and hardened by a senior eye before anything ships.</p></div>
              <div className="cell"><h3 className="grad-t">Tools &amp; Stack</h3><p>Real code, real database (React + production stack) — fully yours to keep, move, or extend.</p></div>
              <div className="cell"><h3 className="grad-t">Handoff Standards</h3><p>Documentation and a walkthrough call included — your team can run it long after I'm gone.</p></div>
            </Carousel>
          </div>
        </div>
      </section>

      <section className="block proof" id="endorsed">
        <div className="wrap">
          <div className="shead" data-reveal>
            <span className="eyebrow">Backed by people who'd know</span>
            <h2>Endorsed by design leaders at Amazon.</h2>
            <p>Professional recommendations, not client reviews — public, named, and checkable, since a new freelance profile doesn't have those yet.</p>
          </div>
          <div className="tablet-car">
            <Carousel className="grid" stagger>
              <div className="quote">
                <div className="q">“She handled each request with impressive clarity and ownership, and the quality of her work consistently made our collaboration smooth and reliable.”</div>
                <div className="who"><div className="ava"><img className="ava-sidney" src={sidneyAsset.url} alt="Sidney Levy" /></div><div className="nm">Sidney Levy<span>Design &amp; Product Leader, ex-Amazon</span></div></div>
              </div>
              <div className="quote">
                <div className="q">“She expertly navigates both meticulously planned projects and high-pressure, quick-turn challenges with equal skill.”</div>
                <div className="who"><div className="ava"><img className="ava-ryan" src={ryanAsset.url} alt="Ryan Schmidt" /></div><div className="nm">Ryan Schmidt<span>Creative Director, Amazon Prime</span></div></div>
              </div>
              <div className="quote">
                <div className="stars grad">★★★★★</div>
                <div className="q">“Not only did she meet our ambitious 95% compliance target, she exceeded it, setting new standards of excellence.”</div>
                <div className="who"><div className="ava"><img className="ava-elodie" src={elodieAsset.url} alt="Elodie Fichet" /></div><div className="nm">Elodie Fichet, Ph.D.<span>Head of Brand Accessibility, Amazon</span></div></div>
              </div>
            </Carousel>
          </div>
        </div>
      </section>

      <section className="block" id="services">
        <div className="wrap">
          <div className="shead" data-reveal>
            <span className="eyebrow">What I build</span>
            <h2>Two offers, fixed price.</h2>
            <p>Real code, accessibility built in, shipped in days — not months.</p>
          </div>
          <Carousel className="svc-grid pop-sync" stagger style={{ gridTemplateColumns: "repeat(2, 1fr)" }}>
            <div className="svc">
              <div className="no grad-t">01 · LANDING PAGES</div>
              <h3>Landing Pages</h3>
              <p>A single conversion-focused landing page — designed, built in real code, and shipped to your domain. Accessibility review included.</p>
              <div className="price"><s>$750</s> <em>$450</em> <b>· founding client pricing</b></div>
              <div className="meta"><div className="m"><div className="mv grad">5 days</div><div className="ml">Typical build</div></div><div className="m"><div className="mv grad">A11y</div><div className="ml">WCAG 2.2 AA</div></div></div>
            </div>
            <div className="svc">
              <div className="no grad-t">02 · APPS</div>
              <h3>Apps</h3>
              <p>A full-stack app — up to 5 core screens and one integration. Real code, real database, accessibility built in, handoff docs included.</p>
              <div className="price"><s>$1,500</s> <em>$900</em> <b>· founding client pricing</b></div>
              <div className="meta"><div className="m"><div className="mv grad">10 days</div><div className="ml">Typical build</div></div><div className="m"><div className="mv grad">React · DB</div><div className="ml">Real stack</div></div></div>
            </div>
          </Carousel>
          <p className="pricing-note">Fixed price, agreed before any code ships — <a href="#faq">see how pricing works →</a></p>
        </div>
      </section>

      <section className="block faq" id="faq">
        <div className="wrap">
          <div className="shead">
            <span className="eyebrow">FAQ</span>
            <h2>Questions, answered before you ask.</h2>
          </div>
          <div className="faq-list">
            {FAQS.map(([q, a], i) => (
              <details className="q" key={i}>
                <summary>{q}</summary>
                <div className="a">{a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="block" id="approach">
        <div className="wrap">
          <div className="shead" data-reveal>
            <span className="eyebrow">The approach</span>
            <h2>How I build.</h2>
          </div>
          <p className="pullquote" data-reveal>I won't hand you an AI-generated export and disappear. Every build is mine — senior-reviewed, tested, and hardened before it ships. If I wouldn't put it in front of my own users, I won't put it in front of yours.</p>
          <Carousel className="grid-2x2" stagger>
            <div className="cell"><h3 className="grad-t">Build Process</h3><p>Discovery call → component-level build in Lovable, Claude Code, and React → manual review against the original brief, not AI output accepted as-is.</p></div>
            <div className="cell"><h3 className="grad-t">Accessibility &amp; Quality</h3><p>Manual WCAG 2.1/2.2 AA review on every build — not an automated scanner pass. Keyboard navigation tested. Screen-reader spot-checked.</p></div>
            <div className="cell"><h3 className="grad-t">Handoff</h3><p>You own the repo, not a black box. Full documentation plus a walkthrough call. No platform lock-in.</p></div>
            <div className="cell"><h3 className="grad-t">Tooling, named honestly</h3><p>Lovable, Claude Code, and UX Pilot for build speed — senior manual review on everything before it ships.</p></div>
          </Carousel>
        </div>
      </section>

      <section className="block" id="process" style={{ background: "var(--surface-2)", borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)" }}>
        <div className="wrap">
          <div className="shead" data-reveal>
            <span className="eyebrow">How it works</span>
            <h2>From brief to shipped.</h2>
            <p>A calm, four-step path with a fixed price agreed up front — no surprises, no scope creep.</p>
          </div>
          <div className="proc-line">
            <Carousel className="steps" stagger>
              <div className="step"><div className="circle">01</div><h3>Discover</h3><p>Short call to scope goal, audience, metric. Fixed quote and timeline.</p></div>
              <div className="step"><div className="circle">02</div><h3>Design</h3><p>Systemised, accessible design in real tokens and components.</p></div>
              <div className="step"><div className="circle">03</div><h3>Build</h3><p>Production-ready code, accessibility verified before handoff.</p></div>
              <div className="step"><div className="circle">04</div><h3>Handoff</h3><p>Docs, fix list, walkthrough so your team can run with it.</p></div>
            </Carousel>
          </div>
        </div>
      </section>

      <section className="block proof" id="proof">
        <div className="wrap">
          <div className="shead" data-reveal>
            <span className="eyebrow">Proof of work</span>
            <h2>Don't take my word for it — open the build yourself.</h2>
            <p>No client case studies yet — here's what I build when no one's watching. Vellum is a privacy-first family platform I'm designing and building end-to-end. The GOV.UK "Having a Baby" prototype and the Volley.ai landing page and ad creative were built the same way I'd build for you — real components, not mockups.</p>
          </div>
          <div className="proof-car-desktop-mobile">
            <Carousel className="proof-grid" stagger>
              {[
                { url: "https://vellum-family-legacy.lovable.app/", title: "Vellum", sub: "Privacy-first family platform", shot: "https://vellum-family-legacy.lovable.app/" },
                { url: "https://govuk-design-journey.lovable.app/", title: "GOV.UK Prototype", sub: "“Having a Baby” journey", shot: "https://govuk-design-journey.lovable.app/" },
                { url: "https://uxpilot.ai/s/93ee147163cf16136095a4f1e807b678", title: "Volley — Landing Page", sub: "Marketing site", shot: "https://uxpilot.ai/s/93ee147163cf16136095a4f1e807b678" },
                { url: "https://volley-add-testing-framework.lovable.app/", title: "Volley — Ads", sub: "Ad testing framework", shot: volleyAdsAsset.url },
              ].map((p) => (
                <a key={p.url} className="proof-card" href={p.url} target="_blank" rel="noopener">
                  <span className="thumb" style={{ backgroundImage: p.shot.startsWith("/") ? `url(${p.shot})` : `url(https://api.microlink.io/?url=${encodeURIComponent(p.shot)}&screenshot=true&meta=false&embed=screenshot.url&viewport.width=1280&viewport.height=900)` }} aria-hidden="true" />
                  <div className="meta">
                    <div className="top">
                      <div className="ttl">{p.title}</div>
                      <span className="visit">Visit →</span>
                    </div>
                    <div className="sub">{p.sub}</div>
                  </div>
                </a>
              ))}
              <a className="proof-card" href="https://alexandra-ciobanu.com/" target="_blank" rel="noopener" style={{ display: "flex", flexDirection: "column" }}>
                <span className="thumb" style={{ backgroundImage: `url(https://api.microlink.io/?url=${encodeURIComponent("https://alexandra-ciobanu.com/")}&screenshot=true&meta=false&embed=screenshot.url&viewport.width=1280&viewport.height=900)` }} aria-hidden="true" />
                <div className="meta">
                  <div className="top">
                    <div className="ttl">Full portfolio</div>
                    <span className="visit">Visit →</span>
                  </div>
                  <div className="sub">alexandra-ciobanu.com</div>
                </div>
              </a>
            </Carousel>
          </div>
          <div className="proof-car-tablet tablet-car">
            <Carousel className="proof-grid" stagger>
              {[
                { url: "https://vellum-family-legacy.lovable.app/", title: "Vellum", sub: "Privacy-first family platform", shot: "https://vellum-family-legacy.lovable.app/" },
                { url: "https://govuk-design-journey.lovable.app/", title: "GOV.UK Prototype", sub: "“Having a Baby” journey", shot: "https://govuk-design-journey.lovable.app/" },
                { url: "https://uxpilot.ai/s/93ee147163cf16136095a4f1e807b678", title: "Volley — Landing Page", sub: "Marketing site", shot: "https://uxpilot.ai/s/93ee147163cf16136095a4f1e807b678" },
                { url: "https://volley-add-testing-framework.lovable.app/", title: "Volley — Ads", sub: "Ad testing framework", shot: volleyAdsAsset.url },
              ].map((p) => (
                <a key={`${p.url}-tablet`} className="proof-card" href={p.url} target="_blank" rel="noopener">
                  <span className="thumb" style={{ backgroundImage: p.shot.startsWith("/") ? `url(${p.shot})` : `url(https://api.microlink.io/?url=${encodeURIComponent(p.shot)}&screenshot=true&meta=false&embed=screenshot.url&viewport.width=1280&viewport.height=900)` }} aria-hidden="true" />
                  <div className="meta">
                    <div className="top">
                      <div className="ttl">{p.title}</div>
                      <span className="visit">Visit →</span>
                    </div>
                    <div className="sub">{p.sub}</div>
                  </div>
                </a>
              ))}
            </Carousel>
          </div>
          <a className="proof-portfolio" href="https://alexandra-ciobanu.com/" target="_blank" rel="noopener" data-reveal>
            <span className="l"><b>Full portfolio — alexandra-ciobanu.com</b><span>Case studies, writing &amp; long-form work</span></span>
            <span className="visit" style={{ fontFamily: "var(--mono)", fontSize: 12, letterSpacing: ".08em", textTransform: "uppercase", color: "#0C0A18", background: "var(--grad-ap)", padding: "10px 20px", borderRadius: 100, fontWeight: 800, whiteSpace: "nowrap", flexShrink: 0 }}>Visit →</span>
          </a>
          <div className="founding"><b>Founding client terms:</b> the first 3 projects get 40% off standard pricing, in exchange for a detailed case study and testimonial as the project ships.</div>
        </div>
      </section>

      <section className="stats">
        <div className="aura a1"></div><div className="aura a2"></div>
          <div className="wrap grid" data-stagger style={{ gridTemplateColumns: "repeat(3,1fr)" }}>
          <div className="s"><div className="v stat-grad" data-count-to="15">15</div><div className="l">15 years ex Amazon lead</div></div>
          <div className="s"><div className="v stat-grad" data-count-to="95" data-count-suffix="%">95%</div><div className="l">95% a11y coverage</div></div>
          <div className="s"><div className="v stat-grad" data-count-to="10" data-count-prefix="5–" data-count-suffix="d">5–10d</div><div className="l">From brief to shipped</div></div>
        </div>
      </section>

      <section className="cta-final" id="contact">
        <div className="aura a1"></div>
        <div className="wrap">
          <div className="cta-card" data-reveal="tilt">
            <span className="eyebrow">FOUNDING CLIENT SLOTS OPEN</span>
            <h2>Let's build something that ships.</h2>
            <p>One 30 min call, a fixed price by the end of it, and a clear yes/no — no chasing, no pressure.</p>
            <div className="btns">
              <a href="mailto:hello@alexac.studio" className="btn grad">Start a project →</a>
            </div>
            <span className="email-line">or email <a href="mailto:hello@alexac.studio">hello@alexac.studio</a> directly</span>
            <p className="platforms">Prefer to book through a platform you already use? Find me on <a href="#">Fiverr →</a> or <a href="#">LinkedIn →</a></p>
          </div>
        </div>
      </section>

      <footer>
        <div className="wrap row">
          <div className="logo">Alexa <span className="grad-t">C.</span></div>
          <div className="links">
            <a href="#proof">Work</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </div>
          <div className="fine">© 2026 Alexa C. — UK</div>
        </div>
      </footer>
    </div>
  );
}
