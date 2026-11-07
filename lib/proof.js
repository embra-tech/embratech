// Client proof shown in inner-page heroes (components/ProofBar.jsx), 2026-11-08.
// Real clients only, each linking to its case study. Each route lists the most relevant clients first
// (local clients on city pages, same-trade clients on industry pages).
export const CLIENTS = {
  'tuxford-collision': { name: 'Tuxford Collision', where: 'Los Angeles' },
  'alaska-handyman-services': { name: 'Alaska Handyman Services', where: 'Anchorage' },
  'alaska-fast-fix': { name: 'Alaska Fast Fix Handyman', where: 'Alaska' },
  'sky-high-tree': { name: 'Sky High Tree Service', where: 'Chicagoland' },
  'pnd-laundry': { name: 'Pick N Drop Laundry', where: 'Los Angeles' },
  'jcp-lawn-service': { name: 'JCP Lawn Service', where: 'Sacramento' },
  'royal-home-health-care': { name: 'Royal Home Health Care', where: 'Van Nuys' },
  'vvasquez-handyman': { name: 'V Vasquez Handyman', where: 'Merced, CA' },
  'bestbreaks': { name: 'BestBreaks', where: 'Australia' },
};

const ALASKA = ['alaska-handyman-services', 'alaska-fast-fix', 'pnd-laundry'];
export const PROOF_ORDER = {
  '/locations/alaska': ALASKA,
  '/locations/anchorage': ALASKA,
  '/locations/fairbanks': ALASKA,
  '/locations/juneau': ALASKA,
  '/locations/los-angeles': ['tuxford-collision', 'pnd-laundry', 'royal-home-health-care'],
  '/locations/chicago': ['sky-high-tree', 'pnd-laundry', 'tuxford-collision'],
  '/locations/denver': ['alaska-handyman-services', 'vvasquez-handyman', 'jcp-lawn-service'],
  '/locations/phoenix': ['alaska-handyman-services', 'jcp-lawn-service', 'vvasquez-handyman'],
  '/locations/spokane': ['pnd-laundry', 'alaska-handyman-services', 'vvasquez-handyman'],
  '/niches/auto-body-shop-website-design': ['tuxford-collision', 'alaska-handyman-services', 'sky-high-tree'],
  '/niches/tree-service-website-design': ['sky-high-tree', 'jcp-lawn-service', 'tuxford-collision'],
  '/niches/web-design-for-handyman-businesses': ['alaska-handyman-services', 'alaska-fast-fix', 'vvasquez-handyman'],
  '/niches/landscaping-website-design': ['jcp-lawn-service', 'vvasquez-handyman', 'sky-high-tree'],
  '/niches/roofing-website-design': ['alaska-handyman-services', 'sky-high-tree', 'tuxford-collision'],
  '/niches/hvac-website-design': ['alaska-handyman-services', 'tuxford-collision', 'sky-high-tree'],
  '/niches/plumber-website-design': ['alaska-handyman-services', 'tuxford-collision', 'sky-high-tree'],
  '/services/local-seo': ['pnd-laundry', 'tuxford-collision', 'sky-high-tree'],
};
export const DEFAULT_PROOF = ['tuxford-collision', 'alaska-handyman-services', 'sky-high-tree'];

// Visitor's time zone for city pages, so office hours (Mon-Fri 9am-6pm Eastern) can be shown in local time.
export const CITY_TZ = {
  '/locations/alaska': 'America/Anchorage', '/locations/anchorage': 'America/Anchorage',
  '/locations/fairbanks': 'America/Anchorage', '/locations/juneau': 'America/Anchorage',
  '/locations/los-angeles': 'America/Los_Angeles', '/locations/spokane': 'America/Los_Angeles',
  '/locations/chicago': 'America/Chicago', '/locations/denver': 'America/Denver', '/locations/phoenix': 'America/Phoenix',
};
export const TZ_LABEL = {
  'America/Anchorage': 'Alaska time', 'America/Los_Angeles': 'Pacific time', 'America/Chicago': 'Central time',
  'America/Denver': 'Mountain time', 'America/Phoenix': 'Arizona time',
};
