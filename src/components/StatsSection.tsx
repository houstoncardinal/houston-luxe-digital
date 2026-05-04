import { AnimatedSection } from "./AnimatedSection";

const stats = [
  { value: "200+", label: "Projects Delivered" },
  { value: "$50M+", label: "Revenue Generated" },
  { value: "98%", label: "Client Retention" },
  { value: "12+", label: "Years Experience" },
];

export function StatsSection() {
  return (
    <section className="border-y border-border/50 bg-card/50">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 py-16 md:grid-cols-4 lg:px-8">
        {stats.map((stat, i) => (
          <AnimatedSection key={stat.label} delay={i * 100} className="text-center">
            <div className="text-4xl font-bold text-gradient-gold md:text-5xl">{stat.value}</div>
            <div className="mt-2 text-sm font-medium text-muted-foreground">{stat.label}</div>
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
}
