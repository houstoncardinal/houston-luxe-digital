import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AnimatedSection } from "@/components/AnimatedSection";
import { PackageBuilder } from "@/components/PackageBuilder";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services & Custom Packages — Nexus Digital Studio | Houston TX" },
      { name: "description", content: "Build your custom digital package. Web design, app development, SEO, branding, paid ads, and consulting services for Houston businesses. Bundle & save." },
      { property: "og:title", content: "Services & Custom Packages — Nexus Digital Studio" },
      { property: "og:description", content: "Custom digital packages for Houston businesses. Web design, app dev, SEO & more." },
    ],
  }),
  component: ServicesPage,
});

const detailedServices = [
  {
    title: "Web Design & Development",
    color: "gold",
    description: "From stunning landing pages to complex e-commerce platforms. Every site loads in under 2 seconds with 3x industry-average conversion rates.",
    features: ["Responsive Design", "Speed Optimization", "CMS Integration", "E-Commerce", "ADA Compliance", "Custom Animations"],
    caseStudy: { client: "Meridian Ventures", result: "+340% qualified leads", timeline: "8 weeks" },
  },
  {
    title: "Full-Stack App Development",
    color: "cyan",
    description: "Enterprise-grade mobile and web applications built with React, Node.js, and cloud-native architectures handling millions of users.",
    features: ["SaaS Platforms", "Mobile Apps", "API Development", "Real-Time Features", "Cloud Infrastructure", "DevOps"],
    caseStudy: { client: "Vertex SaaS", result: "200K+ active users", timeline: "16 weeks" },
  },
  {
    title: "Search Engine Optimization",
    color: "emerald",
    description: "Comprehensive SEO covering technical optimization, content strategy, and local SEO for Houston businesses. 280% average traffic growth.",
    features: ["Technical SEO", "Local SEO", "Content Strategy", "Link Building", "Analytics", "Competitor Analysis"],
    caseStudy: { client: "Pinnacle RE", result: "#1 for 50+ keywords", timeline: "6 months" },
  },
  {
    title: "Branding & Packaging",
    color: "violet",
    description: "Complete brand identity systems including logos, typography, color palettes, brand guidelines, and packaging design.",
    features: ["Logo Design", "Brand Guidelines", "Visual Identity", "Packaging", "Business Stationery", "Brand Strategy"],
    caseStudy: { client: "Elevate Health", result: "$15M Series A raised", timeline: "6 weeks" },
  },
  {
    title: "Consulting & Digital Auditing",
    color: "rose",
    description: "In-depth digital presence audits, competitor analysis, and strategic consulting with actionable growth recommendations.",
    features: ["Digital Audit", "Competitor Analysis", "UX Review", "Performance Audit", "Growth Roadmap", "Strategic Planning"],
    caseStudy: { client: "Gulf Coast Capital", result: "42% conversion lift", timeline: "3 weeks" },
  },
  {
    title: "Paid Advertising & PPC",
    color: "gold",
    description: "Data-driven campaigns across Google Ads, Meta, LinkedIn with advanced targeting and full-funnel attribution.",
    features: ["Google Ads", "Meta Ads", "LinkedIn Ads", "Retargeting", "Creative Testing", "ROI Analytics"],
    caseStudy: { client: "Luxe Auto", result: "$8M attributed revenue", timeline: "6 months" },
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
          <AnimatedSection className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-gold/20 bg-gold/5 px-4 py-1.5">
              <span className="h-2 w-2 rounded-full bg-gold animate-pulse" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-gold">Full-Service Agency</span>
            </div>
            <h1 className="mt-6 text-4xl font-bold text-foreground md:text-5xl lg:text-6xl">
              Every Solution Your Business <span className="text-gradient-gold">Needs</span>
            </h1>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
              Fully customizable services with transparent pricing. Build your own package or let us craft one for you.
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
                Need Something <span className="text-gradient-gold">Unique?</span>
              </h2>
              <p className="mt-3 text-sm text-muted-foreground">
                We specialize in custom solutions. Tell us what you need and we'll build the perfect package.
              </p>
              <Button variant="gold" size="xl" className="mt-6" asChild>
                <Link to="/contact">Get a Custom Quote</Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
}
