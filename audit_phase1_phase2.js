const fs = require('fs');
const path = require('path');

console.log('=== RUNNING COMPREHENSIVE PHASE 1 & 2 AUDIT ===\n');

let pass = true;
function assert(condition, message) {
  if (condition) {
    console.log(`✅ ${message}`);
  } else {
    console.error(`❌ FAILED: ${message}`);
    pass = false;
  }
}

// 1. Check Brooklyn Location
const locClient = fs.readFileSync('app/locations/[city]/LocationClient.jsx', 'utf8');
const brooklynWords = locClient.match(/function BrooklynContent\(\)\s*\{([\s\S]*?)\n\}/);
const bCount = brooklynWords ? brooklynWords[1].replace(/<[^>]*>/g, ' ').replace(/[^a-zA-Z0-9\s]/g, ' ').split(/\s+/).filter(Boolean).length : 0;
assert(bCount >= 600, `BrooklynContent word count: ${bCount} >= 600`);
assert(locClient.includes('1969 51st St'), 'BrooklynContent includes real address');
assert(locClient.includes('/portfolio/sky-high-tree'), 'BrooklynContent links real Sky High case study');
assert(locClient.includes('/portfolio/tuxford-collision'), 'BrooklynContent links real Tuxford case study');
assert(locClient.includes('/portfolio/alaska-fast-fix'), 'BrooklynContent links real Alaska Fast Fix case study');
assert(locClient.includes('/portfolio/vvasquez-handyman'), 'BrooklynContent links real V Vasquez case study');

// 2. Check 7 Niche Pages
const niches = [
  { slug: 'web-design-for-handyman-businesses', caseStudies: ['/portfolio/alaska-fast-fix', '/portfolio/vvasquez-handyman'], forbidden: [] },
  { slug: 'tree-service-website-design', caseStudies: ['/portfolio/sky-high-tree'], forbidden: [] },
  { slug: 'auto-body-shop-website-design', caseStudies: ['/portfolio/tuxford-collision'], forbidden: [] },
  { slug: 'landscaping-website-design', caseStudies: ['/portfolio/vvasquez-handyman'], forbidden: [] },
  { slug: 'plumber-website-design', caseStudies: [], forbidden: ['sky-high-tree', 'tuxford-collision', 'alaska-fast-fix'] },
  { slug: 'hvac-website-design', caseStudies: [], forbidden: ['sky-high-tree', 'tuxford-collision', 'alaska-fast-fix'] },
  { slug: 'roofing-website-design', caseStudies: [], forbidden: ['sky-high-tree', 'tuxford-collision', 'alaska-fast-fix'] },
];

niches.forEach(n => {
  const p = path.join('app', 'niches', n.slug, 'page.jsx');
  assert(fs.existsSync(p), `Niche page exists: ${n.slug}`);
  const txt = fs.readFileSync(p, 'utf8');
  const count = txt.replace(/<[^>]*>/g, ' ').replace(/[^a-zA-Z0-9\s]/g, ' ').split(/\s+/).filter(Boolean).length;
  assert(count >= 900 && count <= 1400, `Niche ${n.slug} word count: ${count} (expected 900-1400)`);
  assert(txt.includes('$700'), `Niche ${n.slug} has real pricing ($700)`);
  assert(txt.includes('/contact'), `Niche ${n.slug} links to /contact`);
  n.caseStudies.forEach(cs => {
    assert(txt.includes(cs), `Niche ${n.slug} links expected case study ${cs}`);
  });
  n.forbidden.forEach(fb => {
    assert(!txt.includes(fb), `Niche ${n.slug} makes no case study claims for ${fb}`);
  });
});

// 3. Check 3 Service Sub-Pages
['web-design', 'local-seo', 'website-integrations'].forEach(s => {
  const p = path.join('app', 'services', s, 'page.jsx');
  assert(fs.existsSync(p), `Service page exists: ${s}`);
  const txt = fs.readFileSync(p, 'utf8');
  const count = txt.replace(/<[^>]*>/g, ' ').replace(/[^a-zA-Z0-9\s]/g, ' ').split(/\s+/).filter(Boolean).length;
  assert(count >= 900, `Service ${s} word count: ${count} >= 900`);
});

// Check Services Hub links
const servicesClient = fs.readFileSync('app/services/ServicesClient.jsx', 'utf8');
assert(servicesClient.includes('/services/web-design'), 'ServicesClient links to /services/web-design');
assert(servicesClient.includes('/services/local-seo'), 'ServicesClient links to /services/local-seo');
assert(servicesClient.includes('/services/website-integrations'), 'ServicesClient links to /services/website-integrations');

// 4. Accuracy Fixes
const portfolioClient = fs.readFileSync('app/portfolio/PortfolioClient.jsx', 'utf8');
assert(!portfolioClient.includes("location: 'United States'"), 'PortfolioClient does not say location: United States');
assert(portfolioClient.includes("location: 'Merced, CA'"), 'PortfolioClient has location: Merced, CA');
assert(portfolioClient.includes("industry: 'Lawn Care, Concrete & Irrigation'"), 'PortfolioClient has industry: Lawn Care, Concrete & Irrigation');

const testimonials = fs.readFileSync('components/Testimonials.jsx', 'utf8');
assert(!testimonials.includes('United States'), 'Testimonials does not say United States for Vasquez');
assert(testimonials.includes("name: 'Victor Vasquez'") && testimonials.includes("role: 'Founder, V Vasquez Handyman LLC · Merced, CA'"), 'Testimonials has Merced, CA for Vasquez');

const faq = fs.readFileSync('components/Faq.jsx', 'utf8');
assert(faq.includes('businesses across the US, including Los Angeles, Chicago and Alaska'), 'Faq has reworded Gulf Coast claim');

const ownerReview = fs.readFileSync('docs/owner-review.md', 'utf8');
assert(ownerReview.includes("Tuxford Collision: Confirm \"service-area pages\" claim") || ownerReview.includes("Tuxford"), 'owner-review.md has Tuxford review item');
assert(ownerReview.includes("BestBreaks"), 'owner-review.md has BestBreaks item');
assert(ownerReview.includes("Author Bio"), 'owner-review.md has Author Bio item');

const feApproval = fs.readFileSync('docs/frontend-approval-needed.md', 'utf8');
assert(feApproval.includes('Interactive ROI Calculator Widget') || feApproval.includes('FE-06'), 'frontend-approval-needed.md has ROI calculator item');

// 5. Case Studies Expansion (Phase 2 Item 1)
const csContent = fs.readFileSync('app/portfolio/[slug]/page.jsx', 'utf8');
const csRegex = /'([a-z-]+)':\s*\{([\s\S]*?)\n  \},/g;
let m;
while ((m = csRegex.exec(csContent)) !== null) {
  const words = m[2].replace(/<[^>]*>/g, ' ').replace(/[^a-zA-Z0-9\s]/g, ' ').split(/\s+/).filter(Boolean).length;
  assert(words >= 600 && words <= 900, `Case study ${m[1]} word count: ${words} (expected 600-900)`);
}

// 6. Blog Posts Expansion & New Posts (Phase 2 Item 2, 3, 4)
const { BLOG_POSTS } = require('./lib/blogData.js');
assert(BLOG_POSTS.length === 7, `Total blog posts: ${BLOG_POSTS.length} (expected 7)`);
BLOG_POSTS.forEach(p => {
  const words = p.content.replace(/<[^>]*>/g, ' ').replace(/[^a-zA-Z0-9\s]/g, ' ').split(/\s+/).filter(Boolean).length;
  assert(words >= 1200 && words <= 1800, `Blog post ${p.slug} word count: ${words} (expected 1200-1800)`);
  assert(Boolean(p.dateModified), `Blog post ${p.slug} has dateModified`);
  assert(Boolean(p.readTime), `Blog post ${p.slug} has readTime`);
});

const roiPost = BLOG_POSTS.find(p => p.slug === 'website-roi-calculator');
assert(roiPost && roiPost.content.includes('CONTRACTOR WEBSITE ROI CALCULATION WORKSHEET'), 'ROI post includes text-based worksheet');

// 7. Contact Page Address Row
const contactClient = fs.readFileSync('app/contact/ContactClient.jsx', 'utf8');
assert(contactClient.includes("label: 'Address'"), 'ContactClient includes visible Address row');

// 8. Sitemap and llms.txt
const sitemapContent = fs.readFileSync('app/sitemap.js', 'utf8');
assert(sitemapContent.includes('/locations/brooklyn'), 'Sitemap includes /locations/brooklyn');
assert(sitemapContent.includes('/services/web-design'), 'Sitemap includes /services/web-design');
assert(sitemapContent.includes('post.dateModified || post.date'), 'Sitemap uses dateModified');

const llmsContent = fs.readFileSync('public/llms.txt', 'utf8');
assert(llmsContent.includes('/locations/brooklyn'), 'llms.txt includes /locations/brooklyn');
assert(llmsContent.includes('/blog/website-cost-for-home-service-businesses'), 'llms.txt includes website-cost-for-home-service-businesses');
assert(llmsContent.includes('/blog/what-tree-service-website-needs'), 'llms.txt includes what-tree-service-website-needs');
assert(llmsContent.includes('/blog/auto-body-shop-marketing'), 'llms.txt includes auto-body-shop-marketing');
assert(llmsContent.includes('/blog/hvac-local-seo'), 'llms.txt includes hvac-local-seo');

if (pass) {
  console.log('\n🎉 ALL PHASE 1 AND PHASE 2 CHECKS PASSED PERFECTLY!');
} else {
  console.error('\n❌ AUDIT FAILED SOME CHECKS.');
  process.exit(1);
}
