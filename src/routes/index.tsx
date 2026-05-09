import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AnimatedSection } from "@/components/AnimatedSection";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import houstonSkyline from "@/assets/houston-skyline.jpg";
import houstonAerial from "@/assets/houston-aerial.jpg";
import houstonStreet from "@/assets/houston-street.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nexus Digital Studio — Web Design, App Development & Digital Marketing | Houston, TX" },
      { name: "description", content: "Houston's enterprise digital agency. We build websites, apps, and marketing engines that grow Houston businesses. SOC 2 certified. 200+ projects delivered." },
      { property: "og:title", content: "Nexus Digital Studio — Houston Web, App & Marketing Agency" },
      { property: "og:description", content: "Websites, apps, and marketing for Houston businesses. Enterprise quality. Clear pricing. Real results." },
      { property: "og:type", content: "website" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          name: "Nexus Digital Studio",
          description: "Houston enterprise digital agency specializing in web development, app development, and digital marketing.",
          url: "https://nexusstudio.com",
          telephone: "+17135550199",
          address: { "@type": "PostalAddress", streetAddress: "1200 Post Oak Blvd, Suite 800", addressLocality: "Houston", addressRegion: "TX", postalCode: "77056", addressCountry: "US" },
          areaServed: { "@type": "City", name: "Houston" },
          priceRange: "$$$",
          aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "127" },
        }),
      },
    ],
  }),
  component: HomePage,
});

const pillars = [
  {
    tag: "01",
    color: "gold",
    title: "Web Development",
    headline: "Websites that win customers.",
    desc: "Custom-designed, lightning-fast websites built for Houston businesses. Every site is engineered to convert visitors into revenue.",
    bullets: [
      "Custom design — no templates",
      "Loads in under 2 seconds",
      "Built for Google rankings",
      "Mobile-first, fully responsive",
    ],
    stat: "3x",
    statLabel: "Avg. conversion lift",
  },
  {
    tag: "02",
    color: "cyan",
    title: "App Development",
    headline: "Apps your business can scale on.",
    desc: "Full-stack web and mobile apps built with enterprise security from day one. Whether it's a SaaS platform or internal tool — we ship reliable software.",
    bullets: [
      "iOS, Android & web apps",
      "Secure cloud infrastructure",
      "99.99% uptime SLA",
      "SOC 2 compliant by default",
    ],
    stat: "200K+",
    statLabel: "Active users powered",
  },
  {
    tag: "03",
    color: "emerald",
    title: "Digital Marketing",
    headline: "Marketing that drives real revenue.",
    desc: "SEO, paid ads, branding, and full-funnel campaigns engineered to grow Houston businesses. Every dollar tracked. Every result reported.",
    bullets: [
      "SEO & local Houston rankings",
      "Google, Meta & LinkedIn ads",
      "Branding & packaging design",
      "Monthly reporting you'll actually read",
    ],
    stat: "$8M+",
    statLabel: "Client revenue attributed",
  },
];

const proofStats = [
  { value: 200, suffix: "+", label: "Projects Delivered" },
  { value: 50, prefix: "$", suffix: "M+", label: "Revenue Generated" },
  { value: 12, suffix: "yrs", label: "In Houston" },
  { value: 98, suffix: "%", label: "Client Retention" },
];

const process = [
  { step: "01", title: "Free Strategy Call", desc: "30 minutes. We listen, ask the right questions, and tell you honestly if we're a fit." },
  { step: "02", title: "Custom Proposal", desc: "Clear scope, timeline, and fixed pricing. No surprises. NDA available on request." },
  { step: "03", title: "Build & Launch", desc: "Weekly progress updates. You see real work every Friday. We launch when it's right." },
  { step: "04", title: "Grow Together", desc: "Ongoing support, optimization, and reporting. Your success is how we measure ours." },
];

const testimonials = [
  {
    quote: "Nexus rebuilt our website and ran our SEO. In six months, qualified leads went up 340%. They're the only agency we trust.",
    author: "Alexandra Chen",
    role: "CEO, Meridian Ventures",
    metric: "+340%",
    metricLabel: "Qualified Leads",
  },
  {
    quote: "We needed a SaaS platform fast and secure. Nexus delivered in 12 weeks with SOC 2 compliance built in. Best partner we've worked with.",
    author: "Marcus Rivera",
    role: "CTO, Atlas Commerce",
    metric: "12 wks",
    metricLabel: "Build Timeline",
  },
  {
    quote: "Their team felt like our team. Brand, website, and ads all working together. Revenue doubled in our first year with them.",
    author: "Sarah Mitchell",
    role: "CMO, Elevate Health",
    metric: "2x",
    metricLabel: "Revenue Growth",
  },
];

const faqs = [
  { q: "How much does a project cost?", a: "Websites typically range $15K–$75K. Apps start at $50K. Marketing retainers begin at $5K/month. Every project gets a fixed quote before we start." },
  { q: "How long does it take?", a: "Most websites launch in 6–10 weeks. Apps run 12–20 weeks depending on scope. Marketing campaigns kick off within 2 weeks." },
  { q: "Do you only work with Houston businesses?", a: "We're proudly Houston-based and most clients are local — but we serve companies across Texas and the US. Local clients get on-site meetings." },
  { q: "What makes you different?", a: "Most agencies do one thing. We do web, apps, and marketing under one roof — so your brand, technology, and growth strategy actually work together." },
];

const colorMap: Record<string, string> = {
  gold: "text-gold",
  cyan: "text-cyan",
  emerald: "text-emerald",
};
const bgMap: Record<string, string> = {
  gold: "bg-gold/10 border-gold/20",
  cyan: "bg-cyan/10 border-cyan/20",
  emerald: "bg-emerald/10 border-emerald/20",
};

function HomePage() {
  return (
    <div className="min-h-screen bg-background dot-grid">
      <Header />

      {/* Hero */}
      <section className="relative flex min-h-[92vh] items-center overflow-hidden pt-20">
        {/* Houston skyline backdrop */}
        <div className="absolute inset-0 overflow-hidden">
          <img
            src={houstonSkyline}
            alt="Houston Texas downtown skyline at golden hour"
            width={1920}
            height={1080}
            className="absolute inset-0 h-full w-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background" />
          <div className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-gold/15 blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 h-72 w-72 rounded-full bg-emerald/10 blur-[100px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-5xl px-6 text-center lg:px-8 w-full">
          <div className="animate-slide-up flex justify-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-gold/20 bg-gold/5 px-4 py-1.5">
              <span className="h-2 w-2 rounded-full bg-gold animate-pulse" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-gold">
                Houston, TX · Enterprise Digital Agency
              </span>
            </div>
          </div>

          <h1 className="animate-slide-up-delayed mt-8 text-5xl font-bold leading-[1.05] tracking-tight text-foreground md:text-6xl lg:text-7xl" style={{ opacity: 0 }}>
            We build <span className="text-gradient-gold">websites, apps,</span><br />
            and marketing that <br/>grow Houston businesses.
          </h1>

          <p className="animate-slide-up-delayed-2 mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg" style={{ opacity: 0 }}>
            Three things, done exceptionally well. Custom websites that convert. Full-stack apps you can scale on. Digital marketing that drives real revenue. All under one Houston roof.
          </p>

          <div className="animate-slide-up-delayed-2 mt-10 flex flex-wrap items-center justify-center gap-3" style={{ opacity: 0 }}>
            <Button variant="gold" size="xl" asChild>
              <Link to="/contact">Get a Free Strategy Call</Link>
            </Button>
            <Button variant="gold-outline" size="xl" asChild>
              <Link to="/services">See Our Services</Link>
            </Button>
          </div>

          <div className="animate-slide-up-delayed-2 mt-10 flex flex-wrap items-center justify-center gap-6 text-muted-foreground" style={{ opacity: 0 }}>
            <div className="flex items-center gap-1.5">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-gold"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
              <span className="text-xs font-medium">4.9/5 · 127 reviews</span>
            </div>
            <div className="flex items-center gap-1.5">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-emerald"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              <span className="text-xs font-medium">SOC 2 Certified</span>
            </div>
            <div className="flex items-center gap-1.5">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-cyan"><path d="m9 11 3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>
              <span className="text-xs font-medium">200+ Projects Delivered</span>
            </div>
          </div>
        </div>
      </section>

      {/* Proof Stats */}
      <section className="border-y border-border/30 py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {proofStats.map((s) => (
              <div key={s.label} className="text-center">
                <AnimatedCounter
                  end={s.value}
                  prefix={s.prefix || ""}
                  suffix={s.suffix || ""}
                  className="text-4xl font-bold text-gradient-gold md:text-5xl"
                />
                <p className="mt-2 text-xs font-medium uppercase tracking-widest text-muted-foreground">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Built in Houston — imagery band */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2 items-center">
            <AnimatedSection>
              <span className="metric-badge bg-gold/10 text-gold border border-gold/20">Built in Houston</span>
              <h2 className="mt-4 text-4xl font-bold text-foreground md:text-5xl">
                Proudly born on <span className="text-gradient-gold">Post Oak Boulevard.</span>
              </h2>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                We're not a remote agency pretending to know your market. Our team works from the Galleria, meets clients at Post Oak Hotel, and ships projects for Houston businesses across energy, healthcare, real estate, and tech.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  "Local team. On-site meetings. Same-day response.",
                  "Deep network across Houston's enterprise community.",
                  "12 years building for Texas businesses.",
                ].map((b) => (
                  <li key={b} className="flex items-start gap-3 text-sm text-foreground/90">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mt-0.5 shrink-0 text-gold"><polyline points="20 6 9 17 4 12"/></svg>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button variant="gold" size="lg" asChild>
                  <Link to="/about">Meet the Team</Link>
                </Button>
                <Button variant="gold-outline" size="lg" asChild>
                  <Link to="/work">View Houston Work</Link>
                </Button>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={120}>
              <div className="grid grid-cols-2 gap-4">
                <div className="relative overflow-hidden rounded-2xl shadow-gold-sm row-span-2">
                  <img
                    src={houstonAerial}
                    alt="Aerial view of Houston Texas downtown at sunrise"
                    width={1600}
                    height={1000}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-background/80 to-transparent">
                    <span className="text-[10px] font-semibold uppercase tracking-widest text-gold">Downtown Houston</span>
                    <p className="text-sm font-semibold text-foreground">Where ambition meets execution.</p>
                  </div>
                </div>
                <div className="relative overflow-hidden rounded-2xl shadow-gold-sm">
                  <img
                    src={houstonStreet}
                    alt="Houston Texas modern glass office buildings on a sunlit street"
                    width={1400}
                    height={900}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
                <div className="widget flex flex-col justify-center">
                  <span className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">Headquartered at</span>
                  <p className="mt-1 text-sm font-semibold text-foreground">1200 Post Oak Blvd</p>
                  <p className="text-sm text-muted-foreground">Suite 800, Houston TX 77056</p>
                  <div className="mt-3 flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-emerald animate-pulse" />
                    <span className="text-[10px] font-medium text-emerald">Open & taking new clients</span>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimatedSection className="text-center mb-14">
            <span className="metric-badge bg-gold/10 text-gold border border-gold/20">What We Do</span>
            <h2 className="mt-4 text-4xl font-bold text-foreground md:text-5xl">
              Three Things. <span className="text-gradient-gold">Done Right.</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Most agencies do a little of everything. We focus on the three services Houston businesses actually need to grow.
            </p>
          </AnimatedSection>

          <div className="grid gap-6 lg:grid-cols-3">
            {pillars.map((p, i) => (
              <AnimatedSection key={p.title} delay={i * 120}>
                <div className="widget h-full flex flex-col">
                  <div className="flex items-center justify-between">
                    <span className={`text-xs font-bold uppercase tracking-widest ${colorMap[p.color]}`}>{p.tag} · {p.title}</span>
                    <div className={`rounded-lg border px-2.5 py-1 ${bgMap[p.color]}`}>
                      <span className={`text-xs font-bold ${colorMap[p.color]}`}>{p.stat}</span>
                    </div>
                  </div>
                  <h3 className="mt-4 text-2xl font-bold text-foreground">{p.headline}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
                  <ul className="mt-5 space-y-2.5 flex-1">
                    {p.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2 text-sm text-foreground/90">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={`mt-0.5 shrink-0 ${colorMap[p.color]}`}><polyline points="20 6 9 17 4 12"/></svg>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 border-t border-border/30 pt-4">
                    <p className="text-[10px] uppercase tracking-widest text-muted-foreground">{p.statLabel}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Button variant="gold-outline" size="lg" asChild>
              <Link to="/services">Explore All Services →</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="border-y border-border/30 py-20 lg:py-28 bg-card/20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimatedSection className="text-center mb-14">
            <span className="metric-badge bg-gold/10 text-gold border border-gold/20">How It Works</span>
            <h2 className="mt-4 text-4xl font-bold text-foreground md:text-5xl">
              Simple. <span className="text-gradient-gold">Transparent. Fast.</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              No 40-page proposals. No surprise invoices. Just a clear path from "hello" to "launch".
            </p>
          </AnimatedSection>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {process.map((item, i) => (
              <AnimatedSection key={item.step} delay={i * 100}>
                <div className="widget h-full">
                  <span className="text-2xl font-bold text-gradient-gold">{item.step}</span>
                  <h3 className="mt-3 text-lg font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimatedSection className="text-center mb-14">
            <span className="metric-badge bg-gold/10 text-gold border border-gold/20">Client Results</span>
            <h2 className="mt-4 text-4xl font-bold text-foreground md:text-5xl">
              Houston Businesses, <span className="text-gradient-gold">Real Growth.</span>
            </h2>
          </AnimatedSection>

          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <AnimatedSection key={t.author} delay={i * 120}>
                <div className="widget h-full flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="rounded-xl bg-gold/10 px-3 py-1.5 border border-gold/20">
                        <span className="text-lg font-bold text-gold">{t.metric}</span>
                        <span className="ml-2 text-[10px] text-muted-foreground">{t.metricLabel}</span>
                      </div>
                      <div className="flex gap-0.5">
                        {Array.from({length: 5}).map((_, j) => (
                          <svg key={j} xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="currentColor" className="text-gold"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                        ))}
                      </div>
                    </div>
                    <p className="text-sm leading-relaxed text-foreground/90 italic">"{t.quote}"</p>
                  </div>
                  <div className="mt-6 border-t border-border/30 pt-4 flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-gold text-xs font-bold text-primary-foreground">
                      {t.author.split(" ").map(n => n[0]).join("")}
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-foreground">{t.author}</p>
                      <p className="text-[10px] text-muted-foreground">{t.role}</p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-border/30 py-20 lg:py-28 bg-card/20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <span className="metric-badge bg-gold/10 text-gold border border-gold/20">Common Questions</span>
            <h2 className="mt-4 text-4xl font-bold text-foreground md:text-5xl">
              Straight <span className="text-gradient-gold">Answers.</span>
            </h2>
          </AnimatedSection>
          <div className="space-y-4">
            {faqs.map((f, i) => (
              <AnimatedSection key={f.q} delay={i * 80}>
                <details className="widget group cursor-pointer">
                  <summary className="flex items-center justify-between gap-4 list-none">
                    <h3 className="text-base font-semibold text-foreground">{f.q}</h3>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-gold shrink-0 transition-transform group-open:rotate-45"><path d="M12 5v14"/><path d="M5 12h14"/></svg>
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
                </details>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative overflow-hidden py-20 lg:py-28">
        <div className="absolute inset-0">
          <img src={houstonSkyline} alt="" aria-hidden="true" loading="lazy" width={1920} height={1080} className="absolute inset-0 h-full w-full object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/70 to-background" />
          <div className="absolute top-0 left-1/3 h-64 w-64 rounded-full bg-gold/10 blur-[100px]" />
          <div className="absolute bottom-0 right-1/3 h-64 w-64 rounded-full bg-emerald/10 blur-[100px]" />
        </div>
        <div className="relative mx-auto max-w-4xl px-6 text-center lg:px-8">
          <AnimatedSection>
            <div className="widget p-10 md:p-14">
              <h2 className="text-3xl font-bold text-foreground md:text-5xl">
                Let's grow your <span className="text-gradient-gold">Houston business.</span>
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-sm text-muted-foreground md:text-base">
                Book a free 30-minute strategy call. We'll review your website, analyze your competitors, and give you 3 specific ways to grow — even if you don't hire us.
              </p>
              <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
                <Button variant="gold" size="xl" asChild>
                  <Link to="/contact">Book Your Free Strategy Call</Link>
                </Button>
                <Button variant="gold-outline" size="xl" asChild>
                  <a href="tel:+17135550199">Call (713) 555-0199</a>
                </Button>
              </div>
              <p className="mt-4 text-[10px] text-muted-foreground">No obligation · NDA available · We respond within 4 business hours</p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
}
