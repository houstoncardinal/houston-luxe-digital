import { AnimatedSection } from "./AnimatedSection";
import { AnimatedCounter } from "./AnimatedCounter";

const metrics = [
  { value: 200, suffix: "+", label: "Projects Shipped", sublabel: "For Houston & beyond", color: "gold" },
  { value: 50, prefix: "$", suffix: "M+", label: "Revenue Generated", sublabel: "For our clients", color: "emerald" },
  { value: 98, suffix: "%", label: "Client Retention", sublabel: "Industry-leading", color: "cyan" },
  { value: 340, suffix: "%", label: "Avg. Growth Rate", sublabel: "First 12 months", color: "violet" },
];

const colorClasses: Record<string, string> = {
  gold: "text-gradient-gold",
  emerald: "text-gradient-emerald",
  cyan: "text-gradient-cyan",
  violet: "text-gradient-violet",
};

const bgClasses: Record<string, string> = {
  gold: "bg-gold/10 border-gold/15",
  emerald: "bg-emerald/10 border-emerald/15",
  cyan: "bg-cyan/10 border-cyan/15",
  violet: "bg-violet/10 border-violet/15",
};

export function MetricsDashboard() {
  return (
    <section className="py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((m, i) => (
            <AnimatedSection key={m.label} delay={i * 100}>
              <div className={`widget group`}>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">{m.label}</span>
                  <span className={`metric-badge ${bgClasses[m.color]} border`}>
                    <span className="inline-block h-1.5 w-1.5 rounded-full bg-current opacity-70" />
                    Live
                  </span>
                </div>
                <div className={`mt-3 text-4xl font-bold ${colorClasses[m.color]}`}>
                  <AnimatedCounter end={m.value} prefix={m.prefix} suffix={m.suffix} />
                </div>
                <p className="mt-1 text-xs text-muted-foreground">{m.sublabel}</p>

                {/* Mini chart decoration */}
                <div className="mt-4 flex items-end gap-0.5 h-8">
                  {Array.from({ length: 12 }, (_, j) => {
                    const h = 20 + Math.sin(j * 0.8 + i) * 15 + Math.random() * 30;
                    return (
                      <div
                        key={j}
                        className={`flex-1 rounded-sm opacity-40 group-hover:opacity-70 transition-all duration-500`}
                        style={{
                          height: `${Math.min(h, 100)}%`,
                          backgroundColor: `var(--${m.color})`,
                          transitionDelay: `${j * 30}ms`,
                        }}
                      />
                    );
                  })}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
