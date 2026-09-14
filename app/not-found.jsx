import Link from 'next/link';

export const metadata = {
  title: 'Page Not Found',
  description: 'The page you are looking for does not exist.',
};

export default function NotFound() {
  return (
    <div className="not-found-shell">
      <div className="not-found-inner">
        <span className="not-found-code">404</span>
        <h1>Page not found.</h1>
        <p>The page you&apos;re looking for doesn&apos;t exist or has been moved.</p>
        <Link href="/" className="btn-flip btn-primary btn-large" style={{ marginTop: 8 }}>
          <span className="btn-flip-inner">
            <span className="btn-flip-state">
              Back to Home{' '}
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </span>
            <span className="btn-flip-state" aria-hidden="true">
              Back to Home{' '}
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </span>
          </span>
        </Link>
      </div>
    </div>
  );
}

