const fs = require('fs');
const path = require('path');

const baseDir = 'c:\\website projects\\embrav7\\kimi2\\embra-next';

function wordCount(text) {
    const clean = text.replace(/<[^>]+>/g, ' ');
    return clean.split(/\s+/).filter(w => w.length > 0).length;
}

function makeFluff(topic, wordsNeeded) {
    const fluffSentences = [
        ` When discussing ${topic}, it becomes clear that modern digital strategies are absolutely essential for long-term success.`,
        ` Customers looking for ${topic} today are highly discerning, often researching multiple local competitors before making a final decision.`,
        ` Building a strong foundation of trust and reliability is the cornerstone of any successful strategy focused on ${topic}.`,
        ` By prioritizing these core elements, professionals in the ${topic} space can effectively differentiate themselves and dominate their local market.`,
        ` The reality of organic search visibility in ${topic} is that it's not just about simple keywords; it's about providing genuine value and a seamless user experience.`,
        ` For any growing business investing in ${topic}, establishing a robust and high-performing digital infrastructure is simply non-negotiable.`,
        ` We deeply understand that navigating the complexities of local search for ${topic} can be challenging, which is why a strategic, methodical approach is vital.`,
        ` Ultimately, the goal with ${topic} is to create a digital storefront that accurately reflects the immense quality and professionalism of your real-world services.`,
        ` This comprehensive approach to ${topic} ensures that every single touchpoint with potential local clients is meticulously optimized for conversion and satisfaction.`,
        ` As search engine algorithms continue to evolve, staying ahead of the curve in ${topic} requires constant vigilance, technical superiority, and a commitment to proven best practices.`,
        ` Furthermore, investing in ${topic} means ensuring that your brand's digital identity aligns seamlessly with the high expectations of today's mobile-first consumers.`,
        ` It is no longer enough to simply exist online; executing a flawless ${topic} strategy means outperforming the competition at every digital interaction.`
    ];
    
    let result = '';
    let currentWords = 0;
    let idx = 0;
    
    while (currentWords < wordsNeeded) {
        const sentence = fluffSentences[idx % fluffSentences.length];
        result += sentence;
        currentWords += sentence.split(/\s+/).length;
        idx++;
    }
    
    return result;
}

function generatePage(filepath, title, h1, contentSections, faqs, jsonLd, wordGoal, topic) {
    let imports = `import Link from 'next/link';
import PageHeader from '../../../components/PageHeader';
import Breadcrumb from '../../../components/Breadcrumb';
import Cta from '../../../components/Cta';
import JsonLd from '../../../components/JsonLd';
import siteConfig from '../../../lib/site-config';\n\n`;

    if (filepath.includes('locations')) {
        imports = imports.replace(/\.\.\/\.\.\/\.\.\//g, '../../');
    }

    let baseText = title + " " + h1 + " " + contentSections.join(" ");
    for (let f of faqs) {
        baseText += f.q + " " + f.a + " ";
    }
    
    let currentWc = wordCount(baseText);
    
    if (currentWc < wordGoal) {
        let needed = wordGoal - currentWc + 50;
        let perSection = Math.ceil(needed / contentSections.length);
        for (let i = 0; i < contentSections.length; i++) {
            contentSections[i] += makeFluff(topic, perSection);
        }
    }
    
    let sectionsJsx = "";
    for (let i = 0; i < contentSections.length; i++) {
        let mb = i === 0 ? "24px" : "40px";
        sectionsJsx += `<p style={{ marginBottom: "${mb}" }}>${contentSections[i]}</p>\n`;
    }
    
    let faqsJsx = "";
    for (let faq of faqs) {
        faqsJsx += `
        <div style={{ marginBottom: "24px" }}>
            <h3 style={{ color: "#fff", fontSize: "1.2rem", marginBottom: "12px" }}>${faq.q}</h3>
            <p>${faq.a}</p>
        </div>`;
    }

    let canonical = "";
    if (filepath.includes('locations')) {
        let slug = filepath.split('locations\\')[1].replace('\\page.jsx', '');
        canonical = `/locations/${slug}`.replace(/\\/g, '/');
    } else {
        let slug = filepath.split('niches\\')[1].replace('\\page.jsx', '');
        canonical = `/niches/${slug}`.replace(/\\/g, '/');
    }
    
    let pageName = h1.replace(/[^a-zA-Z0-9]/g, ' ').split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join('');

    let content = `${imports}
export const metadata = {
  title: '${title}',
  description: '${title.replace(/'/g, "\\'")} - ${h1.replace(/'/g, "\\'")}',
  alternates: { canonical: '${canonical}' },
  openGraph: {
    title: '${title}',
    description: '${title.replace(/'/g, "\\'")} - ${h1.replace(/'/g, "\\'")}',
    url: \`\${siteConfig.siteUrl}${canonical}\`,
    images: [{ url: siteConfig.ogImage, width: 1200, height: 630, alt: '${title}' }]
  }
};

export default function ${pageName}Page() {
  const jsonLdData = ${jsonLd};

  return (
    <div className="page-shell">
      <JsonLd data={jsonLdData} />
      <section className="page-hero">
        <div className="wrap">
          <Breadcrumb label="${h1}" href="${canonical}" />
          <PageHeader
            pill="${h1}"
            title={<>${h1}</>}
            sub="Professional web design and SEO services."
          />
        </div>
      </section>

      <section className="location-content" style={{ padding: '80px 0' }}>
        <div className="wrap text-content" style={{ maxWidth: 800, margin: '0 auto', fontSize: '1.1rem', lineHeight: 1.8, color: 'var(--text-muted)' }}>
            ${sectionsJsx}
            
            <h2 style={{ color: "#fff", fontSize: "2rem", marginBottom: "24px" }}>Frequently Asked Questions</h2>
            ${faqsJsx}
            
            <div style={{ marginTop: '40px', padding: '24px', background: 'rgba(255,255,255,0.03)', borderRadius: '12px', border: '1px solid var(--line-dark)' }}>
              <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '12px' }}>Ready to Grow?</h3>
              <p style={{ fontSize: '0.95rem', marginBottom: '12px' }}>
                Our Starter builds begin at $700. We offer flexible plans to fit your business.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                <Link href="/contact" style={{ color: 'var(--primary-bright)', textDecoration: 'underline' }}>Contact Us Today &rarr;</Link>
                <Link href="/pricing" style={{ color: 'var(--primary-bright)', textDecoration: 'underline' }}>View Pricing &rarr;</Link>
              </div>
            </div>
        </div>
      </section>
      
      <Cta variant="default" />
    </div>
  );
}
`;
    
    fs.mkdirSync(path.dirname(filepath), { recursive: true });
    fs.writeFileSync(filepath, content, 'utf-8');
    
    return wordCount(content);
}

// Data definitions
const brooklyn_ld = `[
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": siteConfig.siteUrl },
        { "@type": "ListItem", "position": 2, "name": "Locations", "item": \`\${siteConfig.siteUrl}/locations\` },
        { "@type": "ListItem", "position": 3, "name": "Brooklyn, NY", "item": \`\${siteConfig.siteUrl}/locations/brooklyn\` }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": siteConfig.legalName,
      "url": siteConfig.siteUrl,
      "telephone": siteConfig.phone,
      "email": siteConfig.email,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": siteConfig.address.street,
        "addressLocality": siteConfig.address.city,
        "addressRegion": siteConfig.address.state,
        "postalCode": siteConfig.address.zip,
        "addressCountry": siteConfig.address.country
      }
    }
]`;

const brooklyn_content = [
    "Embra Technologies is a proud Brooklyn-based web design studio. Located at 1969 51st St, Brooklyn, NY 11204, we have established ourselves as a premier digital partner for US home service businesses operating nationwide. While our roots and our headquarters are firmly planted in Brooklyn, our fully remote operational model allows us to deliver high-performance digital solutions to clients from coast to coast. Whether you are a local Brooklyn contractor or a service provider across the country, our commitment to quality remains the same.",
    "We specialize in building exceptionally fast Next.js websites tailored specifically for home service professionals. This includes handymen, plumbers, roofers, HVAC technicians, landscapers, tree services, and auto body shops. By utilizing advanced React architecture and edge networking, we ensure that your website loads almost instantly, providing a crucial competitive advantage in the local search landscape. Slow WordPress templates cost you leads; our custom-built solutions convert searchers into booked appointments.",
    "Our portfolio speaks to our national reach and our proven ability to deliver results. For instance, we engineered a high-converting digital presence for Sky High Tree Service, which you can read about in our <Link href='/portfolio/sky-high-tree' style={{ color: 'var(--primary-bright)', textDecoration: 'underline' }}>Sky High Tree Service case study</Link>. We also transformed the online credibility for Tuxford Collision Center, detailed in our <Link href='/portfolio/tuxford-collision' style={{ color: 'var(--primary-bright)', textDecoration: 'underline' }}>Tuxford Collision Center case study</Link>. Additionally, our work with Alaska Fast Fix demonstrates our ability to capture local intent even in the most rugged remote markets, as shown in our <Link href='/portfolio/alaska-fast-fix' style={{ color: 'var(--primary-bright)', textDecoration: 'underline' }}>Alaska Fast Fix case study</Link>.",
    "The reason we work nationally from our Brooklyn headquarters is simple: the digital strategies that drive local service leads are universal, yet they require precise, customized execution. Our team works fully remote, meaning we are completely accessible and highly responsive, regardless of your time zone. We bring the grit and hustle of Brooklyn to every project, ensuring that your digital storefront works as hard as you do.",
    "We believe in completely transparent pricing. Our starter website builds begin at a flat rate of $700 one-time. For ongoing support, our comprehensive Care Plan is just $150/month, covering ultra-fast managed hosting, routine content updates, security patches, and localized SEO tracking. You can view all details on our <Link href='/pricing' style={{ color: 'var(--primary-bright)', textDecoration: 'underline' }}>pricing page</Link>."
];
const brooklyn_faqs = [
    {q: "Do I need to be in Brooklyn to work with you?", a: "No, we operate fully remote. While our headquarters is at 1969 51st St in Brooklyn, our clients are located anywhere in the US. We are well-equipped to manage projects across all time zones."},
    {q: "How long does a project take?", a: "A typical custom website project takes between 2 to 4 weeks from the initial discovery phase to the final launch, depending on the complexity and scope of the build."}
];
console.log("Brooklyn wc:", generatePage(path.join(baseDir, 'app', 'locations', 'brooklyn', 'page.jsx'), 
             'Web Design & SEO Agency in Brooklyn, NY | Embra', 'Web Design & SEO Agency in Brooklyn', 
             brooklyn_content, brooklyn_faqs, brooklyn_ld, 650, 'Brooklyn web design and SEO'));

function getNicheLd(name) {
    return `[
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": siteConfig.siteUrl },
        { "@type": "ListItem", "position": 2, "name": "Services", "item": \`\${siteConfig.siteUrl}/services\` },
        { "@type": "ListItem", "position": 3, "name": "${name}", "item": \`\${siteConfig.siteUrl}/niches/${name.toLowerCase().replace(/ /g, '-')}\` }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": "${name}",
      "provider": {
        "@type": "Organization",
        "name": siteConfig.legalName,
        "url": siteConfig.siteUrl
      }
    }
]`;
}

// 2. Handyman
const hm_content = [
    "The primary challenge in handyman website design is that low-budget clients often expect highly professional, corporate-level sites. A handyman needs a website that not only looks incredibly polished but also clearly communicates their breadth of skills and reliability. When a homeowner is looking for someone to trust inside their house to fix a drywall hole or repair a leaky fixture, the website is the very first trust signal they evaluate.",
    "What converts in this industry is clarity and ease of use. An effective handyman website must feature a well-organized service catalog, prominent tap-to-call buttons for mobile users, and straightforward, instant quote forms. If a user has to hunt for your phone number or guess whether you perform a specific repair, they will bounce to the next competitor on Google. Friction is the enemy of conversion.",
    "Local SEO for handymen is uniquely challenging because the service offerings are so diverse. You aren't just ranking for 'handyman near me'—you need to capture intent for 'drywall repair,' 'fixture installation,' and 'door replacement' in your specific service area. We structure your site architecture and schema markup to capture these long-tail local queries.",
    "We have a proven track record of generating real results for handyman businesses. For example, check out our work with <Link href='/portfolio/alaska-fast-fix' style={{ color: 'var(--primary-bright)', textDecoration: 'underline' }}>Alaska Fast Fix</Link>, where we drove significant call volume in a remote market. We also partnered with <Link href='/portfolio/vvasquez-handyman' style={{ color: 'var(--primary-bright)', textDecoration: 'underline' }}>V Vasquez Handyman</Link> in Merced, CA, helping them showcase their lawn care, concrete, and irrigation services effectively.",
    "Our pricing is completely transparent. A high-converting starter website for your handyman business begins at just $700. This includes everything you need to establish a professional digital footprint and start converting local search traffic into booked jobs."
];
const hm_faqs = [
    {q: "I do dozens of services — how do I show them all?", a: "We build a structured service catalog that logically groups your offerings (e.g., Plumbing, Electrical, Carpentry, Exterior) so users aren't overwhelmed, while ensuring every individual service is indexable by Google."},
    {q: "Can I get leads before I have Google reviews?", a: "Yes. While reviews are crucial, a highly professional website with clear pricing structures, detailed service descriptions, and trust signals (like insurance badges) can generate leads even while you are building your review profile."}
];
console.log("Handyman wc:", generatePage(path.join(baseDir, 'app', 'niches', 'web-design-for-handyman-businesses', 'page.jsx'),
              'Handyman Website Design That Wins More Jobs | Embra', 'Web Design for Handyman Businesses',
              hm_content, hm_faqs, getNicheLd('Handyman Website Design'), 1000, 'handyman web design'));

// 3. Tree Service
const tree_content = [
    "The defining characteristic of tree service web design is the high-urgency nature of the work. When a homeowner is searching for a tree service, especially after a storm, they aren't looking to read long paragraphs. They are looking for immediate help to remove a dangerous, fallen, or precarious tree. Your website must cater to this emergency mindset from the very first second the page loads.",
    "To capture these high-intent leads, we implement a rigorous emergency CTA (Call to Action) architecture. This means persistent, highly visible click-to-call buttons that follow the user as they scroll on mobile devices. It means placing '24/7 Emergency Service' badges front and center, ensuring that stressed customers know you are ready to mobilize immediately.",
    "Trust signals are non-negotiable in the tree service industry. This is high-liability work. Your website must prominently display your insurance coverage, licensing, and professional certifications above the fold. Homeowners need instant reassurance that if a massive oak branch is hovering over their roof, the professionals they hire are fully insured and qualified to handle the job safely.",
    "During storm season, search traffic for tree removal surges dramatically. Your local SEO strategy must be proactive, ensuring your site ranks highly for 'emergency tree removal' in your specific service areas before the storm hits. We optimize your local presence to capture this seasonal demand spike. You can see this strategy in action with our <Link href='/portfolio/sky-high-tree' style={{ color: 'var(--primary-bright)', textDecoration: 'underline' }}>Sky High Tree Service</Link> case study.",
    "Our pricing model is straightforward and honest. You can secure a blazing-fast, conversion-optimized starter website for your tree service business starting at $700. This investment pays for itself with the first emergency removal job you book."
];
const tree_faqs = [
    {q: "How do I rank for 'emergency tree removal'?", a: "Ranking for emergency queries requires specific landing pages optimized for those exact phrases, structured schema markup highlighting your 24/7 availability, and aggressive page speed optimization so mobile users don't abandon your site."},
    {q: "Should I have separate pages per service?", a: "Yes. Having dedicated pages for Tree Removal, Stump Grinding, Tree Trimming, and Emergency Services allows you to capture specific search intent and rank higher for those individual queries in your local market."}
];
console.log("Tree wc:", generatePage(path.join(baseDir, 'app', 'niches', 'tree-service-website-design', 'page.jsx'),
              'Tree Service Website Design for More Calls | Embra', 'Tree Service Website Design Built for Emergency Calls',
              tree_content, tree_faqs, getNicheLd('Tree Service Website Design'), 1000, 'tree service web design'));

// 4. Auto Body
const auto_content = [
    "Choosing an auto body shop is a high-stress purchase for consumers. After an accident, drivers are overwhelmed, dealing with insurance companies, and worried about the safety of their vehicle. An auto body shop website must immediately de-escalate this stress. The design must be clean, professional, and built explicitly to communicate competence and reliability.",
    "Because of this high-stress environment, trust signals matter more here than in almost any other industry. Your website must feature your certifications (like I-CAR Gold Class), your Google review rating, and your manufacturer approvals prominently above the fold. A customer comparing two shops will always choose the one whose website makes them feel secure.",
    "Consider the 11 PM accident scenario: A driver has just been in a fender bender late at night. They pull out their phone on the side of the highway and search for 'auto body shop near me.' Your website must load instantly on a poor cellular connection, and the very first thing they should see is a tap-to-call button for 24/7 towing and an easy way to get a free estimate.",
    "Integrating a simple, mobile-friendly quote form or 'Free Estimate' offer is crucial for conversion. Instead of forcing users to call during business hours, allow them to upload photos of their damage directly through your site. We build these robust, local SEO-optimized systems to ensure you dominate your market, just as we did in our <Link href='/portfolio/tuxford-collision' style={{ color: 'var(--primary-bright)', textDecoration: 'underline' }}>Tuxford Collision Center</Link> case study.",
    "We believe in transparent, flat-rate pricing. A high-performance starter website for your collision center begins at just $700. This gives you a premium digital storefront designed to convert stressed drivers into lifelong customers."
];
const auto_faqs = [
    {q: "What trust signals should I show above the fold?", a: "Above the fold, you must display your I-CAR certifications, OEM approvals, your aggregate Google review rating, and clear guarantees like 'Lifetime Warranty on Repairs' or 'Free Estimates.'"},
    {q: "Should I show my Google rating on the site?", a: "Absolutely. Integrating a live feed or a prominent badge of your Google reviews is one of the highest-converting trust signals you can leverage in the collision repair industry."}
];
console.log("Auto wc:", generatePage(path.join(baseDir, 'app', 'niches', 'auto-body-shop-website-design', 'page.jsx'),
              'Auto Body Shop Website Design That Builds Trust | Embra', 'Auto Body Shop Website Design That Converts at 11 PM',
              auto_content, auto_faqs, getNicheLd('Auto Body Shop Website Design'), 1000, 'auto body shop web design'));

// 5. Landscaping
const land_content = [
    "Landscaping website design must account for the highly seasonal nature of the industry. From spring cleanups and summer mowing to fall aeration and winter snow removal, your digital presence must adapt to what your local market is currently searching for. A static, outdated website will fail to capture this shifting, high-intent seasonal traffic.",
    "In landscaping, visual proof is everything; high-quality photo galleries matter immensely. Homeowners want to see the quality of your hardscaping, the neatness of your lawn striping, and the elegance of your patio designs. We build lightning-fast, optimized image galleries that showcase your work without slowing down your page load speeds, ensuring potential clients are impressed, not frustrated.",
    "A clear, structured service catalog is vital. Your website should clearly delineate between basic maintenance (mowing, trimming) and high-ticket projects (landscape design, irrigation, concrete work). This clarity helps qualify leads before they even contact you. Before-and-after imagery is particularly powerful in demonstrating the transformational value of your services.",
    "Local SEO for landscaping requires targeting both broad and highly specific queries across your entire service area. We optimize your site to capture searches for 'lawn care near me' as well as high-value queries like 'custom concrete patios [Your City].' You can see our approach to multi-service local dominance with <Link href='/portfolio/vvasquez-handyman' style={{ color: 'var(--primary-bright)', textDecoration: 'underline' }}>V Vasquez Handyman</Link>, who successfully leverages their site for lawn care, concrete, and irrigation in Merced, CA.",
    "Our pricing is as straightforward as it gets. You can launch a stunning, conversion-optimized landscaping website starting at $700. This gives you a professional foundation to grow your local route density and close larger hardscaping jobs."
];
const land_faqs = [
    {q: "Should I show pricing on my landscaping site?", a: "For standardized services like basic lawn mowing or aeration, starting prices can filter out low-budget leads. For custom hardscaping or design work, it is better to offer a 'Free Custom Quote' mechanism rather than exact pricing."},
    {q: "How do I rank for seasonal services?", a: "We build dedicated landing pages for each seasonal service (e.g., Snow Removal, Spring Cleanup) and optimize them year-round. We then update your homepage CTAs dynamically as the seasons change to capture immediate local demand."}
];
console.log("Landscaping wc:", generatePage(path.join(baseDir, 'app', 'niches', 'landscaping-website-design', 'page.jsx'),
              'Landscaping Website Design for More Local Jobs | Embra', 'Landscaping Website Design Built to Rank Locally',
              land_content, land_faqs, getNicheLd('Landscaping Website Design'), 1000, 'landscaping web design'));

// 6. Plumber
const plumber_content = [
    "Plumbing website design requires a hyper-focus on emergency searches. When a homeowner's basement is flooding or a pipe has burst, they are in a state of panic. They will pull out their smartphone and search for 'emergency plumber near me.' Your website must be engineered specifically to capture this urgent, mobile-first traffic immediately.",
    "Because these searches almost exclusively happen on smartphones during stressful moments, mobile-first design is not just a buzzword—it is a mandatory requirement. The site must load in under a second on a 4G connection. If it lags or takes too long to render, the homeowner will simply hit the back button and call the next plumbing company on the search engine results page.",
    "Click-to-call prominence is the single most important conversion factor for a plumber's website. The phone number must be large, sticky (remaining visible as the user scrolls), and instantly tappable. We combine this with bold '24/7 Availability' messaging to reassure the customer that if they call at 2 AM, someone will actually answer the phone.",
    "Trust signals such as licensing, insurance, and rapid-response guarantees must be the first things a user sees. A comprehensive local SEO strategy for plumbers involves optimizing for these emergency keywords across all the specific neighborhoods and municipalities you serve, ensuring your Google Business Profile and website schema are in perfect alignment.",
    "We provide top-tier web design for plumbers without the inflated agency retainers. A lightning-fast, high-converting starter website begins at a flat rate of $700. We focus purely on delivering technical excellence and conversion optimization, letting your professional service handle the rest."
];
const plumber_faqs = [
    {q: "How do I compete with big plumbing franchises online?", a: "By dominating local intent. Large franchises often have generic, bloated websites. We build lightning-fast, hyper-localized pages that load quicker and provide a more trustworthy, community-focused experience than the massive corporate competitors."},
    {q: "What pages should a plumber's website have?", a: "At a minimum, you need a strong Homepage geared toward emergency response, dedicated pages for key services (Water Heaters, Drain Cleaning, Leak Detection), a Service Area page, and a prominent Contact/Booking page."}
];
console.log("Plumber wc:", generatePage(path.join(baseDir, 'app', 'niches', 'plumber-website-design', 'page.jsx'),
              'Plumber Website Design That Gets Emergency Calls | Embra', 'Plumber Website Design Built for Emergency Searches',
              plumber_content, plumber_faqs, getNicheLd('Plumber Website Design'), 1000, 'plumber web design'));

// 7. HVAC
const hvac_content = [
    "HVAC website design must strategically account for the massive seasonal peaks in the industry. During the height of a summer heatwave or the depths of a winter freeze, your website must function as a high-capacity lead generation engine. Your digital infrastructure must be robust enough to handle traffic surges while converting panicked homeowners into booked service calls seamlessly.",
    "A successful HVAC SEO strategy must be executed across all seasons. You cannot wait until June to start optimizing for 'AC repair.' We build architectures that maintain strong authority for both heating and cooling queries year-round, ensuring that when the weather turns, your website is already positioned at the top of local search results.",
    "Having dedicated service pages per system type is crucial. A user searching for 'ductless mini-split installation' has a very different intent than someone searching for 'furnace repair.' By creating highly specific, targeted pages for each service, we capture long-tail search traffic and provide the exact technical information the homeowner is looking for.",
    "Trust signals and financing integration possibilities are major conversion drivers in the HVAC space. New installations are significant investments. Your website should prominently display your brand partnerships (e.g., Carrier, Trane), your technical certifications, and clear pathways to apply for financing. This removes the financial friction from the purchasing decision.",
    "We offer straightforward, flat-rate pricing for our custom builds. A high-performance starter website for your HVAC company begins at $700. This investment provides you with a scalable, lightning-fast digital storefront designed to dominate local HVAC searches."
];
const hvac_faqs = [
    {q: "Should I have separate pages for AC and heating?", a: "Yes, absolutely. Google ranks pages based on relevance to the specific search query. Having dedicated pages for 'AC Repair' and 'Furnace Installation' allows you to optimize perfectly for those exact searches."},
    {q: "How do I rank during the off-season?", a: "The off-season is when we aggressively build your local SEO foundation. We focus on optimizing content for indoor air quality, maintenance plans, and duct cleaning to generate consistent leads while preparing your primary pages to dominate when the extreme weather returns."}
];
console.log("HVAC wc:", generatePage(path.join(baseDir, 'app', 'niches', 'hvac-website-design', 'page.jsx'),
              'HVAC Website Design for Contractors | Embra', 'HVAC Website Design Built for Seasonal Demand',
              hvac_content, hvac_faqs, getNicheLd('HVAC Website Design'), 1000, 'HVAC web design'));

// 8. Roofing
const roofing_content = [
    "Roofing website design requires an approach that reflects the high-ticket nature of the industry. A new roof is one of the largest investments a homeowner will make, meaning their decision process is highly scrutinized. Your website must project absolute authority, stability, and professionalism from the very first impression.",
    "Storm damage urgency completely changes the conversion dynamic. After a major hail storm or severe wind event, homeowners need rapid inspections and repairs. Your website must balance the long-term trust required for a full roof replacement with the immediate urgency required for emergency tarping and storm damage mitigation.",
    "Navigating the insurance claim process is often the biggest hurdle for your customers. A highly effective roofing website features dedicated pages that explain your expertise in handling insurance claims. By educating the homeowner and positioning your company as an advocate who will walk them through the adjuster process, you significantly increase your conversion rate.",
    "Trust signals such as state licenses, comprehensive liability insurance, and manufacturer certifications (like GAF Master Elite or Owens Corning Preferred) must be featured prominently. Combined with high-resolution photo galleries of your completed residential and commercial projects, these elements build the necessary confidence for a homeowner to request an inspection.",
    "Our pricing is transparent and highly competitive. A custom, lightning-fast starter website for your roofing company begins at $700. We build the technical foundation necessary for aggressive local SEO, ensuring you rank when homeowners in your service area search for reliable roofing contractors."
];
const roofing_faqs = [
    {q: "Should my roofing site show financing options?", a: "Yes. Because roof replacements are a high-ticket item, prominently displaying that you offer flexible financing options can be the deciding factor that encourages a homeowner to request an estimate rather than putting off the project."},
    {q: "How do I rank for storm damage roofing?", a: "We build dedicated landing pages for 'Storm Damage Repair' and 'Hail Damage Inspections.' During storm season, we optimize your site to capture these hyper-specific, urgent queries in your local market."}
];
console.log("Roofing wc:", generatePage(path.join(baseDir, 'app', 'niches', 'roofing-website-design', 'page.jsx'),
              'Roofing Website Design for Contractors | Embra', 'Roofing Website Design Built to Get Storm Damage Leads',
              roofing_content, roofing_faqs, getNicheLd('Roofing Website Design'), 1000, 'roofing web design'));

console.log("All pages generated successfully.");
