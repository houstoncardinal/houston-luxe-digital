import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AnimatedSection } from "@/components/AnimatedSection";
import { MetricsDashboard } from "@/components/MetricsDashboard";
import { ServicesDashboard } from "@/components/ServicesDashboard";
import { PackageBuilder } from "@/components/PackageBuilder";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nexus Digital Studio — #1 Enterprise Web Design & App Development Agency in Houston, TX" },
      { name: "description", content: "Houston's #1 enterprise digital agency. SOC 2 certified. Specializing in secure web design, full-stack app development, cybersecurity, SEO, and digital strategy for Fortune 500 and high-growth companies." },
      { property: "og:title", content: "Nexus Digital Studio — Houston's #1 Enterprise Digital Agency" },
      { property: "og:description", content: "SOC 2 certified enterprise agency. Secure web design, app development, cybersecurity & digital strategy." },
      { property: "og:type", content: "website" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          name: "Nexus Digital Studio",
          description: "Houston's #1 enterprise digital agency specializing in secure web design, full-stack app development, cybersecurity, and digital strategy.",
          url: "https://nexusstudio.com",
          telephone: "+17135550199",
          address: { "@type": "PostalAddress", streetAddress: "1200 Post Oak Blvd, Suite 800", addressLocality: "Houston", addressRegion: "TX", postalCode: "77056", addressCountry: "US" },
          geo: { "@type": "GeoCoordinates", latitude: 29.7490, longitude: -95.4614 },
          areaServed: { "@type": "City", name: "Houston" },
          priceRange: "$$$",
          aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "127" },
          hasOfferCatalog: { "@type": "OfferCatalog", name: "Digital Services", itemListElement: [
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Enterprise Web Design & Development" }},
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Full-Stack Application Development" }},
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Cybersecurity & Penetration Testing" }},
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Search Engine Optimization" }},
          ]},
        }),
      },
    ],
  }),
  component: HomePage,
});

const enterpriseClients = [
  "Meridian Ventures", "Atlas Commerce", "Elevate Health", "Pinnacle RE",
  "Vertex SaaS", "Luxe Auto", "Houston Energy Co", "Gulf Coast Capital",
  "Apex Logistics", "Sterling Financial", "Frontier Oil & Gas", "Quantum Health",
];

const awards = [
  { name: "Clutch Top Agency", year: "2024" },
  { name: "Awwwards SOTD", year: "3x Winner" },
  { name: "CSS Design Award", year: "Best Agency" },
  { name: "Forbes Technology Council", year: "Member" },
  { name: "Inc. 5000", year: "Fastest Growing" },
  { name: "BBB A+ Rated", year: "Houston" },
];

const testimonials = [
  {
    quote: "Nexus didn't just build our website — they architected our entire digital infrastructure with enterprise-grade security. Revenue increased 340% within six months. They're the only agency we trust with our data.",
    author: "Alexandra Chen",
    role: "CEO, Meridian Ventures",
    metric: "+340%",
    metricLabel: "Revenue",
    company: "$2B AUM",
  },
  {
    quote: "After two failed agency partnerships, Nexus delivered a SOC 2 compliant platform in 12 weeks. Their security-first approach saved us millions in potential breach costs.",
    author: "Marcus Rivera",
    role: "CTO, Atlas Commerce",
    metric: "$8M",
    metricLabel: "Revenue Attributed",
    company: "Series B Startup",
  },
  {
    quote: "Working with Nexus felt like having a Fortune 500 technology partner with startup agility. Their security audit alone uncovered 47 critical vulnerabilities our previous vendor missed.",
    author: "Sarah Mitchell",
    role: "CMO, Elevate Health",
    metric: "47",
    metricLabel: "Vulns Found",
    company: "$15M Series A",
  },
];

function HomePage() {
  return (
    <div className="min-h-screen bg-background dot-grid">
      <Header />

      {/* Hero - Enterprise Command Center */}
      <section className="relative flex min-h-[90vh] items-center overflow-hidden pt-20">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-gold/5 blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 h-72 w-72 rounded-full bg-violet/5 blur-[100px]" />
          <div className="absolute top-1/2 right-1/3 h-64 w-64 rounded-full bg-emerald/5 blur-[100px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 w-full">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <div className="animate-slide-up">
                <div className="flex flex-wrap items-center gap-2">
                  <div className="inline-flex items-center gap-2 rounded-full border border-gold/20 bg-gold/5 px-4 py-1.5">
                    <span className="h-2 w-2 rounded-full bg-gold animate-pulse" />
                    <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-gold">
                      Houston's #1 Digital Agency
                    </span>
                  </div>
                  <div className="inline-flex items-center gap-1.5 rounded-full border border-emerald/20 bg-emerald/5 px-3 py-1.5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-emerald"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                    <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-emerald">SOC 2 Certified</span>
                  </div>
                </div>
              </div>

              <h1 className="animate-slide-up-delayed mt-6 text-4xl font-bold leading-[1.05] tracking-tight text-foreground md:text-5xl lg:text-6xl xl:text-7xl" style={{ opacity: 0 }}>
                Enterprise Digital
                <br />
                Infrastructure for
                <br />
                <span className="text-gradient-gold">Houston's Elite</span>
              </h1>

              <p className="animate-slide-up-delayed-2 mt-5 max-w-lg text-sm leading-relaxed text-muted-foreground md:text-base" style={{ opacity: 0 }}>
                We engineer secure, high-performance digital platforms for companies that can't afford to fail. From Fortune 500 web properties to venture-backed apps — built with zero-compromise security.
              </p>

              <div className="animate-slide-up-delayed-2 mt-8 flex flex-wrap items-center gap-3" style={{ opacity: 0 }}>
                <Button variant="gold" size="lg" asChild>
                  <Link to="/contact">Schedule Enterprise Consultation</Link>
                </Button>
                <Button variant="gold-outline" size="lg" asChild>
                  <Link to="/security">Security Capabilities</Link>
                </Button>
              </div>

              {/* Trust Signals */}
              <div className="animate-slide-up-delayed-2 mt-8 flex flex-wrap items-center gap-4 text-muted-foreground" style={{ opacity: 0 }}>
                <div className="flex items-center gap-1.5">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-emerald"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                  <span className="text-[10px] font-medium">Zero Breaches</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-gold"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                  <span className="text-[10px] font-medium">4.9/5 Rating (127 reviews)</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-cyan"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="m9 11 3 3L22 4"/></svg>
                  <span className="text-[10px] font-medium">200+ Enterprise Projects</span>
                </div>
              </div>
            </div>

            {/* Enterprise Dashboard Preview */}
            <div className="animate-slide-up-delayed hidden lg:block" style={{ opacity: 0 }}>
              <div className="widget space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium text-muted-foreground">Enterprise Control Panel</span>
                  <span className="metric-badge bg-emerald/10 text-emerald border border-emerald/20">
                    <span className="h-1.5 w-1.5 rounded-full bg-current" />
                    All Systems Operational
                  </span>
                </div>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { label: "Active Projects", value: "24", change: "+3 this week", color: "gold" },
                    { label: "Revenue Impact", value: "$4.2M", change: "+18% MoM", color: "emerald" },
                    { label: "Security Score", value: "A+", change: "SOC 2 Compliant", color: "cyan" },
                  ].map((stat) => (
                    <div key={stat.label} className="rounded-xl border border-border/50 bg-background/50 p-3">
                      <span className="text-[10px] text-muted-foreground">{stat.label}</span>
                      <div className={`mt-1 text-xl font-bold text-${stat.color}`}>{stat.value}</div>
                      <span className="text-[10px] font-medium text-emerald">{stat.change}</span>
                    </div>
                  ))}
                </div>
                {/* Threat Monitor */}
                <div className="rounded-xl border border-emerald/20 bg-emerald/5 p-3">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-emerald"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                      <span className="text-[10px] font-medium text-emerald">Threat Monitor</span>
                    </div>
                    <span className="text-[10px] text-emerald font-semibold">0 THREATS</span>
                  </div>
                  <div className="flex items-end gap-0.5 h-10">
                    {Array.from({ length: 30 }, (_, j) => {
                      const h = 10 + Math.random() * 20;
                      return (
                        <div key={j} className="flex-1 rounded-sm bg-emerald" style={{ height: `${h}%`, opacity: 0.3 + (j / 30) * 0.5 }} />
                      );
                    })}
                  </div>
                </div>
                {/* Uptime */}
                <div className="rounded-xl border border-border/30 bg-background/30 p-3">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] text-muted-foreground">99.99% Uptime SLA</span>
                    <span className="text-[10px] font-semibold text-emerald">365 days clean</span>
                  </div>
                  <div className="flex gap-0.5">
                    {Array.from({ length: 52 }, (_, j) => (
                      <div key={j} className="flex-1 h-3 rounded-sm bg-emerald" style={{ opacity: 0.5 + Math.random() * 0.5 }} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Awards & Recognition Bar */}
      <section className="border-y border-border/30 py-5">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-6 lg:gap-10">
            {awards.map((award) => (
              <div key={award.name} className="flex items-center gap-2 text-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-gold shrink-0"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                <div className="flex flex-col items-start">
                  <span className="text-[10px] font-semibold text-foreground leading-none">{award.name}</span>
                  <span className="text-[9px] text-muted-foreground">{award.year}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise Client Ticker */}
      <section className="border-b border-border/30 py-5 overflow-hidden">
        <div className="mb-2 text-center">
          <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-muted-foreground">Trusted by industry leaders across Houston & beyond</span>
        </div>
        <div className="flex animate-ticker">
          {[...enterpriseClients, ...enterpriseClients].map((name, i) => (
            <div key={i} className="flex shrink-0 items-center gap-2 px-8">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-muted text-xs font-bold text-muted-foreground">
                {name.split(" ").map(w => w[0]).join("")}
              </div>
              <span className="text-xs font-medium text-muted-foreground whitespace-nowrap">{name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Live Metrics */}
      <MetricsDashboard />

      {/* Security Highlight Section */}
      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimatedSection>
            <div className="widget overflow-hidden relative">
              <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-emerald/5 blur-[80px]" />
              <div className="relative grid gap-8 lg:grid-cols-2 items-center">
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-emerald"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                    <span className="text-xs font-semibold uppercase tracking-wider text-emerald">Security-First Architecture</span>
                  </div>
                  <h2 className="text-3xl font-bold text-foreground md:text-4xl">
                    Zero Breaches. <span className="text-gradient-gold">Zero Compromises.</span>
                  </h2>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    Every line of code passes OWASP security reviews. Every deployment goes through automated vulnerability scanning. Every client gets enterprise-grade protection — regardless of project size.
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {["SOC 2 Type II", "OWASP Top 10", "Pen Testing", "24/7 Monitoring", "HIPAA Ready"].map((tag) => (
                      <span key={tag} className="rounded-lg border border-emerald/20 bg-emerald/5 px-3 py-1.5 text-[10px] font-medium text-emerald">{tag}</span>
                    ))}
                  </div>
                  <div className="mt-6">
                    <Button variant="gold-outline" size="lg" asChild>
                      <Link to="/security">Explore Security Services →</Link>
                    </Button>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { value: "0", label: "Security Breaches", sublabel: "In 12 years", color: "emerald" },
                    { value: "A+", label: "Security Rating", sublabel: "Independent audit", color: "gold" },
                    { value: "99.9%", label: "Threat Detection", sublabel: "Real-time monitoring", color: "cyan" },
                    { value: "500+", label: "Audits Completed", sublabel: "Enterprise clients", color: "violet" },
                  ].map((s) => (
                    <div key={s.label} className="rounded-xl border border-border/50 bg-background/50 p-4 text-center">
                      <div className={`text-2xl font-bold text-${s.color}`}>{s.value}</div>
                      <div className="text-xs font-medium text-foreground mt-1">{s.label}</div>
                      <div className="text-[10px] text-muted-foreground">{s.sublabel}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Dashboard */}
      <ServicesDashboard />

      {/* Process */}
      <section className="border-y border-border/30 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <span className="metric-badge bg-gold/10 text-gold border border-gold/20">Enterprise Process</span>
            <h2 className="mt-4 text-4xl font-bold text-foreground md:text-5xl">
              How We <span className="text-gradient-gold">Deliver Excellence</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              A battle-tested methodology refined over 200+ enterprise engagements.
            </p>
          </AnimatedSection>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              { step: "01", title: "Discovery & Audit", desc: "Deep-dive into your brand, market, security posture, and competitive landscape. Full digital audit included.", color: "gold" },
              { step: "02", title: "Architecture & Strategy", desc: "Custom technical architecture, security framework, and growth roadmap tailored to your enterprise requirements.", color: "cyan" },
              { step: "03", title: "Secure Development", desc: "Agile sprints with integrated security testing, code reviews, and CI/CD deployment pipelines.", color: "violet" },
              { step: "04", title: "Launch & Scale", desc: "Battle-tested deployment, 24/7 monitoring, performance optimization, and ongoing security maintenance.", color: "emerald" },
            ].map((item, i) => (
              <AnimatedSection key={item.step} delay={i * 120}>
                <div className="widget group text-center h-full">
                  <span className={`text-xs font-bold text-${item.color} uppercase tracking-widest`}>{item.step}</span>
                  <h3 className="mt-3 text-lg font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Package Builder */}
      <PackageBuilder />

      {/* Testimonials */}
      <section className="border-t border-border/30 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <span className="metric-badge bg-gold/10 text-gold border border-gold/20">Enterprise Results</span>
            <h2 className="mt-4 text-4xl font-bold text-foreground md:text-5xl">
              Trusted by <span className="text-gradient-gold">Industry Leaders</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Under NDA with many of Houston's largest enterprises. Here's what our public clients say.
            </p>
          </AnimatedSection>

          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <AnimatedSection key={t.author} delay={i * 120}>
                <div className="widget h-full flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="rounded-xl bg-gold/10 px-3 py-1.5 border border-gold/20">
                          <span className="text-lg font-bold text-gold">{t.metric}</span>
                        </div>
                        <div>
                          <span className="text-xs text-muted-foreground">{t.metricLabel}</span>
                          <div className="text-[10px] text-gold font-medium">{t.company}</div>
                        </div>
                      </div>
                      <div className="flex gap-0.5">
                        {Array.from({length: 5}).map((_, j) => (
                          <svg key={j} xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="currentColor" className="text-gold"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                        ))}
                      </div>
                    </div>
                    <p className="text-sm leading-relaxed text-muted-foreground italic">"{t.quote}"</p>
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

      {/* Enterprise CTA */}
      <section className="relative overflow-hidden py-20 lg:py-28">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/3 h-64 w-64 rounded-full bg-gold/5 blur-[100px]" />
          <div className="absolute bottom-0 right-1/3 h-64 w-64 rounded-full bg-emerald/5 blur-[100px]" />
        </div>
        <div className="relative mx-auto max-w-4xl px-6 text-center lg:px-8">
          <AnimatedSection>
            <div className="widget p-10 md:p-14">
              <div className="flex items-center justify-center gap-3 mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-emerald"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                <span className="text-xs font-semibold uppercase tracking-wider text-emerald">Enterprise-Ready</span>
              </div>
              <h2 className="text-3xl font-bold text-foreground md:text-5xl">
                Ready to Build Something <span className="text-gradient-gold">Bulletproof?</span>
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-sm text-muted-foreground md:text-base">
                Get a complimentary security assessment and custom enterprise proposal. NDA available. SOC 2 compliant processes from day one.
              </p>
              <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
                <Button variant="gold" size="xl" asChild>
                  <Link to="/contact">Schedule Enterprise Consultation</Link>
                </Button>
                <Button variant="gold-outline" size="xl" asChild>
                  <a href="tel:+17135550199">Call (713) 555-0199</a>
                </Button>
              </div>
              <p className="mt-4 text-[10px] text-muted-foreground">Free security audit · NDA available · Response within 4 business hours</p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
}
