import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Link } from "@tanstack/react-router";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Enterprise Consultation — Nexus Digital Studio | Houston TX" },
      { name: "description", content: "Schedule a free enterprise consultation with Houston's #1 digital agency. SOC 2 certified. NDA available. Security assessment included. Response within 4 business hours." },
      { property: "og:title", content: "Enterprise Consultation — Nexus Digital Studio" },
      { property: "og:description", content: "Schedule a free enterprise consultation. SOC 2 certified. NDA available." },
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
              <div className="flex flex-wrap items-center gap-2">
                <div className="inline-flex items-center gap-2 rounded-full border border-gold/20 bg-gold/5 px-4 py-1.5">
                  <span className="h-2 w-2 rounded-full bg-gold animate-pulse" />
                  <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-gold">Enterprise Inquiry</span>
                </div>
                <div className="inline-flex items-center gap-1.5 rounded-full border border-emerald/20 bg-emerald/5 px-3 py-1.5">
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-emerald"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                  <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-emerald">NDA Available</span>
                </div>
              </div>
              <h1 className="mt-6 text-4xl font-bold text-foreground md:text-5xl">
                Let's Build Your <span className="text-gradient-gold">Enterprise Solution</span>
              </h1>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Every enterprise engagement begins with understanding your goals, security requirements, and growth targets. We respond within 4 business hours with a custom strategy brief.
              </p>

              <div className="mt-10 space-y-6">
                {[
                  { label: "Enterprise Email", value: "enterprise@nexusstudio.com", icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-gold"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg> },
                  { label: "Direct Line", value: "(713) 555-0199", icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-gold"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg> },
                  { label: "Headquarters", value: "1200 Post Oak Blvd, Suite 800, Houston, TX 77056", icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-gold"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg> },
                ].map((item) => (
                  <div key={item.label} className="widget flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gold/10">{item.icon}</div>
                    <div>
                      <span className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">{item.label}</span>
                      <p className="mt-0.5 text-sm font-medium text-foreground">{item.value}</p>
                    </div>
                  </div>
                ))}

                {/* Enterprise Guarantees */}
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                  {[
                    { value: "< 4hr", label: "Response Time" },
                    { value: "Free", label: "Security Audit" },
                    { value: "NDA", label: "Available" },
                    { value: "SOC 2", label: "Certified" },
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
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald/10">
                      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-emerald"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                    </div>
                    <h3 className="mt-6 text-xl font-semibold text-foreground">Enterprise Request Received</h3>
                    <p className="mt-2 text-sm text-muted-foreground">Our enterprise team will review your requirements and respond within 4 business hours with a custom strategy brief and security assessment plan.</p>
                    <div className="mt-4 flex items-center justify-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-emerald"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                      <span className="text-xs text-emerald font-medium">Your data is encrypted and protected under NDA</span>
                    </div>
                  </div>
                </div>
              ) : (
                <form
                  onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
                  className="widget"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h2 className="text-xl font-semibold text-foreground">Start Your Enterprise Project</h2>
                      <p className="mt-1 text-xs text-muted-foreground">Free consultation + complimentary security assessment.</p>
                    </div>
                    <div className="flex items-center gap-1.5 rounded-lg border border-emerald/20 bg-emerald/5 px-2.5 py-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-emerald"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                      <span className="text-[9px] font-medium text-emerald">Encrypted</span>
                    </div>
                  </div>

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
                      <label className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground">Corporate Email</label>
                      <input type="email" required className="mt-1.5 w-full rounded-xl border border-border/50 bg-background/50 px-4 py-2.5 text-sm text-foreground placeholder-muted-foreground/50 outline-none transition-colors focus:border-gold/50 focus:ring-1 focus:ring-gold/20" placeholder="john@company.com" />
                    </div>
                    <div>
                      <label className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground">Organization</label>
                      <input type="text" className="mt-1.5 w-full rounded-xl border border-border/50 bg-background/50 px-4 py-2.5 text-sm text-foreground placeholder-muted-foreground/50 outline-none transition-colors focus:border-gold/50 focus:ring-1 focus:ring-gold/20" placeholder="Your organization" />
                    </div>
                    <div>
                      <label className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground">Services Required</label>
                      <select className="mt-1.5 w-full rounded-xl border border-border/50 bg-background/50 px-4 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-gold/50 focus:ring-1 focus:ring-gold/20">
                        <option value="">Select primary service</option>
                        <option>Enterprise Web Design & Development</option>
                        <option>Full-Stack Application Development</option>
                        <option>Cybersecurity & Penetration Testing</option>
                        <option>Search Engine Optimization</option>
                        <option>Branding & Packaging</option>
                        <option>Paid Advertising</option>
                        <option>Digital Auditing & Consulting</option>
                        <option>Custom Enterprise Package</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground">Investment Range</label>
                      <div className="mt-1.5 grid grid-cols-2 gap-2 sm:grid-cols-4">
                        {["$5K-$15K", "$15K-$50K", "$50K-$150K", "$150K+"].map((b) => (
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
                      <label className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground">Project & Security Requirements</label>
                      <textarea required rows={3} className="mt-1.5 w-full resize-none rounded-xl border border-border/50 bg-background/50 px-4 py-2.5 text-sm text-foreground placeholder-muted-foreground/50 outline-none transition-colors focus:border-gold/50 focus:ring-1 focus:ring-gold/20" placeholder="Describe your project, security requirements, compliance needs, timeline..." />
                    </div>
                    <div className="flex items-start gap-2">
                      <input type="checkbox" id="nda" className="mt-1 rounded border-border" />
                      <label htmlFor="nda" className="text-[10px] text-muted-foreground">I'd like an NDA in place before the initial consultation</label>
                    </div>
                    <Button variant="gold" size="xl" type="submit" className="w-full">
                      Submit Enterprise Inquiry
                    </Button>
                    <p className="text-center text-[10px] text-muted-foreground">
                      Free consultation · Security assessment included · Response within 4 hours · SOC 2 compliant
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
