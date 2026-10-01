# Embra Technologies — Next.js marketing site

Production site: https://www.embratechnologies.org (the non-www domain redirects here).

Built with:

- **Next.js 14 (App Router)**: server-rendered pages with per-page metadata, canonicals and JSON-LD, a generated `sitemap.xml`, and fonts loaded through `next/font`
- **Three.js**: the hero WebGL orb (`components/three/HeroScene.js`) plus five small service-card scenes (`components/three/serviceAnimations.js`)
- **GSAP + ScrollTrigger**: the hero intro (the orb plays first, then the headline reveals word by word), scroll reveals, and the showcase bars and counters
- **Lenis**: smooth scrolling, synced to the GSAP ticker
- **Single theme**: Obsidian Blue (design tokens live in `app/globals.css`)

## Run

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # regenerates responsive images, then runs next build
npm start
```

`npm run build` runs `scripts/generate-images.mjs` first. It writes AVIF, WebP and JPEG sizes into `public/images/optimized/`.

## Environment variables

| Variable | Used by | Purpose |
|---|---|---|
| `AXIOM_TOKEN` | `/api/lead`, `/api/track` | Axiom ingest token |
| `AXIOM_DATASET` | `/api/lead`, `/api/track` | Axiom dataset name |

Without these, `/api/lead` falls back to Vercel logs and `/api/track` sends nothing.

## Structure

```
app/
  layout.jsx            fonts, global metadata, Organization/ProfessionalService JSON-LD
  page.jsx              homepage (WebSite JSON-LD + components/HomePage)
  about/ services/ services/care-plan/ pricing/ portfolio/ portfolio/[slug]/
  blog/ blog/[slug]/ contact/ locations/[city]/ privacy/ terms/
  sitemap.js            generates /sitemap.xml
  api/lead/route.js     backup copy of contact-form leads, sent to Axiom
  api/track/route.js    first-party pageview and duration events, sent to Axiom
components/             UI sections (Hero, Showcase, Services, Testimonials, …)
components/three/       WebGL scenes
lib/site-config.js      single source of truth for brand, contact and schema data
lib/blogData.js         blog post content
middleware.js           sets the session cookie only (crawlers are treated the same as visitors)
public/robots.txt       crawl rules + sitemap location
public/llms.txt         guide for AI assistants
```

## Search engine notes

- Never serve crawlers different content or status codes from what visitors get. A user-agent rewrite in `middleware.js` once returned 404 to every search engine, which made the whole site unindexable. See `INDEXING_FIX_CHANGELOG.md`.
- Inside `app/`, folders whose names start with `_` are private and never become routes.
- The canonical host is `https://www.embratechnologies.org`. Keep `siteConfig.siteUrl`, the sitemap and the Search Console property on that host.
