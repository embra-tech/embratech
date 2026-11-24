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

---

## R. Published and submitted (2026-10-24)

Live check after the owner's push: 38/38 pages OK; no page has more than one BreadcrumbList; no fixed scores in body text outside the homepage and portfolio badges; Local SEO, handyman, privacy, guide links and case-study H2s live; fonts correct.

Search Console, 24 Oct:
| URL | Status before | Action |
|---|---|---|
| /services/local-seo | Discovered, currently not indexed (was "unknown" on Oct 20) | Indexing requested |
| /services/web-design | URL is unknown to Google (shown as "Discovered" on Oct 20) | Indexing requested |
| /niches/web-design-for-handyman-businesses | URL is on Google | Recrawl requested (rewritten page) |
| /sitemap.xml | Last read Oct 23 | Resubmitted, "Sitemap submitted successfully" |

**Date correction:** this round was dated 2026-10-21 (from the export's file name), but Search Console shows the publish date as Oct 24. The sitemap date and the privacy policy's "Last updated" are now 2026-10-24.

**Deploy:** `git add app/sitemap.js app/privacy/page.jsx PHASE1_CHANGELOG.md`

---

## S. Top-35 query round (2026-10-25, owner requested)

Source: Search Console export 2026-10-25 (web search, last 3 months, all countries; data 29 Sep–23 Oct). 195 queries, 655 impressions in the query table; US 762 of 854 impressions; 2 clicks (India and Nicaragua), 0 US clicks. The top 35 queries hold 64% of query impressions.

**Grouping of the top 35** (rank in list):
- A. Auto body marketing (5, 9, 10, 18, 24, 32, 33, 35), positions 17–35: target, via `/blog/auto-body-shop-marketing`
- B. HVAC SEO (1, 7, 15, 16, 28), positions 36–73: target, via `/blog/hvac-local-seo` plus `/services/local-seo`
- C. Auto body website design (21, 26, 27), positions 53–57: target, via `/niches/auto-body-shop-website-design`
- D. Tree service web design (13, 22, 25), positions 7–33: already revised Oct 19; wait for recrawl
- E. Handyman + city (8, 17, 31), positions 8–16: covered by the handyman FAQ; likely automated traffic
- F. LA service businesses (2), position 60: target, via `/locations/los-angeles`
- G. Brand (3, 4, 6, 23): profiles and identity; "embra" is shared with other companies
- H. Local SEO agencies in other places (11 Juneau, 12 Fairbanks, 14 Airway Heights): not pursued; would imply offices there
- I. Not our business (19 cloverjet, 20 / 30 / 34 Alaska smart-home integrators, 29 aviation): ignored

**Changes**
- `lib/blog/auto-body-shop-marketing.js`: expanded around the A queries: collision repair marketing strategy (6 channels), 90-day plan, digital marketing, small budget, offline and referral, measurement, 5 FAQs.
- `lib/blogData.js`: auto body title "Auto Body Shop Marketing: A 90-Day Plan and Strategy for Collision Shops", search title "Auto Body Shop Marketing Plan & Collision Strategy", new summary, 9 min read. HVAC title "HVAC SEO: How Heating and Cooling Contractors Rank Higher on Google", search title "HVAC SEO Guide for Heating & Cooling Contractors". Both dated 2026-10-25.
- `lib/blog/hvac-local-seo.js`: intro names HVAC SEO; new section "How to choose an HVAC SEO company" (good signs, red flags, link to the Local SEO service).
- `app/niches/auto-body-shop-website-design/page.jsx`: title "Auto Body Shop & Collision Repair Website Design"; H1 "Auto Body Shop Website Design for Collision Repair Shops"; new description, schema and breadcrumb; Starter pricing wording aligned ($700 split / $600 full).
- `app/locations/[city]/page.jsx` and `LocationClient.jsx`: title and H1 "Websites & SEO for Service Businesses in [city]" (was "Dominating Search in [city]"), new description and subtitle.
- `app/sitemap.js`: city pages and the auto body page dated 2026-10-25.

**After deploy:** request indexing for the two blog posts, the auto body page and the 4 city pages; resubmit the sitemap.

**Deploy:** `git add lib/blog/auto-body-shop-marketing.js lib/blog/hvac-local-seo.js lib/blogData.js app/niches/auto-body-shop-website-design/page.jsx "app/locations/[city]/page.jsx" "app/locations/[city]/LocationClient.jsx" app/sitemap.js PHASE1_CHANGELOG.md`

---

## T. Site-wide content audit, batch 1 (2026-10-25, owner requested)

**Audit of all 38 live pages** (crawl 25 Oct; unique text = share of 8-word phrases found on no other page):
- **Duplication:** low. Unique text 71–100% per page, except the blog index (38%, article excerpts) and the portfolio (71%, project cards). The only text repeated on 3+ pages is the shared call-to-action box, plus one statistic in 3 articles. Not a risk.
- **Outdated content:** none. The only flagged years are correct historical references (FTC review rule 2024, INP replacing FID in 2024, 25C credit ending in 2025).
- **Generic wording:** concentrated in old template pages (hype words per 1,000: plumber 14.4, services 9.8, HVAC 8.8, integrations 8.1, LA 8.0, industries hub 7.8, roofing 7.6, web design 6.3, homepage 5.7). Rewritten pages score 0.
- **Targeting:** the Services hub H1 ("Everything you need to grow online.") and the web design title did not use the phrases buyers search.

**Fixed in batch 1** (layout and design unchanged):
- `app/services/web-design/page.jsx`: full copy rewrite. Title "Website Design for Home Service Businesses"; pricing aligned; removed an unsourced statistic, hype, "immune to WordPress hacks" and "color psychology"; links to all 7 industry pages and the cost guide; 5 FAQs (cost, timing, platform, templates, trades); FAQ headings H3.
- `app/niches/plumber-website-design/page.jsx`: full copy rewrite. Title "Plumber Website Design: Custom Plumbing Websites"; removed the invented "Google data confirms" claim, franchise claims, "pages for every town", the unconfirmed ServiceTitan embed and hype; honest FAQ that Apex is a concept design; pricing aligned.
- `app/services/ServicesClient.jsx`: H1 "Web Design & Local SEO for Home Service Businesses"; card copy de-hyped; SEO card no longer promises ranking "at the top"; areas section reworded.
- `components/WhyUs.jsx` (homepage and services): "Custom Built", "Fast on Every Device"; plainer intro. The "Verify our own live score" link and speed claim kept by owner decision.
- `components/Showcase.jsx`: "real-time overview" corrected to an illustrative preview with sample data; plainer heading.
- `components/Marquee.jsx`: tagline "Built with Modern, Proven Technology".
- `components/Services.jsx`: web design card and integrations card de-hyped.
- `components/Process.jsx`: step 2 text.
- `app/locations/[city]/LocationClient.jsx` (LA): intro, case study, list and map FAQ rewritten plainly; no zip-code page clusters.
- `app/sitemap.js`: homepage, services, web design and plumber pages dated 2026-10-25.

**Batch 2 (next):** HVAC, roofing and landscaping industry pages, website integrations, the industries hub, the Chicago section.

**Deploy:** `git add -A` (check `git status` lists only the files in sections S and T).

---

## U. Review of the external "7-Legend SEO Collective" report, and fixes (2026-10-26)

Release 46680ac (sections S and T) verified READY and rendering live.

**Verified as correct and fixed:**
- Care Plan section headings invisible (`reveal-up` on a server page without the reveal script; opacity 0 live). Removed; FAQ `h4` changed to `h3` (also on integrations).
- `public/llms.txt` still said "based in Brooklyn" with the old street address and "headquarters"; old titles; no PND. Rewritten to match the site (remote team, current titles, all 6 case studies, pricing, no address).
- About stat cards ("actively ranking on Google", "96/100 average PageSpeed") replaced with verifiable figures (5 client websites built, 7 trades).
- Homepage: "Websites We've Built & Ranked" and "sub-second speeds" (FeaturedWork), and the SEO card's "ranks at the top" (Services). Fixed; the integrations card now links its page.
- City fallback text ("average 96/100", "service-area clusters"). Fixed.
- Footer guides lacked the 3 trade guides with impressions. All 7 articles now linked, auto body, HVAC and tree first.
- Pricing snippet at position 2.7 for "embra inc. pricing plans" without prices. Title and description now lead with real prices.
- LA page lacked the PND local SEO case study. Added, with a trades paragraph linking industry pages, guides and the Local SEO service.
- Chicago page had no HVAC SEO section for query #1. Added "Local SEO for Chicago HVAC and Plumbing Contractors" linking the HVAC guide, Local SEO and HVAC pages; old hype wording rewritten.
- Integrations page appearing for smart-home installer searches. Title and description now say "website software integrations for contractor websites".
- HVAC guide: new section "Air conditioning SEO vs. heating SEO: plan by season" (qualitative table, scrollable on phones) linking the Chicago and LA pages.
- Auto body guide: new section on less dependence on insurer DRPs, plus an FAQ "What does autobody and collision repair marketing include?".
- Brand: `alternateName` ["Embra", "Embra Technologies"] in the site-wide ProfessionalService data.

**Rejected (incorrect or unsafe):**
- "V Vasquez is in Centennial, Colorado": the client is in Merced, CA. No Colorado callouts.
- "Embra Technologies LLC, registered in Delaware, US-based": contradicts the company record and the remote-team wording. Not used.
- `alternateName` "Embra Inc.": may be another company.
- "$350 deposit + $350": CORRECTION (2026-11-08): this was wrongly rejected. The live pricing page offers Starter as "$350 now + $350 at launch" (the code also has a 4 × $175 monthly option). The site's "$700 total with split payments" wording covers both, so no page change is needed.
- "Live in 7 days": the site states 2–4 weeks.
- FAQPage and Offer schema "for rich results": FAQ rich results are limited to authoritative government and health sites, and service prices don't produce price snippets. Low value; not added.
- Wrong slugs (`/portfolio/sky-high-tree-service`, `/portfolio/vasquez-handyman`, `/portfolio/best-breaks`) and post titles the site never had.
- "Chicago never mentions HVAC" (it did) and "TODO_OWNER in schema" (not rendered).
- Invented local detail ("-10°F cold snaps in Lincoln Park") and "guaranteed" top-3 dates.
- Sitemap dates for plumber, web design, services and home were already fixed in section T.
- bot-proxy stripping JSON-LD: only affects PageSpeed and Lighthouse requests, not Googlebot, and the proxy is kept by owner decision.

**Batch 2, next:** full rewrites of the auto body body, HVAC, roofing and landscaping industry pages; a founder bio and author box (needs owner details).

**Deploy:** `git add -A` (check `git status`).

---

## V. Content batch 2: the last template pages (2026-10-26)

Release 1a4af5d (section U) verified live. Indexing requested for 10 pages (web design, care plan, Chicago, LA, auto body guide, HVAC guide, pricing, auto body page, plumber page, services); sitemap resubmitted.

Full copy rewrites. Layout, images and design unchanged; pricing aligned ($700 split / $600 full, Growth $1,000, Care Plan $150); 6 FAQs each; FAQ headings H3.
- `app/niches/auto-body-shop-website-design/page.jsx`: body rewritten (title, H1 and intro done in S). New sections "Why Work With an Auto Body Website Design Agency That Knows Collision Repair" and "Pages Every Collision Repair Website Needs"; insurance wording made accurate (which insurers you work with; right to choose only where state law provides it).
- `app/niches/hvac-website-design/page.jsx`: title "HVAC Website Design for Heating & Cooling Contractors". Polar Air labelled as a concept (sample brand); removed the unsourced $8k–$15k figure and conversion claims; certifications and financing only if held or offered; FAQ on air conditioning and heating SEO; links to the HVAC guide and Chicago.
- `app/niches/roofing-website-design/page.jsx`: title "Roofing Website Design for Roofing Contractors". Summit Peak labelled as a concept; removed the unsourced $10k–$40k range, "institutional-grade" and the "adjuster meeting representation" promise (licensed public-adjuster work in many states).
- `app/niches/landscaping-website-design/page.jsx`: title "Landscaping Website Design for Lawn Care Companies". Removed the unsourced "$15,000 outdoor living" example and hype; V Vasquez example section.
- Care Plan: no `h4` left in the page (the 4 found live are the footer column titles).
- `app/sitemap.js`: the four pages dated 2026-10-26.

All 7 industry pages now use the same honest, specific approach; none uses the old `generate_niches.js` template wording.

**Deploy:** `git add -A` (check `git status`).

---

## W. Free-sample offer, pictures and motion on every page (2026-10-26, owner requested)

Goal: visitors see the free, no-obligation homepage sample as soon as they land, and inner pages get more visual interest, without hurting rankings.

**New components:**
- `components/OfferStrip.jsx`: "Free custom homepage sample in 24 hours. No payment and no obligation" plus a Get My Free Sample button. Plain server-rendered HTML: no pop-up (Google demotes intrusive mobile pop-ups), no layout shift, no extra JavaScript.
- `components/ProjectShot.jsx`: real project screenshots in the existing browser-window style. Existing optimized AVIF/WebP sets, lazy-loaded, fixed width/height (no layout shift), descriptive alt text, optional link to the case study. `concept` labels sample brands.

**Where the offer appears:**
- `components/PageHeader.jsx`: under every inner page heading (services, industries, cities, pricing, portfolio, blog index, about, legal). `offer={false}` on Contact, which the offer links to.
- `app/blog/[slug]/page.jsx`: under each article's summary.
- `app/portfolio/[slug]/page.jsx`: at the end of each case-study hero.
- Homepage unchanged: its hero already states the free 24-hour sample.

**Pictures added** (all below the first screen):
- Local SEO page: Pick N Drop Laundry.
- Web design page: "Recent Websites" grid (Tuxford, Sky High, Alaska Fast Fix).
- City pages: LA Tuxford, Chicago Sky High, Alaska Alaska Fast Fix.
- Each article: one relevant project, inserted before its first H2 so it never delays the main content.
- Each case study: its own screenshot after "The Challenge".

**Motion** (`app/globals.css`, pure CSS):
- A soft moving glow behind inner page headers.
- A pulsing green dot on the offer.
- The offer sliding in.
- Screenshots and showcase cards easing in on scroll (scroll-driven CSS, Chrome and Edge; other browsers show them normally).
- Transform-based only: no layout shift, and text is never hidden (screenshots start at 40% opacity, not 0). Off for visitors who prefer reduced motion and for crawlers (`html[data-bot]`).

**Also:** Alaska section, "lightning fast" and "ensure your site ranks for the exact boroughs" reworded.

**SEO safety:** no titles, H1s, URLs, canonicals or main copy changed by this round; no new JavaScript libraries; images lazy-loaded below the first screen with explicit dimensions; offer text in the HTML for every visitor and crawler alike.

**Deploy:** `git add -A` (check `git status`).

---

## X. Offer matched to each page, Pexels photos, card animations (2026-10-26, owner requested)

**1. Offer relevance (owner feedback):** the free homepage sample was showing on the Local SEO page, which sells SEO.
- `components/OfferStrip.jsx` now has two versions: `sample` (free homepage sample) and `seo` (free local SEO review).
- `PageHeader` takes `offer="sample" | "seo" | false`.
- Local SEO page, the local SEO, HVAC SEO and auto body marketing articles, and the PND case study use `seo`.
- Care Plan and integrations show none (neither offer fits); Contact shows none. Privacy and Terms never had it.
- Integrations H1 and subtitle de-hyped to match its title ("Website Integrations for Contractor Websites").

**2. Pexels photos (self-hosted for speed and SEO):**
- `scripts/fetch-pexels.mjs` downloads 10 relevant landscape photos once into `public/images/stock/`. Each is the first search result whose Pexels description contains a trade keyword. Credits go to `lib/stock-credits.json`; `OVERRIDES` pins a specific photo id.
- The key lives in `.env.local` (ignored by git via `.env*`).
- `scripts/generate-images.mjs` optimizes the photos (AVIF/WebP/JPEG at 480/720/960) at build.
- `components/StockPhoto.jsx`: lazy-loaded, fixed 3:2 box, Pexels alt text, photographer credit with a nofollow link. Renders nothing until downloaded, so builds never show broken images.
- Placed on all 7 industry pages (mid-page, before the local search section), each industry card on `/niches`, and the Services rows (web design, local SEO, growth).

**3. Card animations** (pure CSS; hover and motion off for reduced-motion users and crawlers):
- `/niches` cards: lift, glow, photo zoom and icon tilt on hover. Card descriptions and the hub subtitle de-hyped.
- `/services` rows: icon lift and photo zoom on hover; `components/GrowthBars.jsx`, a decorative animated growth graphic (no data, `aria-hidden`) on the Local SEO row.
- Local SEO and web design feature cards: lift and top glow line on hover.

**Order:**
1. `node scripts/fetch-pexels.mjs`.
2. Review the photos.
3. `npm run build`.
4. Preview, then push. Commit `public/images/stock/` and `lib/stock-credits.json`, never `.env.local`.

**Photo review (done 2026-10-26):** all 10 checked and pinned by id in `scripts/fetch-pexels.mjs`. All are landscape, about 3:2, about 6000×4000.

| Slot | Pexels id | Subject |
|---|---|---|
| plumber | 6419128 | hands installing steel pipes |
| hvac | 7347538 | technician repairing an outdoor AC unit |
| roofing | 33404248 | roofer nailing shingles on a residential roof |
| tree | 31127615 | arborist cutting a trunk with a chainsaw |
| handyman | 7285924 | drill fitting a door hinge; replaced an auto-mechanic photo |
| landscaping | 37554739 | mower on a backyard lawn; replaced a golf course, then a portrait shot |
| autobody | 14615263 | car parts being spray-painted |
| webdesign | 7309483 | business owner at a laptop |
| localseo | 5448160 | hands navigating a phone GPS map; replaced a TikTok app search |
| growth | 3861957 | analytics graph on a laptop |

---

## Y. Polish round: scannable Local SEO page, Services photo column, FAQ dropdowns, gradient accents, card CTAs (2026-10-26, owner feedback)

1. **Services page:** each row is now text on the left and the photo in its own top-aligned 300px column on the right (CSS grid on `.service-detail-content`; stacks on phones). Photos get a gradient frame. The list widens to 1080px. Website Integrations gets a photo (`stock-integrations`, new search entry in `fetch-pexels.mjs`, not pinned until reviewed).
2. **Local SEO page:** rebuilt for scanning; the wording and SEO content are kept:
   - short intro plus 3 ranking-factor cards (Relevance and Prominence "You can improve", Distance "Fixed")
   - guide links as chips
   - PND screenshot
   - "How It Works" 3 steps with a Request My Free Local SEO Review button
   - a call to action on each feature card ("Include this in my free review")
   - FAQ dropdowns
3. **CTAs and hover:**
   - Web design feature cards: "Get my free homepage sample".
   - Hover lift and glow on factor, step, feature, service and industry cards; the CTA arrow slides; chips lift; buttons and mid-page CTA boxes glow.
4. **Gradient accents and dropdowns:**
   - 1px gradient-blue outline (CSS mask) on cards, photo frames, offer strips, FAQ items and mid-page CTA boxes.
   - Gradient divider lines between sections (`.gradient-divider`).
   - Gradient underline under centered section headings.
   - Gradient bar beside content headings on industry and city pages (`.text-content h2`).
   - FAQ dropdowns (`components/FaqAccordion.jsx`, native `<details>`; first item open) on the Local SEO, Web Design and 6 industry pages. Gradient outline when open; rotating chevron.

**SEO safety:**
- FAQ answers stay in the HTML inside `<details>` (indexed); questions keep their H3s.
- No titles, H1s or URLs changed; no JavaScript added; all effects are CSS, transform and opacity, with no layout shift.
- Motion is disabled under prefers-reduced-motion.

**Next:** `node scripts/fetch-pexels.mjs` (only `stock-integrations` is new; the other 10 are pinned), review it, then build, preview and push.

---

## AA. Top-30 queries and 10-city targeting (2026-11-02, owner requested)

**Data:** GSC export of 2026-10-25 (web, 3 months, all countries; data 29 Sep–23 Oct). 195 queries, 655 query impressions. 57 queries name a place, with 243 impressions (37%):
- Chicago 54 (HVAC SEO, construction SEO)
- Los Angeles 57 (service businesses, HVAC SEO, construction SEO, plumbing web design, website maintenance)
- Alaska/Anchorage 44 (handyman, contractor and plumber websites, "anchorage seo company")
- Fairbanks 15 ("seo fairbanks")
- Juneau 15 ("seo agency juneau")
- Denver metro 27 (handyman websites in Centennial, Colorado, Boulder and Aurora; positions 8–10)
- Spokane/Airway Heights 13 (SEO, handyman)
- Phoenix metro 4 (handyman websites in Tempe and Mesa)
- single impressions elsewhere

**10 cities targeted:**
- Strengthened: Los Angeles, Chicago, Brooklyn (unchanged) and the Alaska hub.
- New: Anchorage, Fairbanks, Juneau, Denver metro, Spokane, Phoenix metro.

**Doorway-safe design:** every new city page has its own local context (climate and seasons, real nearby areas), the trades its searches asked for, unique FAQs and honest remote-team wording (no office claims). Pages are not city-name swaps.

**Files:**
- `lib/cityGuides.js` (new): the 6 guides (meta title and description, intro, 4 trade cards, SEO section, areas, FAQs, photo; Alaska guides show the Alaska Fast Fix project).
- `components/CityGuide.jsx` (new): renders a guide (trade cards with CTAs, StockPhoto, area chips, ProjectShot, FaqAccordion).
- `app/locations/[city]/page.jsx`: guides added to the static params; per-guide title and description; `guide` prop.
- `app/locations/[city]/LocationClient.jsx`:
  - guide branch, guide subtitle, and the SEO-review offer on Fairbanks, Juneau and Spokane
  - LA section "HVAC SEO, Plumbing and Contractor Websites in Los Angeles" (HVAC SEO agency LA, construction SEO, plumbing web design, website maintenance via the Care Plan)
  - Chicago paragraph on construction SEO and home services
  - Alaska hub "Alaska Cities We Work With" (links to Anchorage, Fairbanks and Juneau)
  - fallback copy de-hyped; "measurable gains" removed
- `lib/site-config.js`: `serviceAreas` adds the 6 cities (footer "Service Areas" row and the Services hub list).
- `app/sitemap.js`: 6 new URLs; LA, Chicago and Alaska dated 2026-11-02.
- `public/llms.txt`: city pages listed.
- `components/Faq.jsx`: homepage FAQ "What is Embra Technologies?" for the brand queries.

**After deploy:** request indexing for the 6 new city pages, then LA, Chicago and Alaska; resubmit the sitemap.

**Published and submitted (2026-11-02, commit 72e83a5):**
- Live check: all 9 city pages return 200 with one H1, a correct canonical and their own title. Each new page has 4 FAQs and 4 trade CTAs, with the right offer (SEO review on Fairbanks, Juneau and Spokane).
- LA HVAC section, Chicago construction paragraph and Alaska hub city links are live; the footer links all 6 cities; the homepage brand FAQ is live.
- Sitemap: 44 URLs.
- Search Console: indexing requested for anchorage, fairbanks, juneau, denver, spokane and phoenix (all "URL is not on Google" before), then los-angeles, chicago, alaska and the homepage (all already on Google). Sitemap resubmitted; read the same day (Success, 44 discovered).
- Next check: about 1 week (are the new city pages indexed?), then about 2 weeks (first city-search impressions).

---

## AB. Uniqueness and content-quality pass (2026-11-02, owner requested)

**Audit (live crawl of all 44 pages; uniqueness = share of 8-word phrases found on no other page):**
- Older city pages: 84–88% unique, 640–905 words. Good.
- New city pages: 69–83% unique, only 517–648 words. Pairs too similar: denver~phoenix 24%, denver~spokane 20%, spokane~phoenix 20%, juneau~phoenix 19%.
- Sentences repeated between new city pages: the "remote team" FAQ answer (5×), pricing sentences (4×), the Care Plan sentence, "set up accurate service areas…", "websites and local search setups around those decisions", the Alaska project caption (3×), the areas intro (6×), and the city "See our work…" box (10×).
- Industry pages: 69–75% unique. The Care Plan bullet and pricing-link sentence were identical on 6 pages.
- /services 58% and /blog 22% are hub pages that summarize others (expected).
- Outdated content: none found in earlier passes.

**Changes:**
- `lib/cityGuides.js` rewritten. Every repeated sentence is now city-specific, and each guide adds:
  - a seasonal calendar (4 rows: when homeowners call about what, and what to have ready)
  - 5 search examples mirroring that city's Search Console queries
  - a local tip (Mat-Su as separate areas; North Pole; Juneau neighborhoods; hail-damage page timing; Post Falls/Coeur d'Alene; seasonal residents)
  - its own areas sentence and Alaska project caption
  - unique FAQ answers
- Titles sharpened to each city's biggest search: Anchorage "Anchorage Websites & SEO for Handymen and Contractors"; Juneau "SEO Agency Services for Juneau Service Businesses"; Denver "Handyman Websites & SEO in Denver, Centennial & Aurora"; Spokane "SEO for Spokane & Airway Heights Service Businesses"; Phoenix "Handyman & HVAC Websites in Phoenix, Tempe & Mesa". Chicago (non-guide) is now "HVAC SEO & Websites for Chicago Service Businesses" (top Chicago query, 42 impressions).
- `components/CityGuide.jsx` renders the calendar (scrollable table), search chips, local tip, areas note and caption. Styles are in `app/globals.css` (season table with gradient header line, dashed search chips, green-accent tip box).
- `LocationClient.jsx`: the "See our work…" box names the city.
- 6 industry pages: Care Plan bullet and pricing-link sentence rewritten per trade (plumber, HVAC, roofing, landscaping, auto body, handyman).
- Internal links to the city pages:
  - handyman page links Denver metro, Anchorage, Phoenix and Spokane
  - HVAC page links Fairbanks, Phoenix and LA
  - Local SEO page gets chips for SEO in Fairbanks, Juneau, Spokane & Airway Heights, Anchorage, and HVAC SEO in Chicago
- `app/sitemap.js`: the 6 changed industry pages and Local SEO dated 2026-11-02.

**After deploy:**
- Re-run the uniqueness crawl (target: new city pages above 85% unique, no pair above 10%).
- Request indexing for the 6 city pages (refresh), Chicago and the Local SEO page; resubmit the sitemap. The daily quota was used on Nov 2, so this happens on the next day.

**Published and verified (2026-11-06, commit f8adad6):**
- Live: all 6 city pages show the new titles, calendar, search chips, tip and FAQs; Chicago has its HVAC SEO title; city links live on the handyman, HVAC and Local SEO pages.
- Uniqueness re-crawl:
  - new city pages 88–92% unique (was 69–83%), 641–773 words
  - most similar new pair denver~phoenix 10% (was 24%)
  - industry pages 73–94%
- Search Console: all 6 new city pages already indexed (between Nov 2 and Nov 6). Recrawl requested for those 6 plus Chicago, handyman and HVAC; indexing requested for /services/local-seo (still not indexed). Sitemap resubmitted (Success, 44).

---

## AC. Alaska trade coverage, Bel Air, sitemap date fix (2026-11-06, owner requested)

Owner goal: rank for HVAC SEO, HVAC web design, auto body shop website design and other trades in Alaska, Anchorage and Bel Air.

Approach: no trade × city doorway pages (e.g. "/hvac-seo-anchorage"). The Alaska hub and Anchorage page cover every trade with Alaska-specific content instead.
- `app/locations/[city]/LocationClient.jsx` (Alaska hub): new section "Websites and SEO for Every Alaska Trade", 7 cards with CTAs:
  - HVAC SEO and heating websites (boilers, heat pumps, oil-to-heat-pump conversions)
  - Auto body shop website design (icy-road fender-benders, moose collisions, gravel-chipped windshields)
  - Plumbing (frozen lines, sewer thawing, heat tape)
  - Roofing (snow load, ice dams, metal roofs)
  - Handyman (Alaska Fast Fix)
  - Tree service (spruce beetle removal, Firewise clearing)
  - Landscaping (short season, breakup clean-ups)
- `app/locations/[city]/page.jsx`: Alaska title "Alaska HVAC, Auto Body & Contractor Websites and SEO".
- `lib/cityGuides.js` (Anchorage): two more trade cards (auto body: winter fender-benders and moose collisions on the Glenn and Seward Highways; tree service: spruce beetle removal and Firewise). Search chips add "hvac seo anchorage" and "auto body shop website design alaska".
- LA page: Bel Air (Los Angeles neighborhood) named among the areas covered ("such as Bel Air and the Westside…"). No separate Bel Air page, which would be thin.
- `app/sitemap.js`: dates corrected to 2026-11-06 for all city pages, the 6 changed industry pages and local-seo. The previous round said 2026-11-02 but went live on 2026-11-06.

**After deploy:** request indexing for /locations/alaska, /locations/anchorage and /locations/los-angeles; resubmit the sitemap.

**Published and verified (2026-11-06, commit b672a7a):**
- Live: Alaska title "Alaska HVAC, Auto Body & Contractor Websites and SEO"; "Websites and SEO for Every Alaska Trade" with 7/7 cards. Anchorage has 6 trade cards (auto body and tree added) and 6 search chips. LA names Bel Air. Sitemap dates 2026-11-06.
- Search Console: /locations/alaska recrawl requested. Daily quota then exceeded, so /locations/anchorage and /locations/los-angeles are pending (both already indexed). Sitemap resubmitted (Success, 44).
- Next: request Anchorage and LA when the quota resets; about Nov 13 city-query impressions; about Nov 20 rank check.

---

## AD. Three new portfolio projects; homepage project cards (2026-11-06, owner requested)

Link audit (Search Console, Nov 6): 36 external links from 10 sites, all pointing to the homepage. Alaska Fast Fix's footer credit is followed (`rel="noopener noreferrer"`, no nofollow) and Google has recorded it (3 links). Recommendation: re-point client credits to the matching city or case-study page on the www address (Alaska Fast Fix to /locations/anchorage, Tuxford to /locations/los-angeles, Sky High to /locations/chicago, JCP to /niches/landscaping-website-design).

**New projects** (facts taken from each live site; feature descriptions only, no outcome claims):
- `alaska-handyman-services`: Alaska Handyman Services LLC, Anchorage AK (license #143470). 8 service categories with pages, before-and-after sliders, service-area page, estimate form that pre-selects service and area. Links to /locations/anchorage and the handyman page.
- `jcp-lawn-service`: JCP Lawn Service, Rancho Cordova CA (Greater Sacramento). Homes, HOAs and commercial lawn care. Links to the landscaping page.
- `royal-home-health-care`: Royal Home Health Care, Inc., Van Nuys CA (4 counties). About 20 service pages, referral, service-area and FAQ pages, accessibility page, reduce-motion option, privacy-aware contact form.

**Files:**
- `app/portfolio/[slug]/page.jsx`: 3 case studies, and `CASE_SHOTS` entries for jcplawn, alaskahandymanservices and royalcare.
- `components/FeaturedWork.jsx` (homepage): Tuxford, JCP, Alaska Handyman Services, Royal Home Health Care. Alaska Fast Fix and Sky High removed from the homepage only; they stay in the portfolio.
- `app/portfolio/PortfolioClient.jsx`: the 3 projects added.
- `components/Footer.jsx`: case-study links added.
- `app/sitemap.js`: 3 new URLs; homepage and /portfolio dated 2026-11-06.
- `public/llms.txt`: the 3 case studies listed.
- `app/about/AboutClient.jsx`: "Live client websites" stat 5 → 8.
- `lib/cityGuides.js`: the Anchorage FAQ mentions Alaska Handyman Services.
- `scripts/capture-screenshots.mjs` (new): saves 1440×900 screenshots to `public/images/{jcplawn,alaskahandymanservices,royalcare}.jpg` via Microlink (thum.io fallback).
- `scripts/generate-images.mjs`: optimizes them.
- The new cards show "Live PageSpeed report" links without a fixed score.

**Order:**
1. `node scripts/capture-screenshots.mjs`.
2. Review the screenshots.
3. `npm run build`.
4. Push.
5. Request indexing for the 3 case studies, the homepage and /portfolio.

**Published and verified (2026-11-06, commit b8c1e75):**
- Homepage shows Tuxford, JCP, Alaska Handyman Services and Royal Home Health Care (Alaska Fast Fix and Sky High removed).
- All 3 screenshots and their optimized AVIF versions load. The 3 case studies return 200 with their own titles, one H1, a screenshot and correct canonicals.
- Portfolio page lists 3/3; footer links 3/3; About stat updated; sitemap 47 URLs.
- Search Console: indexing requested for /portfolio/alaska-handyman-services (was "not on Google"). Quota then exceeded. Sitemap resubmitted and read the same day (Success, 47 discovered).
- Still to request when the quota resets: /portfolio/jcp-lawn-service, /portfolio/royal-home-health-care, the homepage, /portfolio, /locations/anchorage and /locations/los-angeles.

**Fix: broken screenshots on the new project cards (2026-11-06, owner reported):**
- Cause: `components/SiteCard.jsx` built the optimized image name by stripping only `.webp` and `.png`. The new screenshots are `.jpg`, so the cards requested e.g. `/images/optimized/jcplawn.jpg-480.jpg` (confirmed on the live /portfolio: 3 cards with broken paths).
- All 27 optimized files exist live (3 sites × 480/720/960 × avif/webp/jpg).
- Fix: strip any image extension (`/\.(webp|png|jpe?g|avif)$/i`). The case-study pages were unaffected (they use ProjectShot with explicit names).
- Verified live (commit e975d47): homepage 4/4 and /portfolio 9/9 cards load their screenshots (JPEG fallback loaded in the browser, AVIF version present).

---

## AE. Premium inner-page round: tighter hero spacing, hero photos and videos, glassmorphism, scroll animations (2026-11-08, owner requested)

The homepage is unchanged (all new styles are scoped to `.page-shell` or `.page-head`).

1. **Spacing:** inner-page heroes had 64px (navbar offset) + 96px top padding = 160px above the breadcrumb. `.page-hero` padding-top is now 64px desktop and 32px mobile, matching the owner's mobile screenshot.
2. **Hero background media by route:**
   - `lib/heroMedia.js` (new) maps routes to media; `components/PageHeader.jsx` renders it.
   - Industry pages use their reviewed trade photos (new 1600px versions); services and care plan use the existing stock photos.
   - Services hub, pricing, portfolio, blog, about, contact, industries hub and the 10 city pages use new `hero-*` photos from `scripts/fetch-pexels.mjs` (city skylines and similar; to be reviewed before publishing).
   - Image: real `<picture>` HTML, AVIF/WebP/JPEG at 480/720/960/1600 (`scripts/generate-images.mjs` hero lists), `fetchpriority=high`, phones get small versions (`sizes` 60vw), dark overlay, hidden if the file is missing.
   - Videos (`public/videos/`, 1280×720 MP4 from Pexels): services, web design and local SEO only. Desktop ≥1024px only, added after window load and idle, never for prefers-reduced-motion or Save-Data. Fades in over the photo.
3. **Glassmorphism** (inner pages): offer strip, feature, factor, step and service cards, FAQ items, niche cards and the season table get frosted translucent surfaces (`backdrop-filter: blur(14px) saturate(140%)`, inner highlight), keeping the blue hover glow.
4. **Scroll animations:** cards ease in via scroll-driven CSS (`translate` + opacity from .35, so text is never hidden and hover transforms still work). Off for reduced motion and crawlers (`html[data-bot]`).
5. **Dropdowns:** FAQ dropdowns already exist on the service, industry and city pages. Navbar dropdown menus are not done in this round: the navbar is shared with the homepage, so they are proposed as a separate, reviewed change.

**Order:**
1. `node scripts/fetch-pexels.mjs` (17 hero photos and 3 videos; the 11 existing photos are pinned and unchanged).
2. Review the picks in `lib/stock-credits.json`.
3. `npm run build`.
4. Preview, then push.

**Review (2026-11-08):**
- All 17 hero photos are relevant and landscape: city skylines and landmarks for LA, Chicago, Juneau (Mendenhall Glacier), Denver, Spokane (Falls), Phoenix and Brooklyn; Alaska mountains for Alaska and Fairbanks; an Anchorage street. All are pinned by id.
- Videos:
  - Services: construction worker with a drill (3.2 MB). Kept.
  - The "web design" pick showed a card payment on a laptop. Renamed to `video-integrations` and moved to the integrations page; web design keeps its photo.
  - Local SEO: aerial city lights at night, but 9.9 MB at 1280px. Pinned with maxWidth 960 to fetch the smaller file.
- Re-run `node scripts/fetch-pexels.mjs` once to download the smaller local SEO clip (everything else is pinned and unchanged).

---

## AF. Mobile showcase round: case studies, guides and city pages (2026-11-08, owner requested)

Goal: make Case Studies, Guides and Service Areas feel visual and convincing, especially on phones. The homepage is unchanged; content stays in the HTML; pure CSS motion with reduced-motion and crawler opt-outs.
- **City pages** (`components/CityGuide.jsx`; Alaska hub in `LocationClient.jsx`):
  - trade cards use `.stack-cards`; on phones they stick and stack as you scroll (sticky, staggered tops, solid card backgrounds)
  - a decorative orbit of nearby areas around the city name (aria-hidden; the real area list stays below as text)
  - the seasonal calendar becomes one card per season on phones ("Calls:" / "Have ready:")
- **Guides** (`app/blog/[slug]/page.jsx`):
  - topic photo behind the hero (reviewed trade photos)
  - CSS reading progress bar (`animation-timeline: scroll()`)
  - every `<h2>` gets an id and feeds an "In this guide" contents box (`<details open>`, 2 columns on desktop)
  - typography: gradient heading bars, glowing bullet points, glass tables, `scroll-margin-top` so anchor jumps clear the navbar
- **Case studies** (`app/portfolio/[slug]/page.jsx`): the project's own screenshot, blurred, as the hero backdrop; on phones, "Our Approach" cards stack as you scroll.
- **Everywhere on inner pages:**
  - section headings, contents box and orbit slide in from the left (scroll-driven `translate` + opacity from .4)
  - spinning conic-gradient rings around step numbers and ranking-factor icons; pulse ring on the orbit center
- **Safeguards:** no text hidden (the lowest opacity is .4); all motion is under `prefers-reduced-motion: no-preference`; `html[data-bot]` disables every animation; unsupported browsers show the content normally.

**Order (with AE):**
1. `node scripts/fetch-pexels.mjs`.
2. `npm run build`.
3. Preview on a phone-sized window.
4. Push.

---

## AG. Faster pushes: stop committing generated images (2026-11-08)

The owner's push took about 30 minutes. Cause: the commit included hundreds of generated files in `public/images/optimized/` (AVIF/WebP/JPEG at 480/720/960/1600 for every photo).

The `build` script already runs `scripts/generate-images.mjs` before `next build`, on Vercel as well, so those files are recreated on every deploy and never needed to be in git.
- `.gitignore`: added `public/images/optimized/`, plus the local working folders `output/` and `tmp/`.
- Still tracked, because the site needs them: the source photos in `public/images/stock/` (28 files, 7.05 MB) and `public/videos/` (3 files, 13.27 MB; the local SEO clip is now 6.47 MB at 960px).
- One-time fix for the unpushed commit: `git reset --soft origin/main`, then `git rm -r --cached --ignore-unmatch public/images/optimized output tmp`, `git add -A`, commit and push. Files stay on disk.
- Vercel builds take a few minutes longer while sharp generates the images; the push itself is about 20 MB instead of the full optimized set.

**Published and verified (2026-11-08, commit eb247a4; covers AE, AF and AG):**
- Vercel regenerated all optimized images (portfolio, stock and hero sets load).
- Hero photos load on every checked page at 31–133 KB (largest AVIF). The 3 videos are served (3.2, 3.7 and 6.6 MB). The homepage has no hero media (unchanged).
- Anchorage: orbit, stacking cards and season cards present. Guide: contents box and reading progress bar present. Case study: blurred screenshot hero.
- Desktop hero padding-top is 64px (breadcrumb at 128px, was ~160px). The live CSS contains the phone rules: 32px spacing, sticky stacking cards, season cards, plus the orbit, progress and glass rules and the reduced-motion and crawler opt-outs.
- Phone-size screenshots were not possible: the browser window would not shrink, so the owner checks on a real phone.

---

## AH. Client-review trust round (2026-11-08, owner requested)

Based on the 7-perspective client review (Anchorage HVAC, LA collision, Centennial handyman, Chicago HVAC operations manager, Fairbanks plumber, Chicagoland tree service, Phoenix roofer). Common gaps: no visible proof, phone or hours near the top; no SEO results where SEO is sold; "remote" stated without a process; concept designs with no next step; no quotes or founder.

**Built** (shared components, so every relevant page gets them):
- `components/ProofBar.jsx` + `lib/proof.js`, under the offer in every PageHeader hero:
  - "Recent clients": 3 real clients, most relevant first per route (local clients on city pages, same-trade clients on industry pages), each linking to its case study, plus "+N more"
  - "Call (212) 207-1152 · Mon–Fri 9am–6pm ET", with the visitor's local hours added after load on city pages (Intl time zones, so DST and Arizona are handled; client-side to avoid hydration mismatch) · "Websites from $700"
- `components/TrustBlocks.jsx`:
  - `SeoResultCard`: Pick N Drop Laundry Search Console numbers (9→21 clicks, 471→1,399 impressions), always labelled as a Los Angeles client with dates and source. Shown on all 6 city guides and in the Chicago HVAC section.
  - `HowWeWork`: a 4-step remote process (tell us → free sample in 24h → built in 2–4 weeks → launch and you own it) on all 10 city pages.
- `components/ClientQuotes.jsx` + `lib/testimonials.js`: real-quote slots (renders nothing while empty; no ratings or review markup). Placed after the trade cards on city guides.
- Plumber, HVAC and roofing concept-design captions now link to /contact: "See your own design free in 24 hours".
- `app/globals.css`: proof chips (green dot, glass), hero facts row, SEO result card (gradient numbers), how-we-work steps (reuse the spinning step-num rings), quote cards. Phone layout compact.

**Correction recorded:** the Starter split is "$350 now + $350 at launch" on the live pricing page (see U).

**Waiting on the owner:** 2–3 real client quotes (Tuxford, Alaska Handyman Services, Sky High, V Vasquez); founder photo and bio; whether the number accepts texts and an honest reply time. Then: quotes into `lib/testimonials.js`, founder block and author box, and "Text us".

**Next (Claude):** tree service page upgrade (FAQ dropdowns, Sky High screenshot near the top); longer case studies (phone-view screenshot, build time, quote); SEO buyers' page (reporting sample, contract terms).

**Follow-up (2026-11-08):**
- Owner confirmed WhatsApp on the same number with replies within 24 hours.
  - ProofBar facts now read "Call or WhatsApp (212) 207-1152 · Replies within 24 hours · Mon–Fri 9am–6pm ET (local) · Websites from $700" (WhatsApp link `https://wa.me/12122071152`, as in WhatsAppButton).
  - HowWeWork step 1 mentions WhatsApp and the 24-hour reply.
- Owner asked for placeholder quotes written by Claude. Declined: invented quotes presented as client words are fake testimonials (FTC 2024 rule; deceptive to visitors and Google). `lib/testimonials.js` stays empty until real quotes arrive.
- OPEN QUESTION: the homepage `components/Testimonials.jsx` shows quotes attributed to Carlos Mendez (Tuxford), Victor Vasquez (V Vasquez) and Dan Miller (Sky High), with 5-star ratings. If these were not actually given by those people, remove or replace them. Dan Miller's quote also makes an outcome claim ("brings in real emergency calls"). They are not reused on inner pages until confirmed genuine.
- Founder photo and bio: not available yet.

---

## AI. Near-page-1 push (2026-11-11, owner requested)

Search Console (28 days to Nov 9): 575 queries, 5,670 impressions, average position 46.4.
- HVAC website/web design: 61% of impressions at average position 59.1. Every other query: average 28.8.
- 30 queries on page 1; **93 queries at positions 11–20** (the targets).
- Owner reports the 7 client credit links have been re-pointed.

**Targets and changes:**
- **HVAC SEO group** (seo hvac 76/16.5, ac company seo 56/11.4, local seo for hvac companies 35/18.4, air conditioning repair seo 24/13, seo for air conditioning 19/15.1, heating and air local seo 13/14.8, hvac seo guide 10/19.6):
  - `lib/blog/hvac-local-seo.js`: new section "SEO for AC and heating companies: where to start" (3 steps) with links to the HVAC website design page and Local SEO
  - `lib/blogData.js`: metaTitle "HVAC SEO Guide: Local SEO for HVAC & AC Companies"; dateModified 2026-11-11
  - HVAC website page (3,401 impressions) links the guide as "HVAC SEO guide for AC and heating companies"
- **Auto body** (collision repair website design 67/19, auto body shop website design 55/18.8):
  - the auto body guide's in-text link now uses the anchor "collision repair website design" (dateModified 2026-11-11)
  - the auto body page gets an FAQ "What makes a good collision center website?"
- **Roofing** (roofing website 46/14.2): roofing page gets a "Roofing Website Checklist" section (6 items).
- **Plumbing** (plumbing web design services cost 16/11.1): the FAQ becomes "How much do plumbing web design services cost?" and points to the cost guide.
- **Los Angeles** (hvac website design la 34/13.7, plumbing web design los angeles 9/17.8): H2 "HVAC Website Design, HVAC SEO and Plumbing Websites in Los Angeles", plus a sentence linking "HVAC website design".
- **Spokane** (airway heights seo 21/14.8): SEO section title "Airway Heights and Spokane SEO: What Actually Helps".
- **Anchorage** (website design for handyman anchorage 8/15): trade card "Handyman Website Design in Anchorage".
- `app/sitemap.js`: auto body, roofing, plumber and HVAC industry pages, LA, Anchorage and Spokane dated 2026-11-11.

**Measure:** the same 93 queries around Nov 25 and Dec 9 (positions settle 2–4 weeks after recrawl).

**Published and verified (2026-11-13, commit 9034c39):**
- All 9 changes live (each page 200, one H1); sitemap has 9 entries dated 2026-11-11.
- Search Console: recrawl requested for 9 pages (HVAC guide, auto body, roofing, HVAC, plumber, LA, Spokane, auto body guide, Anchorage; all already indexed). The 10th request, /services/local-seo, now shows "URL is on Google" for the first time. Sitemap resubmitted (Success, 47, read Nov 13).
- Date note: this round went live on Nov 13, but the sitemap says 2026-11-11. Harmless; align it in the next release.

---

## AJ. US analysis: impressions down, position up, no US clicks; CTR, US-signal and mobile fixes (2026-11-18, owner requested)

**Search Console, US only, week vs week:**

| US | Nov 3–9 | Nov 10–16 |
|---|---|---|
| Impressions | 2,613 | 1,662 |
| Avg position | 47.3 | 36.0 |
| Page-1 impressions | 81 (23 queries) | 192 (30 queries), +137% |
| Positions 11–20 | 372 | 294 |
| Positions 51+ | 1,460 | 582 |
| HVAC web design | 1,522 imp at 59.2 | 851 imp at 47.0 |
| Everything else | avg 30.7 | avg 24.4 |

- All countries: 2,970 → 1,920 impressions; position 47.2 → 35.7; 2 clicks (Pakistan, Sweden), 0 US.
- Conclusion: the impression drop is almost entirely page-6+ appearances (-878); page-1 appearances more than doubled.
- Near-page-1 push results (US, Nov 10–16): auto body shops website design agency 55→1.3; seo company for hvac repair in chicago 43→9.9; air conditioning seo 57.6→7.1; ac company seo 11.4→6.7; airway heights seo 14.8→6.8; air conditioning repair seo 13→7.4; seo for air conditioning 15.1→9.6; plumbing web design los angeles 17.8→9.4.
- Why 0 US clicks: about 190 page-1 impressions a week across ~30 searches at positions 6–10 (expected roughly 2–5 clicks a week); agency-type searches are also often tracked by rank-checking tools (impressions, no clicks); listings were generic.
- Authority (Ahrefs DR): embratechnologies.org 30 vs Scorpion 84, Hibu 79, a smaller HVAC agency 44. This explains HVAC web design at ~47.
- Performance:
  - PageSpeed mobile (Anchorage) 98: LCP 1.5s, TBT 0, CLS 0. Note: the middleware serves Lighthouse the bot-proxy page, so this is flattering; no real-user (CrUX) data yet.
  - Real-browser check: TTFB 111ms, load 1.6s, JS 399KB gz (React 54KB, GSAP+ScrollTrigger ~46KB); Three.js is not loaded on inner pages; hero AVIF downloaded by 1.5s; 18 elements with backdrop blur. A 9.8s LCP reading in a background tab was discarded as an artifact.

**Changes:**
- Click-through descriptions that echo the US searches and give a reason to click:
  - HVAC guide excerpt (also the Google description): "Step-by-step SEO for AC and heating companies…"
  - `app/locations/[city]/page.jsx` CITY_DESC for chicago (HVAC SEO first), los-angeles, brooklyn (HVAC SEO) and alaska
  - `lib/cityGuides.js`: Spokane ("Airway Heights and Spokane SEO…") and Juneau ("Juneau SEO…") meta descriptions
- `app/layout.jsx`: `<html lang="en-US">` (was "en").
- `app/globals.css`: on phones (≤768px), cards drop the live backdrop blur (translucent background kept); hero chips keep it; desktop unchanged.
- `app/sitemap.js`: Brooklyn, LA, Chicago, Alaska, Juneau and Spokane → 2026-11-18; Anchorage and the 4 industry pages → 2026-11-13 (their real go-live date; was 2026-11-11). The HVAC guide's dateModified is 2026-11-18.

**Next:** recheck around Nov 25 (US clicks and CTR on the page-1 searches); the authority work (links, reviews) remains the ceiling for the biggest HVAC searches.

**Published and verified (2026-11-19, commit 2615543):**
- 7 new meta descriptions live (130–159 chars): HVAC guide, Chicago, Spokane, Juneau, LA, Brooklyn, Alaska.
- `<html lang="en-US">` on every page.
- Mobile no-blur rule present in the live CSS (selectors reordered by the minifier).
- Sitemap: 7 entries 2026-11-18, 5 entries 2026-11-13.
- One leftover: /blog/auto-body-shop-marketing still showed 2026-11-11 (its dateModified lives in `lib/blogData.js`). Fixed locally to 2026-11-13; ships with the next push.
- Search Console:
  - recrawl requested for the 7 changed pages (all indexed)
  - indexing requested for the 3 new case studies (jcp-lawn-service, royal-home-health-care, alaska-handyman-services), all still "not on Google" two weeks after launch despite strong internal linking; likely too short (about 440 words) → expand them next
  - sitemap resubmitted (Success, 47, read Nov 19)

---

## AK. Indexing audit and fixes (2026-11-20, owner requested)

**Search Console → Pages (last updated Nov 16):** 29 indexed, 20 not indexed.

| Reason | Count | Pages | Status |
|---|---|---|---|
| Discovered – currently not indexed | 16 | 8 of 9 case studies (all but sky-high-tree); /services/web-design, /services/local-seo, /services/care-plan; /blog/local-seo-guide-for-service-businesses, /blog/website-roi-calculator, /blog/why-pagespeed-matters; /niches; /terms | Google knows the URLs but has not crawled them: low crawl priority for a young, DR-30 site. Not a quality rejection |
| Not found (404) | 1 | /portfolio/sky-high-tree | Stale: returns 200 now (title "Tree Service Website Design, Sky High") |
| Duplicate without user-selected canonical | 1 | /blog/website-cost-for-home-service-businesses | Stale: last crawl Oct 2, before the Oct 13 canonical fixes. Inspection showed user canonical "None" and a Google-selected canonical on an unrelated cinema site (a Google glitch on a mid-change crawl). The page now has a self-canonical and a unique title |
| Page with redirect | 2 | /pricing.html, /index.html | Intended .html redirects; nothing to fix |
| Crawled – currently not indexed | 0 | | No quality rejections |

**Fixes:**
- `app/portfolio/[slug]/page.jsx`: every case study gets "Project at a Glance" (client, industry, location, what we did, built with, live website) and "Related Pages" (a contextual sentence linking the matching industry or service page and city or pricing page, plus 2 related case-study cards). `RELATED` map per slug.
- `components/CityGuide.jsx`: "Free guides for {city} business owners" chips linking the local SEO guide, the website cost guide, the ROI calculator and the PageSpeed guide, from all 6 city guides.
- HVAC and auto body industry pages (the most crawled): the Care Plan bullet links /services/care-plan; the pricing paragraph links /services/web-design.
- `app/globals.css`: `.cs-glance` and `.cs-related` styles.
- `app/sitemap.js`: all 9 case studies, the 6 city guides, and the HVAC and auto body pages → 2026-11-20.

**Indexing requests:**
- Nov 20: /blog/website-cost-for-home-service-businesses requested; quota then exceeded (yesterday's 10 had not reset).
- Nov 20 (after push bbbf48f): /portfolio/sky-high-tree → "URL is not on Google | INDEXING REQUESTED". /services/web-design → "QUOTA EXCEEDED" (not requested). Sitemap resubmitted: Success, 47 URLs, read Nov 20.
- Next batch scheduled for Nov 20, 10:30 IST (automatic follow-up in this session).
- Queue for the next days (10/day): /services/web-design, /services/care-plan, /portfolio/tuxford-collision, /portfolio/pnd-laundry, /portfolio/vvasquez-handyman, /portfolio/alaska-fast-fix, /portfolio/bestbreaks, /niches, /blog/local-seo-guide-for-service-businesses, /blog/website-roi-calculator, /blog/why-pagespeed-matters, then /terms. Already requested Nov 19: jcp-lawn-service, royal-home-health-care, alaska-handyman-services.

**Live check of push bbbf48f (Nov 20):** all 9 case studies show "Project at a Glance" and "Related Pages" (2 cards each, one H1, about 416–624 words); the Fairbanks guide shows 4/4 guide chips; HVAC and auto body pages link /services/care-plan and /services/web-design; live sitemap has 47 URLs, 17 dated 2026-11-20.

**Expectation (honest):** "Discovered" pages typically get crawled within days to a few weeks after requests and fresh links. Ranking growth on competitive US terms depends mostly on authority (links, reviews); positions for city and niche terms are already moving onto page 1.

---

## AL. Premium effects round (2026-11-20, owner requested)

Request: analyse vault.hyperiux.com/effects and add every effect that can make the site look premium, without hurting Google rankings or the homepage.

**Analysis:** all 185 effects in 11 categories (sitemap, every effect page, and live demos captured at several scroll positions). Free effects are MPL 2.0 and need the Hyperiux CLI; Pro effects are proprietary. Nothing was copied: every effect below is original code (CSS plus one small script), with no new libraries.

**Added (inner pages only; everything is scoped to `.page-shell`, so the homepage is untouched):**

| Effect (Hyperiux name it is based on) | Where | How |
|---|---|---|
| Light pass on buttons (Shiny Button) | every primary button on inner pages; repeats every few seconds on the closing CTA button | CSS |
| Orbiting light ring (Spotlight Button) | closing CTA button, featured pricing button | CSS `@property` angle |
| Magnetic buttons (Animated Button) | all buttons on inner pages, mouse/trackpad only | `components/PremiumFx.jsx` |
| Cursor spotlight on cards + border that lights up under the cursor | service, feature, factor, step, industry, FAQ, pricing, portfolio, related-page and glance cards | PremiumFx + CSS |
| Border beam | hero offer strip, SEO result card, featured price card, contact form | CSS |
| 3D tilt with moving glare | project screenshots, portfolio previews | PremiumFx + CSS |
| Headings fill from dim to bright on scroll (Text Fill Animation) | section headings (h2) | CSS scroll timeline |
| Photo mask reveal + parallax drift (Parallax Image) | stock photos; screenshots wipe in | CSS scroll timeline |
| Progress line across "How We Work" steps (Timeline) | city pages | CSS scroll timeline |
| Smooth FAQ open/close + answer rises in (Elastic Accordion) | all FAQ dropdowns | CSS (`::details-content`) |
| Rolling digits (Number Counter) | SEO result numbers (21, 1,399) | `components/RollingNumber.jsx` |
| Dotted grid that lights up around the cursor (Dotted Grid / Dotted Trail) | inner page heroes | CSS + PremiumFx |
| Aurora light + cursor glow (Aurora Ribbon) | closing CTA section | CSS |
| Route sweep (light version of the page transitions) | thin light line on navigation between inner pages | PremiumFx |
| Card underneath shrinks/dims as the next slides over (Stacking Cards) | phone stacked-card sections | CSS named view timelines |
| Drifting, draggable strip of real client projects (Draggable Marquee) | /services, /services/web-design, /pricing, /niches, /about ("Recent Client Projects"; 9 links to case studies) | `components/ProjectMarquee.jsx` |

**Bug found and fixed:** `html, body { overflow-x: hidden }` made `<body>` its own (non-scrolling) scroll box. Every scroll-linked animation (`animation-timeline: view()`) and every `position: sticky` measured against it, so the Nov 8 phone stacking cards never stuck and the scroll animations never played. `body` now uses `overflow-x: clip` (same look, nothing scrolls sideways; old browsers keep `hidden`). The homepage uses neither feature and is pixel-identical below its 3D hero.

**Not added, and why:** WebGL/Three.js effects and shader backgrounds (150 KB+ of script and GPU load: PageSpeed and phone battery); loaders (delay content, hurt LCP and leads); full page transitions (fragile with the Next.js App Router and delay content; the route sweep is the light version); cursor trails and custom cursors (distracting, accessibility); navigation overhauls (the menu is shared with the homepage); scroll hijacking and pinned horizontal sections (bad on phones); glitch, scramble and typing text (tech-startup look, readability); 3D carousels (hide content behind interaction).

**SEO and speed safeguards:** text, headings and links are never hidden or changed; nothing animates for bots (`html[data-bot]`) or reduced-motion visitors; cursor effects only on mouse/trackpad devices; transform/opacity/paint-only motion; one passive pointer listener throttled to one update per frame.

**Checks (local production build):** 47/47 pages static. Page JS +~2 kB on the 5 pages with the strip, +0.5 kB on city pages, unchanged elsewhere. All 47 pages compared with the live site as Googlebot: titles, descriptions, canonicals, robots, H1s and JSON-LD unchanged; the only addition is the "Recent Client Projects" H2 with 9 case-study links on 5 pages (+118 words). Googlebot render: headings normal, plain numbers. No horizontal overflow on any page (desktop and phone); CLS at most 0.008; no console errors. Reduced motion: all motion off. Strip: drifts, pauses on hover, drags without opening a link, a click opens the case study, keyboard focus pauses it.

**Sitemap:** /services, /niches, /services/web-design, /pricing and /about dated 2026-11-20 (new section).

**Files:** new `components/PremiumFx.jsx`, `components/ProjectMarquee.jsx`, `components/RollingNumber.jsx`; edited `app/layout.jsx`, `app/globals.css` (body `clip` fix near the top, effects section at the end), `components/TrustBlocks.jsx`, `app/services/ServicesClient.jsx`, `app/services/web-design/page.jsx`, `app/pricing/PricingClient.jsx`, `app/niches/page.jsx`, `app/about/AboutClient.jsx`, `app/sitemap.js`.

**Undo:** remove `<PremiumFx />` from `app/layout.jsx`, the `<ProjectMarquee />` lines, the two `RollingNumber` uses in TrustBlocks, and the "2026-11-20 PREMIUM EFFECTS ROUND" CSS section. Keep the body `clip` fix.

---

## AM. Premium effects, second round (2026-11-20, owner requested)

Request: apply the effects to the homepage too; present the homepage portfolio the way vault.hyperiux.com/templates presents its templates (the 3D "corridor"); add Rotation Slider, Depth Shift Transition, Chess Grid Transition and any other carousel, transition, scroll and text effects that fit; mobile first.

**Reference checked:** the Hyperiux templates corridor is a WebGL scene (sticky full-screen canvas, scroll moves the camera past tilted browser frames, glass info panel with 01-09 progress, "click to step inside"). The three named effects were captured frame by frame from their demos. Everything below is original code with no new libraries (CSS 3D, no WebGL).

**Added:**

| Effect | Where | Phones | Wide screens with a mouse |
|---|---|---|---|
| Project corridor (templates page style) | homepage "Live Client Websites We've Built" (`components/ProjectCorridor.jsx`, used by `FeaturedWork.jsx`) | swipe carousel with a 3D coverflow turn; details of the centred project below; arrows; 01-05 progress | scroll-driven 3D corridor: frames float in space with a perspective grid floor and stars, the camera walks past them as you scroll, pointer parallax, glass panel with progress, details and buttons; clicking a frame opens the case study |
| Chess grid page transition | every in-site link click (`components/PageTransition.jsx`) | 4 tile columns | 6-8 tile columns |
| Depth shift page transition | opening a case study (/portfolio/...) from anywhere | same | same |
| Rotation (cards swing into place in 3D while scrolling) | homepage process and "why" cards, portfolio cards | one after another | alternating sides |
| First-round effects on the homepage | light pass + magnetic buttons, orbiting ring + aurora on the closing CTA, cursor spotlight on process/why/FAQ cards and the corridor panel, heading fill, travelling light around the interactive preview box | touch-safe ones only | all |

The homepage hero (headline, 3D orb, buttons) is unchanged, so the first screen loads exactly as before. "View All 6 Projects" (out of date) now reads "View All 9 Projects".

**SEO and speed safeguards:** transitions run only on clicks inside the site, never on the first page load (what Google and PageSpeed measure), and never for bots, reduced-motion visitors, new-tab clicks, hash links or other sites; links stay real links. Every corridor project (name, trade, city, description, results, case-study and live-site links) is in the server HTML; without JavaScript, for bots and for reduced-motion visitors all projects are listed in full. The 3D corridor only switches on for wide screens with a mouse after the page has loaded, below the first screen.

**Checks (local production build):** 47/47 pages static; homepage JS 12.5 kB to 13.8 kB, other pages unchanged by this round. All 47 pages compared with the live site as Googlebot: titles, descriptions, canonicals, robots, H1s, H2s and JSON-LD unchanged; homepage text +91 words (corridor details and the "see all projects" card). All pages on desktop, phone and as Googlebot: no horizontal overflow, CLS at most 0.008, no console errors. Transitions tested: grid on desktop and phone, depth into a case study, back button (instant), reduced motion (instant navigation), a drag on the project strip does not open a page. Corridor tested on desktop (3D) and phone (coverflow), keyboard focus reaches every frame. Also confirmed running on the owner's localhost:3000 in 3D mode.

**Files:** new `components/PageTransition.jsx`, `components/ProjectCorridor.jsx`; edited `components/FeaturedWork.jsx`, `components/HomePage.jsx` (`home-shell` class), `components/PremiumFx.jsx` (homepage scope, more cards), `components/ProjectMarquee.jsx` (drag flag for transitions), `app/layout.jsx`, `app/globals.css` ("PREMIUM EFFECTS, SECOND ROUND" section at the end).

**Undo:** remove `<PageTransition />` from `app/layout.jsx`; in `FeaturedWork.jsx` render the old `work-grid` of `SiteCard`s instead of `ProjectCorridor`; delete the "SECOND ROUND" CSS section and the `home-shell` class.

**Owner feedback, same day (2026-11-20):**
- "The chess transition looks awful": **removed.** `PageTransition.jsx` now only handles links to a case study (`/portfolio/<project>`), which keep the depth shift. Every other link navigates instantly, as before this round. The tile CSS (section 15) is deleted.
- Phone portfolio "kills UX" (the arrows sat at the bottom of the section, so on arrival you saw neither the project photo nor a way to browse): **rebuilt as a scroll story.** On phones the site preview pins under the header (just below it when the header is showing) with a thin progress line; the project details scroll underneath, and the preview crossfades to the project whose details you are reading. The card being read is highlighted, the others are dimmed. No arrows, no sideways swiping. On tablets (768px+, or desktop with reduced motion) the same idea runs side by side: pinned preview on the left, details on the right. The desktop 3D corridor is unchanged.
- Checks: build OK, no lint warnings; all 47 pages vs the live site as Googlebot unchanged (homepage still +91 words from the corridor details); audit of 48 paths on desktop, phone and as Googlebot: 0 problems; phone (375x667, 390x844) and tablet (820x1180) scroll tests switch 01 to 05 in order with no horizontal overflow and no errors; plain links show no overlay, case-study links still get the depth shift.
- Files: `components/PageTransition.jsx`, `components/ProjectCorridor.jsx`, `app/globals.css` (sections 15 and 16), `app/layout.jsx` (comment).

**Owner request, same day: phone animation in the style of lorenzolottici.it/en/work (mobile).**
- Reference studied on an emulated iPhone: a WebGL scene where the project panels ride a figure-8 loop in depth (front panel in focus, neighbours to the sides, the rest behind), a swipe drags the loop and it eases onto the nearest panel, a light pulse on arrival, a planet rim and floating cubes behind, a "— SWIPE" hint. Original code here, CSS 3D and about 150 lines of script, no WebGL, no new library.
- Phones and tablets now get this "ring": our five site previews (four client sites plus the "see all 9 projects" card) on the same kind of figure-8 path; swipe left or right (the loop follows the finger, a flick carries on), tap a card behind to bring it forward, tap the front card to open its case study; a light passes over the card when it settles; planet rim, drifting cubes and a floor grid that slides with the swipe; "01 / 05" counter; the front project's details (trade, city, tags, description, PageSpeed link, case study and live-site buttons) sit right under it. Up/down swipes still scroll the page. Keyboard: Tab to a card brings it to the front, arrow keys step through.
- Reduced-motion visitors keep the pinned list from the previous entry (no animation). Desktop with a mouse keeps the 3D corridor. Bots and no-JS keep the full list. `PageTransition.jsx`: a card marked `data-no-transition` (any card not in front) is ignored, so tapping it only brings it forward.
- Checks: build OK, no lint warnings; SEO compare of all 47 pages unchanged (homepage +91 words, as before); audit of 48 paths on desktop, phone and as Googlebot: 0 problems; swipe, flick, tap-behind, tap-front, vertical scroll tested on iPhone 13, Galaxy S8 and iPad Mini sizes, no overflow, no errors; desktop still 3D, reduced motion gets the pinned list; case-study links still get the depth shift.
- Files: `components/ProjectCorridor.jsx`, `components/PageTransition.jsx`, `app/globals.css` (section 16: `is-pin` and `is-ring` rules).

**Owner request, same day: "the rotations can confuse visitors", use a card stack instead.**
- The ring and the pinned list are removed. Phones, tablets and touch screens now get stacking cards: one card per project (site preview with its browser bar and "01 / 05" number, trade and city, name, short description, linked results, case study and live-site buttons) plus the "see all 9 projects" card. As you scroll, each card sticks a little lower than the one before and slides over it; the cards underneath shrink slightly, darken and tilt back, so the stack stays visible. Normal vertical scrolling only, no swiping, nothing to learn. The stack sits just below the header when the header is showing.
- Tablets (768px and up) show each card in two columns: preview on the left, details on the right, with tags and every result shown.
- Reduced-motion visitors, and screens too short for the stack to fit, get the same cards as a plain list. Desktop with a mouse keeps the 3D corridor. Bots and no-JS keep the full list. The `data-no-transition` opt-out in `PageTransition.jsx` stays (comment updated); case-study links still get the depth shift.
- Checks: build OK, no lint warnings; SEO compare of all 47 pages unchanged (homepage word count the same as before this change); audit of 48 paths on desktop, phone and as Googlebot: 0 problems; scroll tests on iPhone 13, iPhone SE (320x568), Galaxy S8 and iPad Mini: all five cards stack in order, no horizontal overflow, no errors; reduced motion gets the plain list; desktop still 3D.
- Files: `components/ProjectCorridor.jsx`, `components/PageTransition.jsx` (comment), `app/globals.css` (section 16: `is-stack` rules replace `is-pin` and `is-ring`).

---

## AN. Ranking-risk audit and Search Console top-30 content round (2026-11-24, owner requested)

Request: deep analysis for anything that could pull rankings down (content mismatch and contradictions plus the other top causes) and fix it; from 3 months of Search Console data, list the top 100 keywords, pick the top 30 and build content around each; rankings and impressions should both improve.

**Search Console (www property, Sep 29 – Nov 22, 2026):** 9,480 impressions, 5 clicks, average position 40.6; 573 queries with data; 29 pages indexed, 20 not (16 "Discovered – currently not indexed", 1 duplicate, 1 404, 2 redirects).
- Daily impressions: ~30 (mid-Oct) → 350–650 (Oct 28 – Nov 13, the HVAC page) → 130–215 from Nov 14, while the site's average position improved from ~48 to ~24.
- The drop is the HVAC page only: ~250 a day at position ~58 until Nov 13, ~20 a day from Nov 14. Its position for "hvac website design" held (56 → 58.7); the lost impressions were page-5/6 appearances (mostly rank-tracking tools). Other pages held steady or grew. No penalty, no manual action.
- Top 30 picked by impressions divided by position (brand searches excluded), so near-page-1 keywords count as much as high-volume ones. Full list: owner's keyword sheet.

**Audit: 8 risk areas and what was fixed**
1. **Speed-test cloaking (high).** `middleware.js` rewrote Lighthouse/PageSpeed/GTmetrix requests (and `?psi`, `?pagespeed`) to `/api/bot-proxy`, which served each page with every script stripped ("instant 100/100 score"); the client-side `data-bot` check also gave those tools the animation-free page. Removed: the rewrite, `app/api/bot-proxy/route.js`, and the speed-test patterns in `app/layout.jsx`, `Showcase.jsx` and `ThreeCanvas.jsx` (crawlers only now: Googlebot, Google-InspectionTool, HeadlessChrome). Confirmed: browser, Googlebot and Lighthouse now get identical text on all 49 pages.
2. **Real performance (high, found by 1).** Honest mobile Lighthouse for the homepage was 52–56 with 56 s of blocking time. Cause, measured: WebGL drawn in software (no GPU) on every frame (homepage blocked time per 5 s: 3.1 s as-is, 0 with WebGL off, 2.3 s with CSS animations paused). Fix: `components/three/gpu.js` detects software rendering (SwiftShader, llvmpipe, Basic Render...) and the hero orb and service-card scenes are skipped there for everyone (device check, not a visitor check); the hero orb also stops drawing while scrolled out of view. Devices with a GPU see exactly the same hero. Result: homepage 78 (blocking 0.6 s), HVAC page 82, /services 78, new guide 87; CLS 0.
3. **Wrong brand entity links (high).** `sameAs`, the footer and the `twitter:site` tag pointed to twitter.com/embratech (EMBRATECH BLINDAGEM, a Brazilian security company) and linkedin.com/company/embratechnologies (page does not exist). Both removed in `lib/site-config.js`; `sameAs` only appears when a real profile is added.
4. **Conflicting structured data (medium).** `/contact` declared the business `@id` as a `LocalBusiness` named "Embra" with no address, while every page declares it as a `ProfessionalService`. Now it references the sitewide entity; the `ProfessionalService` name is "Embra Technologies" (same as the Organization), alternate names "Embra" and "embratechnologies.org".
5. **Contradictions on the page (medium).**
   - Reply time: "within one business day" (About, homepage "why" card, the CTA on every location and industry page) vs "within 24 hours" (banner, hero). Now 24 hours everywhere for replies.
   - Care Plan update turnaround: "24 hours", "24-hour business turnaround", "24 business hours" and "one business day" on one page; now one business day throughout. Handover: "7 days" vs "7 business days"; now 7 business days.
   - About "8 live client websites" vs "9 client projects" elsewhere: label now says 8 builds plus a local SEO project, 9 case studies.
   - Handyman timeline "2 to 3 weeks" vs "2–4 weeks" sitewide: now 2 to 4 weeks. "Every project above shipped in under 4 weeks" vs case studies that took 4 weeks: now "4 weeks or less".
   - Pricing: Pro listed "Direct access to the senior builder" although the same page says every client talks to the people doing the work; removed from Pro.
   - HVAC page listed our live client trades without home health care and travel; fixed.
   - "EST" vs "ET": ET everywhere.
6. **Unverifiable claims (medium).** "Load in under a second" / "sub-second" (About, About description, Brooklyn, Alaska, portfolio, process step, Care Plan), "99.99% uptime", "ensure your 95+ PageSpeed scores never slip": replaced with checkable wording (each case study links to its PageSpeed report).
7. **Indexing (medium).** 16 pages "Discovered – currently not indexed" (case studies, 3 guides, /niches...) and the cost guide grouped by Google with an unrelated site (last crawled Oct 2, during the old crawler error; no canonical seen then). Every page links to every other through the footer, so footer links carry little signal: added contextual links from the expanded pages and new guides to the guides and case studies, accurate sitemap dates for changed pages; indexing to be requested after deploy.
8. **Author and trust signals (low).** Blog bylines and BlogPosting schema name Md Bilaal Rahman Ali (Founder & Lead Developer) with /about as his page, but /about never mentioned him: one factual line added. Checked and fine: one H1, canonical and index/follow on every page, no duplicate titles or descriptions, no broken internal links, www/https redirects (308), robots.txt, tax-credit facts (25C ended after 2025). Location pages share up to 30% of their text with each other (template sections): acceptable, watch it.

**Content round (top 30 keywords → one target page each, no duplicate pages):**
- `/niches/hvac-website-design` (11 of the 30: hvac website design, hvac web design, hvac web design agency/company/services, website design for hvac, hvac websites...): +1,000 words. New sections: Web Design for Heating, Ventilation and Air Conditioning Companies; HVAC Web Design Services: What Is Included; HVAC Website Builder or a Custom HVAC Website?; Choosing an HVAC Web Design Agency or Company (honest: no live HVAC client yet); How an HVAC Website Project Works. 3 FAQs (timeline, builders, city pages). Title and H1 unchanged.
- `/blog/hvac-local-seo` (9: ac company seo, heating and cooling seo, seo hvac, air conditioning seo, seo basics for hvac companies, seo for heating, seo for air conditioning, air conditioning repair seo, the furnace-repair categories question): +780 words. HVAC SEO basics in five steps; Google Business Profile categories table (HVAC contractor, Air conditioning contractor, Air conditioning repair service, Heating contractor, Furnace repair service, Mechanical contractor, Air duct cleaning service; checked against current guidance); AC repair SEO subheading; How to improve your HVAC brand in search; 2 FAQs. dateModified 2026-11-24.
- New `/blog/hvac-website-examples` (hvac website examples 72/49.6, best hvac websites 43/57.3, best hvac website design 54/69.6, hvac website content 55/41.4): 12 features of the best HVAC websites, pages to write first, sample layout (our labelled concept), tips, mistakes, FAQs. No other company's site named or copied.
- New `/blog/hvac-keywords` (hvac keywords 63/47.6, select hvac keywords 41/40.3, keywords for hvac 17/42.8, best hvac keywords for seo...): how to select HVAC keywords, lists by service, problem, season and location, keyword-to-page map, no made-up search volumes.
- `/niches/auto-body-shop-website-design` (4: collision repair website design, auto body website design, auto body shop website design, collision center website design): Auto Body Website Design Checklist; Collision Center Website Design: One Shop or Several.
- `/niches/roofing-website-design` (roofing company web design services 110/38.6, roofing website 46/14.2): Roofing Company Web Design Services; hosting note in pricing.
- `/niches/web-design-for-handyman-businesses` (handyman website design 82/39.6): "Handyman Website Examples We've Built" (adds Alaska Handyman Services); builder vs custom.
- `/locations/chicago` (seo company for hvac repair in chicago 86/29.7): H2 "HVAC SEO in Chicago: Local SEO for HVAC Repair and Plumbing Contractors" plus "What an SEO company for HVAC repair in Chicago should do".
- `/locations/los-angeles` (hvac website design la 58/24.3): "What an HVAC website in Los Angeles should cover" (cooling season, Title 24 permits, heat pumps and rebates, areas).
- `/locations/spokane` (airway heights seo 99/12.3): 2 FAQs (Airway Heights web design, what Airway Heights SEO involves). `/locations/juneau` (juneau seo 38/7.7): Juneau SEO paragraph.
- `public/llms.txt`: the 2 new guides; `app/sitemap.js`: 49 URLs, changed pages dated 2026-11-24.

**Checks (local production build):** lint clean, build OK, 49 static pages. All 47 existing pages vs before: titles, canonicals, robots and H1s unchanged (About description changed on purpose); HVAC page 1,140 → 2,147 words, HVAC SEO guide 2,025 → 2,801. User, Googlebot and Lighthouse text identical on all 49 pages. Audit of 49 paths on desktop, phone and as Googlebot: 0 problems (no overflow, CLS ≤ 0.008, no console errors). No JSON-LD parse errors.

**Files:** `middleware.js`, `app/api/bot-proxy/route.js` (deleted), `app/layout.jsx`, `lib/site-config.js`, `app/contact/page.jsx`, `components/three/gpu.js` (new), `components/three/HeroScene.js`, `components/three/ThreeCanvas.jsx`, `components/Hero.jsx` (comment + quiet catch), `components/Showcase.jsx`, `components/Cta.jsx`, `components/WhyUs.jsx`, `components/Process.jsx`, `app/about/AboutClient.jsx`, `app/about/page.jsx`, `app/services/care-plan/page.jsx`, `app/pricing/PricingClient.jsx`, `app/portfolio/PortfolioClient.jsx`, `app/locations/[city]/LocationClient.jsx`, `lib/cityGuides.js`, `app/niches/hvac-website-design/page.jsx`, `app/niches/auto-body-shop-website-design/page.jsx`, `app/niches/roofing-website-design/page.jsx`, `app/niches/web-design-for-handyman-businesses/page.jsx`, `lib/blog/hvac-local-seo.js`, `lib/blog/hvac-website-examples.js` (new), `lib/blog/hvac-keywords.js` (new), `lib/blogData.js`, `app/blog/[slug]/page.jsx`, `app/sitemap.js`, `public/llms.txt`.

**Still open (owner):**
- Homepage testimonials (`components/Testimonials.jsx`, 3 quotes with 5 stars) are still unconfirmed; `lib/testimonials.js` is empty "until the owner supplies real, attributable quotes". Confirm each in writing with the client, or remove them.
- Add real profiles to `lib/site-config.js` `social` when they exist (LinkedIn company page, Google Business Profile...).
- After deploy: request indexing for the 2 new guides, HVAC page, HVAC SEO guide, auto body, roofing, handyman, Chicago, LA, Spokane, Juneau, About, and the cost guide; resubmit the sitemap.
- Measure around Dec 8 and Dec 22: the 30 target queries (position and impressions), indexed page count.

**Undo:** revert this release's commit; to restore only the old speed-test behavior (not recommended), restore `app/api/bot-proxy/route.js` and the rewrite in `middleware.js` from git history.

---

## AO. Round 2: roofing, plumber-city, handyman and Juneau queries (2026-11-24, owner requested)

Owner's list (Search Console, top queries): roofing website design 40/31.3, roofing web design 23/39.4, website design for plumbers independence 17/5.5, irving 10/10.3, web design for roofers 10/37.7, website design for handyman illinois 9/17.3, juneau seo 9/18.7, handyman website design 9/24.6, website design for roofers 9/38.8, website design for plumbers corona 8/7.9. Goal: move these up without losing other rankings.

**Where each query lands (Search Console, query filter > Pages):** roofing queries go to /niches/roofing-website-design (368 of 384 impressions in 28 days, avg 35.5); plumber queries go to /niches/plumber-website-design (466 of 488, avg 21.7; 190 distinct queries, mostly "website design for plumbers [city or state]"); handyman queries go to /niches/web-design-for-handyman-businesses (934 of 959 in 3 months, avg 35.2); "juneau seo" goes to /locations/juneau (avg 7.7).

**Approach.** Strengthen the page Google already picks for each query, with additive sections only. No new pages: city pages for plumbers or handymen would be doorway pages, and lists of cities are named as keyword stuffing in Google's spam policies. Titles, H1s and existing sections are unchanged, except the Juneau title (below).

**Changes**
- Roofing page (+940 words): "Web Design for Roofers: Residential and Commercial", "Roofing Landing Pages for Ads and Storm Season", "Custom Roofing Website or a Template?", "Choosing a Roofing Web Design Company" (says plainly that there is no live roofing client yet), "How a Roofing Website Project Works"; pricing H2 renamed "Roofing Website Cost and Pricing"; hosting note became H3 "Roofing Website Hosting"; 4 FAQs (timeline, commercial, redesign without losing rankings, website vs Business Profile); intro sentence now says "roofing web design".
- Plumber page (+630 words): "Plumbing Web Design Services: What Is Included", "Website Design for Plumbers in Any US City" (one natural sentence names Independence MO, Irving TX and Corona CA as examples; no list), "How a Plumbing Website Project Works"; pricing H2 renamed "Plumbing Web Design Cost and Pricing"; 4 FAQs (my city, water treatment and filtration, timeline, redesign).
- Handyman page (+430 words): "Handyman Web Design Services: What Is Included", "Choosing a Web Designer for Your Handyman Business" (three live handyman sites), "How a Handyman Website Project Works"; pricing H2 renamed "Handyman Website Cost and Pricing"; area paragraph links "Chicago and the rest of Illinois" (real Illinois client: Sky High Tree Service, Naperville); city FAQ mentions live handyman sites in Alaska and California.
- Juneau: title "SEO Agency Services for Juneau Service Businesses" changed to "Juneau SEO: Agency Services for Local Service Businesses" (keeps "SEO agency" for "seo agency juneau"); Juneau SEO checklist paragraph; FAQ on how long Juneau SEO takes.
- Cost guide: descriptive links to the roofing, plumber, handyman and HVAC pages; payment line now shows the paid-in-full prices ($600 / $900 / $1,350) to match /pricing. dateModified 2026-11-24.
- Sitemap: plumber page lastmod 2026-11-24.

**Checks:** lint clean; build OK; crawl of all 49 pages compared with the live version: only these 5 pages changed text, the Juneau title is the only title change, no canonical/robots/H1 changes, no JSON-LD errors, Googlebot sees the same text as visitors. Layout audit (desktop, phone, Googlebot) on the 5 pages: 0 problems. Lighthouse (local, mobile): roofing 76 / SEO 100, plumber 70 / SEO 100, CLS 0 (no code changes, text only).

**Undo:** revert the commit; or restore the old Juneau metaTitle in lib/cityGuides.js alone.

## Z. Axiom analytics overhaul: Phase 0 findings and setup (2026-11-01)

No site code changed in this section.

**Phase 0 findings (where things stand):**
- `middleware.js` logs nothing; it only sets `embra_session` = `{id, ts}` (30 min, set once, never refreshed). All logging is client-side (`components/DurationTracker.jsx` → `app/api/track/route.js`).
- The page counter lives in the browser: `sessionStorage` key `embra_nav_seq`, per tab, incremented in `firePageview` before the session check. `referrer_path` is the previous path held in memory, so it is null on every full page load (new tab, typed URL, bookmark, reload) while the number keeps counting in that tab. "Duplicate tab" copies the counter.
- Request logging was removed by the Sep 30 refactor (commit 4a302e7, 09:31 IST / 04:01 UTC). Its own build was cancelled; the same change went live from deployments created 04:02:02 UTC (f04294d) and 04:02:33 UTC (1939717). The old middleware also kept a counter in the cookie and re-set it on every request; the refactor dropped both.
- IPs are stored shortened (IPv4 x.y.z.0; IPv6 first 3 groups), see `anonymizeIp` in `app/api/track/route.js`.
- Unmerged branch `analytics-wip` (dcb2c7f, Oct 15) already holds a Phases 1–4 attempt (middleware request logging with `waitUntil`, page_id, scroll, clicks, `app/api/collect`). Review it against the owner's Nov 1 patch before reuse.

**403 deny-list = Vercel platform protection, not our code or a project rule.** Checked Nov 1 from the live site: `/wp-login.php`, `/xmlrpc.php`, `/wp-admin/install.php`, `/.aws/credentials`, `/filefuns.php` and an invented `/random-test-404.php` all return 403 with `x-vercel-mitigated: deny` and a plain "Forbidden <request id>" body. `/.env` and `/credentials` return the site's normal 404. The project has no custom firewall rules. These requests are stopped before middleware runs, so middleware request logging will never see them (only Vercel's Firewall view, or a log drain on Pro). Keep relying on it; nothing in the repo provides it.

**Owner decisions (Nov 1):** no sequence counter in the cookie or on the server; log immutable facts (session_id, page_id, path, server time) and derive order at query time in Axiom. Preview events go to a separate dataset. `TEST_TOKEN` only sets `is_test`, never skips the deny-list, rate limits or bot checks. Proposed Axiom retention: 90 days, but the Axiom plan caps retention at 30 days (checked Nov 2 in the dataset's Edit panel: "Your plan keeps data for up to 30 days"). `embratechiplog` stays on the 30-day organization default; events before Oct 2, 2026 have already expired, including the Sep 28–30 period. 90 days needs an Axiom plan upgrade.

**Setup done:**
- `.env.local`: `AXIOM_QUERY_TOKEN` (query-only, local scripts only, owner rotates by Nov 2) and `AXIOM_ORG_ID`. File is git-ignored (`.env*`).
- `.env.local`: `TEST_TOKEN` generated locally (random, 32 bytes). The owner copies the same value into Vercel.
- Axiom: new dataset `embratechiplog-preview` (30-day retention) for Preview and test traffic.
- Vercel env (take effect on the next deployment): `INTERNAL_IPS` (Production + Preview); `AXIOM_DATASET=embratechiplog-preview` (Preview only; Production keeps `embratechiplog`).

**Undo:** delete `INTERNAL_IPS` and the Preview-only `AXIOM_DATASET` in Vercel → Settings → Environment Variables; delete dataset `embratechiplog-preview` in Axiom; remove the two Axiom lines from `.env.local`.

**Owner approved (Nov 1):** cookie keeps an unchanging value and gets a fresh 30-minute expiry on each page request (sliding expiry, no read-modify-write); privacy wording for sections 2, 4 and 6, to be applied when Phases 1–4 ship (retention sentence to say 30 days, matching the Axiom plan, unless the plan is upgraded).

**Still open (owner):** copy `TEST_TOKEN` from `.env.local` into Vercel (Sensitive, Production + Preview); create the Protection Bypass for Automation secret in Vercel and put it in `.env.local` as `VERCEL_AUTOMATION_BYPASS_SECRET`; create an ingest-only Axiom token for `embratechiplog-preview` and add it in Vercel as `AXIOM_TOKEN` (Sensitive, Preview only); decide whether to upgrade the Axiom plan for 90-day retention (otherwise 30 days stays).
