import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AnimatedSection } from "@/components/AnimatedSection";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Nexus Digital Studio — Houston's #1 Enterprise Digital Agency" },
      { name: "description", content: "Meet the team behind Houston's most trusted enterprise digital agency. 12+ years, 200+ projects, zero security breaches. SOC 2 certified, award-winning, and backed by Fortune 500 experience." },
      { property: "og:title", content: "About Nexus Digital Studio — Enterprise Digital Agency" },
      { property: "og:description", content: "12+ years, 200+ enterprise projects, zero security breaches. Houston's most trusted digital agency." },
    ],
  }),
  component: AboutPage,
});

const values = [
  { title: "Security-First Engineering", desc: "Every project begins with threat modeling and ends with penetration testing. Zero breaches in 12 years isn't luck — it's obsessive discipline.", icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>, color: "emerald" },
  { title: "Enterprise-Grade Craft", desc: "Every pixel, every interaction, every line of code refined until it exceeds Fortune 500 standards. We build digital infrastructure, not just websites.", icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>, color: "gold" },
  { title: "Data-Driven Strategy", desc: "Design without strategy is decoration. Every creative decision is validated with data, A/B testing, and measurable business outcomes.", icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 20V10"/><path d="M18 20V4"/><path d="M6 20v-4"/></svg>, color: "cyan" },
  { title: "Radical Transparency", desc: "Real-time project dashboards, weekly security reports, and open communication. You're never in the dark about timelines, budgets, or decisions.", icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z"/><circle cx="12" cy="12" r="3"/></svg>, color: "violet" },
];

const team = [
  { name: "David Chen", role: "Founder & CEO", bio: "15 years shaping enterprise digital experiences. Former technical lead at Nike Digital and Deloitte Consulting. CISSP certified.", color: "gold" },
  { name: "Maria Santos", role: "VP of Engineering", bio: "Ex-Google Staff Engineer. Architected systems serving 100M+ users. Specializes in secure, scalable cloud-native architectures.", color: "cyan" },
  { name: "James Williams", role: "Chief Strategy Officer", bio: "Former McKinsey Senior Partner. Led $500M+ digital transformation programs for Fortune 100 companies across energy and healthcare.", color: "violet" },
  { name: "Aisha Patel", role: "Chief Design Officer", bio: "3x Awwwards Site of the Day. Featured in Forbes Design 30 Under 30. Pioneer of enterprise design systems and accessibility.", color: "emerald" },
  { name: "Robert Kim", role: "Chief Security Officer", bio: "Ex-NSA cybersecurity analyst. OSCP, CISSP, CEH certified. Led red team operations for defense contractors and Fortune 500 firms.", color: "rose" },
  { name: "Lisa Thompson", role: "VP of Client Success", bio: "Former VP at Salesforce. 98% client retention rate. Manages relationships with $2B+ in combined client AUM.", color: "gold" },
];

const stats = [
  { value: 200, suffix: "+", label: "Enterprise Projects", color: "gold" },
  { value: 12, suffix: "+", label: "Years Operating", color: "cyan" },
  { value: 50, prefix: "$", suffix: "M+", label: "Client Revenue Generated", color: "emerald" },
  { value: 0, suffix: "", label: "Security Breaches", color: "emerald" },
  { value: 98, suffix: "%", label: "Client Retention", color: "violet" },
  { value: 500, suffix: "+", label: "Security Audits", color: "rose" },
];

const colorMap: Record<string, { text: string; bg: string; border: string }> = {
  gold: { text: "text-gold", bg: "bg-gold/10", border: "border-gold/20" },
  cyan: { text: "text-cyan", bg: "bg-cyan/10", border: "border-cyan/20" },
  violet: { text: "text-violet", bg: "bg-violet/10", border: "border-violet/20" },
  emerald: { text: "text-emerald", bg: "bg-emerald/10", border: "border-emerald/20" },
  rose: { text: "text-rose", bg: "bg-rose/10", border: "border-rose/20" },
};

function AboutPage() {
  return (
    <div className="min-h-screen bg-background dot-grid">
      <Header />

      <section className="pb-12 pt-24 lg:pt-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimatedSection className="max-w-4xl">
            <div className="flex flex-wrap items-center gap-2">
              <div className="inline-flex items-center gap-2 rounded-full border border-gold/20 bg-gold/5 px-4 py-1.5">
                <span className="h-2 w-2 rounded-full bg-gold animate-pulse" />
                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-gold">About Nexus</span>
              </div>
              <div className="inline-flex items-center gap-1.5 rounded-full border border-emerald/20 bg-emerald/5 px-3 py-1.5">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-emerald"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-emerald">SOC 2 Certified</span>
              </div>
            </div>
            <h1 className="mt-6 text-4xl font-bold text-foreground md:text-5xl lg:text-7xl">
              The Agency Behind <br/><span className="text-gradient-gold">Houston's Elite</span>
            </h1>
            <p className="mt-5 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base lg:text-lg">
              We're a collective of ex-Google engineers, former McKinsey strategists, NSA-trained security experts, and award-winning designers. We don't build websites — we engineer enterprise digital infrastructure that drives measurable growth.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Stats */}
      <section className="py-8">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-6">
            {stats.map((s, i) => (
              <AnimatedSection key={s.label} delay={i * 80}>
                <div className="widget text-center">
                  <div className={`text-2xl font-bold ${colorMap[s.color].text}`}>
                    <AnimatedCounter end={s.value} prefix={s.prefix} suffix={s.suffix} />
                  </div>
                  <p className="mt-1 text-[10px] text-muted-foreground">{s.label}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimatedSection className="mb-10">
            <span className="metric-badge bg-gold/10 text-gold border border-gold/20">Core Principles</span>
            <h2 className="mt-4 text-3xl font-bold text-foreground md:text-4xl">
              What Makes Us <span className="text-gradient-gold">#1 in Houston</span>
            </h2>
          </AnimatedSection>
          <div className="grid gap-4 md:grid-cols-2">
            {values.map((v, i) => {
              const c = colorMap[v.color];
              return (
                <AnimatedSection key={v.title} delay={i * 80}>
                  <div className="widget group h-full">
                    <div className="flex items-start gap-4">
                      <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${c.bg} ${c.text}`}>
                        {v.icon}
                      </div>
                      <div>
                        <h3 className={`text-base font-semibold ${c.text}`}>{v.title}</h3>
                        <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{v.desc}</p>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="border-t border-border/30 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimatedSection className="mb-10">
            <span className="metric-badge bg-gold/10 text-gold border border-gold/20">Leadership</span>
            <h2 className="mt-4 text-3xl font-bold text-foreground md:text-4xl">
              Enterprise <span className="text-gradient-gold">Leadership Team</span>
            </h2>
            <p className="mt-3 text-sm text-muted-foreground">Ex-Google. Ex-McKinsey. Ex-NSA. The best talent in Houston.</p>
          </AnimatedSection>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {team.map((t, i) => {
              const c = colorMap[t.color];
              return (
                <AnimatedSection key={t.name} delay={i * 80}>
                  <div className="widget group h-full">
                    <div className="flex items-start gap-4">
                      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-gold text-lg font-bold text-primary-foreground">
                        {t.name.split(" ").map(n => n[0]).join("")}
                      </div>
                      <div>
                        <h3 className="text-sm font-semibold text-foreground">{t.name}</h3>
                        <p className={`text-xs font-medium ${c.text}`}>{t.role}</p>
                        <p className="mt-2 text-[10px] leading-relaxed text-muted-foreground">{t.bio}</p>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Certifications & Awards */}
      <section className="border-t border-border/30 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimatedSection className="mb-10">
            <span className="metric-badge bg-emerald/10 text-emerald border border-emerald/20">Credentials</span>
            <h2 className="mt-4 text-3xl font-bold text-foreground md:text-4xl">
              Certifications & <span className="text-gradient-gold">Awards</span>
            </h2>
          </AnimatedSection>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { name: "SOC 2 Type II Certified", desc: "Enterprise security compliance verified by independent auditors", color: "emerald" },
              { name: "Clutch Top Agency 2024", desc: "Ranked #1 digital agency in Houston by Clutch.co", color: "gold" },
              { name: "3x Awwwards Winner", desc: "Site of the Day recognition for outstanding digital design", color: "gold" },
              { name: "Inc. 5000 Fastest Growing", desc: "Recognized as one of America's fastest-growing companies", color: "cyan" },
              { name: "Forbes Technology Council", desc: "Exclusive membership for proven technology leaders", color: "violet" },
              { name: "OWASP Compliant", desc: "All development follows OWASP Top 10 security standards", color: "emerald" },
              { name: "BBB A+ Rated", desc: "Highest rating from the Better Business Bureau", color: "gold" },
              { name: "Google Premier Partner", desc: "Top-tier Google Ads management certification", color: "cyan" },
            ].map((award, i) => {
              const c = colorMap[award.color];
              return (
                <AnimatedSection key={award.name} delay={i * 60}>
                  <div className="widget h-full text-center">
                    <div className={`mx-auto flex h-10 w-10 items-center justify-center rounded-xl ${c.bg} ${c.text} mb-3`}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                    </div>
                    <h3 className={`text-sm font-semibold ${c.text}`}>{award.name}</h3>
                    <p className="mt-1 text-[10px] text-muted-foreground">{award.desc}</p>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <AnimatedSection>
            <div className="widget p-10">
              <h2 className="text-3xl font-bold text-foreground md:text-4xl">
                Let's Build <span className="text-gradient-gold">Together</span>
              </h2>
              <p className="mt-3 text-sm text-muted-foreground">Ready to partner with Houston's #1 enterprise digital agency?</p>
              <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
                <Button variant="gold" size="xl" asChild>
                  <Link to="/contact">Schedule Enterprise Consultation</Link>
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
