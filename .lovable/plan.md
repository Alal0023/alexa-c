
# Aurora Landing Page — Final Build

Keep the original Aurora Brand Book look and feel (gradient backgrounds, dark hero, the two supplied portraits), apply the audit's copy rewrite and section re-order, and fix accessibility by using **black ink text on every gradient/aurora surface** (never white over the yellow/cream gradient stops).

## Design tokens (`src/styles.css`)

- `--ink: #0C0A18`, `--cream: #FAF9F5`, `--surface: #15122A`
- Aurora stops: `--aurora-1 #FF6FD8`, `--aurora-2 #9B5CFF`, `--aurora-3 #36E0C8`, `--aurora-4 #FFC24B`
- `--gradient-aurora: linear-gradient(110deg, var(--aurora-1), var(--aurora-2), var(--aurora-3), var(--aurora-4))`
- `--red-mandated: #D8342F`
- Fonts via `<link>` in `__root.tsx`: Instrument Serif (display), Inter (body), JetBrains Mono (eyebrows)

## Accessibility rule for gradients

- Any text sitting on the aurora gradient or on the yellow/cream stops = **ink black, weight ≥ 500**, large size where possible.
- Primary CTA button = aurora gradient fill, **black label**, black focus ring offset cream.
- Gradient is never applied to body paragraphs — only to panels, buttons, dividers, and decorative bands.
- Hero can keep the dark navy backdrop from the brand book for contrast, with cream body text and the gradient used as accent (glow, underline-block on "built in code", chip backgrounds).
- Marquee/animations respect `prefers-reduced-motion`.

## Sections (audit re-order)

1. **Nav** — wordmark + 3 links + primary "Start a project" button (gradient fill, black text)
2. **Hero** — dark navy panel; H1 "Ship compliant, accessible design. No agency. No delays." with `built in code` as a gradient underline-block (black text on gradient); studio portrait right; one primary CTA + recessive secondary text link
3. **Trust ticker** — cream band, ink text, pausable marquee with credentials/clients
4. **Who I Am** — wide environmental portrait left, copy right, ink on cream
5. **Services** — EAA & WCAG Audits as full-width aurora-gradient panel with red `▲ LEGALLY MANDATED` tag (all text black); 3 supporting service cards on cream with mono eyebrow chips
6. **How It Works** — 3-step numbered list, cream
7. **Proof** — 3 named testimonials with sample-size line ("4.9★ across 47 projects")
8. **By the Numbers** — aurora gradient band; stats inline ("15 yrs in design leadership"), black text
9. **Final CTA** — `OPEN FOR Q3` mono eyebrow, headline, gradient mailto button (black text) to `hello@alexac.studio`
10. **Footer** — wordmark, Fiverr link (only here), socials, year

## Photos

Both supplied portraits uploaded via lovable-assets:
- Studio portrait → hero
- Wide environmental portrait → Who I Am

## Files touched

- `src/styles.css` — add Aurora tokens, gradient, font-family vars
- `src/routes/__root.tsx` — Google Fonts `<link>` preconnect + stylesheet
- `src/routes/index.tsx` — full rewrite of landing page with framer-motion + `useReducedMotion`, semantic HTML, single `<h1>`, JSON-LD Person schema, full `head()` meta (title, description, og:*, twitter:*, canonical)
- `src/assets/alexa-portrait-studio.png.asset.json` + `.../alexa-portrait-wide.png.asset.json` — CDN pointers

## Out of scope

- CMS, form backend (mailto only), extra routes, real analytics
