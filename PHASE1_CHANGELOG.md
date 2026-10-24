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

## K. Phase 3 start: faster hero intro (2026-10-13, round 8, owner approved)

Rounds 6 + 7 verified live: menu shows Industries; footer Case Studies and Guides rows on every page; all 14 footer links return 200.

Owner asked: keep the orb-first, text-second sequence, just a little faster. Only `components/Hero.jsx` changed.

| Setting | Was | Now |
|---|---|---|
| Delay before orb starts | 0.3s | 0.15s |
| Orb intro length | ~3.4s (scale 3.0, camera 3.4, rings 3.2, glow 2.2 @0.6, particles 2.0 @1.0) | ~2.0s (1.8 / 2.0 / 1.9 / 1.3 @0.35 / 1.2 @0.6). Same movements, easing and end position |
| Headline starts | After the intro finishes (~3.7s) | At 1.5s into the intro, as the orb settles (~1.65s) |
| Time between words | 0.085s | 0.065s |
| Badge / subtitle / buttons after last word | +0.05 / +0.22 / +0.40s | +0.05 / +0.17 / +0.30s |
| 3D scene download | Starts after the page finishes hydrating | Starts as soon as the Hero code loads (invisible) |

Times are measured from when the 3D scene is ready. The CSS fade on each word (globals.css `.word`) is unchanged. Reduced-motion and bot paths are unchanged.

Real-browser check before this change: homepage loads ~1.2 MB of unpacked JavaScript (24 files); largest file 520 KB (the 3D library). The headline is the page's Largest Contentful Paint element, so this change should directly improve real-visitor LCP. Measure with Vercel Speed Insights.

**Deploy:** `git add components/Hero.jsx PHASE1_CHANGELOG.md`

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

---

## L. DesignRush listing link (2026-10-19, owner approved)

Made on branch `designrush-link`, created from `origin/main` (f543429) in a separate worktree (`..\embra-live`). This keeps the unpublished analytics commit (dcb2c7f, saved as `analytics-wip`) out of this release.

| Where | Change |
|---|---|
| Homepage reviews section (`components/Testimonials.jsx`, used only on `/`) | One centered line under the review cards: "Listed on DesignRush", linking to https://www.designrush.com/agency/website-design-development, in the existing review-link style. Opens in a new tab. |

- `rel="nofollow noopener noreferrer"`: DesignRush requested the link in exchange for a complimentary 60-day promoted listing. Google's spam policies treat exchanged links as link schemes unless they are qualified with nofollow or sponsored.
- Push: `git push origin designrush-link:main` (fast-forward from f543429).
- After deploy, confirm the link on the live homepage, then reply to DesignRush.

---

## M. Trust, search-title, privacy and speed fixes (2026-10-19, owner gave full permission)

Made in the `embra-live` worktree on top of live `main` (da47749).

**Analytics review (dcb2c7f, branch `analytics-wip`): not published.** It adds `/api/collect` (scroll depth, clicks, time on page, ad-click flags, bot scoring, per-request logging). None of it improves rankings; it adds client-side work and more personal data. Kept unpublished on the local `analytics-wip` branch.

| ID | Where | Change |
|---|---|---|
| TRUST-1 | Homepage project cards (`components/FeaturedWork.jsx`) | Removed unproven "↑ 280% organic traffic" (Tuxford), "+190% Local Calls" (Alaska Fast Fix), "+215% Emergency Leads" and the fixed 95/100 badge (Sky High). Sky High card now matches its portfolio card. "View All 5 Projects" corrected to 6. |
| TRUST-1 | Portfolio cards (`app/portfolio/PortfolioClient.jsx`) | Removed "↑ 280% organic traffic", "3.4x Quote Submissions", "+190% Local Calls"; replaced with website features. |
| TRUST-1 / CONT-2 | Case studies: Tuxford, V Vasquez, Alaska Fast Fix, BestBreaks (`app/portfolio/[slug]/page.jsx`) | Plain-language rewrite (hype words removed). Unproven outcome numbers removed from text and results. PageSpeed badges (linked to live reports), build time and stack kept. Each now links to its matching industry page, pricing and the free sample. |
| TECH-1 | Blog (`lib/blogData.js`, `app/blog/[slug]/page.jsx`) | New `metaTitle` per post (≤ 60 characters with " \| Embra") used as the search title; on-page H1 unchanged. Tree guide `dateModified` set to 2026-10-19 (content changed in f543429). |
| TECH-4 | `/niches` description | Shortened from 179 to 152 characters. |
| Privacy | `app/api/track/route.js` (already live before this project) | Stores a shortened IP (IPv4 x.y.z.0; IPv6 first three groups) instead of the full address, matching the privacy policy's "anonymised" wording. Country and city unchanged. |
| Speed | `components/Hero.jsx` | Safety timer for a failed or stalled 3D load lowered from 10 s to 4 s. No change on normal connections. |

**Not done this round:**
- LINK-1: linking the tree, auto body and HVAC guides from their industry pages.
- PageSpeed badge numbers not re-measured; the PageSpeed service needs a Chrome permission.
- Handyman page rework (CONT-1).

---

## N. Remaining outcome claims (2026-10-19, after f7b6d18 went live)

Live check of f7b6d18 passed: 38/38 pages OK, 0 hype words on all 6 case studies, 7 blog search titles at 44–59 characters, homepage "View All 6 Projects" and the DesignRush link live. A broader scan (claims written as "280% increase", "average 96/100" and so on) found five more claims:

| Page | Was | Now |
|---|---|---|
| /locations/los-angeles | "Tuxford … saw a 280% increase in organic traffic and achieved a flawless 97/100"; "Our custom builds average 96/100" | Local-search basics described plainly; speed points to the live PageSpeed report on the case study |
| /locations/chicago | Sky High "24/7 Emergency Service badge", "license numbers", "215% increase in emergency leads", "95/100" | The features found on the live site (phone links, estimate form, service descriptions, project photos, service area); no outcome claim |
| /locations/alaska | "Alaska Fast Fix saw a 190% increase in local calls and secured a 98/100" | Structured data and Business Profile alignment described; speed points to the live report |
| /locations/brooklyn | "Our Next.js builds average 96/100+" | "Fast on Phones": live PageSpeed report on each case study |
| /about | "our sites average 96/100 on PageSpeed and rank" | Fast, mobile-first sites, with a live PageSpeed report on each case study |

The project now uses a single working folder: `embra-next` on `main` (the `embra-live` worktree was removed after f7b6d18). Analytics work remains on the local `analytics-wip` branch, unpublished.

**Deploy:** `git add app/locations/[city]/LocationClient.jsx app/about/AboutClient.jsx PHASE1_CHANGELOG.md`

---

## O. Font fix (2026-10-20)

Found by the 20 Oct "Verified master SEO review" and confirmed live: the computed font on body, H1 and paragraphs was Times New Roman. `next/font` registered Figtree, but the files showed as "unloaded".

Cause: `app/layout.jsx` put the `next/font` variable classes (`--font-figtree`, `--font-inter`, `--font-jetbrains`) on `<body>`, while `globals.css` uses them inside `:root` (`--ff-display`, `--ff-body`, `--ff-mono`). `:root` can't see variables defined on `<body>`, so those declarations became invalid and the browser fell back to its default serif.

Fix: the classes are now on `<html>`. Nothing else changed. `ThemeProvider` only sets `data-theme`, and Lenis adds its class with `classList`, so neither removes them.

**Deploy (with section N):** `git add app/layout.jsx "app/locations/[city]/LocationClient.jsx" app/about/AboutClient.jsx PHASE1_CHANGELOG.md`

Also found 20 Oct in Search Console URL Inspection: `/services/web-design` is "Discovered, currently not indexed" (never crawled) and `/services/local-seo` is "URL is unknown to Google". Request indexing for both after this deploy.

---

## P. Sitemap dates and indexing requests (2026-10-20)

Verified live after the font deploy: headings render in Figtree and body text in Inter (was Times New Roman); 38/38 pages OK; no outcome claims anywhere.

Request indexing for `/services/web-design` was refused by Search Console with "Quota exceeded" (daily limit already used). Retry both service URLs the next day.

The sitemap showed old dates for changed pages (web-design and local-seo 2026-10-01, homepage 2026-09-30), so Google had no signal to re-read them. `app/sitemap.js` now uses the real change dates from the release log:
- `/services`, `/services/web-design`, `/services/local-seo`: 2026-10-18 (8721c96)
- homepage, `/portfolio`, all case studies, tree-service page: 2026-10-19 (5cf96f5, f543429, f7b6d18)
- `/about` and all city pages: 2026-10-20

Sitemap status in Search Console before this change: submitted Oct 1, last read Oct 16, Success, 38 discovered pages. Resubmit after deploy.

**Deploy:** `git add app/sitemap.js PHASE1_CHANGELOG.md`

---

## Q. Search Console analysis and four-part content and cleanup round (2026-10-21, owner requested)

**Search Console export analysed** (handyman page only, Oct 4–10 vs Oct 11–17, web search):
- Impressions 127 to 5 (US 117 to 1); clicks 0 and 0. 75 of 82 queries were "website design for handyman [city]" at 1–3 impressions each; 94% desktop.
- Reading: a one-week burst of templated city queries, consistent with automated rank-checking or crawlers rather than buyer demand (not provable). The fall began before the Oct 13 changes.
- Consequence: the handyman rewrite targets the national buyer phrases in the data (handyman website design; affordable web design for handyman; handyman website builder; website designers for handyman business) and answers city searches in an FAQ. No city pages.

**1. Local SEO page** (`app/services/local-seo/page.jsx`): copy rewritten, layout unchanged. Removed "ensure" Map Pack, "dominate", review-rating aggregation and the "Yes" to a page per city. Added Google's local ranking guidance, links to the local SEO and HVAC guides, and 5 FAQs (timing, no Map Pack guarantee, city pages, what we need, pricing via free review and Care Plan). FAQ questions now use H3.

**2. Handyman page** (`app/niches/web-design-for-handyman-businesses/page.jsx`):
- Search title "Handyman Website Design: Custom Sites From $700"; H1 "Handyman Website Design for Small Repair Businesses".
- Pricing aligned with the tree page and /pricing ($700 split, or $600 paid in full).
- Removed the unsourced "65% mobile" statistic, the fixed 98/100 and 99/100 scores, hype, and city pages for every town.
- 6 FAQs, including handymen in other cities, an affordable option, and SEO for handyman and drywall businesses.
- Corrected the client domain in the preview card to alaskafastfixhandyman.com.

**3. Privacy policy** (`app/privacy/page.jsx`, last updated October 21, 2026), matching the code:
- Removed the inaccurate Google Analytics 4 statements.
- Describes the `embra_session` cookie and browser storage keys.
- Describes our own visitor analytics in Axiom: pages viewed, previous on-site page, visible time, country and city, browser and device, shortened IP.
- Contact-form copies stored in Axiom with the session ID.
- Vercel Analytics and Speed Insights described as cookieless.
- Owner action: set an Axiom retention period and add it to section 6.

**4. Cleanup**
- Duplicate breadcrumb data removed from 7 pages: privacy, terms, about, contact, pricing, services, and niches (whose copy disagreed with the visible breadcrumb). Unused imports removed.
- Guide links added: auto body page to `/blog/auto-body-shop-marketing`; HVAC page to `/blog/hvac-local-seo`; tree page to `/blog/what-tree-service-website-needs`; Local SEO page to both SEO guides. The auto body and HVAC search sections were also reworded (no "dominating", no area-page clusters).
- Remaining fixed scores in body text removed: auto body caption and text (97/100, "dominant local footprint"), landscaping caption and text (99/100), and the homepage FAQ ("averaging 96/100 … meeting Core Web Vitals"). The homepage "verify our own live score" link is kept by owner decision.
- Case-study section labels (Challenge, Approach, Deep Dive, Tech Stack, Results) are now `<h2>`; `h2.cs-col-label` in `globals.css` keeps the same look.
- Sitemap: homepage, Local SEO, privacy and the five edited industry pages dated 2026-10-21.

**After deploy:** request indexing for `/services/local-seo` and `/services/web-design`; verify the pages live.
