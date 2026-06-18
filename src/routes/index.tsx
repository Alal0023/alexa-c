import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef } from "react";
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
  --grad-pv:linear-gradient(100deg,#FF6FD8 0%,#9B5CFF 100%);
  --grad-vt:linear-gradient(100deg,#9B5CFF 0%,#36E0C8 100%);
  --grad-ta:linear-gradient(100deg,#36E0C8 0%,#FFC24B 100%);
  --grad-pa:linear-gradient(100deg,#FF6FD8 0%,#FFC24B 100%);
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
.aurora-root nav .cta{ font-weight:800; font-size:16px; padding:12px 24px; border-radius:100px; background:var(--grad-vt); color:#0C0A18; box-shadow:var(--shadow); transition:transform .25s ease, box-shadow .25s ease; }
.aurora-root nav .cta:hover{ transform:translateY(-2px); box-shadow:0 18px 36px -14px rgba(54,224,200,.5); }

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
.aurora-root .btn.grad{ background:var(--grad-pv); color:#0C0A18; box-shadow:var(--shadow); background-size:200% 100%; background-position:0% 50%; transition:background-position .6s ease, transform .25s ease, box-shadow .25s ease; }
.aurora-root .btn.grad:hover{ background-position:100% 50%; transform:translateY(-3px); }
.aurora-root .btn.grad.alt-vt{ background-image:var(--grad-vt); }
.aurora-root .btn.grad.alt-pa{ background-image:var(--grad-pa); }
.aurora-root .btn.grad.alt-ta{ background-image:var(--grad-ta); }
.aurora-root .btn.ghost{ background:var(--surface); color:var(--ink); border:1px solid var(--line); }
.aurora-root .hero .vis{ position:relative; display:flex; align-items:center; justify-content:center; min-height:480px; }
.aurora-root .hero .ring{ position:absolute; border-radius:50%; border:1.5px solid #37225C; box-shadow:inset 0 0 0 0 transparent; }
.aurora-root .hero .portrait{ width:400px; height:400px; border-radius:50%; object-fit:cover; object-position:center 18%;
  position:relative; z-index:2; box-shadow:var(--shadow); border:2px solid #37225C; }
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

@keyframes auroraFadeUp{ from{ opacity:0; transform:translateY(34px);} to{ opacity:1; transform:none;} }
@keyframes auroraFloat{ 0%,100%{ transform:translateY(0);} 50%{ transform:translateY(-12px);} }
@keyframes auroraPulseRing{ 0%,100%{ opacity:.55; transform:scale(1);} 50%{ opacity:1; transform:scale(1.02);} }
@keyframes auroraWordIn{ from{ opacity:0; transform:translateY(60%); filter:blur(8px);} to{ opacity:1; transform:none; filter:none;} }
@keyframes auroraGradMove{ 0%,100%{ background-position:0% 50%;} 50%{ background-position:100% 50%;} }
@keyframes auroraSheen{ 0%{ transform:translateX(-120%) skewX(-20deg);} 60%,100%{ transform:translateX(220%) skewX(-20deg);} }
@keyframes auroraRiseBlur{ from{ opacity:0; transform:translateY(70px) scale(.96); filter:blur(14px);} to{ opacity:1; transform:none; filter:none;} }
@keyframes auroraSlideL{ from{ opacity:0; transform:translateX(-90px) rotate(-1.5deg);} to{ opacity:1; transform:none;} }
@keyframes auroraSlideR{ from{ opacity:0; transform:translateX(90px) rotate(1.5deg);} to{ opacity:1; transform:none;} }
@keyframes auroraZoomIn{ from{ opacity:0; transform:scale(.7) rotate(-4deg); filter:blur(12px);} to{ opacity:1; transform:none; filter:none;} }
@keyframes auroraTiltIn{ from{ opacity:0; transform:perspective(900px) rotateX(28deg) translateY(60px); transform-origin:50% 100%;} to{ opacity:1; transform:none;} }
@keyframes auroraCharIn{ from{ opacity:0; transform:translateY(110%) rotate(8deg);} to{ opacity:1; transform:none;} }
@keyframes auroraDrift{ 0%,100%{ transform:translate3d(0,0,0) scale(1);} 50%{ transform:translate3d(30px,-20px,0) scale(1.06);} }
@keyframes auroraOrbit{ from{ transform:rotate(0deg);} to{ transform:rotate(360deg);} }
@keyframes auroraCount{ from{ opacity:0; transform:translateY(40%) scale(.85);} to{ opacity:1; transform:none;} }

.aurora-root .word{ display:inline-block; opacity:0; animation: auroraWordIn .9s cubic-bezier(.2,.7,.2,1) both; will-change:transform,opacity,filter; }
.aurora-root .hero .pill{ animation: auroraFadeUp .9s cubic-bezier(.2,.7,.2,1) both; }
.aurora-root .hero p.lede{ animation: auroraFadeUp .9s cubic-bezier(.2,.7,.2,1) .9s both; }
.aurora-root .hero .btns{ animation: auroraFadeUp .9s cubic-bezier(.2,.7,.2,1) 1.1s both; }
.aurora-root .shead h2,.aurora-root .cta-card h2{ animation: auroraFadeUp .9s cubic-bezier(.2,.7,.2,1) both; }
.aurora-root .shead p,.aurora-root .cta-card p{ animation: auroraFadeUp .9s cubic-bezier(.2,.7,.2,1) .18s both; }

.aurora-root .hero .ring{ animation: auroraPulseRing 5s ease-in-out infinite; }
.aurora-root .hero .ring:nth-of-type(2){ animation-delay:1.4s; }

.aurora-root .hero .badge{ animation: auroraFadeUp 1s cubic-bezier(.2,.7,.2,1) 1.3s both, auroraFloat 5.5s ease-in-out 1.5s infinite; }
.aurora-root .hero .badge:nth-of-type(2){ animation-delay: 1.5s, 1.8s; }

.aurora-root .grad,.aurora-root .grad-t{ background-size:240% 100%; animation: auroraGradMove 7s ease-in-out infinite; }

.aurora-root .btn.grad{ position:relative; overflow:hidden; }
.aurora-root .btn.grad::after{ content:""; position:absolute; top:0; left:0; width:50%; height:100%; background:linear-gradient(90deg,transparent,rgba(255,255,255,.55),transparent); transform:translateX(-120%) skewX(-20deg); animation: auroraSheen 3.6s ease-in-out infinite; pointer-events:none; }
.aurora-root nav .cta{ position:relative; overflow:hidden; }
.aurora-root nav .cta::after{ content:""; position:absolute; top:0; left:0; width:50%; height:100%; background:linear-gradient(90deg,transparent,rgba(255,255,255,.55),transparent); transform:translateX(-120%) skewX(-20deg); animation: auroraSheen 4.2s ease-in-out 1s infinite; pointer-events:none; }

.aurora-root .svc,.aurora-root .proc,.aurora-root .quote{ transition: transform .35s cubic-bezier(.2,.7,.2,1), border-color .35s ease, box-shadow .35s ease; }
.aurora-root .svc:hover,.aurora-root .quote:hover,.aurora-root .proc:hover{ transform: translateY(-8px); box-shadow: 0 30px 60px -28px rgba(155,92,255,.45); border-color:#3a2e63; }
.aurora-root .stats .s .v{ transition: transform .3s ease, text-shadow .3s ease; }
.aurora-root .stats .s:hover .v{ transform: scale(1.08); text-shadow: 0 0 30px rgba(155,92,255,.45); }

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

/* Per-character split headlines */
.aurora-root .split{ display:inline-block; }
.aurora-root .split .ch{ display:inline-block; opacity:0; will-change:transform,opacity; white-space:pre; }
.aurora-root .split.in-view .ch{ animation: auroraCharIn .8s cubic-bezier(.2,.75,.2,1) both; }

/* Aurora blobs drift continuously for ambient motion everywhere */
.aurora-root .aura{ animation: auroraDrift 14s ease-in-out infinite; }
.aurora-root .aura.a2{ animation-duration:18s; animation-delay:-4s; }
.aurora-root .aura.a3{ animation-duration:22s; animation-delay:-9s; }

/* Hero rings get an orbital wrapper */
.aurora-root .hero .vis::before{
  content:""; position:absolute; width:680px; height:680px; border-radius:50%;
  border:1px dashed rgba(155,92,255,.18);
  animation: auroraOrbit 60s linear infinite;
}

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
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    // Split headlines tagged with .split-target into per-char spans
    root.querySelectorAll<HTMLElement>(".split-target").forEach((el) => {
      if (el.dataset.split === "1") return;
      el.dataset.split = "1";
      const walk = (node: ChildNode) => {
        if (node.nodeType === Node.TEXT_NODE) {
          const text = node.textContent ?? "";
          const frag = document.createDocumentFragment();
          [...text].forEach((c, i) => {
            const s = document.createElement("span");
            s.className = "ch";
            s.style.animationDelay = `${i * 0.025}s`;
            s.textContent = c;
            frag.appendChild(s);
          });
          node.parentNode?.replaceChild(frag, node);
        } else if (node.nodeType === Node.ELEMENT_NODE) {
          [...node.childNodes].forEach(walk);
        }
      };
      [...el.childNodes].forEach(walk);
      el.classList.add("split");
    });

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

    root
      .querySelectorAll("[data-reveal], [data-stagger], .split")
      .forEach((el) => io.observe(el));

    // Parallax on aura blobs
    const auras = root.querySelectorAll<HTMLElement>(".aura");
    const onScroll = () => {
      const y = window.scrollY;
      auras.forEach((a, i) => {
        const speed = (i % 3) * 0.06 + 0.04;
        a.style.translate = `0 ${y * speed * -1}px`;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      io.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div className="aurora-root" ref={rootRef}>
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
            <h1>
              {"Compliant, conversion-ready design,".split(" ").map((w, i) => (
                <span key={i} className="word" style={{ animationDelay: `${0.05 + i * 0.08}s`, marginRight: "0.28em" }}>{w}</span>
              ))}
              <span className="grad word" style={{ animationDelay: "0.7s" }}>built in code.</span>
            </h1>
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
        <div className="wrap row" data-stagger>
          <div className="item"><span className="d"></span> <b>Ex-Amazon</b>&nbsp;Sr. Design Lead</div>
          <div className="item"><span className="d"></span> WCAG 2.1 AA &amp; <b>EAA</b> audits</div>
          <div className="item"><span className="d"></span> <b>Lovable</b> · Figma · Framer</div>
          <div className="item"><span className="d"></span> <b>4.9★</b> across projects</div>
        </div>
      </div>

      <section className="block" id="services">
        <div className="wrap">
          <div className="shead" data-reveal>
            <span className="eyebrow">What sells in 2026</span>
            <h2 className="split-target">Four gigs, one specialist.</h2>
            <p>Each offer is scoped, fixed-price and shipped with accessibility built in — not bolted on at the end.</p>
          </div>
          <div className="svc-grid" data-stagger>
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
          <div className="portrait" data-reveal="left"><img src={wideAsset.url} alt="Alexa C. in studio" /></div>
          <div data-reveal="right">
            <span className="eyebrow">Who I am</span>
            <h2 className="split-target" style={{ fontWeight: 800, fontSize: 54, lineHeight: 1.02, letterSpacing: "-.03em", margin: "14px 0 0" }}>A design lead who ships systems, not screenshots.</h2>
            <p style={{ fontSize: 21, lineHeight: 1.5, color: "var(--muted)", margin: "18px 0 0", fontWeight: 500 }}>Fifteen years in design leadership — nearly a decade scaling design maturity and accessibility across global teams at Amazon. I turn brand rules into production-ready, compliant, interactive systems.</p>
            <ul data-stagger>
              <li><span className="n">A11Y</span><span className="t"><b>Raised accessibility coverage 80% → 95%</b> <span>across a multi-brand creative org.</span></span></li>
              <li><span className="n">EAA</span><span className="t"><b>Manual WCAG 2.1 AA &amp; EAA audits</b> <span>— not automated widgets that fail in court.</span></span></li>
              <li><span className="n">AI</span><span className="t"><b>AI-native prototyping &amp; code handoff</b> <span>via Lovable, Figma and Framer.</span></span></li>
            </ul>
          </div>
        </div>
      </section>

      <section className="block" id="process" style={{ background: "var(--surface-2)", borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)" }}>
        <div className="wrap">
          <div className="shead" data-reveal>
            <span className="eyebrow">How it works</span>
            <h2 className="split-target">From brief to shipped.</h2>
            <p>A calm, four-step path with a fixed price agreed up front — no surprises, no scope creep.</p>
          </div>
          <div className="proc-grid" data-stagger>
            <div className="proc"><div className="pn grad">01</div><h4>Discover</h4><p>A short call to scope the goal, audience and success metric. You get a fixed quote and timeline.</p></div>
            <div className="proc"><div className="pn grad">02</div><h4>Design</h4><p>Systemised, accessible design in real tokens and components — reviewed against a clear quality bar.</p></div>
            <div className="proc"><div className="pn grad">03</div><h4>Build</h4><p>Production-ready code or a hardened Lovable app, with accessibility verified before handoff.</p></div>
            <div className="proc"><div className="pn grad">04</div><h4>Handoff</h4><p>Docs, a fix list and a walkthrough so your team can run with it long after I'm gone.</p></div>
          </div>
        </div>
      </section>

      <section className="block proof" id="proof">
        <div className="wrap">
          <div className="shead" data-reveal>
            <span className="eyebrow">Proof</span>
            <h2 className="split-target">Buyers come back for the rigour.</h2>
          </div>
          <div className="grid" data-stagger>
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
        <div className="wrap grid" data-stagger>
          <div className="s" data-reveal="count"><div className="v grad">15</div><div className="l">Years in design</div></div>
          <div className="s" data-reveal="count"><div className="v grad">95%</div><div className="l">Accessibility coverage</div></div>
          <div className="s" data-reveal="count"><div className="v grad">4.9★</div><div className="l">Average rating</div></div>
          <div className="s" data-reveal="count"><div className="v grad">10d</div><div className="l">From brief to MVP</div></div>
        </div>
      </section>

      <section className="cta-final" id="contact">
        <div className="aura a1"></div>
        <div className="wrap">
          <div className="cta-card" data-reveal="tilt">
            <span className="eyebrow">Open for Q3</span>
            <h2 className="split-target">Let's build something that ships.</h2>
            <p>Tell me what you're making. I'll come back with a fixed price, a timeline, and a plan to make it accessible and fast.</p>
            <div className="btns">
              <a href="mailto:hello@alexac.studio" className="btn grad alt-pa">hello@alexac.studio</a>
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
