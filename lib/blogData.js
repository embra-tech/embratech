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

const AUTHOR = 'Md Bilaal Rahman Ali';

export const BLOG_POSTS = [
  {
    slug: 'local-seo-guide-for-service-businesses',
    title: 'Local SEO for Home Service Businesses: A Step-by-Step Guide',
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
    excerpt: 'Real price ranges for contractor websites in 2026, from DIY builders to agencies, plus ongoing costs, contract traps to avoid and questions to ask first.',
    date: '2026-10-01',
    dateModified: '2026-10-13',
    author: AUTHOR,
    content: websiteCost,
    readTime: '7 min read',
  },
  {
    slug: 'what-tree-service-website-needs',
    title: 'What Every Tree Service Website Needs to Win Emergency Calls',
    excerpt: 'The essentials for a tree service website that turns storm damage and removal searches into calls: emergency contact, proof of insurance, service pages and local SEO.',
    date: '2026-10-01',
    dateModified: '2026-10-13',
    author: AUTHOR,
    content: treeService,
    readTime: '6 min read',
  },
  {
    slug: 'auto-body-shop-marketing',
    title: 'Auto Body Shop Marketing: How Independent Shops Win More Repair Jobs',
    excerpt: 'A practical playbook for independent collision repair shops: Google Business Profile, reviews, insurance answers, a trust-first website and photo estimates.',
    date: '2026-10-01',
    dateModified: '2026-10-13',
    author: AUTHOR,
    content: autoBody,
    readTime: '6 min read',
  },
  {
    slug: 'hvac-local-seo',
    title: 'HVAC Local SEO: How Heating and Cooling Contractors Rank Higher',
    excerpt: "How HVAC contractors win more of Google's map pack and search results year-round: Business Profile, heating and cooling pages, reviews and seasonal planning.",
    date: '2026-10-01',
    dateModified: '2026-10-13',
    author: AUTHOR,
    content: hvacSeo,
    readTime: '7 min read',
  },
];
