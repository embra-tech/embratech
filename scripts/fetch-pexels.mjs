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
  // 2026-11-08: hero backgrounds for inner pages (to review before publishing)
  { name: 'hero-services', query: 'contractor showing homeowner plans on tablet', keywords: ['contractor', 'homeowner', 'tablet', 'worker', 'plan'] },
  { name: 'hero-pricing', query: 'contractor shaking hands with homeowner', keywords: ['handshake', 'shaking hands', 'agreement', 'deal'] },
  { name: 'hero-portfolio', query: 'website design on laptop screen', keywords: ['website', 'laptop', 'screen', 'design'] },
  { name: 'hero-blog', query: 'notebook laptop coffee desk writing', keywords: ['notebook', 'laptop', 'desk', 'writing'] },
  { name: 'hero-about', query: 'small business team meeting with laptop', keywords: ['team', 'meeting', 'colleagues', 'office'] },
  { name: 'hero-contact', query: 'person talking on phone at desk', keywords: ['phone', 'call', 'talking'] },
  { name: 'hero-industries', query: 'tradesman tools workshop', keywords: ['tools', 'workshop', 'tradesman', 'construction', 'carpenter'] },
  { name: 'hero-los-angeles', query: 'Los Angeles skyline', keywords: ['los angeles', 'california', 'downtown'] },
  { name: 'hero-chicago', query: 'Chicago skyline', keywords: ['chicago'] },
  { name: 'hero-alaska', query: 'Alaska mountains landscape', keywords: ['alaska'] },
  { name: 'hero-anchorage', query: 'Anchorage Alaska', keywords: ['anchorage'] },
  { name: 'hero-fairbanks', query: 'Fairbanks Alaska winter', keywords: ['fairbanks', 'alaska', 'northern lights', 'aurora'] },
  { name: 'hero-juneau', query: 'Juneau Alaska', keywords: ['juneau'] },
  { name: 'hero-denver', query: 'Denver skyline mountains', keywords: ['denver', 'colorado'] },
  { name: 'hero-spokane', query: 'Spokane Washington', keywords: ['spokane'] },
  { name: 'hero-phoenix', query: 'Phoenix Arizona skyline', keywords: ['phoenix', 'arizona'] },
  { name: 'hero-brooklyn', query: 'Brooklyn brownstones street', keywords: ['brooklyn', 'brownstone', 'new york'] },
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
  // Hero backgrounds, reviewed 2026-11-08 (descriptions checked; all landscape 3:2)
  'hero-services': 6474469,      // contractor in hard hat with tablet on a job site
  'hero-pricing': 7964468,       // handshake
  'hero-portfolio': 1181449,     // person working on a laptop with a webpage open
  'hero-blog': 7320516,          // laptop, notebook and coffee
  'hero-about': 7652176,         // team meeting around a laptop
  'hero-contact': 5387286,       // phone call at a laptop
  'hero-industries': 634511,     // carpenter with a grinder in a workshop
  'hero-los-angeles': 35291216,  // downtown LA skyline at night
  'hero-chicago': 18916644,      // Chicago skyline with Willis Tower
  'hero-alaska': 13769372,       // snow-covered Alaskan mountains
  'hero-anchorage': 39381389,    // Anchorage street scene
  'hero-fairbanks': 16398144,    // Alaskan winter mountains with evergreens
  'hero-juneau': 38167951,       // Mendenhall Glacier, Juneau
  'hero-denver': 13633732,       // aerial Denver at dusk
  'hero-spokane': 27998518,      // Spokane Falls and bridge
  'hero-phoenix': 22764344,      // overlooking Phoenix at sunset
  'hero-brooklyn': 30726437,     // Brooklyn brownstones
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
// 2026-11-08: short background videos for 3 hero sections (desktop only, loaded after the page; see components/PageHeader.jsx).
// Reviewed and pinned by id. maxWidth keeps file sizes small (the local SEO clip was 9.9 MB at 1280px).
const VIDEOS = [
  { name: 'video-services', id: 8488109, maxWidth: 1280 },      // construction worker with a drill
  { name: 'video-integrations', id: 8937990, maxWidth: 1280 },  // card payment on a laptop (integrations page)
  { name: 'video-localseo', id: 33637800, maxWidth: 960 },      // aerial city lights at night
];
const VIDEO_DIR = join(ROOT, 'public', 'videos');
mkdirSync(VIDEO_DIR, { recursive: true });
for (const v of VIDEOS) {
  try {
    const res = await fetch(`https://api.pexels.com/videos/videos/${v.id}`, { headers: { Authorization: KEY } });
    if (!res.ok) throw new Error(`Pexels video API ${res.status}`);
    const pick = await res.json();
    const files = (pick.video_files || []).filter((f) => f.file_type === 'video/mp4' && f.width);
    const fit = files.filter((f) => f.width <= v.maxWidth).sort((a, b) => b.width - a.width);
    const file = fit[0] || files.sort((a, b) => a.width - b.width)[0];
    const vres = await fetch(file.link);
    if (!vres.ok) throw new Error(`download ${vres.status}`);
    const buf = Buffer.from(await vres.arrayBuffer());
    writeFileSync(join(VIDEO_DIR, `${v.name}.mp4`), buf);
    credits[v.name] = { id: pick.id, type: 'video', photographer: pick.user?.name || '', pexelsUrl: pick.url, width: file.width, height: file.height, duration: pick.duration, sizeKB: Math.round(buf.length / 1024) };
    console.log(`  ok ${v.name}: #${pick.id} ${file.width}x${file.height} ${pick.duration}s ${(buf.length / 1048576).toFixed(1)} MB`);
  } catch (e) {
    console.error(`  x ${v.name}: ${e.message}`);
  }
}
delete credits['video-webdesign']; // renamed to video-integrations

writeFileSync(CREDITS, JSON.stringify(credits, null, 2));
console.log('\nSaved photos to public/images/stock/ and credits to lib/stock-credits.json');
