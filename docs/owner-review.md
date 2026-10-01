# Owner Review Required

Items that need the site owner to provide information, verify facts, or take external actions before the agent can implement them.

---

## Open Items

### OWN-01 — Tuxford Collision: Confirm "service-area pages" claim
**File:** `app/locations/[city]/LocationClient.jsx`, line ~24 and `app/niches/auto-body-shop-website-design/page.jsx`
**Issue:** The Tuxford Collision case study copy states "service-area pages" were built for them. Please confirm this is accurate before keeping this claim in the live copy.
**Action:** Reply with confirm/deny. If denied, the copy will be updated to remove the reference to service-area pages.

### OWN-02 — Author Bio for Blog Posts
**File:** `lib/site-config.js` — all `author.*` fields are `TODO_OWNER`
**Issue:** Blog posts use a placeholder author name. The author schema currently points to /about until real data is provided.
**Action:** Provide: author name, role/title, short bio (2–3 sentences), and optionally a headshot image path. Then an /about/[author] page can be created.

### OWN-03 — "needs proof screenshots" — BestBreaks case study
**Issue:** BestBreaks (0.41s TTFB, 96/100 PageSpeed) needs supporting screenshots to strengthen E-E-A-T credibility.
**Action:** Add before/after screenshots or PageSpeed report screenshots to the case study. These can be linked or embedded when available.

### OWN-04 — Google Business Profile
**Action:** Ensure Google Business Profile is claimed and verified at the address: 1969 51st St, Brooklyn, NY 11204. NAP must match site-config exactly.

### OWN-05 — Search Console Sitemap Resubmission
**Action:** After each new deployment with new routes, resubmit `https://www.embratechnologies.org/sitemap.xml` in Google Search Console and click "Request Indexing" for key pages: /, /services, /pricing, /portfolio, /blog, /contact, /about, /locations/brooklyn.

### OWN-06 — Client Footer Credit Links
**Action:** Ask existing clients (Tuxford, V Vasquez, Alaska Fast Fix, Sky High, BestBreaks) to add a footer credit link pointing to `https://www.embratechnologies.org` with anchor text such as "Website by Embra Technologies", "Built by Embra", or "Web Design by Embra Technologies" (varied anchor text).

### OWN-07 — Directory Listings
**Action:** Create or claim listings on: Clutch.co, DesignRush, GoodFirms. Ensure the business description matches `siteConfig.description` exactly.

### OWN-08 — V Vasquez Location
**Issue:** The portfolio entry for V Vasquez Handyman LLC previously said "United States" as location. It has been updated to "Merced, CA" and services updated to "lawn care, concrete and irrigation." Please confirm this is accurate.
