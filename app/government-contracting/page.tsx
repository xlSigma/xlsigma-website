import Link  from 'next/link';
import {
  CheckCircle, Shield, Award, Users, ArrowRight, Building2,
} from 'lucide-react';

const VALUE_PROPS = [
  'Satisfies SDVOSB and Veteran-Owned small-business participation goals',
  'Delivers senior-level execution with no ramp-up -- hit the ground running',
  'Fills capability gaps in process improvement, automation, and analytics',
  'Augments proposal teams with differentiated technical content',
  'Scales engagement size to fit subcontract scope and timeline',
];

const PAST_PERFORMANCE = [
  {
    client:  'U.S. Army / DoD',
    summary: 'Reengineered LOGCAP logistics change-order process in Afghan theater. ' +
             'Cut cycle time from 150+ days to under 70 days. ' +
             'Built supporting EUC tools (Excel, SharePoint, SQL).',
    tags:    ['Process Reengineering', 'EUC Tools', 'DoD'],
  },
  {
    client:  'U.S. Postal Service',
    summary: 'Enterprise Lean Six Sigma deployment (with Accenture). Built governance, ' +
             'metrics capture and reporting, IT enablement, and infrastructure for ' +
             'project management and training.',
    tags:    ['Lean Six Sigma', 'Enterprise Deployment', 'Federal'],
  },
  {
    client:  'Top-Tier Financial Institutions',
    summary: 'Designed and deployed AI/RPA solutions automating check processing and ' +
             'bank operations. Supported regulatory consent-order remediation through ' +
             'process and data diagnostics.',
    tags:    ['AI/RPA', 'Regulatory Compliance', 'Financial Services'],
  },
  {
    client:  'USF Health',
    summary: 'Process improvement and workflow automation engagements supporting ' +
             'healthcare operations.',
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
            xlSigma helps federal prime contractors meet small-business participation
            goals while delivering senior-level consulting and technology capabilities
            with a proven federal track record.
          </p>
        </div>
      </section>

      {/* Dual SB Credit */}
      <section className="py-16 px-4 bg-gold-pale border-b border-gold/20">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gold font-semibold text-sm uppercase tracking-widest mb-3">
            Small Business Credits
          </p>
          <h2 className="text-2xl font-bold text-navy mb-8">
            SDVOSB Certified
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { Icon: Shield, label: 'SDVOSB',          sub: 'Service-Disabled Veteran-Owned' },
              { Icon: Award,  label: 'VBE (pending)',   sub: 'FL OSD Veteran CBE'              },
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
