import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { ArrowDown, ArrowRight } from 'lucide-react';
import SemanticToActionDiagram from '../components/SemanticToActionDiagram';
import Section from '../components/ui/Section';
import ContentContainer from '../components/ui/ContentContainer';
import MedallionHero from '../components/ui/MedallionHero';
import Eyebrow from '../components/ui/Eyebrow';
import Headline from '../components/ui/Headline';
import Rule from '../components/ui/Rule';
import Button from '../components/ui/Button';
import PullQuote from '../components/ui/PullQuote';

export const metadata: Metadata = {
  title: 'Semantic-to-Action™ | AI Transformation Architecture | xlSigma',
  description:
    'xlSigma Semantic-to-Action™ connects enterprise knowledge, processes, policies, decision authority, and AI to turn business understanding into governed action and measurable outcomes.',
  alternates: { canonical: '/semantic-to-action' },
  openGraph: {
    title: 'Semantic-to-Action™ | From Enterprise Knowledge to Governed Action',
    description:
      'xlSigma Semantic-to-Action™ connects enterprise knowledge, processes, policies, decision authority, and AI to turn business understanding into governed action and measurable outcomes.',
    type: 'website',
  },
};

/* ---------- Content ---------- */

const PROBLEM_FACTS = [
  'Information is fragmented across systems and documents.',
  'Business terminology varies by function.',
  'Policies are difficult to interpret consistently.',
  'Processes contain unwritten knowledge.',
  'Decision rights may depend on experience rather than explicit rules.',
];

const CORE_QUESTIONS = [
  'What does this information mean?',
  'How are these business concepts related?',
  'What process applies?',
  'What policy governs the situation?',
  'What decision needs to be made?',
  'Who has authority to make it?',
  'What can AI recommend?',
  'What can AI execute?',
  'When must a human approve or intervene?',
  'What action should happen next?',
  'Did that action improve the intended outcome?',
];

type ArchStage = {
  num: string;
  title: string;
  lead: string;
  label?: string;
  items?: string[];
  questions?: string[];
  body?: string[];
  featured?: boolean;
};

const ARCH_STAGES: ArchStage[] = [
  {
    num: '01',
    title: 'Enterprise Systems & Knowledge',
    lead: 'The information the organization already relies on.',
    label: 'Examples',
    items: [
      'Enterprise applications', 'Databases', 'Documents', 'Policies', 'Procedures',
      'APIs', 'Analytics', 'Institutional knowledge',
    ],
  },
  {
    num: '02',
    title: 'Enterprise Semantic Foundation',
    lead: 'A shared representation of what the business means.',
    label: 'It connects',
    items: [
      'Business entities', 'Terminology', 'Relationships', 'Definitions', 'Rules',
      'Context', 'Structured and unstructured knowledge',
    ],
    body: [
      'The objective is not to move everything into one new system.',
      'It is to create enough shared meaning for people, systems, analytics, and AI to operate from a consistent understanding of the enterprise.',
    ],
    featured: true,
  },
  {
    num: '03',
    title: 'Process & Policy',
    lead: 'Understanding meaning is not enough.',
    body: ['Semantic-to-Action™ also models how work is performed and what governs it:'],
    items: [
      'Processes', 'Workflows', 'Business rules', 'Policies', 'Exceptions', 'Controls',
      'Escalation paths',
    ],
    // Closing sentence is rendered after the chips.
  },
  {
    num: '04',
    title: 'Role & Authority',
    lead: 'Knowing what should happen does not automatically determine who should do it.',
    body: ['Semantic-to-Action™ explicitly addresses decision rights:'],
    questions: [
      'Who can decide?',
      'Who can approve?',
      'What may AI recommend?',
      'What may AI execute?',
      'When is human approval required?',
      'What must be escalated?',
    ],
  },
  {
    num: '05',
    title: 'AI Agents & Intelligent Automation',
    lead: 'AI can now operate within meaningful business context.',
    label: 'Depending on the use case, AI may',
    items: ['Find', 'Interpret', 'Analyze', 'Recommend', 'Coordinate', 'Trigger', 'Execute', 'Monitor', 'Escalate'],
    body: ['Automation is introduced where it improves the operating model, not simply where technology makes automation possible.'],
  },
  {
    num: '06',
    title: 'Business Outcomes',
    lead: 'Technology only creates value when something important improves.',
    label: 'Semantic-to-Action™ connects AI transformation to measurable outcomes such as',
    items: [
      'Cycle time', 'Cost', 'Quality', 'Service', 'Capacity', 'Compliance', 'Risk', 'Revenue',
      'Mission performance',
    ],
  },
];

const STAGE_CLOSERS: Record<string, string> = {
  '03': 'This converts enterprise knowledge into operational context.',
  '04': 'This creates the governance needed to move safely from AI assistance toward AI-enabled execution.',
};

const SEMANTIC_LAYER_FOCUS = [
  'Common definitions',
  'Metrics',
  'Entities and relationships',
  'Data consistency',
  'Metadata',
  'Knowledge representation',
  'AI grounding',
];

const S2A_ADDS = [
  'Business processes',
  'Policies and rules',
  'Decisions',
  'Roles and responsibilities',
  'Decision authority',
  'Human and AI boundaries',
  'Workflow execution',
  'Controls and escalation',
  'Measurable operational outcomes',
];

const BACKWARD = [
  { label: 'Outcome',          q: 'What business or mission result must improve?' },
  { label: 'Action',           q: 'What actions produce that result?' },
  { label: 'Decision',         q: 'What decisions determine those actions?' },
  { label: 'Authority',        q: 'Who or what should be allowed to make those decisions?' },
  { label: 'Process & Policy', q: 'What workflow, rules, controls, and exceptions govern them?' },
  { label: 'Enterprise Meaning', q: 'What information and context are required to make the decision correctly?' },
  { label: 'Technology',       q: 'What combination of data, systems, automation, and AI can best enable it?' },
];

const LSS_FACTORS = [
  'Customer and mission value',
  'Process performance',
  'Cycle time',
  'Quality and defects',
  'Capacity',
  'Decision latency',
  'Handoffs',
  'Controls',
  'Exceptions',
  'Risk',
  'Measurable business outcomes',
];

const AI_BOUNDARIES = [
  { title: 'AI may inform',               desc: 'Retrieve information, summarize context, surface relevant policies, identify patterns.' },
  { title: 'AI may recommend',            desc: 'Analyze alternatives, prepare recommendations, prioritize work, propose decisions.' },
  { title: 'AI may act within authority', desc: 'Execute defined actions when conditions and authority thresholds are satisfied.' },
  { title: 'Human approval required',     desc: 'Route consequential, ambiguous, high-risk, or policy-defined decisions for human authorization.' },
  { title: 'Escalation required',         desc: 'Identify conditions where neither routine automation nor normal human decision paths are appropriate.' },
];

const CONVENTIONAL_AI = [
  "Find the customer's information,",
  'Retrieve the applicable policy,',
  'Summarize the situation,',
  'Suggest a response.',
];

const EXAMPLE_ELEMENTS = [
  { title: 'Customer',  q: 'Who is requesting service?' },
  { title: 'Situation', q: 'What happened and what business entities are involved?' },
  { title: 'Policy',    q: 'Which rules govern the request?' },
  { title: 'Process',   q: 'What workflow applies?' },
  { title: 'Exception', q: 'Does this situation fall outside the normal path?' },
  { title: 'Authority', q: 'Who may authorize the exception, and within what limits?' },
  { title: 'AI role',   q: 'May the agent recommend, approve, execute, or only prepare the case?' },
  { title: 'Action',    q: 'What should happen in the operational system?' },
  { title: 'Outcome',   q: 'Was the issue resolved faster, at lower cost, with appropriate control?' },
];

const TECHNOLOGIES = [
  'Knowledge graphs', 'Ontologies', 'APIs', 'Enterprise applications', 'Data platforms',
  'Vector databases', 'Document repositories', 'Workflow platforms', 'AI models', 'Agent frameworks',
];

const ENGAGEMENTS = [
  {
    title: 'Semantic-to-Action™ Opportunity Assessment',
    desc: 'Identify high-value processes and decisions where AI-enabled transformation could materially improve performance.',
    outputs: [
      'Prioritized opportunities', 'Current-state assessment', 'AI and automation suitability',
      'Value hypothesis', 'Risk and governance considerations', 'Recommended roadmap',
    ],
  },
  {
    title: 'Domain Semantic Blueprint',
    desc: 'Model the knowledge, processes, policies, decisions, roles, and authority required for a defined business domain.',
    outputs: [
      'Semantic business model', 'Process and decision architecture', 'Policy mapping',
      'Authority model', 'Source-system mapping', 'AI operating boundaries',
    ],
  },
  {
    title: 'Operational Pilot',
    desc: 'Implement Semantic-to-Action™ around a targeted use case and validate value before scaling.',
    outputs: [
      'Target operating model', 'Semantic foundation', 'Workflow integration',
      'AI-enabled decision or action', 'Governance controls', 'Performance measurement',
    ],
  },
  {
    title: 'Enterprise Scale',
    desc: 'Extend proven patterns across processes, business units, technologies, and AI use cases while establishing appropriate semantic and AI governance.',
    outputs: [],
  },
];

const WHY = [
  { title: 'Enterprise transformation',  desc: 'Design around the operating model and measurable business result.' },
  { title: 'Lean Six Sigma discipline',  desc: 'Understand how value flows, where performance is lost, and what should change.' },
  { title: 'Semantic architecture',      desc: 'Create the shared business meaning AI and automation require.' },
  { title: 'Process and decision design', desc: 'Connect knowledge to real operational work.' },
  { title: 'AI enablement',              desc: 'Apply AI where it can improve decisions, execution, and outcomes.' },
  { title: 'Governance by design',       desc: 'Define authority, controls, human oversight, and escalation as part of the architecture.' },
];

/* ---------- Small local pieces ---------- */

function Chips({ items, className = '' }: { items: string[]; className?: string }) {
  return (
    <ul className={`flex flex-wrap gap-2 ${className}`}>
      {items.map((it) => (
        <li
          key={it}
          className="rounded-sm border border-(--rule) bg-white px-2.5 py-1 text-sm text-(--fg)"
        >
          {it}
        </li>
      ))}
    </ul>
  );
}

function BulletList({ items, className = '' }: { items: string[]; className?: string }) {
  return (
    <ul className={`space-y-2.5 ${className}`}>
      {items.map((it) => (
        <li key={it} className="flex gap-3 text-base leading-relaxed text-(--fg)">
          <span aria-hidden="true" className="mt-2.5 h-1.5 w-1.5 shrink-0 bg-gold" />
          <span>{it}</span>
        </li>
      ))}
    </ul>
  );
}

function SectionIntro({
  eyebrow, id, children, className = '',
}: { eyebrow: string; id: string; children: ReactNode; className?: string }) {
  return (
    <div className={className}>
      <Eyebrow className="mb-5">{eyebrow}</Eyebrow>
      <Rule variant="gold" className="mb-6" />
      <Headline id={id} level={2} size="xl">{children}</Headline>
    </div>
  );
}

/* ---------- Page ---------- */

export default function SemanticToActionPage() {
  return (
    <>
      {/* HERO */}
      <MedallionHero>
        <Eyebrow className="mb-5">xlSigma</Eyebrow>
        <Headline level={1} size="display" className="mx-auto mb-8 max-w-4xl">
          Semantic-to-Action™
        </Headline>
        <p className="mx-auto mb-8 max-w-3xl font-serif text-headline font-medium leading-tight text-balance text-(--fg)">
          We don&apos;t start with the AI agent.{' '}
          <span className="text-gold">We model the business the agent must understand.</span>
        </p>
        <div className="mx-auto space-y-5 text-lead text-(--fg-muted)">
          <p className="mx-auto max-w-4xl">AI can only act effectively when it understands the organization around it.</p>
          <p className="mx-auto max-w-2xl">
            Semantic-to-Action™ is xlSigma&apos;s approach for connecting enterprise knowledge, business
            processes, policies, decision authority, and AI-enabled automation into a coherent
            operating architecture.
          </p>
        </div>
        <p className="mx-auto mt-8 max-w-4xl font-serif text-title font-medium text-(--fg)">
          The goal is not simply better AI.
          <br />
          <span className="text-gold">The goal is better business performance enabled by AI.</span>
        </p>
        <p className="mt-12 flex items-center justify-center gap-2 text-[0.8125rem] font-semibold uppercase tracking-[0.18em] text-(--accent)">
          Explore the approach below
          <ArrowDown size={16} aria-hidden="true" />
        </p>
      </MedallionHero>

      {/* 1. THE PROBLEM */}
      <Section variant="white" aria-labelledby="problem-heading">
        <ContentContainer>
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <SectionIntro eyebrow="The Problem" id="problem-heading" className="lg:col-span-5">
              AI is advancing faster than most organizations&apos; ability to operationalize it.
            </SectionIntro>
            <div className="space-y-6 text-lead text-(--fg-muted) lg:col-span-7">
              <p>
                Many organizations have valuable data, capable technology, experienced people,
                documented processes, and growing access to AI.
              </p>
              <p className="font-semibold text-(--fg)">
                What they often lack is a common structure connecting them.
              </p>
              <ul className="border-b border-(--rule) text-base">
                {PROBLEM_FACTS.map((f) => (
                  <li key={f} className="border-t border-(--rule) py-4 text-(--fg)">{f}</li>
                ))}
              </ul>
              <p>Then an AI agent is introduced and expected to understand all of it.</p>
              <p>That creates a fundamental problem:</p>
              <PullQuote>An AI agent cannot reliably operate a business it does not understand.</PullQuote>
              <p>Simply connecting an AI model to more data does not solve that problem.</p>
              <p className="font-semibold text-(--fg)">The organization itself must become understandable.</p>
            </div>
          </div>
        </ContentContainer>
      </Section>

      {/* 2. THE CORE IDEA */}
      <Section variant="paper" aria-labelledby="core-heading">
        <ContentContainer>
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <SectionIntro eyebrow="The Core Idea" id="core-heading" className="mb-8">
                From semantic understanding to operational action
              </SectionIntro>
              <div className="space-y-5 text-lead text-(--fg-muted)">
                <p>
                  A traditional semantic layer helps create consistent meaning across enterprise information.
                </p>
                <p>That is important, but xlSigma takes the concept further.</p>
                <p className="font-semibold text-(--fg)">
                  Semantic-to-Action™ connects what the organization knows with how the organization operates.
                </p>
              </div>
            </div>
            <div className="lg:col-span-7">
              <p className="mb-5 text-base text-(--fg-muted)">
                It establishes the context needed to answer questions such as:
              </p>
              <ol className="border-b border-(--rule)">
                {CORE_QUESTIONS.map((q, i) => (
                  <li key={q} className="grid grid-cols-[3rem_1fr] items-baseline border-t border-(--rule) py-3.5">
                    <span className="font-serif text-lg font-medium text-(--accent)">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="text-base text-(--fg)">{q}</span>
                  </li>
                ))}
              </ol>
              <p className="mt-8 font-serif text-title font-medium leading-snug text-(--fg)">
                The result is a structured path from enterprise meaning to governed action.
              </p>
            </div>
          </div>
        </ContentContainer>
      </Section>

      {/* 3. ARCHITECTURE */}
      <Section variant="navy" id="architecture" className="scroll-mt-20" aria-labelledby="arch-heading">
        <ContentContainer>
          <div className="mb-12 max-w-3xl">
            <Eyebrow className="mb-5">Architecture</Eyebrow>
            <Rule variant="gold" className="mb-6" />
            <Headline id="arch-heading" level={2} size="xl">
              The Semantic-to-Action™ Architecture
            </Headline>
          </div>

          <div className="tone-light tone-paper bg-paper p-6 md:p-10">
            <SemanticToActionDiagram />
          </div>

          <ol className="tone-light mt-10 grid list-none gap-5 p-0 md:grid-cols-2 xl:grid-cols-3">
            {ARCH_STAGES.map((s) => (
              <li
                key={s.num}
                className={[
                  'flex flex-col gap-4 rounded-sm border p-6 md:p-7',
                  s.featured ? 'border-gold bg-gold-pale' : 'border-(--rule) bg-white',
                ].join(' ')}
              >
                <span className="font-serif text-lg font-medium text-(--accent)">{s.num}</span>
                <h3 className="font-serif text-title font-medium leading-snug text-(--fg)">{s.title}</h3>
                <p className="font-semibold leading-relaxed text-(--fg)">{s.lead}</p>
                {s.body && s.num !== '05' && s.num !== '02' && (
                  <p className="text-base leading-relaxed text-(--fg-muted)">{s.body[0]}</p>
                )}
                {s.label && (
                  <p className="text-[0.8125rem] font-semibold uppercase tracking-[0.14em] text-(--accent)">
                    {s.label}
                  </p>
                )}
                {s.items && <Chips items={s.items} />}
                {s.questions && <BulletList items={s.questions} />}
                {s.body && (s.num === '05' || s.num === '02') && (
                  <div className="space-y-3 text-base leading-relaxed text-(--fg-muted)">
                    {s.body.map((b) => <p key={b}>{b}</p>)}
                  </div>
                )}
                {STAGE_CLOSERS[s.num] && (
                  <p className="text-base leading-relaxed text-(--fg-muted)">{STAGE_CLOSERS[s.num]}</p>
                )}
              </li>
            ))}
          </ol>
        </ContentContainer>
      </Section>

      {/* 4. THE DIFFERENCE */}
      <Section variant="white" aria-labelledby="difference-heading">
        <ContentContainer>
          <SectionIntro eyebrow="The Difference" id="difference-heading" className="mb-12 max-w-3xl">
            More than a semantic layer
          </SectionIntro>

          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-sm border border-(--rule) p-7 md:p-9">
              <h3 className="font-serif text-title font-medium text-(--fg)">Traditional Semantic Layer</h3>
              <p className="mt-4 text-base leading-relaxed text-(--fg-muted)">
                Primarily helps systems, analytics, and AI understand enterprise information.
              </p>
              <p className="mb-4 mt-6 text-[0.8125rem] font-semibold uppercase tracking-[0.14em] text-(--accent)">
                Often focuses on
              </p>
              <BulletList items={SEMANTIC_LAYER_FOCUS} />
            </div>
            <div className="rounded-sm border border-gold bg-gold-pale p-7 md:p-9">
              <h3 className="font-serif text-title font-medium text-(--fg)">xlSigma Semantic-to-Action™</h3>
              <p className="mt-4 text-base leading-relaxed text-(--fg-muted)">
                Builds on semantic understanding and connects it to the operating model.
              </p>
              <p className="mb-4 mt-6 text-[0.8125rem] font-semibold uppercase tracking-[0.14em] text-(--accent)">
                Adds
              </p>
              <BulletList items={S2A_ADDS} />
            </div>
          </div>

          <div className="mt-12 border-t-2 border-gold pt-8">
            <p className="max-w-4xl font-serif text-headline font-medium leading-tight text-balance text-(--fg)">
              The Enterprise Semantic Foundation makes the business understandable.{' '}
              <span className="text-(--accent)">Semantic-to-Action™ makes that understanding operational.</span>
            </p>
          </div>
        </ContentContainer>
      </Section>

      {/* 5. OUTCOME-BACKWARD */}
      <Section variant="paper" aria-labelledby="backward-heading">
        <ContentContainer>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <SectionIntro eyebrow="Outcome-Backward" id="backward-heading" className="mb-8">
                We start with the outcome, not the technology.
              </SectionIntro>
              <div className="space-y-5 text-lead text-(--fg-muted)">
                <p>A Semantic-to-Action™ engagement does not begin by asking:</p>
                <p className="font-serif italic text-(--fg)">&ldquo;Where can we deploy AI?&rdquo;</p>
                <p>It begins by asking:</p>
                <p className="font-serif font-medium italic text-(--fg)">&ldquo;What needs to materially improve?&rdquo;</p>
                <p>Then we work backward.</p>
              </div>
            </div>
            <div className="lg:col-span-7">
              <ol
                aria-label="Outcome-backward sequence, from Outcome to Technology"
                className="list-none p-0"
              >
                {BACKWARD.map((b, i) => (
                  <li key={b.label} className="relative pb-2">
                    <div
                      className={[
                        'grid items-baseline gap-x-5 gap-y-1 rounded-sm border px-5 py-4 sm:grid-cols-[3rem_13rem_1fr]',
                        i === 0 ? 'border-gold bg-gold-pale' : 'border-(--rule) bg-white',
                      ].join(' ')}
                    >
                      <span className="font-serif text-lg font-medium text-(--accent)">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <span className="font-serif text-xl font-medium text-(--fg)">{b.label}</span>
                      <span className="text-base text-(--fg-muted)">{b.q}</span>
                    </div>
                    {i < BACKWARD.length - 1 && (
                      <div aria-hidden="true" className="flex justify-start pl-6 pt-2 text-(--accent)">
                        <ArrowDown size={18} />
                      </div>
                    )}
                  </li>
                ))}
              </ol>
            </div>
          </div>
          <p className="mt-12 max-w-3xl border-l-2 border-gold pl-6 font-serif text-title font-medium leading-snug text-(--fg) md:pl-8">
            Technology becomes an enabler of the operating model, rather than the starting point for redesigning it.
          </p>
        </ContentContainer>
      </Section>

      {/* 6. LEAN SIX SIGMA */}
      <Section variant="navy" aria-labelledby="lss-heading">
        <ContentContainer>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-6">
              <SectionIntro eyebrow="Lean Six Sigma Connection" id="lss-heading" className="mb-8">
                AI transformation grounded in operational excellence
              </SectionIntro>
              <div className="space-y-5 text-lead text-(--fg-muted)">
                <p>
                  Lean Six Sigma is xlSigma&apos;s transformation discipline. Semantic-to-Action™ is our AI
                  transformation architecture.
                </p>
                <p>Together they connect two questions organizations increasingly need to answer:</p>
              </div>
              <p className="mt-6 font-serif text-title font-medium leading-snug text-(--fg)">
                How should the work operate?
                <br />
                <span className="text-gold">and</span>
                <br />
                How can AI help it operate better?
              </p>
            </div>
            <div className="lg:col-span-6 lg:self-end">
              <p className="mb-6 text-lead text-(--fg-muted)">
                xlSigma combines process analysis, performance improvement, semantic architecture,
                operating-model design, and AI enablement to identify where technology can materially
                improve performance.
              </p>
              <p className="mb-4 text-base text-(--fg-muted)">
                That means AI opportunities are evaluated in the context of:
              </p>
              <ul className="grid gap-x-8 sm:grid-cols-2">
                {LSS_FACTORS.map((f, i) => (
                  <li
                    key={f}
                    className={`border-t border-(--rule) py-3 text-base text-(--fg) ${i >= LSS_FACTORS.length - 2 ? 'border-b' : ''}`}
                  >
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <figure className="mt-16 border-t-2 border-gold pt-10">
            <blockquote className="max-w-5xl font-serif text-headline font-medium leading-tight text-balance text-(--fg)">
              We are not trying to automate the current process faster.{' '}
              <span className="text-gold">
                We are determining how the process should work when people, data, automation, and AI can
                operate together.
              </span>
            </blockquote>
          </figure>
        </ContentContainer>
      </Section>

      {/* 7. HUMAN + AI OPERATING MODEL */}
      <Section variant="white" aria-labelledby="human-ai-heading">
        <ContentContainer>
          <div className="mb-12 grid gap-10 lg:grid-cols-12 lg:gap-16">
            <SectionIntro eyebrow="Human + AI Operating Model" id="human-ai-heading" className="lg:col-span-6">
              Not every decision belongs to an AI agent.
            </SectionIntro>
            <div className="space-y-5 text-lead text-(--fg-muted) lg:col-span-6 lg:self-end">
              <p>Responsible AI implementation requires more than determining what AI can do.</p>
              <p className="font-semibold text-(--fg)">Organizations must determine what AI should do.</p>
              <p>Semantic-to-Action™ helps define operating boundaries such as:</p>
            </div>
          </div>

          <ol className="grid list-none gap-4 p-0 md:grid-cols-2 lg:grid-cols-5">
            {AI_BOUNDARIES.map((b, i) => (
              <li
                key={b.title}
                className={[
                  'flex flex-col gap-3 rounded-sm border p-6',
                  i >= 3 ? 'border-gold bg-gold-pale' : 'border-(--rule) bg-white',
                ].join(' ')}
              >
                <span className="font-serif text-lg font-medium text-(--accent)">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="font-serif text-xl font-medium leading-snug text-(--fg)">{b.title}</h3>
                <p className="text-base leading-relaxed text-(--fg-muted)">{b.desc}</p>
              </li>
            ))}
          </ol>

          <div className="mt-12 border-t-2 border-gold pt-8">
            <p className="max-w-4xl font-serif text-headline font-medium leading-tight text-balance text-(--fg)">
              The objective is not maximum autonomy.{' '}
              <span className="text-(--accent)">It is the right level of autonomy for the business situation.</span>
            </p>
          </div>
        </ContentContainer>
      </Section>

      {/* 8. EXAMPLE */}
      <Section variant="paper" aria-labelledby="example-heading">
        <ContentContainer>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="flex flex-col lg:col-span-5">
              <SectionIntro eyebrow="Example" id="example-heading" className="mb-8">
                What does Semantic-to-Action™ look like in practice?
              </SectionIntro>
              <p className="mb-8 text-lead text-(--fg-muted)">
                Imagine a customer service request that requires an exception.
              </p>
              <div className="rounded-sm border border-(--rule) bg-white p-6 lg:mt-auto">
                <p className="mb-4 text-base font-semibold text-(--fg)">A conventional AI assistant might:</p>
                <ol className="space-y-2.5">
                  {CONVENTIONAL_AI.map((c, i) => (
                    <li key={c} className="grid grid-cols-[2rem_1fr] text-base text-(--fg)">
                      <span className="font-serif font-medium text-(--accent)">{i + 1}.</span>
                      <span>{c}</span>
                    </li>
                  ))}
                </ol>
                <p className="mt-5 border-t border-(--rule) pt-4 text-base text-(--fg-muted)">
                  Useful, but the work still stops with a recommendation.
                </p>
              </div>
            </div>
            <div className="flex flex-col lg:col-span-7">
              <p className="mb-5 text-lead font-semibold text-(--fg)">
                A Semantic-to-Action™ operating model could understand:
              </p>
              <dl className="flex flex-1 flex-col border-b border-(--rule)">
                {EXAMPLE_ELEMENTS.map((e) => (
                  <div
                    key={e.title}
                    className="grid flex-1 content-center gap-x-6 gap-y-1 border-t border-(--rule) py-3.5 sm:grid-cols-[9rem_1fr]"
                  >
                    <dt className="font-serif text-lg font-medium text-(--fg)">{e.title}</dt>
                    <dd className="text-base text-(--fg-muted)">{e.q}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <PullQuote className="mt-12 max-w-4xl">
            That is the difference between AI that understands a question and an enterprise that can use AI to perform work.
          </PullQuote>
        </ContentContainer>
      </Section>

      {/* 9. TECHNOLOGY NEUTRALITY */}
      <Section variant="white" aria-labelledby="tech-heading">
        <ContentContainer>
          <Eyebrow className="mb-5">Technology Neutrality</Eyebrow>
          <Rule variant="gold" className="mb-6" />
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-6">
              <Headline id="tech-heading" level={2} size="xl" className="mb-8">
                Built around your enterprise, not a predetermined technology stack
              </Headline>
              <div className="space-y-5 text-lead text-(--fg-muted)">
                <p>
                  Semantic-to-Action™ is an architecture and transformation approach, not a requirement to
                  replace your existing technology environment.
                </p>
              </div>
            </div>
            <div className="lg:col-span-6">
              <p className="mb-5 text-base text-(--fg-muted)">
                The Enterprise Semantic Foundation may use capabilities already available within your
                ecosystem or incorporate technologies such as:
              </p>
              <Chips items={TECHNOLOGIES} className="mb-6" />
              <p className="text-base text-(--fg-muted)">
                xlSigma helps determine what architecture is appropriate for the business problem.
              </p>
            </div>
          </div>
          <div className="mt-12 border-l-2 border-gold pl-6 md:pl-8">
            <p className="max-w-3xl font-serif text-title font-medium leading-snug text-(--fg)">
              We do not begin with a preferred AI tool and search for somewhere to deploy it.
              <br />
              <span className="text-(--accent)">We begin with the business and determine what technology is required.</span>
            </p>
          </div>
        </ContentContainer>
      </Section>

      {/* 10. ENGAGEMENT PATHWAYS */}
      <Section variant="paper" aria-labelledby="engage-heading">
        <ContentContainer>
          <SectionIntro eyebrow="How Clients Can Engage" id="engage-heading" className="mb-12 max-w-3xl">
            Start where the business case justifies starting
          </SectionIntro>
          <ol className="grid list-none gap-5 p-0 md:grid-cols-2">
            {ENGAGEMENTS.map((e, i) => (
              <li key={e.title} className="flex flex-col gap-4 rounded-sm border border-(--rule) bg-white p-7">
                <span className="font-serif text-lg font-medium text-(--accent)">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="font-serif text-title font-medium leading-snug text-(--fg)">{e.title}</h3>
                <p className="text-base leading-relaxed text-(--fg-muted)">{e.desc}</p>
                {e.outputs.length > 0 && (
                  <>
                    <p className="text-[0.8125rem] font-semibold uppercase tracking-[0.14em] text-(--accent)">
                      Potential outputs
                    </p>
                    <BulletList items={e.outputs} />
                  </>
                )}
              </li>
            ))}
          </ol>
        </ContentContainer>
      </Section>

      {/* 11. WHY XLSIGMA */}
      <Section variant="white" aria-labelledby="why-heading">
        <ContentContainer>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <SectionIntro eyebrow="Why xlSigma" id="why-heading" className="mb-8">
                Business transformation first. Technology where it creates value.
              </SectionIntro>
              <div className="space-y-5 text-lead text-(--fg-muted)">
                <p>
                  AI transformation sits at the intersection of strategy, operations, data, technology, and
                  organizational change.
                </p>
                <p className="font-semibold text-(--fg)">xlSigma brings those disciplines together.</p>
              </div>
            </div>
            <div className="lg:col-span-7 lg:self-end">
              <p className="mb-4 text-lead font-semibold text-(--fg)">Our approach combines:</p>
              <ul className="border-b border-(--rule)">
                {WHY.map((w) => (
                  <li
                    key={w.title}
                    className="grid gap-x-6 gap-y-1 border-t border-(--rule) py-2.5 sm:grid-cols-[14rem_1fr] lg:grid-cols-[17rem_1fr]"
                  >
                    <span className="font-serif text-xl font-medium text-(--fg)">{w.title}</span>
                    <span className="text-base text-(--fg-muted)">{w.desc}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-14 border-t-2 border-gold pt-8">
            <p className="max-w-4xl font-serif text-headline font-medium leading-tight text-balance text-(--fg)">
              The objective is not to add AI to the enterprise.{' '}
              <span className="text-(--accent)">It is to build an enterprise capable of using AI effectively.</span>
            </p>
          </div>
        </ContentContainer>
      </Section>

      {/* FINAL CTA */}
      <Section variant="navy" aria-labelledby="s2a-cta">
        <ContentContainer>
          <div className="grid items-end gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <Rule variant="gold" className="mb-6" />
              <Headline id="s2a-cta" level={2} size="xl" className="mb-6">
                Move from AI experimentation to operational impact.
              </Headline>
              <div className="max-w-xl space-y-4 text-lead text-(--fg-muted)">
                <p>
                  If your organization is exploring AI but struggling to connect pilots, data, processes,
                  governance, and measurable business value, Semantic-to-Action™ provides a structured path
                  forward.
                </p>
                <p className="font-semibold text-(--fg)">
                  Let&apos;s identify where AI can materially improve how your organization operates.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-4 lg:col-span-5 lg:justify-end">
              <Button href="/contact" variant="primary">
                Talk With xlSigma <ArrowRight size={16} aria-hidden="true" />
              </Button>
              <Button href="/capabilities" variant="secondary">
                Explore Our AI &amp; Technology Capabilities
              </Button>
            </div>
          </div>
        </ContentContainer>
      </Section>
    </>
  );
}
