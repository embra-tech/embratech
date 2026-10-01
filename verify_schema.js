const fs = require('fs');
const path = require('path');

const buildDir = path.join(__dirname, '.next-build', 'server', 'app');

function extractJsonLd(filePath) {
  if (!fs.existsSync(filePath)) {
    console.error(`File not found: ${filePath}`);
    return [];
  }
  const html = fs.readFileSync(filePath, 'utf8');
  const regex = /<script type="application\/ld\+json">([\s\S]*?)<\/script>/g;
  let match;
  const results = [];
  while ((match = regex.exec(html)) !== null) {
    try {
      let parsed = JSON.parse(match[1]);
      if (parsed['@graph']) {
        results.push(...parsed['@graph']);
      } else if (Array.isArray(parsed)) {
        results.push(...parsed);
      } else {
        results.push(parsed);
      }
    } catch (e) {
      console.error(`Invalid JSON-LD in ${filePath}:`, e.message);
    }
  }
  return results;
}

function checkSchema(pageName, filePath, requiredTypes, forbiddenTypes = []) {
  console.log(`\n--- Checking schema for ${pageName} ---`);
  const schemas = extractJsonLd(filePath).flat();
  const types = schemas.map(s => s['@type']);
  console.log(`Found types: ${types.join(', ')}`);
  
  let passed = true;
  for (const req of requiredTypes) {
    if (!types.includes(req)) {
      console.error(`❌ Missing required type: ${req}`);
      passed = false;
    } else {
      console.log(`✅ Found required type: ${req}`);
    }
  }
  
  for (const forbidden of forbiddenTypes) {
    if (types.includes(forbidden)) {
      console.error(`❌ Found forbidden type: ${forbidden}`);
      passed = false;
    }
  }
  
  // Specific NAP check for Organization or ProfessionalService/LocalBusiness
  const businessSchemas = schemas.filter(s => ['LocalBusiness', 'ProfessionalService'].includes(s['@type']));
  let addressFound = false;
  for (const bs of businessSchemas) {
    if (bs.address && bs.address.addressLocality === 'Brooklyn') {
       addressFound = true;
    }
  }
  
  if (addressFound) {
    console.log('✅ Brooklyn address verified in NAP.');
  } else {
    console.error('❌ Brooklyn address missing in NAP schema.');
    passed = false;
  }

  return passed;
}

const tests = [
  { name: 'Homepage', path: path.join(buildDir, 'index.html'), req: ['Organization', 'WebSite'] },
  { name: 'Service (Web Design)', path: path.join(buildDir, 'services', 'web-design.html'), req: ['BreadcrumbList', 'Service'] },
  { name: 'Location (Brooklyn)', path: path.join(buildDir, 'locations', 'brooklyn.html'), req: ['BreadcrumbList'] },
  { name: 'Niche (Handyman)', path: path.join(buildDir, 'niches', 'web-design-for-handyman-businesses.html'), req: ['BreadcrumbList', 'Service'] },
  { name: 'Blog Post', path: path.join(buildDir, 'blog', 'local-seo-guide-for-service-businesses.html'), req: ['BlogPosting', 'BreadcrumbList'] },
  { name: 'Portfolio', path: path.join(buildDir, 'portfolio', 'tuxford-collision.html'), req: ['Article', 'BreadcrumbList'] },
];

let allPassed = true;
for (const t of tests) {
  const p = checkSchema(t.name, t.path, t.req, ['Review', 'AggregateRating']);
  if (!p) allPassed = false;
}

if (allPassed) {
  console.log('\n✅ ALL SCHEMA CHECKS PASSED');
} else {
  console.log('\n❌ SOME SCHEMA CHECKS FAILED');
  process.exit(1);
}
