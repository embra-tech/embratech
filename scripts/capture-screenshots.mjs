/**
 * capture-screenshots.mjs  (2026-11-06)
 *
 * Saves a desktop screenshot (1440x900) of each new portfolio site into public/images/<name>.jpg.
 * scripts/generate-images.mjs then builds the optimized AVIF/WebP/JPEG versions at build time.
 *
 * Run once (and again only to refresh a screenshot):
 *   node scripts/capture-screenshots.mjs
 *
 * Uses Microlink's free screenshot API (no key needed for a few requests a day), with thum.io as a fallback.
 * Only public homepages are captured; nothing is sent except the site address.
 */
import { writeFileSync } from 'node:fs';
import { join, resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const OUT = join(ROOT, 'public', 'images');

const SITES = [
  { name: 'jcplawn', url: 'https://www.jcplawnservicecalifornia.com/' },
  { name: 'alaskahandymanservices', url: 'https://www.alaskahandymanservices.com/' },
  { name: 'royalcare', url: 'https://www.royalcareathome.com/' },
];

const sources = (url) => [
  `https://api.microlink.io/?url=${encodeURIComponent(url)}&screenshot=true&meta=false&embed=screenshot.url&viewport.width=1440&viewport.height=900&screenshot.type=jpeg&waitForTimeout=4000`,
  `https://image.thum.io/get/width/1440/crop/900/noanimate/${url}`,
];

for (const s of SITES) {
  let saved = false;
  for (const src of sources(s.url)) {
    try {
      const res = await fetch(src, { redirect: 'follow' });
      const type = res.headers.get('content-type') || '';
      if (!res.ok || !type.startsWith('image/')) throw new Error(`${res.status} ${type}`);
      const buf = Buffer.from(await res.arrayBuffer());
      if (buf.length < 20000) throw new Error(`image too small (${buf.length} bytes), probably an error page`);
      writeFileSync(join(OUT, `${s.name}.jpg`), buf);
      console.log(`  ok ${s.name}.jpg  ${(buf.length / 1024).toFixed(0)} KB  from ${new URL(src).hostname}`);
      saved = true;
      break;
    } catch (e) {
      console.warn(`  .. ${s.name}: ${new URL(src).hostname} failed (${e.message}), trying next source`);
    }
  }
  if (!saved) console.error(`  x ${s.name}: no screenshot saved. Add a 1440x900 JPG at public/images/${s.name}.jpg manually.`);
}
console.log('\nDone. Run npm run build to create the optimized versions.');
