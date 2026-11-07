import Link from 'next/link';
import { TESTIMONIALS } from '../lib/testimonials';

// 2026-11-08: shows up to 2 real client quotes matching a city or trade. Renders nothing while
// lib/testimonials.js is empty, so it can ship before quotes arrive. No star ratings or review markup.
export default function ClientQuotes({ place, trade }) {
  const match = TESTIMONIALS.filter((t) =>
    (place && (t.places || []).includes(place)) || (trade && (t.trades || []).includes(trade)));
  const list = (match.length ? match : TESTIMONIALS.filter((t) => !(t.places || []).length)).slice(0, 2);
  if (!list.length) return null;
  return (
    <div className="client-quotes">
      {list.map((t) => (
        <figure key={t.name + t.business} className="client-quote">
          <blockquote>&ldquo;{t.quote}&rdquo;</blockquote>
          <figcaption>
            <strong>{t.name}</strong>, {t.business}
            {t.slug && <> &middot; <Link href={`/portfolio/${t.slug}`}>case study</Link></>}
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
