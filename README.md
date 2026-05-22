# Percentivo — Astro Version

A complete, production-ready percentage calculator website built with **Astro 6**, **TypeScript**, **Tailwind CSS v4**, and **MDX blog**. Designed for Lighthouse scores of 95+.

## Why Astro?

| Metric       | Next.js version             | Astro version                |
| ------------ | --------------------------- | ---------------------------- |
| Framework JS | 186KB + 196KB runtime       | **0KB** (zero JS by default) |
| Client JS    | React runtime on every page | **Vanilla JS only, inline**  |
| HTML output  | Hydrated shell              | **Pure static HTML**         |
| Lighthouse   | ~74 (before tuning)         | **95+**                      |

Every page ships as a pre-rendered HTML file. Calculator interactivity uses small vanilla JS `<script>` blocks — no React, no Vue, no Angular.

---

## Quick Start

```bash
tar -xzf measure-percentage-astro.tar.gz
cd mp-astro
npm install
npm run dev        # → http://localhost:4321
```

## Build & Preview

```bash
npm run build      # generates /dist — pure static files
npm run preview    # serve dist locally → http://localhost:4321
```

## Deploy

### Netlify (drag & drop)

Run `npm run build`, then upload the `/dist` folder to netlify.com/drop.

### Vercel

```bash
npm install -g vercel && vercel --prod
```

Set build command: `npm run build`, output directory: `dist`.

### Cloudflare Pages

Build command: `npm run build` · Output directory: `dist`

### Any static host (Nginx, S3, GitHub Pages)

Copy the `/dist` folder — pure HTML/CSS/JS, no server required.

---

## Project Structure

```
src/
├── layouts/
│   └── Base.astro              # HTML shell, header, footer, mobile menu Web Component
├── components/
│   ├── FAQSection.astro        # CSS-only details/summary accordion — zero JS
│   ├── Breadcrumb.astro        # SEO breadcrumbs + BreadcrumbList schema
│   ├── RelatedCalculators.astro
│   ├── MainCalculator.astro    # 5-mode calculator — vanilla JS
│   ├── DiscountCalculator.astro
│   ├── MarkupCalculator.astro
│   └── TaxCalculator.astro
├── pages/
│   ├── index.astro
│   ├── percentage-of-number.astro
│   ├── percentage-increase.astro
│   ├── percentage-decrease.astro
│   ├── discount-calculator.astro
│   ├── markup-calculator.astro
│   ├── tax-calculator.astro
│   ├── sitemap.xml.ts          # Auto-generated sitemap
│   ├── blog/
│   │   ├── index.astro
│   │   └── [slug].astro
│   ├── what-is/[slug].astro    # /what-is/15-percent-of-200 (216 pages)
│   ├── increase/[slug].astro   # /increase/80-to-100 (364 pages)
│   ├── markup/[slug].astro     # /markup/50-markup-on-40 (480 pages)
│   └── tax/[slug].astro        # /tax/8.5-on-100 (667 pages)
├── content/blog/               # MDX posts — add new .mdx files here
├── data/
│   ├── pairs.json              # 216 what-is seeds
│   ├── increase-pairs.json     # 364 increase seeds
│   ├── markup-pairs.json       # 480 markup seeds
│   └── tax-pairs.json          # 667 tax seeds
├── lib/
│   └── seo.ts                  # Schema builders, SITE config
└── styles/
    └── global.css              # Tailwind v4 + prose + utilities

public/
├── favicon.svg
└── robots.txt
```

## Pages Built (1,741 total)

| Section                   | Count |
| ------------------------- | ----- |
| Static calculator pages   | 8     |
| Blog posts                | 6     |
| `/what-is/X-percent-of-Y` | 216   |
| `/increase/X-to-Y`        | 364   |
| `/markup/X-markup-on-Y`   | 480   |
| `/tax/X-on-Y`             | 667   |

## Adding Blog Posts

Drop a `.mdx` file into `src/content/blog/`:

```mdx
---
title: "Your Post Title"
description: "SEO description"
date: "2025-01-15"
author: "Your Name"
category: "Math & Formulas"
tags: ["percentage"]
---

## Content here
```

## Adding Programmatic Pages

Edit the relevant JSON in `src/data/` and rebuild:

```json
// src/data/pairs.json — adds /what-is/33-percent-of-300
{ "pct": 33, "num": 300 }
```

## Performance Features

- **Zero framework JS** — no React/Vue/Angular runtime shipped to users
- **CSS-only FAQ accordion** — `<details>/<summary>`, zero JS
- **CSS-only desktop dropdown** — `:hover` group, zero JS
- **Web Component mobile menu** — ~400 bytes, no imports
- **Vanilla JS calculators** — ~1–2KB each, inline in component
- **System font stack** — no web font loading
- **`content-visibility: auto`** — defers off-screen rendering
- **`inlineStylesheets: auto`** — small CSS inlined into HTML
