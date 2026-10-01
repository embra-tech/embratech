# SEO Changelog

All SEO-significant changes made to this site, in reverse chronological order.

---

## 2026-10-01 — Commit `c1457f9` — Niches Hub, Footer Links, Cta Visibility

### New Pages
- `app/niches/page.jsx` — `/niches` hub index listing all 7 niche pages with cards, icons, descriptions, and an industry methodology section

### Internal Linking
- `components/Footer.jsx` — "Services" column now links to specific sub-pages (`/services/web-design`, `/services/local-seo`, `/services/website-integrations`, `/services/care-plan`) instead of all pointing to `/services`
- `components/Footer.jsx` — Added new "Industries" column linking to all 7 niche pages. This creates sitewide internal link equity on every page.
- `app/services/ServicesClient.jsx` — Added "Industries We Serve" section with tag links to all 7 niche pages and a link to `/niches` hub
- `app/sitemap.js` — Added `/niches` to sitemap at priority 0.85
- `public/llms.txt` — Added `/niches` to Key Pages section

### Bug Fixes
- `components/Cta.jsx` — Removed `reveal-up` class from `cta-box` div. This class requires GSAP client-side animation; on server-component pages (niches, services sub-pages) the section was rendered permanently invisible at opacity 0.

---

## 2026-10-01 — Commit `efc2952` — Niche Page Photos & CTAs

### Enhancements
- All 7 niche pages: added browser-frame photo showcase cards (AI-generated mockup images, Sharp-optimized AVIF/WebP/JPEG at 480/720/960w)
- All 7 niche pages: added mid-page CTA box with trade-tailored headline, "Claim Free Homepage Sample" button, and phone call button
- `scripts/generate-images.mjs` updated to process `plumbing-mockup.jpg`, `hvac-mockup.jpg`, `roofing-mockup.jpg`
- Generated responsive image sets: `public/images/optimized/[name]-{480,720,960}.{avif,webp,jpg}`

---

## 2026-10-01 — Commit `0f3f696` — reveal-up Visibility Fix (Server Components)

### Bug Fixes
- All 7 niche pages (`app/niches/*/page.jsx`): removed `reveal-up` class from content container divs
- 3 new service sub-pages (`app/services/web-design/`, `local-seo/`, `website-integrations/`): removed `reveal-up` from section-head divs
- `app/locations/[city]/page.jsx`: added `export const dynamicParams = false` to prevent unknown slugs returning HTTP 200

**Root cause:** `.reveal-up` in `globals.css` starts at `opacity: 0`. The GSAP `useReveal()` hook that animates it visible only runs in `'use client'` components. New pages are static server components — no hook, no animation trigger, content stays invisible forever.

---

## 2026-10-01 — Commit `82c7fbe` — Location→Niche Redirects

### Routing
- `next.config.mjs`: 7 new 301 redirects from `/locations/<niche-slug>` → `/niches/<niche-slug>` (e.g. `/locations/tree-service-website-design` → `/niches/tree-service-website-design`)

---

## 2026-10-01 — Commit `8ae406e` — Phase 2: Content Depth

### Case Studies (all 5 expanded to 600–900 words)
- `tuxford-collision` — 752 words. Added `deepDive`, `stack`, expanded `challenge` and `approach` bodies
- `vvasquez-handyman` — 729 words
- `alaska-fast-fix` — 678 words
- `bestbreaks` — 673 words
- `sky-high-tree` — 662 words

### Blog (3 expanded + 4 new, all 1,200–1,800 words)
- `local-seo-guide-for-service-businesses` — expanded to 1,606 words
- `website-roi-calculator` — expanded to 1,700 words (includes text worksheet)
- `why-pagespeed-matters` — expanded to 1,576 words
- **NEW:** `website-cost-for-home-service-businesses` — 1,670 words
- **NEW:** `what-tree-service-website-needs` — 1,370 words
- **NEW:** `auto-body-shop-marketing` — 1,495 words
- **NEW:** `hvac-local-seo` — 1,593 words
- All posts: `dateModified: '2026-10-01'` field added; `blog/[slug]/page.jsx` uses `dateModified || date` in schema

### Other
- `app/contact/ContactClient.jsx` — visible address row added to contact page
- `app/sitemap.js` — `dateModified` field added to blog pages
- `public/llms.txt` — 4 new blog slugs added

---

## 2026-10-01 — Commit `e5fad1e` — Phase 1: New Routes & Accuracy Fixes

### New Routes
- `app/locations/brooklyn/page.jsx` — 719 words, real NAP, links all 4 case studies
- `app/niches/*/page.jsx` (7 pages) — 1,031–1,269 words each; metadata, JSON-LD BreadcrumbList + Service schema
- `app/services/web-design/page.jsx` — 1,242 words
- `app/services/local-seo/page.jsx` — 1,082 words
- `app/services/website-integrations/page.jsx` — 1,002 words

### Redirects
- `next.config.mjs` — 7 redirects from flat niche slugs (e.g. `/tree-service-website-design`) → `/niches/<slug>`

### Sitemap & LLMs
- `app/sitemap.js` — all new routes added with correct priority/changeFrequency
- `public/llms.txt` — all new routes added

### Accuracy Fixes
- `components/Faq.jsx` — Gulf Coast claim reworded to remove unverified specifics
- `app/portfolio/[slug]/page.jsx` — V Vasquez: location set to Merced, CA; industry set to Lawn Care, Concrete & Irrigation
- `app/portfolio/PortfolioClient.jsx` — same V Vasquez fixes on the listing card
- `components/Testimonials.jsx` — V Vasquez role changed to "Merced, CA"

### Documentation
- `docs/frontend-approval-needed.md` — created
- `docs/owner-review.md` — created

---

## Open Items (Pending Owner Action)

| ID | Item | Status |
|----|------|--------|
| OWN-01 | Confirm Tuxford "service-area pages" claim | Awaiting |
| OWN-02 | Author bio for blog posts | Awaiting |
| OWN-03 | BestBreaks PageSpeed proof screenshots | Awaiting |
| OWN-04 | Google Business Profile verified | Awaiting |
| OWN-05 | Search Console: resubmit sitemap + request indexing for all new pages | **Urgent after next deploy** |
| OWN-06 | Footer credit links from client sites | Awaiting |
| OWN-07 | Clutch.co / DesignRush / GoodFirms listings | Awaiting |
| OWN-08 | Confirm V Vasquez Merced, CA and service type | Awaiting |

### Search Console Priority List (OWN-05)
After deploying, request indexing in order:
1. `https://www.embratechnologies.org/niches` (new hub)
2. `https://www.embratechnologies.org/niches/web-design-for-handyman-businesses`
3. `https://www.embratechnologies.org/niches/tree-service-website-design`
4. `https://www.embratechnologies.org/niches/auto-body-shop-website-design`
5. `https://www.embratechnologies.org/niches/landscaping-website-design`
6. `https://www.embratechnologies.org/niches/plumber-website-design`
7. `https://www.embratechnologies.org/niches/hvac-website-design`
8. `https://www.embratechnologies.org/niches/roofing-website-design`
9. `https://www.embratechnologies.org/services/web-design`
10. `https://www.embratechnologies.org/services/local-seo`
11. `https://www.embratechnologies.org/services/website-integrations`
12. `https://www.embratechnologies.org/locations/brooklyn`
13. `https://www.embratechnologies.org/blog/website-cost-for-home-service-businesses`
14. `https://www.embratechnologies.org/blog/what-tree-service-website-needs`
15. `https://www.embratechnologies.org/blog/auto-body-shop-marketing`
16. `https://www.embratechnologies.org/blog/hvac-local-seo`
