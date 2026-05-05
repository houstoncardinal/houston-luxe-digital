import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AnimatedSection } from "@/components/AnimatedSection";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Nexus Digital Studio — Houston's Elite Digital Agency" },
      { name: "description", content: "Meet the team behind Houston's most sought-after digital agency. 12+ years crafting award-winning digital experiences for visionary brands." },
      { property: "og:title", content: "About Nexus Digital Studio" },
      { property: "og:description", content: "Meet the team behind Houston's most sought-after digital agency." },
    ],
  }),
  component: AboutPage,
});

const values = [
  { title: "Obsessive Craft", desc: "Every pixel, every interaction, every line of code refined until it exceeds expectations.", icon: "✨", color: "gold" },
  { title: "Strategic Thinking", desc: "Design without strategy is decoration. Every creative decision drives business outcomes.", icon: "🎯", color: "cyan" },
  { title: "Relentless Innovation", desc: "We stay ahead of trends and emerging technologies for future-proof solutions.", icon: "🚀", color: "violet" },
  { title: "Transparent Partnership", desc: "Radical transparency. You're never in the dark about timelines, budgets, or decisions.", icon: "🤝", color: "emerald" },
];

const team = [
  { name: "David Chen", role: "Founder & Creative Director", bio: "15 years shaping digital experiences for brands like Nike, Tesla, and Deloitte.", color: "gold" },
  { name: "Maria Santos", role: "Head of Engineering", bio: "Ex-Google engineer specializing in scalable architectures and performance.", color: "cyan" },
  { name: "James Williams", role: "Strategy Director", bio: "Former McKinsey consultant bringing Fortune 500 strategic thinking.", color: "violet" },
  { name: "Aisha Patel", role: "Design Lead", bio: "Award-winning designer featured in Awwwards, CSS Design Awards, and FWA.", color: "emerald" },
];

const stats = [
  { value: 200, suffix: "+", label: "Projects", color: "gold" },
  { value: 12, suffix: "+", label: "Years", color: "cyan" },
  { value: 50, prefix: "$", suffix: "M+", label: "Revenue Generated", color: "emerald" },
  { value: 98, suffix: "%", label: "Retention", color: "violet" },
];

const colorMap: Record<string, string> = {
  gold: "text-gold",
  cyan: "text-cyan",
  violet: "text-violet",
  emerald: "text-emerald",
  rose: "text-rose",
};

function AboutPage() {
  return (
    <div className="min-h-screen bg-background dot-grid">
      <Header />

      <section className="pb-12 pt-24 lg:pt-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimatedSection className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-gold/20 bg-gold/5 px-4 py-1.5">
              <span className="h-2 w-2 rounded-full bg-gold animate-pulse" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-gold">About Nexus</span>
            </div>
            <h1 className="mt-6 text-4xl font-bold text-foreground md:text-5xl lg:text-6xl">
              Building the Future of <span className="text-gradient-gold">Digital</span>
            </h1>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
              Founded in Houston, Texas — we're a collective of designers, engineers, and strategists who believe exceptional digital experiences are the cornerstone of modern business success.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Stats */}
      <section className="py-8">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
            {stats.map((s, i) => (
              <AnimatedSection key={s.label} delay={i * 100}>
                <div className="widget text-center">
                  <div className={`text-3xl font-bold ${colorMap[s.color]}`}>
                    <AnimatedCounter end={s.value} prefix={s.prefix} suffix={s.suffix} />
                  </div>
                  <p className="mt-1 text-xs text-muted-foreground">{s.label}</p>
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
            <span className="metric-badge bg-gold/10 text-gold border border-gold/20">Values</span>
            <h2 className="mt-4 text-3xl font-bold text-foreground md:text-4xl">
              What <span className="text-gradient-gold">Drives Us</span>
            </h2>
          </AnimatedSection>
          <div className="grid gap-4 md:grid-cols-2">
            {values.map((v, i) => (
              <AnimatedSection key={v.title} delay={i * 80}>
                <div className="widget group">
                  <div className="flex items-start gap-4">
                    <span className="text-2xl">{v.icon}</span>
                    <div>
                      <h3 className={`text-base font-semibold ${colorMap[v.color]}`}>{v.title}</h3>
                      <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{v.desc}</p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="border-t border-border/30 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimatedSection className="mb-10">
            <span className="metric-badge bg-gold/10 text-gold border border-gold/20">Team</span>
            <h2 className="mt-4 text-3xl font-bold text-foreground md:text-4xl">
              Meet the <span className="text-gradient-gold">Leadership</span>
            </h2>
          </AnimatedSection>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {team.map((t, i) => (
              <AnimatedSection key={t.name} delay={i * 80}>
                <div className="widget text-center group">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-gold text-xl font-bold text-primary-foreground">
                    {t.name.split(" ").map(n => n[0]).join("")}
                  </div>
                  <h3 className="mt-4 text-sm font-semibold text-foreground">{t.name}</h3>
                  <p className={`text-xs font-medium ${colorMap[t.color]}`}>{t.role}</p>
                  <p className="mt-2 text-[10px] leading-relaxed text-muted-foreground">{t.bio}</p>
                </div>
              </AnimatedSection>
            ))}
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
              <p className="mt-3 text-sm text-muted-foreground">Ready to transform your Houston business?</p>
              <Button variant="gold" size="xl" className="mt-6" asChild>
                <Link to="/contact">Work With Us</Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
}
