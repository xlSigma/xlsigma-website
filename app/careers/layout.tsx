import type { Metadata } from 'next';
import { pageMetadata } from '../lib/site';

// The careers page is a client component, so its metadata lives in this layout.
export const metadata: Metadata = pageMetadata({
  title: 'Join Our Talent Community | xlSigma',
  description:
    'Join the xlSigma talent community of senior consultants and subject-matter experts for project-based work in operational excellence, AI, and automation.',
  path: '/careers',
});

export default function CareersLayout({ children }: { children: React.ReactNode }) {
  return children;
}
