# ============================================================
# xlSigma Website - Phase 1 Files
# Run from: C:\Users\andre\dev\xlsigma-website
# ============================================================

$ErrorActionPreference = 'Stop'

# Directories
New-Item -ItemType Directory -Force -Path "app\components"                | Out-Null
New-Item -ItemType Directory -Force -Path "app\government-contracting"    | Out-Null
New-Item -ItemType Directory -Force -Path "app\capabilities"              | Out-Null
New-Item -ItemType Directory -Force -Path "app\contact"                   | Out-Null

# ── globals.css ───────────────────────────────────────────────
$globals = @'
@import "tailwindcss";

@theme {
  --color-navy:       #1B3F7A;
  --color-navy-dark:  #122A54;
  --color-navy-light: #2A5298;
  --color-gold:       #B8820A;
  --color-gold-light: #D4A017;
  --color-gold-pale:  #FDF6E3;
}

html { scroll-behavior: smooth; }

body { @apply text-slate-800; }
'@
Set-Content -LiteralPath "app\globals.css" -Value $globals -Encoding utf8
Write-Host "Updated: app/globals.css"

# ── layout.tsx ────────────────────────────────────────────────
$layout = @'
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
    'Process improvement, business process automation, strategy deployment, advanced analytics. ' +
    'SDVOSB and Minority-Owned Small Business.',
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
'@
Set-Content -LiteralPath "app\layout.tsx" -Value $layout -Encoding utf8
Write-Host "Updated: app/layout.tsx"

# ── NavBar.tsx ────────────────────────────────────────────────
$navbar = @'
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
  { href: '/contact',                label: 'Contact'                },
];

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const pathname        = usePathname();

  return (
    <header className="bg-navy sticky top-0 z-50 shadow-lg">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">

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
          <Link
            href="/contact"
            className="bg-gold hover:bg-gold-light text-white text-sm font-semibold
                       px-4 py-2 rounded-lg transition-colors whitespace-nowrap ml-2"
          >
            Get in Touch
          </Link>
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
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="block mt-3 bg-gold text-white text-sm font-semibold px-4 py-2.5
                       rounded-lg text-center"
          >
            Get in Touch
          </Link>
        </div>
      )}
    </header>
  );
}
'@
Set-Content -LiteralPath "app\components\NavBar.tsx" -Value $navbar -Encoding utf8
Write-Host "Created: app/components/NavBar.tsx"

# ── Footer.tsx ────────────────────────────────────────────────
$footer = @'
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
                Minority-Owned SB (cert pending)
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
'@
Set-Content -LiteralPath "app\components\Footer.tsx" -Value $footer -Encoding utf8
Write-Host "Created: app/components/Footer.tsx"

# ── app/page.tsx - Homepage (private sector) ─────────────────
$homePage = @'
import Link  from 'next/link';
import Image from 'next/image';
import {
  TrendingUp, BarChart2, Bot, LayoutDashboard,
  Code2, Users, CheckCircle, ArrowRight,
} from 'lucide-react';

const CAPABILITIES_PREVIEW = [
  {
    Icon:  Bot,
    title: 'AI-Enabled Process Automation',
    desc:  'AI and RPA solutions that eliminate manual work and reduce cycle times across operations.',
  },
  {
    Icon:  TrendingUp,
    title: 'Lean Six Sigma / Continuous Improvement',
    desc:  'DMAIC-driven transformation led by a certified Master Black Belt.',
  },
  {
    Icon:  BarChart2,
    title: 'Data Analytics & KPI Dashboards',
    desc:  'Power BI, Tableau, and custom frameworks that turn data into decisions.',
  },
  {
    Icon:  Code2,
    title: 'End-User Computing (EUC) Development',
    desc:  'Excel/VBA, Power Platform, and lightweight applications built for real users.',
  },
];

const VALUE_PROPS = [
  'Senior-only delivery teams on every engagement -- no juniors, no bench',
  'Workflow Automation Full-stack delivery: strategy, design, build, implement, and training',
  'Strategy Deployment, Process Improvement, Data Analytics, KPI Dashboards',
  'Leadership: Lean Six Sigma Master Black Belt with Fortune 500 track record',
  'Deep expertise across Accenture, GE, Emerson, Citi, Discover, Federal Government agencies',
  'Bilingual delivery: English, Spanish',
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy text-white py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-8">
            <Image src="/logo.png" alt="xlSigma" width={120} height={120} priority />
          </div>

            <h1 className="leading-tight mb-6">
            <span className="text-3xl md:text-4xl font-bold block">Senior-Level Consulting for</span>
            <span className="text-5xl md:text-6xl font-bold text-gold-light block mt-1">Operations Excellence</span>
          </h1>
          <p className="text-xl md:text-2xl font-bold text-white max-w-2xl mx-auto mb-2 leading-relaxed">
            Process reengineering, Process improvement
          </p>
          <p className="text-xl md:text-2xl font-bold text-white max-w-2xl mx-auto mb-8 leading-relaxed">
            Smart Automation, Advanced Analytics
          </p>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
            delivered by practitioners with Fortune 500 depth
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/capabilities"
              className="bg-gold hover:bg-gold-light text-white font-semibold
                         px-7 py-3 rounded-lg transition-colors"
            >
              View Capabilities
            </Link>
            <Link
              href="/contact"
              className="border border-slate-400 hover:border-white text-slate-300
                         hover:text-white font-semibold px-7 py-3 rounded-lg transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <p className="text-gold font-semibold text-sm uppercase tracking-widest mb-3">
            Who We Are
          </p>
          <h2 className="text-3xl font-bold text-navy mb-6">
            Operational Excellence. Senior. Accountable.
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-slate-600 leading-relaxed mb-4">
                xlSigma is a boutique management consulting and technology firm that brings
                big consulting firm rigor with small firm agility.
              </p>
              <p className="text-slate-600 leading-relaxed">
                You're never handed off to juniors. Every engagement is staffed with senior consultants and backed by direct principal oversight.
              </p>
            </div>
            <div className="bg-gold-pale border border-gold/20 rounded-xl p-6">
              <h3 className="font-bold text-navy mb-4 text-sm uppercase tracking-wide">
                Credentials
              </h3>
              <ul className="space-y-3 text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle size={16} className="text-gold mt-0.5 flex-shrink-0" />
                  MBA, The University of Michigan (Ross)
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={16} className="text-gold mt-0.5 flex-shrink-0" />
                  Lean Six Sigma Master Black Belt
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={16} className="text-gold mt-0.5 flex-shrink-0" />
                  Experience across Accenture, IBM, GE, Emerson, Citi Group, Discover Financial, Federal Government
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={16} className="text-gold mt-0.5 flex-shrink-0" />
                  English, Spanish
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Preview */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-gold font-semibold text-sm uppercase tracking-widest mb-3">
              Core Capabilities
            </p>
            <h2 className="text-3xl font-bold text-navy">What We Do</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {CAPABILITIES_PREVIEW.map(({ Icon, title, desc }) => (
              <div
                key={title}
                className="bg-white rounded-xl p-6 border border-slate-200
                           hover:border-gold/40 hover:shadow-md transition-all"
              >
                <div className="w-11 h-11 bg-navy/5 rounded-lg flex items-center justify-center mb-4">
                  <Icon size={22} className="text-navy" />
                </div>
                <h3 className="font-bold text-navy mb-2 text-sm">{title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/capabilities"
              className="inline-flex items-center gap-2 text-navy font-semibold
                         hover:text-gold transition-colors"
            >
              View All Capabilities <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Why xlSigma */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gold font-semibold text-sm uppercase tracking-widest mb-3">
                Why xlSigma
              </p>
              <h2 className="text-3xl font-bold text-navy mb-6">
                The Engagement Model Makes the Difference
              </h2>
              <p className="text-slate-600 leading-relaxed">
                Large firms send senior partners to sell -- then deliver with junior staff.
                xlSigma operates differently. We deliver with senior-level consultants with Principal oversight from day one through final handoff.
              </p>
            </div>
            <ul className="space-y-4">
              {VALUE_PROPS.map((prop) => (
                <li key={prop} className="flex items-start gap-3">
                  <CheckCircle size={18} className="text-gold mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700 text-sm leading-relaxed">{prop}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Government Contracting Banner */}
      <section className="bg-navy py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center gap-3 mb-6 flex-wrap">
            <span className="bg-gold/20 text-gold-light text-xs font-bold px-4 py-1.5
                             rounded-full border border-gold/30 uppercase tracking-wider">
              SDVOSB
            </span>
            <span className="bg-gold/20 text-gold-light text-xs font-bold px-4 py-1.5
                             rounded-full border border-gold/30 uppercase tracking-wider">
              Minority-Owned SB (pending)
            </span>
            <span className="bg-slate-700 text-slate-300 text-xs font-bold px-4 py-1.5
                             rounded-full border border-slate-600 uppercase tracking-wider">
              SAM.gov Registered
            </span>
          </div>
          <h2 className="text-3xl font-bold text-white mb-4">
            Federal Prime Contractor?
          </h2>
          <p className="text-slate-300 mb-8 max-w-xl mx-auto leading-relaxed">
            xlSigma is a certified SDVOSB -- helping
            prime contractors meet participation goals while delivering senior-level execution.
          </p>
          <Link
            href="/government-contracting"
            className="inline-flex items-center gap-2 bg-gold hover:bg-gold-light
                       text-white font-semibold px-7 py-3 rounded-lg transition-colors"
          >
            View Federal Contracting Credentials <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 bg-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-navy mb-4">Ready to Get Started?</h2>
          <p className="text-slate-600 mb-8 leading-relaxed">
            Tell us about your challenge. We will respond within one business day.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-navy hover:bg-navy-light text-white
                       font-semibold px-8 py-3 rounded-lg transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}
'@
Set-Content -LiteralPath "app\page.tsx" -Value $homePage -Encoding utf8
Write-Host "Updated: app/page.tsx"

# ── government-contracting/page.tsx ──────────────────────────
$govPage = @'
import Link  from 'next/link';
import {
  CheckCircle, Shield, Award, Users, ArrowRight, Building2,
} from 'lucide-react';

const VALUE_PROPS = [
  'Satisfies SDVOSB small-business participation goals',
  'Delivers senior-level execution with no ramp-up. Hit the ground running',
  'Fills capability gaps in operations excellence, process improvement, automation, and analytics',
  'Augments proposal teams with differentiated technical content',
  'Scales engagement size to fit subcontract scope and timeline',
];

const PAST_PERFORMANCE = [
  {
    client:  'U.S. Army / ARCENT',
    summary: 'Reengineered LOGCAP logistics change-order process in Afghanistan theater' +
			 '(with Calibre Systems Inc.). ' +
             'Cut cycle time from 150+ days to under 70 days. ' +
             'Built supporting EUC tools (Excel, SharePoint, SQL database).',
    tags:    ['Process Reengineering', 'EUC Tools', 'DoD'],
  },
  {
    client:  'CENTCOM / DoD',
    summary: 'Developed alternate land-routes logistics for the draw-down (retrograde) in ' +
			 'the Afghanistan theater' +
			 '(with Calibre Systems Inc.). ' +
             'Risk mitigation imperative for the scenario of Pakistan closing access to the sea. ' +
             'Designed stochastic multi-node network flow optimizer to minimize cost/time/risk while ' +
			 'maximizing throughput, safety, and adherence to timelines, subject to constraints (with Calibre Systems). ',
    tags:    ['Logistics', 'Data Analytics', 'DoD'],
  },
    {
    client:  'U.S. Army / DoD',
    summary: 'Designed and deployed IT infrastructure for reporting the location of 90,000+ ' +
			 'shipping containers across the war theater in preparation for draw-down (retrograde).' +
			 '(with Calibre Systems Inc.). ' +
             'Reduced errors 80%+ and accelerated reporting cycle time x4. ' +
             'Raw data intake, cleansing, rationalization, transformations, back-end database, and reporting functionality).',
    tags:    ['Data Analytics', 'Database Design', 'DoD'],
  },
  {
    client:  'U.S. Postal Service',
    summary: 'Enterprise Lean Six Sigma deployment. Built governance, metrics capture and reporting, ' +
			 'IT enablement and infrastructure for project management and training ' +
			 '(with Accenture). ',
    tags:    ['Lean Six Sigma', 'Enterprise Deployment', 'Federal'],
  },
  {
    client:  'Top-Tier Financial Institutions',
    summary: 'Designed and deployed AI/RPA solutions automating bank operations ' +
			 'such as paper check processing, invoicing, and KYC process' +
             'Supported regulatory consent-order remediation through process and data diagnostics.',
    tags:    ['AI/RPA', 'Regulatory Compliance', 'KYC', 'Financial Services'],
  },
  {
    client:  'USF Health',
    summary: 'Process improvement and workflow automation supporting ' +
             'referrals process of BRIDGE Clinic operations.',
    tags:    ['Healthcare', 'Process Improvement', 'Workflow Automation'],
  },
];

const NAICS = [
  { code: '541511', desc: 'Custom Computer Programming Services'         },
  { code: '541611', desc: 'Administrative Management Consulting'         },
  { code: '541614', desc: 'Process, Distribution & Logistics Consulting' },
  { code: '541618', desc: 'Other Management Consulting Services'         },
];

export default function GovernmentContractingPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center gap-3 mb-6 flex-wrap">
            <span className="bg-gold/20 text-gold-light text-xs font-bold px-4 py-1.5
                             rounded-full border border-gold/30 uppercase tracking-wider">
              SDVOSB
            </span>
            <span className="bg-gold/20 text-gold-light text-xs font-bold px-4 py-1.5
                             rounded-full border border-gold/30 uppercase tracking-wider">
              Minority-Owned SB (pending)
            </span>
            <span className="bg-slate-700 text-slate-300 text-xs font-bold px-4 py-1.5
                             rounded-full border border-slate-600 uppercase tracking-wider">
              SAM.gov Registered
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Your Trusted
            <span className="text-gold-light block mt-1">SDVOSB Subcontracting Partner</span>
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            xlSigma helps federal prime contractors meet small-business SDVOSB participation
            goals while delivering senior-level consulting and technology capabilities
            with a proven federal track record.
          </p>
        </div>
      </section>

      {/* SDVOSB Credit */}
      <section className="py-16 px-4 bg-gold-pale border-b border-gold/20">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gold font-semibold text-sm uppercase tracking-widest mb-3">
            Small Business Credits
          </p>
          <h2 className="text-2xl font-bold text-navy mb-8">
            Service-Disabled Veteran-Owned Small Business
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { Icon: Shield, label: 'SDVOSB',          sub: 'Service-Disabled Veteran-Owned' },
              { Icon: Users,  label: 'SAM.gov',         sub: 'Active Registration'             },
            ].map(({ Icon, label, sub }) => (
              <div key={label}
                   className="bg-white rounded-xl p-6 border border-gold/20 shadow-sm text-center">
                <Icon size={32} className="text-gold mx-auto mb-3" />
                <div className="font-bold text-navy text-lg">{label}</div>
                <div className="text-slate-500 text-sm mt-1">{sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value to Primes */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-gold font-semibold text-sm uppercase tracking-widest mb-3">
                Value to Prime Contractors
              </p>
              <h2 className="text-3xl font-bold text-navy mb-4">
                Why Primes Choose xlSigma
              </h2>
              <p className="text-slate-600 leading-relaxed">
                We understand the prime-sub relationship. xlSigma integrates seamlessly
                into your delivery model -- providing certified small-business credits,
                senior technical talent, and zero ramp-up time.
              </p>
            </div>
            <ul className="space-y-4 pt-2">
              {VALUE_PROPS.map((prop) => (
                <li key={prop} className="flex items-start gap-3">
                  <CheckCircle size={18} className="text-gold mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700 text-sm leading-relaxed">{prop}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Past Performance */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-gold font-semibold text-sm uppercase tracking-widest mb-3">
              Track Record
            </p>
            <h2 className="text-3xl font-bold text-navy">Selected Past Performance</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {PAST_PERFORMANCE.map(({ client, summary, tags }) => (
              <div key={client}
                   className="bg-white rounded-xl p-6 border border-slate-200
                              hover:border-gold/40 hover:shadow-md transition-all">
                <div className="flex items-start gap-3 mb-3">
                  <Building2 size={20} className="text-navy mt-0.5 flex-shrink-0" />
                  <h3 className="font-bold text-navy">{client}</h3>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">{summary}</p>
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <span key={tag}
                          className="bg-navy/5 text-navy text-xs font-medium px-3 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NAICS Codes */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-gold font-semibold text-sm uppercase tracking-widest mb-3">
              NAICS Codes
            </p>
            <h2 className="text-3xl font-bold text-navy">Registered Capabilities</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {NAICS.map(({ code, desc }) => (
              <div key={code}
                   className="flex items-center gap-4 bg-slate-50 rounded-xl px-6 py-4
                              border border-slate-200">
                <span className="text-gold font-bold text-lg font-mono flex-shrink-0">
                  {code}
                </span>
                <span className="text-slate-700 text-sm">{desc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy py-16 px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-4">
            Let's Talk Teaming
          </h2>
          <p className="text-slate-300 mb-8 leading-relaxed">
            Whether you need a compliant subcontractor for an active bid or
            a long-term teaming partner, xlSigma is ready to engage.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-gold hover:bg-gold-light
                       text-white font-semibold px-7 py-3 rounded-lg transition-colors"
          >
            Start the Conversation <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
'@
Set-Content -LiteralPath "app\government-contracting\page.tsx" -Value $govPage -Encoding utf8
Write-Host "Created: app/government-contracting/page.tsx"

# ── capabilities/page.tsx ─────────────────────────────────────
$capPage = @'
import Link from 'next/link';
import {
  Bot, TrendingUp, BarChart2, LayoutDashboard,
  Code2, Landmark, GitBranch, Users,
  CheckCircle, ArrowRight,
} from 'lucide-react';

const CAPABILITIES = [
  {
    Icon:  Bot,
    title: 'AI-Enabled & RPA Process Automation',
    desc:  'Design and deployment of intelligent automation solutions using RPA platforms ' +
           'and AI tools. Automates repetitive, rules-based processes to reduce errors, ' +
           'slash cycle times, and free staff for higher-value work.',
  },
  {
    Icon:  TrendingUp,
    title: 'Lean Six Sigma / DMAIC / Continuous Improvement',
    desc:  'DMAIC-driven process transformation led by a certified Lean Six Sigma Master ' +
           'Black Belt. From rapid kaizen events to enterprise-wide deployment programs, ' +
           'with governance, metrics, and training infrastructure.',
  },
  {
    Icon:  BarChart2,
    title: 'Data Analytics, KPI Frameworks & Dashboards',
    desc:  'End-to-end analytics: from defining the right KPIs to building the dashboards ' +
           'that drive decisions. Power BI, Tableau, custom Excel-based solutions, with optional' +
		   'integration into your Enterprise IT Systems and tailored to your reporting environment.',
  },
  {
    Icon:  LayoutDashboard,
    title: 'Power BI, Tableau, Power Platform, Excel/VBA',
    desc:  'Deep hands-on expertise across the Microsoft Power Platform and leading BI tools. ' +
           'Build production-ready reports, automated workflows, and data models that ' +
           'non-technical users can own and maintain.',
  },
  {
    Icon:  Code2,
    title: 'End-User Computing (EUC) Application Development',
    desc:  'Custom Excel/VBA workbooks, Access or SQL databases, SharePoint solutions, and ' +
           'lightweight Power Apps -- purpose-built for specific operational workflows ' +
           'and designed for adoption.',
  },
  {
    Icon:  Landmark,
    title: 'Federal Program & Performance Management Support',
    desc:  'Program management, performance metrics, and reporting frameworks for ' +
           'federal agency engagements. Experienced supporting DoD and civilian agency ' +
           'programs through prime contractors.',
  },
  {
    Icon:  GitBranch,
    title: 'Operating Model Design & Strategy Deployment',
    desc:  'Organizational structure, governance design, role clarity, and strategy ' +
           'deployment frameworks (Hoshin Kanri). Bridges the gap between executive ' +
           'strategy and operational execution.',
  },
  {
    Icon:  Users,
    title: 'Agile Delivery, Change & Stakeholder Management',
    desc:  'Agile project delivery combined with structured change management -- ensuring ' +
           'that new processes and tools are adopted, not just installed. Stakeholder ' +
           'communication plans, training, and sustainment.',
  },
];

const DIFFERENTIATORS = [
  'Small-business credit: SDVOSB',
  'Lean Six Sigma Master Black Belt (rare at small-business scale)',
  'Proven federal track record: SBA, USPS, CENTCOM,  U.S. Army ARCENT, JIEDDO',
  'Full-stack delivery: strategy, design, build, implement, and train',
  'Lower business overhead translates to lower prices for top talent and results',
  'Bilingual: English, Spanish',
];

export default function CapabilitiesPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-navy text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gold-light text-sm font-semibold uppercase tracking-widest mb-3">
            What We Deliver
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Core Capabilities</h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Eight integrated practice areas
            <br />
           delivered by senior-only teams with principal oversight
          </p>
        </div>
      </section>

      {/* Capabilities Grid */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {CAPABILITIES.map(({ Icon, title, desc }) => (
              <div
                key={title}
                className="flex gap-5 p-6 rounded-xl border border-slate-200
                           hover:border-gold/40 hover:shadow-md transition-all bg-white"
              >
                <div className="w-12 h-12 bg-navy/5 rounded-xl flex items-center
                                justify-center flex-shrink-0 mt-0.5">
                  <Icon size={24} className="text-navy" />
                </div>
                <div>
                  <h3 className="font-bold text-navy mb-2">{title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Differentiators */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gold font-semibold text-sm uppercase tracking-widest mb-3">
                Differentiators
              </p>
              <h2 className="text-3xl font-bold text-navy mb-4">
                What Sets xlSigma Apart
              </h2>
              <p className="text-slate-600 leading-relaxed">
                These are not marketing claims -- they are structural advantages
                built into how xlSigma operates.
              </p>
            </div>
            <ul className="space-y-4">
              {DIFFERENTIATORS.map((d) => (
                <li key={d} className="flex items-start gap-3">
                  <CheckCircle size={18} className="text-gold mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700 text-sm leading-relaxed">{d}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-navy mb-4">
            See How These Apply to Your Situation
          </h2>
          <p className="text-slate-600 mb-8 leading-relaxed">
            Every engagement starts with understanding your specific challenge.
            Let us show you what senior-level delivery looks like in practice.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-navy hover:bg-navy-light
                         text-white font-semibold px-7 py-3 rounded-lg transition-colors"
            >
              Contact Us <ArrowRight size={16} />
            </Link>
            <Link
              href="/government-contracting"
              className="inline-flex items-center gap-2 border border-navy text-navy
                         hover:bg-navy hover:text-white font-semibold px-7 py-3
                         rounded-lg transition-colors"
            >
              Federal Contracting
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
'@
Set-Content -LiteralPath "app\capabilities\page.tsx" -Value $capPage -Encoding utf8
Write-Host "Created: app/capabilities/page.tsx"

# ── contact/page.tsx ──────────────────────────────────────────
$contactPage = @'
'use client';
import { useState } from 'react';
import { MapPin, Phone, Send, CheckCircle } from 'lucide-react';

// TODO: Replace YOUR_FORM_ID with your Formspree form ID
// Sign up at formspree.io, create a form, and paste the ID here
const FORMSPREE_URL = 'https://formspree.io/f/YOUR_FORM_ID';

type FormState = 'idle' | 'sending' | 'success' | 'error';

export default function ContactPage() {
  const [state, setState] = useState<FormState>('idle');
  const [form, setForm] = useState({
    name:    '',
    company: '',
    email:   '',
    phone:   '',
    message: '',
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setState('sending');
    try {
      const res = await fetch(FORMSPREE_URL, {
        method:  'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body:    JSON.stringify(form),
      });
      if (res.ok) {
        setState('success');
        setForm({ name: '', company: '', email: '', phone: '', message: '' });
      } else {
        setState('error');
      }
    } catch {
      setState('error');
    }
  }

  return (
    <>
      {/* Header */}
      <section className="bg-navy text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gold-light text-sm font-semibold uppercase tracking-widest mb-3">
            Reach Out
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact xlSigma</h1>
          <p className="text-lg text-slate-300 max-w-xl mx-auto">
            Tell us about your challenge. We respond within one business day.
          </p>
        </div>
      </section>

      {/* Form + Info */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-12">

          {/* Form */}
          <div className="md:col-span-2">
            {state === 'success' ? (
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <CheckCircle size={48} className="text-green-500 mb-4" />
                <h2 className="text-2xl font-bold text-navy mb-2">Message Received</h2>
                <p className="text-slate-600">
                  Thank you for reaching out. We will be in touch within one business day.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-navy mb-1.5">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Jane Smith"
                      className="w-full border border-slate-300 rounded-lg px-4 py-2.5 text-sm
                                 focus:outline-none focus:ring-2 focus:ring-navy/30 focus:border-navy"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-navy mb-1.5">
                      Company <span className="text-red-500">*</span>
                    </label>
                    <input
                      name="company"
                      value={form.company}
                      onChange={handleChange}
                      required
                      placeholder="Acme Corp"
                      className="w-full border border-slate-300 rounded-lg px-4 py-2.5 text-sm
                                 focus:outline-none focus:ring-2 focus:ring-navy/30 focus:border-navy"
                    />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-navy mb-1.5">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="jane@company.com"
                      className="w-full border border-slate-300 rounded-lg px-4 py-2.5 text-sm
                                 focus:outline-none focus:ring-2 focus:ring-navy/30 focus:border-navy"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-navy mb-1.5">
                      Phone <span className="text-slate-400 font-normal">(optional)</span>
                    </label>
                    <input
                      name="phone"
                      type="tel"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="(555) 123-4567"
                      className="w-full border border-slate-300 rounded-lg px-4 py-2.5 text-sm
                                 focus:outline-none focus:ring-2 focus:ring-navy/30 focus:border-navy"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-navy mb-1.5">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Describe your challenge or what you are looking for..."
                    className="w-full border border-slate-300 rounded-lg px-4 py-2.5 text-sm
                               focus:outline-none focus:ring-2 focus:ring-navy/30 focus:border-navy
                               resize-none"
                  />
                </div>

                {state === 'error' && (
                  <p className="text-red-600 text-sm">
                    Something went wrong. Please try again or call us directly.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={state === 'sending'}
                  className="flex items-center gap-2 bg-navy hover:bg-navy-light text-white
                             font-semibold px-6 py-3 rounded-lg transition-colors
                             disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  <Send size={16} />
                  {state === 'sending' ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="font-bold text-navy mb-4">Contact Information</h3>
              <ul className="space-y-4 text-sm text-slate-600">
                <li className="flex items-start gap-3">
                  <MapPin size={16} className="text-gold mt-0.5 flex-shrink-0" />
                  <span>Tampa, FL</span>
                </li>
                <li className="flex items-start gap-3">
                  <Phone size={16} className="text-gold mt-0.5 flex-shrink-0" />
                  <span>(813) 919-9772</span>
                </li>
              </ul>
            </div>
            <div className="bg-gold-pale border border-gold/20 rounded-xl p-5">
              <h4 className="font-bold text-navy text-sm mb-3 uppercase tracking-wide">
                Certifications
              </h4>
              <ul className="space-y-2 text-sm text-slate-700">
                <li className="font-semibold text-navy">SDVOSB</li>
                <li className="text-slate-500 text-xs mb-1">
                  Service-Disabled Veteran-Owned Small Business
                </li>
                <li className="font-semibold text-navy">Minority-Owned SB (cert pending)</li>
                <li className="text-slate-500 text-xs mb-1">
                  Minority-Owned Small Business (cert pending)
                </li>
                <li className="font-semibold text-navy">SAM.gov Registered</li>
                <li className="text-slate-500 text-xs">
                  Active federal registration
                </li>
              </ul>
            </div>
            <div>
              <p className="text-xs text-slate-400 uppercase tracking-wider mb-1">NAICS</p>
              <p className="text-sm text-slate-600">
                541511 | 541611 | 541614 | 541618
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
'@
Set-Content -LiteralPath "app\contact\page.tsx" -Value $contactPage -Encoding utf8
Write-Host "Created: app/contact/page.tsx"

Write-Host ""
Write-Host "All files created!" -ForegroundColor Green
Write-Host ""
Write-Host "Before running dev:" -ForegroundColor Yellow
Write-Host "  1. Make sure you copied your logo to: public\logo.png"
Write-Host "  2. Set up Formspree (formspree.io) and replace YOUR_FORM_ID"
Write-Host "     in app\contact\page.tsx with your real form ID"
Write-Host ""
Write-Host "Then run:" -ForegroundColor Green
Write-Host "  npm run dev   ->   http://localhost:3000"
