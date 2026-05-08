import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="border-t border-border/50 bg-background">
      {/* Certifications Bar */}
      <div className="border-b border-border/30 py-6">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-6 lg:gap-10">
            {[
              { icon: <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-emerald"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>, label: "SOC 2 Type II" },
              { icon: <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-emerald"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/></svg>, label: "OWASP Compliant" },
              { icon: <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-emerald"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>, label: "HIPAA Ready" },
              { icon: <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-gold"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>, label: "Clutch Top Agency 2024" },
              { icon: <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-gold"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>, label: "BBB A+ Rated" },
            ].map((cert) => (
              <div key={cert.label} className="flex items-center gap-1.5">
                {cert.icon}
                <span className="text-[10px] font-medium text-muted-foreground">{cert.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-5">
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-gold">
                <span className="text-sm font-bold text-primary-foreground">N</span>
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-bold tracking-tight text-foreground leading-none">
                  NEXUS<span className="text-gold">.</span>
                </span>
                <span className="text-[10px] font-medium tracking-widest text-muted-foreground uppercase">Enterprise Digital</span>
              </div>
            </Link>
            <p className="mt-4 text-xs leading-relaxed text-muted-foreground max-w-xs">
              Houston's #1 enterprise digital agency. SOC 2 certified. Building secure, high-performance digital platforms for companies that can't afford to fail.
            </p>
            <div className="mt-4 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald animate-pulse" />
              <span className="text-xs text-muted-foreground">Available for enterprise engagements</span>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-gold">Solutions</h4>
            <ul className="mt-4 space-y-2.5">
              {["Web Design & Development", "App Development", "Cybersecurity", "SEO Services", "Branding & Packaging", "Paid Advertising", "Digital Auditing"].map((s) => (
                <li key={s}>
                  <Link to="/services" className="text-xs text-muted-foreground transition-colors hover:text-foreground">{s}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-gold">Company</h4>
            <ul className="mt-4 space-y-2.5">
              <li><Link to="/about" className="text-xs text-muted-foreground transition-colors hover:text-foreground">About Us</Link></li>
              <li><Link to="/work" className="text-xs text-muted-foreground transition-colors hover:text-foreground">Portfolio</Link></li>
              <li><Link to="/security" className="text-xs text-muted-foreground transition-colors hover:text-foreground">Security</Link></li>
              <li><Link to="/contact" className="text-xs text-muted-foreground transition-colors hover:text-foreground">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-gold">Houston, TX</h4>
            <address className="mt-4 space-y-2 text-xs not-italic text-muted-foreground">
              <p>1200 Post Oak Blvd, Suite 800</p>
              <p>Houston, TX 77056</p>
              <p className="mt-3">enterprise@nexusstudio.com</p>
              <p>(713) 555-0199</p>
            </address>
          </div>
        </div>

        <div className="line-gold mt-12" />

        <div className="mt-8 flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-[10px] text-muted-foreground">
            © {new Date().getFullYear()} Nexus Digital Studio. All rights reserved. Houston, Texas. SOC 2 Type II Certified.
          </p>
          <div className="flex gap-6">
            <span className="text-[10px] text-muted-foreground hover:text-foreground cursor-pointer transition-colors">Privacy Policy</span>
            <span className="text-[10px] text-muted-foreground hover:text-foreground cursor-pointer transition-colors">Terms of Service</span>
            <span className="text-[10px] text-muted-foreground hover:text-foreground cursor-pointer transition-colors">Security Policy</span>
            <span className="text-[10px] text-muted-foreground hover:text-foreground cursor-pointer transition-colors">NDA Request</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
