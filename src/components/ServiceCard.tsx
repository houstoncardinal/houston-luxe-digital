import { AnimatedSection } from "./AnimatedSection";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

export function ServiceCard({ icon, title, description, index }: ServiceCardProps) {
  return (
    <AnimatedSection delay={index * 100}>
      <div className="group relative overflow-hidden rounded-2xl border border-border/50 bg-card p-8 transition-all duration-500 hover-gold-glow">
        <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        <div className="relative z-10">
          <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-gold/10 text-gold transition-all duration-300 group-hover:bg-gold/20">
            {icon}
          </div>
          <h3 className="mb-3 text-xl font-semibold text-foreground">{title}</h3>
          <p className="text-sm leading-relaxed text-muted-foreground">{description}</p>
        </div>
      </div>
    </AnimatedSection>
  );
}
