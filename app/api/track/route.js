import { NextResponse } from 'next/server';
import { UAParser } from 'ua-parser-js';

// ── Bot detection ────────────────────────────────────────────────────────────
const BOT_UA_RE =
  /bot|crawler|spider|crawling|headless|curl|wget|python-requests|python-urllib|httpx|http\.client|aiohttp|node-fetch|axios|undici|go-http-client|java\/|okhttp|scrapy|slurp|baiduspider|yandexbot|sogou|exabot|facebot|ia_archiver|duckduckbot|bingbot|googlebot|google-inspectiontool|lighthouse|chrome-lighthouse|pagespeed|headlesschrome|ptst|gtmetrix|semrush|ahrefs|mj12bot|dotbot|petalbot|bytespider|applebot|360spider|screaming frog/i;

function detectBot(ua) {
  if (!ua || ua.length === 0) return { isBot: true, reason: 'empty-ua' };

  // URL in UA field (wp-admin scanner pattern)
  if (/^https?:\/\//i.test(ua)) return { isBot: true, reason: 'url-in-ua' };

  // UA regex match
  if (BOT_UA_RE.test(ua)) {
    const match = ua.match(BOT_UA_RE);
    return { isBot: true, reason: `ua-pattern:${match ? match[0].toLowerCase() : 'unknown'}` };
  }

  return { isBot: false, reason: null };
}

// ── Shared helpers ───────────────────────────────────────────────────────────
function cleanUA(raw) {
  let ua = raw || '';
  // Fix: "User-Agent:" prefix baked into the value
  if (ua.toLowerCase().startsWith('user-agent:')) {
    ua = ua.replace(/^user-agent:\s*/i, '').trim();
  }
  return ua;
}

function parseUA(ua) {
  const parser = new UAParser(ua);
  const browser = parser.getBrowser();
  const os = parser.getOS();
  const device = parser.getDevice();

  const { isBot, reason } = detectBot(ua);

  let deviceType = 'unknown';
  if (isBot) {
    deviceType = 'bot';
  } else if (device.type === 'mobile') {
    deviceType = 'mobile';
  } else if (device.type === 'tablet') {
    deviceType = 'tablet';
  } else if (!device.type) {
    deviceType = 'desktop';
  }

  return {
    browser_name: browser.name || 'unknown',
    browser_version: browser.version || 'unknown',
    os_name: os.name || 'unknown',
    os_version: os.version || 'unknown',
    device_type: deviceType,
    is_bot: isBot,
    bot_reason: reason,
  };
}

function sendToAxiom(logData) {
  const axiomToken = process.env.AXIOM_TOKEN;
  const axiomDataset = process.env.AXIOM_DATASET;
  if (!axiomToken || !axiomDataset) return Promise.resolve();

  return fetch(`https://api.axiom.co/v1/datasets/${axiomDataset}/ingest`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${axiomToken}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(logData),
  }).catch((err) => console.error('Axiom Error:', err));
}

// ── Asset path filter ────────────────────────────────────────────────────────
const ASSET_RE = /^\/(_next\/|api\/|images\/|favicon\.|.*\.(svg|png|jpg|jpeg|webp|avif|ico|css|js|map|woff2?|ttf|eot)$)/i;
const SKIP_PATHS = new Set(['/robots.txt', '/sitemap.xml']);

function isAssetPath(path) {
  return ASSET_RE.test(path) || SKIP_PATHS.has(path);
}

// ── Route handler ────────────────────────────────────────────────────────────
export async function POST(request) {
  try {
    const body = await request.json();

    const rawUA = cleanUA(request.headers.get('user-agent'));
    const ip = request.headers.get('x-forwarded-for') || 'Unknown';
    const country = request.headers.get('x-vercel-ip-country') || 'Unknown';
    const city = request.headers.get('x-vercel-ip-city') || 'Unknown';
    const uaParsed = parseUA(rawUA);

    // Accept batched events
    const events = Array.isArray(body) ? body : [body];
    const logData = [];

    for (const evt of events) {
      const { event_type, session_id, path, nav_sequence, referrer_path, duration_ms } = evt;

      if (!event_type || !session_id) continue;
      if (path && isAssetPath(path)) continue;

      const record = {
        type: 'visitor_tracking',
        event_type,
        session_id,
        path: path || null,
        nav_sequence: typeof nav_sequence === 'number' ? nav_sequence : null,
        referrer_path: referrer_path || null,
        ip_address: ip,
        country,
        city,
        user_agent: rawUA,
        ...uaParsed,
        timestamp: new Date().toISOString(),
      };

      if (event_type === 'page_duration') {
        const ms = typeof duration_ms === 'number' ? duration_ms : null;
        if (ms === null || ms < 300 || ms > 1_800_000) continue; // <300ms or >30min → discard
        record.duration_ms = ms;
      }

      logData.push(record);
    }

    if (logData.length > 0) {
      await sendToAxiom(logData);
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('Track API Error:', error);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
