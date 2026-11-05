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
      { title: 'Handyman Websites in Anchorage', text: 'Clear service categories, a quote form that accepts photos and the neighborhoods you cover, so homeowners in Midtown or Eagle River can see you do the job.', href: '/niches/web-design-for-handyman-businesses', cta: 'Handyman website design' },
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
      { q: 'Do you have an office in Anchorage?', a: 'No. We work remotely with Anchorage businesses by phone, email and video call on US business hours, the same way we built the website for Alaska Fast Fix Handyman.' },
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
    metaTitle: 'SEO Agency Services for Juneau Service Businesses',
    metaDescription: 'Local SEO and websites for Juneau contractors and service businesses: Google Business Profile, service pages and reviews. Remote team, from $700. Free review.',
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
    ],
    areasNote: 'Juneau neighborhoods our clients typically cover:',
    areas: ['Downtown', 'Douglas Island', 'Mendenhall Valley', 'Lemon Creek', 'Auke Bay', 'Thane'],
    faqs: [
      { q: 'Do you have an office in Juneau?', a: 'No. Juneau is reachable only by air or sea, and we work with Juneau clients remotely by phone, email and video call, keeping US business hours.' },
      { q: 'What does local SEO involve for a Juneau business?', a: 'Mainly your Google Business Profile (categories, services, hours, photos), consistent business details across directories, a clear page for each service and a simple way to ask happy customers for reviews.' },
      { q: 'Can you guarantee a top position in Juneau searches?', a: 'No one honestly can. Google decides rankings and weighs how close each searcher is to a business. We work on the factors you control and give you a straight assessment after the free review.' },
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
    searches: ['website design for handyman centennial', 'handyman website colorado', 'hail damage roofer aurora', 'furnace repair littleton', 'handyman boulder'],
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
    ],
  },

  spokane: {
    slug: 'spokane', name: 'Spokane', state: 'WA', display: 'Spokane & Airway Heights, WA',
    metaTitle: 'SEO for Spokane & Airway Heights Service Businesses',
    metaDescription: 'Search engine optimization and websites for service businesses in Spokane, Spokane Valley and Airway Heights: Google profile, service pages, reviews. Free review.',
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
    seoTitle: 'What Local SEO Means for Spokane-Area Businesses',
    seo: [
      'Spokane, Spokane Valley and Airway Heights are separate places in Google\u2019s eyes, so your profile and website should state clearly which ones you serve. Consistent business details across directories help Google trust that information.',
      'Our local SEO work for Washington businesses begins with a free review of your profile, website and listings, and you approve the quote before anything starts.',
    ],
    areasNote: 'Inland Northwest communities our clients typically serve:',
    areas: ['Spokane', 'Spokane Valley', 'Airway Heights', 'Liberty Lake', 'Cheney', 'Mead', 'Medical Lake'],
    faqs: [
      { q: 'Do you offer search engine optimization in Airway Heights?', a: 'Yes. We work remotely with businesses in Airway Heights, Spokane and Spokane Valley, starting with a free review of your Google Business Profile, website and listings.' },
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
};

export const CITY_GUIDE_LIST = Object.values(CITY_GUIDES);
