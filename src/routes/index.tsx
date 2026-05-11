import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AnimatedSection } from "@/components/AnimatedSection";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import houstonSkyline from "@/assets/houston-skyline.jpg";
import houstonAerial from "@/assets/houston-aerial.jpg";
import houstonStreet from "@/assets/houston-street.jpg";
import houstonNight from "@/assets/houston-night.jpg";
import houstonTeam from "@/assets/houston-team.jpg";
import houstonPark from "@/assets/houston-park.jpg";
import houstonEnergy from "@/assets/houston-energy.jpg";
import houstonMedical from "@/assets/houston-medical.jpg";
import houstonHeights from "@/assets/houston-heights.jpg";
import houstonGalleria from "@/assets/houston-galleria.jpg";
import founder1 from "@/assets/houston-founder-1.jpg";
import founder2 from "@/assets/houston-founder-2.jpg";
import founder3 from "@/assets/houston-founder-3.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nexus Digital Studio — Houston's #1 Web Design & App Development Agency" },
      { name: "description", content: "Houston's premier web development & app development agency. Custom websites, full-stack apps, and digital marketing built for Houston businesses across energy, medical, real estate & retail. 200+ projects. $50M+ revenue generated." },
      { name: "keywords", content: "Houston web design, Houston app development, Houston digital agency, Houston SEO, Houston web developer, Texas web design, Houston software development, Galleria Houston agency" },
      { property: "og:title", content: "Nexus Digital Studio — Houston's #1 Web & App Development Agency" },
      { property: "og:description", content: "Houston's premier digital agency. Websites, apps, and marketing for Houston businesses. 200+ projects delivered." },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "en_US" },
      { name: "geo.region", content: "US-TX" },
      { name: "geo.placename", content: "Houston" },
      { name: "geo.position", content: "29.7604;-95.3698" },
      { name: "ICBM", content: "29.7604, -95.3698" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          name: "Nexus Digital Studio",
          description: "Houston enterprise digital agency specializing in web development, app development, and digital marketing for Houston businesses.",
          url: "https://nexusstudio.com",
          telephone: "+17135550199",
          address: { "@type": "PostalAddress", streetAddress: "1200 Post Oak Blvd, Suite 800", addressLocality: "Houston", addressRegion: "TX", postalCode: "77056", addressCountry: "US" },
          geo: { "@type": "GeoCoordinates", latitude: 29.7604, longitude: -95.3698 },
          areaServed: [
            { "@type": "City", name: "Houston" },
            { "@type": "City", name: "Sugar Land" },
            { "@type": "City", name: "The Woodlands" },
            { "@type": "City", name: "Katy" },
            { "@type": "City", name: "Pearland" },
          ],
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
    headline: "Websites that win Houston customers.",
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
    headline: "Apps your Houston business can scale on.",
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
    headline: "Marketing that drives real Houston revenue.",
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
  { value: 200, suffix: "+", label: "Houston Projects" },
  { value: 50, prefix: "$", suffix: "M+", label: "Revenue Generated" },
  { value: 12, suffix: "yrs", label: "Serving Houston" },
  { value: 98, suffix: "%", label: "Client Retention" },
];

const industries = [
  {
    name: "Energy",
    desc: "Powering Houston's oil, gas, and renewable energy leaders with secure platforms and field operations apps.",
    img: houstonEnergy,
    stat: "23",
    statLabel: "Energy clients",
    color: "gold",
  },
  {
    name: "Medical",
    desc: "HIPAA-compliant platforms for the Texas Medical Center — the largest medical complex in the world.",
    img: houstonMedical,
    stat: "18",
    statLabel: "TMC partners",
    color: "cyan",
  },
  {
    name: "Real Estate",
    desc: "Property platforms and IDX-integrated sites for Houston's booming real estate market.",
    img: houstonHeights,
    stat: "34",
    statLabel: "RE clients",
    color: "emerald",
  },
  {
    name: "Retail & Hospitality",
    desc: "Galleria boutiques, Heights restaurants, Montrose shops — we power Houston's retail.",
    img: houstonGalleria,
    stat: "47",
    statLabel: "Local brands",
    color: "violet",
  },
];

const neighborhoods = [
  "Downtown", "Galleria/Uptown", "The Heights", "Montrose", "River Oaks", "Memorial",
  "Energy Corridor", "Medical Center", "EaDo", "Midtown", "Rice Village", "Sugar Land",
  "The Woodlands", "Katy", "Pearland", "Bellaire", "West U", "Spring Branch",
];

const process = [
  { step: "01", title: "Free Strategy Call", desc: "30 minutes. We listen, ask the right questions, and tell you honestly if we're a fit." },
  { step: "02", title: "Custom Proposal", desc: "Clear scope, timeline, and fixed pricing. No surprises. NDA available on request." },
  { step: "03", title: "Build & Launch", desc: "Weekly progress updates. You see real work every Friday. We launch when it's right." },
  { step: "04", title: "Grow Together", desc: "Ongoing support, optimization, and reporting. Your success is how we measure ours." },
];

const testimonials = [
  {
    quote: "Nexus rebuilt our website and ran our SEO. In six months, qualified leads went up 340%. They're the only agency we trust in Houston.",
    author: "Alexandra Chen",
    role: "CEO, Meridian Ventures · Galleria",
    metric: "+340%",
    metricLabel: "Qualified Leads",
    img: founder3,
  },
  {
    quote: "We needed a SaaS platform fast and secure. Nexus delivered in 12 weeks with SOC 2 compliance built in. Best partner we've worked with.",
    author: "Marcus Rivera",
    role: "CTO, Atlas Commerce · Energy Corridor",
    metric: "12 wks",
    metricLabel: "Build Timeline",
    img: founder2,
  },
  {
    quote: "Their team felt like our team. Brand, website, and ads all working together. Revenue doubled in our first year with them.",
    author: "Sofia Martinez",
    role: "Founder, Elevate Health · Medical Center",
    metric: "2x",
    metricLabel: "Revenue Growth",
    img: founder1,
  },
];

const faqs = [
  { q: "How much does a project cost?", a: "Houston websites typically range $15K–$75K. Apps start at $50K. Marketing retainers begin at $5K/month. Every project gets a fixed quote before we start." },
  { q: "How long does it take?", a: "Most websites launch in 6–10 weeks. Apps run 12–20 weeks depending on scope. Marketing campaigns kick off within 2 weeks." },
  { q: "Do you only work with Houston businesses?", a: "We're proudly Houston-based and most clients are local — Galleria, Heights, Medical Center, Energy Corridor, The Woodlands, Sugar Land, Katy. We also serve businesses across Texas and the US. Local clients get on-site meetings." },
  { q: "What makes you different from other Houston agencies?", a: "Most Houston agencies do one thing. We do web, apps, and marketing under one roof — so your brand, technology, and growth strategy actually work together." },
  { q: "Do you understand Houston's industries?", a: "Yes. We've shipped projects across energy (oil & gas), the Texas Medical Center, real estate, retail, hospitality, and professional services. We speak Houston business." },
];

const colorMap: Record<string, string> = {
  gold: "text-gold",
  cyan: "text-cyan",
  emerald: "text-emerald",
  violet: "text-violet",
};
const bgMap: Record<string, string> = {
  gold: "bg-gold/10 border-gold/20",
  cyan: "bg-cyan/10 border-cyan/20",
  emerald: "bg-emerald/10 border-emerald/20",
  violet: "bg-violet/10 border-violet/20",
};

function HomePage() {
  return (
    <div className="min-h-screen bg-background dot-grid">
      <Header />

      {/* Hero — Editorial masthead */}
      <section className="relative overflow-hidden border-b border-border/70 bg-background pt-28 pb-20 lg:pt-36 lg:pb-28">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src={houstonSkyline}
            alt="Houston Texas downtown skyline at golden hour"
            width={1920}
            height={1080}
            className="absolute inset-0 h-full w-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/85 to-background" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          {/* Masthead bar */}
          <div className="mb-10 flex items-center justify-between border-y border-foreground/15 py-2.5 text-[10px] font-semibold uppercase tracking-[0.28em] text-muted-foreground">
            <span>Vol. XII · No. 47</span>
            <span className="hidden md:inline">The Houston Digital Quarterly</span>
            <span>Monday, May 11, 2026</span>
          </div>

          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-8">
              <div className="animate-slide-up editorial-eyebrow">
                Cover Story · Houston, Texas
              </div>

              <h1
                className="animate-slide-up-delayed editorial-headline mt-6 text-5xl text-foreground md:text-6xl lg:text-7xl xl:text-[5.5rem]"
                style={{ opacity: 0 }}
              >
                Building the digital <em>infrastructure</em> behind Houston's most ambitious companies.
              </h1>

              <div
                className="animate-slide-up-delayed-2 mt-10 max-w-2xl border-l-2 border-primary pl-6"
                style={{ opacity: 0 }}
              >
                <p className="dropcap text-lg leading-relaxed text-foreground/85 md:text-xl">
                  From Galleria boutiques and Energy Corridor enterprises to Texas Medical Center innovators, Nexus designs, engineers, and grows the websites, applications, and brands that define modern Houston business — with the discipline of an editorial newsroom and the rigor of a venture-backed product studio.
                </p>
                <p className="mt-5 text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">
                  — By the Editors of Nexus Studio
                </p>
              </div>

              <div
                className="animate-slide-up-delayed-2 mt-10 flex flex-wrap items-center gap-3"
                style={{ opacity: 0 }}
              >
                <Button variant="gold" size="xl" asChild>
                  <Link to="/contact">Request a Strategy Call</Link>
                </Button>
                <Button variant="gold-outline" size="xl" asChild>
                  <Link to="/services">Read Our Services</Link>
                </Button>
              </div>
            </div>

            {/* Sidebar — "In This Issue" */}
            <aside className="lg:col-span-4">
              <div className="sticky top-28 rounded-sm border border-foreground/15 bg-card/70 p-7 backdrop-blur-sm">
                <div className="editorial-divider mb-5">In This Issue</div>
                <ul className="space-y-4">
                  {[
                    { n: "01", t: "The Houston Index", d: "200+ projects. $50M revenue attributed." },
                    { n: "02", t: "Industry Dispatches", d: "Energy · Medical · Real Estate · Retail" },
                    { n: "03", t: "Studio Doctrine", d: "How we build, measure, and ship." },
                    { n: "04", t: "Client Letters", d: "Founders on partnering with Nexus." },
                  ].map((item) => (
                    <li key={item.n} className="group flex gap-4 border-b border-border/60 pb-4 last:border-0 last:pb-0">
                      <span className="font-serif text-2xl font-bold text-primary leading-none">{item.n}</span>
                      <div>
                        <p className="font-serif text-base font-bold text-foreground">{item.t}</p>
                        <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{item.d}</p>
                      </div>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex items-center justify-between border-t border-border/60 pt-4 text-[10px] font-semibold uppercase tracking-[0.25em] text-muted-foreground">
                  <span>Founded 2013</span>
                  <span className="text-primary">Houston · TX</span>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Trust ticker */}
      <section className="border-b border-border/60 bg-card/40">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-10 gap-y-3 px-6 py-5 text-muted-foreground lg:px-8">
          <div className="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-primary"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
            <span className="text-[11px] font-semibold uppercase tracking-[0.18em]">4.9 / 5 · 127 Houston reviews</span>
          </div>
          <span className="hidden h-3 w-px bg-border md:inline-block" />
          <div className="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-emerald"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            <span className="text-[11px] font-semibold uppercase tracking-[0.18em]">SOC 2 Certified</span>
          </div>
          <span className="hidden h-3 w-px bg-border md:inline-block" />
          <div className="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-foreground"><path d="m9 11 3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>
            <span className="text-[11px] font-semibold uppercase tracking-[0.18em]">200+ Houston Projects · $50M Generated</span>
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

      {/* Three Pillars */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimatedSection className="text-center mb-14">
            <span className="metric-badge bg-gold/10 text-gold border border-gold/20">What We Do</span>
            <h2 className="mt-4 text-4xl font-bold text-foreground md:text-5xl">
              Three Things. <span className="text-gradient-gold">Done Right.</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Most Houston agencies do a little of everything. We focus on the three services Houston businesses actually need to grow.
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

      {/* Houston Industries — full imagery */}
      <section className="border-y border-border/30 py-20 lg:py-28 bg-card/20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimatedSection className="text-center mb-14">
            <span className="metric-badge bg-gold/10 text-gold border border-gold/20">Houston Industries</span>
            <h2 className="mt-4 text-4xl font-bold text-foreground md:text-5xl">
              We Speak <span className="text-gradient-gold">Houston Business.</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              From the Energy Corridor to the Texas Medical Center, we know how Houston's industries work — and what it takes to win in each one.
            </p>
          </AnimatedSection>

          <div className="grid gap-6 md:grid-cols-2">
            {industries.map((ind, i) => (
              <AnimatedSection key={ind.name} delay={i * 100}>
                <div className="group relative overflow-hidden rounded-2xl border border-border/50 bg-card hover-lift">
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={ind.img}
                      alt={`Houston ${ind.name} industry`}
                      width={1600}
                      height={1000}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
                    <div className={`absolute top-4 right-4 rounded-xl border px-3 py-2 backdrop-blur-md ${bgMap[ind.color]}`}>
                      <div className={`text-2xl font-bold ${colorMap[ind.color]}`}>{ind.stat}</div>
                      <div className="text-[10px] text-muted-foreground">{ind.statLabel}</div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className={`text-2xl font-bold ${colorMap[ind.color]}`}>{ind.name}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{ind.desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Houston night skyline parallax band */}
      <section className="relative h-[60vh] overflow-hidden">
        <img
          src={houstonNight}
          alt="Houston Texas downtown skyline at twilight"
          width={1920}
          height={1080}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/10 to-background/80" />
        <div className="relative z-10 flex h-full items-center justify-center px-6">
          <AnimatedSection className="text-center max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">H-Town Forever</span>
            <h2 className="mt-4 text-4xl font-bold text-white drop-shadow-lg md:text-6xl">
              "Houston isn't just where we work. <span className="text-gradient-gold">It's who we are.</span>"
            </h2>
            <p className="mt-6 text-sm text-white/90 drop-shadow md:text-base">
              From Buffalo Bayou to Post Oak. From the Astros to the Rockets. From taquerias on Westheimer to oak trees in the Heights — every line of code we write is shaped by this city.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Inside our Houston studio */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 items-center">
            <AnimatedSection delay={100} className="order-2 lg:order-1">
              <div className="relative overflow-hidden rounded-3xl shadow-gold-sm">
                <img
                  src={houstonTeam}
                  alt="Nexus Digital Studio Houston team collaborating in modern Galleria office"
                  width={1600}
                  height={1000}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
            </AnimatedSection>

            <AnimatedSection className="order-1 lg:order-2">
              <span className="metric-badge bg-gold/10 text-gold border border-gold/20">Inside the Studio</span>
              <h2 className="mt-4 text-4xl font-bold text-foreground md:text-5xl">
                A Houston team that <span className="text-gradient-gold">actually cares.</span>
              </h2>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                42 designers, engineers, strategists, and marketers — all based in Houston. We meet our clients in person. We celebrate launches over Tex-Mex. We answer the phone when you call.
              </p>
              <div className="mt-8 grid grid-cols-3 gap-4">
                <div className="widget text-center">
                  <div className="text-3xl font-bold text-gradient-gold">42</div>
                  <div className="mt-1 text-[10px] uppercase tracking-widest text-muted-foreground">Houston team</div>
                </div>
                <div className="widget text-center">
                  <div className="text-3xl font-bold text-gradient-gold">100%</div>
                  <div className="mt-1 text-[10px] uppercase tracking-widest text-muted-foreground">Local hires</div>
                </div>
                <div className="widget text-center">
                  <div className="text-3xl font-bold text-gradient-gold">4 hr</div>
                  <div className="mt-1 text-[10px] uppercase tracking-widest text-muted-foreground">Avg response</div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Houston neighborhoods served */}
      <section className="border-y border-border/30 py-20 lg:py-28 bg-card/20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] items-center">
            <AnimatedSection>
              <span className="metric-badge bg-emerald/10 text-emerald border border-emerald/20">Where We Serve</span>
              <h2 className="mt-4 text-4xl font-bold text-foreground md:text-5xl">
                Every Houston neighborhood. <span className="text-gradient-gold">Every Texas market.</span>
              </h2>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                Whether you're a Heights bungalow boutique or a Sugar Land enterprise — we ship for businesses across Greater Houston and beyond.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {neighborhoods.map((n) => (
                  <span key={n} className="rounded-full border border-border bg-background px-3 py-1.5 text-xs font-medium text-foreground/80 hover:border-gold/40 hover:text-gold transition-colors">
                    {n}
                  </span>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection delay={120}>
              <div className="grid grid-cols-2 gap-4">
                <div className="relative overflow-hidden rounded-2xl shadow-gold-sm aspect-[4/5]">
                  <img src={houstonHeights} alt="Houston Heights neighborhood" width={1600} height={1000} loading="lazy" className="h-full w-full object-cover" />
                  <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-background/90 to-transparent">
                    <span className="text-[10px] font-semibold uppercase tracking-widest text-gold">The Heights</span>
                  </div>
                </div>
                <div className="relative overflow-hidden rounded-2xl shadow-gold-sm aspect-[4/5]">
                  <img src={houstonGalleria} alt="Houston Galleria district" width={1600} height={1000} loading="lazy" className="h-full w-full object-cover" />
                  <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-background/90 to-transparent">
                    <span className="text-[10px] font-semibold uppercase tracking-widest text-gold">Galleria</span>
                  </div>
                </div>
                <div className="relative overflow-hidden rounded-2xl shadow-gold-sm aspect-[4/5]">
                  <img src={houstonPark} alt="Hermann Park Houston" width={1600} height={1000} loading="lazy" className="h-full w-full object-cover" />
                  <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-background/90 to-transparent">
                    <span className="text-[10px] font-semibold uppercase tracking-widest text-gold">Hermann Park</span>
                  </div>
                </div>
                <div className="relative overflow-hidden rounded-2xl shadow-gold-sm aspect-[4/5]">
                  <img src={houstonMedical} alt="Texas Medical Center" width={1600} height={1000} loading="lazy" className="h-full w-full object-cover" />
                  <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-background/90 to-transparent">
                    <span className="text-[10px] font-semibold uppercase tracking-widest text-gold">Med Center</span>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 lg:py-28">
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

      {/* Testimonials with portraits */}
      <section className="border-y border-border/30 py-20 lg:py-28 bg-card/20">
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
                    <img
                      src={t.img}
                      alt={t.author}
                      width={1024}
                      height={1280}
                      loading="lazy"
                      className="h-11 w-11 rounded-full object-cover ring-2 ring-gold/30"
                    />
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
      <section className="py-20 lg:py-28">
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
