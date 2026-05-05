import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — Nexus Digital Studio | Houston Web Design Agency" },
      { name: "description", content: "Get in touch with Houston's premier digital agency. Schedule a free consultation for your web design, development, or digital marketing project." },
      { property: "og:title", content: "Contact Us — Nexus Digital Studio" },
      { property: "og:description", content: "Schedule a free consultation with Houston's premier digital agency." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [budget, setBudget] = useState("");

  return (
    <div className="min-h-screen bg-background dot-grid">
      <Header />

      <section className="pb-16 pt-24 lg:pt-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <AnimatedSection>
              <div className="inline-flex items-center gap-2 rounded-full border border-gold/20 bg-gold/5 px-4 py-1.5">
                <span className="h-2 w-2 rounded-full bg-gold animate-pulse" />
                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-gold">Get Started</span>
              </div>
              <h1 className="mt-6 text-4xl font-bold text-foreground md:text-5xl">
                Let's Build Your <span className="text-gradient-gold">Custom Solution</span>
              </h1>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Every project starts with understanding your goals. Tell us about your vision and we'll craft the perfect package for your Houston business.
              </p>

              <div className="mt-10 space-y-6">
                {[
                  { label: "Email", value: "hello@nexusstudio.com", icon: "✉️" },
                  { label: "Phone", value: "(713) 555-0199", icon: "📞" },
                  { label: "Office", value: "1200 Post Oak Blvd, Suite 800, Houston, TX 77056", icon: "📍" },
                ].map((item) => (
                  <div key={item.label} className="widget flex items-start gap-4">
                    <span className="text-lg">{item.icon}</span>
                    <div>
                      <span className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">{item.label}</span>
                      <p className="mt-0.5 text-sm font-medium text-foreground">{item.value}</p>
                    </div>
                  </div>
                ))}

                {/* Quick Stats */}
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { value: "< 24hr", label: "Response Time" },
                    { value: "Free", label: "Initial Audit" },
                    { value: "100%", label: "Custom" },
                  ].map((s) => (
                    <div key={s.label} className="widget text-center py-3">
                      <div className="text-lg font-bold text-gold">{s.value}</div>
                      <div className="text-[10px] text-muted-foreground">{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              {submitted ? (
                <div className="widget flex h-full items-center justify-center p-12 text-center">
                  <div>
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gold/10">
                      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-gold"><path d="M20 6 9 17l-5-5"/></svg>
                    </div>
                    <h3 className="mt-6 text-xl font-semibold text-foreground">Request Received! 🎉</h3>
                    <p className="mt-2 text-sm text-muted-foreground">We'll review your project details and get back within 24 hours with a custom proposal.</p>
                  </div>
                </div>
              ) : (
                <form
                  onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
                  className="widget"
                >
                  <h2 className="text-xl font-semibold text-foreground">Start Your Project</h2>
                  <p className="mt-1 text-xs text-muted-foreground">Get a free consultation and custom proposal.</p>

                  <div className="mt-6 space-y-4">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground">First Name</label>
                        <input type="text" required className="mt-1.5 w-full rounded-xl border border-border/50 bg-background/50 px-4 py-2.5 text-sm text-foreground placeholder-muted-foreground/50 outline-none transition-colors focus:border-gold/50 focus:ring-1 focus:ring-gold/20" placeholder="John" />
                      </div>
                      <div>
                        <label className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground">Last Name</label>
                        <input type="text" required className="mt-1.5 w-full rounded-xl border border-border/50 bg-background/50 px-4 py-2.5 text-sm text-foreground placeholder-muted-foreground/50 outline-none transition-colors focus:border-gold/50 focus:ring-1 focus:ring-gold/20" placeholder="Doe" />
                      </div>
                    </div>
                    <div>
                      <label className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground">Email</label>
                      <input type="email" required className="mt-1.5 w-full rounded-xl border border-border/50 bg-background/50 px-4 py-2.5 text-sm text-foreground placeholder-muted-foreground/50 outline-none transition-colors focus:border-gold/50 focus:ring-1 focus:ring-gold/20" placeholder="john@company.com" />
                    </div>
                    <div>
                      <label className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground">Company</label>
                      <input type="text" className="mt-1.5 w-full rounded-xl border border-border/50 bg-background/50 px-4 py-2.5 text-sm text-foreground placeholder-muted-foreground/50 outline-none transition-colors focus:border-gold/50 focus:ring-1 focus:ring-gold/20" placeholder="Your company" />
                    </div>
                    <div>
                      <label className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground">Services Needed</label>
                      <select className="mt-1.5 w-full rounded-xl border border-border/50 bg-background/50 px-4 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-gold/50 focus:ring-1 focus:ring-gold/20">
                        <option value="">Select a service</option>
                        <option>Web Design & Development</option>
                        <option>Full-Stack App Development</option>
                        <option>Search Engine Optimization</option>
                        <option>Branding & Packaging</option>
                        <option>Paid Advertising</option>
                        <option>Digital Auditing & Consulting</option>
                        <option>Custom Package (Multiple Services)</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground">Budget Range</label>
                      <div className="mt-1.5 grid grid-cols-2 gap-2 sm:grid-cols-4">
                        {["$2K-$5K", "$5K-$15K", "$15K-$50K", "$50K+"].map((b) => (
                          <button
                            key={b}
                            type="button"
                            onClick={() => setBudget(b)}
                            className={`rounded-xl border px-3 py-2 text-xs font-medium transition-all duration-200 ${
                              budget === b
                                ? "bg-gold/10 text-gold border-gold/30"
                                : "border-border/50 text-muted-foreground hover:border-border"
                            }`}
                          >
                            {b}
                          </button>
                        ))}
                      </div>
                    </div>
                    <div>
                      <label className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground">Project Details</label>
                      <textarea required rows={3} className="mt-1.5 w-full resize-none rounded-xl border border-border/50 bg-background/50 px-4 py-2.5 text-sm text-foreground placeholder-muted-foreground/50 outline-none transition-colors focus:border-gold/50 focus:ring-1 focus:ring-gold/20" placeholder="Tell us about your project, goals, and timeline..." />
                    </div>
                    <Button variant="gold" size="xl" type="submit" className="w-full">
                      Get Your Custom Proposal
                    </Button>
                    <p className="text-center text-[10px] text-muted-foreground">
                      Free consultation · No obligation · Response within 24 hours
                    </p>
                  </div>
                </form>
              )}
            </AnimatedSection>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
