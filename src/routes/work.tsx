import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "Our Work — Nexus Digital Studio | Portfolio of Award-Winning Projects" },
      { name: "description", content: "Explore our portfolio of award-winning web design, app development, and branding projects for visionary brands across Houston and beyond." },
      { property: "og:title", content: "Our Work — Nexus Digital Studio" },
      { property: "og:description", content: "Award-winning web design, app development, and branding projects." },
    ],
  }),
  component: WorkPage,
});

const projects = [
  {
    title: "Meridian Ventures",
    category: "Web Design & Development",
    description: "A complete digital transformation for a $2B investment firm. Custom CMS, investor portal, and award-winning design that increased qualified leads by 340%.",
    metrics: "+340% Leads",
  },
  {
    title: "Atlas Commerce",
    category: "Full-Stack E-Commerce",
    description: "Enterprise e-commerce platform handling 50K+ daily transactions with sub-200ms response times and a 28% increase in average order value.",
    metrics: "+28% AOV",
  },
  {
    title: "Elevate Health",
    category: "Branding & Web Design",
    description: "Complete brand identity and digital platform for a healthcare startup that secured $15M in Series A funding following launch.",
    metrics: "$15M Raised",
  },
  {
    title: "Pinnacle Real Estate",
    category: "SEO & Web Development",
    description: "Custom property search platform with advanced SEO strategy that achieved #1 rankings for 50+ competitive Houston real estate keywords.",
    metrics: "#1 Rankings",
  },
  {
    title: "Vertex SaaS",
    category: "Full-Stack App Development",
    description: "Enterprise project management platform serving 200K+ users with real-time collaboration, advanced analytics, and 99.99% uptime.",
    metrics: "200K+ Users",
  },
  {
    title: "Luxe Automotive",
    category: "Paid Advertising & Branding",
    description: "Integrated paid media and brand campaign for a luxury automotive group generating $8M in attributed revenue within 6 months.",
    metrics: "$8M Revenue",
  },
];

function WorkPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="pb-16 pt-32 lg:pt-40">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimatedSection className="max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Our Work</span>
            <h1 className="mt-4 text-5xl font-bold text-foreground md:text-6xl lg:text-7xl">
              Results That <span className="text-gradient-gold">Speak</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              A curated selection of projects where strategy, design, and technology converged to create extraordinary outcomes.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2">
            {projects.map((project, i) => (
              <AnimatedSection key={project.title} delay={i * 100}>
                <div className="group relative overflow-hidden rounded-2xl border border-border/50 bg-card transition-all duration-500 hover-gold-glow">
                  <div className="aspect-[16/10] w-full bg-gradient-to-br from-gold/5 via-card to-gold/10 flex items-center justify-center">
                    <span className="text-6xl font-bold text-gold/10 transition-all duration-500 group-hover:text-gold/20">
                      {project.title.split(" ").map(w => w[0]).join("")}
                    </span>
                  </div>
                  <div className="p-8">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold uppercase tracking-wider text-gold">{project.category}</span>
                      <span className="rounded-full bg-gold/10 px-3 py-1 text-xs font-semibold text-gold">{project.metrics}</span>
                    </div>
                    <h3 className="mt-3 text-2xl font-semibold text-foreground">{project.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{project.description}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border/50 bg-card/30 py-24">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <AnimatedSection>
            <h2 className="text-4xl font-bold text-foreground md:text-5xl">
              Your Project Could Be <span className="text-gradient-gold">Next</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Ready to join the ranks of brands achieving extraordinary results?
            </p>
            <Button variant="gold" size="xl" className="mt-8" asChild>
              <Link to="/contact">Start Your Project</Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
}
