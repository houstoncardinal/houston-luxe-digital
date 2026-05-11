import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const inputSchema = z.object({
  url: z
    .string()
    .trim()
    .min(3)
    .max(2048)
    .transform((u) => (u.match(/^https?:\/\//i) ? u : `https://${u}`))
    .refine((u) => {
      try {
        new URL(u);
        return true;
      } catch {
        return false;
      }
    }, "Invalid URL"),
});

export type SeoCheck = {
  id: string;
  category: "Meta" | "Content" | "Performance" | "Social" | "Technical" | "Accessibility";
  label: string;
  status: "pass" | "warn" | "fail";
  value?: string;
  detail: string;
  weight: number;
};

export type SeoAuditResult = {
  url: string;
  finalUrl: string;
  statusCode: number;
  loadTimeMs: number;
  sizeKb: number;
  score: number;
  grade: string;
  fetchedAt: string;
  summary: { pass: number; warn: number; fail: number };
  checks: SeoCheck[];
  preview: {
    title: string;
    description: string;
    ogImage: string | null;
    favicon: string | null;
  };
  meta: {
    h1Count: number;
    h2Count: number;
    h3Count: number;
    imageCount: number;
    imagesWithoutAlt: number;
    internalLinks: number;
    externalLinks: number;
    wordCount: number;
    hasViewport: boolean;
    hasCanonical: boolean;
    hasRobots: boolean;
    hasStructuredData: boolean;
    hasOpenGraph: boolean;
    hasTwitterCard: boolean;
    isHttps: boolean;
    hasLang: boolean;
    hasFavicon: boolean;
  };
};

function extract(re: RegExp, html: string): string | null {
  const m = html.match(re);
  return m ? (m[1] ?? "").trim() : null;
}

function countMatches(re: RegExp, html: string): number {
  return (html.match(re) || []).length;
}

function gradeFromScore(score: number): string {
  if (score >= 90) return "A+";
  if (score >= 80) return "A";
  if (score >= 70) return "B";
  if (score >= 60) return "C";
  if (score >= 50) return "D";
  return "F";
}

export const auditUrl = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => inputSchema.parse(data))
  .handler(async ({ data }): Promise<SeoAuditResult> => {
    const target = data.url;
    const started = Date.now();

    let html = "";
    let statusCode = 0;
    let finalUrl = target;
    let sizeKb = 0;
    let fetchError: string | null = null;

    try {
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 12000);
      const res = await fetch(target, {
        method: "GET",
        redirect: "follow",
        signal: controller.signal,
        headers: {
          "User-Agent":
            "Mozilla/5.0 (compatible; NexusSEOBot/1.0; +https://nexus.studio/seo)",
          Accept: "text/html,application/xhtml+xml",
        },
      });
      clearTimeout(timeout);
      statusCode = res.status;
      finalUrl = res.url || target;
      html = await res.text();
      sizeKb = Math.round((new Blob([html]).size / 1024) * 10) / 10;
    } catch (err) {
      fetchError = err instanceof Error ? err.message : "Fetch failed";
    }

    const loadTimeMs = Date.now() - started;

    if (fetchError || !html) {
      return {
        url: target,
        finalUrl,
        statusCode,
        loadTimeMs,
        sizeKb,
        score: 0,
        grade: "F",
        fetchedAt: new Date().toISOString(),
        summary: { pass: 0, warn: 0, fail: 1 },
        checks: [
          {
            id: "fetch",
            category: "Technical",
            label: "Page reachable",
            status: "fail",
            detail: fetchError || "The page could not be fetched. Verify the URL is publicly accessible.",
            weight: 100,
          },
        ],
        preview: { title: "", description: "", ogImage: null, favicon: null },
        meta: {
          h1Count: 0, h2Count: 0, h3Count: 0, imageCount: 0, imagesWithoutAlt: 0,
          internalLinks: 0, externalLinks: 0, wordCount: 0,
          hasViewport: false, hasCanonical: false, hasRobots: false,
          hasStructuredData: false, hasOpenGraph: false, hasTwitterCard: false,
          isHttps: target.startsWith("https://"), hasLang: false, hasFavicon: false,
        },
      };
    }

    // Extractions
    const title = extract(/<title[^>]*>([\s\S]*?)<\/title>/i, html) || "";
    const description = extract(/<meta\s+[^>]*name=["']description["'][^>]*content=["']([^"']*)["']/i, html) || "";
    const canonical = extract(/<link\s+[^>]*rel=["']canonical["'][^>]*href=["']([^"']+)["']/i, html);
    const viewport = extract(/<meta\s+[^>]*name=["']viewport["'][^>]*content=["']([^"']*)["']/i, html);
    const robots = extract(/<meta\s+[^>]*name=["']robots["'][^>]*content=["']([^"']*)["']/i, html);
    const langAttr = extract(/<html[^>]*\slang=["']([^"']+)["']/i, html);
    const ogTitle = extract(/<meta\s+[^>]*property=["']og:title["'][^>]*content=["']([^"']*)["']/i, html);
    const ogDesc = extract(/<meta\s+[^>]*property=["']og:description["'][^>]*content=["']([^"']*)["']/i, html);
    const ogImage = extract(/<meta\s+[^>]*property=["']og:image["'][^>]*content=["']([^"']*)["']/i, html);
    const twitterCard = extract(/<meta\s+[^>]*name=["']twitter:card["'][^>]*content=["']([^"']*)["']/i, html);
    const favicon = extract(/<link\s+[^>]*rel=["'](?:icon|shortcut icon)["'][^>]*href=["']([^"']+)["']/i, html);

    const h1Count = countMatches(/<h1[\s>]/gi, html);
    const h2Count = countMatches(/<h2[\s>]/gi, html);
    const h3Count = countMatches(/<h3[\s>]/gi, html);
    const imgTags = html.match(/<img\b[^>]*>/gi) || [];
    const imageCount = imgTags.length;
    const imagesWithoutAlt = imgTags.filter((t) => !/\salt\s*=\s*["'][^"']*["']/i.test(t) || /\salt\s*=\s*["']\s*["']/i.test(t)).length;

    const linkTags = html.match(/<a\b[^>]*href=["']([^"']+)["'][^>]*>/gi) || [];
    let internalLinks = 0;
    let externalLinks = 0;
    let host = "";
    try { host = new URL(finalUrl).hostname; } catch { /* noop */ }
    for (const tag of linkTags) {
      const m = tag.match(/href=["']([^"']+)["']/i);
      const href = m?.[1] || "";
      if (!href || href.startsWith("#") || href.startsWith("mailto:") || href.startsWith("tel:")) continue;
      if (href.startsWith("http")) {
        try {
          const u = new URL(href);
          if (u.hostname === host) internalLinks++;
          else externalLinks++;
        } catch { /* noop */ }
      } else {
        internalLinks++;
      }
    }

    const textContent = html
      .replace(/<script[\s\S]*?<\/script>/gi, " ")
      .replace(/<style[\s\S]*?<\/style>/gi, " ")
      .replace(/<[^>]+>/g, " ")
      .replace(/\s+/g, " ")
      .trim();
    const wordCount = textContent ? textContent.split(/\s+/).length : 0;

    const hasStructuredData = /<script[^>]*type=["']application\/ld\+json["']/i.test(html);
    const hasOpenGraph = Boolean(ogTitle || ogDesc || ogImage);
    const hasTwitterCard = Boolean(twitterCard);
    const isHttps = finalUrl.startsWith("https://");

    const checks: SeoCheck[] = [];
    const add = (c: SeoCheck) => checks.push(c);

    // Meta
    add({
      id: "title", category: "Meta", label: "Title tag", weight: 10,
      value: title || "(missing)",
      status: !title ? "fail" : title.length < 30 ? "warn" : title.length > 65 ? "warn" : "pass",
      detail: !title
        ? "No <title> tag found. Every page needs a unique, descriptive title."
        : title.length < 30
          ? `Title is ${title.length} chars. Aim for 50–60 characters.`
          : title.length > 65
            ? `Title is ${title.length} chars — may truncate in search results. Keep under 60.`
            : `Title length is ${title.length} characters — well within the ideal range.`,
    });
    add({
      id: "description", category: "Meta", label: "Meta description", weight: 10,
      value: description || "(missing)",
      status: !description ? "fail" : description.length < 70 ? "warn" : description.length > 165 ? "warn" : "pass",
      detail: !description
        ? "No meta description. Add one to improve click-through rates from search."
        : description.length < 70
          ? `Description is only ${description.length} chars. Aim for 140–160.`
          : description.length > 165
            ? `Description is ${description.length} chars — may truncate in SERPs.`
            : `Description length (${description.length}) is optimal.`,
    });
    add({
      id: "canonical", category: "Meta", label: "Canonical URL", weight: 5,
      value: canonical || "(missing)",
      status: canonical ? "pass" : "warn",
      detail: canonical
        ? "Canonical tag present — helps prevent duplicate content issues."
        : "No canonical tag found. Add one to consolidate ranking signals.",
    });
    add({
      id: "viewport", category: "Meta", label: "Viewport meta", weight: 5,
      value: viewport || "(missing)",
      status: viewport ? "pass" : "fail",
      detail: viewport
        ? "Responsive viewport configured — mobile-friendly."
        : "Missing viewport meta tag. Required for mobile rendering and Google's mobile-first index.",
    });
    add({
      id: "robots", category: "Meta", label: "Robots directive", weight: 3,
      value: robots || "(default: index, follow)",
      status: robots && /noindex/i.test(robots) ? "fail" : "pass",
      detail: robots && /noindex/i.test(robots)
        ? "Page is set to noindex — it will not appear in search results."
        : "Page is crawlable and indexable.",
    });

    // Content
    add({
      id: "h1", category: "Content", label: "H1 heading", weight: 8,
      value: `${h1Count} H1${h1Count === 1 ? "" : "s"}`,
      status: h1Count === 1 ? "pass" : h1Count === 0 ? "fail" : "warn",
      detail: h1Count === 0
        ? "No H1 heading found. Each page should have exactly one H1."
        : h1Count > 1
          ? `Found ${h1Count} H1 tags. Use only one H1 per page.`
          : "Single H1 detected — perfect.",
    });
    add({
      id: "headings", category: "Content", label: "Heading hierarchy", weight: 4,
      value: `H1:${h1Count} · H2:${h2Count} · H3:${h3Count}`,
      status: h2Count >= 2 ? "pass" : h2Count >= 1 ? "warn" : "fail",
      detail: h2Count >= 2
        ? "Healthy subheading structure for scannability."
        : "Add more H2/H3 subheadings to improve structure and topical depth.",
    });
    add({
      id: "wordcount", category: "Content", label: "Content length", weight: 6,
      value: `${wordCount} words`,
      status: wordCount >= 600 ? "pass" : wordCount >= 300 ? "warn" : "fail",
      detail: wordCount < 300
        ? "Thin content. Aim for 600+ words on cornerstone pages."
        : wordCount < 600
          ? "Content is acceptable but could be expanded for stronger topical authority."
          : "Solid content depth.",
    });
    add({
      id: "links", category: "Content", label: "Internal vs external links", weight: 3,
      value: `${internalLinks} internal · ${externalLinks} external`,
      status: internalLinks >= 3 ? "pass" : "warn",
      detail: internalLinks < 3
        ? "Add more internal links to spread authority and help crawlers."
        : "Good internal linking distribution.",
    });

    // Accessibility
    add({
      id: "img-alt", category: "Accessibility", label: "Image alt text", weight: 6,
      value: `${imagesWithoutAlt}/${imageCount} missing alt`,
      status: imageCount === 0 ? "warn" : imagesWithoutAlt === 0 ? "pass" : imagesWithoutAlt / imageCount > 0.3 ? "fail" : "warn",
      detail: imageCount === 0
        ? "No images detected on this page."
        : imagesWithoutAlt === 0
          ? "All images have descriptive alt attributes."
          : `${imagesWithoutAlt} image(s) missing alt text — required for accessibility and image SEO.`,
    });
    add({
      id: "lang", category: "Accessibility", label: "HTML lang attribute", weight: 3,
      value: langAttr || "(missing)",
      status: langAttr ? "pass" : "warn",
      detail: langAttr
        ? `Language declared as "${langAttr}".`
        : "Missing <html lang> attribute. Add it for accessibility and i18n.",
    });

    // Social
    add({
      id: "og", category: "Social", label: "Open Graph tags", weight: 5,
      value: hasOpenGraph ? "Present" : "Missing",
      status: ogTitle && ogDesc && ogImage ? "pass" : hasOpenGraph ? "warn" : "fail",
      detail: ogTitle && ogDesc && ogImage
        ? "Full Open Graph metadata — link previews will look great."
        : hasOpenGraph
          ? "Partial Open Graph tags. Add og:title, og:description, and og:image."
          : "No Open Graph tags. Social shares will fall back to generic previews.",
    });
    add({
      id: "twitter", category: "Social", label: "Twitter card", weight: 3,
      value: twitterCard || "(missing)",
      status: hasTwitterCard ? "pass" : "warn",
      detail: hasTwitterCard
        ? `Twitter card type: ${twitterCard}.`
        : "Add a twitter:card meta tag for rich Twitter/X previews.",
    });

    // Technical
    add({
      id: "https", category: "Technical", label: "HTTPS", weight: 8,
      value: isHttps ? "Enabled" : "Not enabled",
      status: isHttps ? "pass" : "fail",
      detail: isHttps
        ? "Page is served over HTTPS."
        : "Page is not on HTTPS. Switch to TLS — required for SEO and trust.",
    });
    add({
      id: "status", category: "Technical", label: "HTTP status", weight: 8,
      value: String(statusCode),
      status: statusCode >= 200 && statusCode < 300 ? "pass" : statusCode >= 300 && statusCode < 400 ? "warn" : "fail",
      detail: statusCode >= 200 && statusCode < 300
        ? "Page responds with a healthy 2xx status."
        : statusCode >= 300 && statusCode < 400
          ? "Page redirects. Ensure canonical URL is the final destination."
          : "Page returns an error status. Search engines may de-index it.",
    });
    add({
      id: "structured", category: "Technical", label: "Structured data (JSON-LD)", weight: 5,
      value: hasStructuredData ? "Detected" : "Missing",
      status: hasStructuredData ? "pass" : "warn",
      detail: hasStructuredData
        ? "JSON-LD schema present — eligible for rich results."
        : "No JSON-LD schema. Add Organization, WebSite, or BreadcrumbList markup.",
    });
    add({
      id: "favicon", category: "Technical", label: "Favicon", weight: 2,
      value: favicon || "(missing)",
      status: favicon ? "pass" : "warn",
      detail: favicon ? "Favicon linked." : "Add a favicon for brand recognition in tabs and bookmarks.",
    });

    // Performance
    add({
      id: "load", category: "Performance", label: "Server response time", weight: 6,
      value: `${loadTimeMs} ms`,
      status: loadTimeMs < 800 ? "pass" : loadTimeMs < 2000 ? "warn" : "fail",
      detail: loadTimeMs < 800
        ? "Fast server response."
        : loadTimeMs < 2000
          ? "Response time is acceptable but could be improved with caching/CDN."
          : "Slow server response. Investigate hosting, caching, and TTFB.",
    });
    add({
      id: "size", category: "Performance", label: "HTML payload", weight: 4,
      value: `${sizeKb} KB`,
      status: sizeKb < 150 ? "pass" : sizeKb < 400 ? "warn" : "fail",
      detail: sizeKb < 150
        ? "Lean HTML payload."
        : sizeKb < 400
          ? "HTML is larger than ideal. Consider trimming inline scripts/styles."
          : "Very large HTML payload. Split, lazy-load, or move logic to JS bundles.",
    });

    // Score
    let earned = 0;
    let total = 0;
    for (const c of checks) {
      total += c.weight;
      earned += c.weight * (c.status === "pass" ? 1 : c.status === "warn" ? 0.55 : 0);
    }
    const score = Math.round((earned / Math.max(total, 1)) * 100);

    const summary = {
      pass: checks.filter((c) => c.status === "pass").length,
      warn: checks.filter((c) => c.status === "warn").length,
      fail: checks.filter((c) => c.status === "fail").length,
    };

    return {
      url: target,
      finalUrl,
      statusCode,
      loadTimeMs,
      sizeKb,
      score,
      grade: gradeFromScore(score),
      fetchedAt: new Date().toISOString(),
      summary,
      checks,
      preview: {
        title,
        description,
        ogImage: ogImage || null,
        favicon: favicon ? new URL(favicon, finalUrl).toString() : null,
      },
      meta: {
        h1Count, h2Count, h3Count,
        imageCount, imagesWithoutAlt,
        internalLinks, externalLinks,
        wordCount,
        hasViewport: Boolean(viewport),
        hasCanonical: Boolean(canonical),
        hasRobots: Boolean(robots),
        hasStructuredData,
        hasOpenGraph,
        hasTwitterCard,
        isHttps,
        hasLang: Boolean(langAttr),
        hasFavicon: Boolean(favicon),
      },
    };
  });
