/**
 * fetch-pexels.mjs  (2026-10-26)
 *
 * Downloads a small set of relevant Pexels photos into public/images/stock/ so they are served from
 * our own site and optimized by scripts/generate-images.mjs (AVIF/WebP/JPEG at 480/720/960).
 * Also writes lib/stock-credits.json (photographer credits shown under each photo).
 *
 * Run once (and again only to change photos):
 *   1. Put the key in .env.local (never commit it):   PEXELS_API_KEY=your_key_here
 *   2. node scripts/fetch-pexels.mjs
 *
 * Pexels license: free for commercial use; credit is appreciated and shown on the site.
 */
import { mkdirSync, writeFileSync, readFileSync, existsSync } from 'node:fs';
import { join, resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const OUT_DIR = join(ROOT, 'public', 'images', 'stock');
const CREDITS = join(ROOT, 'lib', 'stock-credits.json');
mkdirSync(OUT_DIR, { recursive: true });

// Read the key from the environment or .env.local (simple parser, no extra packages).
function loadKey() {
  if (process.env.PEXELS_API_KEY) return process.env.PEXELS_API_KEY.trim();
  const envFile = join(ROOT, '.env.local');
  if (existsSync(envFile)) {
    const line = readFileSync(envFile, 'utf8').split(/\r?\n/).find((l) => l.startsWith('PEXELS_API_KEY='));
    if (line) return line.slice('PEXELS_API_KEY='.length).trim().replace(/^["']|["']$/g, '');
  }
  return '';
}
const KEY = loadKey();
if (!KEY) {
  console.error('Missing PEXELS_API_KEY. Add it to .env.local (see the comment at the top of this file).');
  process.exit(1);
}

// One photo per trade or service. The first landscape result whose description contains one of the
// keywords is used, so a "plumber" photo really shows plumbing work.
const PHOTOS = [
  { name: 'stock-plumber',     query: 'plumber repairing pipe under sink', keywords: ['plumb', 'pipe', 'sink', 'faucet', 'wrench'] },
  { name: 'stock-hvac',        query: 'hvac technician air conditioner repair', keywords: ['air condition', 'hvac', 'technician', 'conditioner', 'ventilation'] },
  { name: 'stock-roofing',     query: 'roofer installing roof shingles', keywords: ['roof', 'shingle'] },
  { name: 'stock-tree',        query: 'arborist cutting tree chainsaw', keywords: ['tree', 'arborist', 'chainsaw', 'branch', 'log'] },
  { name: 'stock-handyman',    query: 'handyman repairing with tools', keywords: ['handyman', 'repair', 'tool', 'drill', 'carpent', 'fix'] },
  { name: 'stock-landscaping', query: 'person mowing lawn push mower backyard', keywords: ['lawn', 'mow', 'yard', 'grass'], exclude: ['golf', 'stadium', 'field'] },
  { name: 'stock-autobody',    query: 'auto body repair car paint shop', keywords: ['car', 'auto', 'mechanic', 'vehicle', 'garage', 'paint'] },
  { name: 'stock-webdesign',   query: 'small business owner using laptop', keywords: ['laptop', 'computer', 'work', 'business'] },
  { name: 'stock-localseo',    query: 'hand holding smartphone map navigation', keywords: ['map', 'navigation', 'location', 'gps'], exclude: ['tiktok', 'game', 'selfie', 'social media'] },
  { name: 'stock-growth',      query: 'business growth chart on laptop', keywords: ['chart', 'graph', 'analytic', 'growth', 'data'] },
  { name: 'stock-integrations', query: 'small business owner using laptop and smartphone', keywords: ['laptop', 'smartphone', 'phone', 'tablet', 'payment'], exclude: ['tiktok', 'game', 'selfie', 'social media'] },
];

// Reviewed 2026-10-26: approved photos are pinned by id so re-running never swaps them. Rejected first picks:
// handyman (was an auto mechanic), landscaping (was a golf course), local SEO (was a TikTok app search).
const OVERRIDES = {
  'stock-plumber': 6419128,
  'stock-hvac': 7347538,
  'stock-roofing': 33404248,
  'stock-tree': 31127615,
  'stock-handyman': 7285924,      // handyman using a drill on a wooden plank indoors (landscape, reviewed)
  'stock-landscaping': 37554739,  // lawn mower on a backyard lawn (landscape, reviewed; #6728930 was portrait)
  'stock-autobody': 14615263,
  'stock-webdesign': 7309483,
  'stock-growth': 3861957,
  'stock-localseo': 5448160,      // hands navigating on a smartphone GPS app (landscape, reviewed)
  'stock-integrations': 13801799, // person using a laptop and smartphone together (landscape, reviewed)
};

const api = async (path) => {
  const res = await fetch(`https://api.pexels.com/v1/${path}`, { headers: { Authorization: KEY } });
  if (!res.ok) throw new Error(`Pexels API ${res.status} for ${path}`);
  return res.json();
};

async function pick(p) {
  if (OVERRIDES[p.name]) return api(`photos/${OVERRIDES[p.name]}`);
  const data = await api(`search?query=${encodeURIComponent(p.query)}&orientation=landscape&size=large&per_page=20`);
  const photos = (data.photos || []).filter((ph) => !(p.exclude || []).some((x) => (ph.alt || '').toLowerCase().includes(x)));
  const match = photos.find((ph) => p.keywords.some((k) => (ph.alt || '').toLowerCase().includes(k)));
  return match || photos[0];
}

const credits = existsSync(CREDITS) ? JSON.parse(readFileSync(CREDITS, 'utf8')) : {};
for (const p of PHOTOS) {
  try {
    const ph = await pick(p);
    if (!ph) { console.error(`  x ${p.name}: no results`); continue; }
    const img = await fetch(ph.src.large2x || ph.src.large);
    if (!img.ok) throw new Error(`download ${img.status}`);
    writeFileSync(join(OUT_DIR, `${p.name}.jpg`), Buffer.from(await img.arrayBuffer()));
    const photographer = /^https?:\/\//.test(ph.photographer || '') ? ph.photographer.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '') : ph.photographer;
    credits[p.name] = { id: ph.id, photographer, photographerUrl: ph.photographer_url, pexelsUrl: ph.url, alt: ph.alt || '', width: ph.width, height: ph.height };
    console.log(`  ok ${p.name}: #${ph.id} by ${photographer} | ${ph.width}x${ph.height} | ${ph.alt}`);
  } catch (e) {
    console.error(`  x ${p.name}: ${e.message}`);
  }
}
writeFileSync(CREDITS, JSON.stringify(credits, null, 2));
console.log('\nSaved photos to public/images/stock/ and credits to lib/stock-credits.json');
