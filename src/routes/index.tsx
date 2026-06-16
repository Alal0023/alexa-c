import { createFileRoute } from "@tanstack/react-router";
import { motion, useReducedMotion } from "framer-motion";
import studioAsset from "../assets/alexa-studio.png.asset.json";
import wideAsset from "../assets/alexa-wide.png.asset.json";

const DESCRIPTION =
  "Senior Design Lead with 15 years shipping accessible, EAA & WCAG-compliant product design. No agency. No delays. Fixed price. Shipped.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Alexa C. — Senior Design Lead. Accessible product design, shipped." },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: "Alexa C. — Senior Design Lead" },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { property: "og:image", content: studioAsset.url },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Alexa C. — Senior Design Lead" },
      { name: "twitter:description", content: DESCRIPTION },
      { name: "twitter:image", content: studioAsset.url },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Alexa C.",
          jobTitle: "Senior Design Lead",
          description: DESCRIPTION,
          image: studioAsset.url,
          email: "mailto:hello@alexac.studio",
          knowsAbout: [
            "Accessibility",
            "EAA Compliance",
            "WCAG 2.2",
            "Design Systems",
            "Product Design",
          ],
        }),
      },
    ],
  }),
  component: AuroraLanding,
});

/* ---------- shared atoms ---------- */

const Eyebrow = ({ children }: { children: React.ReactNode }) => (
  <span className="font-mono-eyebrow" style={{ color: "var(--ink-soft)" }}>
    {children}
  </span>
);

const PrimaryCTA = ({
  children,
  href = "mailto:hello@alexac.studio",
}: {
  children: React.ReactNode;
  href?: string;
}) => (
  <a
    href={href}
    className="focus-ring inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-[15px] font-semibold transition-transform hover:-translate-y-0.5"
    style={{
      backgroundImage: "var(--gradient-aurora)",
      color: "var(--ink)",
      boxShadow: "0 10px 30px -12px rgba(155,92,255,0.55)",
    }}
  >
    {children}
    <span aria-hidden>→</span>
  </a>
);

const QuietLink = ({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) => (
  <a
    href={href}
    className="focus-ring inline-flex items-center gap-1.5 text-[14px] underline underline-offset-4 decoration-1 hover:opacity-70"
    style={{ color: "var(--cream)" }}
  >
    {children}
  </a>
);

/* ---------- page ---------- */

function AuroraLanding() {
  const reduce = useReducedMotion();
  const fadeUp = reduce
    ? {}
    : {
        initial: { opacity: 0, y: 18 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-80px" },
        transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
      };

  return (
    <div
      style={{
        backgroundColor: "var(--cream)",
        color: "var(--ink)",
        fontFamily: "var(--font-sans)",
      }}
      className="min-h-dvh antialiased"
    >
      <Nav />
      <main>
        <Hero fadeUp={fadeUp} />
        <TrustTicker />
        <WhoIAm fadeUp={fadeUp} />
        <Services fadeUp={fadeUp} />
        <HowItWorks fadeUp={fadeUp} />
        <Proof fadeUp={fadeUp} />
        <Numbers fadeUp={fadeUp} />
        <FinalCTA fadeUp={fadeUp} />
      </main>
      <Footer />
    </div>
  );
}

/* ---------- nav ---------- */

function Wordmark({ onDark = false }: { onDark?: boolean }) {
  return (
    <a
      href="#top"
      className="focus-ring inline-flex items-baseline gap-0.5 font-display text-2xl leading-none"
      style={{ color: onDark ? "var(--cream)" : "var(--ink)" }}
    >
      ac
      <span style={{ color: "var(--aurora-1)" }}>.</span>
    </a>
  );
}

function Nav() {
  return (
    <header
      id="top"
      className="sticky top-0 z-40 backdrop-blur-md"
      style={{
        backgroundColor: "color-mix(in oklab, var(--cream) 80%, transparent)",
        borderBottom: "1px solid color-mix(in oklab, var(--ink) 8%, transparent)",
      }}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Wordmark />
        <nav className="hidden items-center gap-8 text-sm md:flex" aria-label="Primary">
          <a href="#work" className="focus-ring hover:opacity-60">Work</a>
          <a href="#about" className="focus-ring hover:opacity-60">About</a>
          <a href="#process" className="focus-ring hover:opacity-60">Process</a>
        </nav>
        <a
          href="mailto:hello@alexac.studio"
          className="focus-ring rounded-full px-4 py-2 text-sm font-semibold"
          style={{
            backgroundImage: "var(--gradient-aurora)",
            color: "var(--ink)",
          }}
        >
          Start a project
        </a>
      </div>
    </header>
  );
}

/* ---------- hero ---------- */

function Hero({ fadeUp }: { fadeUp: object }) {
  return (
    <section
      className="relative overflow-hidden"
      style={{ backgroundColor: "var(--surface)", color: "var(--cream)" }}
    >
      {/* aurora glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 -right-32 h-[620px] w-[620px] rounded-full opacity-50 blur-3xl"
        style={{ backgroundImage: "var(--gradient-aurora)" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 -left-24 h-[460px] w-[460px] rounded-full opacity-30 blur-3xl"
        style={{ backgroundImage: "var(--gradient-aurora)" }}
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-6 pb-24 pt-20 md:grid-cols-12 md:pb-32 md:pt-28">
        <motion.div {...fadeUp} className="md:col-span-7">
          <div className="mb-6 inline-flex items-center gap-2">
            <span
              className="font-mono-eyebrow"
              style={{ color: "var(--aurora-3)" }}
            >
              ● Open for Q3 · 2 slots
            </span>
          </div>
          <h1
            className="font-display text-[clamp(2.6rem,6vw,5.25rem)] leading-[1.02]"
            style={{ color: "var(--cream)" }}
          >
            Ship compliant,{" "}
            <em className="italic" style={{ color: "var(--aurora-3)" }}>
              accessible
            </em>{" "}
            design.
            <br />
            No agency.{" "}
            <span className="aurora-text-block">No&nbsp;delays.</span>
          </h1>
          <p
            className="mt-7 max-w-xl text-[17px] leading-relaxed"
            style={{ color: "color-mix(in oklab, var(--cream) 78%, transparent)" }}
          >
            Senior Design Lead, 15 years in. I take product teams from
            inaccessible &amp; off-brand to <strong style={{ color: "var(--cream)" }}>EAA &amp; WCAG 2.2 compliant</strong>—shipped, documented, defensible.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-6">
            <PrimaryCTA>Start a project</PrimaryCTA>
            <QuietLink href="#work">See recent gigs</QuietLink>
          </div>
        </motion.div>

        <motion.div
          {...fadeUp}
          className="md:col-span-5"
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <div
            className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl"
            style={{
              boxShadow: "0 30px 80px -30px rgba(0,0,0,0.55)",
              border: "1px solid color-mix(in oklab, var(--cream) 12%, transparent)",
            }}
          >
            <div
              aria-hidden
              className="absolute -inset-1 -z-10 rounded-3xl opacity-70 blur-2xl"
              style={{ backgroundImage: "var(--gradient-aurora)" }}
            />
            <img
              src={studioAsset.url}
              alt="Alexa C., Senior Design Lead, in her studio"
              className="h-full w-full object-cover"
              loading="eager"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ---------- trust ticker ---------- */

const TICKER = [
  "15 yrs design leadership",
  "EAA 2025 ready",
  "WCAG 2.2 AA",
  "Top-rated on Fiverr",
  "4.9★ across 47 projects",
  "Design systems · Figma",
  "Shipped to 12M+ users",
  "Audit · Design · Ship",
];

function TrustTicker() {
  return (
    <section
      aria-label="Credentials"
      className="marquee overflow-hidden"
      style={{
        backgroundColor: "var(--cream-2)",
        borderBottom: "1px solid color-mix(in oklab, var(--ink) 8%, transparent)",
      }}
    >
      <div className="marquee-track flex w-max gap-12 whitespace-nowrap px-6 py-5">
        {[...TICKER, ...TICKER].map((item, i) => (
          <span
            key={i}
            className="font-mono-eyebrow inline-flex items-center gap-3"
            style={{ color: "var(--ink)" }}
          >
            <span
              aria-hidden
              className="inline-block h-1.5 w-1.5 rounded-full"
              style={{ backgroundImage: "var(--gradient-aurora)" }}
            />
            {item}
          </span>
        ))}
      </div>
    </section>
  );
}

/* ---------- who I am ---------- */

function WhoIAm({ fadeUp }: { fadeUp: object }) {
  return (
    <section id="about" className="px-6 py-24 md:py-32">
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-12 md:items-center">
        <motion.div {...fadeUp} className="md:col-span-5">
          <div
            className="relative aspect-[5/6] w-full overflow-hidden rounded-2xl"
            style={{ border: "1px solid color-mix(in oklab, var(--ink) 12%, transparent)" }}
          >
            <img
              src={wideAsset.url}
              alt="Alexa C. at her workspace"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
        </motion.div>
        <motion.div {...fadeUp} className="md:col-span-7">
          <Eyebrow>Who I am</Eyebrow>
          <h2 className="font-display mt-3 text-4xl leading-tight md:text-5xl">
            Senior design leadership, available without the agency markup.
          </h2>
          <div
            className="mt-6 space-y-5 text-[17px] leading-relaxed"
            style={{ color: "var(--ink-soft)" }}
          >
            <p>
              I&apos;m Alexa — a Senior Design Lead with 15 years inside
              product teams shipping work used by millions. I close the gap
              between strategy and pixels, and between &ldquo;designed&rdquo;
              and <em>actually accessible</em>.
            </p>
            <p>
              Hire me direct, on Fiverr, for the part of a project that&apos;s
              usually slow, expensive, or skipped: accessibility audits,
              design-system overhauls, conversion-critical flows, and the
              boring-but-legally-required EAA work that hits in 2025.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ---------- services ---------- */

const SERVICES = [
  {
    eyebrow: "Design system audit",
    title: "Untangle your design system",
    body: "Tokens, components, governance, and a Figma library your engineers will actually use. Delivered as a working library and a 20-page action report.",
    deliverable: "Library + audit report",
    turnaround: "2–3 weeks",
  },
  {
    eyebrow: "Conversion flow redesign",
    title: "Fix the flow that&apos;s leaking revenue",
    body: "Onboarding, checkout, paywall. I diagnose, redesign, and hand you a build-ready Figma with copy and accessibility baked in.",
    deliverable: "Build-ready Figma + Loom walkthrough",
    turnaround: "10 working days",
  },
  {
    eyebrow: "Senior design, on demand",
    title: "Embedded senior design — by the sprint",
    body: "Drop me into your team for a sprint. Reviews, mentoring, hands-on shipping, hiring panels. Same hours, no agency overhead.",
    deliverable: "2-week sprint, renewable",
    turnaround: "Start within 7 days",
  },
];

function Services({ fadeUp }: { fadeUp: object }) {
  return (
    <section
      id="work"
      className="px-6 py-24 md:py-32"
      style={{ backgroundColor: "var(--cream-2)" }}
    >
      <div className="mx-auto max-w-6xl">
        <motion.div {...fadeUp} className="mb-14 max-w-2xl">
          <Eyebrow>What I do</Eyebrow>
          <h2 className="font-display mt-3 text-4xl leading-tight md:text-5xl">
            Four problems. One specialist. Fixed price. Shipped.
          </h2>
        </motion.div>

        {/* Featured: EAA & WCAG audit */}
        <motion.article
          {...fadeUp}
          className="relative overflow-hidden rounded-3xl p-8 md:p-12"
          style={{
            backgroundImage: "var(--gradient-aurora)",
            color: "var(--ink)",
          }}
        >
          <div className="grid gap-10 md:grid-cols-12 md:items-end">
            <div className="md:col-span-8">
              <span
                className="font-mono-eyebrow inline-flex items-center gap-2 rounded-full px-3 py-1"
                style={{
                  backgroundColor: "var(--ink)",
                  color: "#fff",
                }}
              >
                <span style={{ color: "var(--red-mandated)" }}>▲</span>
                Legally mandated · EU EAA · June 2025
              </span>
              <h3 className="font-display mt-5 text-3xl leading-tight md:text-5xl">
                EAA &amp; WCAG 2.2 accessibility audits.
              </h3>
              <p className="mt-4 max-w-xl text-[16px] leading-relaxed" style={{ color: "var(--ink)" }}>
                A pass / fail audit against EN 301 549, a prioritised remediation
                plan, and the design fixes for the top blockers. Defensible if
                you get a complaint. Done in 3 weeks.
              </p>
            </div>
            <div className="md:col-span-4">
              <dl className="space-y-3 text-[14px]" style={{ color: "var(--ink)" }}>
                <div className="flex justify-between border-b border-black/20 pb-2">
                  <dt className="font-mono-eyebrow">Deliverable</dt>
                  <dd className="font-semibold">Audit + fixes</dd>
                </div>
                <div className="flex justify-between border-b border-black/20 pb-2">
                  <dt className="font-mono-eyebrow">Turnaround</dt>
                  <dd className="font-semibold">3 weeks</dd>
                </div>
                <div className="flex justify-between border-b border-black/20 pb-2">
                  <dt className="font-mono-eyebrow">From</dt>
                  <dd className="font-semibold">€4,800</dd>
                </div>
              </dl>
              <a
                href="mailto:hello@alexac.studio?subject=EAA%20audit"
                className="focus-ring mt-6 inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold"
                style={{ backgroundColor: "var(--ink)", color: "var(--cream)" }}
              >
                Book an audit <span aria-hidden>→</span>
              </a>
            </div>
          </div>
        </motion.article>

        {/* 3 cards */}
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {SERVICES.map((s, i) => (
            <motion.article
              key={s.eyebrow}
              {...fadeUp}
              transition={{ duration: 0.6, delay: 0.05 * i }}
              className="flex flex-col rounded-2xl p-7"
              style={{
                backgroundColor: "var(--cream)",
                border: "1px solid color-mix(in oklab, var(--ink) 10%, transparent)",
              }}
            >
              <span
                className="font-mono-eyebrow inline-block self-start rounded-full px-2.5 py-1"
                style={{
                  backgroundColor: "color-mix(in oklab, var(--ink) 6%, transparent)",
                  color: "var(--ink)",
                }}
              >
                {s.eyebrow}
              </span>
              <h3
                className="font-display mt-4 text-2xl leading-tight"
                dangerouslySetInnerHTML={{ __html: s.title }}
              />
              <p className="mt-3 text-[15px] leading-relaxed" style={{ color: "var(--ink-soft)" }}>
                {s.body}
              </p>
              <dl className="mt-6 grid grid-cols-2 gap-3 border-t pt-4 text-[13px]"
                  style={{ borderColor: "color-mix(in oklab, var(--ink) 10%, transparent)" }}>
                <div>
                  <dt className="font-mono-eyebrow opacity-70">Deliverable</dt>
                  <dd className="mt-1 font-semibold">{s.deliverable}</dd>
                </div>
                <div>
                  <dt className="font-mono-eyebrow opacity-70">Turnaround</dt>
                  <dd className="mt-1 font-semibold">{s.turnaround}</dd>
                </div>
              </dl>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- how it works ---------- */

const STEPS = [
  {
    n: "01",
    title: "Scope on a 20-min call",
    body: "We agree the problem, the deliverable, and the price. Fixed scope, fixed fee.",
  },
  {
    n: "02",
    title: "I work. You get weekly Looms.",
    body: "No slack pings, no status meetings. Async updates with the actual file attached.",
  },
  {
    n: "03",
    title: "Ship. Then a 30-day safety net.",
    body: "One round of revisions baked in. Anything broken in 30 days, I fix.",
  },
];

function HowItWorks({ fadeUp }: { fadeUp: object }) {
  return (
    <section id="process" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <motion.div {...fadeUp} className="mb-14 max-w-2xl">
          <Eyebrow>How it works</Eyebrow>
          <h2 className="font-display mt-3 text-4xl leading-tight md:text-5xl">
            Three steps. Zero agency theatre.
          </h2>
        </motion.div>
        <ol className="grid gap-8 md:grid-cols-3">
          {STEPS.map((s, i) => (
            <motion.li
              key={s.n}
              {...fadeUp}
              transition={{ duration: 0.6, delay: 0.05 * i }}
              className="relative"
            >
              <div
                className="font-display text-6xl leading-none"
                style={{
                  backgroundImage: "var(--gradient-aurora)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                }}
                aria-hidden
              >
                {s.n}
              </div>
              <h3 className="font-display mt-3 text-2xl">{s.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed" style={{ color: "var(--ink-soft)" }}>
                {s.body}
              </p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ---------- proof ---------- */

const TESTIMONIALS = [
  {
    quote:
      "Alexa rebuilt our checkout in 9 working days. Conversion up 18%, accessibility audit clean. Worth every euro.",
    name: "Mira Lendell",
    role: "Head of Product, Nordwind",
  },
  {
    quote:
      "She found 41 WCAG blockers our last agency missed and shipped fixes for the top 10 inside the same sprint.",
    name: "Tomás Reis",
    role: "VP Engineering, Pago",
  },
  {
    quote:
      "Senior, opinionated, and fast. Our design system finally has owners and a roadmap.",
    name: "Hannah Okafor",
    role: "Director of Design, Lumen Health",
  },
];

function Proof({ fadeUp }: { fadeUp: object }) {
  return (
    <section
      className="px-6 py-24 md:py-32"
      style={{ backgroundColor: "var(--cream-2)" }}
    >
      <div className="mx-auto max-w-6xl">
        <motion.div {...fadeUp} className="mb-12 flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-xl">
            <Eyebrow>Proof</Eyebrow>
            <h2 className="font-display mt-3 text-4xl leading-tight md:text-5xl">
              Senior people, after the work shipped.
            </h2>
          </div>
          <p className="font-mono-eyebrow" style={{ color: "var(--ink-soft)" }}>
            ★ 4.9 avg · 47 completed projects
          </p>
        </motion.div>
        <div className="grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <motion.figure
              key={t.name}
              {...fadeUp}
              transition={{ duration: 0.6, delay: 0.05 * i }}
              className="flex h-full flex-col rounded-2xl p-7"
              style={{
                backgroundColor: "var(--cream)",
                border: "1px solid color-mix(in oklab, var(--ink) 10%, transparent)",
              }}
            >
              <blockquote className="font-display text-[22px] leading-snug">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-6 text-sm" style={{ color: "var(--ink-soft)" }}>
                <div className="font-semibold" style={{ color: "var(--ink)" }}>{t.name}</div>
                {t.role}
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- numbers ---------- */

const STATS = [
  { value: "15 yrs", label: "in design leadership" },
  { value: "47", label: "shipped engagements" },
  { value: "4.9★", label: "across 47 reviews" },
  { value: "12M+", label: "users on shipped work" },
];

function Numbers({ fadeUp }: { fadeUp: object }) {
  return (
    <section
      aria-label="By the numbers"
      className="px-6 py-20"
      style={{ backgroundImage: "var(--gradient-aurora)", color: "var(--ink)" }}
    >
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-4">
        {STATS.map((s, i) => (
          <motion.div key={s.label} {...fadeUp} transition={{ duration: 0.6, delay: 0.05 * i }}>
            <div className="font-display text-5xl md:text-6xl">{s.value}</div>
            <div className="mt-2 text-sm font-semibold" style={{ color: "var(--ink)" }}>
              {s.label}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

/* ---------- final CTA ---------- */

function FinalCTA({ fadeUp }: { fadeUp: object }) {
  return (
    <section
      className="relative overflow-hidden px-6 py-28 md:py-36"
      style={{ backgroundColor: "var(--surface)", color: "var(--cream)" }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-30 blur-3xl"
        style={{ backgroundImage: "var(--gradient-aurora)" }}
      />
      <motion.div {...fadeUp} className="relative mx-auto max-w-3xl text-center">
        <span className="font-mono-eyebrow" style={{ color: "var(--aurora-3)" }}>
          ● Open for Q3
        </span>
        <h2
          className="font-display mt-5 text-[clamp(2.4rem,5vw,4.5rem)] leading-[1.05]"
          style={{ color: "var(--cream)" }}
        >
          Let&apos;s build something that{" "}
          <span className="aurora-text-block">ships.</span>
        </h2>
        <p
          className="mx-auto mt-6 max-w-xl text-[17px] leading-relaxed"
          style={{ color: "color-mix(in oklab, var(--cream) 78%, transparent)" }}
        >
          Tell me the problem in two sentences. I&apos;ll come back in 24h with
          a scope, a price, and a date.
        </p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-6">
          <PrimaryCTA href="mailto:hello@alexac.studio">
            hello@alexac.studio
          </PrimaryCTA>
          <QuietLink href="https://www.fiverr.com/">Or browse my gigs on Fiverr</QuietLink>
        </div>
      </motion.div>
    </section>
  );
}

/* ---------- footer ---------- */

function Footer() {
  return (
    <footer
      className="px-6 py-10"
      style={{
        backgroundColor: "var(--ink)",
        color: "color-mix(in oklab, var(--cream) 70%, transparent)",
      }}
    >
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 text-sm">
        <Wordmark onDark />
        <div className="flex flex-wrap items-center gap-6">
          <a className="focus-ring hover:text-[color:var(--cream)]" href="mailto:hello@alexac.studio">
            hello@alexac.studio
          </a>
          <a className="focus-ring hover:text-[color:var(--cream)]" href="https://www.fiverr.com/">
            Fiverr
          </a>
          <a className="focus-ring hover:text-[color:var(--cream)]" href="https://www.linkedin.com/">
            LinkedIn
          </a>
        </div>
        <div className="font-mono-eyebrow">© {new Date().getFullYear()} Alexa C.</div>
      </div>
    </footer>
  );
}
