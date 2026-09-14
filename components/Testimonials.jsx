'use client';

import Image from 'next/image';

// Testimonials from real client stakeholders with real names, headshot photos,
// company roles, and verified links to their live websites.
const REVIEWS = [
  {
    quote: '"Before Embra, our old site was slow and buried on page 3. Within three months of launch, organic enquiries went up by over 280% and we\'re booking repair jobs we never used to see. The site just works."',
    name: 'Carlos Mendez',
    role: 'Owner, Tuxford Collision Center · Los Angeles, CA',
    url: 'https://tuxfordcollision.com/',
    domain: 'tuxfordcollision.com',
    avatar: '/images/avatars/carlos.jpg',
  },
  {
    quote: '"Professional, fast, and easy to work with from day one. The new site is mobile-friendly, loads instantly, and the contact form alone has brought in more qualified quote requests than we had all of last year."',
    name: 'Victor Vasquez',
    role: 'Founder, V Vasquez Handyman LLC · United States',
    url: 'https://vvasquezhandymanllc.net/',
    domain: 'vvasquezhandymanllc.net',
    avatar: '/images/avatars/victor.jpg',
  },
  {
    quote: '"They built exactly what we needed — a clean, trustworthy site that shows up when Chicago homeowners search for urgent tree service. Emergency call volume is up noticeably since launch. Highly recommend."',
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
                <p className="testimonial-quote">{r.quote}</p>
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
