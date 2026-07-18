import Link  from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-navy-dark text-slate-400">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-10 mb-10">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image src="/logo.png" alt="xlSigma" width={40} height={40} className="rounded-sm" />
              <span className="text-white font-bold text-lg">xlSigma LLC</span>
            </div>
            <p className="text-sm leading-relaxed">
              Senior-level consulting and technology services for enterprise
              and federal clients.
            </p>
            <div className="flex gap-2 mt-4 flex-wrap">
              <span className="bg-navy text-gold-light text-xs font-semibold px-3 py-1 rounded-full border border-gold/30">
                SDVOSB
              </span>
              <span className="bg-navy text-gold-light text-xs font-semibold px-3 py-1 rounded-full border border-gold/30">
                Veteran-Owned SB
              </span>
              <span className="bg-navy text-gold-light text-xs font-semibold px-3 py-1 rounded-full border border-gold/30">
                FL OSD Veteran CBE (pending)
              </span>
              <span className="bg-navy text-slate-400 text-xs px-3 py-1 rounded-full border border-slate-600">
                SAM.gov Registered
              </span>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              {[
                { href: '/',                       label: 'Home'                   },
                { href: '/government-contracting', label: 'Government Contracting' },
                { href: '/capabilities',           label: 'Capabilities'           },
                { href: '/contact',                label: 'Contact'                },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="hover:text-gold-light transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Contact
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>Tampa, FL</li>
              <li>(813) 919-9772</li>
              <li>
                <Link href="/contact" className="hover:text-gold-light transition-colors">
                  Send a Message
                </Link>
              </li>
            </ul>
            <div className="mt-6">
              <p className="text-xs text-slate-500 uppercase tracking-wider mb-1">NAICS</p>
              <p className="text-xs text-slate-400">541511 | 541611 | 541614 | 541618</p>
            </div>
          </div>

        </div>

        <div className="border-t border-slate-700 pt-6 text-sm text-slate-500 text-center">
          (c) 2026 xlSigma LLC. All rights reserved. Tampa, FL.
        </div>
      </div>
    </footer>
  );
}
