import { ArrowRight } from 'lucide-react';
import Section from '../components/ui/Section';
import ContentContainer from '../components/ui/ContentContainer';
import MedallionHero from '../components/ui/MedallionHero';
import Eyebrow from '../components/ui/Eyebrow';
import Headline from '../components/ui/Headline';
import Rule from '../components/ui/Rule';
import Button from '../components/ui/Button';
import Tag from '../components/ui/Tag';

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
			 ' (with Calibre Systems Inc.). ' +
             'Cut cycle time from 150+ days to under 70 days. ' +
             'Built supporting EUC tools (Excel, SharePoint, SQL database).',
    tags:    ['Process Reengineering', 'EUC Tools', 'DoD'],
  },
  {
    client:  'CENTCOM / DoD',
    summary: 'Developed alternate land-routes logistics for the draw-down (retrograde) in ' +
			 'the Afghanistan theater' +
			 ' (with Calibre Systems Inc.). ' +
             'Risk mitigation imperative for the scenario of Pakistan closing access to the sea. ' +
             'Designed stochastic multi-node network flow optimizer to minimize cost/time/risk while ' +
			 'maximizing throughput, safety, and adherence to timelines, subject to constraints (with Calibre Systems). ',
    tags:    ['Logistics', 'Data Analytics', 'DoD'],
  },
    {
    client:  'U.S. Army / DoD',
    summary: 'Designed and deployed IT infrastructure for reporting the location of 90,000+ ' +
			 'shipping containers across the war theater in preparation for draw-down (retrograde).' +
			 ' (with Calibre Systems Inc.). ' +
             'Reduced errors 80%+ and accelerated reporting cycle time x4. ' +
             '(Raw data intake, cleansing, rationalization, transformations, back-end database, and reporting functionality).',
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
			 'such as paper check processing, invoicing, and KYC process. ' +
             'Supported regulatory consent-order remediation through process and data diagnostics.',
    tags:    ['AI/RPA', 'Regulatory Compliance', 'KYC', 'Financial Services'],
  },
  {
    client:  'CENTCOM Enterprise Transformation / DoD',
    summary: 'Led a $300M enterprise-wide Lean Six Sigma transformation initiative ' +
             'across CENTCOM theater operations (with Calibre Systems Inc.). ' +
             'Directed 23 Master/Black Belts to drive theater-wide readiness, ' +
             'operational alignment, and Warfighter protection outcomes.',
    tags:    ['Enterprise Transformation', 'Lean Six Sigma', 'DoD'],
  },
  {
    client:  'U.S. Forces-Afghanistan / DoD',
    summary: 'Supported the initial standup of the U.S. Forces-Afghanistan Fusion Cell ' +
             '(with Calibre Systems Inc.). ' +
             'Built foundational business-process design mapping PBUSE and SARSS/SASSY ' +
             'logistics systems, identifying data sources and owners, establishing ' +
             'collection frequencies, and aligning reporting outputs with the ' +
             'commander\'s information requirements.',
    tags:    ['Process Reengineering', 'Data Analytics', 'DoD'],
  },
  {
    client:  'USF Health',
    summary: 'Process improvement and workflow automation supporting ' +
             'referrals process of BRIDGE Clinic operations.',
    tags:    ['Healthcare', 'Process Improvement', 'Workflow Automation'],
  },
];

const AGENCIES = [
  { label: 'Department of War',     sub: 'Combatant commands & theater support operations' },
  { label: 'U.S. Army',             sub: 'Logistics, sustainment & retrograde'      },
  { label: 'Federal Civilian',      sub: 'Enterprise Lean Six Sigma deployment'     },
  { label: 'Public Health',         sub: 'Process improvement, workflow automation.\nPHAB assessment' },
];

const NAICS = [
  { code: '541511', desc: 'Custom Computer Programming Services'         },
  { code: '541512', desc: 'Computer Systems Design Services'              },
  { code: '541611', desc: 'Administrative Management Consulting'         },
  { code: '541614', desc: 'Process, Distribution & Logistics Consulting' },
  { code: '541618', desc: 'Other Management Consulting Services'         },
];

const CREDITS = [
  { label: 'SDVOSB',  sub: 'Service-Disabled Veteran-Owned' },
  { label: 'VOSB',    sub: 'Veteran-Owned Small Business'   },
  { label: 'SAM.gov', sub: 'Active Registration'            },
];

export default function GovernmentContractingPage() {
  return (
    <>
      {/* Hero */}
      <MedallionHero>
        <Headline level={1} size="display" className="mx-auto max-w-4xl">
          <span className="block">Your Trusted</span>
          <span className="mt-2 block text-gold">SDVOSB Subcontracting Partner</span>
        </Headline>
        <p className="mx-auto mt-8 max-w-2xl text-lead text-(--fg-muted)">
          xlSigma helps federal prime contractors meet small-business SDVOSB participation
          goals while delivering senior-level consulting and technology capabilities
          with a proven federal track record.
        </p>
      </MedallionHero>

      {/* SDVOSB Credit */}
      <Section variant="paper" aria-labelledby="sb-credits">
        <ContentContainer>
          <div className="mb-12 lg:mb-16">
            <Eyebrow className="mb-5">Small Business Credits</Eyebrow>
            <Rule variant="gold" className="mb-6" />
            <Headline id="sb-credits" level={2} size="lg" className="max-w-3xl">
              Service-Disabled Veteran-Owned Small Business
            </Headline>
          </div>
          <ul className="grid gap-x-10 gap-y-8 md:grid-cols-3">
            {CREDITS.map(({ label, sub }) => (
              <li key={label} className="border-t border-gold pt-6">
                <p className="font-serif text-headline font-medium text-(--fg)">{label}</p>
                <p className="mt-2 text-base text-(--fg-muted)">{sub}</p>
              </li>
            ))}
          </ul>
        </ContentContainer>
      </Section>

      {/* Value to Primes */}
      <Section variant="white" aria-labelledby="why-primes">
        <ContentContainer>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <Eyebrow className="mb-5">Value to Prime Contractors</Eyebrow>
              <Rule variant="gold" className="mb-6" />
              <Headline id="why-primes" level={2} size="xl" className="mb-8">
                Why Primes Choose xlSigma
              </Headline>
              <p className="text-lead text-(--fg-muted)">
                We understand the prime-sub relationship. xlSigma integrates seamlessly
                into your delivery model — providing certified small-business credits,
                senior technical talent, and zero ramp-up time.
              </p>
            </div>
            <ul className="border-b border-(--rule) lg:col-span-7">
              {VALUE_PROPS.map((prop) => (
                <li key={prop} className="border-t border-(--rule) py-5 text-base leading-relaxed text-(--fg) md:py-6">
                  {prop}
                </li>
              ))}
            </ul>
          </div>
        </ContentContainer>
      </Section>

      {/* Past Performance */}
      <Section variant="paper" aria-labelledby="past-performance">
        <ContentContainer>
          <div className="mb-12 lg:mb-16">
            <Eyebrow className="mb-5">Track Record</Eyebrow>
            <Rule variant="gold" className="mb-6" />
            <Headline id="past-performance" level={2} size="xl">Selected Past Performance</Headline>
          </div>
          <ol className="border-b border-(--rule)">
            {PAST_PERFORMANCE.map(({ client, summary, tags }) => (
              <li key={client} className="grid gap-x-12 gap-y-4 border-t border-(--rule) py-9 lg:grid-cols-12">
                <h3 className="font-serif text-title font-medium text-(--fg) lg:col-span-4">{client}</h3>
                <div className="lg:col-span-8">
                  <p className="text-base leading-relaxed text-(--fg-muted)">{summary}</p>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {tags.map((tag) => (
                      <li key={tag}><Tag>{tag}</Tag></li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ol>
        </ContentContainer>
      </Section>

      {/* Who We Support */}
      <Section variant="white" aria-labelledby="who-we-support">
        <ContentContainer>
          <div className="mb-12 lg:mb-16">
            <Eyebrow className="mb-5">Who We Support</Eyebrow>
            <Rule variant="gold" className="mb-6" />
            <Headline id="who-we-support" level={2} size="xl">Agencies &amp; Mission Areas</Headline>
          </div>
          <ul className="grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
            {AGENCIES.map(({ label, sub }) => (
              <li key={label} className="border-t border-gold pt-6">
                <h3 className="font-serif text-title font-medium text-(--fg)">{label}</h3>
                <p className="mt-2 whitespace-pre-line text-base leading-relaxed text-(--fg-muted)">{sub}</p>
              </li>
            ))}
          </ul>
        </ContentContainer>
      </Section>

      {/* NAICS Codes */}
      <Section variant="paper" aria-labelledby="naics">
        <ContentContainer>
          <div className="mb-12 lg:mb-16">
            <Eyebrow className="mb-5">NAICS Codes</Eyebrow>
            <Rule variant="gold" className="mb-6" />
            <Headline id="naics" level={2} size="xl">Registered Capabilities</Headline>
          </div>
          <ul className="border-b border-(--rule)">
            {NAICS.map(({ code, desc }) => (
              <li key={code} className="grid gap-x-8 gap-y-1 border-t border-(--rule) py-5 md:grid-cols-12 md:items-baseline">
                <span className="font-serif text-title font-medium tabular-nums text-(--accent) md:col-span-3">{code}</span>
                <span className="text-base text-(--fg) md:col-span-9">{desc}</span>
              </li>
            ))}
          </ul>
        </ContentContainer>
      </Section>

      {/* CTA */}
      <Section variant="navy" aria-labelledby="teaming">
        <ContentContainer>
          <div className="grid items-end gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <Rule variant="gold" className="mb-6" />
              <Headline id="teaming" level={2} size="xl" className="mb-5">
                Let&apos;s Talk Teaming
              </Headline>
              <p className="max-w-xl text-lead text-(--fg-muted)">
                Whether you need a compliant subcontractor for an active bid or
                a long-term teaming partner, xlSigma is ready to engage.
              </p>
            </div>
            <div className="lg:col-span-5 lg:justify-self-end">
              <Button href="/contact" variant="primary">
                Start the Conversation <ArrowRight size={16} aria-hidden="true" />
              </Button>
            </div>
          </div>
        </ContentContainer>
      </Section>
    </>
  );
}
