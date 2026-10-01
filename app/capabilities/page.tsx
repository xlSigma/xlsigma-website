import type { Metadata } from 'next';
import { ArrowRight } from 'lucide-react';
import SemanticToActionDiagram from '../components/SemanticToActionDiagram';
import Section from '../components/ui/Section';
import ContentContainer from '../components/ui/ContentContainer';
import MedallionHero from '../components/ui/MedallionHero';
import Eyebrow from '../components/ui/Eyebrow';
import Headline from '../components/ui/Headline';
import Rule from '../components/ui/Rule';
import Button from '../components/ui/Button';
import PullQuote from '../components/ui/PullQuote';
import { CapabilityList, CapabilityRow } from '../components/ui/CapabilityRow';

export const metadata: Metadata = {
  title: 'Capabilities & Semantic-to-Action Architecture | xlSigma',
  description:
    'Explore xlSigma capabilities in Lean Six Sigma, enterprise knowledge and semantic transformation, AI agents and intelligent automation, operating model design, analytics, digital solutions, and federal program support.',
};

const CAPABILITIES = [
  {
    title: 'Lean Six Sigma / DMAIC / Continuous Improvement',
    desc:  'DMAIC-driven process transformation led by a certified Lean Six Sigma Master ' +
           'Black Belt. From rapid kaizen events to enterprise-wide deployment programs, ' +
           'with governance, metrics, and training infrastructure. ' +
           'This is the discipline behind every other capability on this page.',
  },
  {
    title: 'AI, Agents & Intelligent Automation',
    desc:  'Design and deployment of AI agents, RPA, and intelligent automation solutions that ' +
           'orchestrate work across systems, apply business rules, support human-in-the-loop ' +
           'decisions, and reduce repetitive effort while preserving appropriate controls and oversight.',
  },
  {
    title: 'Logistics & Supply Chain',
    desc:  'Operational excellence and intelligent automation for fulfillment operations, ' +
           'delivered through process mining and targeted automation.',
  },
  {
    title: 'Enterprise Knowledge & Semantic Transformation',
    desc:  'Transform fragmented enterprise knowledge, data, processes, and business definitions ' +
           'into structured, AI-ready foundations. xlSigma captures institutional knowledge, ' +
           'creates governed business semantics, maps concepts across systems, and develops the ' +
           'knowledge and semantic models AI needs to understand how the enterprise actually operates.',
  },
  {
    title: 'Operating Model Design & Strategy Deployment',
    desc:  'Organizational structure, governance design, role clarity, and strategy ' +
           'deployment frameworks (Hoshin Kanri). Bridges the gap between executive ' +
           'strategy and operational execution.',
  },
  {
    title: 'Data Analytics, KPI Frameworks & Dashboards',
    desc:  'End-to-end analytics: from defining the right KPIs to building the dashboards ' +
           'that drive decisions. Power BI, Tableau, custom Excel-based solutions, with optional ' +
           'integration into your Enterprise IT Systems and tailored to your reporting environment.',
  },
  {
    title: 'Power BI, Tableau, Power Platform, Excel/VBA',
    desc:  'Deep hands-on expertise across the Microsoft Power Platform and leading BI tools. ' +
           'Build production-ready reports, automated workflows, and data models that ' +
           'non-technical users can own and maintain.',
  },
  {
    title: 'End-User Computing (EUC) Application Development',
    desc:  'Custom Excel/VBA workbooks, Access or SQL databases, SharePoint solutions, and ' +
           'lightweight Power Apps -- purpose-built for specific operational workflows ' +
           'and designed for adoption.',
  },
  {
    title: 'Federal Program & Performance Management Support',
    desc:  'Program management, performance metrics, and reporting frameworks for ' +
           'federal agency engagements. Experienced supporting DoD and civilian agency ' +
           'programs through prime contractors.',
  },
  {
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

const SPOKE_STROKE = '#C9A24B';
const NAVY = '#0B1F3A';
const GOLD = '#C9A24B';

function LssDiagram() {
  return (
    <svg
      viewBox="0 0 680 630"
      className="mx-auto block w-full max-w-4xl font-sans"
      role="img"
      aria-label="Hub-and-spoke diagram with Lean Six Sigma at center connected to nine capability areas"
    >
      <defs>
        <radialGradient id="lss-hub" cx="50%" cy="35%" r="75%">
          <stop offset="0%" stopColor="#1B3A66" />
          <stop offset="100%" stopColor="#07162A" />
        </radialGradient>
        <radialGradient id="lss-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#C9A24B" stopOpacity="0.28" />
          <stop offset="100%" stopColor="#C9A24B" stopOpacity="0" />
        </radialGradient>
        <filter id="lss-shadow" x="-20%" y="-30%" width="140%" height="190%">
          <feDropShadow dx="0" dy="3" stdDeviation="4" floodColor="#0B1F3A" floodOpacity="0.22" />
        </filter>
      </defs>

      {/* Glow */}
      <circle cx="340" cy="315" r="250" fill="url(#lss-glow)" />

      {/* Lines from hub to spokes, drawn first so rects render on top */}
      <line x1="340" y1="315" x2="340" y2="95"  stroke={SPOKE_STROKE} strokeWidth="2" strokeOpacity="0.75" />
      <line x1="340" y1="315" x2="481" y2="147" stroke={SPOKE_STROKE} strokeWidth="2" strokeOpacity="0.75" />
      <line x1="340" y1="315" x2="557" y2="277" stroke={SPOKE_STROKE} strokeWidth="2" strokeOpacity="0.75" />
      <line x1="340" y1="315" x2="531" y2="425" stroke={SPOKE_STROKE} strokeWidth="2" strokeOpacity="0.75" />
      <line x1="340" y1="315" x2="415" y2="522" stroke={SPOKE_STROKE} strokeWidth="2" strokeOpacity="0.75" />
      <line x1="340" y1="315" x2="265" y2="522" stroke={SPOKE_STROKE} strokeWidth="2" strokeOpacity="0.75" />
      <line x1="340" y1="315" x2="150" y2="425" stroke={SPOKE_STROKE} strokeWidth="2" strokeOpacity="0.75" />
      <line x1="340" y1="315" x2="123" y2="277" stroke={SPOKE_STROKE} strokeWidth="2" strokeOpacity="0.75" />
      <line x1="340" y1="315" x2="199" y2="147" stroke={SPOKE_STROKE} strokeWidth="2" strokeOpacity="0.75" />

      {/* Hub */}
      <circle cx="340" cy="315" r="70" fill="url(#lss-hub)" stroke={GOLD} strokeWidth="3" filter="url(#lss-shadow)" />
      <circle cx="340" cy="315" r="62" fill="none" stroke={GOLD} strokeOpacity="0.5" strokeWidth="1" />
      <text x="340" y="307" textAnchor="middle" dominantBaseline="central"
            fill="#FFFFFF" fontSize="15" fontWeight="700">Lean Six Sigma</text>
      <text x="340" y="327" textAnchor="middle" dominantBaseline="central"
            fill={GOLD} fontSize="12" fontWeight="600">DMAIC discipline</text>

      {/* AI & RPA, top */}
      <rect x="273" y="69" width="134" height="52" rx="3" fill="#FFFFFF" stroke={NAVY} strokeWidth="1" filter="url(#lss-shadow)" />
      <rect x="273" y="69" width="134" height="4" rx="2" fill={GOLD} />
      <text x="340" y="87"  textAnchor="middle" dominantBaseline="central"
            fill={NAVY} fontSize="12" fontWeight="600">AI, Agents &amp;</text>
      <text x="340" y="105" textAnchor="middle" dominantBaseline="central"
            fill={NAVY} fontSize="11">Automation</text>

      {/* Logistics, upper-right */}
      <rect x="414" y="121" width="134" height="52" rx="3" fill="#FFFFFF" stroke={NAVY} strokeWidth="1" filter="url(#lss-shadow)" />
      <rect x="414" y="121" width="134" height="4" rx="2" fill={GOLD} />
      <text x="481" y="139" textAnchor="middle" dominantBaseline="central"
            fill={NAVY} fontSize="12" fontWeight="600">Logistics &amp;</text>
      <text x="481" y="157" textAnchor="middle" dominantBaseline="central"
            fill={NAVY} fontSize="11">Supply Chain</text>

      {/* Knowledge, right */}
      <rect x="490" y="251" width="134" height="52" rx="3" fill="#FFFFFF" stroke={NAVY} strokeWidth="1" filter="url(#lss-shadow)" />
      <rect x="490" y="251" width="134" height="4" rx="2" fill={GOLD} />
      <text x="557" y="269" textAnchor="middle" dominantBaseline="central"
            fill={NAVY} fontSize="11" fontWeight="600">Knowledge &amp; Semantic</text>
      <text x="557" y="287" textAnchor="middle" dominantBaseline="central"
            fill={NAVY} fontSize="11">Transformation</text>

      {/* Operating Model, lower-right */}
      <rect x="464" y="399" width="134" height="52" rx="3" fill="#FFFFFF" stroke={NAVY} strokeWidth="1" filter="url(#lss-shadow)" />
      <rect x="464" y="399" width="134" height="4" rx="2" fill={GOLD} />
      <text x="531" y="417" textAnchor="middle" dominantBaseline="central"
            fill={NAVY} fontSize="12" fontWeight="600">Operating Model</text>
      <text x="531" y="435" textAnchor="middle" dominantBaseline="central"
            fill={NAVY} fontSize="11">&amp; Strategy Deployment</text>

      {/* Data Analytics, bottom-right */}
      <rect x="348" y="496" width="134" height="52" rx="3" fill="#FFFFFF" stroke={NAVY} strokeWidth="1" filter="url(#lss-shadow)" />
      <rect x="348" y="496" width="134" height="4" rx="2" fill={GOLD} />
      <text x="415" y="514" textAnchor="middle" dominantBaseline="central"
            fill={NAVY} fontSize="12" fontWeight="600">Data Analytics</text>
      <text x="415" y="532" textAnchor="middle" dominantBaseline="central"
            fill={NAVY} fontSize="11">KPIs &amp; Dashboards</text>

      {/* Power BI, bottom-left */}
      <rect x="198" y="496" width="134" height="52" rx="3" fill="#FFFFFF" stroke={NAVY} strokeWidth="1" filter="url(#lss-shadow)" />
      <rect x="198" y="496" width="134" height="4" rx="2" fill={GOLD} />
      <text x="265" y="514" textAnchor="middle" dominantBaseline="central"
            fill={NAVY} fontSize="12" fontWeight="600">Power BI / Tableau</text>
      <text x="265" y="532" textAnchor="middle" dominantBaseline="central"
            fill={NAVY} fontSize="11">Power Platform</text>

      {/* EUC, lower-left */}
      <rect x="83" y="399" width="134" height="52" rx="3" fill="#FFFFFF" stroke={NAVY} strokeWidth="1" filter="url(#lss-shadow)" />
      <rect x="83" y="399" width="134" height="4" rx="2" fill={GOLD} />
      <text x="150" y="417" textAnchor="middle" dominantBaseline="central"
            fill={NAVY} fontSize="12" fontWeight="600">EUC App</text>
      <text x="150" y="435" textAnchor="middle" dominantBaseline="central"
            fill={NAVY} fontSize="11">Development</text>

      {/* Federal, left */}
      <rect x="56" y="251" width="134" height="52" rx="3" fill="#FFFFFF" stroke={NAVY} strokeWidth="1" filter="url(#lss-shadow)" />
      <rect x="56" y="251" width="134" height="4" rx="2" fill={GOLD} />
      <text x="123" y="269" textAnchor="middle" dominantBaseline="central"
            fill={NAVY} fontSize="12" fontWeight="600">Federal Program</text>
      <text x="123" y="287" textAnchor="middle" dominantBaseline="central"
            fill={NAVY} fontSize="11">Perf. Mgmt</text>

      {/* Agile/Change, upper-left */}
      <rect x="132" y="121" width="134" height="52" rx="3" fill="#FFFFFF" stroke={NAVY} strokeWidth="1" filter="url(#lss-shadow)" />
      <rect x="132" y="121" width="134" height="4" rx="2" fill={GOLD} />
      <text x="199" y="139" textAnchor="middle" dominantBaseline="central"
            fill={NAVY} fontSize="12" fontWeight="600">Agile Delivery</text>
      <text x="199" y="157" textAnchor="middle" dominantBaseline="central"
            fill={NAVY} fontSize="11">&amp; Change Mgmt</text>
    </svg>
  );
}

export default function CapabilitiesPage() {
  return (
    <>
      {/* Header */}
      <MedallionHero>
        <Eyebrow className="mb-4">What We Deliver</Eyebrow>
        <Headline level={1} size="display" className="mb-6">Core Capabilities</Headline>
        <p className="mx-auto max-w-2xl text-lead text-(--fg-muted)">
          Ten integrated practice areas
          <br />
          delivered by senior-only teams with principal oversight
        </p>
      </MedallionHero>

      {/* Framing + Hub-and-Spoke Diagram */}
      <Section variant="paper">
        <ContentContainer className="text-center">
          <p className="mx-auto max-w-2xl font-serif text-title italic text-(--fg)">
            Every capability is applied through a disciplined Lean Six Sigma lens
          </p>
          <p className="mx-auto mb-12 mt-3 max-w-2xl font-serif text-title italic text-(--fg-muted)">
            Fact-based, waste-eliminating, and built for repeatable results.
          </p>
          <LssDiagram />
        </ContentContainer>
      </Section>

      {/* Semantic-to-Action Architecture */}
      <Section variant="navy" id="semantic-to-action" className="scroll-mt-20" aria-labelledby="s2a-heading">
        <ContentContainer>
          <div className="mb-14 grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <Eyebrow className="mb-5">How Our Capabilities Work Together</Eyebrow>
              <Rule variant="gold" className="mb-6" />
              <Headline id="s2a-heading" level={2} size="xl">
                The xlSigma Semantic-to-Action Architecture
              </Headline>
            </div>
            <div className="lg:col-span-7">
              <div className="space-y-5 text-lead text-(--fg-muted)">
                <p>
                  xlSigma&apos;s capabilities work together through our Semantic-to-Action Architecture -- a structured approach that transforms fragmented enterprise systems, data, knowledge, processes, rules, and organizational expertise into the business context AI needs to understand, reason, and act.
                </p>
                <p>
                  Rather than deploying AI as another disconnected tool, we build the operational foundation required for trusted, scalable AI-enabled transformation.
                </p>
              </div>
              <p className="mt-8 text-lead font-semibold leading-snug text-(--fg)">
                Lean Six Sigma provides the transformation discipline.<br />
                Semantic-to-Action provides the architecture.
              </p>
            </div>
          </div>

          <div className="tone-light tone-paper bg-paper p-6 md:p-10">
            <SemanticToActionDiagram />
          </div>

          <div className="mt-14 grid gap-8 lg:grid-cols-12 lg:gap-16">
            <PullQuote className="lg:col-span-7">
              We don&apos;t start with the AI agent. We model the business the agent must understand.
            </PullQuote>
            <p className="font-serif text-title italic text-gold lg:col-span-5 lg:self-end">
              Domain by domain. Process by process. Outcome by outcome.
            </p>
          </div>
        </ContentContainer>
      </Section>

      {/* Capabilities List */}
      <Section variant="white">
        <ContentContainer>
          <CapabilityList>
            {CAPABILITIES.map(({ title, desc }, i) => (
              <CapabilityRow key={title} index={i + 1} title={title}>{desc}</CapabilityRow>
            ))}
          </CapabilityList>
        </ContentContainer>
      </Section>

      {/* Differentiators */}
      <Section variant="paper" aria-labelledby="differentiators">
        <ContentContainer>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <Eyebrow className="mb-5">Differentiators</Eyebrow>
              <Rule variant="gold" className="mb-6" />
              <Headline id="differentiators" level={2} size="xl" className="mb-8">
                What Sets xlSigma Apart
              </Headline>
              <p className="text-lead text-(--fg-muted)">
                These are not marketing claims -- they are structural advantages
                built into how xlSigma operates.
              </p>
            </div>
            <ul className="border-b border-(--rule) lg:col-span-7">
              {DIFFERENTIATORS.map((d) => (
                <li key={d} className="border-t border-(--rule) py-5 text-base leading-relaxed text-(--fg) md:py-6">
                  {d}
                </li>
              ))}
            </ul>
          </div>
        </ContentContainer>
      </Section>

      {/* CTA */}
      <Section variant="navy" aria-labelledby="cap-cta">
        <ContentContainer>
          <div className="grid items-end gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <Rule variant="gold" className="mb-6" />
              <Headline id="cap-cta" level={2} size="xl" className="mb-5">
                See How These Apply to Your Situation
              </Headline>
              <p className="max-w-xl text-lead text-(--fg-muted)">
                Every engagement starts with understanding your specific challenge.
                Let us show you what senior-level delivery looks like in practice.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 lg:col-span-5 lg:justify-end">
              <Button href="/contact" variant="primary">
                Contact Us <ArrowRight size={16} aria-hidden="true" />
              </Button>
              <Button href="/government-contracting" variant="secondary">Federal Contracting</Button>
            </div>
          </div>
        </ContentContainer>
      </Section>
    </>
  );
}
