import Link  from 'next/link';
import Image from 'next/image';
import Tag   from './ui/Tag';
import ContentContainer from './ui/ContentContainer';

const NAV_LINKS = [
  { href: '/',                       label: 'Home'         },
  { href: '/capabilities',           label: 'Capabilities' },
  { href: '/commercial',             label: 'Commercial'   },
  { href: '/government-contracting', label: 'Government'   },
  { href: '/careers',                label: 'Careers'      },
  { href: '/contact',                label: 'Contact'      },
];

const CERTIFICATIONS = ['SDVOSB', 'Veteran-Owned SB', 'FL OSD Veteran CBE (pending)'];

const HEADING = 'mb-3 text-[0.8125rem] font-semibold uppercase tracking-[0.18em] text-(--accent)';
const LINK    = 'underline-offset-4 transition-colors hover:text-gold hover:underline';

export default function Footer() {
  return (
    <footer className="tone-navy border-t border-gold/40 bg-navy-dark text-(--fg-muted)">
      <ContentContainer className="pb-8 pt-10 md:pt-12">
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-16">

          {/* Brand */}
          <div className="lg:col-span-5">
            <div className="mb-4 flex items-center gap-4">
              <Image src="/logo.png" alt="xlSigma" width={48} height={48} className="rounded-sm" />
              <span className="font-serif text-title font-medium text-(--fg)">xlSigma LLC</span>
            </div>
            <p className="max-w-sm leading-relaxed">
              Senior-level consulting and technology services for commercial
              and government clients.
            </p>
            <ul className="mt-5 flex flex-wrap gap-2">
              {CERTIFICATIONS.map((c) => (
                <li key={c}><Tag>{c}</Tag></li>
              ))}
            </ul>
          </div>

          {/* Links */}
          <nav aria-label="Footer" className="lg:col-span-3">
            <h2 className={HEADING}>Navigation</h2>
            <ul className="border-b border-(--rule)">
              {NAV_LINKS.map(({ href, label }) => (
                <li key={href} className="border-t border-(--rule)">
                  <Link href={href} className={`block py-1.5 text-[0.9375rem] ${LINK}`}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div className="lg:col-span-4">
            <h2 className={HEADING}>Contact</h2>
            <ul className="space-y-1.5 text-[0.9375rem]">
              <li>Call or text: (813) 539-8229</li>
              <li>
                <Link href="/contact" className={LINK}>Send a Message</Link>
              </li>
            </ul>
            <div className="mt-6">
              <h2 className={HEADING}>NAICS</h2>
              <p className="text-[0.9375rem]">541511 | 541611 | 541614 | 541618</p>
            </div>
          </div>

        </div>

        <div className="mt-8 border-t border-(--rule) pt-5 text-sm text-(--fg-muted)">
          (c) 2026 xlSigma LLC. All rights reserved. Tampa, FL.
        </div>
      </ContentContainer>
    </footer>
  );
}
