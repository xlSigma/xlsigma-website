import type { Metadata } from 'next';

// The contact page is a client component, so its metadata lives in this layout.
export const metadata: Metadata = {
  title: 'Contact | xlSigma',
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
