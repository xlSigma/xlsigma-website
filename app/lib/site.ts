import type { Metadata } from 'next';

// Canonical origin. xlsigma.com redirects to www, so www is the one origin used everywhere.
export const SITE_URL = 'https://www.xlsigma.com';
export const SITE_NAME = 'xlSigma';

// Shared social image. A page-level openGraph or twitter object drops the file-based image from
// app/opengraph-image.jpg, so every page names this copy explicitly. To replace the image, swap
// public/og/xlsigma-banner.jpg (keep 1200x630) and app/opengraph-image.jpg, app/twitter-image.jpg.
export const OG_IMAGE = {
  url: '/og/xlsigma-banner.jpg',
  width: 1200,
  height: 630,
  alt: 'xlSigma medallion logo beside the text AI - Automation & Enterprise Knowledge Transformation, Powered by Lean Six Sigma, on a dark network background.',
};

// Public routes, used by app/sitemap.ts. Add a route here when a new public page is created.
export const PUBLIC_PATHS = [
  '/',
  '/capabilities',
  '/semantic-to-action',
  '/commercial',
  '/government-contracting',
  '/careers',
  '/contact',
];

type PageMetaInput = {
  title: string;
  description: string;
  path: string;
  // Optional social title when it should differ from the browser tab title.
  ogTitle?: string;
};

// A page-level openGraph or twitter object replaces the root layout's object rather than merging
// with it, so every page builds its full set of social fields here.
export function pageMetadata({ title, description, path, ogTitle }: PageMetaInput): Metadata {
  const socialTitle = ogTitle ?? title;
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: 'website',
      siteName: SITE_NAME,
      locale: 'en_US',
      url: path,
      title: socialTitle,
      description,
      images: [OG_IMAGE],
    },
    twitter: {
      card: 'summary_large_image',
      title: socialTitle,
      description,
      images: [OG_IMAGE],
    },
  };
}
