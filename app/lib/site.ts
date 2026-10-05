import type { Metadata } from 'next';

// Canonical origin. xlsigma.com redirects to www, so www is the one origin used everywhere.
export const SITE_URL = 'https://www.xlsigma.com';
export const SITE_NAME = 'xlSigma';

// Shared social image. A page-level openGraph or twitter object drops the file-based image from
// app/opengraph-image.jpg, so every page names this copy explicitly. To replace the image, swap
// public/og/xlsigma-banner-v3.jpg (keep 1200x630) and the byte-identical copy at app/opengraph-image.jpg.
export const OG_IMAGE = {
  url: '/og/xlsigma-banner-v3.jpg',
  width: 1200,
  height: 630,
  alt: 'xlSigma gold medallion logo with a blue XL beside the text AI - Automation & Enterprise Knowledge Transformation, Powered by Lean Six Sigma, on a solid navy background.',
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

// Site-wide Organization structured data. Rendered once from app/layout.tsx. Every field is a
// public machine-readable claim: change a value only on Andres's approval and update
// CONTENT-INVENTORY.md in the same commit.
type OrganizationJsonLd = {
  '@context': 'https://schema.org';
  '@type': 'Organization';
  '@id': string;
  name: string;
  legalName: string;
  url: string;
  logo: string;
  address: {
    '@type': 'PostalAddress';
    addressLocality: string;
    addressRegion: string;
    addressCountry: string;
  };
  sameAs: string[];
};

export const ORGANIZATION_JSON_LD: OrganizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': 'https://www.xlsigma.com/#organization',
  name: 'xlSigma',
  legalName: 'xlSigma LLC',
  url: 'https://www.xlsigma.com',
  logo: 'https://www.xlsigma.com/medallion.png',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Tampa',
    addressRegion: 'FL',
    addressCountry: 'US',
  },
  sameAs: ['https://www.linkedin.com/company/xlsigma/'],
};
