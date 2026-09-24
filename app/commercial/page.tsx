import Link  from 'next/link';
import {
  CheckCircle, TrendingUp, Bot, BarChart2, ArrowRight,
} from 'lucide-react';

const VALUE_PROPS = [
  'Senior-only delivery teams with Fortune 500 depth -- no juniors, no bench',
  'Lean Six Sigma-led process reengineering that drives measurable cycle-time and cost results',
  'AI, agents, and intelligent automation deployed on real operational workflows',
  'Enterprise knowledge and semantic transformation that makes systems and data AI-ready',
  'Full-stack delivery: strategy, design, build, implementation, and training',
];

const INDUSTRIES = [
  { Icon: TrendingUp, label: 'Financial Services', sub: 'Banking, KYC, regulatory operations' },
  { Icon: Bot,        label: 'Healthcare',          sub: 'Clinical & administrative workflows' },
  { Icon: BarChart2,  label: 'Manufacturing',       sub: 'Operations & supply chain'            },
];

export default function CommercialPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Operational Excellence for
            <span className="text-gold-light block mt-1">Commercial Enterprises</span>
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            xlSigma partners with private-sector organizations to reengineer processes,
            deploy AI and intelligent automation, and build the enterprise knowledge
            foundations that make transformation stick.
          </p>
        </div>
      </section>

      {/* Value Props */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-gold font-semibold text-sm uppercase tracking-widest mb-3">
                Why Commercial Clients Choose xlSigma
              </p>
              <h2 className="text-3xl font-bold text-navy mb-4">
                Practitioner-Led Transformation
              </h2>
              <p className="text-slate-600 leading-relaxed">
                We bring the same senior-level rigor used across Fortune 500 engagements
                to organizations of any size -- pairing Lean Six Sigma discipline with
                modern AI and automation capability.
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

      {/* Industries */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-gold font-semibold text-sm uppercase tracking-widest mb-3">
              Where We Deliver
            </p>
            <h2 className="text-3xl font-bold text-navy">Industries We Serve</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {INDUSTRIES.map(({ Icon, label, sub }) => (
              <div key={label}
                   className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm text-center">
                <Icon size={32} className="text-gold mx-auto mb-3" />
                <div className="font-bold text-navy text-lg">{label}</div>
                <div className="text-slate-500 text-sm mt-1">{sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy py-16 px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-4">
            Let's Talk Transformation
          </h2>
          <p className="text-slate-300 mb-8 leading-relaxed">
            Whether you're tackling a single process bottleneck or a
            enterprise-wide transformation, xlSigma is ready to engage.
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
