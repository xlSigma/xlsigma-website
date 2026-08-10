import Link from 'next/link';
import {
  Bot, Brain, TrendingUp, BarChart2, LayoutDashboard,
  Code2, Landmark, GitBranch, Users, Truck,
  CheckCircle, ArrowRight,
} from 'lucide-react';

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
    title: 'AI-Enabled & RPA Process Automation',
    desc:  'Design and deployment of intelligent automation solutions using RPA platforms ' +
           'and AI tools. Automates repetitive, rules-based processes to reduce errors, ' +
           'slash cycle times, and free staff for higher-value work.',
  },
  {
    Icon:  Truck,
    title: 'Logistics & Supply Chain',
    desc:  'Operational excellence and intelligent automation for fulfillment operations, ' +
           'delivered through process mining and targeted automation.',
  },
  {
    Icon:  Brain,
    title: 'Knowledge Transformation',
    desc:  'Enterprise knowledge management and technology-enabled transformation -- ' +
           'capturing institutional know-how into structured, AI-enabled knowledge bases ' +
           'and playbooks that scale expertise across the organization.',
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
      {/* Lines from hub to spokes â€” drawn first so rects render on top */}
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

      {/* AI & RPA â€” top (270 deg) */}
      <rect x="273" y="69" width="134" height="52" rx="8" fill="#FFFFFF" stroke="#1B3F7A" strokeWidth="1.5" />
      <text x="340" y="87"  textAnchor="middle" dominantBaseline="central"
            fill="#1B3F7A" fontSize="12" fontWeight="600" fontFamily="system-ui,sans-serif">AI &amp; RPA</text>
      <text x="340" y="105" textAnchor="middle" dominantBaseline="central"
            fill="#1B3F7A" fontSize="11" fontFamily="system-ui,sans-serif">Process Automation</text>

      {/* Logistics â€” upper-right (310 deg) */}
      <rect x="414" y="121" width="134" height="52" rx="8" fill="#FFFFFF" stroke="#1B3F7A" strokeWidth="1.5" />
      <text x="481" y="139" textAnchor="middle" dominantBaseline="central"
            fill="#1B3F7A" fontSize="12" fontWeight="600" fontFamily="system-ui,sans-serif">Logistics &amp;</text>
      <text x="481" y="157" textAnchor="middle" dominantBaseline="central"
            fill="#1B3F7A" fontSize="11" fontFamily="system-ui,sans-serif">Supply Chain</text>

      {/* Knowledge â€” right (350 deg) */}
      <rect x="490" y="251" width="134" height="52" rx="8" fill="#FFFFFF" stroke="#1B3F7A" strokeWidth="1.5" />
      <text x="557" y="269" textAnchor="middle" dominantBaseline="central"
            fill="#1B3F7A" fontSize="12" fontWeight="600" fontFamily="system-ui,sans-serif">Knowledge</text>
      <text x="557" y="287" textAnchor="middle" dominantBaseline="central"
            fill="#1B3F7A" fontSize="11" fontFamily="system-ui,sans-serif">Transformation</text>

      {/* Operating Model â€” lower-right (30 deg) */}
      <rect x="464" y="399" width="134" height="52" rx="8" fill="#FFFFFF" stroke="#1B3F7A" strokeWidth="1.5" />
      <text x="531" y="417" textAnchor="middle" dominantBaseline="central"
            fill="#1B3F7A" fontSize="12" fontWeight="600" fontFamily="system-ui,sans-serif">Operating Model</text>
      <text x="531" y="435" textAnchor="middle" dominantBaseline="central"
            fill="#1B3F7A" fontSize="11" fontFamily="system-ui,sans-serif">&amp; Strategy</text>

      {/* Data Analytics â€” bottom-right (70 deg) */}
      <rect x="348" y="496" width="134" height="52" rx="8" fill="#FFFFFF" stroke="#1B3F7A" strokeWidth="1.5" />
      <text x="415" y="514" textAnchor="middle" dominantBaseline="central"
            fill="#1B3F7A" fontSize="12" fontWeight="600" fontFamily="system-ui,sans-serif">Data Analytics</text>
      <text x="415" y="532" textAnchor="middle" dominantBaseline="central"
            fill="#1B3F7A" fontSize="11" fontFamily="system-ui,sans-serif">KPIs &amp; Dashboards</text>

      {/* Power BI â€” bottom-left (110 deg) */}
      <rect x="198" y="496" width="134" height="52" rx="8" fill="#FFFFFF" stroke="#1B3F7A" strokeWidth="1.5" />
      <text x="265" y="514" textAnchor="middle" dominantBaseline="central"
            fill="#1B3F7A" fontSize="12" fontWeight="600" fontFamily="system-ui,sans-serif">Power BI / Tableau</text>
      <text x="265" y="532" textAnchor="middle" dominantBaseline="central"
            fill="#1B3F7A" fontSize="11" fontFamily="system-ui,sans-serif">Power Platform</text>

      {/* EUC â€” lower-left (150 deg) */}
      <rect x="83" y="399" width="134" height="52" rx="8" fill="#FFFFFF" stroke="#1B3F7A" strokeWidth="1.5" />
      <text x="150" y="417" textAnchor="middle" dominantBaseline="central"
            fill="#1B3F7A" fontSize="12" fontWeight="600" fontFamily="system-ui,sans-serif">EUC App</text>
      <text x="150" y="435" textAnchor="middle" dominantBaseline="central"
            fill="#1B3F7A" fontSize="11" fontFamily="system-ui,sans-serif">Development</text>

      {/* Federal â€” left (190 deg) */}
      <rect x="56" y="251" width="134" height="52" rx="8" fill="#FFFFFF" stroke="#1B3F7A" strokeWidth="1.5" />
      <text x="123" y="269" textAnchor="middle" dominantBaseline="central"
            fill="#1B3F7A" fontSize="12" fontWeight="600" fontFamily="system-ui,sans-serif">Federal Program</text>
      <text x="123" y="287" textAnchor="middle" dominantBaseline="central"
            fill="#1B3F7A" fontSize="11" fontFamily="system-ui,sans-serif">Perf. Mgmt</text>

      {/* Agile/Change â€” upper-left (230 deg) */}
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
          <p className="text-slate-600 italic text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
            Every capability is applied through a disciplined Lean Six Sigma lens &mdash;
            fact-based, waste-eliminating, and built for repeatable results.
          </p>
          <LssDiagram />
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
