const { execSync } = require('child_process');
const fs = require('fs');

const urls = [
  'http://localhost:3000/',
  'http://localhost:3000/services',
  'http://localhost:3000/pricing',
  'http://localhost:3000/portfolio/tuxford-collision',
  'http://localhost:3000/blog/website-roi-calculator'
];

const results = {};

for (const url of urls) {
  console.log(`Auditing ${url}...`);
  try {
    const output = execSync(`npx lighthouse ${url} --output json --quiet --chrome-flags="--headless"`, { encoding: 'utf-8', maxBuffer: 1024 * 1024 * 10 });
    const parsed = JSON.parse(output);
    results[url] = {
      performance: parsed.categories.performance?.score * 100,
      accessibility: parsed.categories.accessibility?.score * 100,
      bestPractices: parsed.categories['best-practices']?.score * 100,
      seo: parsed.categories.seo?.score * 100
    };
    console.log(`Done ${url}:`, results[url]);
  } catch (e) {
    console.error(`Error auditing ${url}`, e.message);
  }
}

fs.writeFileSync('lighthouse-baseline.json', JSON.stringify(results, null, 2));
console.log('All done');
