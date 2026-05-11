import { useServerFn } from "@tanstack/react-start";
import { createFileRoute as createRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { auditUrl, type SeoAuditResult, type SeoCheck } from "@/lib/seo.functions";

export const Route = createRoute("/seo")({
  head: () => ({
    meta: [
      { title: "Real-Time SEO Audit — Nexus Digital Studio Houston" },
      { name: "description", content: "Run a free, accurate, real-time SEO audit on any website. 18+ enterprise-grade checks covering meta, content, performance, accessibility, social, and technical SEO." },
      { property: "og:title", content: "Free Real-Time SEO Audit Tool — Nexus Houston" },
      { property: "og:description", content: "Enter any URL and get a detailed SEO audit instantly — score, grade, and 18+ checks across meta, performance, social, accessibility, and technical SEO." },
    ],
  }),
  component: SeoPage,
});

const categoryColors: Record<SeoCheck["category"], string> = {
  Meta: "text-primary",
  Content: "text-emerald",
  Performance: "text-cyan",
  Social: "text-violet",
  Technical: "text-gold",
  Accessibility: "text-rose",
};

function StatusDot({ status }: { status: SeoCheck["status"] }) {
  const color =
    status === "pass" ? "bg-emerald" : status === "warn" ? "bg-gold" : "bg-destructive";
  return <span className={`inline-block h-2 w-2 rounded-full ${color}`} />;
}

function CheckRow({ check }: { check: SeoCheck }) {
  return (
    <div className="grid grid-cols-[auto_1fr_auto] items-start gap-4 border-b border-border/40 px-5 py-4 last:border-0">
      <div className="pt-1.5">
        <StatusDot status={check.status} />
      </div>
      <div>
        <div className="flex flex-wrap items-baseline gap-3">
          <span className={`text-[10px] font-semibold uppercase tracking-[0.22em] ${categoryColors[check.category]}`}>
            {check.category}
          </span>
          <span className="font-serif text-base font-semibold text-foreground">{check.label}</span>
          {check.value && (
            <span className="font-mono text-xs text-muted-foreground truncate max-w-[28rem]">
              {check.value}
            </span>
          )}
        </div>
        <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{check.detail}</p>
      </div>
      <div className="pt-1">
        <span
          className={`metric-badge ${
            check.status === "pass"
              ? "bg-emerald/10 text-emerald"
              : check.status === "warn"
                ? "bg-gold/10 text-gold"
                : "bg-destructive/10 text-destructive"
          }`}
        >
          {check.status === "pass" ? "Pass" : check.status === "warn" ? "Improve" : "Fail"}
        </span>
      </div>
    </div>
  );
}

function ScoreDial({ score, grade }: { score: number; grade: string }) {
  const r = 64;
  const c = 2 * Math.PI * r;
  const offset = c - (score / 100) * c;
  const tone = score >= 80 ? "var(--emerald)" : score >= 60 ? "var(--gold)" : "var(--destructive)";
  return (
    <div className="relative flex h-44 w-44 items-center justify-center">
      <svg className="absolute inset-0 -rotate-90" viewBox="0 0 160 160">
        <circle cx="80" cy="80" r={r} stroke="oklch(0.9 0.008 90)" strokeWidth="10" fill="none" />
        <circle
          cx="80"
          cy="80"
          r={r}
          stroke={tone}
          strokeWidth="10"
          fill="none"
          strokeLinecap="round"
          strokeDasharray={c}
          strokeDashoffset={offset}
          style={{ transition: "stroke-dashoffset 1.2s cubic-bezier(0.16,1,0.3,1)" }}
        />
      </svg>
      <div className="text-center">
        <div className="font-serif text-5xl font-bold tabular-nums text-foreground">{score}</div>
        <div className="mt-1 text-[10px] font-semibold uppercase tracking-[0.25em] text-muted-foreground">
          Grade {grade}
        </div>
      </div>
    </div>
  );
}

function SeoPage() {
  const auditFn = useServerFn(auditUrl);
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<SeoAuditResult | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [filter, setFilter] = useState<"all" | "fail" | "warn" | "pass">("all");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!url.trim()) return;
    setLoading(true);
    setError(null);
    setResult(null);
    try {
      const res = await auditFn({ data: { url } });
      setResult(res);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Audit failed. Try again.");
    } finally {
      setLoading(false);
    }
  };

  const filteredChecks = result
    ? filter === "all"
      ? result.checks
      : result.checks.filter((c) => c.status === filter)
    : [];

  const grouped = filteredChecks.reduce<Record<string, SeoCheck[]>>((acc, c) => {
    (acc[c.category] ||= []).push(c);
    return acc;
  }, {});

  return (
    <div className="relative min-h-screen bg-background">
      <Header />

      {/* Masthead */}
      <section className="relative overflow-hidden border-b border-border bg-gradient-dark pt-32 pb-16">
        <div className="absolute inset-0 dot-grid opacity-40" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-6 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.3em] text-muted-foreground">
            <span>Vol. XII · No. 47</span>
            <span className="h-px w-8 bg-border" />
            <span>The Audit Bureau</span>
            <span className="h-px w-8 bg-border" />
            <span className="text-primary">Houston · Real-Time</span>
          </div>
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <span className="editorial-eyebrow">Diagnostic · SEO Intelligence</span>
              <h1 className="editorial-headline mt-4 text-5xl md:text-6xl lg:text-7xl">
                The state of your <em>search presence</em>, in real time.
              </h1>
              <p className="mt-6 max-w-2xl font-serif text-lg leading-relaxed text-muted-foreground dropcap">
                Enter any public URL and our engine fetches the page live, parses the HTML, and runs eighteen enterprise-grade checks across meta, content, performance, accessibility, social, and technical SEO — the same diagnostic pass we run for every Houston client engagement.
              </p>
            </div>
            <aside className="lg:col-span-4">
              <div className="widget">
                <div className="editorial-eyebrow mb-3">In this audit</div>
                <ol className="space-y-2 text-sm">
                  {["Meta & indexability", "Heading hierarchy", "Content depth", "Image accessibility", "Open Graph & social", "HTTPS & status", "Structured data", "Server response time"].map((t, i) => (
                    <li key={t} className="flex items-baseline gap-3 border-b border-border/40 pb-2 last:border-0">
                      <span className="font-mono text-[10px] text-muted-foreground tabular-nums">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="font-serif text-foreground">{t}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Input panel */}
      <section className="relative border-b border-border bg-background py-12">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <form onSubmit={handleSubmit} className="widget !p-6 md:!p-8">
            <label htmlFor="seo-url" className="editorial-eyebrow">
              Begin diagnostic
            </label>
            <div className="mt-4 flex flex-col gap-3 md:flex-row">
              <div className="relative flex-1">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 font-mono text-xs text-muted-foreground">
                  https://
                </span>
                <input
                  id="seo-url"
                  type="text"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  placeholder="yourcompany.com"
                  disabled={loading}
                  className="w-full rounded-lg border border-border bg-background pl-20 pr-4 py-4 font-serif text-lg text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 disabled:opacity-50"
                  required
                />
              </div>
              <Button type="submit" variant="gold" size="lg" disabled={loading || !url.trim()}>
                {loading ? "Auditing…" : "Run Audit"}
              </Button>
            </div>
            <p className="mt-3 text-xs text-muted-foreground">
              Live fetch · 18 checks · no signup · results in seconds. We never store the URLs you audit.
            </p>
            {error && (
              <div className="mt-4 rounded-lg border border-destructive/30 bg-destructive/5 px-4 py-3 text-sm text-destructive">
                {error}
              </div>
            )}
          </form>
        </div>
      </section>

      {/* Loading state */}
      {loading && (
        <section className="py-20">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <div className="editorial-eyebrow justify-center">Fetching live page</div>
            <h2 className="mt-4 font-serif text-3xl font-bold">Running 18 enterprise SEO checks…</h2>
            <div className="mt-8 space-y-2">
              {["Meta", "Content", "Accessibility", "Social", "Technical", "Performance"].map((c) => (
                <div key={c} className="flex items-center gap-3 rounded-lg border border-border bg-card/50 px-4 py-3">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-primary" />
                  <span className="font-serif text-sm">{c}</span>
                  <span className="ml-auto font-mono text-xs text-muted-foreground">analyzing…</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Results */}
      {result && !loading && (
        <>
          <section className="border-b border-border bg-secondary/30 py-12">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="grid items-center gap-10 lg:grid-cols-[auto_1fr_auto]">
                <ScoreDial score={result.score} grade={result.grade} />
                <div>
                  <div className="editorial-eyebrow">Diagnostic complete</div>
                  <h2 className="mt-3 break-all font-serif text-2xl font-bold md:text-3xl">
                    {result.finalUrl}
                  </h2>
                  <div className="mt-5 grid grid-cols-2 gap-4 md:grid-cols-4">
                    <div className="rounded-lg border border-border bg-card/60 px-4 py-3">
                      <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">Status</div>
                      <div className="mt-1 font-serif text-xl font-bold">{result.statusCode}</div>
                    </div>
                    <div className="rounded-lg border border-border bg-card/60 px-4 py-3">
                      <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">Response</div>
                      <div className="mt-1 font-serif text-xl font-bold">{result.loadTimeMs} ms</div>
                    </div>
                    <div className="rounded-lg border border-border bg-card/60 px-4 py-3">
                      <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">HTML</div>
                      <div className="mt-1 font-serif text-xl font-bold">{result.sizeKb} KB</div>
                    </div>
                    <div className="rounded-lg border border-border bg-card/60 px-4 py-3">
                      <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">Words</div>
                      <div className="mt-1 font-serif text-xl font-bold">{result.meta.wordCount}</div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-2 md:items-end">
                  <div className="metric-badge bg-emerald/10 text-emerald">
                    {result.summary.pass} Passed
                  </div>
                  <div className="metric-badge bg-gold/10 text-gold">
                    {result.summary.warn} To Improve
                  </div>
                  <div className="metric-badge bg-destructive/10 text-destructive">
                    {result.summary.fail} Failed
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Preview card */}
          <section className="border-b border-border py-10">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="editorial-eyebrow mb-4">Search & social preview</div>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="widget">
                  <div className="text-[10px] font-semibold uppercase tracking-[0.25em] text-muted-foreground">Google result</div>
                  <div className="mt-4">
                    <div className="text-xs text-muted-foreground truncate">{result.finalUrl}</div>
                    <div className="mt-1 line-clamp-2 font-serif text-xl text-primary">
                      {result.preview.title || "(no title)"}
                    </div>
                    <div className="mt-1 line-clamp-3 text-sm text-muted-foreground">
                      {result.preview.description || "(no description)"}
                    </div>
                  </div>
                </div>
                <div className="widget">
                  <div className="text-[10px] font-semibold uppercase tracking-[0.25em] text-muted-foreground">Social card</div>
                  {result.preview.ogImage ? (
                    <img
                      src={result.preview.ogImage}
                      alt="og preview"
                      className="mt-3 aspect-[1.91/1] w-full rounded-lg border border-border object-cover"
                    />
                  ) : (
                    <div className="mt-3 flex aspect-[1.91/1] w-full items-center justify-center rounded-lg border border-dashed border-border text-xs text-muted-foreground">
                      No og:image
                    </div>
                  )}
                  <div className="mt-3 line-clamp-1 font-serif text-base font-semibold">
                    {result.preview.title || "(no title)"}
                  </div>
                  <div className="line-clamp-2 text-xs text-muted-foreground">
                    {result.preview.description || "(no description)"}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Filter tabs */}
          <section className="py-10">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
                <h3 className="font-serif text-3xl font-bold">Detailed findings</h3>
                <div className="flex gap-1 rounded-lg border border-border bg-card/50 p-1">
                  {(["all", "fail", "warn", "pass"] as const).map((f) => (
                    <button
                      key={f}
                      onClick={() => setFilter(f)}
                      className={`rounded-md px-3 py-1.5 text-xs font-medium transition-all ${
                        filter === f
                          ? "bg-foreground text-background"
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      {f === "all" ? "All" : f === "fail" ? "Failed" : f === "warn" ? "Improve" : "Passed"}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                {Object.entries(grouped).map(([cat, items]) => (
                  <div key={cat} className="widget !p-0">
                    <div className="flex items-center justify-between border-b border-border bg-secondary/30 px-5 py-3">
                      <div className="flex items-center gap-3">
                        <span className={`text-[10px] font-semibold uppercase tracking-[0.25em] ${categoryColors[cat as SeoCheck["category"]]}`}>
                          {cat}
                        </span>
                        <span className="font-serif text-lg font-bold">{items.length} check{items.length === 1 ? "" : "s"}</span>
                      </div>
                    </div>
                    <div>
                      {items.map((c) => (
                        <CheckRow key={c.id} check={c} />
                      ))}
                    </div>
                  </div>
                ))}
                {filteredChecks.length === 0 && (
                  <div className="rounded-xl border border-dashed border-border py-12 text-center text-sm text-muted-foreground">
                    No checks match this filter.
                  </div>
                )}
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="border-t border-border bg-gradient-dark py-16">
            <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
              <span className="editorial-eyebrow justify-center">Next step</span>
              <h3 className="mt-4 font-serif text-4xl font-bold">
                Want Nexus to fix every issue?
              </h3>
              <p className="mt-4 font-serif text-lg text-muted-foreground">
                Our Houston SEO team turns audits like this into measurable revenue. Average client: +127% organic traffic in 90 days.
              </p>
              <div className="mt-8">
                <Button variant="gold" size="lg" asChild>
                  <a href="/contact">Schedule a Strategy Call</a>
                </Button>
              </div>
            </div>
          </section>
        </>
      )}

      <Footer />
    </div>
  );
}
