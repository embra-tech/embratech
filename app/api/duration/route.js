import { NextResponse } from 'next/server';
import { UAParser } from 'ua-parser-js';

export async function POST(request) {
  try {
    const bodyText = await request.text();
    let body;
    try {
      body = JSON.parse(bodyText);
    } catch(e) {
      return NextResponse.json({ success: false }, { status: 400 });
    }

    const { session_id, path, elapsed_ms } = body;
    if (!session_id || !path || elapsed_ms == null) {
      return NextResponse.json({ success: false }, { status: 400 });
    }

    // Get basic info to maintain schema
    const ip = request.headers.get('x-forwarded-for') || 'Unknown';
    const country = request.headers.get('x-vercel-ip-country') || 'Unknown';
    const city = request.headers.get('x-vercel-ip-city') || 'Unknown';
    const rawUserAgent = request.headers.get('user-agent') || '';
    
    const parser = new UAParser(rawUserAgent);
    const browser = parser.getBrowser();
    const os = parser.getOS();
    const device = parser.getDevice();
    
    let deviceType = 'unknown';
    if (device.type === 'mobile') deviceType = 'mobile';
    else if (device.type === 'tablet') deviceType = 'tablet';
    else if (!device.type) deviceType = 'desktop';

    const logData = [{
      type: 'visitor_tracking', // maintain old schema structure
      event_type: 'page_duration',
      session_id,
      path,
      duration_ms: elapsed_ms,
      ip_address: ip,
      country,
      city,
      user_agent: rawUserAgent,
      browser_name: browser.name || 'unknown',
      browser_version: browser.version || 'unknown',
      os_name: os.name || 'unknown',
      os_version: os.version || 'unknown',
      device_type: deviceType,
      is_bot: false,
      timestamp: new Date().toISOString()
    }];

    const axiomToken = process.env.AXIOM_TOKEN;
    const axiomDataset = process.env.AXIOM_DATASET;

    if (axiomToken && axiomDataset) {
      await fetch(`https://api.axiom.co/v1/datasets/${axiomDataset}/ingest`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${axiomToken}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(logData)
      });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
