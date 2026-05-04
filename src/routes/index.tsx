import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AnimatedSection } from "@/components/AnimatedSection";
import { ServiceCard } from "@/components/ServiceCard";
import { StatsSection } from "@/components/StatsSection";
import heroBg from "@/assets/hero-bg.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nexus Digital Studio — Premier Web Design & Development Agency in Houston, TX" },
      { name: "description", content: "Houston's elite digital agency specializing in luxury web design, full-stack app development, SEO, branding, and digital strategy. Transform your brand into a digital powerhouse." },
      { property: "og:title", content: "Nexus Digital Studio — Premier Web Design & Development Agency in Houston, TX" },
      { property: "og:description", content: "Houston's elite digital agency specializing in luxury web design, full-stack app development, SEO, branding, and digital strategy." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: HomePage,
});

const services = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/></svg>
    ),
    title: "Web Design & Development",
    description: "Bespoke, award-worthy websites that captivate audiences and convert visitors into loyal customers with pixel-perfect precision.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="m18 16 4-4-4-4"/><path d="m6 8-4 4 4 4"/><path d="m14.5 4-5 16"/></svg>
    ),
    title: "Full-Stack App Development",
    description: "Enterprise-grade applications built with cutting-edge technology stacks, designed to scale from startup to Fortune 500.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/><path d="M11 8v6"/><path d="M8 11h6"/></svg>
    ),
    title: "Search Engine Optimization",
    description: "Data-driven SEO strategies that dominate search rankings and drive qualified organic traffic to your digital properties.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2 2 7l10 5 10-5-10-5Z"/><path d="m2 17 10 5 10-5"/><path d="m2 12 10 5 10-5"/></svg>
    ),
    title: "Branding & Packaging",
    description: "Iconic brand identities and packaging designs that command shelf presence and create lasting emotional connections.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
    ),
    title: "Consulting & Auditing",
    description: "Comprehensive digital audits and strategic consulting that uncover opportunities and outmaneuver your competition.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20V10"/><path d="M18 20V4"/><path d="M6 20v-4"/></svg>
    ),
    title: "Paid Advertising",
    description: "High-ROI paid media campaigns across Google, Meta, and LinkedIn that scale your revenue predictably and profitably.",
  },
];

const testimonials = [
  {
    quote: "Nexus didn't just build our website — they built a digital empire. Our revenue increased 340% within six months of launch.",
    author: "Alexandra Chen",
    role: "CEO, Meridian Ventures",
  },
  {
    quote: "The level of craft and strategic thinking is unmatched. Every pixel serves a purpose. Every interaction tells a story.",
    author: "Marcus Rivera",
    role: "Founder, Atlas Commerce",
  },
  {
    quote: "Working with Nexus felt like having a Fortune 500 agency with the agility of a startup. Absolutely transformative.",
    author: "Sarah Mitchell",
    role: "CMO, Elevate Health",
  },
];

function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroBg}
            alt="Abstract golden light flowing through darkness"
            className="h-full w-full object-cover opacity-60"
            width={1920}
            height={1080}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/40 to-background" />
        </div>

        <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
          <div className="animate-slide-up">
            <span className="inline-block rounded-full border border-gold/20 bg-gold/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              Houston's Premier Digital Agency
            </span>
          </div>

          <h1 className="animate-slide-up-delayed mt-8 text-5xl font-bold leading-[1.1] tracking-tight text-foreground md:text-7xl lg:text-8xl" style={{ opacity: 0 }}>
            We Craft Digital
            <br />
            <span className="text-gradient-gold">Masterpieces</span>
          </h1>

          <p className="animate-slide-up-delayed-2 mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl" style={{ opacity: 0 }}>
            Where visionary design meets unrelenting performance. We build
            digital experiences that command attention, inspire action, and
            deliver extraordinary results.
          </p>

          <div className="animate-slide-up-delayed-2 mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center" style={{ opacity: 0 }}>
            <Button variant="gold" size="xl" asChild>
              <Link to="/contact">Schedule a Consultation</Link>
            </Button>
            <Button variant="gold-outline" size="xl" asChild>
              <Link to="/work">View Our Portfolio</Link>
            </Button>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-float">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-gold/50"><path d="M12 5v14M19 12l-7 7-7-7"/></svg>
        </div>
      </section>

      {/* Stats */}
      <StatsSection />

      {/* Services */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimatedSection className="text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">What We Do</span>
            <h2 className="mt-4 text-4xl font-bold text-foreground md:text-5xl">
              Services That <span className="text-gradient-gold">Elevate</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Every service is designed to push boundaries and deliver measurable impact for your brand.
            </p>
          </AnimatedSection>

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <ServiceCard key={service.title} {...service} index={i} />
            ))}
          </div>

          <AnimatedSection className="mt-12 text-center" delay={600}>
            <Button variant="gold-outline" size="lg" asChild>
              <Link to="/services">Explore All Services</Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>

      {/* Process */}
      <section className="border-y border-border/50 bg-card/30 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimatedSection className="text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Our Process</span>
            <h2 className="mt-4 text-4xl font-bold text-foreground md:text-5xl">
              Precision at <span className="text-gradient-gold">Every Step</span>
            </h2>
          </AnimatedSection>

          <div className="mt-16 grid gap-8 md:grid-cols-4">
            {[
              { step: "01", title: "Discovery", desc: "Deep-dive research into your brand, market, and competitors to uncover strategic opportunities." },
              { step: "02", title: "Strategy", desc: "A tailored roadmap combining data insights with creative vision to maximize impact." },
              { step: "03", title: "Creation", desc: "Meticulous design and development with obsessive attention to every detail." },
              { step: "04", title: "Launch & Scale", desc: "Strategic deployment, continuous optimization, and growth acceleration." },
            ].map((item, i) => (
              <AnimatedSection key={item.step} delay={i * 150}>
                <div className="relative">
                  <span className="text-6xl font-bold text-gold/10">{item.step}</span>
                  <h3 className="mt-2 text-xl font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimatedSection className="text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Testimonials</span>
            <h2 className="mt-4 text-4xl font-bold text-foreground md:text-5xl">
              Trusted by <span className="text-gradient-gold">Visionaries</span>
            </h2>
          </AnimatedSection>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <AnimatedSection key={t.author} delay={i * 150}>
                <div className="rounded-2xl border border-border/50 bg-card p-8 transition-all duration-500 hover-gold-glow">
                  <div className="mb-6 flex gap-1">
                    {[...Array(5)].map((_, j) => (
                      <svg key={j} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-gold"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                    ))}
                  </div>
                  <p className="text-sm leading-relaxed text-muted-foreground italic">"{t.quote}"</p>
                  <div className="mt-6 border-t border-border/50 pt-4">
                    <p className="text-sm font-semibold text-foreground">{t.author}</p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden py-24 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-r from-gold/5 via-gold/10 to-gold/5" />
        <div className="relative mx-auto max-w-4xl px-6 text-center lg:px-8">
          <AnimatedSection>
            <h2 className="text-4xl font-bold text-foreground md:text-5xl lg:text-6xl">
              Ready to Build Something <span className="text-gradient-gold">Extraordinary?</span>
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
              Let's discuss how we can transform your digital presence into a
              revenue-generating powerhouse.
            </p>
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Button variant="gold" size="xl" asChild>
                <Link to="/contact">Get Your Free Audit</Link>
              </Button>
              <Button variant="gold-outline" size="xl" asChild>
                <a href="tel:+17135550199">Call (713) 555-0199</a>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
}
