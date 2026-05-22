import type { APIRoute } from "astro";
import pairsData from "../data/pairs.json";
import increaseData from "../data/increase-pairs.json";
import markupData from "../data/markup-pairs.json";
import taxData from "../data/tax-pairs.json";

const BASE = "https://www.percentivo.com";

function u(path: string, priority: string, freq: string) {
  return `  <url><loc>${BASE}${path}</loc><changefreq>${freq}</changefreq><priority>${priority}</priority></url>`;
}

const blogMods = import.meta.glob("../content/blog/*.mdx");
const blogSlugs = Object.keys(blogMods).map((p) =>
  p.split("/").pop()!.replace(".mdx", ""),
);

export const GET: APIRoute = () => {
  const rows = [
    u("/", "1.0", "weekly"),
    u("/percentage-of-number", "0.9", "monthly"),
    u("/percentage-increase", "0.9", "monthly"),
    u("/percentage-decrease", "0.9", "monthly"),
    u("/discount-calculator", "0.9", "monthly"),
    u("/markup-calculator", "0.9", "monthly"),
    u("/tax-calculator", "0.9", "monthly"),
    u("/blog", "0.8", "weekly"),
    ...blogSlugs.map((s) => u(`/blog/${s}`, "0.7", "monthly")),
    ...(pairsData as any[]).map(({ pct, num }) =>
      u(`/what-is/${pct}-percent-of-${num}`, "0.5", "yearly"),
    ),
    ...(increaseData as any[]).map(({ from, to }) =>
      u(`/increase/${from}-to-${to}`, "0.5", "yearly"),
    ),
    ...(markupData as any[]).map(({ markup, cost }) =>
      u(`/markup/${markup}-markup-on-${cost}`, "0.5", "yearly"),
    ),
    ...(taxData as any[]).map(({ rate, amount }) =>
      u(`/tax/${rate}-on-${amount}`, "0.5", "yearly"),
    ),
  ];
  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${rows.join("\n")}\n</urlset>`,
    { headers: { "Content-Type": "application/xml" } },
  );
};
