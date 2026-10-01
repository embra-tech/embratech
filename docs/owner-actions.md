# Owner Action Checklist

These are actions only the site owner can take. They require no code changes — they are external tasks. Completing them will significantly improve Google rankings and local visibility.

## Priority Order

### 🔴 URGENT — Do These First

#### 1. Google Search Console — Resubmit Sitemap
1. Go to [Google Search Console](https://search.google.com/search-console/)
2. Select `https://www.embratechnologies.org`
3. Click **Sitemaps** in the left menu
4. Enter `sitemap.xml` and click **Submit**
5. Then go to **URL Inspection** and paste each new URL one by one, clicking **Request Indexing**

**URLs to request indexing for (in priority order):**
- `/niches` — new hub page
- `/niches/web-design-for-handyman-businesses`
- `/niches/tree-service-website-design`
- `/niches/auto-body-shop-website-design`
- `/niches/landscaping-website-design`
- `/niches/plumber-website-design`
- `/niches/hvac-website-design`
- `/niches/roofing-website-design`
- `/services/web-design`
- `/services/local-seo`
- `/services/website-integrations`
- `/locations/brooklyn`
- All 4 new blog posts

#### 2. Google Business Profile — Verify NAP Match
1. Go to [Google Business Profile](https://business.google.com/)
2. Confirm the address exactly matches: `1969 51st St, Brooklyn, NY 11204`
3. Confirm the phone exactly matches: `+1 (212) 207-1152`
4. Confirm the website URL is: `https://www.embratechnologies.org`
5. Add all 7 niche services to the "Services" section in GBP

---

### 🟡 HIGH — Do These Within 2 Weeks

#### 3. Request Client Credit Links
See `docs/client-credit.md` for the exact script to send to each client.

Target sites: Tuxford, V Vasquez, Alaska Fast Fix, Sky High Tree Service, BestBreaks.

#### 4. Create Clutch.co Profile
1. Go to [clutch.co/sellers/web-developers](https://clutch.co/sellers/web-developers)
2. Create a free listing
3. Use this description (matches siteConfig):
   > "Custom-built websites, local SEO, and digital identity for home service businesses — handymen, tree services, auto body shops, plumbers, roofers, HVAC, and landscapers."
4. Ask each client to leave a review on your Clutch profile

#### 5. Create GoodFirms Profile
1. Go to [goodfirms.co/get-listed](https://www.goodfirms.co/get-listed)
2. Same description as Clutch

#### 6. Verify Blog Author Information
Update `lib/site-config.js` with real author data:
- `author.name` — your full name
- `author.role` — e.g. "Founder & Lead Developer"
- `author.bio` — 2–3 sentence bio
- `author.slug` — URL slug (e.g. "your-name")

Once done, an `/about/[author]` author page can be created.

---

### 🟢 MEDIUM — Do When Convenient

#### 7. BestBreaks PageSpeed Screenshots
The BestBreaks case study claims 0.41s TTFB and 96/100 PageSpeed. Please provide screenshots from PageSpeed Insights and the Vercel dashboard to support these claims for the portfolio page.

#### 8. Confirm V Vasquez Details
The portfolio entry for V Vasquez says: Location: Merced, CA / Services: Lawn Care, Concrete & Irrigation. Please confirm this is accurate.

#### 9. Confirm Tuxford "Service-Area Pages"
The auto body shop case study mentions "service-area pages" were built for Tuxford. Please confirm this is accurate, or let us know and we will remove the reference.

---

## Recurring Monthly Tasks

- Check Google Search Console > **Coverage** report for any crawl errors on new pages
- Check **Performance** report to see which pages are getting impressions/clicks
- Monitor GBP for new reviews (respond within 48 hours)
- Check **Page Experience** report for any CWV regressions
