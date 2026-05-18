import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'xlSigma LLC | Management Consulting & Technology',
  description:
    'Senior-level management consulting and technology services. ' +
    'Process improvement, advanced analytics, and automation. ' +
    'SDVOSB and Veteran-Owned Small Business.',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white text-slate-800 antialiased`}>
        <NavBar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
