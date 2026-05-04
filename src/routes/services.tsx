import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AnimatedSection } from "@/components/AnimatedSection";
import { ServiceCard } from "@/components/ServiceCard";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Our Services — Nexus Digital Studio | Houston Web Design & Development" },
      { name: "description", content: "Explore Nexus Digital Studio's full suite of premium services including web design, app development, SEO, branding, paid ads, and digital auditing in Houston TX." },
      { property: "og:title", content: "Our Services — Nexus Digital Studio" },
      { property: "og:description", content: "Premium web design, app development, SEO, branding, and digital strategy services in Houston, TX." },
    ],
  }),
  component: ServicesPage,
});

const allServices = [
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/></svg>,
    title: "Web Design & Development",
    description: "From stunning landing pages to complex e-commerce platforms, we build pixel-perfect, high-performance websites that load in under 2 seconds and convert visitors at 3x the industry average. Every site is responsive, accessible, and optimized for search engines from day one.",
  },
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="m18 16 4-4-4-4"/><path d="m6 8-4 4 4 4"/><path d="m14.5 4-5 16"/></svg>,
    title: "Full-Stack App Development",
    description: "Enterprise-grade mobile and web applications built with React, Node.js, and cloud-native architectures. We specialize in SaaS platforms, internal tools, customer portals, and mobile apps that handle millions of users with seamless reliability.",
  },
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/><path d="M11 8v6"/><path d="M8 11h6"/></svg>,
    title: "Search Engine Optimization",
    description: "Comprehensive SEO strategies covering technical optimization, content strategy, link building, and local SEO for Houston businesses. Our clients average 280% organic traffic growth within the first year with sustained ranking improvements.",
  },
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2 2 7l10 5 10-5-10-5Z"/><path d="m2 17 10 5 10-5"/><path d="m2 12 10 5 10-5"/></svg>,
    title: "Branding & Packaging Design",
    description: "Complete brand identity systems including logos, typography, color palettes, brand guidelines, and packaging design. We create brands that stand out in crowded markets and resonate deeply with target audiences across all touchpoints.",
  },
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>,
    title: "Consulting & Digital Auditing",
    description: "In-depth digital presence audits, competitor analysis, and strategic consulting. We analyze every facet of your online presence — from UX and performance to content and conversion paths — and deliver actionable recommendations that drive growth.",
  },
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20V10"/><path d="M18 20V4"/><path d="M6 20v-4"/></svg>,
    title: "Paid Advertising & PPC",
    description: "Data-driven paid media campaigns across Google Ads, Meta, LinkedIn, and programmatic networks. We optimize for ROAS with advanced audience targeting, creative testing, and full-funnel attribution to maximize every dollar of ad spend.",
  },
];

function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="pb-16 pt-32 lg:pt-40">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimatedSection className="max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Our Services</span>
            <h1 className="mt-4 text-5xl font-bold text-foreground md:text-6xl lg:text-7xl">
              Solutions That <span className="text-gradient-gold">Transform</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              We offer a comprehensive suite of digital services designed to help ambitious brands dominate their markets and achieve extraordinary growth.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {allServices.map((service, i) => (
              <ServiceCard key={service.title} {...service} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border/50 bg-card/30 py-24">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <AnimatedSection>
            <h2 className="text-4xl font-bold text-foreground md:text-5xl">
              Let's Discuss <span className="text-gradient-gold">Your Project</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Every project begins with a conversation. Tell us about your vision and we'll show you how we can bring it to life.
            </p>
            <Button variant="gold" size="xl" className="mt-8" asChild>
              <Link to="/contact">Start the Conversation</Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
}
