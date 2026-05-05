import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="border-t border-border/50 bg-background">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-gold">
                <span className="text-sm font-bold text-primary-foreground">N</span>
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-bold tracking-tight text-foreground leading-none">
                  NEXUS<span className="text-gold">.</span>
                </span>
                <span className="text-[10px] font-medium tracking-widest text-muted-foreground uppercase">Digital Studio</span>
              </div>
            </Link>
            <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
              Houston's premier digital agency building custom solutions for ambitious businesses. From web design to full-stack development — we turn your vision into a digital powerhouse.
            </p>
            <div className="mt-4 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald animate-pulse" />
              <span className="text-xs text-muted-foreground">Available for new projects</span>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-gold">Services</h4>
            <ul className="mt-4 space-y-2.5">
              {["Web Design", "App Development", "SEO Services", "Branding & Packaging", "Paid Advertising", "Digital Auditing"].map((s) => (
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
              <li><Link to="/contact" className="text-xs text-muted-foreground transition-colors hover:text-foreground">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-gold">Houston, TX</h4>
            <address className="mt-4 space-y-2 text-xs not-italic text-muted-foreground">
              <p>1200 Post Oak Blvd, Suite 800</p>
              <p>Houston, TX 77056</p>
              <p className="mt-3">hello@nexusstudio.com</p>
              <p>(713) 555-0199</p>
            </address>
          </div>
        </div>

        <div className="line-gold mt-12" />

        <div className="mt-8 flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-[10px] text-muted-foreground">
            © {new Date().getFullYear()} Nexus Digital Studio. All rights reserved. Houston, Texas.
          </p>
          <div className="flex gap-6">
            <span className="text-[10px] text-muted-foreground hover:text-foreground cursor-pointer transition-colors">Privacy Policy</span>
            <span className="text-[10px] text-muted-foreground hover:text-foreground cursor-pointer transition-colors">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
