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
    desc:  'RPA and AI solutions that eliminate manual work and reduce cycle times across operations.',
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
    title: 'End-User Computing Development',
    desc:  'Excel/VBA, Power Platform, and lightweight applications built for real users.',
  },
];

const VALUE_PROPS = [
  'Senior-only delivery teams on every engagement -- no juniors, no bench',
  'Full-stack delivery: strategy, design, build, and training',
  'Lean Six Sigma Master Black Belt with Fortune 500 track record',
  'Deep expertise across Accenture, GE, and Emerson',
  'Multilingual delivery: English, Spanish, and Portuguese',
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
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Senior-Level Consulting for
            <span className="text-gold-light block mt-1">Complex Operations</span>
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
            Process improvement, advanced analytics, and automation -- delivered by
            practitioners with Fortune 500 depth, not generalists with slide decks.
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
            Boutique. Senior. Accountable.
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-slate-600 leading-relaxed mb-4">
                xlSigma is a boutique management consulting and technology firm that brings
                Fortune 500 rigor to enterprise and mid-market clients. Our principal has led
                process transformation, analytics, and automation programs at Accenture, GE, and Emerson.
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
                  MBA, University of Michigan (Ross)
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={16} className="text-gold mt-0.5 flex-shrink-0" />
                  B.S. Electrical Engineering, FIU
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={16} className="text-gold mt-0.5 flex-shrink-0" />
                  Lean Six Sigma Master Black Belt
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={16} className="text-gold mt-0.5 flex-shrink-0" />
                  Experience across Accenture, GE, Emerson
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={16} className="text-gold mt-0.5 flex-shrink-0" />
                  English, Spanish, Portuguese
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
                xlSigma operates differently. The principal who proposes is the practitioner
                who delivers, from day one through final handoff.
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
            <span className="bg-slate-700 text-slate-300 text-xs font-bold px-4 py-1.5
                             rounded-full border border-slate-600 uppercase tracking-wider">
              SAM.gov Registered
            </span>
          </div>
          <h2 className="text-3xl font-bold text-white mb-4">
            Federal Prime Contractor?
          </h2>
          <p className="text-slate-300 mb-8 max-w-xl mx-auto leading-relaxed">
            xlSigma is a certified SDVOSB and Veteran-Owned Small Business -- helping
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
