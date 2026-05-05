import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "Portfolio — Nexus Digital Studio | Award-Winning Houston Projects" },
      { name: "description", content: "Explore our portfolio of award-winning web design, app development, and branding projects for visionary brands across Houston and beyond." },
      { property: "og:title", content: "Portfolio — Nexus Digital Studio" },
      { property: "og:description", content: "Award-winning web design, app development, and branding projects." },
    ],
  }),
  component: WorkPage,
});

const categories = ["All", "Web Design", "App Dev", "SEO", "Branding", "Paid Ads"];

const projects = [
  {
    title: "Meridian Ventures",
    category: "Web Design",
    description: "Complete digital transformation for a $2B investment firm. Custom CMS, investor portal, and award-winning design.",
    metric: "+340%",
    metricLabel: "Qualified Leads",
    tech: ["React", "Node.js", "PostgreSQL"],
    color: "gold",
  },
  {
    title: "Atlas Commerce",
    category: "App Dev",
    description: "Enterprise e-commerce platform handling 50K+ daily transactions with sub-200ms response times.",
    metric: "+28%",
    metricLabel: "Avg. Order Value",
    tech: ["React Native", "AWS", "Stripe"],
    color: "cyan",
  },
  {
    title: "Elevate Health",
    category: "Branding",
    description: "Complete brand identity and digital platform for a healthcare startup that secured $15M in Series A.",
    metric: "$15M",
    metricLabel: "Series A Raised",
    tech: ["Brand Identity", "Web Design", "Content"],
    color: "violet",
  },
  {
    title: "Pinnacle Real Estate",
    category: "SEO",
    description: "Custom property search platform with advanced SEO achieving #1 rankings for 50+ Houston keywords.",
    metric: "#1",
    metricLabel: "For 50+ Keywords",
    tech: ["Next.js", "SEO", "Local SEO"],
    color: "emerald",
  },
  {
    title: "Vertex SaaS",
    category: "App Dev",
    description: "Enterprise project management platform serving 200K+ users with real-time collaboration.",
    metric: "200K+",
    metricLabel: "Active Users",
    tech: ["React", "WebSockets", "Kubernetes"],
    color: "cyan",
  },
  {
    title: "Luxe Automotive",
    category: "Paid Ads",
    description: "Integrated paid media and brand campaign generating $8M in attributed revenue within 6 months.",
    metric: "$8M",
    metricLabel: "Revenue Generated",
    tech: ["Google Ads", "Meta Ads", "Analytics"],
    color: "gold",
  },
];

const colorMap: Record<string, { bg: string; text: string; border: string }> = {
  gold: { bg: "bg-gold/10", text: "text-gold", border: "border-gold/20" },
  cyan: { bg: "bg-cyan/10", text: "text-cyan", border: "border-cyan/20" },
  emerald: { bg: "bg-emerald/10", text: "text-emerald", border: "border-emerald/20" },
  violet: { bg: "bg-violet/10", text: "text-violet", border: "border-violet/20" },
};

function WorkPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const filtered = activeCategory === "All" ? projects : projects.filter(p => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-background dot-grid">
      <Header />

      <section className="pb-8 pt-24 lg:pt-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimatedSection className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-gold/20 bg-gold/5 px-4 py-1.5">
              <span className="h-2 w-2 rounded-full bg-gold animate-pulse" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-gold">Portfolio</span>
            </div>
            <h1 className="mt-6 text-4xl font-bold text-foreground md:text-5xl lg:text-6xl">
              Results That <span className="text-gradient-gold">Speak</span>
            </h1>
            <p className="mt-4 text-sm text-muted-foreground md:text-base">
              Real projects. Real metrics. Real impact for Houston businesses and beyond.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="pb-8">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimatedSection delay={100}>
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`rounded-xl px-4 py-2 text-xs font-medium transition-all duration-200 ${
                    activeCategory === cat
                      ? "bg-gold/10 text-gold border border-gold/20"
                      : "border border-border/50 text-muted-foreground hover:text-foreground hover:border-border"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2">
            {filtered.map((project, i) => {
              const c = colorMap[project.color] || colorMap.gold;
              return (
                <AnimatedSection key={project.title} delay={i * 80}>
                  <div className="widget group hover-lift">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <span className={`text-[10px] font-semibold uppercase tracking-wider ${c.text}`}>{project.category}</span>
                        <h3 className="mt-1 text-xl font-bold text-foreground">{project.title}</h3>
                      </div>
                      <div className={`rounded-xl ${c.bg} ${c.border} border px-3 py-2 text-center`}>
                        <div className={`text-xl font-bold ${c.text}`}>{project.metric}</div>
                        <div className="text-[10px] text-muted-foreground">{project.metricLabel}</div>
                      </div>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed">{project.description}</p>
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {project.tech.map((t) => (
                        <span key={t} className="rounded-md border border-border/50 bg-background/50 px-2 py-0.5 text-[10px] text-muted-foreground">{t}</span>
                      ))}
                    </div>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border/30 py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <AnimatedSection>
            <div className="widget p-10">
              <h2 className="text-3xl font-bold text-foreground md:text-4xl">
                Your Project Could Be <span className="text-gradient-gold">Next</span>
              </h2>
              <p className="mt-3 text-sm text-muted-foreground">Ready to achieve extraordinary results?</p>
              <Button variant="gold" size="xl" className="mt-6" asChild>
                <Link to="/contact">Start Your Project</Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
}
