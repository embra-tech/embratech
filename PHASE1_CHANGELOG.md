# Phase 1: Critical Bug Fixes (2026-10-13)

Status: **edited locally, NOT deployed.** Run `npm run build` before committing (these edits were not build-tested).

Owner decisions on record:
- Blog author = **Md Bilaal Rahman Ali** (approved).
- "Verify our score" claims and `middleware.js` / `app/api/bot-proxy` PageSpeed proxy: **kept as is, by owner decision. Not touched.**
- All visible changes below were approved by the owner before being made.

---

## A. Invisible changes (search engines and social previews only; visitors see nothing different)

| # | What was wrong | Fix | Files |
|---|---|---|---|
| A1 | Case studies sent Google a literal `/portfolio/${params.slug}` canonical, a description containing `${cs.name}` code, and broken Article/Breadcrumb schema (escaped `\${...}` placeholders) | Real template literals. The meta description now quotes only **verified** results (PageSpeed). Added a share image | `app/portfolio/[slug]/page.jsx` |
| A2 | Every inner page title ended in "\| Embra \| Embra" (page title + layout template) | Removed "\| Embra" from page-level `title`; the layout template adds it once. Open Graph titles unchanged | all files in the table at the end except `lib/*` and `layout.jsx` |
| A3 | About, contact, pricing, portfolio, services, blog index and case studies had **no share image** (their `openGraph` overrode the layout's) | Added `images` to each | same pages |
| A4 | Share image declared as 1200×630; the real file `app/opengraph-image.jpg` is 1024×1024 | New `ogImageWidth` / `ogImageHeight` in `lib/site-config.js`, used everywhere. If you swap in a true 1200×630 image, change those 2 numbers only | `lib/site-config.js`, `app/layout.jsx`, all page metadata |
| A5 | 7 industry pages output 2 conflicting BreadcrumbList schemas (Home > Services > page vs. Home > page) | Removed the page-level one; `<Breadcrumb>` already outputs the one matching what visitors see | `app/niches/*/page.jsx` (7) |
| A6 | Location pages: doubled title | Title fixed; OG title keeps the brand | `app/locations/[city]/page.jsx` |
| A7 | Cost blog post `dateModified` | Set to 2026-10-13 because its content changed (feeds sitemap and schema) | `lib/blogData.js` |

## B. Visible changes (approved by owner)

| # | What visitors saw | What they see now | Files |
|---|---|---|---|
| B1 | Raw `**asterisks**` around 35 phrases on the 7 industry pages | The same words in **bold**, no stars. Nothing else changed: no layout, colour or animation change | `app/niches/*/page.jsx` (7) |
| B2 | Case-study "The Challenge" text in one block (`split('\\n\\n')` typo) | Split into its 2 written paragraphs | `app/portfolio/[slug]/page.jsx` |
| B3 | Cost blog post repeated 3 full sections | Second copy removed; nothing else changed | `lib/blogData.js` |
| B4 | Byline "By Julian Vance" (schema said a different person) | "By Md Bilaal Rahman Ali" on all 7 posts; now matches the schema | `lib/blogData.js` |

## C. Audit corrections (no change needed)

- "Empty breadcrumb item": false alarm. It was the `›` separator, which is correctly hidden from screen readers.
- "Buttons read twice": every `.btn-flip` checked so far already has `aria-hidden` on the second label. `Navbar.jsx`, `Cta.jsx` and `Hero.jsx` are not yet checked.
- Homepage title was never doubled (Next.js doesn't apply the template to the root page).

## D. Found, NOT changed: needs owner permission (visible)

1. ~~14 more repeated sections in 5 blog posts~~: **resolved in section E** (articles rewritten, owner approved).
2. ~~"ticket FE-06" internal note in the ROI post~~: **resolved in section E** (sentence removed).
3. `generate_niches.js` is **stale**. Running it would overwrite all 7 industry pages with old content and undo these fixes. **Do not run it.**
4. Privacy/terms pages output the same breadcrumb schema twice (identical copies, harmless). Left for Phase 4.

---

## E. Blog content upgrade (owner requested, 2026-10-13)

All 7 articles were rewritten for search ranking and trust. **Visible change: article text, titles and summaries.** URLs, publish dates, page design and animations are unchanged.

**What changed in every article**
- The answer comes in the first paragraph, followed by a "Key takeaways" list (helps featured snippets and AI Overviews).
- All repeated sections are removed (14 across 5 posts, plus the 3 fixed earlier).
- Plain language for trade owners; hype words removed.
- Facts checked and linked to primary sources: Google Business Profile Help, Google Search Central, web.dev, Think with Google, IRS.
- Embra prices now match `/pricing` (Starter $700 = 3 pages; Growth $1,000; Pro $1,500; Care Plan $150/mo). The old posts said the $700 plan had 5 pages.
- Invented "real-world" stories replaced with clearly labeled examples.
- Each article now ends with a Frequently Asked Questions section and internal links to the matching industry page, case study and pricing.
- `dateModified` set to 2026-10-13 (sitemap and schema reflect the update).

**Errors fixed**
| Post | Was | Now |
|---|---|---|
| HVAC | Claimed homeowners can get up to $2,000 federal heat pump credit | 25C ended for installs after 2025-12-31; points to IRS and DSIRE |
| Speed | Said WordPress uses "client-side rendering" (false); said speed gives an "explicit ranking advantage" (overstated) | Accurate description of Google's page experience docs; fair to WordPress |
| Speed | "16% satisfaction" stat wrongly credited to Google/SOASTA | Removed; only verified Google/SOASTA figures kept |
| Cost | Recommended Google Domains (sold to Squarespace in 2023) | Removed |
| ROI | "Logged under ticket FE-06 in our architectural roadmap" | Removed |
| Auto body | "Under state laws nationwide" | "Many states have laws"; tells shops to check their state's rules |

**Title changes (H1 and Google title)**
- local-seo-guide: "Local SEO for Home Service Businesses: A Step-by-Step Guide"
- website-roi-calculator: "Website ROI Calculator for Contractors: What Is Your Website Worth?"
- why-pagespeed-matters: "Does Website Speed Affect Local SEO? What Contractors Need to Know" (old title claimed speed is the "#1" factor, which isn't true)
- auto-body-shop-marketing: "Auto Body Shop Marketing: How Independent Shops Win More Repair Jobs"
- hvac-local-seo: "HVAC Local SEO: How Heating and Cooling Contractors Rank Higher"
- website-cost and tree-service: wording kept or lightly edited.

**New file structure**
- `lib/blog/<slug>.js`: one file per article body (plain HTML string). Edit articles here.
- `lib/blogData.js`: now only titles, summaries and dates, importing the bodies. The old 86 KB file is in git history.

**Add these to the deploy command:**
```
git add lib/blog lib/blogData.js
```

---

## F. Owner decisions applied (2026-10-13, round 3)

All visible text changes below were approved by the owner. No design, layout or animation changes.

| # | Owner decision | Change | Files |
|---|---|---|---|
| F1 | Founded in 2026 | `foundingYear: 2026` (feeds schema) | `lib/site-config.js` |
| F2 | Starter = 3 pages | All 7 industry pages: Starter now reads "custom homepage plus 2 inner pages", pointing to Growth ($1,000, up to 7 pages, schema, GBP setup) for more. Matches `/pricing`. | `app/niches/*/page.jsx` (7) |
| F3 | Free sample, walk away; no refund once paid in full and live | About stats: "7-day satisfaction window" replaced with free-sample walk-away + 100% ownership. Pricing badge "7-day satisfaction guarantee" replaced. Pricing FAQ refund answer and "more than a homepage" answer rewritten. Terms > Refunds aligned; Terms "Last updated" set to October 13, 2026. | `app/about/AboutClient.jsx`, `app/pricing/PricingClient.jsx`, `components/Faq.jsx`, `app/terms/page.jsx` |
| F4 | Apex Plumbing = concept | Plumber page showcase: browser-bar text, image alt and caption now say it's a concept design with a sample brand, not a client. | `app/niches/plumber-website-design/page.jsx` |

**Deploy this round:**
```
git add lib/site-config.js app/niches app/about/AboutClient.jsx app/pricing/PricingClient.jsx components/Faq.jsx app/terms/page.jsx PHASE1_CHANGELOG.md
```

**Not done, pending owner reply:**
- Location and company wording (About "Team" section, footer address, LocalBusiness schema address, Brooklyn location page). Claude will not present the company as US-based; an honest alternative has been proposed to the owner.
- PND Laundry case study: needs owner confirmation that Embra did the work (and when), plus client permission.
- Unverified +280% / +190% / +215% claims on case studies: still live; remove or substantiate.
- Terms name "Embra Technologies" and New York governing law; the legal entity is Embra Technologies Private Limited. Have a lawyer review.

---

## G. Location wording (option B) and Pick N Drop Laundry case study (2026-10-13, round 4)

Owner chose option B: present Embra honestly as a remote team serving US businesses, without naming a country. Owner confirmed client permission for the PND case study. Only text and data changed: no layout, design or animation changes. The existing +280% / +190% / +215% claims were left as they are, by owner decision.

**Location wording (option B)**
| Where | Was | Now |
|---|---|---|
| About > The Team | "based in Brooklyn, NY ... no work shipped overseas" | "a small, remote team ... serving home service businesses across the United States, with support on US business hours" |
| Footer (every page) | 1969 51st St, Brooklyn, NY 11204 | "Remote team serving home service businesses across the United States" |
| Contact page card | "Address: 1969 51st St, Brooklyn" + map link | "Where we work: Remote, serving businesses across the US" |
| Brooklyn location page | "Embra Technologies is based in Brooklyn ... Brooklyn-based studio"; FAQ "We are based in Brooklyn" | Serves Brooklyn businesses as a remote team; FAQ rewritten |
| Location page titles | "Web Design & SEO Agency in [city]" | "Website Design & SEO for [city] Businesses" |
| Google data (root, About, 7 industry pages) | PostalAddress in Brooklyn | No address; `areaServed: United States`; `foundingDate: 2026`; industry pages reference the site-wide business entry |

`lib/site-config.js` still holds the old `address` object but nothing displays it any more. Replace it with a real, staffed US address once the US entity is registered.

**Pick N Drop Laundry case study** (`/portfolio/pnd-laundry`)
- Source: client's Google Search Console (https://pndlaundry.com/), pulled 2026-10-13.
- Mar 15–Apr 13, 2026 vs Sep 11–Oct 10, 2026: clicks 9 → 21 (+133%), impressions 471 → 1,399 (+197%). Page 1 average position for "dry cleaners van nuys" and "drop off laundry service near me".
- Work described (from owner): 30 neighborhood pages, schema fixes, breadcrumbs, Google Business Profile, technical fixes.
- `timeline: 'Ongoing'` is a placeholder. **Owner: confirm or give the real duration.**
- Added as the first portfolio card; screenshot `public/images/pndlaundry.png` is added to `scripts/generate-images.mjs` (resized copies are created at build time).
- Results without a public link show as plain labels; a new optional `source` field keeps them in the page's search description.
- Sitemap: case study added; "last changed" dates set to 2026-10-13 for every page edited today.

**Deploy this round:**
```
git add app/about app/contact/ContactClient.jsx components/Footer.jsx app/layout.jsx app/niches "app/locations/[city]" "app/portfolio/[slug]/page.jsx" app/portfolio/PortfolioClient.jsx app/sitemap.js scripts/generate-images.mjs public/images/pndlaundry.png PHASE1_CHANGELOG.md
```
If round 3 (pricing and refund wording) isn't deployed yet, also stage: `lib/site-config.js app/pricing/PricingClient.jsx components/Faq.jsx app/terms/page.jsx`.

**After deploy:** request indexing for `/portfolio/pnd-laundry`, `/portfolio`, `/about`, `/contact`, and `/locations/brooklyn`.

---

## H. Phase 1 leftovers (2026-10-13, round 5). Phase 1 complete.

All invisible to visitors.

| # | Item | Result | Files |
|---|---|---|---|
| H1 | Old .html addresses returned 404 (Search Console: /pricing.html "Crawled, not indexed") | 301 redirects for /index, /pricing, /about, /contact, /services, /portfolio, /blog, /care-plan, /privacy, /terms (.html) to the new pages | `next.config.mjs` |
| H2 | Duplicate button labels read twice by screen readers | **No change needed.** A scan of all 125 buttons on all 37 live pages found every duplicate label already hidden (`aria-hidden`). | none |
| H3 | Out-of-date generator scripts | Both now exit immediately with a warning. `generate_pages.js` also contains `makeFluff()`, which pads pages with stock filler sentences; a scan of all 37 live pages found none of that filler live. Neither script is part of `npm run build`. | `generate_niches.js`, `generate_pages.js` |

**Audit correction:** the audit said `next.config.mjs` had no security headers or AVIF/WebP setup. That was based on the old `kimi2 - working` copy; the live project already has both.

**One deploy for everything not yet live (rounds 3, 4 and 5):**
```
git add lib/site-config.js app/pricing/PricingClient.jsx components/Faq.jsx app/terms/page.jsx app/about app/contact/ContactClient.jsx components/Footer.jsx app/layout.jsx app/niches "app/locations/[city]" "app/portfolio/[slug]/page.jsx" app/portfolio/PortfolioClient.jsx app/sitemap.js scripts/generate-images.mjs public/images/pndlaundry.png next.config.mjs generate_niches.js generate_pages.js PHASE1_CHANGELOG.md
```

**Check after deploy:** https://www.embratechnologies.org/pricing.html should land on /pricing.

---

## I. Phase 4 start: schema cleanup (2026-10-13, round 6)

Rounds 3–5 verified live on 2026-10-13: Brooklyn address gone from all 38 pages, PND case study live (page, card, image, sitemap), /pricing.html redirects to /pricing, pricing/refund/About/Contact/plumber wording correct.

Invisible changes this round:
| Page | Was | Now |
|---|---|---|
| /services/web-design, /services/local-seo, /services/website-integrations | Two conflicting breadcrumb schemas (Home > Services > X vs Home > X); `areaServed` = "Brooklyn" (from the old address) | Page-level copy removed (visible breadcrumb's copy stays); `areaServed` = United States |

Left as is: 7 pages (services, niches, pricing, contact, about, privacy, terms) output two **identical** breadcrumb schemas. Harmless; Google ignores the repeat.

Finding: 13 pages are "Discovered, not indexed", but several of them (Tuxford, Alaska Fast Fix, landscaping, care plan) are already linked from the homepage. Internal links help, but crawling of a young site mainly speeds up with links from other websites (Phase 6).

**Deploy this round:** `git add app/services/web-design/page.jsx app/services/local-seo/page.jsx app/services/website-integrations/page.jsx PHASE1_CHANGELOG.md`

---

## J. Menu and footer links (2026-10-13, round 7, owner approved)

Visible, approved by owner. No new design: existing menu style and the existing footer "Service Areas" row style are reused.

| Where | Was | Now |
|---|---|---|
| Main menu (every page, desktop and mobile) | Showcase (/#showcase), Services, Portfolio, Pricing, About, Blog, Reviews (/#testimonials), Contact | **Industries (/niches)**, Services, Portfolio, Pricing, About, Blog, Contact |
| Footer (every page) | Columns + "Service Areas" row | Two new rows above Service Areas: **Case Studies** (all 6) and **Guides** (4 articles) |

Why: 7 key pages weren't linked from the homepage (3 case studies, the Industries hub, 3 blog posts). The footer is on all 38 pages, so each now gets sitewide internal links.

**Deploy rounds 6 + 7 together:**
```
git add components/Navbar.jsx components/Footer.jsx app/services/web-design/page.jsx app/services/local-seo/page.jsx app/services/website-integrations/page.jsx PHASE1_CHANGELOG.md
```

---

## Files changed (26)

```
lib/site-config.js
lib/blogData.js
app/layout.jsx
app/about/page.jsx
app/contact/page.jsx
app/pricing/page.jsx
app/portfolio/page.jsx
app/portfolio/[slug]/page.jsx
app/services/page.jsx
app/services/web-design/page.jsx
app/services/local-seo/page.jsx
app/services/website-integrations/page.jsx
app/services/care-plan/page.jsx
app/blog/page.jsx
app/blog/[slug]/page.jsx
app/niches/page.jsx
app/niches/web-design-for-handyman-businesses/page.jsx
app/niches/tree-service-website-design/page.jsx
app/niches/auto-body-shop-website-design/page.jsx
app/niches/landscaping-website-design/page.jsx
app/niches/plumber-website-design/page.jsx
app/niches/hvac-website-design/page.jsx
app/niches/roofing-website-design/page.jsx
app/privacy/page.jsx
app/terms/page.jsx
app/locations/[city]/page.jsx
```

## How to deploy

> ⚠️ `app/blog/[slug]/page.jsx` (and possibly `lib/blogData.js`) already contained your **earlier uncommitted edits** (see INDEXING_FIX_CHANGELOG.md). Staging these files ships those edits too. Review them first.

```
npm run build
git status
git diff app/blog/[slug]/page.jsx lib/blogData.js
git add lib/site-config.js lib/blogData.js app/layout.jsx app/about/page.jsx app/contact/page.jsx app/pricing/page.jsx app/portfolio/page.jsx "app/portfolio/[slug]/page.jsx" app/services app/blog/page.jsx "app/blog/[slug]/page.jsx" app/niches app/privacy/page.jsx app/terms/page.jsx "app/locations/[city]/page.jsx" PHASE1_CHANGELOG.md
git diff --cached --stat
git commit -m "fix(seo): phase 1 - case-study canonicals, doubled titles, OG images, breadcrumb schema, niche bold text, blog duplicates and author"
git push
```

Note: `git add app/services` also stages `ServicesClient.jsx` if it has uncommitted edits. Check `git diff --cached --stat` and unstage anything unexpected with `git restore --staged <file>`.

## How to revert

- Everything: `git revert <this commit>`, then `git push`.
- One file: `git checkout HEAD~1 -- <path>`. For files that had earlier uncommitted edits, this also drops those edits.
- No `_backup/` copies were made this time; git is the backup.

## After deploy: Search Console

1. URL Inspection, then **Test live URL** on `https://www.embratechnologies.org/portfolio/tuxford-collision`. The "User-declared canonical" must be that same URL.
2. Request indexing for all 5 case studies, then the 7 industry pages.
3. Resubmit `sitemap.xml`.
4. Pages report: watch "Alternate page with proper canonical tag" and "Duplicate, Google chose different canonical" shrink over 1 to 3 weeks.
5. Spot-check titles with a site: search after recrawl (no more "| Embra | Embra").
