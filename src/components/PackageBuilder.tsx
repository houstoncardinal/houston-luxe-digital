import { useState, useCallback, type ReactNode } from "react";
import { AnimatedSection } from "./AnimatedSection";
import { Button } from "./ui/button";
import { Link } from "@tanstack/react-router";

interface ServiceOption {
  id: string;
  name: string;
  description: string;
  basePrice: number;
  icon: ReactNode;
  color: string;
  addons: { id: string; name: string; price: number }[];
}

const services: ServiceOption[] = [
  {
    id: "web-design",
    name: "Web Design & Development",
    description: "Custom responsive websites built for performance & conversions",
    basePrice: 5000,
    color: "gold",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/></svg>,
    addons: [
      { id: "cms", name: "CMS Integration", price: 1500 },
      { id: "ecom", name: "E-Commerce", price: 3000 },
      { id: "animations", name: "Custom Animations", price: 2000 },
    ],
  },
  {
    id: "app-dev",
    name: "Full-Stack App Development",
    description: "Enterprise applications with modern tech stacks",
    basePrice: 15000,
    color: "cyan",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="m18 16 4-4-4-4"/><path d="m6 8-4 4 4 4"/><path d="m14.5 4-5 16"/></svg>,
    addons: [
      { id: "mobile", name: "Mobile App (iOS + Android)", price: 10000 },
      { id: "api", name: "API Development", price: 5000 },
      { id: "cloud", name: "Cloud Infrastructure", price: 3000 },
    ],
  },
  {
    id: "seo",
    name: "Search Engine Optimization",
    description: "Data-driven strategies to dominate search rankings",
    basePrice: 2500,
    color: "emerald",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>,
    addons: [
      { id: "local-seo", name: "Local SEO (Houston)", price: 1000 },
      { id: "content", name: "Content Strategy", price: 2000 },
      { id: "link-building", name: "Link Building Campaign", price: 1500 },
    ],
  },
  {
    id: "branding",
    name: "Branding & Packaging",
    description: "Iconic identities that command market presence",
    basePrice: 4000,
    color: "violet",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2 2 7l10 5 10-5-10-5Z"/><path d="m2 17 10 5 10-5"/><path d="m2 12 10 5 10-5"/></svg>,
    addons: [
      { id: "guidelines", name: "Brand Guidelines Book", price: 2000 },
      { id: "packaging", name: "Packaging Design", price: 3000 },
      { id: "stationery", name: "Business Stationery", price: 1000 },
    ],
  },
  {
    id: "consulting",
    name: "Consulting & Auditing",
    description: "Deep digital audits & strategic growth consulting",
    basePrice: 3000,
    color: "rose",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>,
    addons: [
      { id: "competitor", name: "Competitor Analysis", price: 1500 },
      { id: "ux-audit", name: "UX Audit", price: 2000 },
      { id: "performance", name: "Performance Audit", price: 1000 },
    ],
  },
  {
    id: "paid-ads",
    name: "Paid Advertising",
    description: "High-ROI campaigns across Google, Meta & LinkedIn",
    basePrice: 2000,
    color: "gold",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20V10"/><path d="M18 20V4"/><path d="M6 20v-4"/></svg>,
    addons: [
      { id: "google-ads", name: "Google Ads Management", price: 1500 },
      { id: "social-ads", name: "Social Media Ads", price: 1500 },
      { id: "retargeting", name: "Retargeting Campaigns", price: 1000 },
    ],
  },
];

const colorMap: Record<string, { bg: string; text: string; border: string; ring: string }> = {
  gold: { bg: "bg-gold/10", text: "text-gold", border: "border-gold/20", ring: "ring-gold/30" },
  cyan: { bg: "bg-cyan/10", text: "text-cyan", border: "border-cyan/20", ring: "ring-cyan/30" },
  emerald: { bg: "bg-emerald/10", text: "text-emerald", border: "border-emerald/20", ring: "ring-emerald/30" },
  violet: { bg: "bg-violet/10", text: "text-violet", border: "border-violet/20", ring: "ring-violet/30" },
  rose: { bg: "bg-rose/10", text: "text-rose", border: "border-rose/20", ring: "ring-rose/30" },
};

export function PackageBuilder() {
  const [selected, setSelected] = useState<Record<string, boolean>>({});
  const [addons, setAddons] = useState<Record<string, boolean>>({});

  const toggleService = useCallback((id: string) => {
    setSelected((prev) => {
      const next = { ...prev, [id]: !prev[id] };
      if (!next[id]) {
        // Remove addons for this service
        setAddons((a) => {
          const updated = { ...a };
          const svc = services.find((s) => s.id === id);
          svc?.addons.forEach((addon) => { delete updated[`${id}-${addon.id}`]; });
          return updated;
        });
      }
      return next;
    });
  }, []);

  const toggleAddon = useCallback((serviceId: string, addonId: string) => {
    const key = `${serviceId}-${addonId}`;
    setAddons((prev) => ({ ...prev, [key]: !prev[key] }));
  }, []);

  const totalPrice = services.reduce((sum, svc) => {
    if (!selected[svc.id]) return sum;
    let price = svc.basePrice;
    svc.addons.forEach((addon) => {
      if (addons[`${svc.id}-${addon.id}`]) price += addon.price;
    });
    return sum + price;
  }, 0);

  const selectedCount = Object.values(selected).filter(Boolean).length;
  const discount = selectedCount >= 4 ? 0.15 : selectedCount >= 3 ? 0.1 : selectedCount >= 2 ? 0.05 : 0;
  const finalPrice = Math.round(totalPrice * (1 - discount));

  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <AnimatedSection className="mb-12 text-center">
          <span className="metric-badge bg-gold/10 text-gold border border-gold/20">Interactive</span>
          <h2 className="mt-4 text-4xl font-bold text-foreground md:text-5xl">
            Build Your <span className="text-gradient-gold">Custom Package</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Select the services you need and customize with add-ons. Bundle 2+ services for automatic discounts.
          </p>
        </AnimatedSection>

        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-4">
            {services.map((svc, i) => {
              const colors = colorMap[svc.color] || colorMap.gold;
              const isSelected = !!selected[svc.id];

              return (
                <AnimatedSection key={svc.id} delay={i * 80}>
                  <div
                    className={`widget cursor-pointer transition-all duration-300 ${
                      isSelected ? `ring-2 ${colors.ring} ${colors.border} border` : ""
                    }`}
                    onClick={() => toggleService(svc.id)}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex items-start gap-4">
                        <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${colors.bg} ${colors.text}`}>
                          {svc.icon}
                        </div>
                        <div>
                          <h3 className="text-base font-semibold text-foreground">{svc.name}</h3>
                          <p className="mt-1 text-xs text-muted-foreground">{svc.description}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-lg font-bold text-foreground">${svc.basePrice.toLocaleString()}</span>
                        <div className={`flex h-6 w-6 items-center justify-center rounded-md border ${
                          isSelected ? `${colors.bg} ${colors.border}` : "border-border"
                        } transition-all duration-200`}>
                          {isSelected && (
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className={colors.text}><path d="M20 6 9 17l-5-5"/></svg>
                          )}
                        </div>
                      </div>
                    </div>

                    {isSelected && (
                      <div className="mt-4 border-t border-border/50 pt-4">
                        <p className="mb-3 text-xs font-medium uppercase tracking-wider text-muted-foreground">Add-ons</p>
                        <div className="grid gap-2 sm:grid-cols-3">
                          {svc.addons.map((addon) => {
                            const addonKey = `${svc.id}-${addon.id}`;
                            const addonSelected = !!addons[addonKey];
                            return (
                              <button
                                key={addon.id}
                                onClick={(e) => { e.stopPropagation(); toggleAddon(svc.id, addon.id); }}
                                className={`rounded-lg border px-3 py-2 text-left text-xs transition-all duration-200 ${
                                  addonSelected
                                    ? `${colors.bg} ${colors.border} ${colors.text}`
                                    : "border-border/50 text-muted-foreground hover:border-border"
                                }`}
                              >
                                <div className="font-medium">{addon.name}</div>
                                <div className="mt-0.5 opacity-70">+${addon.price.toLocaleString()}</div>
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </div>
                </AnimatedSection>
              );
            })}
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-28">
              <AnimatedSection delay={300}>
                <div className="widget">
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Your Package</h3>

                  <div className="mt-6 space-y-3">
                    {services.filter((s) => selected[s.id]).map((svc) => {
                      const colors = colorMap[svc.color] || colorMap.gold;
                      const svcAddons = svc.addons.filter((a) => addons[`${svc.id}-${a.id}`]);
                      return (
                        <div key={svc.id} className="rounded-lg border border-border/50 p-3">
                          <div className="flex items-center justify-between">
                            <span className={`text-sm font-medium ${colors.text}`}>{svc.name}</span>
                            <span className="text-xs text-muted-foreground">${svc.basePrice.toLocaleString()}</span>
                          </div>
                          {svcAddons.map((a) => (
                            <div key={a.id} className="mt-1 flex items-center justify-between pl-3">
                              <span className="text-xs text-muted-foreground">+ {a.name}</span>
                              <span className="text-xs text-muted-foreground">${a.price.toLocaleString()}</span>
                            </div>
                          ))}
                        </div>
                      );
                    })}

                    {selectedCount === 0 && (
                      <p className="py-8 text-center text-xs text-muted-foreground">
                        Select services to build your custom package
                      </p>
                    )}
                  </div>

                  {selectedCount > 0 && (
                    <div className="mt-6 space-y-3 border-t border-border/50 pt-4">
                      <div className="flex justify-between text-sm text-muted-foreground">
                        <span>Subtotal</span>
                        <span>${totalPrice.toLocaleString()}</span>
                      </div>
                      {discount > 0 && (
                        <div className="flex justify-between text-sm">
                          <span className="text-emerald">Bundle Discount ({Math.round(discount * 100)}%)</span>
                          <span className="text-emerald">-${(totalPrice - finalPrice).toLocaleString()}</span>
                        </div>
                      )}
                      <div className="flex justify-between border-t border-border/50 pt-3">
                        <span className="text-lg font-bold text-foreground">Starting At</span>
                        <span className="text-2xl font-bold text-gradient-gold">${finalPrice.toLocaleString()}</span>
                      </div>
                    </div>
                  )}

                  <Button variant="gold" size="xl" className="mt-6 w-full" asChild>
                    <Link to="/contact">
                      {selectedCount > 0 ? "Get Your Custom Proposal" : "Schedule a Consultation"}
                    </Link>
                  </Button>

                  {selectedCount >= 2 && (
                    <p className="mt-3 text-center text-xs text-emerald">
                      🎉 Bundle discount applied! Save ${(totalPrice - finalPrice).toLocaleString()}
                    </p>
                  )}
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
