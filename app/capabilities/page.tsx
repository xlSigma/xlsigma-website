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
  'Lean Six Sigma Master Black Belt -- rare at small-business scale',
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
            Eight integrated practice areas, delivered by senior-only teams with principal oversight.
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
