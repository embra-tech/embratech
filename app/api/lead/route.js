import { NextResponse } from 'next/server';

// ── Abuse limits ────────────────────────────────────────────────
// The contact form fires this endpoint in parallel with FormSubmit and does
// not read the response, so these limits never affect what visitors see.
// They only stop junk/oversized payloads from flooding the Axiom dataset.
const MAX_BODY_CHARS = 20_000;
const MAX_FIELDS = 20;
const MAX_KEY_LENGTH = 64;
const MAX_VALUE_LENGTH = 5_000;
const RESERVED_KEYS = new Set(['type', 'session_id', 'timestamp']);

// Keep only flat primitive fields, with capped sizes. Field names are not
// whitelisted so every field the form sends today is still recorded.
function sanitizeLead(body) {
  const clean = {};
  for (const [key, value] of Object.entries(body).slice(0, MAX_FIELDS)) {
    if (key === '_gotcha' || RESERVED_KEYS.has(key) || key.length > MAX_KEY_LENGTH) continue;
    if (typeof value === 'string') {
      clean[key] = value.slice(0, MAX_VALUE_LENGTH);
    } else if (typeof value === 'boolean' || (typeof value === 'number' && Number.isFinite(value))) {
      clean[key] = value;
    }
  }
  return clean;
}

export async function POST(request) {
  try {
    const raw = await request.text();
    if (raw.length > MAX_BODY_CHARS) {
      return NextResponse.json({ success: false, error: 'Payload too large.' }, { status: 413 });
    }

    let body;
    try {
      body = JSON.parse(raw);
    } catch (e) {
      return NextResponse.json({ success: false, error: 'Invalid JSON.' }, { status: 400 });
    }
    if (!body || typeof body !== 'object' || Array.isArray(body)) {
      return NextResponse.json({ success: false, error: 'Invalid payload.' }, { status: 400 });
    }

    // Honeypot: real visitors never fill _gotcha. Reply as if it worked so
    // bots get no signal, but record nothing.
    if (typeof body._gotcha === 'string' && body._gotcha.trim() !== '') {
      return NextResponse.json({ success: true, message: 'Lead recorded securely.' }, { status: 200 });
    }

    const lead = sanitizeLead(body);

    // 1. Log directly to Axiom to guarantee a persistent record
    const axiomToken = process.env.AXIOM_TOKEN;
    const axiomDataset = process.env.AXIOM_DATASET;

    let session_id = null;
    try {
      const cookie = request.cookies.get('embra_session')?.value;
      if (cookie) session_id = JSON.parse(cookie).id;
    } catch (e) {}

    if (axiomToken && axiomDataset) {
      const logData = [{
        ...lead,
        type: 'inbound_lead',
        session_id,
        timestamp: new Date().toISOString(),
      }];

      await fetch(`https://api.axiom.co/v1/datasets/${axiomDataset}/ingest`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${axiomToken}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(logData),
      }).catch((err) => console.error('Axiom Lead Logging Error:', err));
    } else {
      // Fallback to standard Vercel logs if Axiom env vars are missing
      console.log('NEW LEAD SUBMISSION:', JSON.stringify(lead));
    }

    // 2. Return success to the client
    return NextResponse.json({ success: true, message: 'Lead recorded securely.' }, { status: 200 });

  } catch (error) {
    console.error('Lead processing error:', error);
    return NextResponse.json({ success: false, error: 'Failed to process lead.' }, { status: 500 });
  }
}
