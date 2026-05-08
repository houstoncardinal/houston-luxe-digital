import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AnimatedSection } from "@/components/AnimatedSection";
import { PackageBuilder } from "@/components/PackageBuilder";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Enterprise Solutions & Custom Packages — Nexus Digital Studio | Houston TX" },
      { name: "description", content: "Full-service enterprise digital solutions. Secure web design, app development, cybersecurity, SEO, branding, and paid advertising. SOC 2 certified. Houston's #1 agency." },
      { property: "og:title", content: "Enterprise Solutions — Nexus Digital Studio | Houston" },
      { property: "og:description", content: "SOC 2 certified enterprise solutions. Secure web design, app dev, cybersecurity & more." },
    ],
  }),
  component: ServicesPage,
});

const detailedServices = [
  {
    title: "Enterprise Web Design & Development",
    color: "gold",
    description: "Pixel-perfect, high-performance websites engineered for security and conversions. Every site undergoes penetration testing, loads in under 2 seconds, and achieves 3x industry-average conversion rates.",
    features: ["Responsive Design", "Performance Optimization", "CMS Integration", "E-Commerce", "ADA/WCAG Compliance", "Security Hardening"],
    caseStudy: { client: "Meridian Ventures ($2B AUM)", result: "+340% qualified leads", timeline: "8 weeks" },
    security: "All sites pen-tested before launch",
  },
  {
    title: "Full-Stack Application Development",
    color: "cyan",
    description: "Enterprise-grade applications with cloud-native architectures, zero-trust security models, and 99.99% uptime SLAs. From SaaS platforms to mission-critical mobile apps.",
    features: ["Cloud Architecture", "API Development", "Mobile Apps", "Real-Time Systems", "DevSecOps", "99.99% Uptime SLA"],
    caseStudy: { client: "Vertex SaaS (Series B)", result: "200K+ active users", timeline: "16 weeks" },
    security: "SOC 2 compliant infrastructure",
  },
  {
    title: "Cybersecurity & Penetration Testing",
    color: "emerald",
    description: "Comprehensive security services from OSCP-certified experts. Threat modeling, vulnerability assessments, red team operations, and 24/7 security monitoring.",
    features: ["Penetration Testing", "Red Team Ops", "SOC 2 Readiness", "HIPAA Compliance", "Vulnerability Scanning", "Incident Response"],
    caseStudy: { client: "Houston Energy Co", result: "47 critical vulns found & fixed", timeline: "3 weeks" },
    security: "Zero breaches in 12 years",
  },
  {
    title: "Search Engine Optimization",
    color: "emerald",
    description: "Data-driven SEO strategies dominating Houston search results. Technical SEO, content strategy, and local optimization delivering 280% average traffic growth.",
    features: ["Technical SEO", "Local SEO (Houston)", "Content Strategy", "Link Building", "Analytics & Reporting", "Competitor Analysis"],
    caseStudy: { client: "Pinnacle Real Estate", result: "#1 for 50+ keywords", timeline: "6 months" },
    security: "Secure analytics infrastructure",
  },
  {
    title: "Branding & Packaging Design",
    color: "violet",
    description: "Iconic brand identities for enterprises that need to command market presence. Complete visual systems, guidelines, and packaging that create lasting emotional connections.",
    features: ["Logo & Visual Identity", "Brand Guidelines", "Packaging Design", "Brand Strategy", "Business Stationery", "Brand Architecture"],
    caseStudy: { client: "Elevate Health", result: "$15M Series A raised", timeline: "6 weeks" },
    security: "Brand assets in encrypted vaults",
  },
  {
    title: "Paid Advertising & PPC",
    color: "gold",
    description: "High-ROI campaigns across Google, Meta, and LinkedIn with advanced targeting, creative testing, and full-funnel attribution. $8M+ in attributed revenue for Houston clients.",
    features: ["Google Ads", "Meta Ads", "LinkedIn Ads", "Retargeting", "Creative Testing", "ROI Analytics"],
    caseStudy: { client: "Luxe Automotive", result: "$8M attributed revenue", timeline: "6 months" },
    security: "PCI-compliant ad infrastructure",
  },
];

const colorMap: Record<string, { bg: string; text: string; border: string }> = {
  gold: { bg: "bg-gold/10", text: "text-gold", border: "border-gold/20" },
  cyan: { bg: "bg-cyan/10", text: "text-cyan", border: "border-cyan/20" },
  emerald: { bg: "bg-emerald/10", text: "text-emerald", border: "border-emerald/20" },
  violet: { bg: "bg-violet/10", text: "text-violet", border: "border-violet/20" },
  rose: { bg: "bg-rose/10", text: "text-rose", border: "border-rose/20" },
};

function ServicesPage() {
  return (
    <div className="min-h-screen bg-background dot-grid">
      <Header />

      <section className="pb-12 pt-24 lg:pt-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimatedSection className="max-w-4xl">
            <div className="flex flex-wrap items-center gap-2">
              <div className="inline-flex items-center gap-2 rounded-full border border-gold/20 bg-gold/5 px-4 py-1.5">
                <span className="h-2 w-2 rounded-full bg-gold animate-pulse" />
                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-gold">Enterprise Solutions</span>
              </div>
              <div className="inline-flex items-center gap-1.5 rounded-full border border-emerald/20 bg-emerald/5 px-3 py-1.5">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-emerald"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-emerald">Security-First</span>
              </div>
            </div>
            <h1 className="mt-6 text-4xl font-bold text-foreground md:text-5xl lg:text-6xl">
              Every Enterprise Solution <br/><span className="text-gradient-gold">Your Business Needs</span>
            </h1>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
              Fully customizable enterprise services with transparent pricing. Every solution includes security hardening. Build your own package or let us craft one for your organization.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Detailed Services */}
      <section className="pb-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 space-y-6">
          {detailedServices.map((svc, i) => {
            const c = colorMap[svc.color] || colorMap.gold;
            return (
              <AnimatedSection key={svc.title} delay={i * 80}>
                <div className="widget">
                  <div className="grid gap-6 lg:grid-cols-3">
                    <div className="lg:col-span-2">
                      <h3 className={`text-xl font-bold ${c.text}`}>{svc.title}</h3>
                      <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{svc.description}</p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {svc.features.map((f) => (
                          <span key={f} className={`rounded-lg border px-2.5 py-1 text-[10px] font-medium ${c.bg} ${c.text} ${c.border}`}>{f}</span>
                        ))}
                      </div>
                      <div className="mt-3 flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-emerald"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                        <span className="text-[10px] text-emerald font-medium">{svc.security}</span>
                      </div>
                    </div>
                    <div className="rounded-xl border border-border/30 bg-background/50 p-4">
                      <span className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground">Case Study</span>
                      <p className="mt-2 text-sm font-semibold text-foreground">{svc.caseStudy.client}</p>
                      <p className={`mt-1 text-lg font-bold ${c.text}`}>{svc.caseStudy.result}</p>
                      <p className="mt-1 text-[10px] text-muted-foreground">Timeline: {svc.caseStudy.timeline}</p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </section>

      {/* Package Builder */}
      <div className="border-t border-border/30">
        <PackageBuilder />
      </div>

      {/* CTA */}
      <section className="border-t border-border/30 py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <AnimatedSection>
            <div className="widget p-10">
              <h2 className="text-3xl font-bold text-foreground md:text-4xl">
                Need a Custom Enterprise <span className="text-gradient-gold">Solution?</span>
              </h2>
              <p className="mt-3 text-sm text-muted-foreground">
                We specialize in custom enterprise engagements. NDA available. SOC 2 compliant processes.
              </p>
              <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
                <Button variant="gold" size="xl" asChild>
                  <Link to="/contact">Get Enterprise Quote</Link>
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
