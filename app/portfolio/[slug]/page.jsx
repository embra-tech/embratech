import Link from 'next/link';
import { notFound } from 'next/navigation';
import Cta from '../../../components/Cta';
import siteConfig from '../../../lib/site-config';

export const dynamicParams = false;

const PAGESPEED = (domain) =>
  `https://pagespeed.web.dev/analysis?url=https%3A%2F%2F${encodeURIComponent(domain)}%2F`;

const CASE_STUDIES = {
  'tuxford-collision': {
    name: 'Tuxford Collision Center',
    metaTitle: 'Auto Body Shop Website Design, Tuxford | Embra',
    domain: 'tuxfordcollision.com',
    url: 'https://tuxfordcollision.com/',
    industry: 'Auto Body & Collision Repair',
    location: 'Los Angeles, CA',
    timeline: '3 weeks',
    tags: ['Web Design', 'Local SEO', 'Quote Forms'],
    stack: 'Next.js · React · Vercel · FormSubmit',
    challenge: `Tuxford Collision Center serves Los Angeles drivers who need fast, trustworthy auto body repair, often in highly stressful post-accident situations. Their previous online presence did absolutely nothing to build trust when it mattered most: when someone was frantically searching at 11 PM after a collision, phone in hand, desperately trying to decide who to call for help. The site was incredibly slow to load, making frustrated users wait. It was extremely hard to navigate on mobile devices, which is where the vast majority of these urgent searches occur.

Most importantly, it gave no immediate reason to trust a stranger with a heavily damaged car. In the competitive Los Angeles auto body repair market, a slow, outdated website means lost business. Potential customers were bouncing to competitors simply because the website failed to communicate professionalism, reliability, and clear next steps during a moment of crisis.`,
    approach: [
      { title: 'Trust-first hierarchy', body: 'We led our complete redesign with a strict trust-first hierarchy. We immediately showcased their essential licensing credentials, their stellar Google rating, and a crystal-clear "Free Towing + Free Estimate" guarantee right at the very top of the site. These address the three precise questions every distressed driver asks before making a call. By placing these powerful trust signals directly above the fold, rather than burying them deep in a footer, we instantly established credibility. We ensured that visitors immediately knew they were dealing with a legitimate, highly-rated Los Angeles auto body repair shop that was ready to help them right away, drastically reducing the friction to conversion.' },
      { title: 'Conversion-engineered layout', body: 'We implemented a highly conversion-engineered layout throughout the entire website. To achieve this, we ensured that absolutely every single page fold includes both a highly visible phone number and an easy-to-use quote form. We fundamentally eliminated decision friction by making the very next step always instantly visible to the user, completely regardless of their current scroll position on the page. This is absolutely critical when your potential customer is heavily stressed, in a significant hurry, and needs immediate auto body repair assistance. By keeping the primary contact methods constantly accessible, we made it effortless for users to reach out the exact moment they felt ready.' },
      { title: 'Local SEO structure', body: 'We built a robust Local SEO structure to ensure maximum visibility in the competitive Los Angeles market. This comprehensive strategy involved creating highly targeted service-area pages for specific local neighborhoods. We thoroughly implemented accurate LocalBusiness JSON-LD schema markup across the site to clearly signal their exact location and service offerings to search engines. Furthermore, we carefully optimized all metadata specifically targeting "auto body repair Los Angeles" and surrounding vital neighborhoods. This meticulous local search coverage ensures that Tuxford Collision Center appears prominently exactly when and where local drivers are actively searching for reliable auto body and collision repair services after an accident.' },
    ],
    deepDive: `<p>The core objective for Tuxford Collision Center was to completely transform a slow, outdated website into a high-performance, trust-building asset tailored specifically for distressed drivers in Los Angeles. Understanding that a significant portion of their audience consists of individuals involved in recent collisions, the entire user experience was re-architected around speed, clarity, and immediate reassurance. We focused heavily on eliminating any unnecessary cognitive load, ensuring that vital contact information and core guarantees were always immediately accessible.</p><p>By migrating the platform to a modern Next.js stack hosted on Vercel, we achieved remarkable performance improvements, most notably a verified PageSpeed score of 97/100. This blazing-fast load time is crucial for mobile users on cellular networks who cannot afford to wait. Furthermore, the strategic implementation of FormSubmit allowed for seamless, reliable lead capture directly from the ubiquitous quote forms without the overhead of complex backend infrastructure.</p><p>The comprehensive overhaul also placed a massive emphasis on local discoverability. The meticulous application of LocalBusiness schema and targeted metadata ensures the shop ranks precisely when locals search for auto body repair in Los Angeles. The reported 280% increase in organic traffic strongly suggests this focused local SEO foundation is successfully connecting Tuxford with their specific target market.</p>`,
    results: [
      { label: '+280% Organic Traffic', verified: false },
      { label: 'PageSpeed 97/100', verified: true, href: PAGESPEED('tuxfordcollision.com') },
    ],
  },
  'vvasquez-handyman': {
    name: 'V Vasquez Handyman LLC',
    metaTitle: 'Lawn Care Website Design, V Vasquez | Embra',
    domain: 'vvasquezhandymanllc.net',
    url: 'https://vvasquezhandymanllc.net/',
    industry: 'Lawn Care, Concrete & Irrigation',
    location: 'Merced, CA',
    timeline: '2 weeks',
    tags: ['Web Design', 'Service Pages', 'Mobile First'],
    stack: 'Next.js · React · Vercel · FormSubmit',
    challenge: `V Vasquez Handyman LLC offers professional lawn care, concrete work, and irrigation services to homeowners throughout Merced, CA. Despite possessing strong technical skills, delivering high-quality work, and maintaining a solid local reputation, their online presence unfortunately did not reflect any of these positive attributes. Their website suffered from blurry branding, a highly generic template design, and absolutely no clear, distinct listing of their core services.

Homeowners actively searching for help on their mobile devices were quickly bouncing away before ever making contact, which was directly costing the business real, lucrative jobs every single week. The lack of a clear service catalog meant potential clients could not easily determine if V Vasquez handled their specific needs. They desperately required a digital platform that matched the quality of their physical work and clearly communicated their exact service offerings to the local Merced community.`,
    approach: [
      { title: 'Structured service catalog', body: 'We completely overhauled their offering presentation by building a highly structured service catalog. Instead of a single crowded page, we built each distinct service, lawn care, concrete work, and irrigation, its very own dedicated section. Every section features a crystal-clear description of the exact scope of work, helpful pricing signals to qualify leads, and a prominent, specific "Request This Service" call-to-action button. This strategic organization empowers website visitors to rapidly find exactly what they need without frustratingly wading through completely irrelevant content, significantly streamlining their path from initial interest to direct inquiry.' },
      { title: 'Mobile-first execution', body: 'We prioritized a strict mobile-first execution strategy throughout the entire two-week project. We meticulously designed and rigorously tested the entire mobile experience first, explicitly ensuring flawless operation on small screens, before ever scaling the design up for desktop users, not the other way around. Every single interactive element was refined: tap targets were enlarged for easy pressing, font sizes were optimized for maximum legibility without zooming, and all form inputs were specifically optimized for quick thumb typing. This was essential because the vast majority of all local service searches happen directly on smartphones.' },
      { title: 'Instant quote flow', body: 'To maximize lead generation, we developed and integrated an incredibly streamlined instant quote flow. This highly efficient quote request form features smart service selection pre-fills that automatically carry over context based on what the user was just viewing. By intelligently capturing the exact service the user is interested in immediately, this substantially reduces frustrating back-and-forth communication. The dramatically simplified process actively encourages users to submit their details, effectively getting lucrative jobs booked much faster and with significantly less friction for both the business owner and the homeowner.' },
    ],
    deepDive: `<p>For V Vasquez Handyman LLC, the primary focus was establishing a clear, professional, and highly actionable digital storefront for their Merced, CA based lawn care, concrete, and irrigation services. The previous generic template completely failed to differentiate their offerings or guide users toward making a practical inquiry. Our solution completely restructured their content architecture, creating distinct, easily navigable pathways for each specific service they provide. This clarity allows homeowners to immediately verify that V Vasquez is the right contractor for their specific project needs.</p><p>A critical component of this rebuild was the uncompromising commitment to a mobile-first design philosophy. Recognizing that nearly all their potential leads originate from mobile searches, every tap target, form field, and text block was explicitly engineered for smartphone usability. Leveraging the power of Next.js and React, deployed seamlessly on Vercel, we ensured the site not only looked professional but performed exceptionally well, achieving a near-perfect verified PageSpeed score of 99/100. This ensures no potential customer is ever lost to frustratingly slow loading times.</p><p>The integration of FormSubmit powered a seamless, context-aware instant quote flow. By allowing the service selection to pre-fill the form, we removed significant user friction. This highly optimized conversion funnel is designed to turn casual local mobile browsing into concrete job inquiries, supporting the unverified but reported 3.4x increase in quote submissions.</p>`,
    results: [
      { label: '3.4× Quote Submissions', verified: false },
      { label: 'PageSpeed 99/100', verified: true, href: PAGESPEED('vvasquezhandymanllc.net') },
    ],
  },
  'alaska-fast-fix': {
    name: 'Alaska Fast Fix Handyman',
    metaTitle: 'Handyman Website Design, Alaska Fast Fix | Embra',
    domain: 'alaskafastfixhandyman.com',
    url: 'https://alaskafastfixhandyman.com/',
    industry: 'Handyman Services',
    location: 'Alaska',
    timeline: '2 weeks',
    tags: ['Web Design', 'Local SEO', 'Lead Capture'],
    stack: 'Next.js · React · Vercel · FormSubmit',
    challenge: `Operating a service business in Alaska means actively serving a massive, geographically spread-out market where customers frequently simply cannot afford to wait. Emergency repair requests, such as rapidly bursting pipes, completely broken heating systems in freezing temperatures, or severe storm damage, fundamentally demand an immediate, reliable response. Their existing online presence failed to convey this necessary speed.

The business desperately needed a high-performance website that instantly communicated extreme urgency, rock-solid reliability, and deep local expertise the very moment someone landed on it directly from a highly stressed, late-night search. When a homeowner is facing an active emergency in harsh conditions, they do not have the patience to hunt for contact information or wonder if the contractor even serves their specific, remote area. Clarity and speed were absolutely paramount.`,
    approach: [
      { title: 'Urgency-driven design', body: 'We implemented an aggressively urgency-driven design tailored specifically for emergency situations. We led the visual hierarchy with prominent "Fast Response" messaging and strategically placed the primary contact phone number directly at the very top of absolutely every single page. The entire interface was explicitly designed for the incredibly high-stress, "I need this completely fixed today" search intent. Because crucial seconds absolutely matter when a pipe is actively bursting, we ensured that the fastest way to get help, a direct phone call, was never more than a single, immediate tap away.' },
      { title: 'Service area clarity', body: 'We established absolute service area clarity right from the moment a user arrives. A highly prominent, extremely early service area section clearly defines exactly where they operate. This strategic placement actively prevents frustrating, wasted calls from desperate customers located outside the actual coverage zone. Furthermore, it immediately builds strong trust with local customers who specifically want to hire someone local, accountable, and genuinely capable of reaching their Alaskan property quickly during a severe home maintenance emergency.' },
      { title: 'Local search coverage', body: 'We executed a comprehensive local search coverage strategy to dominate their specific region. This involved implementing highly detailed structured data markup across the site. We carefully crafted and optimized service-area headings specifically targeting vital "handyman near me" local searches. Finally, we ensured perfect alignment with their Google Business Profile to strongly reinforce their geographic relevance. This robust local SEO foundation is designed to help them rank prominently across their entire specific service region whenever an Alaskan homeowner urgently needs professional repair assistance.' },
    ],
    deepDive: `<p>The completely rebuilt web presence for Alaska Fast Fix Handyman was fundamentally engineered around the concepts of speed, extreme reliability, and immediate clarity. Operating in the uniquely demanding environment of Alaska, the business frequently responds to time-critical emergencies where every passing minute counts. The previous website entirely failed to match the urgency of their customers' actual needs. We transformed the site into a streamlined, highly functional tool explicitly designed to convert highly stressed visitors into immediate phone calls without any unnecessary friction.</p><p>By utilizing Next.js and deploying on Vercel, we guaranteed exceptional performance, delivering a verified PageSpeed score of 98/100. This blazing speed is particularly critical in areas where mobile network connections might be less than ideal, ensuring the site loads instantly when a homeowner desperately needs help. The integration of FormSubmit provided a reliable secondary contact method, but the primary focus remained entirely on facilitating immediate, direct phone contact through highly visible, ubiquitous call-to-action buttons.</p><p>Crucially, we focused heavily on defining and communicating their precise local service areas. Through careful implementation of structured data and heavily localized on-page SEO, we ensured the site signals its exact relevance to Google and to visitors alike. This precise geographic targeting helps generate relevant local inquiries, potentially driving the reported 190% increase in valuable local calls.</p>`,
    results: [
      { label: '+190% Local Calls', verified: false },
      { label: 'PageSpeed 98/100', verified: true, href: PAGESPEED('alaskafastfixhandyman.com') },
    ],
  },
  'bestbreaks': {
    name: 'BestBreaks',
    metaTitle: 'Travel Website Design, BestBreaks | Embra',
    domain: 'bestbreaks.com.au',
    url: 'https://bestbreaks.com.au/',
    industry: 'Travel & Accommodation',
    location: 'Australia & New Zealand',
    timeline: '4 weeks',
    tags: ['Web Design', 'E-Commerce Flow', 'Booking UX'],
    stack: 'Next.js · React · Vercel',
    challenge: `Selling premium holiday accommodation vouchers online successfully requires exceptional visual polish and absolute booking confidence, qualities that most small travel businesses heavily struggle to achieve. BestBreaks urgently needed to present their extensive range of multi-night packages, spanning across dozens of beautiful properties in Australia and New Zealand, in a way that felt highly premium, completely clear, and fundamentally trustworthy.

They had to accomplish this ambitious goal without possessing the massive development budget of an industry giant like Booking.com. Unfortunately, their existing website was severely underperforming. Eager visitors were landing on the site, browsing the various holiday options, but ultimately leaving without ever converting into paying customers. The confusing layout and slow performance were actively destroying the vital trust required to secure high-value travel bookings online.`,
    approach: [
      { title: 'Booking-confidence UX', body: 'We completely redesigned the platform focusing intensely on a booking-confidence UX. We meticulously structured the presentation of each individual holiday package to prominently feature totally clear inclusions, the exact stay duration, transparent pricing, and the most compelling property highlights. By systematically providing highly detailed, easily accessible information, we successfully gave website visitors more than enough comprehensive detail to feel entirely confident purchasing their expensive travel vouchers directly online, without ever feeling the need to call for clarification.' },
      { title: 'Performance engineering', body: 'We prioritized rigorous performance engineering because online travel sites absolutely live and die by their page load speed. Through careful optimization of the modern tech stack, we successfully achieved an incredibly fast 0.41s Time to First Byte (TTFB) and a stellar 96/100 PageSpeed score. These highly optimized metrics are absolutely critical for maximizing conversions and securing top Google rankings in a fiercely competitive travel market, where absolutely every single second of load time directly costs the business valuable bookings.' },
      { title: 'Visual hierarchy for packages', body: 'We implemented a highly effective visual hierarchy specifically for their complex packages. The various multi-night holiday packages, encompassing 7, 10, 14, and 21 nights, are now clearly presented as highly scannable, visually appealing cards. Each card instantly communicates clear duration, the exact destination, and strong value signals. This smart design choice significantly reduces the heavy cognitive load previously required when users were trying to compare multiple different holiday options, making the final purchase decision much easier.' },
    ],
    deepDive: `<p>The ambitious four-week project for BestBreaks centered entirely on elevating a small travel business's digital presence to rival major booking platforms in terms of user trust and pure technical performance. The core challenge was presenting complex, high-value multi-night accommodation packages across Australia and New Zealand in a highly digestible, trustworthy format. The previous experience was entirely too confusing, leading to high bounce rates and massive lost revenue. Our complete redesign focused heavily on establishing total booking confidence through absolute clarity and premium visual presentation.</p><p>We thoroughly transformed the browsing experience by implementing a highly scannable card-based interface for their core 7, 10, 14, and 21-night packages. This intuitive visual hierarchy allows users to effortlessly compare destinations, clear inclusions, and exact pricing. By leveraging the immense power of Next.js and React, and deploying robustly on Vercel, we built a rock-solid, highly responsive frontend that handles complex property data effortlessly while maintaining an incredibly premium feel throughout the entire user journey.</p><p>Technical excellence was just as crucial as the visual design. We achieved a verified 0.41s TTFB and a 96/100 PageSpeed score, ensuring the site feels instantly responsive. In the highly competitive online travel sector, this blistering speed is a massive competitive advantage, directly contributing to higher engagement and vastly improved conversion rates by never keeping a potential traveler waiting.</p>`,
    results: [
      { label: 'PageSpeed 96/100', verified: true, href: PAGESPEED('bestbreaks.com.au') },
      { label: '0.41s TTFB', verified: true, href: PAGESPEED('bestbreaks.com.au') },
    ],
  },
  'sky-high-tree': {
    name: 'Sky High Tree Service',
    metaTitle: 'Tree Service Website Design, Sky High | Embra',
    domain: 'skyhightreeservicechicago.com',
    url: 'https://skyhightreeservicechicago.com/',
    industry: 'Tree Service',
    location: 'Chicago, IL',
    timeline: '3 weeks',
    tags: ['Web Design', 'Local SEO', 'Emergency CTAs'],
    stack: 'Next.js · React · Vercel · FormSubmit',
    challenge: `The professional tree service industry is a uniquely high-urgency, high-ticket business category. When customers in Chicago are frantically searching for emergency tree removal services immediately following a severe, damaging storm, they absolutely do not casually browse multiple options. They almost always call the very first website that looks genuinely credible, highly professional, and distinctly local.

Sky High Tree Service urgently needed a high-performance website that successfully converted those critical, high-stress emergency searches into firmly booked jobs immediately upon landing. Simultaneously, they also needed to build a highly sustainable, long-term organic presence in the extremely competitive Chicago metropolitan market. Their old site simply lacked the immediate trust factors and the prominent emergency contact options required to capture this highly lucrative, time-sensitive business.`,
    approach: [
      { title: 'Emergency CTA architecture', body: 'We designed and implemented a highly aggressive emergency CTA architecture. We placed extremely high-visibility emergency contact options directly above the fold on absolutely every single page of the website. This included a massive phone number, an instant click-to-call button optimized for mobile, and a prominent "24/7 Emergency Service" badge. This powerful combination instantly builds massive confidence and provides a clear action path before a panicked visitor even reads a single word of the descriptive body copy.' },
      { title: 'Credibility signals up front', body: 'We deliberately placed crucial credibility signals right up front on the homepage. We highly prioritized showing clear insurance verification details, prominent professional license numbers, and compelling before-and-after project imagery. By immediately presenting these vital trust factors, we successfully removed the major psychological barriers that typically cause anxious, storm-damaged homeowners to quickly keep scrolling to find a competitor. We proved Sky High\'s legitimacy the very second the page loaded.' },
      { title: 'Service-area SEO', body: 'We executed a highly targeted service-area SEO campaign to dominate the local market. We carefully built completely dedicated, optimized pages for vital Chicago neighborhoods and key surrounding suburbs. Every single one of these specific local pages was heavily enriched with highly accurate LocalBusiness schema markup. This strategy was specifically designed to aggressively target lucrative "tree removal [neighborhood]" search queries, which consistently convert at the absolute highest rate in this particular service market.' },
    ],
    deepDive: `<p>The comprehensive three-week rebuild for Sky High Tree Service was strategically designed to completely dominate the highly lucrative, time-critical emergency tree removal market in Chicago. We understood that homeowners dealing with massive fallen trees need immediate, trustworthy help, not a lengthy corporate brochure. The entire digital experience was radically re-engineered to project total authority, absolute reliability, and massive local relevance, explicitly aimed at converting panicked visitors into immediate, high-value phone calls.</p><p>We implemented a heavy emphasis on immediate trust-building. By placing their essential insurance information, valid licenses, and highly prominent 24/7 emergency badges front and center, we instantly reassured highly stressed users. Powered by a blazing fast Next.js and React frontend, and hosted reliably on Vercel, the site achieved a verified PageSpeed score of 95/100. This excellent performance ensures that users on unstable mobile connections following a severe local storm can still access vital emergency help instantly. FormSubmit was also seamlessly integrated to securely handle non-emergency quote requests.</p><p>To secure long-term growth, we built a massive localized SEO foundation. By systematically rolling out highly optimized, schema-rich pages targeting specific Chicago neighborhoods, we ensured Sky High naturally captures the exact high-intent searches that drive their business. This robust combination of instant emergency conversion architecture and deep local search relevance helps drive the unverified but reported 215% surge in critical emergency leads.</p>`,
    results: [
      { label: '+215% Emergency Leads', verified: false },
      { label: 'PageSpeed 95/100', verified: true, href: PAGESPEED('skyhightreeservicechicago.com') },
    ],
  },
};

export function generateStaticParams() {
  return Object.keys(CASE_STUDIES).map((slug) => ({ slug }));
}

export function generateMetadata({ params }) {
  const cs = CASE_STUDIES[params.slug];
  if (!cs) return {};
  return {
    alternates: { canonical: `/portfolio/\${params.slug}` },
    title: cs.metaTitle,
    description: `How Embra Technologies built a high-performance website for \${cs.name} in \${cs.location}. Results: \${cs.results.map((r) => r.label).join(', ')}.`,
    openGraph: {
      title: `${cs.name} Case Study, Embra Technologies`,
      description: `Web design & SEO results for \${cs.name}: \${cs.results.map((r) => r.label).join(', ')}.`,
      url: `https://www.embratechnologies.org/portfolio/\${params.slug}`,
    },
  };
}

export default function CaseStudyPage({ params }) {
  const cs = CASE_STUDIES[params.slug];
  if (!cs) notFound();

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: `\${cs.name}, Web Design Case Study`,
    description: `How Embra Technologies built a high-performance website for \${cs.name} in \${cs.location}.`,
    image: `\${siteConfig.siteUrl}\${siteConfig.ogImage}`,
    datePublished: '2026-09-30',
    dateModified: '2026-10-01',
    author: { '@type': 'Organization', name: siteConfig.legalName, url: siteConfig.siteUrl },
    publisher: {
      '@type': 'Organization',
      name: siteConfig.legalName,
      url: siteConfig.siteUrl,
      logo: { '@type': 'ImageObject', url: `\${siteConfig.siteUrl}\${siteConfig.logo}` },
    },
    about: { '@type': 'Organization', name: cs.name, url: cs.url },
    url: `\${siteConfig.siteUrl}/portfolio/\${params.slug}`,
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `\${siteConfig.siteUrl}/` },
      { '@type': 'ListItem', position: 2, name: 'Portfolio', item: `\${siteConfig.siteUrl}/portfolio` },
      { '@type': 'ListItem', position: 3, name: cs.name, item: `\${siteConfig.siteUrl}/portfolio/\${params.slug}` },
    ],
  };

  const ArrowUp = () => (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
      <line x1="7" y1="17" x2="17" y2="7" /><polyline points="7 7 17 7 17 17" />
    </svg>
  );
  const ArrowLeft = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
      <line x1="19" y1="12" x2="5" y2="12" /><polyline points="12 19 5 12 12 5" />
    </svg>
  );

  return (
    <div className="page-shell case-study-shell">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="page-hero case-hero">
        <div className="wrap">
          <nav className="cs-breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span aria-hidden="true">›</span>
            <Link href="/portfolio">Portfolio</Link>
            <span aria-hidden="true">›</span>
            <span>{cs.name}</span>
          </nav>

          <div className="cs-meta-row">
            <span className="cs-industry-pill">{cs.industry}</span>
            <span className="cs-location-pill">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
              </svg>
              {cs.location}
            </span>
            <span className="cs-timeline-pill">⏱ {cs.timeline}</span>
          </div>

          <h1 className="cs-title">{cs.name}</h1>
          <p className="cs-sub">A case study by Embra Technologies</p>

          <div className="cs-result-chips">
            {cs.results.map((r) =>
              r.verified ? (
                <a
                  key={r.label}
                  href={r.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cs-chip cs-chip--verified"
                  title="Click to verify on Google PageSpeed"
                >
                  {r.label}
                  <span className="cs-chip-verify">Verify ↗</span>
                </a>
              ) : (
                <span key={r.label} className="cs-chip">{r.label}</span>
              )
            )}
          </div>

          <div className="cs-live-row">
            <a href={cs.url} target="_blank" rel="noopener noreferrer" className="btn-flip btn-primary btn-small">
              <span className="btn-flip-inner">
                <span className="btn-flip-state">Visit Live Site <ArrowUp /></span>
                <span className="btn-flip-state" aria-hidden="true">{cs.domain} <ArrowUp /></span>
              </span>
            </a>
            <div className="cs-tags">
              {cs.tags.map((t) => <span key={t} className="bento-tag">{t}</span>)}
            </div>
          </div>
        </div>
      </section>

      {/* ── Challenge ────────────────────────────────────────── */}
      <section className="cs-section">
        <div className="wrap cs-two-col">
          <div className="cs-col-label">The Challenge</div>
          <div className="cs-col-body">
            {cs.challenge.split('\\n\\n').map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      {/* ── Approach ─────────────────────────────────────────── */}
      <section className="cs-section cs-section--alt">
        <div className="wrap">
          <div className="cs-approach-header">
            <div className="cs-col-label">Our Approach</div>
          </div>
          <div className="cs-approach-grid">
            {cs.approach.map((a, i) => (
              <div key={i} className="cs-approach-card">
                <span className="cs-approach-num">0{i + 1}</span>
                <h3>{a.title}</h3>
                <p>{a.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Deep Dive ────────────────────────────────────────── */}
      {cs.deepDive && (
        <section className="cs-section">
          <div className="wrap cs-two-col">
            <div className="cs-col-label">Deep Dive</div>
            <div className="cs-col-body" dangerouslySetInnerHTML={{ __html: cs.deepDive }} />
          </div>
        </section>
      )}

      {/* ── Tech Stack ───────────────────────────────────────── */}
      {cs.stack && (
        <section className="cs-section cs-section--alt">
          <div className="wrap cs-two-col">
            <div className="cs-col-label">Tech Stack</div>
            <div className="cs-col-body"><p>{cs.stack}</p></div>
          </div>
        </section>
      )}

      {/* ── Results ──────────────────────────────────────────── */}
      <section className="cs-section">
        <div className="wrap cs-two-col">
          <div className="cs-col-label">Results</div>
          <div className="cs-col-body">
            <div className="cs-results-grid">
              {cs.results.map((r) => (
                <div key={r.label} className="cs-result-stat">
                  <div className="cs-result-value">{r.label}</div>
                  {r.verified && (
                    <a href={r.href} target="_blank" rel="noopener noreferrer" className="cs-verify-link">
                      Verify on Google PageSpeed →
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Nav row ──────────────────────────────────────────── */}
      <section className="cs-nav-section">
        <div className="wrap cs-nav-row">
          <Link href="/portfolio" className="btn-flip btn-ghost btn-small">
            <span className="btn-flip-inner">
              <span className="btn-flip-state"><ArrowLeft /> Back to Portfolio</span>
              <span className="btn-flip-state" aria-hidden="true"><ArrowLeft /> Back to Portfolio</span>
            </span>
          </Link>
          <Link href="/contact" className="btn-flip btn-primary btn-small">
            <span className="btn-flip-inner">
              <span className="btn-flip-state">Start Your Project <ArrowUp /></span>
              <span className="btn-flip-state" aria-hidden="true">Start Your Project <ArrowUp /></span>
            </span>
          </Link>
        </div>
      </section>

      <Cta variant="portfolio" />
    </div>
  );
}
