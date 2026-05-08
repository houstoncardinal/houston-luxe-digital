import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "Enterprise Portfolio — Nexus Digital Studio | Award-Winning Houston Projects" },
      { name: "description", content: "200+ enterprise projects. $50M+ in client revenue generated. Explore our award-winning portfolio of secure web design, app development, and cybersecurity engagements." },
      { property: "og:title", content: "Enterprise Portfolio — Nexus Digital Studio" },
      { property: "og:description", content: "200+ enterprise projects. $50M+ client revenue generated. Award-winning digital work." },
    ],
  }),
  component: WorkPage,
});

const categories = ["All", "Web Design", "App Dev", "Security", "SEO", "Branding", "Paid Ads"];

const projects = [
  {
    title: "Meridian Ventures",
    category: "Web Design",
    description: "Complete digital transformation for a $2B investment firm. Custom CMS, investor portal with 2FA, SOC 2 compliant infrastructure, and award-winning design.",
    metric: "+340%",
    metricLabel: "Qualified Leads",
    tech: ["React", "Node.js", "PostgreSQL", "SOC 2"],
    color: "gold",
    tier: "Enterprise",
  },
  {
    title: "Atlas Commerce",
    category: "App Dev",
    description: "Enterprise e-commerce platform handling 50K+ daily transactions with PCI DSS compliance, sub-200ms response times, and zero-downtime deployments.",
    metric: "$8M",
    metricLabel: "Revenue Attributed",
    tech: ["React Native", "AWS", "Stripe", "PCI DSS"],
    color: "cyan",
    tier: "Enterprise",
  },
  {
    title: "Houston Energy Co",
    category: "Security",
    description: "Full penetration testing and security audit for a Fortune 500 energy company. Discovered and remediated 47 critical vulnerabilities across 12 production systems.",
    metric: "47",
    metricLabel: "Vulns Remediated",
    tech: ["Pen Testing", "Red Team", "SIEM", "SOC 2"],
    color: "emerald",
    tier: "Enterprise",
  },
  {
    title: "Elevate Health",
    category: "Branding",
    description: "Complete brand identity and HIPAA-compliant digital platform for a healthcare startup that secured $15M in Series A from top-tier VCs.",
    metric: "$15M",
    metricLabel: "Series A Raised",
    tech: ["Brand Identity", "HIPAA", "React", "AWS"],
    color: "violet",
    tier: "Growth",
  },
  {
    title: "Pinnacle Real Estate",
    category: "SEO",
    description: "Custom property search platform with advanced SEO and schema markup achieving #1 rankings for 50+ Houston-specific keywords.",
    metric: "#1",
    metricLabel: "For 50+ Keywords",
    tech: ["Technical SEO", "Schema.org", "Local SEO"],
    color: "emerald",
    tier: "Growth",
  },
  {
    title: "Vertex SaaS",
    category: "App Dev",
    description: "Enterprise project management platform serving 200K+ users with real-time collaboration, SSO/SAML, and SOC 2 Type II compliance.",
    metric: "200K+",
    metricLabel: "Active Users",
    tech: ["React", "WebSockets", "Kubernetes", "SSO"],
    color: "cyan",
    tier: "Enterprise",
  },
  {
    title: "Gulf Coast Capital",
    category: "Security",
    description: "Comprehensive digital presence audit and competitor analysis for a $500M fund. Identified critical security gaps and delivered a 90-day remediation roadmap.",
    metric: "42%",
    metricLabel: "Conversion Lift",
    tech: ["Security Audit", "UX Audit", "Competitor Intel"],
    color: "emerald",
    tier: "Enterprise",
  },
  {
    title: "Luxe Automotive",
    category: "Paid Ads",
    description: "Integrated paid media campaign with conversion tracking, retargeting, and full-funnel attribution generating $8M in trackable revenue.",
    metric: "8.4x",
    metricLabel: "ROAS",
    tech: ["Google Ads", "Meta Ads", "Attribution"],
    color: "gold",
    tier: "Growth",
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
          <AnimatedSection className="max-w-4xl">
            <div className="flex flex-wrap items-center gap-2">
              <div className="inline-flex items-center gap-2 rounded-full border border-gold/20 bg-gold/5 px-4 py-1.5">
                <span className="h-2 w-2 rounded-full bg-gold animate-pulse" />
                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-gold">Enterprise Portfolio</span>
              </div>
              <div className="inline-flex items-center gap-1.5 rounded-full border border-emerald/20 bg-emerald/5 px-3 py-1.5">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-emerald"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-emerald">NDA Projects Available</span>
              </div>
            </div>
            <h1 className="mt-6 text-4xl font-bold text-foreground md:text-5xl lg:text-6xl">
              Enterprise Results That <span className="text-gradient-gold">Speak</span>
            </h1>
            <p className="mt-4 text-sm text-muted-foreground md:text-base">
              200+ enterprise projects. $50M+ in client revenue generated. Many of our largest engagements are under NDA — contact us for full case studies.
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
                        <div className="flex items-center gap-2 mb-1">
                          <span className={`text-[10px] font-semibold uppercase tracking-wider ${c.text}`}>{project.category}</span>
                          <span className="rounded-md border border-border/50 bg-background/50 px-1.5 py-0.5 text-[9px] font-medium text-muted-foreground">{project.tier}</span>
                        </div>
                        <h3 className="text-xl font-bold text-foreground">{project.title}</h3>
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
                Your Enterprise Project <span className="text-gradient-gold">Starts Here</span>
              </h2>
              <p className="mt-3 text-sm text-muted-foreground">Ready to achieve enterprise-grade results? NDA available for sensitive projects.</p>
              <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
                <Button variant="gold" size="xl" asChild>
                  <Link to="/contact">Start Enterprise Project</Link>
                </Button>
                <Button variant="gold-outline" size="xl" asChild>
                  <Link to="/security">Security Capabilities</Link>
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
