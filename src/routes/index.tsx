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
      { title: "Nexus Digital Studio — Premier Web Design & Development Agency in Houston, TX" },
      { name: "description", content: "Houston's elite digital agency specializing in luxury web design, full-stack app development, SEO, branding, and digital strategy. Custom packages & solutions for your business." },
      { property: "og:title", content: "Nexus Digital Studio — Premier Web Design & Development Agency in Houston, TX" },
      { property: "og:description", content: "Houston's elite digital agency. Custom web design, app dev, SEO, branding & more." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: HomePage,
});

const clientLogos = [
  "Meridian Ventures", "Atlas Commerce", "Elevate Health", "Pinnacle RE",
  "Vertex SaaS", "Luxe Auto", "Houston Energy Co", "Gulf Coast Capital",
];

const testimonials = [
  {
    quote: "Nexus didn't just build our website — they built a digital empire. Revenue increased 340% within six months.",
    author: "Alexandra Chen",
    role: "CEO, Meridian Ventures",
    metric: "+340%",
    metricLabel: "Revenue",
  },
  {
    quote: "The level of craft and strategic thinking is unmatched. Every pixel serves a purpose.",
    author: "Marcus Rivera",
    role: "Founder, Atlas Commerce",
    metric: "28%",
    metricLabel: "AOV Increase",
  },
  {
    quote: "Working with Nexus felt like having a Fortune 500 agency with startup agility. Transformative.",
    author: "Sarah Mitchell",
    role: "CMO, Elevate Health",
    metric: "$15M",
    metricLabel: "Raised",
  },
];

function HomePage() {
  return (
    <div className="min-h-screen bg-background dot-grid">
      <Header />

      {/* Hero - Dashboard Style */}
      <section className="relative flex min-h-[85vh] items-center overflow-hidden pt-20">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-gold/5 blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 h-72 w-72 rounded-full bg-violet/5 blur-[100px]" />
          <div className="absolute top-1/2 right-1/3 h-64 w-64 rounded-full bg-cyan/5 blur-[100px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 w-full">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <div className="animate-slide-up">
                <div className="inline-flex items-center gap-2 rounded-full border border-gold/20 bg-gold/5 px-4 py-1.5">
                  <span className="h-2 w-2 rounded-full bg-gold animate-pulse" />
                  <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-gold">
                    Houston's #1 Digital Agency
                  </span>
                </div>
              </div>

              <h1 className="animate-slide-up-delayed mt-6 text-4xl font-bold leading-[1.1] tracking-tight text-foreground md:text-5xl lg:text-6xl" style={{ opacity: 0 }}>
                Custom Digital
                <br />
                Solutions for Your
                <br />
                <span className="text-gradient-gold">Houston Business</span>
              </h1>

              <p className="animate-slide-up-delayed-2 mt-5 max-w-lg text-sm leading-relaxed text-muted-foreground md:text-base" style={{ opacity: 0 }}>
                We build bespoke websites, applications, and growth strategies tailored to your exact needs. Mix and match services. Pick your add-ons. Get a custom package built for your goals.
              </p>

              <div className="animate-slide-up-delayed-2 mt-8 flex flex-wrap items-center gap-3" style={{ opacity: 0 }}>
                <Button variant="gold" size="lg" asChild>
                  <Link to="/contact">Build Your Package</Link>
                </Button>
                <Button variant="gold-outline" size="lg" asChild>
                  <Link to="/work">View Portfolio</Link>
                </Button>
              </div>
            </div>

            {/* Dashboard Preview Widget */}
            <div className="animate-slide-up-delayed hidden lg:block" style={{ opacity: 0 }}>
              <div className="widget space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium text-muted-foreground">Client Growth Dashboard</span>
                  <span className="metric-badge bg-emerald/10 text-emerald border border-emerald/20">
                    <span className="h-1.5 w-1.5 rounded-full bg-current" />
                    Live
                  </span>
                </div>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { label: "Active Projects", value: "24", change: "+3", color: "gold" },
                    { label: "Revenue Impact", value: "$4.2M", change: "+18%", color: "emerald" },
                    { label: "Satisfaction", value: "98%", change: "+2%", color: "cyan" },
                  ].map((stat) => (
                    <div key={stat.label} className="rounded-xl border border-border/50 bg-background/50 p-3">
                      <span className="text-[10px] text-muted-foreground">{stat.label}</span>
                      <div className={`mt-1 text-xl font-bold text-${stat.color}`}>{stat.value}</div>
                      <span className="text-[10px] font-medium text-emerald">{stat.change}</span>
                    </div>
                  ))}
                </div>
                {/* Mini chart */}
                <div className="rounded-xl border border-border/30 bg-background/30 p-4">
                  <div className="flex items-end gap-1 h-16">
                    {Array.from({ length: 24 }, (_, j) => {
                      const h = 20 + Math.sin(j * 0.4) * 15 + j * 2.5;
                      return (
                        <div
                          key={j}
                          className="flex-1 rounded-sm bg-gold"
                          style={{ height: `${Math.min(h, 100)}%`, opacity: 0.3 + (j / 24) * 0.7 }}
                        />
                      );
                    })}
                  </div>
                  <div className="mt-2 flex justify-between text-[10px] text-muted-foreground">
                    <span>Jan</span><span>Jun</span><span>Dec</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Ticker */}
      <section className="border-y border-border/30 py-6 overflow-hidden">
        <div className="flex animate-ticker">
          {[...clientLogos, ...clientLogos].map((name, i) => (
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

      {/* Services Dashboard */}
      <ServicesDashboard />

      {/* Process */}
      <section className="border-y border-border/30 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <span className="metric-badge bg-gold/10 text-gold border border-gold/20">Process</span>
            <h2 className="mt-4 text-4xl font-bold text-foreground md:text-5xl">
              How We <span className="text-gradient-gold">Deliver</span>
            </h2>
          </AnimatedSection>

          <div className="grid gap-6 md:grid-cols-4">
            {[
              { step: "01", title: "Discovery", desc: "Deep-dive into your brand, market, and competitors.", icon: "🔍", color: "gold" },
              { step: "02", title: "Strategy", desc: "Custom roadmap combining data with creative vision.", icon: "📊", color: "cyan" },
              { step: "03", title: "Build", desc: "Meticulous design and development with obsessive detail.", icon: "⚡", color: "violet" },
              { step: "04", title: "Scale", desc: "Launch, optimize, and accelerate your growth.", icon: "🚀", color: "emerald" },
            ].map((item, i) => (
              <AnimatedSection key={item.step} delay={i * 120}>
                <div className="widget group text-center">
                  <div className="text-3xl mb-3">{item.icon}</div>
                  <span className={`text-xs font-bold text-${item.color} uppercase tracking-widest`}>{item.step}</span>
                  <h3 className="mt-2 text-lg font-semibold text-foreground">{item.title}</h3>
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
            <span className="metric-badge bg-gold/10 text-gold border border-gold/20">Results</span>
            <h2 className="mt-4 text-4xl font-bold text-foreground md:text-5xl">
              Client <span className="text-gradient-gold">Success Stories</span>
            </h2>
          </AnimatedSection>

          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <AnimatedSection key={t.author} delay={i * 120}>
                <div className="widget h-full flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="rounded-xl bg-gold/10 px-3 py-1.5 border border-gold/20">
                        <span className="text-lg font-bold text-gold">{t.metric}</span>
                      </div>
                      <span className="text-xs text-muted-foreground">{t.metricLabel}</span>
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

      {/* CTA */}
      <section className="relative overflow-hidden py-20 lg:py-28">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/3 h-64 w-64 rounded-full bg-gold/5 blur-[100px]" />
          <div className="absolute bottom-0 right-1/3 h-64 w-64 rounded-full bg-violet/5 blur-[100px]" />
        </div>
        <div className="relative mx-auto max-w-4xl px-6 text-center lg:px-8">
          <AnimatedSection>
            <div className="widget p-10 md:p-14">
              <h2 className="text-3xl font-bold text-foreground md:text-5xl">
                Ready to Build Something <span className="text-gradient-gold">Extraordinary?</span>
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-sm text-muted-foreground md:text-base">
                Get a custom proposal for your Houston business. Packages start at $2,000 with bundle discounts for multiple services.
              </p>
              <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
                <Button variant="gold" size="xl" asChild>
                  <Link to="/contact">Get Your Free Audit</Link>
                </Button>
                <Button variant="gold-outline" size="xl" asChild>
                  <a href="tel:+17135550199">Call (713) 555-0199</a>
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
}
