import type { Metadata } from 'next';
import { pageMetadata } from '../lib/site';

// The contact page is a client component, so its metadata lives in this layout.
export const metadata: Metadata = pageMetadata({
  title: 'Contact | xlSigma',
  description:
    'Tell xlSigma about your operational, automation, or AI challenge. Call, text, or send a message and we respond within one business day.',
  path: '/contact',
});

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
