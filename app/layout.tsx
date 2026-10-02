import type { Metadata, Viewport } from 'next';
import { Newsreader, Hanken_Grotesk } from 'next/font/google';
import './globals.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

const newsreader = Newsreader({
  subsets: ['latin'],
  variable: '--font-newsreader',
  display: 'swap',
});

const hanken = Hanken_Grotesk({
  subsets: ['latin'],
  variable: '--font-hanken',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'xlSigma LLC | Management Consulting & Technology',
  description:
    'Senior-level management consulting and technology services. ' +
    'Process improvement, business process automation, strategy deployment, advanced analytics. ' +
    'SDVOSB and Veteran-Owned Small Business.',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={`${newsreader.variable} ${hanken.variable}`}>
      <body className="bg-white font-sans text-ink antialiased">
        <ScrollToTop />
        <NavBar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
