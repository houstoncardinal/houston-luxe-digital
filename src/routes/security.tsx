import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AnimatedSection } from "@/components/AnimatedSection";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/security")({
  head: () => ({
    meta: [
      { title: "Enterprise Cybersecurity & App Security — Nexus Digital Studio | Houston TX" },
      { name: "description", content: "Houston's leading cybersecurity and secure development agency. SOC 2 compliant infrastructure, penetration testing, OWASP-certified development, and enterprise security audits." },
      { property: "og:title", content: "Enterprise Cybersecurity — Nexus Digital Studio" },
      { property: "og:description", content: "SOC 2 compliant, OWASP-certified development. Enterprise-grade security for Houston businesses." },
    ],
  }),
  component: SecurityPage,
});

const securityServices = [
  {
    title: "Secure Application Development",
    description: "Every line of code we write follows OWASP Top 10 security standards. Static analysis, dynamic testing, and peer-reviewed security architecture from day one.",
    features: ["OWASP Top 10 Compliance", "Static Code Analysis (SAST)", "Dynamic App Testing (DAST)", "Secure CI/CD Pipelines", "Dependency Vulnerability Scanning", "Code Review & Hardening"],
    metric: "0",
    metricLabel: "Critical Vulnerabilities Shipped",
    color: "emerald",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
  },
  {
    title: "Penetration Testing & Red Team",
    description: "Simulated real-world attacks against your applications and infrastructure. We find vulnerabilities before threat actors do.",
    features: ["Web App Pen Testing", "API Security Testing", "Network Penetration Testing", "Social Engineering Assessments", "Red Team Operations", "Detailed Remediation Reports"],
    metric: "500+",
    metricLabel: "Pen Tests Completed",
    color: "rose",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><path d="m15 9-6 6"/><path d="m9 9 6 6"/></svg>,
  },
  {
    title: "Compliance & Governance",
    description: "Navigate complex compliance landscapes with confidence. We help Houston enterprises achieve and maintain regulatory compliance.",
    features: ["SOC 2 Type II Readiness", "HIPAA Compliance", "PCI DSS Assessment", "GDPR / CCPA Compliance", "ISO 27001 Alignment", "Policy & Procedure Development"],
    metric: "100%",
    metricLabel: "Audit Pass Rate",
    color: "gold",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/></svg>,
  },
  {
    title: "Security Operations & Monitoring",
    description: "24/7 threat detection and incident response. Proactive monitoring with real-time alerting and automated threat mitigation.",
    features: ["24/7 SOC Monitoring", "Threat Intelligence", "Incident Response Planning", "SIEM Integration", "Vulnerability Management", "Security Awareness Training"],
    metric: "24/7",
    metricLabel: "Threat Monitoring",
    color: "cyan",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z"/><circle cx="12" cy="12" r="3"/></svg>,
  },
];

const certifications = [
  { name: "SOC 2 Type II", desc: "Certified" },
  { name: "ISO 27001", desc: "Aligned" },
  { name: "OWASP", desc: "Compliant" },
  { name: "PCI DSS", desc: "Level 1" },
  { name: "HIPAA", desc: "Compliant" },
  { name: "GDPR", desc: "Compliant" },
];

const colorMap: Record<string, { bg: string; text: string; border: string }> = {
  gold: { bg: "bg-gold/10", text: "text-gold", border: "border-gold/20" },
  cyan: { bg: "bg-cyan/10", text: "text-cyan", border: "border-cyan/20" },
  emerald: { bg: "bg-emerald/10", text: "text-emerald", border: "border-emerald/20" },
  rose: { bg: "bg-rose/10", text: "text-rose", border: "border-rose/20" },
};

function SecurityPage() {
  return (
    <div className="min-h-screen bg-background dot-grid">
      <Header />

      {/* Hero */}
      <section className="relative pb-12 pt-24 lg:pt-32 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-1/4 h-96 w-96 rounded-full bg-emerald/5 blur-[150px]" />
          <div className="absolute bottom-1/4 right-1/4 h-72 w-72 rounded-full bg-cyan/5 blur-[120px]" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <AnimatedSection className="max-w-4xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald/20 bg-emerald/5 px-4 py-1.5">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-emerald"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-emerald">Enterprise Security</span>
            </div>
            <h1 className="mt-6 text-4xl font-bold text-foreground md:text-5xl lg:text-7xl">
              Security-First <br />
              <span className="text-gradient-gold">By Design</span>
            </h1>
            <p className="mt-5 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base lg:text-lg">
              Every application we build is hardened from day one. Every system we audit is battle-tested to enterprise standards. Houston's most trusted name in cybersecurity and secure development.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Security Stats */}
      <section className="py-8">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
            {[
              { value: 0, label: "Breaches in 12 Years", suffix: "", color: "emerald" },
              { value: 500, label: "Security Audits", suffix: "+", color: "gold" },
              { value: 99, label: "Threat Detection Rate", suffix: ".9%", color: "cyan" },
              { value: 100, label: "Compliance Rate", suffix: "%", color: "violet" },
            ].map((s, i) => (
              <AnimatedSection key={s.label} delay={i * 100}>
                <div className="widget text-center">
                  <div className={`text-3xl font-bold text-${s.color}`}>
                    <AnimatedCounter end={s.value} suffix={s.suffix} />
                  </div>
                  <p className="mt-1 text-xs text-muted-foreground">{s.label}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Bar */}
      <section className="py-10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimatedSection>
            <div className="widget">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Certifications & Compliance</span>
                <span className="metric-badge bg-emerald/10 text-emerald border border-emerald/20">
                  <span className="h-1.5 w-1.5 rounded-full bg-current" />
                  Verified
                </span>
              </div>
              <div className="grid grid-cols-3 gap-3 lg:grid-cols-6">
                {certifications.map((cert) => (
                  <div key={cert.name} className="flex flex-col items-center rounded-xl border border-border/50 bg-background/50 p-4 text-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-emerald mb-2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                    <span className="text-xs font-bold text-foreground">{cert.name}</span>
                    <span className="text-[10px] text-emerald font-medium">{cert.desc}</span>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Security Services Detail */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimatedSection className="mb-12 text-center">
            <span className="metric-badge bg-gold/10 text-gold border border-gold/20">Capabilities</span>
            <h2 className="mt-4 text-4xl font-bold text-foreground md:text-5xl">
              Enterprise-Grade <span className="text-gradient-gold">Security Services</span>
            </h2>
          </AnimatedSection>

          <div className="space-y-6">
            {securityServices.map((svc, i) => {
              const c = colorMap[svc.color] || colorMap.gold;
              return (
                <AnimatedSection key={svc.title} delay={i * 100}>
                  <div className="widget">
                    <div className="grid gap-6 lg:grid-cols-3">
                      <div className="lg:col-span-2">
                        <div className="flex items-center gap-3 mb-3">
                          <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${c.bg} ${c.text}`}>
                            {svc.icon}
                          </div>
                          <h3 className={`text-xl font-bold ${c.text}`}>{svc.title}</h3>
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed">{svc.description}</p>
                        <div className="mt-4 flex flex-wrap gap-2">
                          {svc.features.map((f) => (
                            <span key={f} className={`rounded-lg border px-2.5 py-1 text-[10px] font-medium ${c.bg} ${c.text} ${c.border}`}>{f}</span>
                          ))}
                        </div>
                      </div>
                      <div className="flex flex-col items-center justify-center rounded-xl border border-border/30 bg-background/50 p-6">
                        <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">{svc.metricLabel}</span>
                        <span className={`mt-2 text-5xl font-bold ${c.text}`}>{svc.metric}</span>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Security Process */}
      <section className="border-y border-border/30 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <span className="metric-badge bg-emerald/10 text-emerald border border-emerald/20">Methodology</span>
            <h2 className="mt-4 text-4xl font-bold text-foreground md:text-5xl">
              Our Security <span className="text-gradient-gold">Framework</span>
            </h2>
          </AnimatedSection>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              { step: "01", title: "Assess", desc: "Comprehensive threat modeling, attack surface analysis, and risk assessment of your entire digital ecosystem.", color: "gold" },
              { step: "02", title: "Fortify", desc: "Implement defense-in-depth security controls, encryption, access management, and secure architecture patterns.", color: "cyan" },
              { step: "03", title: "Validate", desc: "Rigorous penetration testing, vulnerability scanning, and red team exercises to verify security posture.", color: "emerald" },
              { step: "04", title: "Monitor", desc: "24/7 threat detection, real-time alerting, automated incident response, and continuous compliance monitoring.", color: "violet" },
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

      {/* CTA */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <AnimatedSection>
            <div className="widget p-10 md:p-14">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-emerald mx-auto mb-6"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              <h2 className="text-3xl font-bold text-foreground md:text-5xl">
                Protect Your Business <span className="text-gradient-gold">Today</span>
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-sm text-muted-foreground md:text-base">
                Schedule a free security assessment for your Houston business. Our team will identify vulnerabilities and deliver a comprehensive remediation roadmap.
              </p>
              <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
                <Button variant="gold" size="xl" asChild>
                  <Link to="/contact">Free Security Assessment</Link>
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
