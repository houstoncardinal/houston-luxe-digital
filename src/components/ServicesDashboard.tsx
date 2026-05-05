import { useState } from "react";
import { AnimatedSection } from "./AnimatedSection";
import { Link } from "@tanstack/react-router";

interface ServiceWidget {
  id: string;
  title: string;
  shortTitle: string;
  description: string;
  features: string[];
  metric: string;
  metricLabel: string;
  color: string;
  icon: React.ReactNode;
}

const serviceWidgets: ServiceWidget[] = [
  {
    id: "web",
    title: "Web Design & Development",
    shortTitle: "Web Design",
    description: "Pixel-perfect, high-performance websites that captivate and convert. Every site loads under 2 seconds with 3x industry-average conversion rates.",
    features: ["Responsive Design", "Performance Optimization", "CMS Integration", "E-Commerce Ready", "ADA Compliant"],
    metric: "< 2s",
    metricLabel: "Avg. Load Time",
    color: "gold",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/></svg>,
  },
  {
    id: "app",
    title: "Full-Stack App Development",
    shortTitle: "App Dev",
    description: "Enterprise-grade applications with cloud-native architectures. From SaaS platforms to mobile apps serving millions of users.",
    features: ["React / React Native", "Cloud Architecture", "API Development", "Real-Time Features", "99.99% Uptime"],
    metric: "99.99%",
    metricLabel: "Uptime SLA",
    color: "cyan",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="m18 16 4-4-4-4"/><path d="m6 8-4 4 4 4"/><path d="m14.5 4-5 16"/></svg>,
  },
  {
    id: "seo",
    title: "Search Engine Optimization",
    shortTitle: "SEO",
    description: "Data-driven strategies that dominate search rankings. Our Houston clients average 280% organic traffic growth within 12 months.",
    features: ["Technical SEO", "Local SEO (Houston)", "Content Strategy", "Link Building", "Analytics & Reporting"],
    metric: "280%",
    metricLabel: "Avg. Traffic Growth",
    color: "emerald",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>,
  },
  {
    id: "brand",
    title: "Branding & Packaging",
    shortTitle: "Branding",
    description: "Iconic brand identities and packaging designs that command market presence and create lasting emotional connections with your audience.",
    features: ["Logo Design", "Brand Guidelines", "Packaging Design", "Visual Identity", "Brand Strategy"],
    metric: "100+",
    metricLabel: "Brands Created",
    color: "violet",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2 2 7l10 5 10-5-10-5Z"/><path d="m2 17 10 5 10-5"/><path d="m2 12 10 5 10-5"/></svg>,
  },
  {
    id: "audit",
    title: "Consulting & Auditing",
    shortTitle: "Auditing",
    description: "Comprehensive digital audits and strategic consulting. Competitor analysis, UX reviews, and actionable growth roadmaps.",
    features: ["Digital Presence Audit", "Competitor Analysis", "UX Audit", "Performance Review", "Growth Roadmap"],
    metric: "45+",
    metricLabel: "Audits Completed",
    color: "rose",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>,
  },
  {
    id: "ads",
    title: "Paid Advertising",
    shortTitle: "Paid Ads",
    description: "High-ROI campaigns across Google, Meta, and LinkedIn. Advanced targeting, creative testing, and full-funnel attribution.",
    features: ["Google Ads", "Meta Ads", "LinkedIn Ads", "Retargeting", "ROI Analytics"],
    metric: "8.4x",
    metricLabel: "Avg. ROAS",
    color: "gold",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20V10"/><path d="M18 20V4"/><path d="M6 20v-4"/></svg>,
  },
];

const colorStyles: Record<string, { bg: string; text: string; border: string; glow: string }> = {
  gold: { bg: "bg-gold/10", text: "text-gold", border: "border-gold/20", glow: "shadow-[0_0_30px_-10px] shadow-gold/20" },
  cyan: { bg: "bg-cyan/10", text: "text-cyan", border: "border-cyan/20", glow: "shadow-[0_0_30px_-10px] shadow-cyan/20" },
  emerald: { bg: "bg-emerald/10", text: "text-emerald", border: "border-emerald/20", glow: "shadow-[0_0_30px_-10px] shadow-emerald/20" },
  violet: { bg: "bg-violet/10", text: "text-violet", border: "border-violet/20", glow: "shadow-[0_0_30px_-10px] shadow-violet/20" },
  rose: { bg: "bg-rose/10", text: "text-rose", border: "border-rose/20", glow: "shadow-[0_0_30px_-10px] shadow-rose/20" },
};

export function ServicesDashboard() {
  const [activeService, setActiveService] = useState(serviceWidgets[0].id);
  const active = serviceWidgets.find((s) => s.id === activeService)!;
  const colors = colorStyles[active.color] || colorStyles.gold;

  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <AnimatedSection className="mb-12 text-center">
          <span className="metric-badge bg-gold/10 text-gold border border-gold/20">Services</span>
          <h2 className="mt-4 text-4xl font-bold text-foreground md:text-5xl">
            Your Houston <span className="text-gradient-gold">Growth Engine</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Explore our full suite of services. Click any service to see what we can build for your business.
          </p>
        </AnimatedSection>

        {/* Service Tabs */}
        <AnimatedSection delay={100}>
          <div className="mb-8 flex flex-wrap justify-center gap-2">
            {serviceWidgets.map((svc) => {
              const c = colorStyles[svc.color] || colorStyles.gold;
              const isActive = activeService === svc.id;
              return (
                <button
                  key={svc.id}
                  onClick={() => setActiveService(svc.id)}
                  className={`flex items-center gap-2 rounded-xl px-4 py-2.5 text-xs font-medium transition-all duration-300 ${
                    isActive
                      ? `${c.bg} ${c.text} ${c.border} border ${c.glow}`
                      : "border border-border/50 text-muted-foreground hover:text-foreground hover:border-border"
                  }`}
                >
                  {svc.icon}
                  <span className="hidden sm:inline">{svc.shortTitle}</span>
                </button>
              );
            })}
          </div>
        </AnimatedSection>

        {/* Active Service Detail */}
        <AnimatedSection delay={200}>
          <div className={`widget transition-all duration-500 ${colors.glow}`}>
            <div className="grid gap-8 lg:grid-cols-2">
              <div>
                <div className="flex items-center gap-3">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${colors.bg} ${colors.text}`}>
                    {active.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground">{active.title}</h3>
                    <p className="text-xs text-muted-foreground">Houston, TX</p>
                  </div>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {active.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {active.features.map((f) => (
                    <span
                      key={f}
                      className={`rounded-lg border px-3 py-1.5 text-xs font-medium ${colors.bg} ${colors.text} ${colors.border}`}
                    >
                      {f}
                    </span>
                  ))}
                </div>

                <div className="mt-8">
                  <Link
                    to="/services"
                    className={`inline-flex items-center gap-2 text-sm font-semibold ${colors.text} hover:underline`}
                  >
                    Learn More
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                  </Link>
                </div>
              </div>

              {/* Metric Display */}
              <div className="flex flex-col items-center justify-center rounded-2xl border border-border/30 bg-background/50 p-8">
                <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">{active.metricLabel}</span>
                <span className={`mt-2 text-6xl font-bold ${colors.text}`}>{active.metric}</span>
                <div className="mt-6 w-full">
                  {/* Simulated chart bars */}
                  <div className="flex items-end gap-1 h-20 justify-center">
                    {Array.from({ length: 20 }, (_, j) => {
                      const h = 30 + Math.sin(j * 0.5) * 20 + j * 2.5;
                      return (
                        <div
                          key={j}
                          className="w-2 rounded-sm transition-all duration-500"
                          style={{
                            height: `${Math.min(h, 100)}%`,
                            backgroundColor: `var(--${active.color})`,
                            opacity: 0.3 + (j / 20) * 0.7,
                          }}
                        />
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
