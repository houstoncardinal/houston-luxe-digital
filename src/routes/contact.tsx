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
      { name: "description", content: "Get in touch with Houston's premier digital agency. Schedule a free consultation to discuss your web design, development, or digital marketing project." },
      { property: "og:title", content: "Contact Us — Nexus Digital Studio" },
      { property: "og:description", content: "Schedule a free consultation with Houston's premier digital agency." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="pb-16 pt-32 lg:pt-40">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2">
            <AnimatedSection>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Contact</span>
              <h1 className="mt-4 text-5xl font-bold text-foreground md:text-6xl">
                Let's Create <span className="text-gradient-gold">Together</span>
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                Every extraordinary project begins with a conversation. Tell us about your vision, and we'll show you how to make it reality.
              </p>

              <div className="mt-12 space-y-8">
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Email</h3>
                  <p className="mt-2 text-lg text-foreground">hello@nexusstudio.com</p>
                </div>
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Phone</h3>
                  <p className="mt-2 text-lg text-foreground">(713) 555-0199</p>
                </div>
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Office</h3>
                  <p className="mt-2 text-lg text-foreground">1200 Post Oak Blvd, Suite 800</p>
                  <p className="text-muted-foreground">Houston, TX 77056</p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              {submitted ? (
                <div className="flex h-full items-center justify-center rounded-2xl border border-gold/20 bg-card p-12 text-center">
                  <div>
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gold/10">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-gold"><path d="M20 6 9 17l-5-5"/></svg>
                    </div>
                    <h3 className="mt-6 text-2xl font-semibold text-foreground">Message Sent</h3>
                    <p className="mt-2 text-muted-foreground">We'll be in touch within 24 hours.</p>
                  </div>
                </div>
              ) : (
                <form
                  onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
                  className="rounded-2xl border border-border/50 bg-card p-8 lg:p-10"
                >
                  <h2 className="text-2xl font-semibold text-foreground">Start Your Project</h2>
                  <p className="mt-2 text-sm text-muted-foreground">Fill out the form and we'll schedule your free consultation.</p>

                  <div className="mt-8 space-y-6">
                    <div className="grid gap-6 sm:grid-cols-2">
                      <div>
                        <label className="text-xs font-medium uppercase tracking-wider text-muted-foreground">First Name</label>
                        <input type="text" required className="mt-2 w-full rounded-lg border border-border/50 bg-background px-4 py-3 text-sm text-foreground placeholder-muted-foreground outline-none transition-colors focus:border-gold/50" placeholder="John" />
                      </div>
                      <div>
                        <label className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Last Name</label>
                        <input type="text" required className="mt-2 w-full rounded-lg border border-border/50 bg-background px-4 py-3 text-sm text-foreground placeholder-muted-foreground outline-none transition-colors focus:border-gold/50" placeholder="Doe" />
                      </div>
                    </div>
                    <div>
                      <label className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Email</label>
                      <input type="email" required className="mt-2 w-full rounded-lg border border-border/50 bg-background px-4 py-3 text-sm text-foreground placeholder-muted-foreground outline-none transition-colors focus:border-gold/50" placeholder="john@company.com" />
                    </div>
                    <div>
                      <label className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Company</label>
                      <input type="text" className="mt-2 w-full rounded-lg border border-border/50 bg-background px-4 py-3 text-sm text-foreground placeholder-muted-foreground outline-none transition-colors focus:border-gold/50" placeholder="Acme Inc." />
                    </div>
                    <div>
                      <label className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Service Interested In</label>
                      <select className="mt-2 w-full rounded-lg border border-border/50 bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-gold/50">
                        <option value="">Select a service</option>
                        <option>Web Design & Development</option>
                        <option>Full-Stack App Development</option>
                        <option>Search Engine Optimization</option>
                        <option>Branding & Packaging</option>
                        <option>Paid Advertising</option>
                        <option>Digital Auditing & Consulting</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Project Details</label>
                      <textarea required rows={4} className="mt-2 w-full resize-none rounded-lg border border-border/50 bg-background px-4 py-3 text-sm text-foreground placeholder-muted-foreground outline-none transition-colors focus:border-gold/50" placeholder="Tell us about your project, goals, and timeline..." />
                    </div>
                    <Button variant="gold" size="xl" type="submit" className="w-full">
                      Send Message
                    </Button>
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
