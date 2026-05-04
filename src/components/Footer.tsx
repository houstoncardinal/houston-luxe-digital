import { Link } from "@tanstack/react-router";

const footerLinks = {
  services: [
    { label: "Web Design", to: "/services" },
    { label: "App Development", to: "/services" },
    { label: "SEO Services", to: "/services" },
    { label: "Branding & Packaging", to: "/services" },
    { label: "Paid Advertising", to: "/services" },
    { label: "Digital Auditing", to: "/services" },
  ],
  company: [
    { label: "About Us", to: "/about" },
    { label: "Our Work", to: "/work" },
    { label: "Contact", to: "/contact" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-border/50 bg-background">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-gold">
                <span className="text-lg font-bold text-primary-foreground">N</span>
              </div>
              <span className="text-xl font-bold tracking-tight text-foreground">
                NEXUS<span className="text-gold">.</span>
              </span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Houston's premier digital agency crafting extraordinary digital experiences for ambitious brands.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-gold">Services</h4>
            <ul className="mt-4 space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link to={link.to} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-gold">Company</h4>
            <ul className="mt-4 space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link to={link.to} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-gold">Houston, TX</h4>
            <address className="mt-4 space-y-2 text-sm not-italic text-muted-foreground">
              <p>1200 Post Oak Blvd</p>
              <p>Suite 800</p>
              <p>Houston, TX 77056</p>
              <p className="mt-4">hello@nexusstudio.com</p>
              <p>(713) 555-0199</p>
            </address>
          </div>
        </div>

        <div className="line-gold mt-12" />

        <div className="mt-8 flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Nexus Digital Studio. All rights reserved.
          </p>
          <div className="flex gap-6">
            <span className="text-xs text-muted-foreground hover:text-foreground cursor-pointer transition-colors">Privacy Policy</span>
            <span className="text-xs text-muted-foreground hover:text-foreground cursor-pointer transition-colors">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
