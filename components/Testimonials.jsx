'use client';

import Image from 'next/image';

const REVIEWS = [
  {
    quote: "The process was entirely different from other agencies we talked to. They didn’t pitch us jargon — they built a free sample of our homepage first. Seeing the actual work before signing anything made it a no-brainer, and they delivered the final site right on schedule.",
    name: 'Carlos Mendez',
    role: 'Owner, Tuxford Collision Center · Los Angeles, CA',
    url: 'https://tuxfordcollision.com/',
    domain: 'tuxfordcollision.com',
    avatar: '/images/avatars/carlos.jpg',
  },
  {
    quote: "Communication was phenomenal. No waiting days for an email reply. The Embra team speaks plain English, explained exactly what they were doing, and handled the entire launch. It was the easiest vendor experience I’ve had as a business owner.",
    name: 'Victor Vasquez',
    role: 'Founder, V Vasquez Handyman LLC · United States',
    url: 'https://vvasquezhandymanllc.net/',
    domain: 'vvasquezhandymanllc.net',
    avatar: '/images/avatars/victor.jpg',
  },
  {
    quote: "They are incredibly fast without sacrificing quality. From the initial brief to the live launch, the momentum never stopped. They built a site that brings in real emergency calls, and they still respond immediately whenever we need a quick update.",
    name: 'Dan Miller',
    role: 'Operations Director, Sky High Tree Service · Chicago, IL',
    url: 'https://skyhightreeservicechicago.com/',
    domain: 'skyhightreeservicechicago.com',
    avatar: '/images/avatars/dan.jpg',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" aria-labelledby="testimonials-heading">
      <div className="wrap">
        <div className="section-head reveal-up">
          <div className="section-badge"><span className="badge-pill">Reviews</span><span className="badge-text">Client Feedback</span></div>
          <h2 id="testimonials-heading">Trusted by Growing Businesses Across the US.</h2>
          <p>See how our custom websites and SEO strategies transformed digital presence for our clients.</p>
        </div>
        <div className="testimonials-grid">
          {REVIEWS.map((r) => (
            <div className="testimonial-card reveal-up" key={r.name}>
              <div>
                <div className="testimonial-stars">★★★★★</div>
                <p className="testimonial-quote">"{r.quote}"</p>
              </div>
              <div className="testimonial-author">
                <div className="author-avatar author-avatar-photo">
                  <Image
                    src={r.avatar}
                    alt={r.name}
                    width={48}
                    height={48}
                    className="author-avatar-img"
                  />
                </div>
                <div className="author-info">
                  <h4>{r.name}</h4>
                  <p>{r.role}</p>
                  <a
                    href={r.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="testimonial-site-link"
                    aria-label={`Visit ${r.domain} live site`}
                  >
                    <span>{r.domain}</span>
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                      <line x1="7" y1="17" x2="17" y2="7" />
                      <polyline points="7 7 17 7 17 17" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
