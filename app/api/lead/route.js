import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const body = await request.json();

    // 1. Log directly to Axiom to guarantee a persistent record
    const axiomToken = process.env.AXIOM_TOKEN;
    const axiomDataset = process.env.AXIOM_DATASET;

    if (axiomToken && axiomDataset) {
      const logData = [{
        type: 'inbound_lead',
        ...body,
        timestamp: new Date().toISOString()
      }];

      await fetch(`https://api.axiom.co/v1/datasets/${axiomDataset}/ingest`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${axiomToken}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(logData)
      }).catch(err => console.error('Axiom Lead Logging Error:', err));
    } else {
      // Fallback to standard Vercel logs if Axiom env vars are missing
      console.log('NEW LEAD SUBMISSION:', JSON.stringify(body));
    }

    // 2. Return success to the client
    return NextResponse.json({ success: true, message: 'Lead recorded securely.' }, { status: 200 });

  } catch (error) {
    console.error('Lead processing error:', error);
    return NextResponse.json({ success: false, error: 'Failed to process lead.' }, { status: 500 });
  }
}
