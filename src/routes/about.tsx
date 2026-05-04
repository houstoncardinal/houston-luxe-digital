import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AnimatedSection } from "@/components/AnimatedSection";
import { StatsSection } from "@/components/StatsSection";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Nexus Digital Studio | Houston's Elite Digital Agency" },
      { name: "description", content: "Meet the team behind Houston's most sought-after digital agency. 12+ years of crafting award-winning digital experiences for visionary brands." },
      { property: "og:title", content: "About Us — Nexus Digital Studio" },
      { property: "og:description", content: "Meet the team behind Houston's most sought-after digital agency." },
    ],
  }),
  component: AboutPage,
});

const values = [
  { title: "Obsessive Craft", desc: "Every pixel, every interaction, every line of code is meticulously refined until it exceeds expectations." },
  { title: "Strategic Thinking", desc: "Design without strategy is decoration. We ensure every creative decision drives measurable business outcomes." },
  { title: "Relentless Innovation", desc: "We stay ahead of industry trends and emerging technologies to deliver future-proof solutions." },
  { title: "Transparent Partnership", desc: "We believe in radical transparency. You're never in the dark about timelines, budgets, or decisions." },
];

const team = [
  { name: "David Chen", role: "Founder & Creative Director", bio: "15 years shaping digital experiences for brands like Nike, Tesla, and Deloitte." },
  { name: "Maria Santos", role: "Head of Engineering", bio: "Ex-Google engineer specializing in scalable architectures and performance optimization." },
  { name: "James Williams", role: "Strategy Director", bio: "Former McKinsey consultant bringing Fortune 500 strategic thinking to every project." },
  { name: "Aisha Patel", role: "Design Lead", bio: "Award-winning designer with work featured in Awwwards, CSS Design Awards, and FWA." },
];

function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="pb-16 pt-32 lg:pt-40">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimatedSection className="max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">About Nexus</span>
            <h1 className="mt-4 text-5xl font-bold text-foreground md:text-6xl lg:text-7xl">
              Building the <span className="text-gradient-gold">Future of Digital</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Founded in Houston, Texas, Nexus Digital Studio is a collective of designers, engineers, and strategists who believe that exceptional digital experiences are the cornerstone of modern business success.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <StatsSection />

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimatedSection>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Our Values</span>
            <h2 className="mt-4 text-4xl font-bold text-foreground md:text-5xl">
              What <span className="text-gradient-gold">Drives Us</span>
            </h2>
          </AnimatedSection>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {values.map((v, i) => (
              <AnimatedSection key={v.title} delay={i * 100}>
                <div className="rounded-2xl border border-border/50 bg-card p-8 hover-gold-glow transition-all duration-500">
                  <h3 className="text-xl font-semibold text-foreground">{v.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{v.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border/50 bg-card/30 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimatedSection>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Leadership</span>
            <h2 className="mt-4 text-4xl font-bold text-foreground md:text-5xl">
              Meet the <span className="text-gradient-gold">Team</span>
            </h2>
          </AnimatedSection>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {team.map((t, i) => (
              <AnimatedSection key={t.name} delay={i * 100}>
                <div className="text-center">
                  <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-gradient-gold text-3xl font-bold text-primary-foreground">
                    {t.name.split(" ").map(n => n[0]).join("")}
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-foreground">{t.name}</h3>
                  <p className="text-sm font-medium text-gold">{t.role}</p>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{t.bio}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <AnimatedSection>
            <h2 className="text-4xl font-bold text-foreground md:text-5xl">
              Join Us on the <span className="text-gradient-gold">Journey</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              We're always looking for visionary brands ready to make an impact.
            </p>
            <Button variant="gold" size="xl" className="mt-8" asChild>
              <Link to="/contact">Work With Us</Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
}
