# Indexing Fix & Cleanup: 2026-10-01

## Summary

Google Search Console's live test returned **"Page fetch: Failed: Not found (404)"** for every URL. Normal visitors saw the site fine.

**Root cause:** `middleware.js` rewrote every request from a search engine or audit tool to `/api/__bot`. That covered Googlebot, Google-InspectionTool, Bingbot, Yandex, Baidu, Lighthouse and PageSpeed. But in the Next.js App Router, folders whose names start with `_` are private and are never turned into routes, so `/api/__bot` never existed. The last build's `.next/server/app-paths-manifest.json` lists `/api/lead` and `/api/track` but no `__bot`. So every crawler received a 404, and nothing could be indexed. The rewrite shipped in commit `751f511` ("bot-optimized edge serving", 21 Sep 2026).

Making that route work would have been worse:

- It sent `noindex` on every page.
- It served different titles and H1s from the real pages, which Google treats as cloaking.
- It returned the homepage for every unknown path.

**Fix:** remove the rewrite. Crawlers now receive exactly the same server-rendered HTML as visitors.

**Front end:** nothing visitors see has changed. The one front-end file touched (`components/Hero.jsx`) only changed in its failure path; see change 4 below.

---

## Changes

| # | File | Change | Visible to visitors? |
|---|------|--------|----------------------|
| 1 | `middleware.js` | Removed the crawler rewrite. The session cookie logic is unchanged, except that it now has `secure: true` in production. | No. Visitors already went through this exact path. |
| 2 | `app/api/__bot/` | **Removed** (moved to backup). The broken bot-HTML route. | No. It was never routable. |
| 3 | `public/robots.txt` | Removed `Disallow: /__bot/` (it pointed at a route that no longer exists). | No |
| 4 | `components/Hero.jsx` | Safety net for **technical failures only**: if the WebGL import or setup throws, or the 3D scene still hasn't been created after 10s, the headline, subtitle and CTAs are revealed. The normal sequence is untouched: orb intro first, then the text. | Only when WebGL fails or never loads, where the hero previously stayed empty forever. |
| 5 | `lib/site-config.js` | `logo: '/logo.svg'` → `'/images/logo.png'`. `/logo.svg` doesn't exist. This value is used only in JSON-LD (Organization and publisher logo); I checked 10 live pages and none render it as an image. | No |
| 6 | `app/layout.jsx` | The `twitter:site` and `twitter:creator` meta tags now output `@embratech` instead of `/embratech`. | No (head metadata only) |
| 7 | `app/page.jsx` | Removed the `SearchAction` from the WebSite JSON-LD. Google retired the sitelinks search box, and `/blog?q=` never searched anything. | No |
| 8 | `app/api/lead/route.js` | Hardening: 20 KB body cap; rejects invalid or non-object JSON; drops honeypot submissions (`_gotcha` filled) without logging them; caps fields at 20 and values at 5,000 characters; reserved keys can't be overwritten. Every field the form sends is still recorded, and the success response is identical. | No. The form doesn't read this response. |
| 9 | `next.config.mjs` | `X-Frame-Options: SAMEORIGIN` → `DENY`, to match the existing CSP `frame-ancestors 'none'`, which browsers already enforce. | No |
| 10 | `.gitignore` | Added `_backup/` so the local backups are never committed or deployed. | No |
| 11 | `README.md` | Rewritten to match the current project. The old one described 5 themes and 4 service cards. | No |
| 12 | Root clutter | **Removed** (moved to backup): `fix_contact3.cjs`, `walkthrough.md`, `run-lighthouse.js`, `lighthouse-baseline.json`. None of them is imported or used by `package.json` scripts. | No |

### Verification done before handover

- New `middleware.js` and `app/api/lead/route.js` were executed against a mocked `next/server`. 22/22 checks passed:
  - Googlebot, Inspection Tool, Bingbot and Lighthouse requests all pass straight through.
  - The session cookie behaves as before.
  - The matcher scope is unchanged.
  - All real form fields are still logged; honeypot submissions, oversized bodies and invalid bodies are handled.
- `components/Hero.jsx`, the `layout.jsx` change, `middleware.js` and `route.js` pass a TypeScript/JSX syntax check.
- The hero reveal logic was simulated across normal, slow-but-successful, WebGL-failure, stalled-chunk and early-unmount cases. The normal sequence is unchanged (orb at about 0.3s, text at about 4s).
- Every backup of an edited file matches the original byte count, except `.gitignore` (see the revert notes below).

---

## Backup

Everything removed or edited is in **`_backup/2026-10-01-indexing-fix/`** (git-ignored, local only):

```
_backup/2026-10-01-indexing-fix/
├── removed/
│   ├── app/api/__bot/route.js
│   ├── fix_contact3.cjs
│   ├── walkthrough.md
│   ├── run-lighthouse.js
│   └── lighthouse-baseline.json
└── edited-originals/
    ├── middleware.js              (moved, byte-exact original)
    ├── public/robots.txt          (moved, byte-exact original)
    ├── app/api/lead/route.js      (moved, byte-exact original)
    ├── README.md                  (moved, byte-exact original)
    ├── components/Hero.jsx        (copy, verified same size)
    ├── lib/site-config.js         (copy, verified same size)
    ├── app/layout.jsx             (copy, verified same size)
    ├── app/page.jsx               (copy, verified same size)
    ├── next.config.mjs            (copy, verified same size)
    └── .gitignore                 (copy; may differ from the original by one line-ending byte)
```

The same originals are also in git at commit **`e8d3b1a`**, the last commit before these changes.

---

## How to revert

> ⚠️ Reverting #1 or #2 brings back the 404s for every search engine.

**Everything at once (after you've committed this change):**

```
git revert <commit-hash-of-this-change>
git push
```

**One file, from the backup** (PowerShell, run from the project root):

```
Copy-Item "_backup\2026-10-01-indexing-fix\edited-originals\components\Hero.jsx" "components\Hero.jsx" -Force
```

Swap in any other path from the tree above. To restore a removed file:

```
Copy-Item "_backup\2026-10-01-indexing-fix\removed\walkthrough.md" "walkthrough.md"
Copy-Item "_backup\2026-10-01-indexing-fix\removed\app\api\__bot" "app\api\__bot" -Recurse
```

**One file, from git:**

```
git checkout e8d3b1a -- components/Hero.jsx
```

**`.gitignore` only:** delete the last three lines (the blank line, the `# Local-only backups…` comment and `_backup/`).

---

## How to deploy (front end stays exactly as it is live today)

Your working copy also contains **uncommitted edits that are not live**. For example, `components/Showcase.jsx` and `app/blog/[slug]/page.jsx` were modified after the last commit. That's why the live homepage still shows "+280.4%" and the local code doesn't. **Do not run `git add .`** Stage only the paths below:

```
git status

git add middleware.js public/robots.txt app/api/lead/route.js components/Hero.jsx lib/site-config.js app/layout.jsx app/page.jsx next.config.mjs .gitignore README.md INDEXING_FIX_CHANGELOG.md

git rm -r --cached --ignore-unmatch app/api/__bot fix_contact3.cjs walkthrough.md run-lighthouse.js lighthouse-baseline.json

git diff --cached --stat
git diff --cached
```

The `git diff --cached` output should show only the changes in the table above. If you see anything else, unstage it with `git restore --staged <file>`.

Optional local build check (this builds your whole working copy, including the unshipped edits; Vercel builds only what you commit):

```
npm run build
```

Then commit and push:

```
git commit -m "fix(seo): stop returning 404 to search engine crawlers; cleanup and backups"
git push
```

In Vercel → Deployments, confirm the new commit built successfully and is marked **Production**.

---

## After deploy: get indexed

1. **Check what Googlebot gets** (PowerShell; use `curl.exe`, because plain `curl` is an alias for something else in PowerShell). The expected result is `HTTP/1.1 200`; before the fix it was 404.
   ```
   curl.exe -sI -A "Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)" https://www.embratechnologies.org/
   ```
2. **Search Console, URL Inspection:** test the **`https://www.` URLs** (the canonical host; non-www redirects to it). A Domain property covers both. Don't test `/#testimonials`: Google ignores everything after `#`, so it's the homepage. Click **Test live URL**; it should say "URL is available to Google".
3. **Request indexing** (the daily quota is small), in this order: `/`, `/services`, `/pricing`, `/portfolio`, `/services/care-plan`, `/contact`, then the case studies, location pages and blog posts.
4. **Sitemaps:** resubmit `https://www.embratechnologies.org/sitemap.xml`.
5. **Pages report:** open the "Not found (404)" reason and click **Validate fix**.
6. **Bing Webmaster Tools:** Bingbot was blocked too. Submit the sitemap there and use URL Inspection. This also covers DuckDuckGo, Yahoo and AI assistants that search via Bing.
7. **If the live test still fails after deploying:**
   - In Vercel → Deployments, confirm Production is the new commit.
   - In Vercel → Firewall, make sure Bot Protection or Attack Challenge Mode isn't challenging verified crawlers.
8. **Expected and harmless:** `/locations/brooklyn` will show as a 404 because the footer links to it but no page exists. It doesn't affect other pages; see "Deliberately not changed".

Recovery usually starts within days of recrawling, and full recovery can take a few weeks. Google doesn't guarantee that rankings return exactly to where they were.

---

## Deliberately not changed (each would alter the front end or needs your decision)

- **Client-side "bot" checks** in `Hero.jsx`, `useReveal.js`, `Showcase.jsx` and `ThreeCanvas.jsx`. They skip animations for crawlers and audit tools but show the same content, so this isn't cloaking. Left as is.
- **Broken footer link** to `/locations/brooklyn`. Fixing it needs a new page or a footer change.
- **Unverified performance claims and testimonials.** `siteConfig.proof.traffic280` is `false`, but "+280%", "+190%", "+215%" and "3.4×" are hardcoded in `FeaturedWork.jsx`, the case studies, the location pages and the meta descriptions. Performance claims in ads need evidence (FTC); confirm the testimonials are real and permissioned.
- **Privacy policy text.** It says Axiom data is anonymised, but `/api/track` stores IP, city, user agent and session ID, and `/api/lead` stores contact details. It also mentions Google Analytics 4, which isn't installed, leaves out the phone field, and the session cookie is set before the banner appears.
- **Blog post schema author fallback** ("Lead Technical Architect") in `app/blog/[slug]/page.jsx`. That file has your uncommitted edits, so it was left alone. Fill in `siteConfig.author` instead.
- **CSP `'unsafe-eval'`.** It's probably safe to remove in production, but test it on a Vercel preview deployment first.
- **Performance:**
  - The homepage creates six WebGL contexts.
  - 88 KB of global CSS loads on every page.
  - There are 15 font weights across three font families.
  - The OG image is 576 KB.
  - Real-user hero LCP is about 4s because the headline waits for the orb intro.
- **Your uncommitted local edits:** untouched.
- **`.next-build/`:** a stale local build folder (git-ignored). It's safe to delete whenever you like.
