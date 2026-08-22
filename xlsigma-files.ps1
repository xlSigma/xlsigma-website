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
New-Item -ItemType Directory -Force -Path "app\careers"                   | Out-Null
New-Item -ItemType Directory -Force -Path "app\api\careers"               | Out-Null

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
              Senior-level consulting and technology services for commercial
              and government clients.
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
                { href: '/careers',                label: 'Careers'                },
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

# ── SemanticToActionDiagram.tsx ───────────────────────────────
$semanticDiagram = @'
import { ArrowDown, ArrowRight } from 'lucide-react';

type Stage = {
  num:      string;
  title:    string;
  desc:     string;
  featured?: boolean;
};

const STAGES: Stage[] = [
  {
    num:   '01',
    title: 'Enterprise Systems & Knowledge',
    desc:  'Data / Documents / Platforms',
  },
  {
    num:      '02',
    title:    'Enterprise Semantic Foundation',
    desc:     'Meaning / Entities / Relationships',
    featured: true,
  },
  {
    num:   '03',
    title: 'Process & Policy',
    desc:  'Workflows / Rules / Controls',
  },
  {
    num:   '04',
    title: 'Role & Authority',
    desc:  'Responsibilities / Decisions / Approvals',
  },
  {
    num:   '05',
    title: 'AI Agents & Intelligent Automation',
    desc:  'Agents / Orchestration / RPA',
  },
  {
    num:   '06',
    title: 'Business Outcomes',
    desc:  'Speed / Adaptability / Control',
  },
];

export default function SemanticToActionDiagram() {
  return (
    <div className="w-full overflow-x-hidden">
      <ol
        role="list"
        aria-label="Semantic-to-Action Architecture stages"
        className="list-none p-0 m-0 flex flex-col xl:flex-row xl:items-stretch"
      >
        {STAGES.flatMap((stage, i) => {
          const card = (
            <li
              key={stage.title}
              className={[
                'flex-1 min-w-0 rounded-xl p-4 xl:p-5 flex flex-col gap-2',
                stage.featured
                  ? 'bg-gold-pale border-2 border-gold'
                  : 'bg-white border-2 border-slate-200 hover:border-gold/50 hover:shadow-sm transition-all',
              ].join(' ')}
            >
              <span className="text-xs font-mono font-semibold text-gold tracking-widest">
                {stage.num}
              </span>
              <h3 className="font-bold text-navy text-sm leading-snug">
                {stage.title}
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                {stage.desc}
              </p>
            </li>
          );

          if (i < STAGES.length - 1) {
            const connector = (
              <li
                key={`connector-${i}`}
                role="presentation"
                aria-hidden="true"
                className="flex xl:flex-col items-center justify-center
                           py-2 xl:py-0 xl:px-2 flex-shrink-0"
              >
                <ArrowDown
                  size={16}
                  strokeWidth={1.5}
                  className="xl:hidden text-slate-300"
                />
                <ArrowRight
                  size={16}
                  strokeWidth={1.5}
                  className="hidden xl:block text-slate-300"
                />
              </li>
            );
            return [card, connector];
          }
          return [card];
        })}
      </ol>
    </div>
  );
}
'@
Set-Content -LiteralPath "app\components\SemanticToActionDiagram.tsx" -Value $semanticDiagram -Encoding utf8
Write-Host "Created: app/components/SemanticToActionDiagram.tsx"

# ── app/page.tsx - Homepage (private sector) ─────────────────
$homePage = @'
import type { Metadata } from 'next';
import Link  from 'next/link';
import Image from 'next/image';
import {
  TrendingUp, BarChart2, Bot, Brain,
  CheckCircle, ArrowRight,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'xlSigma | Operational Excellence, AI & Enterprise Transformation',
  description:
    'xlSigma helps commercial and government organizations improve performance through Lean Six Sigma, enterprise knowledge and semantic transformation, AI agents, intelligent automation, analytics, and technology-enabled transformation.',
};

const CAPABILITIES_PREVIEW = [
  {
    Icon:  TrendingUp,
    title: 'Lean Six Sigma / Continuous Improvement',
    desc:  'DMAIC-driven transformation led by a certified Master Black Belt.',
  },
  {
    Icon:  Brain,
    title: 'Enterprise Knowledge & Semantic Transformation',
    desc:  'AI-ready knowledge and semantic foundations that connect enterprise concepts, institutional knowledge, and system context.',
  },
  {
    Icon:  Bot,
    title: 'AI, Agents & Intelligent Automation',
    desc:  'AI agents, RPA, and intelligent automation that orchestrate work, reduce repetitive effort, and operate within defined controls.',
  },
  {
    Icon:  BarChart2,
    title: 'Data Analytics & KPI Dashboards',
    desc:  'Power BI, Tableau, and custom frameworks that turn data into decisions.',
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
          <div className="flex justify-center mb-8 w-full">
            <Image src="/xlsigma_banner_260717.jpg" alt="xlSigma Banner" width={960} height={213} priority className="w-full max-w-3xl h-auto" />
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
                  Experience across Accenture, GE, Emerson, Citi Group, Discover Financial, Federal Government
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

      {/* Semantic-to-Action Teaser */}
      <section className="pt-20 pb-14 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl">
            <p className="text-gold font-semibold text-sm uppercase tracking-widest mb-3">
              Our Transformation Architecture
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6 leading-tight">
              From Enterprise Meaning to Intelligent Action
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              AI can access enterprise information without truly understanding how the business works. xlSigma's Semantic-to-Action Architecture connects enterprise systems and knowledge to a shared Semantic Foundation, then adds the processes, policies, roles, decision authority, and controls AI needs to operate effectively.
            </p>
            <p className="text-slate-600 leading-relaxed mb-6">
              The result is a governed business architecture that allows AI to move beyond isolated tools and begin reasoning across operations and acting within defined boundaries.
            </p>
            <p className="border-l-4 border-gold pl-4 text-navy font-semibold text-lg leading-snug mb-8">
              We don't start with the AI agent. We model the business the agent must understand.
            </p>
            <div className="hidden md:flex flex-wrap gap-x-1.5 gap-y-2 items-center mb-8" aria-hidden="true">
              {[
                'Systems & Knowledge',
                'Semantic Foundation',
                'Process & Policy',
                'Role & Authority',
                'AI & Automation',
                'Outcomes',
              ].flatMap((label, i, arr) => {
                const chip = (
                  <span
                    key={label}
                    className="text-xs font-medium px-2.5 py-1 rounded-full bg-navy/5 border border-navy/20 text-navy whitespace-nowrap"
                  >
                    {label}
                  </span>
                );
                if (i < arr.length - 1) {
                  return [chip, <span key={`sep-${i}`} className="text-slate-300 text-xs select-none font-light">{'>'}</span>];
                }
                return [chip];
              })}
            </div>
            <Link
              href="/capabilities#semantic-to-action"
              className="inline-flex items-center gap-2 bg-navy hover:bg-navy-light
                         text-white font-semibold px-7 py-3 rounded-lg transition-colors"
            >
              Explore the Semantic-to-Action Architecture <ArrowRight size={16} />
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
              FL OSD Veteran CBE (pending)
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
              FL OSD Veteran CBE (pending)
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
import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Bot, Brain, TrendingUp, BarChart2, LayoutDashboard,
  Code2, Landmark, GitBranch, Users, Truck,
  CheckCircle, ArrowRight,
} from 'lucide-react';
import SemanticToActionDiagram from '../components/SemanticToActionDiagram';

export const metadata: Metadata = {
  title: 'Capabilities & Semantic-to-Action Architecture | xlSigma',
  description:
    'Explore xlSigma capabilities in Lean Six Sigma, enterprise knowledge and semantic transformation, AI agents and intelligent automation, operating model design, analytics, digital solutions, and federal program support.',
};

const CAPABILITIES = [
  {
    Icon:  TrendingUp,
    title: 'Lean Six Sigma / DMAIC / Continuous Improvement',
    desc:  'DMAIC-driven process transformation led by a certified Lean Six Sigma Master ' +
           'Black Belt. From rapid kaizen events to enterprise-wide deployment programs, ' +
           'with governance, metrics, and training infrastructure. ' +
           'This is the discipline behind every other capability on this page.',
  },
  {
    Icon:  Bot,
    title: 'AI, Agents & Intelligent Automation',
    desc:  'Design and deployment of AI agents, RPA, and intelligent automation solutions that ' +
           'orchestrate work across systems, apply business rules, support human-in-the-loop ' +
           'decisions, and reduce repetitive effort while preserving appropriate controls and oversight.',
  },
  {
    Icon:  Truck,
    title: 'Logistics & Supply Chain',
    desc:  'Operational excellence and intelligent automation for fulfillment operations, ' +
           'delivered through process mining and targeted automation.',
  },
  {
    Icon:  Brain,
    title: 'Enterprise Knowledge & Semantic Transformation',
    desc:  'Transform fragmented enterprise knowledge, data, processes, and business definitions ' +
           'into structured, AI-ready foundations. xlSigma captures institutional knowledge, ' +
           'creates governed business semantics, maps concepts across systems, and develops the ' +
           'knowledge and semantic models AI needs to understand how the enterprise actually operates.',
  },
  {
    Icon:  GitBranch,
    title: 'Operating Model Design & Strategy Deployment',
    desc:  'Organizational structure, governance design, role clarity, and strategy ' +
           'deployment frameworks (Hoshin Kanri). Bridges the gap between executive ' +
           'strategy and operational execution.',
  },
  {
    Icon:  BarChart2,
    title: 'Data Analytics, KPI Frameworks & Dashboards',
    desc:  'End-to-end analytics: from defining the right KPIs to building the dashboards ' +
           'that drive decisions. Power BI, Tableau, custom Excel-based solutions, with optional ' +
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
    Icon:  Users,
    title: 'Agile Delivery, Change & Stakeholder Management',
    desc:  'Agile project delivery that keeps engagements on schedule, combined with ' +
           'structured change management -- ensuring that new processes and tools are ' +
           'adopted, not just installed. Stakeholder communication plans, training, and sustainment.',
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

function LssDiagram() {
  return (
    <svg
      viewBox="0 0 680 630"
      className="w-full max-w-2xl mx-auto block"
      role="img"
      aria-label="Hub-and-spoke diagram with Lean Six Sigma at center connected to nine capability areas"
    >
      {/* Lines from hub to spokes — drawn first so rects render on top */}
      <line x1="340" y1="315" x2="340" y2="95"  stroke="#CBD5E1" strokeWidth="1.5" />
      <line x1="340" y1="315" x2="481" y2="147" stroke="#CBD5E1" strokeWidth="1.5" />
      <line x1="340" y1="315" x2="557" y2="277" stroke="#CBD5E1" strokeWidth="1.5" />
      <line x1="340" y1="315" x2="531" y2="425" stroke="#CBD5E1" strokeWidth="1.5" />
      <line x1="340" y1="315" x2="415" y2="522" stroke="#CBD5E1" strokeWidth="1.5" />
      <line x1="340" y1="315" x2="265" y2="522" stroke="#CBD5E1" strokeWidth="1.5" />
      <line x1="340" y1="315" x2="150" y2="425" stroke="#CBD5E1" strokeWidth="1.5" />
      <line x1="340" y1="315" x2="123" y2="277" stroke="#CBD5E1" strokeWidth="1.5" />
      <line x1="340" y1="315" x2="199" y2="147" stroke="#CBD5E1" strokeWidth="1.5" />

      {/* Hub */}
      <rect x="255" y="272" width="170" height="86" rx="16" fill="#1B3F7A" />
      <text x="340" y="307" textAnchor="middle" dominantBaseline="central"
            fill="#FFFFFF" fontSize="15" fontWeight="700" fontFamily="system-ui,sans-serif">Lean Six Sigma</text>
      <text x="340" y="327" textAnchor="middle" dominantBaseline="central"
            fill="#D4A017" fontSize="12" fontWeight="600" fontFamily="system-ui,sans-serif">DMAIC discipline</text>

      {/* AI & RPA — top (270 deg) */}
      <rect x="273" y="69" width="134" height="52" rx="8" fill="#FFFFFF" stroke="#1B3F7A" strokeWidth="1.5" />
      <text x="340" y="87"  textAnchor="middle" dominantBaseline="central"
            fill="#1B3F7A" fontSize="12" fontWeight="600" fontFamily="system-ui,sans-serif">AI, Agents &amp;</text>
      <text x="340" y="105" textAnchor="middle" dominantBaseline="central"
            fill="#1B3F7A" fontSize="11" fontFamily="system-ui,sans-serif">Automation</text>

      {/* Logistics — upper-right (310 deg) */}
      <rect x="414" y="121" width="134" height="52" rx="8" fill="#FFFFFF" stroke="#1B3F7A" strokeWidth="1.5" />
      <text x="481" y="139" textAnchor="middle" dominantBaseline="central"
            fill="#1B3F7A" fontSize="12" fontWeight="600" fontFamily="system-ui,sans-serif">Logistics &amp;</text>
      <text x="481" y="157" textAnchor="middle" dominantBaseline="central"
            fill="#1B3F7A" fontSize="11" fontFamily="system-ui,sans-serif">Supply Chain</text>

      {/* Knowledge — right (350 deg) */}
      <rect x="490" y="251" width="134" height="52" rx="8" fill="#FFFFFF" stroke="#1B3F7A" strokeWidth="1.5" />
      <text x="557" y="269" textAnchor="middle" dominantBaseline="central"
            fill="#1B3F7A" fontSize="11" fontWeight="600" fontFamily="system-ui,sans-serif">Knowledge &amp; Semantic</text>
      <text x="557" y="287" textAnchor="middle" dominantBaseline="central"
            fill="#1B3F7A" fontSize="11" fontFamily="system-ui,sans-serif">Transformation</text>

      {/* Operating Model — lower-right (30 deg) */}
      <rect x="464" y="399" width="134" height="52" rx="8" fill="#FFFFFF" stroke="#1B3F7A" strokeWidth="1.5" />
      <text x="531" y="417" textAnchor="middle" dominantBaseline="central"
            fill="#1B3F7A" fontSize="12" fontWeight="600" fontFamily="system-ui,sans-serif">Operating Model</text>
      <text x="531" y="435" textAnchor="middle" dominantBaseline="central"
            fill="#1B3F7A" fontSize="11" fontFamily="system-ui,sans-serif">&amp; Strategy Deployment</text>

      {/* Data Analytics — bottom-right (70 deg) */}
      <rect x="348" y="496" width="134" height="52" rx="8" fill="#FFFFFF" stroke="#1B3F7A" strokeWidth="1.5" />
      <text x="415" y="514" textAnchor="middle" dominantBaseline="central"
            fill="#1B3F7A" fontSize="12" fontWeight="600" fontFamily="system-ui,sans-serif">Data Analytics</text>
      <text x="415" y="532" textAnchor="middle" dominantBaseline="central"
            fill="#1B3F7A" fontSize="11" fontFamily="system-ui,sans-serif">KPIs &amp; Dashboards</text>

      {/* Power BI — bottom-left (110 deg) */}
      <rect x="198" y="496" width="134" height="52" rx="8" fill="#FFFFFF" stroke="#1B3F7A" strokeWidth="1.5" />
      <text x="265" y="514" textAnchor="middle" dominantBaseline="central"
            fill="#1B3F7A" fontSize="12" fontWeight="600" fontFamily="system-ui,sans-serif">Power BI / Tableau</text>
      <text x="265" y="532" textAnchor="middle" dominantBaseline="central"
            fill="#1B3F7A" fontSize="11" fontFamily="system-ui,sans-serif">Power Platform</text>

      {/* EUC — lower-left (150 deg) */}
      <rect x="83" y="399" width="134" height="52" rx="8" fill="#FFFFFF" stroke="#1B3F7A" strokeWidth="1.5" />
      <text x="150" y="417" textAnchor="middle" dominantBaseline="central"
            fill="#1B3F7A" fontSize="12" fontWeight="600" fontFamily="system-ui,sans-serif">EUC App</text>
      <text x="150" y="435" textAnchor="middle" dominantBaseline="central"
            fill="#1B3F7A" fontSize="11" fontFamily="system-ui,sans-serif">Development</text>

      {/* Federal — left (190 deg) */}
      <rect x="56" y="251" width="134" height="52" rx="8" fill="#FFFFFF" stroke="#1B3F7A" strokeWidth="1.5" />
      <text x="123" y="269" textAnchor="middle" dominantBaseline="central"
            fill="#1B3F7A" fontSize="12" fontWeight="600" fontFamily="system-ui,sans-serif">Federal Program</text>
      <text x="123" y="287" textAnchor="middle" dominantBaseline="central"
            fill="#1B3F7A" fontSize="11" fontFamily="system-ui,sans-serif">Perf. Mgmt</text>

      {/* Agile/Change — upper-left (230 deg) */}
      <rect x="132" y="121" width="134" height="52" rx="8" fill="#FFFFFF" stroke="#1B3F7A" strokeWidth="1.5" />
      <text x="199" y="139" textAnchor="middle" dominantBaseline="central"
            fill="#1B3F7A" fontSize="12" fontWeight="600" fontFamily="system-ui,sans-serif">Agile Delivery</text>
      <text x="199" y="157" textAnchor="middle" dominantBaseline="central"
            fill="#1B3F7A" fontSize="11" fontFamily="system-ui,sans-serif">&amp; Change Mgmt</text>
    </svg>
  );
}

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
            Ten integrated practice areas
            <br />
            delivered by senior-only teams with principal oversight
          </p>
        </div>
      </section>

      {/* Framing + Hub-and-Spoke Diagram */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-slate-600 italic text-lg leading-relaxed mb-1 max-w-2xl mx-auto">
            Every capability is applied through a disciplined Lean Six Sigma lens
          </p>
          <p className="text-slate-600 italic text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
            Fact-based, waste-eliminating, and built for repeatable results.
          </p>
          <LssDiagram />
        </div>
      </section>

      {/* Semantic-to-Action Architecture */}
      <section
        id="semantic-to-action"
        className="scroll-mt-20 py-20 px-4 bg-navy"
      >
        <div className="max-w-4xl mx-auto text-center mb-10">
          <p className="text-gold-light text-sm font-semibold uppercase tracking-widest mb-3">
            How Our Capabilities Work Together
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
            The xlSigma Semantic-to-Action Architecture
          </h2>
          <p className="text-slate-300 leading-relaxed mb-4 max-w-3xl mx-auto">
            xlSigma's capabilities work together through our Semantic-to-Action Architecture -- a structured approach that transforms fragmented enterprise systems, data, knowledge, processes, rules, and organizational expertise into the business context AI needs to understand, reason, and act.
          </p>
          <p className="text-slate-300 leading-relaxed mb-3 max-w-3xl mx-auto">
            Rather than deploying AI as another disconnected tool, we build the operational foundation required for trusted, scalable AI-enabled transformation.
          </p>
          <p className="text-white font-semibold leading-relaxed max-w-3xl mx-auto">
            Lean Six Sigma provides the transformation discipline. Semantic-to-Action provides the architecture.
          </p>
        </div>
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
            <SemanticToActionDiagram />
          </div>
        </div>
        <div className="max-w-4xl mx-auto text-center mt-8">
          <p className="text-gold-light text-lg font-medium italic">
            Domain by domain. Process by process. Outcome by outcome.
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

  function formatPhone(value: string): string {
    const digits = value.replace(/\D/g, '').slice(0, 10);
    if (digits.length <= 3) return digits.length ? `(${digits}` : '';
    if (digits.length <= 6) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
    return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setState('sending');
    try {
      const res = await fetch('/api/contact', {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
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
                      onChange={e => setForm(prev => ({ ...prev, phone: formatPhone(e.target.value) }))}
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
                <li className="font-semibold text-navy">FL OSD Veteran CBE (pending)</li>
                <li className="text-slate-500 text-xs mb-1">
                  Florida OSD Veteran-Owned Business Enterprise (pending)
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

# ── app/api/careers/route.ts ──────────────────────────────────
$careersApi = @'
import { put, issueSignedToken, presignUrl } from '@vercel/blob';
import { Resend } from 'resend';
import type { NextRequest } from 'next/server';

const ALLOWED_MIME = [
  'application/pdf',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
];

// 7 days — long enough to review an application, not indefinite
const LINK_EXPIRY_MS = 7 * 24 * 60 * 60 * 1000;

export async function POST(request: NextRequest) {
  try {
    const form = await request.formData();

    const name      = (form.get('name')      as string | null)?.trim() ?? '';
    const email     = (form.get('email')     as string | null)?.trim() ?? '';
    const phone     = (form.get('phone')     as string | null)?.trim() ?? '';
    const linkedin  = (form.get('linkedin')  as string | null)?.trim() ?? '';
    const expertise = (form.get('expertise') as string | null)?.trim() ?? '';
    const message   = (form.get('message')   as string | null)?.trim() ?? '';
    const file      = form.get('resume') as File | null;

    if (!name || !email || !phone) {
      return Response.json({ error: 'Name, email, and phone are required.' }, { status: 400 });
    }
    if (!file || file.size === 0) {
      return Response.json({ error: 'A resume file is required.' }, { status: 400 });
    }

    const extOk = /\.(pdf|doc|docx)$/i.test(file.name);
    if (!ALLOWED_MIME.includes(file.type) && !extOk) {
      return Response.json({ error: 'Resume must be a PDF, DOC, or DOCX file.' }, { status: 400 });
    }
    if (file.size > 5 * 1024 * 1024) {
      return Response.json({ error: 'Resume must be 5 MB or smaller.' }, { status: 400 });
    }

    const stamp    = new Date().toISOString().replace(/[:.]/g, '-');
    const safeName = file.name.replace(/[^a-zA-Z0-9._-]/g, '_');

    // Upload to the private store
    const blob = await put(`careers/${stamp}-${safeName}`, file, { access: 'private' });

    // Issue a scoped delegation token, then build a 7-day presigned GET URL.
    // The recipient can open the resume from the email without needing Vercel credentials.
    const validUntil    = Date.now() + LINK_EXPIRY_MS;
    const signedToken   = await issueSignedToken({
      pathname:   blob.pathname,
      operations: ['get'],
      validUntil,
    });
    const { presignedUrl } = await presignUrl(signedToken, {
      operation:  'get',
      pathname:   blob.pathname,
      access:     'private',
      validUntil,
    });

    // noreply@xlsigma.com must be a verified sender in your Resend dashboard
    const resend = new Resend(process.env.RESEND_API_KEY);
    const from   = process.env.RESEND_FROM_EMAIL ?? 'onboarding@resend.dev';
    const to     = process.env.JOIN_US_NOTIFY_EMAIL ?? 'talent@xlsigma.com';

    console.log('[careers/route] Sending via Resend to:', to, '| from:', from, '| API key present:', !!process.env.RESEND_API_KEY);

    const result = await resend.emails.send({
      from,
      to,
      subject: `New Talent Application — ${name}`,
      html: `
        <h2 style="font-family:sans-serif;color:#1B3F7A;margin-bottom:16px">
          New Talent Community Application
        </h2>
        <table style="border-collapse:collapse;font-family:sans-serif;font-size:14px">
          <tr>
            <td style="padding:6px 20px 6px 0;font-weight:600;color:#1B3F7A;white-space:nowrap;vertical-align:top">Name</td>
            <td style="padding:6px 0">${name}</td>
          </tr>
          <tr>
            <td style="padding:6px 20px 6px 0;font-weight:600;color:#1B3F7A;vertical-align:top">Email</td>
            <td style="padding:6px 0"><a href="mailto:${email}">${email}</a></td>
          </tr>
          <tr>
            <td style="padding:6px 20px 6px 0;font-weight:600;color:#1B3F7A;vertical-align:top">Phone</td>
            <td style="padding:6px 0">${phone}</td>
          </tr>
          <tr>
            <td style="padding:6px 20px 6px 0;font-weight:600;color:#1B3F7A;vertical-align:top">LinkedIn</td>
            <td style="padding:6px 0">${linkedin || '&mdash;'}</td>
          </tr>
          <tr>
            <td style="padding:6px 20px 6px 0;font-weight:600;color:#1B3F7A;vertical-align:top">Expertise</td>
            <td style="padding:6px 0">${expertise || '&mdash;'}</td>
          </tr>
          <tr>
            <td style="padding:6px 20px 6px 0;font-weight:600;color:#1B3F7A;vertical-align:top">Message</td>
            <td style="padding:6px 0;white-space:pre-wrap">${message || '&mdash;'}</td>
          </tr>
          <tr>
            <td style="padding:6px 20px 6px 0;font-weight:600;color:#1B3F7A;vertical-align:top">Resume</td>
            <td style="padding:6px 0">
              <a href="${presignedUrl}" style="color:#B8820A">${file.name}</a>
              <span style="color:#888;font-size:12px"> (link valid 7 days)</span>
            </td>
          </tr>
          <tr>
            <td style="padding:6px 20px 6px 0;font-weight:600;color:#1B3F7A;vertical-align:top">Submitted</td>
            <td style="padding:6px 0">${new Date().toUTCString()}</td>
          </tr>
        </table>
      `,
    });

    console.log('[careers/route] Resend result:', JSON.stringify(result));

    if (result.error) {
      throw new Error(`Resend API error: ${JSON.stringify(result.error)}`);
    }

    return Response.json({ success: true });
  } catch (err) {
    console.error('[careers/route] Error:', err);
    return Response.json({ error: 'Submission failed. Please try again later.' }, { status: 500 });
  }
}
'@
Set-Content -LiteralPath "app\api\careers\route.ts" -Value $careersApi -Encoding utf8
Write-Host "Created: app/api/careers/route.ts"

# ── careers/page.tsx ──────────────────────────────────────────
$careersPage = @'
'use client';
import { useState, useRef } from 'react';
import type { ChangeEvent, FormEvent } from 'react';
import { CheckCircle, Upload, Loader2 } from 'lucide-react';

type FormState = 'idle' | 'sending' | 'success' | 'error';

const QUALIFICATIONS = [
  'Strong analytical skills with the ability to interpret complex data, develop insights, and translate findings into practical recommendations.',
  'Demonstrated expertise in management consulting and consulting practices, including client-facing leadership, engagement delivery, and stakeholder management.',
  'Experience in finance-related analysis, such as building business cases, ROI models, and cost-benefit analyses to support transformation initiatives.',
  'Expertise in business process design and improvement, including current-state / future-state process mapping, performance measurement, and application of Lean Six Sigma methods.',
  'Solid understanding of AI, automation, and RPA concepts and their application in operational and process improvement contexts, including the ability to develop benefit, cost, and risk analyses and define detailed requirements for SMEs who design or implement technical AI/automation/RPA solutions.',
  'Proven track record leading or supporting projects in one or more domains such as manufacturing, healthcare, financial services, IT, or government programs.',
  'Excellent communication, presentation, and facilitation skills, with the ability to work collaboratively with senior leadership and diverse cross-functional teams.',
  'Advanced degree and professional certifications, such as MBA, Lean Six Sigma Master Black Belt, PMP, or related credentials, are a plus.',
];

export default function CareersPage() {
  const [state, setState]         = useState<FormState>('idle');
  const [errorMsg, setErrorMsg]   = useState('');
  const [fileError, setFileError] = useState('');
  const [form, setForm] = useState({
    name: '', email: '', phone: '', linkedin: '', expertise: '', message: '',
  });
  const [resume, setResume] = useState<File | null>(null);
  const fileRef = useRef<HTMLInputElement>(null);

  function handleChange(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handlePhone(e: ChangeEvent<HTMLInputElement>) {
    const digits = e.target.value.replace(/\D/g, '').slice(0, 10);
    let formatted = digits;
    if (digits.length > 6) {
      formatted = `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
    } else if (digits.length > 3) {
      formatted = `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
    } else if (digits.length > 0) {
      formatted = `(${digits}`;
    }
    setForm(prev => ({ ...prev, phone: formatted }));
  }

  function handleLinkedin(e: ChangeEvent<HTMLInputElement>) {
    let val = e.target.value;
    const match = val.match(/linkedin\.com\/in\/([^/?#]+)/i);
    if (match) val = match[1];
    setForm(prev => ({ ...prev, linkedin: val.replace(/^\/+|\/+$/g, '') }));
  }

  function handleFile(e: ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0] ?? null;
    setFileError('');
    if (!file) { setResume(null); return; }
    const validMime = [
      'application/pdf',
      'application/msword',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    ];
    const validExt = /\.(pdf|doc|docx)$/i.test(file.name);
    if (!validMime.includes(file.type) && !validExt) {
      setFileError('Please upload a PDF, DOC, or DOCX file.');
      setResume(null);
      if (fileRef.current) fileRef.current.value = '';
      return;
    }
    if (file.size > 5 * 1024 * 1024) {
      setFileError('File must be 5 MB or smaller.');
      setResume(null);
      if (fileRef.current) fileRef.current.value = '';
      return;
    }
    setResume(file);
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setErrorMsg('');
    if (!resume) { setFileError('Please attach your resume.'); return; }

    setState('sending');
    const data = new FormData();
    Object.entries(form).forEach(([k, v]) => {
      if (k === 'linkedin') {
        const slug = v.trim();
        data.append(k, slug ? `https://www.linkedin.com/in/${slug}/` : '');
      } else {
        data.append(k, v);
      }
    });
    data.append('resume', resume);

    try {
      const res = await fetch('/api/careers', { method: 'POST', body: data });
      if (res.ok) {
        setState('success');
      } else {
        const json = await res.json().catch(() => ({})) as { error?: string };
        setErrorMsg(json.error ?? 'Submission failed. Please try again.');
        setState('error');
      }
    } catch {
      setErrorMsg('Network error. Please check your connection and try again.');
      setState('error');
    }
  }

  return (
    <>
      {/* Hero */}
      <section className="bg-navy text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gold-light text-sm font-semibold uppercase tracking-widest mb-3">
            Opportunities
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Join Our Talent Community</h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Senior consultants and subject-matter experts
          </p>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            who deliver measurable operational results.
          </p>
        </div>
      </section>

      {/* Body Copy */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto space-y-12">

          <div className="bg-gold-pale border border-gold/20 rounded-xl p-6">
            <h2 className="text-lg font-bold text-navy mb-3">Talent Community Opportunity</h2>
            <p className="text-slate-700 text-sm leading-relaxed">
              By applying, you are expressing interest in joining our network of trusted consultants
              and subject-matter experts who may partner with us on a contract basis when client
              project needs arise.
            </p>
            <p className="text-slate-700 text-sm leading-relaxed mt-3">
              This is not an immediate or guaranteed opening. Engagements are project-based, and
              xlSigma will reach out when an opportunity aligns with your experience, availability,
              location, and client requirements.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-navy mb-4">Company Description</h2>
            <div className="space-y-4 text-slate-600 text-sm leading-relaxed">
              <p>
                xlSigma LLC is a management consulting firm that delivers solutions at the
                intersection of operational excellence, AI, automation, enterprise knowledge
                transformation, IT, and Lean Six Sigma.
              </p>
              <p>
                We help private-sector and government organizations improve performance by
                integrating AI, automation, knowledge management, and Lean Six Sigma into core
                operations. Our core capabilities include process optimization, AI/RPA-enabled
                automation, enterprise knowledge management, technology-enabled transformation,
                KPI and management dashboards, and operational performance improvement.
              </p>
              <p>
                xlSigma serves clients across industries including manufacturing, healthcare,
                financial services, and government. Engagements are led by experienced practitioners
                with backgrounds at organizations such as GE, Emerson, TD Bank, Citi, and
                major consulting firms.
              </p>
              <p>
                Headquartered in the Greater Tampa Bay Area, xlSigma serves commercial clients
                directly and partners with federal prime contractors as a strategic subcontracting
                partner. The firm is building a talent pool of senior consultants, subject-matter
                experts, and delivery practitioners who can support high-impact transformation,
                automation, process improvement, and knowledge-management initiatives.
              </p>
              <p>
                xlSigma is especially interested in experienced consultants who bring practical
                delivery expertise, client-facing judgment, and the ability to convert strategy
                into measurable operational results.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-bold text-navy mb-4">
              Role Description: Senior Management Consultant / SME &mdash; Talent Pool
            </h2>
            <div className="space-y-4 text-slate-600 text-sm leading-relaxed">
              <p>
                The Senior Management Consultant is a senior practitioner role supporting future
                full-time, part-time, remote, hybrid, and client on-site consulting opportunities
                as client needs, prime-contractor teaming opportunities, and federal or commercial
                engagements develop.
              </p>
              <p>
                This role is responsible for leading or supporting consulting engagements that
                diagnose client challenges and design practical, data-driven solutions integrating
                AI, automation, Lean Six Sigma, and operational excellence methods. Depending on
                the engagement, the Senior Management Consultant may serve as an engagement lead,
                workstream lead, subject-matter expert, or specialized delivery practitioner.
              </p>
              <p>
                Day-to-day activities may include conducting assessments and analyses, mapping and
                optimizing business processes, facilitating workshops with client leadership and
                cross-functional teams, and preparing clear, actionable deliverables such as
                roadmaps, business cases, operating models, requirements documents, and performance
                dashboards.
              </p>
              <p>
                The Senior Management Consultant will collaborate with technical and business
                stakeholders, mentor project team members, and help build reusable frameworks,
                tools, and methodologies that support xlSigma&apos;s service offerings. This role
                may also contribute to business development efforts by supporting proposals,
                participating in client presentations, and identifying opportunities to expand
                engagement scope and impact.
              </p>
              <p>
                Selected consultants will be considered for future project-based opportunities as
                client needs, prime-contractor teaming opportunities, and federal or commercial
                engagements develop.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-bold text-navy mb-4">Qualifications</h2>
            <ul className="space-y-3">
              {QUALIFICATIONS.map((q, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-gold font-bold flex-shrink-0 mt-0.5">&#8226;</span>
                  <span className="text-slate-600 text-sm leading-relaxed">{q}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </section>

      {/* Application Form */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-gold font-semibold text-sm uppercase tracking-widest mb-2">
              Apply Now
            </p>
            <h2 className="text-3xl font-bold text-navy">Submit Your Interest</h2>
          </div>

          {state === 'success' ? (
            <div className="flex flex-col items-center justify-center py-16 text-center
                            bg-white rounded-xl border border-slate-200 px-8">
              <CheckCircle size={48} className="text-green-500 mb-4" />
              <h3 className="text-2xl font-bold text-navy mb-3">Application Received</h3>
              <p className="text-slate-600 max-w-md leading-relaxed">
                Thanks &mdash; we&apos;ve received your information and will reach out when a
                fitting opportunity arises.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}
                  className="bg-white rounded-xl border border-slate-200 p-8 space-y-6">

              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold text-navy mb-1.5">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    name="name" value={form.name} onChange={handleChange} required
                    placeholder="Jane Smith"
                    className="w-full border border-slate-300 rounded-lg px-4 py-2.5 text-sm
                               focus:outline-none focus:ring-2 focus:ring-navy/30 focus:border-navy"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-navy mb-1.5">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    name="email" type="email" value={form.email} onChange={handleChange} required
                    placeholder="jane@company.com"
                    className="w-full border border-slate-300 rounded-lg px-4 py-2.5 text-sm
                               focus:outline-none focus:ring-2 focus:ring-navy/30 focus:border-navy"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold text-navy mb-1.5">
                    Phone <span className="text-red-500">*</span>
                  </label>
                  <input
                    name="phone" type="tel" value={form.phone} onChange={handlePhone} required
                    placeholder="(555) 123-4567"
                    className="w-full border border-slate-300 rounded-lg px-4 py-2.5 text-sm
                               focus:outline-none focus:ring-2 focus:ring-navy/30 focus:border-navy"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-navy mb-1.5">
                    LinkedIn
                    <span className="text-slate-400 font-normal ml-1">(optional)</span>
                  </label>
                  <div className="flex rounded-lg border border-slate-300 overflow-hidden
                                  focus-within:ring-2 focus-within:ring-navy/30 focus-within:border-navy
                                  transition-shadow">
                    <span className="flex items-center px-3 bg-slate-50 border-r border-slate-300
                                     text-slate-400 text-xs whitespace-nowrap select-none">
                      linkedin.com/in/
                    </span>
                    <input
                      name="linkedin" type="text" value={form.linkedin} onChange={handleLinkedin}
                      placeholder="yourname"
                      className="flex-1 min-w-0 px-3 py-2.5 text-sm outline-none bg-white"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-navy mb-1.5">
                  Area of Expertise / Certifications
                  <span className="text-slate-400 font-normal ml-1">(optional)</span>
                </label>
                <input
                  name="expertise" value={form.expertise} onChange={handleChange}
                  placeholder="e.g. Lean Six Sigma MBB, PMP, RPA, Power BI..."
                  className="w-full border border-slate-300 rounded-lg px-4 py-2.5 text-sm
                             focus:outline-none focus:ring-2 focus:ring-navy/30 focus:border-navy"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-navy mb-1.5">
                  Message / Cover Note
                  <span className="text-slate-400 font-normal ml-1">(optional)</span>
                </label>
                <textarea
                  name="message" value={form.message} onChange={handleChange} rows={4}
                  placeholder="Tell us about your background, availability, or the type of work you are interested in..."
                  className="w-full border border-slate-300 rounded-lg px-4 py-2.5 text-sm
                             focus:outline-none focus:ring-2 focus:ring-navy/30 focus:border-navy
                             resize-none"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-navy mb-1.5">
                  Resume <span className="text-red-500">*</span>
                  <span className="text-slate-400 font-normal ml-1">
                    PDF, DOC, or DOCX &middot; max 5 MB
                  </span>
                </label>
                <label
                  className={`flex items-center gap-3 border-2 border-dashed rounded-lg px-4 py-4
                              cursor-pointer transition-colors
                              ${resume
                                ? 'border-green-400 bg-green-50'
                                : 'border-slate-300 hover:border-navy/40 bg-white'}`}
                >
                  <Upload size={18} className={resume ? 'text-green-600' : 'text-slate-400'} />
                  <span className={`text-sm truncate
                                   ${resume ? 'text-green-700 font-medium' : 'text-slate-500'}`}>
                    {resume ? resume.name : 'Click to upload'}
                  </span>
                  <input
                    ref={fileRef}
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={handleFile}
                    className="sr-only"
                  />
                </label>
                {fileError && (
                  <p className="text-red-500 text-xs mt-1">{fileError}</p>
                )}
              </div>

              {state === 'error' && errorMsg && (
                <p className="text-red-600 text-sm bg-red-50 border border-red-200
                               rounded-lg px-4 py-3">
                  {errorMsg}
                </p>
              )}

              <button
                type="submit"
                disabled={state === 'sending'}
                className="w-full flex items-center justify-center gap-2 bg-navy
                           hover:bg-navy-light text-white font-semibold px-6 py-3
                           rounded-lg transition-colors
                           disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {state === 'sending' ? (
                  <>
                    <Loader2 size={16} className="animate-spin" />
                    Submitting...
                  </>
                ) : 'Submit Application'}
              </button>
            </form>
          )}
        </div>
      </section>
    </>
  );
}
'@
Set-Content -LiteralPath "app\careers\page.tsx" -Value $careersPage -Encoding utf8
Write-Host "Created: app/careers/page.tsx"

Write-Host ""
Write-Host "All files created!" -ForegroundColor Green
Write-Host ""
Write-Host "Before running dev:" -ForegroundColor Yellow
Write-Host "  1. Make sure you copied your logo to: public\logo.png"
Write-Host "  2. Set CONTACT_NOTIFY_EMAIL in Vercel env vars (contact form recipient)"
Write-Host ""
Write-Host "Then run:" -ForegroundColor Green
Write-Host "  npm run dev   ->   http://localhost:3000"
