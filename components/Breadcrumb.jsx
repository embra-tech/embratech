import Link from 'next/link';

/**
 * Breadcrumb — renders a "Home → [label]" trail and emits BreadcrumbList JSON-LD.
 * @param {string} label  — The current page's display label (e.g. "About")
 * @param {string} href   — The current page's canonical path (e.g. "/about")
 */
export default function Breadcrumb({ label, href }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://www.embratechnologies.org/',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: label,
        item: `https://www.embratechnologies.org${href}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <nav className="breadcrumb" aria-label="Breadcrumb">
        <ol>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li aria-hidden="true" className="breadcrumb-sep">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </li>
          <li aria-current="page">{label}</li>
        </ol>
      </nav>
    </>
  );
}
