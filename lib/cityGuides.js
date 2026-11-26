// City guides for /locations/[city]. First version 2026-11-02; deepened the same day after a uniqueness audit
// (new city pages were 69-83% unique, up to 24% shared between pairs, 517-648 words).
// Built from Search Console city queries (export of 2026-10-25). Every guide now has its own seasonal calendar,
// real search examples, a local tip, city-specific FAQs and no sentences shared with other guides.
// Honest framing: Embra is a remote team serving these areas, with no office there. Facts are general and
// checkable; no invented client results.

export const CITY_GUIDES = {
  anchorage: {
    slug: 'anchorage', name: 'Anchorage', state: 'AK', display: 'Anchorage, AK',
    metaTitle: 'Anchorage Websites & SEO for Handymen and Contractors',
    metaDescription: 'Websites and local SEO for Anchorage handymen, plumbers, heating companies and contractors, from South Anchorage to Eagle River. From $700, free homepage sample.',
    sub: 'Custom websites and local SEO for Anchorage handymen, plumbers, heating contractors and other home service businesses, from South Anchorage to Eagle River.',
    photo: 'stock-handyman',
    shot: true,
    shotCaption: 'Our Alaska client Alaska Fast Fix Handyman: the phone number is one tap away on every page.',
    intro: [
      'Anchorage homeowners call for help when something breaks in the middle of winter: a frozen pipe, a furnace that will not restart, ice building up along the roof edge. They search on their phones, compare two or three local businesses and call the one that looks established and easy to reach.',
      'We design websites and set up local search for Anchorage service businesses around those moments: clear services, your license and insurance details, real photos of your work and a phone number one tap away. The short summer season matters too, when exterior work, decks and repairs all compete for the same few months.',
    ],
    trades: [
      { title: 'Handyman Website Design in Anchorage', text: 'Clear service categories, a quote form that accepts photos and the neighborhoods you cover, so homeowners in Midtown or Eagle River can see you do the job.', href: '/niches/web-design-for-handyman-businesses', cta: 'Handyman website design' },
      { title: 'Plumbing Websites for Alaska Winters', text: 'Emergency pages for frozen and burst pipes kept separate from planned work like water heaters, with tap-to-call on every screen.', href: '/niches/plumber-website-design', cta: 'Plumber website design' },
      { title: 'Heating and Boiler Contractors', text: 'Boiler, furnace and heat pump pages live before the first hard freeze, plus the after-hours number homeowners look for at 2 a.m.', href: '/niches/hvac-website-design', cta: 'HVAC website design' },
      { title: 'Contractors and Roofers', text: 'License and insurance up front, a gallery of finished jobs, and pages for snow load and ice dam repairs if you do them.', href: '/niches/roofing-website-design', cta: 'Roofing website design' },
      { title: 'Auto Body Shop Websites in Anchorage', text: 'Winter fender-benders and moose collisions on the Glenn and Seward Highways bring urgent repair searches. Photo estimates, insurance answers and towing details save drivers a trip across town.', href: '/niches/auto-body-shop-website-design', cta: 'Auto body website design' },
      { title: 'Tree Service and Spruce Beetle Removal', text: 'Pages for removing beetle-killed spruce, storm cleanup and Firewise clearing around homes, with photos of real Anchorage jobs.', href: '/niches/tree-service-website-design', cta: 'Tree service website design' },
    ],
    season: [
      ['Winter (Nov\u2013Mar)', 'Frozen pipes, furnace and boiler failures, ice dams', 'Emergency pages and an after-hours number at the top'],
      ['Breakup (Apr\u2013May)', 'Meltwater, drainage, gutters, foundation leaks', 'Drainage and gutter pages; spring photos on your profile'],
      ['Summer (Jun\u2013Aug)', 'Decks, siding, painting, roofs: the busiest build season', 'Project galleries and quote forms; book-ahead notes'],
      ['Fall (Sep\u2013Oct)', 'Winterizing, heating tune-ups, gutter cleaning', 'Maintenance plan and tune-up pages before the first freeze'],
    ],
    searches: ['handyman website anchorage', 'anchorage seo company', 'hvac seo anchorage', 'auto body shop website design alaska', 'furnace repair anchorage', 'website design for contractors alaska'],
    tip: 'Many Anchorage contractors also work in the Mat-Su Valley. Wasilla and Palmer are separate markets in Google\u2019s eyes, so list them as their own service areas on your Business Profile rather than assuming "Anchorage" covers them.',
    seoTitle: 'Local SEO for Anchorage Businesses',
    seo: [
      'Most local calls in Anchorage come through Google\u2019s map results. A complete Google Business Profile, with the right categories, every service you offer and the areas you actually cover, matters as much as the website itself.',
      'We set up your profile, service pages and listings, help you collect genuine reviews, and add area pages only where you have real local work to show. If you are comparing Anchorage SEO companies, start with our free review: you will see exactly what we would change before paying anything.',
    ],
    areasNote: 'Anchorage businesses we work with typically cover:',
    areas: ['Downtown', 'Midtown', 'South Anchorage', 'Hillside', 'Eagle River', 'Chugiak', 'Girdwood'],
    faqs: [
      { q: 'Do you have an office in Anchorage?', a: 'No. We work remotely with Anchorage businesses by phone, email and video call on US business hours, the same way we built the websites for Alaska Fast Fix Handyman and Anchorage-based Alaska Handyman Services.' },
      { q: 'Do you build websites for handymen in Anchorage?', a: 'Yes. A handyman site from us groups your services clearly, shows which parts of Anchorage you cover and lets homeowners send a photo with their quote request. The Starter build is $700, or $600 if paid in full.' },
      { q: 'Can you help my business show up in Google Maps in Anchorage?', a: 'We improve what Google weighs that you control: a complete Business Profile, accurate categories, consistent listings and steady reviews. Google also considers how far each searcher is from you, so nobody can promise a Map Pack spot.' },
      { q: 'Should my site mention Eagle River and the Mat-Su Valley?', a: 'Only if you actually work there. If you do, name those areas on your service pages and in your Business Profile, and show a job or review from each where you can.' },
    ],
  },

  fairbanks: {
    slug: 'fairbanks', name: 'Fairbanks', state: 'AK', display: 'Fairbanks, AK',
    metaTitle: 'SEO & Websites for Fairbanks Service Businesses',
    metaDescription: 'Local SEO and websites for Fairbanks heating, plumbing and home service businesses. Remote team serving Fairbanks and North Pole, from $700. Free review.',
    sub: 'Local SEO and custom websites for Fairbanks heating, plumbing and home service businesses, including North Pole, Ester and Fox.',
    photo: 'stock-plumber',
    shot: true,
    shotCaption: 'Built remotely for an Alaska business: Alaska Fast Fix Handyman, with a clear service area near the top.',
    intro: [
      'Fairbanks winters are among the coldest of any US city, with temperatures that can fall to -40\u00b0F. When a furnace, boiler or water line fails at that temperature, it is an emergency, and homeowners search for help immediately, usually on a phone.',
      'For Fairbanks service businesses, being easy to find and easy to call in those moments is what brings in work. We build websites and local search setups around exactly that: urgent services first, your phone number always in reach, and clear details on the areas you cover across the borough.',
    ],
    trades: [
      { title: 'Heating and HVAC SEO in Fairbanks', text: 'Furnace, boiler and heat pump service pages with no-heat emergency details, and a Google profile that lists every heating service you offer.', href: '/niches/hvac-website-design', cta: 'HVAC website design' },
      { title: 'Plumbing and Frozen Pipe Repair', text: 'Separate pages for frozen pipes, thawing, heat tape and burst-pipe repairs, with tap-to-call for urgent jobs.', href: '/niches/plumber-website-design', cta: 'Plumber website design' },
      { title: 'Roofing and Snow Load Work', text: 'Pages for snow removal, ice dams and roof repairs, with real photos of finished jobs and a simple inspection request.', href: '/niches/roofing-website-design', cta: 'Roofing website design' },
      { title: 'Handymen and General Contractors', text: 'A clear catalog of the work you take on and the towns you serve, built for a summer season measured in weeks, not months.', href: '/niches/web-design-for-handyman-businesses', cta: 'Handyman website design' },
    ],
    season: [
      ['Deep winter (Nov\u2013Feb)', 'No-heat calls at -40\u00b0F, frozen water and sewer lines', 'No-heat and frozen-pipe pages first; 24/7 number if you offer it'],
      ['Late winter (Mar\u2013Apr)', 'Snow load on roofs, ice dams, early meltwater', 'Snow removal and roof pages; storm photos on your profile'],
      ['Summer (May\u2013Aug)', 'Roofing, siding, decks and builds in long daylight', 'Galleries and quote forms; show your booking window'],
      ['Fall (Sep\u2013Oct)', 'Heating tune-ups, heat tape installs, winterizing', 'Tune-up and maintenance plan pages before freeze-up'],
    ],
    searches: ['seo fairbanks', 'furnace repair fairbanks ak', 'frozen pipe repair north pole ak', 'web design fairbanks', 'heating contractor fairbanks'],
    tip: 'North Pole has its own name, its own customers and its own searches. If you serve it, add it as a separate service area and mention it on your heating and plumbing pages instead of relying on "Fairbanks" alone.',
    seoTitle: 'SEO in Fairbanks: What Actually Helps',
    seo: [
      'In a smaller market like Fairbanks, fewer businesses compete for each search, so getting the basics right often makes a visible difference: a complete Google Business Profile, service-area settings that include North Pole and the surrounding communities, steady genuine reviews and a clear page for each service.',
      'If you are looking for SEO in Fairbanks, our free review covers your profile, website and listings, and the quote that follows includes only the work you actually need.',
    ],
    areasNote: 'Across the Fairbanks North Star Borough, that usually means:',
    areas: ['Fairbanks', 'North Pole', 'Ester', 'Fox', 'Two Rivers', 'Salcha'],
    faqs: [
      { q: 'Are you a Fairbanks SEO agency?', a: 'We are a remote agency rather than a Fairbanks office. Interior Alaska clients work with us by phone, email and video call, and we keep US business hours.' },
      { q: 'Is SEO worth it in a smaller market like Fairbanks?', a: 'Often, yes. With fewer competing businesses, a complete profile, accurate service areas and steady reviews can help more quickly than in a big city. Results still depend on your competitors and starting point, so the free review comes with an honest assessment, not a promised position.' },
      { q: 'What does local SEO cost for a Fairbanks business?', a: 'The review is free; the quote depends on what your profile and website need. If we also build your website, the optional $150/month Care Plan keeps hosting, security and SEO monitoring handled through the winter.' },
      { q: 'Do you build websites for Fairbanks heating and plumbing companies?', a: 'Yes. Heating and frozen-pipe work gets emergency-first pages, separate from planned installations, with tap-to-call on every screen. A Starter site costs $700, or $600 paid in full.' },
    ],
  },

  juneau: {
    slug: 'juneau', name: 'Juneau', state: 'AK', display: 'Juneau, AK',
    // 2026-11-24 (round 2): was 'SEO Agency Services for Juneau Service Businesses'. Top query "juneau seo"
    // (38 impressions in 3 months, position 7.7) now leads the title; "seo agency" (seo agency juneau 24/43.6) stays.
    metaTitle: 'Juneau SEO: Agency Services for Local Service Businesses',
    metaDescription: 'Juneau SEO for contractors and service businesses: Google Business Profile, service pages and reviews. Free local SEO review; websites from $700.',
    sub: 'Local SEO and custom websites for Juneau contractors and service businesses, from Downtown and Douglas to the Mendenhall Valley.',
    photo: 'stock-roofing',
    shot: true,
    shotCaption: 'An Alaska website we built remotely: Alaska Fast Fix Handyman, with tap-to-call and a clear service area.',
    intro: [
      'Juneau is Alaska\u2019s capital, and it is not connected to the North American road system, so residents rely on local businesses for almost every repair. It is also one of the wettest cities in the US, which keeps roofers, gutter installers, plumbers and handymen busy year-round.',
      'When something leaks or breaks, Juneau homeowners search on their phones and choose a business that looks established, local and easy to reach. Our websites and local search setups for Juneau businesses are built for that moment of choice.',
    ],
    trades: [
      { title: 'Roofing and Gutter Websites', text: 'Leak repair, re-roofing and gutter pages that show your work in real Juneau weather, with a simple inspection request.', href: '/niches/roofing-website-design', cta: 'Roofing website design' },
      { title: 'Plumbing and Drainage', text: 'Urgent leak and drainage pages kept separate from planned work, so a homeowner with water coming in finds the right page first.', href: '/niches/plumber-website-design', cta: 'Plumber website design' },
      { title: 'Handyman and Home Repair', text: 'A clear catalog of the jobs you take on and the parts of Juneau you serve, from Lemon Creek to Auke Bay.', href: '/niches/web-design-for-handyman-businesses', cta: 'Handyman website design' },
      { title: 'Heating and Heat Pumps', text: 'Service pages for furnaces, boilers and heat pumps, with tune-up and maintenance details for the long wet season.', href: '/niches/hvac-website-design', cta: 'HVAC website design' },
    ],
    season: [
      ['Fall and winter (Oct\u2013Mar)', 'Roof leaks, clogged gutters, drainage, heating', 'Leak and heating pages first; storm-day photos on your profile'],
      ['Spring (Apr\u2013May)', 'Moss and roof cleaning, exterior repairs begin', 'Exterior service pages and before-and-after photos'],
      ['Summer (Jun\u2013Aug)', 'Painting, decks, roofs in the driest stretch', 'Galleries and quote forms; show how far ahead you book'],
      ['September', 'Winter prep, gutter guards, heat pump service', 'Maintenance and tune-up pages before the fall rains'],
    ],
    searches: ['seo agency juneau', 'roof repair juneau ak', 'plumber mendenhall valley', 'handyman juneau', 'website design juneau'],
    tip: 'Juneau residents often search by neighborhood ("Mendenhall Valley plumber", "Douglas handyman"). If you serve those areas, name them on your service pages and in your Business Profile description.',
    seoTitle: 'Looking for an SEO Agency in Juneau?',
    seo: [
      'In Juneau, most people find local businesses through Google\u2019s map results and word of mouth. A complete Google Business Profile, accurate categories, the neighborhoods you actually serve and a steady flow of genuine reviews do most of the work, supported by clear service pages on your website.',
      'Our agency works with Juneau businesses remotely. The first step is a free review of your profile, website and listings, followed by a quote limited to what needs fixing.',
      // 2026-11-24: Search Console round (juneau seo 38/7.7, seo agency juneau 24/43.6).
      'Juneau SEO is less crowded than SEO in big cities, which works in your favor: a business with a complete profile, real photos of Juneau jobs and reviews that mention the neighborhood can stand out quickly. What does not work here is the big-city playbook of dozens of near-identical area pages; Juneau is one city with a handful of neighborhoods, and your pages should reflect that.',
      // 2026-11-24 (round 2): a short Juneau SEO checklist.
      'A simple Juneau SEO checklist: choose the Google Business Profile category that matches your main service, list every service you offer, name the Juneau neighborhoods you actually cover in your description, add photos of real local jobs every month, ask every happy customer for a review, and make sure your business name, address and phone number match exactly on your website, Facebook page and any local directories you are listed in.',
    ],
    areasNote: 'Juneau neighborhoods our clients typically cover:',
    areas: ['Downtown', 'Douglas Island', 'Mendenhall Valley', 'Lemon Creek', 'Auke Bay', 'Thane'],
    faqs: [
      { q: 'Do you have an office in Juneau?', a: 'No. Juneau is reachable only by air or sea, and we work with Juneau clients remotely by phone, email and video call, keeping US business hours.' },
      { q: 'What does local SEO involve for a Juneau business?', a: 'Mainly your Google Business Profile (categories, services, hours, photos), consistent business details across directories, a clear page for each service and a simple way to ask happy customers for reviews.' },
      { q: 'Can you guarantee a top position in Juneau searches?', a: 'No one honestly can. Google decides rankings and weighs how close each searcher is to a business. We work on the factors you control and give you a straight assessment after the free review.' },
      { q: 'How long does Juneau SEO take to show results?', a: 'Fixes to your Google Business Profile, such as categories, services and photos, often show within a few weeks. Ranking for more competitive searches usually takes several months of steady reviews and good service pages. We tell you what to expect after the free review.' },
      { q: 'What would a website for my Juneau business cost?', a: 'A Starter website is $700 with split payments ($600 paid in full) for a homepage and 2 inner pages; Growth covers up to 7 pages for $1,000. You see a free homepage sample first.' },
    ],
  },

  denver: {
    slug: 'denver', name: 'Denver Metro', state: 'CO', display: 'Denver, Centennial & Aurora, CO',
    metaTitle: 'Handyman Websites & SEO in Denver, Centennial & Aurora',
    metaDescription: 'Handyman and home service websites with local SEO for Denver, Centennial, Aurora and Boulder. From $700, free homepage sample in 24 hours.',
    sub: 'Custom websites and local SEO for handymen and home service businesses across the Denver metro, including Centennial, Aurora, Littleton and Boulder.',
    photo: 'stock-webdesign',
    intro: [
      'Across the Front Range, home service work follows the weather: hailstorms in spring and summer bring roof and exterior repairs, cold snaps bring heating calls, and the dry climate shapes landscaping and irrigation work. Homeowners in Centennial, Aurora or Boulder compare a few local businesses on their phones before they call.',
      'Denver-area homeowners want to see three things before they call: that you do the job, that you cover their suburb and that reaching you is easy. Our websites and local search setups put those three answers first.',
    ],
    trades: [
      { title: 'Handyman Websites in Centennial and Across Colorado', text: 'Grouped services, a photo quote form and the suburbs you cover, so a homeowner in Centennial or Highlands Ranch can book you quickly.', href: '/niches/web-design-for-handyman-businesses', cta: 'Handyman website design' },
      { title: 'Roofing and Hail Damage', text: 'Hail damage and replacement pages, an honest explanation of how insurance claims work, and real photos of finished roofs.', href: '/niches/roofing-website-design', cta: 'Roofing website design' },
      { title: 'Furnace and AC Contractors', text: 'Heating pages ready for the first cold snap and cooling pages before July, with financing details if you offer it.', href: '/niches/hvac-website-design', cta: 'HVAC website design' },
      { title: 'Landscaping and Sprinkler Work', text: 'Project galleries plus pages for sprinkler start-ups, fall blowouts, lawn care and hardscape, with easy quote requests.', href: '/niches/landscaping-website-design', cta: 'Landscaping website design' },
    ],
    season: [
      ['Spring (Apr\u2013Jun)', 'Hail damage to roofs, gutters and siding; sprinkler start-ups', 'Hail and storm pages live before the season starts'],
      ['Summer (Jul\u2013Aug)', 'AC repair, decks, fences, landscaping', 'Cooling and outdoor project pages with galleries'],
      ['Fall (Sep\u2013Oct)', 'Sprinkler blowouts, furnace tune-ups, gutter cleaning', 'Blowout and tune-up booking pages'],
      ['Winter (Nov\u2013Mar)', 'Furnace repair, frozen pipes in cold snaps, indoor projects', 'Heating pages first; indoor handyman services'],
    ],
    // 2026-11-26 (round 3): 'hvac seo aurora co' added (7 impressions, position 15.7 on this page).
    searches: ['website design for handyman centennial', 'handyman website colorado', 'hvac seo aurora co', 'hail damage roofer aurora', 'furnace repair littleton', 'handyman boulder'],
    tip: 'After a hailstorm, homeowners search for "hail damage" plus their suburb within days. A ready-made hail damage page with your inspection process and local photos lets you catch that wave instead of building a page after it passes.',
    seoTitle: 'Local SEO Across the Denver Metro',
    seo: [
      'The Denver metro spreads across many suburbs, so your Google Business Profile and website should show exactly which ones you serve. Centennial, Aurora and Littleton each get searched by name, and a profile that lists them clearly matches more of those searches.',
      'We set up accurate service areas, a clear page for each service and a steady review process, adding suburb pages only where you have real jobs to show. It starts with a free review of your local visibility.',
    ],
    areasNote: 'Front Range suburbs our clients typically serve:',
    areas: ['Denver', 'Centennial', 'Aurora', 'Littleton', 'Highlands Ranch', 'Lakewood', 'Englewood', 'Boulder'],
    faqs: [
      { q: 'Do you design websites for handymen in Centennial?', a: 'Yes. We work remotely with handyman businesses across Colorado. Your site is built around the services you offer and the suburbs you serve, with the service area shown clearly near the top.' },
      { q: 'Is there someone from Embra in Colorado?', a: 'No. We are a remote team; Colorado clients work with us by phone, email and video call during US business hours.' },
      { q: 'What does a handyman website cost?', a: 'Starter is $700 total with split payments, or $600 paid in full, for a custom homepage plus 2 inner pages. You see a free homepage sample, built within 24 hours, before deciding.' },
      { q: 'Can you help roofers after a hailstorm season?', a: 'Yes. We build clear storm damage pages and inspection request forms, and explain the insurance claim process plainly, without promising to negotiate claims, which is licensed public-adjuster work in many states.' },
      // 2026-11-26 (round 3): hvac seo aurora co 7/15.7, hvac seo denver 2/51.5, denver hvac seo 1/14.
      { q: 'Do you offer HVAC SEO in Aurora and Denver?', a: 'Yes. For furnace and AC contractors in Aurora, Denver and the rest of the metro, we set up a Google Business Profile with accurate heating and cooling categories and the suburbs you serve, separate pages for furnace repair, AC repair and heat pumps, and a steady review habit. Front Range searches swing from heating in winter to cooling in July, so both sets of pages need to be live before their season. It starts with a free review of your local visibility.' },
    ],
  },

  spokane: {
    slug: 'spokane', name: 'Spokane', state: 'WA', display: 'Spokane & Airway Heights, WA',
    metaTitle: 'SEO for Spokane & Airway Heights Service Businesses',
    metaDescription: 'Airway Heights and Spokane SEO for service businesses: Google profile, service pages and reviews. Free local SEO review; websites from $700.',
    sub: 'Local SEO and custom websites for service businesses in Spokane, Spokane Valley, Airway Heights and Liberty Lake.',
    photo: 'stock-localseo',
    intro: [
      'The Inland Northwest has four real seasons: snow and ice in winter, hot, dry summers and busy spring and fall project seasons. For Spokane-area contractors, that means heating calls, roof and gutter work, landscaping and handyman jobs all peak at different times of year.',
      'Whether a homeowner is in Spokane Valley or out in Airway Heights, the choice usually happens on a phone in a few minutes. We make sure your business is the one that looks local, established and easy to call.',
    ],
    trades: [
      { title: 'Search Engine Optimization for Airway Heights and Spokane', text: 'A complete Google Business Profile, accurate service areas and a steady review process, the basics most local calls come from.', href: '/services/local-seo', cta: 'Local SEO service' },
      { title: 'Handyman Websites in Spokane', text: 'Grouped services, a photo quote form and the neighborhoods you cover, from the South Hill to Spokane Valley.', href: '/niches/web-design-for-handyman-businesses', cta: 'Handyman website design' },
      { title: 'Heating, Heat Pumps and AC', text: 'Cold-snap furnace pages and summer AC pages, each with tap-to-call, so both seasons bring calls.', href: '/niches/hvac-website-design', cta: 'HVAC website design' },
      { title: 'Roofing and Snow Damage', text: 'Ice dam, snow damage and replacement pages with real job photos and an inspection request.', href: '/niches/roofing-website-design', cta: 'Roofing website design' },
    ],
    season: [
      ['Winter (Dec\u2013Feb)', 'Snow and ice damage, furnace calls, frozen pipes', 'Heating and emergency pages first'],
      ['Spring (Mar\u2013May)', 'Roof and gutter repairs, yard clean-ups, sprinkler start-ups', 'Exterior and yard pages with fresh photos'],
      ['Summer (Jun\u2013Aug)', 'AC repair in heat waves, decks, painting, landscaping', 'Cooling and project pages; quote forms'],
      ['Fall (Sep\u2013Nov)', 'Furnace and heat pump service, sprinkler blowouts, winterizing', 'Tune-up and blowout booking pages'],
    ],
    searches: ['airway heights search engine optimization', 'seo spokane', 'handyman spokane valley', 'furnace repair spokane', 'roofer liberty lake'],
    tip: 'If you also work across the state line in Post Falls or Coeur d\u2019Alene, say so on your service pages and Business Profile. Homeowners there search by their own city name, not by "Spokane".',
    seoTitle: 'Airway Heights and Spokane SEO: What Actually Helps',
    seo: [
      'Spokane, Spokane Valley and Airway Heights are separate places in Google\u2019s eyes, so your profile and website should state clearly which ones you serve. Consistent business details across directories help Google trust that information.',
      'Our local SEO work for Washington businesses begins with a free review of your profile, website and listings, and you approve the quote before anything starts.',
    ],
    areasNote: 'Inland Northwest communities our clients typically serve:',
    areas: ['Spokane', 'Spokane Valley', 'Airway Heights', 'Liberty Lake', 'Cheney', 'Mead', 'Medical Lake'],
    faqs: [
      { q: 'Do you offer search engine optimization in Airway Heights?', a: 'Yes. We work remotely with businesses in Airway Heights, Spokane and Spokane Valley, starting with a free review of your Google Business Profile, website and listings.' },
      // 2026-11-24: Search Console round (airway heights seo 99/12.3, airway heights web design 14/14.6).
      { q: 'Do you also do web design for Airway Heights businesses?', a: 'Yes. We build custom websites for Airway Heights contractors and service businesses, with a page for each service, tap-to-call on every screen and the towns you cover named clearly, from Airway Heights and Medical Lake to Spokane and Cheney. You see a free homepage sample within 24 hours.' },
      { q: 'What does Airway Heights SEO involve for a small business?', a: 'Mostly three things: a Google Business Profile that lists Airway Heights as part of your service area, service pages that mention the places you work, and a steady flow of genuine reviews. Airway Heights sits just west of Spokane, next to Fairchild Air Force Base, and many residents search by their own town name, so naming it matters.' },
      { q: 'Are you based in Washington State?', a: 'No. We are a remote team; Spokane-area clients reach us by phone, email or video call during US business hours.' },
      { q: 'How is SEO priced for a Spokane business?', a: 'After the free review you get a quote for only the work your profile and site need. Website clients may also add the $150/month Care Plan, which includes SEO monitoring.' },
      { q: 'Can you guarantee first-page rankings in Spokane?', a: 'No one honestly can. Google decides rankings, and distance from the searcher is a factor no one controls. We improve what you can control and explain what to expect.' },
    ],
  },

  phoenix: {
    slug: 'phoenix', name: 'Phoenix Metro', state: 'AZ', display: 'Phoenix, Tempe & Mesa, AZ',
    metaTitle: 'Handyman & HVAC Websites in Phoenix, Tempe & Mesa',
    metaDescription: 'Websites and local SEO for handymen, AC repair and home service businesses in Phoenix, Tempe, Mesa, Chandler and Scottsdale. From $700, free homepage sample.',
    sub: 'Custom websites and local SEO for handymen, HVAC companies and home service businesses in Phoenix, Tempe, Mesa, Chandler and Scottsdale.',
    photo: 'stock-hvac',
    intro: [
      'In the Phoenix metro, summer heat turns a failed air conditioner into an emergency, and the July-to-September monsoon season brings roof, drainage and storm repairs. Many seasonal residents return each winter, adding a second busy season for handymen and home repair businesses.',
      'In Tempe, Mesa or Chandler, homeowners often have a few minutes, a hot house and a phone. Your website has to show quickly that you handle the job and can come soon; that is what we design for.',
    ],
    trades: [
      { title: 'AC Repair and HVAC Websites', text: 'Emergency AC repair pages with tap-to-call, separate from replacements and maintenance plans, ready before the summer rush.', href: '/niches/hvac-website-design', cta: 'HVAC website design' },
      { title: 'Handyman Websites in Tempe and Mesa', text: 'Grouped services, a photo quote form and the cities you cover, so a homeowner in Tempe can see you do the job.', href: '/niches/web-design-for-handyman-businesses', cta: 'Handyman website design' },
      { title: 'Desert Landscaping and Irrigation', text: 'Galleries of finished yards and separate pages for desert landscaping, drip irrigation and maintenance.', href: '/niches/landscaping-website-design', cta: 'Landscaping website design' },
      { title: 'Roofing and Monsoon Repairs', text: 'Tile and flat roof repair pages, monsoon storm damage details and a simple inspection request.', href: '/niches/roofing-website-design', cta: 'Roofing website design' },
    ],
    season: [
      ['Spring (Mar\u2013Apr)', 'AC tune-ups, irrigation checks, landscaping', 'Tune-up offers and landscaping galleries'],
      ['Summer (May\u2013Sep)', 'AC failures in extreme heat', 'Emergency AC page with tap-to-call at the top'],
      ['Monsoon (Jul\u2013Sep)', 'Roof leaks, storm damage, drainage', 'Storm damage and roof repair pages'],
      ['Fall\u2013winter (Oct\u2013Feb)', 'Seasonal residents return: handyman jobs, remodels, yard work', 'Handyman and project pages; seasonal-resident FAQs'],
    ],
    searches: ['website design for handyman tempe', 'handyman mesa az', 'ac repair phoenix', 'desert landscaping chandler', 'roof repair after monsoon scottsdale'],
    tip: 'Seasonal residents often book repairs before they arrive in the fall. A short FAQ on how you handle work while owners are away (keys, photos, payment) answers a question competitors usually ignore.',
    seoTitle: 'Local SEO Across the Valley',
    seo: [
      'The Valley is made up of many separate cities, so your Google Business Profile and website should state exactly which ones you serve. Tempe, Mesa and Chandler searches each favor businesses that clearly cover that city.',
      'We give each core service its own page, keep your business details consistent across directories and set up a steady review habit. Arizona clients start with a free review of their local visibility.',
    ],
    areasNote: 'Valley cities our clients typically serve:',
    areas: ['Phoenix', 'Tempe', 'Mesa', 'Chandler', 'Gilbert', 'Scottsdale', 'Glendale'],
    faqs: [
      { q: 'Do you build websites for handymen in Tempe and Mesa?', a: 'Yes. We work remotely with handyman businesses across the Phoenix metro. Your site is built around your services and the cities you cover.' },
      { q: 'Do you have anyone on the ground in Arizona?', a: 'No. We are a remote team; Arizona clients work with us by phone, email and video call during US business hours.' },
      { q: 'How should an HVAC website prepare for summer?', a: 'Have AC repair, replacement and maintenance pages live and indexed well before the heat arrives, with tap-to-call on every page and accurate hours on your Google profile.' },
      { q: 'What would my Phoenix-area website cost?', a: 'Starter runs $700 split into payments ($600 paid in full) for 3 pages; Growth is $1,000 for up to 7 pages, enough for separate AC, handyman or landscaping service pages.' },
    ],
  },

  // 2026-11-26 (round 3): four guides for the top locations in 3 months of Search Console queries that had no page.
  // Ranked on impressions outside the weekly rank-tracker sweeps (see PHASE1_CHANGELOG.md, section AP):
  // Arkansas 64 (hvac website design ar 57, website design for plumbers arkansas 18, handyman arkansas 15),
  // Alabama 40 (hvac website design mobile al / birmingham al / montgomery al), Memphis 20 (plumbers memphis 12,
  // hvac memphis 9), Bridgeport CT 15 (website design for handyman bridgeport). Licensing facts checked against the
  // state boards on 2026-11-26. Honest framing: remote team, no clients in these states yet.
  arkansas: {
    slug: 'arkansas', name: 'Arkansas', state: 'AR', display: 'Arkansas',
    metaTitle: 'Arkansas HVAC & Plumbing Website Design and SEO',
    metaDescription: 'HVAC, plumbing and contractor websites with local SEO for Arkansas, from Little Rock and Conway to Fayetteville, Rogers and Bentonville. From $700.',
    sub: 'Custom websites and local SEO for Arkansas HVAC companies, plumbers, roofers and handymen, from Central Arkansas to Northwest Arkansas, Fort Smith and Jonesboro.',
    photo: 'stock-hvac',
    areasTitle: 'Arkansas Markets We Work With',
    intro: [
      'Arkansas summers are long, hot and humid, spring brings severe storms with hail and the occasional tornado, and winter can still deliver ice storms that bring down limbs and freeze pipes. For HVAC companies, plumbers, roofers and handymen, work arrives in waves, and most homeowners look for help on their phones the same day something fails.',
      'Arkansas is also several separate markets: Central Arkansas around Little Rock, Conway and Benton; fast-growing Northwest Arkansas around Fayetteville, Springdale, Rogers and Bentonville; Fort Smith; Jonesboro in the northeast; and Hot Springs. A homeowner in Rogers looks for a business that serves Rogers, so we build your website and Google profile around the towns you actually work in.',
    ],
    trades: [
      { title: 'HVAC Website Design in Arkansas', text: 'AC repair pages ready before the first heat wave, heating and heat pump pages for winter, maintenance plan sign-ups, and your Arkansas HVACR license class shown where homeowners and builders can see it.', href: '/niches/hvac-website-design', cta: 'HVAC website design' },
      { title: 'Website Design for Arkansas Plumbers', text: 'Emergency pages for leaks, water heaters and pipes frozen in an ice storm, kept apart from planned work, with your state plumbing license listed and tap-to-call on every screen.', href: '/niches/plumber-website-design', cta: 'Plumber website design' },
      { title: 'Roofing After Hail and Wind', text: 'Hail and wind damage pages with an inspection request, photos of finished Arkansas roofs and a plain explanation of how insurance claims usually work.', href: '/niches/roofing-website-design', cta: 'Roofing website design' },
      { title: 'Handyman and Home Improvement Websites', text: 'A clear list of the jobs you take on and the towns you cover, a photo quote form, and your home improvement license if your jobs are large enough to need one.', href: '/niches/web-design-for-handyman-businesses', cta: 'Handyman website design' },
    ],
    season: [
      ['Spring (Mar–May)', 'Hail, wind and tornado damage; roof and siding repairs; AC start-ups', 'Storm damage and AC tune-up pages live before the season'],
      ['Summer (Jun–Sep)', 'AC breakdowns in muggy heat, outdoor projects', 'AC repair page first, with your phone number in the header'],
      ['Fall (Oct–Nov)', 'Furnace and heat pump checks, leaf-clogged gutters, fall projects', 'Tune-up and maintenance plan pages'],
      ['Winter (Dec–Feb)', 'Ice storms, fallen limbs, frozen pipes, furnace and heat pump calls', 'Heating and frozen-pipe pages first'],
    ],
    searches: ['hvac website design ar', 'website design for plumbers arkansas', 'website design for handyman arkansas', 'ac repair little rock', 'roof hail damage bentonville'],
    tip: 'Homeowners and general contractors in Arkansas often check a license before they hire. Put your license type and number in your website footer and on your quote page (HVACR, plumbing or contractor license, whichever covers your work), so nobody has to ask.',
    seoTitle: 'HVAC SEO and Local SEO in Arkansas',
    seo: [
      'Search results in Arkansas are local to each city: "ac repair" in Conway shows different businesses than the same search in Springdale. Your Google Business Profile should list the cities you really serve, your main category should match your main service (HVAC contractor or Plumber, for example), and your website should have a clear page for each service.',
      'We set up the profile, the service pages and the structured data, help you build a steady review habit, and add city pages only for places where you have real jobs and reviews to show. Arkansas businesses start with a free homepage sample or a free review of their local visibility.',
    ],
    areasNote: 'Arkansas markets we build websites and local search for:',
    areas: ['Little Rock', 'Conway', 'Fayetteville', 'Springdale', 'Rogers', 'Bentonville', 'Fort Smith', 'Jonesboro', 'North Little Rock', 'Benton', 'Hot Springs'],
    faqs: [
      { q: 'Do you build HVAC websites for Arkansas contractors?', a: 'Yes. We work remotely with heating and cooling companies anywhere in Arkansas. Your site gets separate AC repair, installation, heating and maintenance pages, tap-to-call on every screen and your HVACR license shown clearly. The Starter build is $700, or $600 if paid in full.' },
      { q: 'Which license details should an Arkansas contractor show on a website?', a: 'The license that covers your work. HVACR contractors are licensed through the Arkansas Department of Labor and Licensing, plumbers through the Arkansas Department of Health, and the Arkansas Contractors Licensing Board licenses commercial contractors on jobs of $50,000 or more and home improvement contractors on single-family home jobs over $2,000. Rules change, so confirm the current requirements with your board.' },
      { q: 'Is anyone from Embra based in Arkansas?', a: 'No. We are a remote team and do not have Arkansas clients to show yet, so our case studies come from other states. Arkansas businesses work with us by phone, email and video call during US business hours.' },
      { q: 'Should I make separate pages for Little Rock and Northwest Arkansas?', a: 'Only if you really work in both. If you do, give each market its own page with jobs, photos and reviews from there. If you serve one metro, one strong set of service pages naming your towns works better than thin pages for every city.' },
    ],
  },

  alabama: {
    slug: 'alabama', name: 'Alabama', state: 'AL', display: 'Birmingham, Mobile & Montgomery, AL',
    metaTitle: 'Alabama HVAC Website Design: Mobile & Birmingham',
    metaDescription: 'HVAC, roofing and home service websites with local SEO for Birmingham, Mobile, Montgomery, Huntsville and Tuscaloosa. From $700, free homepage sample.',
    sub: 'Custom websites and local SEO for HVAC companies, roofers, plumbers and handymen across Alabama, from Huntsville and Birmingham to Montgomery and Mobile.',
    photo: 'stock-roofing',
    areasTitle: 'Alabama Markets We Work With',
    intro: [
      'Alabama’s home service work is shaped by weather from two directions: hurricanes and tropical storms along the Gulf Coast around Mobile and Baldwin County, and severe spring storms and tornadoes across central and north Alabama. Add long, humid summers that keep air conditioners running for months, and HVAC companies and roofers get more urgent calls than almost anyone.',
      'Birmingham, Huntsville, Montgomery, Mobile and Tuscaloosa each have their own competition and their own searches. We build websites and Google profiles around the city you actually work in, so a homeowner in Hoover or Daphne sees quickly that you cover their area and can come soon.',
    ],
    trades: [
      { title: 'HVAC Website Design in Birmingham, Mobile and Montgomery', text: 'AC repair and installation pages ready before summer, heat pump and heating pages for winter, and your Alabama HVAC license shown where homeowners and builders can find it.', href: '/niches/hvac-website-design', cta: 'HVAC website design' },
      { title: 'Roofing, Storm Damage and FORTIFIED Roofs', text: 'Storm and hail damage pages, a plain explanation of insurance claims and, if you are an eligible contractor, a page on FORTIFIED roof upgrades and how the state grant program works.', href: '/niches/roofing-website-design', cta: 'Roofing website design' },
      { title: 'Plumbing Websites', text: 'Emergency leak and water heater pages kept separate from planned work, with tap-to-call on every screen and the towns you cover named clearly.', href: '/niches/plumber-website-design', cta: 'Plumber website design' },
      { title: 'Handyman and Remodeling Websites', text: 'A clear catalog of the jobs you do and the towns you cover, plus your Home Builders Licensure Board license if your projects need one.', href: '/niches/web-design-for-handyman-businesses', cta: 'Handyman website design' },
    ],
    season: [
      ['Spring (Mar–May)', 'Severe storms and tornadoes; roof, siding and tree damage; AC start-ups', 'Tornado and storm repair pages, plus AC tune-up offers, published by March'],
      ['Summer (Jun–Sep)', 'Air conditioners failing in long humid stretches; Gulf hurricane season from June 1', 'Emergency AC page first; storm repair pages on the coast'],
      ['Fall (Oct–Nov)', 'Storm repairs on the coast until the season ends Nov 30, heating tune-ups, gutters', 'Repair galleries and tune-up booking pages'],
      ['Winter (Dec–Feb)', 'Heat pump and furnace calls in cold snaps, occasional frozen pipes, indoor projects', 'Heating pages first; indoor handyman services'],
    ],
    searches: ['hvac website design mobile al', 'hvac website design birmingham al', 'hvac website design montgomery al', 'fortified roof contractor mobile', 'ac repair huntsville'],
    tip: 'Many Gulf Coast homeowners now ask about FORTIFIED roofs, because the standard can earn wind insurance discounts and the Strengthen Alabama Homes program offers grants toward the upgrade. If you install them, a short, accurate page on how the process works answers a question most roofing websites ignore. Check the Alabama Department of Insurance for the current rules before you publish.',
    seoTitle: 'HVAC SEO and Local SEO in Alabama',
    seo: [
      'Alabama searches are local: "hvac company" searched in Hoover returns a different set of businesses from the one in Fairhope. A complete Google Business Profile with the right categories, the cities you actually serve and a steady flow of genuine reviews matters as much as the website itself.',
      'We give each service its own page, add HVAC or roofing structured data where it fits, keep your business details consistent across directories, and add city pages only where you have real jobs to show. Your first step is free: either a custom homepage sample within 24 hours or a review of how you show up in local search.',
    ],
    areasNote: 'Alabama cities and suburbs we can build for:',
    areas: ['Birmingham', 'Hoover', 'Huntsville', 'Montgomery', 'Mobile', 'Daphne', 'Fairhope', 'Tuscaloosa', 'Madison', 'Prattville', 'Auburn'],
    faqs: [
      { q: 'Do you design HVAC websites for Alabama contractors?', a: 'Yes. Heating and cooling contractors anywhere from Huntsville to Mobile can work with us remotely. Your site gets separate AC repair, installation, heat pump and maintenance pages, with your license and service area near the top. Starter costs $700 in split payments or $600 upfront.' },
      { q: 'Which licenses should an Alabama contractor show on a website?', a: 'The one that covers your work. HVAC contractors are licensed by the Alabama Board of Heating, Air Conditioning and Refrigeration Contractors. Residential building and remodeling jobs over $10,000 fall under the Alabama Home Builders Licensure Board, which also issues roofing licenses. Confirm the current rules with your board before publishing.' },
      { q: 'Do you have an office in Alabama?', a: 'No, and we have no Alabama clients yet. Everything happens remotely, by phone, email and video call on US business hours; our case studies include businesses in California, Illinois and Alaska.' },
      { q: 'Can my roofing website mention FORTIFIED roofs and grants?', a: 'Yes, if it is accurate. Explain what a FORTIFIED roof is and whether you are an eligible contractor, and link to the Alabama Department of Insurance for the current grant rules instead of promising amounts or approvals.' },
    ],
  },

  memphis: {
    slug: 'memphis', name: 'Memphis', state: 'TN', display: 'Memphis, TN & the Mid-South',
    metaTitle: 'Memphis Plumber & HVAC Website Design and Local SEO',
    metaDescription: 'Websites and local SEO for Memphis plumbers, HVAC companies and contractors, from Germantown and Collierville to Southaven and West Memphis. From $700.',
    sub: 'Custom websites and local SEO for plumbers, HVAC companies, tree services and contractors in Memphis, Germantown, Bartlett and Collierville, and across the state lines in Southaven and West Memphis.',
    photo: 'stock-plumber',
    areasTitle: 'Memphis-Area Communities We Work With',
    intro: [
      'Memphis summers are hot and humid, thunderstorms with strong straight-line winds are common, and winter ice storms can bring down the mature trees in older neighborhoods. Plumbers, HVAC companies, tree services and roofers all feel those swings, and homeowners usually look for help on a phone, in a hurry.',
      'The Memphis metro also crosses three states: Shelby County in Tennessee, DeSoto County in Mississippi and Crittenden County in Arkansas. Each has its own licensing rules and its own searches, so your website and Google profile should say plainly which side of the state lines you work on.',
    ],
    trades: [
      { title: 'Website Design for Plumbers in Memphis', text: 'Emergency leak, sewer and water heater pages kept separate from planned work, with tap-to-call on every screen and the parts of the metro you cover named clearly.', href: '/niches/plumber-website-design', cta: 'Plumber website design' },
      { title: 'HVAC Websites for a Long Cooling Season', text: 'AC repair and replacement pages ready before the heat, heat pump and furnace pages for winter, and maintenance plan sign-ups for repeat customers.', href: '/niches/hvac-website-design', cta: 'HVAC website design' },
      { title: 'Tree Service After Storms and Ice', text: 'Storm cleanup and emergency removal pages with photos of real jobs, and a quote form that accepts pictures of the damage.', href: '/niches/tree-service-website-design', cta: 'Tree service website design' },
      { title: 'Roofers and Contractors', text: 'Wind and hail damage pages, a simple inspection request and your license details for each state you work in.', href: '/niches/roofing-website-design', cta: 'Roofing website design' },
    ],
    season: [
      ['Spring (Mar–May)', 'Severe storms, wind damage, fallen trees, roof repairs', 'Storm damage and tree removal pages ready to go'],
      ['Summer (Jun–Sep)', 'AC calls in heat waves, sewer backups after heavy rain', 'Emergency AC and plumbing pages with tap-to-call'],
      ['Fall (Oct–Nov)', 'Heating tune-ups, gutter cleaning, tree trimming before winter', 'Tune-up and trimming pages; maintenance plans'],
      ['Winter (Dec–Feb)', 'Ice storms, frozen and burst pipes, no-heat calls', 'Frozen-pipe and heating pages first'],
    ],
    searches: ['website design for plumbers memphis', 'website design for hvac memphis', 'plumber germantown tn', 'emergency tree removal memphis', 'ac repair southaven ms'],
    tip: 'Shelby County is one of the Tennessee counties where home improvement jobs over $3,000 and under $25,000 need a state home improvement license, and jobs of $25,000 or more need a contractor’s license. If you hold one, show the number on your website; homeowners in Germantown and Collierville do check.',
    seoTitle: 'Local SEO Across the Memphis Metro',
    seo: [
      'Germantown, Collierville, Bartlett, Cordova and Southaven are each searched by name, and Google treats a business in Southaven differently from one in Midtown. List the communities you actually serve in your Google Business Profile and on your service pages, and keep your name, address and phone number the same everywhere you are listed.',
      'We set up your profile, a clear page for each service and a steady review habit, and add area pages only where you have real jobs to show. Before you pay anything, you can see a free homepage sample or get a free look at your Google profile and listings.',
    ],
    areasNote: 'Communities across the Mid-South we build websites and local search for:',
    areas: ['Memphis', 'Germantown', 'Collierville', 'Bartlett', 'Cordova', 'Southaven', 'Olive Branch', 'West Memphis', 'Arlington', 'Horn Lake'],
    faqs: [
      { q: 'Do you build websites for plumbers in Memphis?', a: 'Yes. We work remotely with plumbing companies across the Memphis metro. Your site separates emergency work from planned jobs, shows your license and the areas you cover, and puts tap-to-call on every screen. A three-page Starter site is $700, or $600 paid in full.' },
      { q: 'My business works in Tennessee and Mississippi. How should my website handle that?', a: 'Name both clearly. A service-area section can list your Tennessee and Mississippi communities, and your license details can show which license covers which state. Mississippi licenses residential builders and remodelers through the Mississippi State Board of Contractors, so check its current rules for your jobs.' },
      { q: 'Is Embra based in Memphis?', a: 'No. Embra is a remote team, and the Mid-South would be a new market for us: there are no Memphis-area clients in our portfolio yet. Calls, design reviews and updates happen by phone, email and video during US business hours.' },
      { q: 'Do HVAC companies in Memphis need a page for every suburb?', a: 'No. Start with strong service pages and a clear list of the communities you serve. Add a suburb page only when you have real jobs, photos and reviews from there to show.' },
    ],
  },

  bridgeport: {
    slug: 'bridgeport', name: 'Bridgeport', state: 'CT', display: 'Bridgeport & Fairfield County, CT',
    metaTitle: 'Handyman & Contractor Websites in Bridgeport, CT',
    metaDescription: 'Websites and local SEO for handymen and home improvement contractors in Bridgeport, Stratford, Fairfield and Trumbull, CT. From $700, free homepage sample.',
    sub: 'Custom websites and local SEO for handymen, remodelers and home service businesses in Bridgeport, Stratford, Fairfield, Trumbull, Shelton and Milford.',
    photo: 'stock-handyman',
    areasTitle: 'Fairfield County Towns We Work With',
    intro: [
      'Many homes around Bridgeport are decades old: multi-family houses, older plumbing and wiring, and porches, windows and roofs that need steady upkeep. Add nor’easters, coastal storms and freeze-thaw winters, and handymen and remodelers here rarely run short of work. What they compete on is being easy to find, easy to trust and easy to call.',
      'In Connecticut, trust starts with a registration number. Home improvement contractors register with the Department of Consumer Protection, must include the registration number in their advertising and need a written contract before a job starts. A website that shows your HIC number, your insurance and real photos of local jobs answers the first questions homeowners ask.',
    ],
    trades: [
      { title: 'Handyman Websites in Bridgeport', text: 'A clear list of the repairs and small projects you take on, a quote form that accepts photos, and the towns you cover from Stratford to Shelton.', href: '/niches/web-design-for-handyman-businesses', cta: 'Handyman website design' },
      { title: 'Remodelers and Home Improvement Contractors', text: 'Kitchen, bath, deck and window pages with project galleries, your HIC registration number and a simple consultation request.', href: '/services/web-design', cta: 'Custom web design' },
      { title: 'Roofing, Siding and Storm Repairs', text: 'Pages for leaks, ice dams and storm damage after a nor’easter, with real job photos and an inspection request.', href: '/niches/roofing-website-design', cta: 'Roofing website design' },
      { title: 'Plumbing and Heating in Older Homes', text: 'Boiler, water heater and pipe repair pages, urgent calls kept separate from planned work, and your state license shown clearly.', href: '/niches/plumber-website-design', cta: 'Plumber website design' },
    ],
    season: [
      ['Spring (Mar–May)', 'Exterior repairs after winter, porches, painting, gutters', 'Exterior and repair pages with fresh photos'],
      ['Summer (Jun–Aug)', 'Decks, windows, remodels, painting', 'Project galleries and quote forms; show your booking window'],
      ['Fall (Sep–Nov)', 'Weatherproofing, gutter cleaning, boiler and furnace tune-ups', 'Maintenance and tune-up pages before winter'],
      ['Winter (Dec–Feb)', 'Nor’easters, ice dams, frozen pipes, indoor repairs', 'Emergency and indoor-repair pages first'],
    ],
    searches: ['website design for handyman bridgeport', 'handyman stratford ct', 'home improvement contractor fairfield ct', 'ice dam repair trumbull', 'handyman milford ct'],
    tip: 'Many Bridgeport-area homes were built before 1978, so the EPA’s lead-safe renovation (RRP) rule applies when work disturbs painted surfaces. Homeowners with young children increasingly ask about it. If your firm is RRP-certified, say so on your website; it is a real reason to choose you.',
    seoTitle: 'Local SEO Across Fairfield County',
    seo: [
      'Bridgeport, Stratford, Fairfield and Trumbull sit close together but are searched separately. Your Google Business Profile and website should name the towns you actually serve, and your business details should match everywhere you are listed.',
      'We set up the profile, a clear page for each service and a steady review habit, and add town pages only where you have real jobs and reviews to show. The first step costs nothing: a homepage sample built for your business, or a review of your profile, site and listings.',
    ],
    areasNote: 'Towns around Bridgeport we build websites and local search for:',
    areas: ['Bridgeport', 'Stratford', 'Fairfield', 'Trumbull', 'Shelton', 'Milford', 'Monroe', 'Norwalk', 'Easton'],
    faqs: [
      { q: 'Do you build websites for handymen in Bridgeport?', a: 'Yes. We work remotely with handyman businesses in Connecticut. Your site lists the jobs you do and the towns you cover, shows your HIC registration number, and lets homeowners send a photo with their quote request. Starter sites cost $700 split into payments, $600 if you pay in full.' },
      { q: 'Does my Connecticut registration number need to be on my website?', a: 'Connecticut’s Home Improvement Act requires registered contractors to include their registration number in any advertisement, so it belongs on your website too: in the footer and on your quote page. Ask the Department of Consumer Protection if you are unsure whether your work counts as home improvement.' },
      { q: 'Do you have an office in Connecticut?', a: 'No. Our business address is in Brooklyn, New York, and we do not have Connecticut clients to show yet. Connecticut businesses work with us by phone, email and video call during US business hours.' },
      { q: 'Do I need a separate page for Stratford, Fairfield and Trumbull?', a: 'Only for towns where you have real jobs, photos and reviews to show. Otherwise, a strong service page with a clear list of the towns you cover works better than near-identical town pages.' },
    ],
  },
};

export const CITY_GUIDE_LIST = Object.values(CITY_GUIDES);
