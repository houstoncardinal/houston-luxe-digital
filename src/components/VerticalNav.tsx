import { Link, useLocation } from "@tanstack/react-router";
import { useState, useEffect } from "react";

const sections = [
  { to: "/", label: "Home", num: "01" },
  { to: "/services", label: "Services", num: "02" },
  { to: "/work", label: "Portfolio", num: "03" },
  { to: "/seo", label: "SEO Audit", num: "04" },
  { to: "/security", label: "Security", num: "05" },
  { to: "/about", label: "About", num: "06" },
  { to: "/contact", label: "Contact", num: "07" },
] as const;

export function VerticalNav() {
  const location = useLocation();
  const [expanded, setExpanded] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <aside
      onMouseEnter={() => setExpanded(true)}
      onMouseLeave={() => setExpanded(false)}
      className={`fixed left-4 top-1/2 z-40 hidden -translate-y-1/2 transition-all duration-500 lg:block ${
        visible ? "opacity-100 translate-x-0" : "pointer-events-none -translate-x-8 opacity-0"
      }`}
      aria-label="Guided navigation"
    >
      <div
        className={`glass glass-border rounded-2xl border p-2 shadow-gold-sm transition-all duration-500 ${
          expanded ? "w-56" : "w-14"
        }`}
      >
        <div className="mb-2 flex items-center gap-2 px-2 py-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
          {expanded && (
            <span className="text-[9px] font-semibold uppercase tracking-[0.25em] text-muted-foreground">
              Guided Tour
            </span>
          )}
        </div>
        <div className="editorial-rule mb-2" />
        <nav className="flex flex-col gap-0.5">
          {sections.map((s) => {
            const isActive = location.pathname === s.to;
            return (
              <Link
                key={s.to}
                to={s.to}
                className={`group flex items-center gap-3 rounded-lg px-2 py-2 transition-all ${
                  isActive
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:bg-muted/40 hover:text-foreground"
                }`}
              >
                <span
                  className={`font-mono text-[10px] tabular-nums ${
                    isActive ? "text-primary" : "text-muted-foreground/60"
                  }`}
                >
                  {s.num}
                </span>
                <span
                  className={`h-px flex-shrink-0 transition-all ${
                    isActive ? "w-6 bg-primary" : "w-3 bg-border group-hover:w-5 group-hover:bg-foreground/40"
                  }`}
                />
                {expanded && (
                  <span className="font-serif text-sm font-medium tracking-tight whitespace-nowrap">
                    {s.label}
                  </span>
                )}
              </Link>
            );
          })}
        </nav>
        {expanded && (
          <>
            <div className="editorial-rule my-2" />
            <div className="px-2 py-1">
              <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                Houston · Est. 2013
              </p>
            </div>
          </>
        )}
      </div>
    </aside>
  );
}
