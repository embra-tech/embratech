// Article body for /blog/why-pagespeed-matters
// Rewritten 2026-10-13 (content upgrade). Plain HTML, rendered by app/blog/[slug]/page.jsx.
// Do not use backticks or the dollar-brace sequence inside this string.

const content = `
<p>Yes, website speed affects local SEO, but not as much as many people claim. Speed is part of the page experience signals Google uses, and Google is clear that relevance comes first: a fast page that doesn't answer the search won't outrank a slower page that does. Where speed really pays off is with people. On a phone, during an emergency, a slow website loses the call long before any ranking factor comes into play.</p>

<p><strong>Key takeaways</strong></p>
<ul>
  <li>Google uses Core Web Vitals in its ranking systems, but relevance and quality matter more.</li>
  <li>The three Core Web Vitals are loading (LCP), responsiveness (INP) and visual stability (CLS).</li>
  <li>Google judges them from real visitors' data, not from the 0 to 100 lab score alone.</li>
  <li>Speed matters most for conversions: slow mobile pages lose visitors and calls.</li>
  <li>Most slow contractor websites are slow for a few fixable reasons: huge images, too many plugins and scripts, and slow hosting.</li>
</ul>

<h2>What Google actually says about speed and rankings</h2>
<p>Google's documentation on <a href="https://developers.google.com/search/docs/appearance/page-experience" target="_blank" rel="noopener noreferrer">page experience</a> explains that its ranking systems look at signals such as Core Web Vitals. The same page is just as clear that Google always tries to show the most relevant content first, even when its page experience is poor. When many pages are similarly relevant, a better page experience can help you stand out.</p>
<p>In practice, speed is rarely the reason a contractor ranks or doesn't. Service pages, your Google Business Profile, reviews and local links usually matter more. Speed is the factor that decides whether the visitors you already earn actually pick up the phone.</p>

<h2>Core Web Vitals in plain English</h2>
<p>Google measures three things, explained in detail on <a href="https://web.dev/articles/vitals" target="_blank" rel="noopener noreferrer">web.dev</a>:</p>
<ol>
  <li><strong>Largest Contentful Paint (LCP):</strong> how long the main content takes to appear. Good is 2.5 seconds or less.</li>
  <li><strong>Interaction to Next Paint (INP):</strong> how quickly the page responds when someone taps a button or opens a menu. Good is 200 milliseconds or less. INP replaced the older First Input Delay metric in 2024.</li>
  <li><strong>Cumulative Layout Shift (CLS):</strong> how much the page jumps around while it loads. Good is 0.1 or less.</li>
</ol>
<p>Google assesses these at the 75th percentile of real visits, so most of your visitors need a good experience, not just people on fast connections.</p>

<h2>Why speed matters more for calls than for rankings</h2>
<p>Research by Google and SOASTA found that as mobile page load time grows (<a href="https://www.thinkwithgoogle.com/marketing-strategies/app-and-mobile/mobile-page-speed-new-industry-benchmarks/" target="_blank" rel="noopener noreferrer">Think with Google</a>):</p>
<ul>
  <li>from 1 second to 3 seconds, the chance of a visitor leaving rises by 32%</li>
  <li>from 1 second to 5 seconds, it rises by 90%</li>
  <li>from 1 second to 6 seconds, it rises by 106%</li>
</ul>
<p>Think about who is searching. Someone with a flooded basement, a dead furnace or a tree on the garage roof is on a phone, often on a weak signal, and under stress. If your page is still loading, they tap back and call the next business on the list.</p>

<h2>How to test your own website</h2>
<ol>
  <li>Open <a href="https://pagespeed.web.dev/" target="_blank" rel="noopener noreferrer">PageSpeed Insights</a> and enter your page address.</li>
  <li>Look at the <strong>Mobile</strong> results, not Desktop.</li>
  <li>Check the top section first, the one describing what your real users are experiencing. This is field data from real Chrome visitors, and it's what Google uses. New or low-traffic sites may not have enough data yet.</li>
  <li>The 0 to 100 performance score below is a lab simulation. It's useful for finding problems, but it isn't what Google ranks on.</li>
  <li>Test your most important service pages too, not just the homepage.</li>
  <li>In Google Search Console, open the Core Web Vitals report to see which groups of pages need work.</li>
</ol>

<h2>What usually slows contractor websites down</h2>
<ul>
  <li><strong>Oversized photos.</strong> Job photos uploaded straight from a phone can be several megabytes each. Resize them and serve modern formats such as WebP or AVIF.</li>
  <li><strong>Too many plugins and scripts.</strong> Chat widgets, sliders, pop-ups, multiple tracking tags and social feeds all add weight. Keep only what earns its place.</li>
  <li><strong>Heavy themes and page builders.</strong> Many multipurpose themes load code for features you never use.</li>
  <li><strong>Slow hosting.</strong> Cheap shared hosting with no caching makes the server slow to respond before anything even loads.</li>
  <li><strong>Video backgrounds and big animations.</strong> They look impressive on office Wi-Fi and painful on a phone.</li>
</ul>
<p>To be fair to WordPress, a well-built WordPress site on good hosting can be fast. Most slow sites aren't slow because of the platform; they're slow because of what's been piled on top of it.</p>

<h2>How we build for speed</h2>
<p>We build our clients' sites with Next.js, generate the pages ahead of time, and serve them from a global network close to each visitor. Images are resized and converted to modern formats, third-party scripts are kept to a minimum, and the headline and phone number load first. You can check the live PageSpeed reports for client sites from each case study, for example <a href="/portfolio/tuxford-collision">Tuxford Collision Center</a> and <a href="/portfolio/sky-high-tree">Sky High Tree Service</a>.</p>

<h2>Speed is one piece of the puzzle</h2>
<p>A fast site still needs to be relevant and trusted. Pair speed with the basics in our <a href="/blog/local-seo-guide-for-service-businesses">local SEO guide</a>: a complete Google Business Profile, one page per service, steady reviews and consistent business details.</p>

<h2>Frequently asked questions</h2>
<h3>Do I need a 100/100 PageSpeed score?</h3>
<p>No. Aim to pass all three Core Web Vitals in your real-user data. A lab score in the 90s is excellent; chasing the last few points rarely changes rankings or leads.</p>
<h3>Does desktop speed matter?</h3>
<p>Less than mobile. Google mainly uses the mobile version of your site for indexing, and most urgent local searches happen on phones.</p>
<h3>Will switching platforms fix my rankings?</h3>
<p>Not by itself. A faster site helps more visitors become leads, but rankings also depend on relevant service pages, your Business Profile, reviews and links.</p>

<h2>Want a fast site without the guesswork?</h2>
<p>See our <a href="/services/web-design">web design service</a> and <a href="/pricing">pricing</a> (builds start at $700), or <a href="/contact">request a free custom homepage sample</a>, ready within 24 hours.</p>
`;

export default content;
