'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import siteConfig from '../lib/site-config';
import { CLIENTS, PROOF_ORDER, DEFAULT_PROOF, CITY_TZ, TZ_LABEL } from '../lib/proof';

// 2026-11-08: proof bar under the offer in every inner-page hero.
//   1. Real clients (most relevant first), each linking to its case study.
//   2. Phone, office hours (also converted to the visitor's time zone on city pages, after load) and the starting price.
// Plain text and links; nothing hidden; no review or rating claims.

// Hours offset between New York and a time zone, right now (handles daylight saving and Arizona).
function offsetFromEastern(tz) {
  const now = new Date();
  const hours = (zone) => {
    const p = new Intl.DateTimeFormat('en-US', { timeZone: zone, hourCycle: 'h23', day: 'numeric', hour: 'numeric', minute: 'numeric' }).formatToParts(now);
    const g = (t) => Number(p.find((x) => x.type === t)?.value || 0);
    return g('day') * 24 + g('hour') + g('minute') / 60;
  };
  let d = hours(tz) - hours('America/New_York');
  while (d > 12) d -= 24;
  while (d < -12) d += 24;
  return Math.round(d);
}
const fmt = (h) => `${((h + 11) % 12) + 1}${h < 12 ? 'am' : 'pm'}`;

export default function ProofBar({ pathname }) {
  const order = PROOF_ORDER[pathname] || DEFAULT_PROOF;
  const shown = order.filter((slug) => CLIENTS[slug]).slice(0, 3);
  const more = Object.keys(CLIENTS).length - shown.length;
  const tz = CITY_TZ[pathname];
  // Local-time hours are added after load, so the pre-built HTML never mismatches around daylight-saving changes.
  const [local, setLocal] = useState('');
  useEffect(() => {
    if (!tz) return;
    try {
      const d = offsetFromEastern(tz);
      setLocal(` (${fmt(9 + d)}\u2013${fmt(18 + d)} ${TZ_LABEL[tz]})`);
    } catch (e) { /* keep Eastern hours only */ }
  }, [tz]);

  return (
    <div className="proof-bar">
      <div className="proof-row">
        <span className="proof-label">Recent clients</span>
        {shown.map((slug) => (
          <Link key={slug} href={`/portfolio/${slug}`} className="proof-chip">
            <span className="proof-dot" aria-hidden="true" />
            {CLIENTS[slug].name}
            <span className="proof-where">{CLIENTS[slug].where}</span>
          </Link>
        ))}
        <Link href="/portfolio" className="proof-chip proof-more">+{more} more</Link>
      </div>
      <p className="hero-facts">
        <a href={`tel:${siteConfig.phone}`}>Call {siteConfig.phoneDisplay}</a>
        <span aria-hidden="true">&middot;</span>
        <span>Mon&ndash;Fri 9am&ndash;6pm ET{local}</span>
        <span aria-hidden="true">&middot;</span>
        <span>Websites from $700</span>
      </p>
    </div>
  );
}
