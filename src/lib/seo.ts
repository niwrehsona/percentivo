export const SITE = {
  name: "Percentivo",
  url: "https://www.percentivo.com",
  desc: "Free online percentage calculators. Percentage of a number, increase, decrease, discount, markup, tax and more.",
};
export function buildFAQSchema(faqs: { question: string; answer: string }[]) {
  return JSON.stringify({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  });
}
export function buildHowToSchema(
  name: string,
  steps: { name: string; text: string }[],
) {
  return JSON.stringify({
    "@context": "https://schema.org",
    "@type": "HowTo",
    name,
    totalTime: "PT1M",
    step: steps.map((s, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: s.name,
      text: s.text,
    })),
  });
}
export function buildWebAppSchema() {
  return JSON.stringify({
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Percentivo",
    url: SITE.url,
    description: SITE.desc,
    applicationCategory: "UtilitiesApplication",
    operatingSystem: "Any",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  });
}
export function buildBreadcrumbSchema(items: { name: string; href: string }[]) {
  return JSON.stringify({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE.url}${item.href}`,
    })),
  });
}
