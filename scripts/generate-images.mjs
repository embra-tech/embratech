/**
 * generate-images.mjs
 *
 * Pre-builds static AVIF / WebP / JPEG files at custom breakpoints using Sharp.
 * Run with: node scripts/generate-images.mjs
 *
 * Output: public/images/optimized/<name>-<width>.<ext>
 *
 * Breakpoints:
 *   Portfolio screenshots: 480w, 720w, 960w
 *     (SiteCard renders at max 480px wide; 720 & 960 for larger viewports)
 *   Avatars: 48w, 96w
 *     (rendered at 48px; 96px for 2x HiDPI displays)
 */

import sharp from 'sharp';
import { mkdirSync, writeFileSync } from 'node:fs';
import { resolve, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const ROOT = resolve(__dirname, '..');

const OUTPUT_DIR = join(ROOT, 'public', 'images', 'optimized');
mkdirSync(OUTPUT_DIR, { recursive: true });

// ── Image definitions ─────────────────────────────────────────────────────────

const PORTFOLIO_IMAGES = [
  { name: 'tuxford',            src: 'tuxford.webp' },
  { name: 'vvasquez',           src: 'vvasquez.webp' },
  { name: 'alaskahandyman',     src: 'alaskahandyman.webp' },
  { name: 'bestbreaks',         src: 'bestbreaks.webp' },
  { name: 'skyhightreeservice', src: 'skyhightreeservice.webp' },
];

const AVATAR_IMAGES = [
  { name: 'carlos', src: 'avatars/carlos.jpg' },
  { name: 'victor', src: 'avatars/victor.jpg' },
  { name: 'dan',    src: 'avatars/dan.jpg' },
];

const PORTFOLIO_WIDTHS = [480, 720, 960];
const AVATAR_WIDTHS    = [48, 96];

// ── Sharp quality settings ────────────────────────────────────────────────────

const AVIF_OPTIONS  = { quality: 62, effort: 6 };
const WEBP_OPTIONS  = { quality: 78, effort: 6 };
const JPEG_OPTIONS  = { quality: 82, progressive: true };

// ── Generation helpers ────────────────────────────────────────────────────────

async function generate(srcPath, name, width, isAvatar = false) {
  const src = join(ROOT, 'public', 'images', srcPath);
  const base = sharp(src).resize({ width, withoutEnlargement: true });

  const avifOut  = join(OUTPUT_DIR, `${name}-${width}.avif`);
  const webpOut  = join(OUTPUT_DIR, `${name}-${width}.webp`);
  const jpegOut  = join(OUTPUT_DIR, `${name}-${width}.jpg`);

  await Promise.all([
    base.clone().avif(AVIF_OPTIONS).toFile(avifOut),
    base.clone().webp(WEBP_OPTIONS).toFile(webpOut),
    base.clone().jpeg(JPEG_OPTIONS).toFile(jpegOut),
  ]);

  return { name, width, avif: avifOut, webp: webpOut, jpeg: jpegOut };
}

// ── Run ───────────────────────────────────────────────────────────────────────

console.log('📸  Generating static image files...\n');

const manifest = { portfolio: {}, avatars: {} };
const tasks = [];

for (const img of PORTFOLIO_IMAGES) {
  manifest.portfolio[img.name] = { widths: PORTFOLIO_WIDTHS };
  for (const w of PORTFOLIO_WIDTHS) {
    tasks.push({ img, w, type: 'portfolio' });
  }
}
for (const img of AVATAR_IMAGES) {
  manifest.avatars[img.name] = { widths: AVATAR_WIDTHS };
  for (const w of AVATAR_WIDTHS) {
    tasks.push({ img, w, type: 'avatar' });
  }
}

let done = 0;
const total = tasks.length * 3; // 3 formats each

for (const { img, w, type } of tasks) {
  try {
    const result = await generate(img.src, img.name, w, type === 'avatar');
    done += 3;
    const pct = Math.round((done / total) * 100);
    console.log(`  ✓ ${img.name}-${w} [avif|webp|jpg] (${pct}%)`);
  } catch (err) {
    console.error(`  ✗ ${img.name}-${w}: ${err.message}`);
  }
}

// Write manifest
writeFileSync(join(OUTPUT_DIR, 'manifest.json'), JSON.stringify(manifest, null, 2));

console.log(`\n✅  Done — ${done / 3} image sets generated in public/images/optimized/`);
console.log(`📄  Manifest written to public/images/optimized/manifest.json\n`);
