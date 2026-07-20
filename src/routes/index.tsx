import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState, type ReactNode } from "react";
import studioAsset from "../assets/alexa-studio.png.asset.json";
import wideAsset from "../assets/alexa-wide.png.asset.json";
import sidneyAsset from "../assets/sidney.png.asset.json";
import ryanAsset from "../assets/ryan.png.asset.json";
import elodieAsset from "../assets/elodie.png.asset.json";
import volleyAdsAsset from "../assets/volley-ads.png.asset.json";

const DESCRIPTION =
  "The EU's Accessibility Act is now enforced — and 95.9% of websites still fail WCAG. I audit, fix, and build EAA/WCAG 2.2 AA-compliant sites, fast, without enterprise cost.";

const FAQS: [string, string][] = [
  ["How does pricing work?", "Every project is fixed price, agreed before any code is written. We start with a short discovery call to scope your goal, audience, and must-haves; I'll quote a fixed price and timeline by the end of it — no hourly billing, no surprise invoices. As a founding client (first 3 projects), you also get 40% off standard pricing in exchange for a detailed case study and testimonial once we ship."],
  ["Can I see examples of your work before booking?", "Yes — scroll down to 'Proof of work' for live, inspectable projects, including a GOV.UK-pattern accessibility prototype and a privacy-first platform I designed and built end-to-end. No client case studies yet, since I'm just launching, but everything linked there is real, not a mockup."],
  ["What's included in the price?", "Every package includes a fully functional, production-ready build — not a template — source code you own outright, a manual WCAG 2.2 AA accessibility check, and an agreed number of revision rounds. Higher tiers add a CRO review, a full accessibility audit, and handoff documentation. Exact inclusions are listed against each package above."],
  ["How and when do I pay?", "Typically 50% deposit to begin, 50% on delivery, paid by Stripe. For larger app projects, we can split into milestone payments. Everything is agreed and confirmed in writing before work starts."],
  ["What if I don't like the result?", "Every package includes 2 rounds of revisions, so we adjust until it's right before final delivery — I'll confirm scope on the call so there are no surprises. If we genuinely can't land on something that works, we'll discuss a partial refund based on work completed."],
  ["What if my project ends up bigger than expected?", "If new requirements come up mid-project, I'll flag it immediately and quote the additional scope separately — you'll never be charged for extra work without agreeing to it first. The original fixed price never changes without your sign-off."],
  ["You mention AI tools (Lovable, Claude Code, UX Pilot) — is this AI-generated work?", "I build with AI-native tools — that's how I deliver in days, not months. But AI alone produces inaccessible, brittle code: a February 2026 study found rising web-accessibility failures tied directly to AI-assisted 'vibe coding,' with 95.9% of top sites now failing WCAG. Every build I ship is reviewed and hardened by hand — keyboard, screen reader, and contrast tested — by a senior designer. You get AI speed with human accountability."],
  ["Can I get just a landing page, or just an app?", "Yes — they're separate, fixed-price offers. Most clients start with the landing page and come back for the app later, but you're welcome to book either on its own, or both together."],
  ["What happens after handoff?", "You get full documentation and a walkthrough call so your team — or you — can run, extend, or hand the project to another developer with no lock-in. I'm also available for ongoing support through an Accessibility & Care retainer if you'd rather not manage it yourself."],
  ["Where are you based?", "East London, UK — working GMT/BST hours. I work with clients across the UK and EU, in English, French, or German."],
  ["I found you on Fiverr or LinkedIn — does anything change if I book directly instead?", "No — same process, same pricing, same person. Booking directly just means no marketplace fees on my end, which I can sometimes pass on as a small discount. If you'd rather use Fiverr's buyer protection for your first project, that's completely fine too."],
  ["Why should I trust a new freelance profile?", "Fair question. I don't have client case studies yet, so I show you what I can verify: named, public recommendations from design leaders at Amazon (linked to their LinkedIn), my own site built and tested to WCAG 2.2 AA, and a fixed price with a clear scope before any work starts. You can check all of it yourself."],
  ["What does accessibility actually get me?", "Three things: you stop excluding roughly 1 in 4 people, you reduce EAA legal exposure (enforced since June 2025; fines reach €100,000 in Germany and up to €900,000 in the Netherlands), and accessible sites are usually faster and rank better. It's risk reduction and reach, not a checkbox."],
];

const CALENDLY_URL = "https://calendly.com/alexandra-ciobanu-3pgd/30min";
const FIVERR_URL = "https://www.fiverr.com/alexaci_/design-and-build-your-landing-page-with-senior-ux-and-real-code?context_referrer=tailored_homepage_perseus&source=recently_viewed_gigs&ref_ctx_id=59524cbf63cf4e5997a59e5a060d0bcd&context=recommendation&pckg_id=1&pos=2&context_alg=recently_viewed&seller_online=true&imp_id=1d12f3dc-f86d-47f2-b3ef-c2d59b3c4cb7";
const LINKEDIN_URL = "https://www.linkedin.com/in/alexa-ciobanu/";
const EMAIL_MAILTO = `mailto:hello@alexandra-ciobanu.co.uk?subject=${encodeURIComponent("Inquiry: Discovery Call - App, Web & Accessibility")}&body=${encodeURIComponent("Hi Alexandra,\n\nI'd like to book a 30-minute discovery call to discuss a potential project.\n\nMy main focus is:\n\n[ ] Web Design / Redesign\n\n[ ] App Design & Product Development\n\n[ ] Accessibility (EAA/WCAG) Compliance\n\n[ ] Other: __________\n\nLet me know your availability for the coming week, or feel free to share a link to your calendar. Looking forward to connecting!")}`;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Alexa C. — Accessible, EAA-compliant websites & apps" },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: "Alexa C. — Accessible, EAA-compliant websites & apps" },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://alexa-c.lovable.app/" },
      { property: "og:image", content: studioAsset.url },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Alexa C. — Accessible, EAA-compliant websites & apps" },
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
          jobTitle: "Senior Designer & Accessibility Specialist",
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
          name: "Accessible websites & apps — EAA / WCAG 2.2 AA",
          areaServed: "Worldwide",
          description: DESCRIPTION,
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "Offers",
            itemListElement: [
              { "@type": "Offer", itemOffered: { "@type": "Service", name: "WCAG 2.2 AA / EAA Audit + Fix Plan" } },
              { "@type": "Offer", itemOffered: { "@type": "Service", name: "Accessible Landing Page" } },
              { "@type": "Offer", itemOffered: { "@type": "Service", name: "Accessible MVP / App" } },
              { "@type": "Offer", itemOffered: { "@type": "Service", name: "Accessibility & Care retainer" } },
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
  --grad-vb:linear-gradient(100deg,#9B5CFF 0%,#4EA8FF 100%);
  --grad-vt:linear-gradient(100deg,#9B5CFF 0%,#36E0C8 100%);
  --grad-bg:linear-gradient(100deg,#4EA8FF 0%,#7CE756 100%);
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
.aurora-root .stats .s:nth-child(1) .stat-grad{ background-image:var(--grad-pv); -webkit-background-clip:text; background-clip:text; }
.aurora-root .stats .s:nth-child(2) .stat-grad{ background-image:var(--grad-vt); -webkit-background-clip:text; background-clip:text; }
.aurora-root .stats .s:nth-child(3) .stat-grad{ background-image:var(--grad-ta); -webkit-background-clip:text; background-clip:text; }
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
.aurora-root .proof-grid .proof-card:nth-child(2) .visit{ background:var(--grad-vb); }
.aurora-root .proof-grid .proof-card:nth-child(3) .visit{ background:var(--grad-bg); }
.aurora-root .proof-grid .proof-card:nth-child(4) .visit{ background:var(--grad-ta); }
.aurora-root .proof-grid .proof-card:nth-child(5) .visit{ background:var(--grad-ap); }
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
.aurora-root .quote .who .nm span.name{ font-family:inherit; font-size:16px; color:var(--ink); font-weight:700; letter-spacing:0; margin-top:0; }
.aurora-root .quote .who .nm span.li{ margin-top:4px; }
.aurora-root .quote .who .nm span.li a{ color:var(--accent, #7c5cff); text-decoration:none; border-bottom:1px solid color-mix(in oklab, var(--accent, #7c5cff) 40%, transparent); padding-bottom:1px; }
.aurora-root .quote .who .nm span.li a:hover{ border-bottom-color:var(--accent, #7c5cff); }

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
.aurora-root .hero h1 .word.grad{ display:inline-block; line-height:1.12; padding-bottom:.06em; }
@media (max-width:640px){
  .aurora-root .hero .btn.grad{ font-size:16px; padding:14px 22px; white-space:nowrap; }
}
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
.aurora-root .proof-grid{ display:grid; grid-template-columns:repeat(5,1fr); gap:16px; margin-top:8px; }
.aurora-root .proof-card{ display:flex; flex-direction:column; position:relative; background:var(--surface); border:1px solid var(--line); border-radius:18px; overflow:hidden; transition:border-color .25s ease, transform .25s ease, box-shadow .25s ease; }
.aurora-root .proof-card:hover{ border-color:#9B5CFF; transform:translateY(-4px); box-shadow:0 24px 50px -28px rgba(155,92,255,.45); }
.aurora-root .proof-card .thumb{ aspect-ratio:4/3; width:100%; background:#0c0a18 center/cover no-repeat; border-bottom:1px solid var(--line); display:block; }
.aurora-root .proof-card .meta{ flex:1; display:flex; flex-direction:column; gap:8px; padding:14px 16px 16px; }
.aurora-root .proof-card .meta .top{ display:flex; align-items:flex-start; justify-content:space-between; gap:10px; }
.aurora-root .proof-card .meta .ttl{ font-weight:800; font-size:15px; letter-spacing:-.01em; line-height:1.2; }
.aurora-root .proof-card .meta .sub{ font-family:var(--mono); font-size:10px; letter-spacing:.06em; color:var(--muted); text-transform:uppercase; }
.aurora-root .proof-card .visit{ font-family:var(--mono); font-size:10px; letter-spacing:.08em; text-transform:uppercase; color:#0C0A18; padding:6px 10px; border-radius:100px; background:var(--grad-vt); font-weight:800; white-space:nowrap; }
.aurora-root .proof-card .chrome{ display:flex; align-items:center; gap:6px; padding:8px 10px; background:var(--surface-2); border-bottom:1px solid var(--line); }
.aurora-root .proof-card .chrome .cd{ width:9px; height:9px; border-radius:50%; flex-shrink:0; }
.aurora-root .proof-card .chrome .cd.r{ background:#ff5f57; }
.aurora-root .proof-card .chrome .cd.y{ background:#febc2e; }
.aurora-root .proof-card .chrome .cd.g{ background:#28c840; }
.aurora-root .proof-card .chrome .url{ flex:1; min-width:0; font-family:var(--mono); font-size:10px; color:var(--muted); background:var(--bg); border:1px solid var(--line); border-radius:6px; padding:3px 8px; margin-left:6px; white-space:nowrap; overflow:hidden; text-overflow:ellipsis; }
.aurora-root .proof-card .phone-frame{ aspect-ratio:16/11; background:linear-gradient(160deg,var(--surface-2),var(--surface)); border-bottom:1px solid var(--line); display:flex; align-items:center; justify-content:center; padding:12px; }
.aurora-root .proof-card .phone-frame .phone{ height:100%; aspect-ratio:9/17; background:#0C0A18; border-radius:18px; border:2px solid var(--line); padding:4px; position:relative; box-shadow:0 12px 28px -16px rgba(0,0,0,.6); }
.aurora-root .proof-card .phone-frame .phone::before{ content:""; position:absolute; top:6px; left:50%; transform:translateX(-50%); width:36%; height:8px; background:#0C0A18; border-radius:0 0 10px 10px; z-index:2; }
.aurora-root .proof-card .phone-frame .phone .pscreen{ width:100%; height:100%; border-radius:14px; background:#0c0a18 center/cover no-repeat; display:block; }
.aurora-root .proof-card .thumb.with-chrome{ aspect-ratio: 16/11; }

/* ============ Theme toggle ============ */
.aurora-root .theme-tog{ width:42px; height:42px; border-radius:50%; background:var(--surface); border:1px solid var(--line); color:var(--ink); display:inline-flex; align-items:center; justify-content:center; cursor:pointer; font-size:18px; flex-shrink:0; margin-right:14px; transition:transform .2s ease, border-color .2s ease; }
.aurora-root .theme-tog:hover{ transform:translateY(-1px); border-color:#9B5CFF; }
.aurora-root nav .row{ gap:12px; }

/* ============ Light theme ============ */
.aurora-root.light{
  --bg:#FAFAFC; --surface:#FFFFFF; --surface-2:#F3F1FA; --ink:#15122A; --muted:#6B6587;
  --line:#E4E1EE; --line-soft:#EEEBF5;
  --shadow:0 24px 60px -30px rgba(80,55,150,.22);
  --glow:0 0 70px rgba(155,92,255,.18);
  /* Accessible (AA on light bg) gradient overrides */
  --grad:linear-gradient(100deg,#B81C7E,#5A2DD6 38%,#0E7C70 70%,#8A5A00);
  --grad-tight:linear-gradient(100deg,#B81C7E 0%,#7A2BB8 50%,#5A2DD6 100%);
  --grad-pv:linear-gradient(100deg,#B81C7E 0%,#5A2DD6 100%);
  --grad-vt:linear-gradient(100deg,#5A2DD6 0%,#0E7C70 100%);
  --grad-ta:linear-gradient(100deg,#0E7C70 0%,#8A5A00 100%);
  --grad-ap:linear-gradient(100deg,#8A5A00 0%,#B81C7E 100%);
}
/* Light theme: stronger contrast for secondary type */
.aurora-root.light .eyebrow,
.aurora-root.light footer .fine,
.aurora-root.light .cta-card .email-line,
.aurora-root.light footer .links{ color:#3F3A55; font-weight:700; }
.aurora-root.light .svc .meta .m .ml,
.aurora-root.light .proc p,
.aurora-root.light .proof-card .meta .sub,
.aurora-root.light .proof-portfolio .l span,
.aurora-root.light .hero .badge .l,
.aurora-root.light .cta-sub,
.aurora-root.light .price{ color:#3F3A55; }
.aurora-root.light .price s{ color:#5F586F; opacity:1; }
/* Gradient text — keep the AA-safe stops; nudge weight for legibility */
.aurora-root.light .grad,
.aurora-root.light .grad-t,
.aurora-root.light .stat-grad,
.aurora-root.light .svc .no,
.aurora-root.light .price em,
.aurora-root.light .pricing-note a,
.aurora-root.light .quote .q em,
.aurora-root.light .platforms a{ font-weight:800; }
.aurora-root.light .btn.grad,.aurora-root.light .proof-grid .proof-card .visit,.aurora-root.light .proof-portfolio .visit{ color:#FFFFFF !important; }
.aurora-root.light nav .cta{ color:#FFFFFF; }
.aurora-root.light nav{ background:rgba(255,255,255,.85); }
.aurora-root.light .drawer{ background:rgba(250,250,252,.96); }
.aurora-root.light .cta-card{ background:linear-gradient(160deg,#FFFFFF,#F3F1FA); }
.aurora-root.light .hero .ring{ border-color:#7C5BC9; border-width:2px; }
.aurora-root.light .hero .portrait{ border-color:#7C5BC9; }
.aurora-root.light .hero .badge .l,
.aurora-root.light .trust .item,
.aurora-root.light .proof-portfolio .l span{ font-weight:600; color:#5F587A; }
.aurora-root.light .trust .item{ color:#7A7290; font-weight:500; }
.aurora-root.light .trust .item b{ color:#15122A; font-weight:800; }
.aurora-root.light .aura{ opacity:.22; }
.aurora-root.light .hero .aura.a3{ opacity:.14; }
.aurora-root.light .stats .aura{ opacity:.10; }
.aurora-root.light .about .aura.a1{ opacity:.14; }
.aurora-root.light .proc-line::before{ opacity:.95; }
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
  .aurora-root .tablet-car .mcar-pips{ display:flex; align-items:center; justify-content:center; gap:8px; padding:10px 18px; background:var(--surface); border:1px solid var(--line); border-radius:100px; flex:1; min-height:38px; min-width:0; }
  .aurora-root .tablet-car .mcar-pip{ width:6px; height:6px; border-radius:50%; background:var(--muted); opacity:.45; transition:width .3s ease, opacity .3s ease, background .3s ease; flex-shrink:0; }
  .aurora-root .tablet-car .mcar-pip.active{ width:24px; height:6px; border-radius:100px; background:var(--grad-tight); opacity:1; }
  .aurora-root .tablet-car .mcar-btn{ width:42px; height:42px; border-radius:50%; background:var(--surface); border:1px solid var(--line); color:var(--ink); font-size:20px; line-height:1; display:flex; align-items:center; justify-content:center; cursor:pointer; flex-shrink:0; font-family:var(--mono); }
  .aurora-root .tablet-car .mcar-btn:disabled{ opacity:.35; }
  .aurora-root .proof-car-desktop-mobile{ display:none; }
  .aurora-root .stats .s .v{ font-size:48px; }
}
@media (max-width:720px), (min-width:981px){
  .aurora-root .proof-car-tablet{ display:none; }
}

/* ===== Stretched gradients (continuous, not per-word) ===== */
/* Service card stats — each word gets its segment of the full gradient */
.aurora-root .svc-grid .svc .meta .m:nth-child(1) .mv.grad{ background-image:var(--grad-pv); }
.aurora-root .svc-grid .svc .meta .m:nth-child(2) .mv.grad{ background-image:var(--grad-vb); }
.aurora-root .svc-grid .svc:nth-of-type(3) .meta .m:nth-child(2) .mv.grad,
.aurora-root .svc-grid .svc:nth-of-type(4) .meta .m:nth-child(2) .mv.grad{ background-image:var(--grad-vt); }
.aurora-root .svc-grid .svc:nth-of-type(3) .meta .m:nth-child(3) .mv.grad,
.aurora-root .svc-grid .svc:nth-of-type(4) .meta .m:nth-child(3) .mv.grad{ background-image:var(--grad-ta); }
.aurora-root .svc .meta .m .mv.grad{ -webkit-background-clip:text; background-clip:text; color:transparent; }

/* Approach cards — split full gradient across the 4 titles */
.aurora-root #approach .cell:nth-child(1) h3.grad-t{ background-image:linear-gradient(100deg,#FF6FD8,#9B5CFF); }
.aurora-root #approach .cell:nth-child(2) h3.grad-t{ background-image:linear-gradient(100deg,#9B5CFF,#36E0C8); }
.aurora-root #approach .cell:nth-child(3) h3.grad-t{ background-image:linear-gradient(100deg,#36E0C8,#FFC24B); }
.aurora-root #approach .cell:nth-child(4) h3.grad-t{ background-image:linear-gradient(100deg,#FFC24B,#FF6FD8); }

/* Hero floating badges — stretched across the pair (pink→purple, purple→teal) */
.aurora-root .hero .vis .badge.b-one .v.grad-t{ background-image:linear-gradient(100deg,#FF6FD8,#9B5CFF) !important; }
.aurora-root .hero .vis .badge.b-two .v.grad-t{ background-image:linear-gradient(100deg,#9B5CFF,#36E0C8) !important; }

/* Final CTA platforms (Fiverr / LinkedIn) — Fiverr pink→purple, LinkedIn purple→blue */
.aurora-root .platforms a:nth-of-type(1){ background-image:linear-gradient(100deg,#FF6FD8,#9B5CFF); }
.aurora-root .platforms a:nth-of-type(2){ background-image:linear-gradient(100deg,#9B5CFF,#4EA8FF); }

/* Header + bottom CTA buttons — use the full 4-stop gradient for a visible sweep */
.aurora-root nav .cta{ background-image:var(--grad); background-size:200% 100%; background-position:0% 50%; transition:background-position .6s ease, transform .25s ease, box-shadow .25s ease; }
.aurora-root nav .cta:hover{ background-position:100% 50%; }
.aurora-root .cta-final .btn.grad{ background-image:var(--grad); }
/* Hero primary CTA — full 4-stop gradient sweep, in both themes */
.aurora-root .hero .btn.grad{ background-image:var(--grad) !important; background-size:200% 100%; background-position:0% 50%; transition:background-position .6s ease, transform .25s ease, box-shadow .25s ease; }
.aurora-root .hero .btn.grad:hover{ background-position:100% 50%; }
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
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    try {
      const saved = localStorage.getItem("aurora-theme");
      if (saved === "light" || saved === "dark") setTheme(saved);
    } catch {}
  }, []);

  const toggleTheme = () => {
    setTheme((t) => {
      const n = t === "dark" ? "light" : "dark";
      try { localStorage.setItem("aurora-theme", n); } catch {}
      return n;
    });
  };

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
          const suffix = el.dataset.countSuffix || "";
          const prefix = el.dataset.countPrefix || "";
          const duration = 1600;

          if (el.dataset.countRange) {
            const [low, high] = el.dataset.countRange.split(",").map((n) => parseInt(n, 10));
            const phaseDur = duration / 2;
            const run = (target: number, start: number, onDone: () => void) => {
              const tick = (now: number) => {
                const p = Math.min((now - start) / phaseDur, 1);
                const eased = 1 - Math.pow(1 - p, 3);
                const val = Math.max(1, Math.round(target * eased));
                el.textContent = val + suffix;
                if (p < 1) requestAnimationFrame(tick);
                else onDone();
              };
              requestAnimationFrame(tick);
            };
            const s1 = performance.now();
            run(low, s1, () => {
              const s2 = performance.now();
              run(high, s2, () => {
                el.textContent = low + "–" + high + suffix;
              });
            });
          } else {
            const target = parseFloat(el.dataset.countTo || "0");
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
          }
          countIO.unobserve(el);
        });
      },
      { threshold: 0.5 }
    );
    root.querySelectorAll<HTMLElement>("[data-count-to], [data-count-range]").forEach((el) => {
      if (el.dataset.countRange) {
        el.textContent = "0" + (el.dataset.countSuffix || "");
      } else {
        el.textContent = (el.dataset.countPrefix || "") + "0" + (el.dataset.countSuffix || "");
      }
      countIO.observe(el);
    });

    return () => { io.disconnect(); countIO.disconnect(); };
  }, []);

  return (
    <div className={`aurora-root ${theme === "light" ? "light" : ""}`} ref={rootRef}>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />

      <nav>
        <div className="wrap row">
          <div className="logo">Alexa <span className="grad-t">C.</span></div>
          <div className="menu">
            <a href="#proof">Work</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
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
          <a href="#proof" onClick={() => setMenuOpen(false)}>Work</a>
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
          <a href="#faq" onClick={() => setMenuOpen(false)}>FAQ</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
        </div>
        <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="cta" onClick={() => setMenuOpen(false)}>Book a call</a>
      </div>

      <header className="hero">
        <div className="aura a1"></div><div className="aura a2"></div><div className="aura a3"></div>
        <div className="wrap grid">
          <div>
            <span className="pill"><span className="dot"></span> EAA · WCAG 2.2 AA · Audits · Builds</span>
            <h1>
              {"Accessible, compliant websites and apps —built at AI speed,".split(" ").map((w, i) => (
                <span key={i} className="word" style={{ animationDelay: `${0.05 + i * 0.06}s`, marginRight: "0.28em" }}>{w}</span>
              ))}
              <span className="word grad" style={{ animationDelay: "0.85s" }}>refined by a senior eye.</span>
            </h1>
            <div className="hero-rest">
              <p className="lede">The EU's Accessibility Act is now enforced — and <b>95.9% of websites still fail WCAG</b>. I audit, fix, and build EAA/WCAG 2.2 AA-compliant sites, fast, without enterprise cost.</p>
              <div className="btns">
                <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="btn grad">Book a free 30-minute call</a>
                <a href="#services" className="btn link">For agencies →</a>
              </div>
            </div>
          </div>
          <div className="vis">
            <div className="ring" style={{ width: 440, height: 440 }}></div>
            <div className="ring" style={{ width: 560, height: 560 }}></div>
            <img className="portrait" src={studioAsset.url} alt="Alexa C., senior product designer" />
            <div className="badge b-one" style={{ bottom: "9%", left: "-2%" }}><div className="v grad-t">80→95%</div><div className="l">a11y raised at Amazon</div></div>
            <div className="badge b-two" style={{ top: "6%", right: "-4%" }}><div className="v grad-t">EAA</div><div className="l">enforced since Jun 2025</div></div>
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
            <h2 style={{ fontWeight: 800, fontSize: 54, lineHeight: 1.02, letterSpacing: "-.03em", margin: "14px 0 0" }}>I raised accessibility from 80% to 95% at Amazon. Now I do it for you.</h2>
            <p style={{ fontSize: 21, lineHeight: 1.5, color: "var(--muted)", margin: "18px 0 0", fontWeight: 500 }}>I spent nearly a decade as a design lead at Amazon, where I led accessibility across a multi-brand organisation and raised compliance from roughly <b style={{ color: "var(--ink)", fontWeight: 800 }}>80% to 95%</b>. Accessibility isn't a checkbox I add at the end — it's how I've worked for years. Now I bring that senior, regulator-ready eye to founders and small teams, building fast with AI-native tools and testing by hand the way a screen-reader user actually experiences your site.</p>
            <p style={{ fontSize: 21, lineHeight: 1.5, color: "var(--muted)", margin: "18px 0 0", fontWeight: 500 }}>And accessibility isn't only about avoiding fines. <b style={{ color: "var(--ink)", fontWeight: 800 }}>One in four EU adults lives with a disability</b> — accessible sites reach more people, rank better, and convert better. Compliance is the floor; the market is the point.</p>
          </div>
        </div>
      </section>

      <section className="block proof" id="endorsed">
        <div className="wrap">
          <div className="shead" data-reveal>
            <span className="eyebrow">Backed by people who'd know</span>
            <h2>Endorsed by design leaders at Amazon.</h2>
            <p>Featuring public, named, and checkable professional recommendations from former colleagues to speak for my work while this new profile establishes its first client reviews.</p>
          </div>
          <div className="tablet-car">
            <Carousel className="grid" stagger>
              <div className="quote">
                <div className="q">“She handled each request with impressive clarity and ownership, and the quality of her work consistently made our collaboration smooth and reliable.”</div>
                <div className="who"><div className="ava"><img className="ava-sidney" src={sidneyAsset.url} alt="Sidney Levy" /></div><div className="nm"><span className="name">Sidney Levy</span><span>Design &amp; Product Leader, ex-Amazon</span><span className="li"><a href="https://www.linkedin.com/in/sidneylevy/" target="_blank" rel="noopener noreferrer">Posted on LinkedIn ↗</a></span></div></div>
              </div>
              <div className="quote">
                <div className="q">“She expertly navigates both meticulously planned projects and high-pressure, quick-turn challenges with equal skill.”</div>
                <div className="who"><div className="ava"><img className="ava-ryan" src={ryanAsset.url} alt="Ryan Schmidt" /></div><div className="nm"><span className="name">Ryan Schmidt</span><span>Creative Director, Amazon Prime</span><span className="li"><a href="https://www.linkedin.com/in/rrrryan/" target="_blank" rel="noopener noreferrer">Posted on LinkedIn ↗</a></span></div></div>
              </div>
              <div className="quote">
                
                <div className="q">“Not only did she meet our ambitious 95% compliance target, she exceeded it, setting new standards of excellence.”</div>
                <div className="who"><div className="ava"><img className="ava-elodie" src={elodieAsset.url} alt="Elodie Fichet" /></div><div className="nm"><span className="name">Elodie Fichet, Ph.D.</span><span>Head of Brand Accessibility, Amazon</span><span className="li"><a href="https://www.linkedin.com/in/elodiefichet/" target="_blank" rel="noopener noreferrer">Posted on LinkedIn ↗</a></span></div></div>
              </div>
            </Carousel>
          </div>
        </div>
      </section>

      <section className="block" id="services">
        <div className="wrap">
          <div className="shead" data-reveal>
            <span className="eyebrow">What I build</span>
            <h2>Four ways to work. One standard.</h2>
            <p>Audit, fix, build, or maintain — accessibility is the default, not the add-on.</p>
          </div>
          <Carousel className="svc-grid pop-sync" stagger style={{ gridTemplateColumns: "repeat(2, 1fr)" }}>
            <div className="svc">
              <div className="no grad-t">01 · AUDIT + FIX PLAN</div>
              <h3>WCAG 2.2 AA / EAA Audit</h3>
              <p>Manual senior audit of your live site or app, a prioritised fix plan, and your accessibility statement. The front door for compliance buyers.</p>
              <div className="price"><em>from £1,500</em> <b>· fixed price</b></div>
              <div className="meta"><div className="m"><div className="mv grad">Manual</div><div className="ml">Senior review</div></div><div className="m"><div className="mv grad">EAA</div><div className="ml">Regulator-ready</div></div></div>
            </div>
            <div className="svc">
              <div className="no grad-t">02 · LANDING PAGE</div>
              <h3>Accessible Landing Page</h3>
              <p>A conversion-focused landing page, built compliant from the first line of code and shipped to your domain.</p>
              <div className="price"><s>£750</s> <em>£450</em> <b>· founding price</b></div>
              <div className="meta"><div className="m"><div className="mv grad">5 days</div><div className="ml">Typical build</div></div><div className="m"><div className="mv grad">A11y</div><div className="ml">WCAG 2.2 AA</div></div></div>
            </div>
            <div className="svc">
              <div className="no grad-t">03 · MVP / APP</div>
              <h3>Accessible MVP / App</h3>
              <p>A full-stack app — real code, real database, accessibility built in, handoff docs and a walkthrough call included.</p>
              <div className="price"><s>£1,500</s> <em>£900</em> <b>· founding price</b></div>
              <div className="meta"><div className="m"><div className="mv grad">10 days</div><div className="ml">Typical build</div></div><div className="m"><div className="mv grad">React · DB</div><div className="ml">Real stack</div></div><div className="m"><div className="mv grad">A11y</div><div className="ml">WCAG 2.2 AA</div></div></div>
            </div>
            <div className="svc">
              <div className="no grad-t">04 · RETAINER</div>
              <h3>Accessibility &amp; Care — Essentials</h3>
              <p>For founders and small sites that just shipped. Quarterly manual WCAG 2.2 AA check, monthly automated scan, performance check, up to 1 hour of fixes included, email support. Need this for an agency or multiple sites? <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">Get in touch.</a></p>
              <div className="price"><em>£95/mo</em> <b>· monthly</b></div>
              <div className="meta"><div className="m"><div className="mv grad">Quarterly</div><div className="ml">Manual WCAG check</div></div><div className="m"><div className="mv grad">Monthly</div><div className="ml">Automated scan</div></div><div className="m"><div className="mv grad">1 hr</div><div className="ml">Fixes incl.</div></div></div>
            </div>
          </Carousel>
          <div className="founding"><b>Founding client terms:</b> the first 3 projects get 40% off standard pricing, in exchange for a detailed case study and testimonial as the project ships.</div>
          <p className="pricing-note">Fixed price, agreed before any code ships — <a href="#faq-pricing">see how pricing works →</a></p>
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
              <details className="q" key={i} id={i === 0 ? "faq-pricing" : undefined}>
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
            <div className="cell"><h3 className="grad-t">Accessibility &amp; Quality</h3><p>Manual WCAG 2.2 AA review on every build — not an automated scanner pass. Keyboard navigation tested. Screen-reader spot-checked. Accessibility statement included at handoff.</p></div>
            <div className="cell"><h3 className="grad-t">Build Process</h3><p>Discovery call → component-level build → manual review against the original brief, not AI output accepted as-is.</p></div>
            <div className="cell"><h3 className="grad-t">Tooling, named honestly</h3><p>Lovable, Claude Code, UX Pilot, and React for build speed — every line senior-reviewed before it ships.</p></div>
            <div className="cell"><h3 className="grad-t">Handoff &amp; no lock-in</h3><p>You own the repo, not a black box. Full documentation plus a walkthrough call. No platform lock-in.</p></div>
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
              <div className="step"><div className="circle">01</div><h3>Discover</h3><p>30-minute scoping call. Project brief, fixed quote, and timeline for approval before we begin.</p></div>
              <div className="step"><div className="circle">02</div><h3>Design</h3><p>Structure and wireframes agreed before a line of code is written. You approve before I build.</p></div>
              <div className="step"><div className="circle">03</div><h3>Build</h3><p>Production-ready code, accessibility verified before handoff.</p></div>
              <div className="step"><div className="circle">04</div><h3>Handoff</h3><p>Live build, compliance statement, and full codebase. Two revision rounds included.</p></div>
            </Carousel>
          </div>
        </div>
      </section>

      <section className="block proof" id="proof">
        <div className="wrap">
          <div className="shead" data-reveal>
            <span className="eyebrow">Proof of work</span>
            <h2>Real, production code — open the build yourself.</h2>
            <p>Real, production code (React) — reviewed for accessibility, functionality, and UX before it ships, and fully yours to keep, move, or extend. No client case studies yet, so here's live work you can inspect: a GOV.UK-pattern "Having a Baby" accessibility prototype, a privacy-first family platform (Vellum), and the Volley landing page + ad-testing framework.</p>
          </div>
          <div className="proof-car-desktop-mobile">
            <Carousel className="proof-grid" stagger>
              {[
                { url: "https://govuk-design-journey.lovable.app/", title: "GOV.UK Prototype", sub: "“Having a Baby” journey", shot: "https://govuk-design-journey.lovable.app/", frame: "browser" as const, urlLabel: "govuk-design-journey.lovable.app" },
                { url: "https://vellum-family-legacy.lovable.app/", title: "Vellum", sub: "Privacy-first family platform", shot: `https://api.microlink.io/?url=${encodeURIComponent("https://vellum-family-legacy.lovable.app/")}&screenshot=true&meta=false&embed=screenshot.url&viewport.width=390&viewport.height=844`, frame: "phone" as const, urlLabel: "vellum-family-legacy.lovable.app" },
                { url: "https://quireapp.lovable.app/", title: "Quire", sub: "Private family archive", shot: "https://quireapp.lovable.app/", frame: "browser" as const, urlLabel: "quireapp.lovable.app" },
                { url: "https://uxpilot.ai/s/93ee147163cf16136095a4f1e807b678", title: "Volley — Landing Page", sub: "Marketing site", shot: "https://uxpilot.ai/s/93ee147163cf16136095a4f1e807b678", frame: "browser" as const, urlLabel: "uxpilot.ai/s/volley" },
                { url: "https://volley-add-testing-framework.lovable.app/", title: "Volley — Ads", sub: "Ad testing framework", shot: "https://volley-add-testing-framework.lovable.app/", staticShot: volleyAdsAsset.url, frame: "browser" as const, urlLabel: "volley-add-testing-framework.lovable.app" },
              ].map((p) => (
                <a key={p.url} className="proof-card" href={p.url} target="_blank" rel="noopener">
                  {p.frame === "phone" ? (
                    <>
                      <div className="chrome chrome-spacer" aria-hidden="true">
                        <span className="cd r"></span><span className="cd y"></span><span className="cd g"></span>
                        <span className="url">🔒 {p.urlLabel}</span>
                      </div>
                      <div className="phone-frame" aria-hidden="true">
                        <div className="phone"><span className="pscreen" style={{ backgroundImage: `url(${p.shot})` }} /></div>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="chrome" aria-hidden="true">
                        <span className="cd r"></span><span className="cd y"></span><span className="cd g"></span>
                        <span className="url">🔒 {p.urlLabel}</span>
                      </div>
                      <span className="thumb with-chrome" style={{ backgroundImage: `url(${(p as { staticShot?: string }).staticShot ?? `https://api.microlink.io/?url=${encodeURIComponent(p.shot)}&screenshot=true&meta=false&embed=screenshot.url&viewport.width=1280&viewport.height=900&waitForTimeout=2500`})` }} aria-hidden="true" />
                    </>
                  )}
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
          <div className="proof-car-tablet tablet-car">
            <Carousel className="proof-grid" stagger>
              {[
                { url: "https://govuk-design-journey.lovable.app/", title: "GOV.UK Prototype", sub: "“Having a Baby” journey", shot: "https://govuk-design-journey.lovable.app/", frame: "browser" as const, urlLabel: "govuk-design-journey.lovable.app" },
                { url: "https://vellum-family-legacy.lovable.app/", title: "Vellum", sub: "Privacy-first family platform", shot: `https://api.microlink.io/?url=${encodeURIComponent("https://vellum-family-legacy.lovable.app/")}&screenshot=true&meta=false&embed=screenshot.url&viewport.width=390&viewport.height=844`, frame: "phone" as const, urlLabel: "vellum-family-legacy.lovable.app" },
                { url: "https://quireapp.lovable.app/", title: "Quire", sub: "Private family archive", shot: "https://quireapp.lovable.app/", frame: "browser" as const, urlLabel: "quireapp.lovable.app" },
                { url: "https://uxpilot.ai/s/93ee147163cf16136095a4f1e807b678", title: "Volley — Landing Page", sub: "Marketing site", shot: "https://uxpilot.ai/s/93ee147163cf16136095a4f1e807b678", frame: "browser" as const, urlLabel: "uxpilot.ai/s/volley" },
                { url: "https://volley-add-testing-framework.lovable.app/", title: "Volley — Ads", sub: "Ad testing framework", shot: "https://volley-add-testing-framework.lovable.app/", staticShot: volleyAdsAsset.url, frame: "browser" as const, urlLabel: "volley-add-testing-framework.lovable.app" },
              ].map((p) => (
                <a key={`${p.url}-tablet`} className="proof-card" href={p.url} target="_blank" rel="noopener">
                  {p.frame === "phone" ? (
                    <>
                      <div className="chrome chrome-spacer" aria-hidden="true">
                        <span className="cd r"></span><span className="cd y"></span><span className="cd g"></span>
                        <span className="url">🔒 {p.urlLabel}</span>
                      </div>
                      <div className="phone-frame" aria-hidden="true">
                        <div className="phone"><span className="pscreen" style={{ backgroundImage: `url(${p.shot})` }} /></div>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="chrome" aria-hidden="true">
                        <span className="cd r"></span><span className="cd y"></span><span className="cd g"></span>
                        <span className="url">🔒 {p.urlLabel}</span>
                      </div>
                      <span className="thumb with-chrome" style={{ backgroundImage: `url(${(p as { staticShot?: string }).staticShot ?? `https://api.microlink.io/?url=${encodeURIComponent(p.shot)}&screenshot=true&meta=false&embed=screenshot.url&viewport.width=1280&viewport.height=900&waitForTimeout=2500`})` }} aria-hidden="true" />
                    </>
                  )}
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
        </div>
      </section>

      <section className="stats">
        <div className="aura a1"></div><div className="aura a2"></div>
          <div className="wrap grid" data-stagger style={{ gridTemplateColumns: "repeat(3,1fr)" }}>
          <div className="s"><div className="v stat-grad" data-count-to="15">15</div><div className="l">15 years ex Amazon lead</div></div>
          <div className="s"><div className="v stat-grad" data-count-to="95" data-count-suffix="%">95%</div><div className="l">95% a11y coverage</div></div>
          <div className="s"><div className="v stat-grad" data-count-range="5,10" data-count-suffix="d">5–10d</div><div className="l">From brief to shipped</div></div>
        </div>
      </section>

      <section className="cta-final" id="contact">
        <div className="aura a1"></div>
        <div className="wrap">
          <div className="cta-card" data-reveal="tilt">
            <span className="eyebrow">EAA ENFORCED — JUNE 2025</span>
            <h2>Let's talk.</h2>
            <ul className="cta-bullets">
              <li>Receive a clear project scope, timeline, and fixed-price proposal before any work begins.</li>
              <li>Accessibility review, website, or app—receive a clear scope, timeline, and fixed-price proposal.</li>
              <li>Define the scope, accessibility requirements, and next steps before committing to a project.</li>
              <li>Get a clear assessment of the project, accessibility requirements, and fixed pricing—no jargon, no surprises.</li>
            </ul>
            <div className="btns">
              <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="btn grad">Book a free 30 minute consultation</a>
            </div>
            <span className="email-line">or email <a href={EMAIL_MAILTO}>hello@alexandra-ciobanu.co.uk</a> directly</span>
            <p className="platforms">Prefer to book through a platform you already use? Find me on <a href={FIVERR_URL} target="_blank" rel="noopener noreferrer">Fiverr →</a> or <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">LinkedIn →</a></p>
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
            <a href={FIVERR_URL} target="_blank" rel="noopener noreferrer" className="ext">Fiverr<span className="arr"> ↗</span></a>
            <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="ext">LinkedIn<span className="arr"> ↗</span></a>
          </div>
          <div className="fine">© 2026 Alexa C. — UK</div>
        </div>
      </footer>
    </div>
  );
}
