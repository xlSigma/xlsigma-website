import type { Metadata } from 'next';

// The careers page is a client component, so its metadata lives in this layout.
export const metadata: Metadata = {
  title: 'Join Our Talent Community | xlSigma',
};

export default function CareersLayout({ children }: { children: React.ReactNode }) {
  return children;
}
