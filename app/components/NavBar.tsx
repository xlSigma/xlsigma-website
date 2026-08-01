'use client';
import { useState }      from 'react';
import Link              from 'next/link';
import Image             from 'next/image';
import { usePathname }   from 'next/navigation';
import { Menu, X }       from 'lucide-react';

const LINKS = [
  { href: '/',                       label: 'Home'                   },
  { href: '/government-contracting', label: 'Government Contracting' },
  { href: '/capabilities',           label: 'Capabilities'           },
  { href: '/careers',                label: 'Careers'                },
  { href: '/contact',                label: 'Contact'                },
];

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const pathname        = usePathname();

  return (
    <header className="bg-navy sticky top-0 z-50 shadow-lg">
      <div className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between">

        {/* Brand */}
        <Link href="/" className="flex items-center gap-3 flex-shrink-0">
          <Image
            src="/logo.png"
            alt="xlSigma logo"
            width={44}
            height={44}
            className="rounded-sm"
          />
          <span className="text-white font-bold text-lg tracking-wide">xlSigma</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {LINKS.map(({ href, label }) => {
            const active = pathname === href || pathname.startsWith(href + '/');
            return (
              <Link
                key={href}
                href={href}
                className={`text-sm font-medium transition-colors whitespace-nowrap
                  ${active
                    ? 'text-gold-light border-b-2 border-gold-light pb-0.5'
                    : 'text-slate-300 hover:text-white'}`}
              >
                {label}
              </Link>
            );
          })}
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white p-1"
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-navy-dark px-4 py-4 space-y-1 border-t border-slate-700">
          {LINKS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className="block text-slate-300 hover:text-white py-2.5 text-sm border-b border-slate-700/50"
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
