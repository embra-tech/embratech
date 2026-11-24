/**
 * lib/blogData.js
 * Blog post list: titles, summaries, dates. Each article body lives in lib/blog/<slug>.js.
 *
 * 2026-10-13 content upgrade: all 7 posts rewritten. Duplicate sections removed, claims
 * fact-checked and linked to sources, Embra prices aligned with /pricing, FAQs added,
 * author set to the founder. URLs (slugs) and publish dates unchanged.
 * Previous versions are in git history. See PHASE1_CHANGELOG.md.
 */
import localSeoGuide from './blog/local-seo-guide-for-service-businesses';
import websiteRoi from './blog/website-roi-calculator';
import pageSpeed from './blog/why-pagespeed-matters';
import websiteCost from './blog/website-cost-for-home-service-businesses';
import treeService from './blog/what-tree-service-website-needs';
import autoBody from './blog/auto-body-shop-marketing';
import hvacSeo from './blog/hvac-local-seo';
import hvacWebsiteExamples from './blog/hvac-website-examples';
import hvacKeywords from './blog/hvac-keywords';

const AUTHOR = 'Md Bilaal Rahman Ali';

// 2026-10-19: metaTitle = the title shown in Google results (60 characters or fewer including
// " | Embra"), so it isn't cut off. The on-page heading still uses `title`.

export const BLOG_POSTS = [
  {
    slug: 'local-seo-guide-for-service-businesses',
    title: 'Local SEO for Home Service Businesses: A Step-by-Step Guide',
    metaTitle: 'Local SEO for Home Service Businesses: Step by Step',
    excerpt: "How plumbers, roofers, HVAC and tree service companies get into Google's map pack: Business Profile setup, reviews, citations, service pages and tracking.",
    date: '2026-09-12',
    dateModified: '2026-10-13',
    author: AUTHOR,
    content: localSeoGuide,
    readTime: '7 min read',
  },
  {
    slug: 'website-roi-calculator',
    title: 'Website ROI Calculator for Contractors: What Is Your Website Worth?',
    metaTitle: 'Contractor Website ROI Calculator (Free Worksheet)',
    excerpt: 'A simple worksheet to calculate how many leads and jobs your website brings in, what a slow or confusing site costs you, and when a rebuild pays for itself.',
    date: '2026-09-05',
    dateModified: '2026-10-13',
    author: AUTHOR,
    content: websiteRoi,
    readTime: '6 min read',
  },
  {
    slug: 'why-pagespeed-matters',
    title: 'Does Website Speed Affect Local SEO? What Contractors Need to Know',
    metaTitle: 'Does Website Speed Affect Local SEO?',
    excerpt: 'How page speed affects Google rankings and phone calls for home service businesses, what Core Web Vitals mean, and how to test and fix your website.',
    date: '2026-08-28',
    dateModified: '2026-10-13',
    author: AUTHOR,
    content: pageSpeed,
    readTime: '6 min read',
  },
  {
    slug: 'website-cost-for-home-service-businesses',
    title: 'How Much Does a Website Cost for a Home Service Business in 2026?',
    metaTitle: 'How Much Does a Contractor Website Cost in 2026?',
    excerpt: 'Real price ranges for contractor websites in 2026, from DIY builders to agencies, plus ongoing costs, contract traps to avoid and questions to ask first.',
    date: '2026-10-01',
    dateModified: '2026-11-24',
    author: AUTHOR,
    content: websiteCost,
    readTime: '7 min read',
  },
  {
    slug: 'what-tree-service-website-needs',
    title: 'What Every Tree Service Website Needs to Win Emergency Calls',
    metaTitle: 'What Every Tree Service Website Needs',
    excerpt: 'The essentials for a tree service website that turns storm damage and removal searches into calls: emergency contact, proof of insurance, service pages and local SEO.',
    date: '2026-10-01',
    dateModified: '2026-10-19',
    author: AUTHOR,
    content: treeService,
    readTime: '6 min read',
  },
  {
    slug: 'auto-body-shop-marketing',
    title: 'Auto Body Shop Marketing: A 90-Day Plan and Strategy for Collision Shops',
    metaTitle: 'Auto Body Shop Marketing Plan & Collision Strategy',
    excerpt: 'A collision repair marketing strategy and 90-day plan for independent shops: Google profile, reviews, website, referral partners and digital marketing.',
    date: '2026-10-01',
    dateModified: '2026-11-13',
    author: AUTHOR,
    content: autoBody,
    readTime: '9 min read',
  },
  {
    slug: 'hvac-local-seo',
    title: 'HVAC SEO: How Heating and Cooling Contractors Rank Higher on Google',
    metaTitle: 'HVAC SEO Guide: Local SEO for HVAC & AC Companies',
    // 2026-11-18: also the Google description; rewritten for click-through (page-1 US searches: ac company seo, air conditioning seo/repair seo).
    excerpt: 'Step-by-step SEO for AC and heating companies: Google profile categories, AC repair pages, reviews and seasonal timing, plus how to choose an HVAC SEO company.',
    date: '2026-10-01',
    dateModified: '2026-11-24',
    author: AUTHOR,
    content: hvacSeo,
    readTime: '9 min read',
  },
  // 2026-11-24: two HVAC guides for Search Console queries with no matching page (hvac website examples,
  // best hvac websites, hvac website content; hvac keywords, select hvac keywords, keywords for hvac).
  {
    slug: 'hvac-website-examples',
    title: 'HVAC Website Examples: 12 Things the Best HVAC Websites Have in Common',
    metaTitle: 'HVAC Website Examples: What the Best Sites Share',
    excerpt: 'What the best HVAC websites do on the first screen, on service pages and on phones, plus the content every heating and cooling site needs and the mistakes that cost calls.',
    date: '2026-11-24',
    dateModified: '2026-11-24',
    author: AUTHOR,
    content: hvacWebsiteExamples,
    readTime: '8 min read',
  },
  {
    slug: 'hvac-keywords',
    title: 'HVAC Keywords: How to Choose Them, With Lists by Service, Season and City',
    metaTitle: 'HVAC Keywords: Lists by Service, Season and City',
    excerpt: 'How to select HVAC keywords that bring in calls: keyword lists for AC, heating, heat pumps and maintenance, seasonal and local searches, and where each keyword belongs on your site.',
    date: '2026-11-24',
    dateModified: '2026-11-24',
    author: AUTHOR,
    content: hvacKeywords,
    readTime: '8 min read',
  },
];
