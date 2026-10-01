'use client';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

/**
 * Next scrolls a new page to the top of its first element, which sits below the
 * sticky header, so the page lands a few pixels down. Force a true top-of-page
 * scroll on every route change, except when the URL targets an anchor.
 */
export default function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    if (window.location.hash) return;
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);

  return null;
}
