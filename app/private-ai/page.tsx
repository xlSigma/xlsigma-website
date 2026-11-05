import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { ArrowRight } from 'lucide-react';
import Section from '../components/ui/Section';
import ContentContainer from '../components/ui/ContentContainer';
import MedallionHero from '../components/ui/MedallionHero';
import Eyebrow from '../components/ui/Eyebrow';
import Headline from '../components/ui/Headline';
import Rule from '../components/ui/Rule';
import Button from '../components/ui/Button';
import PullQuote from '../components/ui/PullQuote';
import { pageMetadata } from '../lib/site';

export const metadata: Metadata = pageMetadata({
  title: 'Private AI | Secure, Governed Enterprise AI | xlSigma',
  description:
    'xlSigma helps organizations put AI to work on sensitive knowledge inside an enterprise-controlled boundary, led by business outcomes and governed by design.',
  path: '/private-ai',
});

/* ---------- Content (approved verbatim, 2026-11-04) ---------- */

const CTA_LABEL = 'Discuss your private AI requirements';

const CONSTRAINTS = [
  'Data residency or customer terms that keep information in a defined environment',
  'Contractual or regulatory boundaries on where sensitive data may be processed',
  'Isolated networks, disconnected sites or limited connectivity',
  'Internal policy that restricts which systems may handle proprietary knowledge',
];

const APPROACH = [
  {
    title: 'A measured result.',
    desc:
      'A named workflow improves against a baseline, such as search time, rework, cycle time or ' +
      'mission performance, and is sustained through a control plan with a named owner.',
  },
  {
    title: 'An objective deployment choice.',
    desc:
      'Options are compared on capability, risk, lifecycle cost and operational fit. That includes ' +
      'recommending managed AI when it is sufficient.',
  },
  {
    title: 'Defined, enforced authority.',
    desc:
      'What AI may inform, recommend or do is defined before deployment and enforced by controls ' +
      'outside the AI itself.',
  },
  {
    title: 'A run model decided before build.',
    desc: 'Every deployment has a named owner for day-to-day operation before go-live.',
  },
];

const OPTIONS = [
  {
    option: 'Enterprise-managed AI',
    fit: 'Existing platforms with contractual protections meet the requirement',
  },
  {
    option: 'Private or dedicated hosted AI',
    fit: 'Isolation and customer control are required, with hosted operations',
  },
  {
    option: 'On-premises with controlled connectivity',
    fit: 'AI runs locally under enterprise administration, with approved external connections',
  },
  {
    option: 'Disconnected deployment',
    fit: 'No routine external connection, with controlled updates and transfers',
  },
  {
    option: 'Fully air-gapped deployment',
    fit: 'A specific isolation requirement and threat model call for verified isolation',
  },
];

const ENGAGEMENTS: { title: string; desc: ReactNode }[] = [
  {
    title: 'Private AI Assessment.',
    desc: (
      <>
        Define the business outcome and constraints, compare deployment options including managed AI,
        and build the lifecycle business case and recommendation. The recommendation may be that a
        private deployment isn&apos;t needed.
      </>
    ),
  },
  {
    title: 'Secure AI Implementation & Operationalization.',
    desc: (
      <>
        Deploy with qualified specialists, connect governed knowledge sources, redesign the work, and
        test access controls and acceptance before go-live.
      </>
    ),
  },
  {
    title: 'AI Assurance & Lifecycle Optimization.',
    desc: (
      <>
        Run quality evaluations, operational and benefits reviews, and controlled changes after
        go-live, coordinated with the named operations owner.
      </>
    ),
  },
];

const GOVERNED = [
  { title: 'Source traceability.', desc: 'Answers cite the authoritative source and current version.' },
  {
    title: 'Access enforcement.',
    desc: 'People see only what their permissions allow, and access controls are tested before go-live.',
  },
  {
    title: 'Honest limits.',
    desc: 'When evidence is missing or conflicting, the system says so or escalates instead of guessing.',
  },
  {
    title: 'Complete data flows.',
    desc: 'The boundary covers logging, backups, connectors, administration and support, not only where the model runs.',
  },
];

/* ---------- Helpers ---------- */

function SectionHeading({ id, children, className = '' }: { id: string; children: ReactNode; className?: string }) {
  return (
    <div className={className}>
      <Rule variant="gold" className="mb-6" />
      <Headline id={id} level={2} size="xl">{children}</Headline>
    </div>
  );
}

function CtaButton() {
  return (
    <Button href="/contact?topic=private-ai" variant="primary">
      {CTA_LABEL} <ArrowRight size={16} aria-hidden="true" />
    </Button>
  );
}

/* ---------- Page ---------- */

export default function PrivateAiPage() {
  return (
    <>
      {/* 1. HERO */}
      <MedallionHero>
        <Eyebrow className="mb-5">Private AI | A specialization of Operationalizing AI</Eyebrow>
        <Headline level={1} size="display" className="mx-auto mb-8 max-w-4xl">
          Private AI, Governed for Real Work
        </Headline>
        <p className="mx-auto mb-10 max-w-2xl text-lead text-(--fg-muted)">
          Some knowledge can&apos;t leave your environment. We help you apply AI to it inside a security
          boundary you control, starting with the work that has to improve and the constraint that
          requires it.
        </p>
        <CtaButton />
      </MedallionHero>

      {/* 2. WHEN PRIVATE AI IS THE RIGHT ANSWER */}
      <Section variant="white" aria-labelledby="constraint-heading">
        <ContentContainer>
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <SectionHeading id="constraint-heading" className="lg:col-span-5">
              Start with the constraint, not the hardware
            </SectionHeading>
            <div className="space-y-6 lg:col-span-7">
              <p className="text-lead text-(--fg-muted)">
                Managed enterprise AI with contractual data protections is often the fastest path, and
                sometimes the right one. A private deployment earns its cost when a real constraint rules
                that out. Common examples include:
              </p>
              <ul className="border-b border-(--rule)">
                {CONSTRAINTS.map((c) => (
                  <li key={c} className="flex gap-3 border-t border-(--rule) py-4 text-base leading-relaxed text-(--fg)">
                    <span aria-hidden="true" className="mt-2.5 h-1.5 w-1.5 shrink-0 bg-gold" />
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
              <p className="text-lead font-semibold text-(--fg)">
                Confidentiality alone does not require private deployment. We test that distinction with
                you before anything is built.
              </p>
            </div>
          </div>
        </ContentContainer>
      </Section>

      {/* 3. OUR APPROACH */}
      <Section variant="paper" aria-labelledby="approach-heading">
        <ContentContainer>
          <div className="mb-12 grid gap-10 lg:grid-cols-12 lg:gap-16">
            <SectionHeading id="approach-heading" className="lg:col-span-5">
              Business outcomes first. Architecture in proportion.
            </SectionHeading>
            <div className="space-y-8 lg:col-span-7">
              <p className="text-lead font-semibold leading-snug text-(--fg)">
                Lean Six Sigma is xlSigma&apos;s transformation discipline.<br />
                Semantic-to-Action™ is our AI transformation architecture.
              </p>
              <PullQuote>The deployment choice follows the business case, not a vendor catalog.</PullQuote>
            </div>
          </div>
          <ol className="grid list-none gap-5 p-0 md:grid-cols-2">
            {APPROACH.map((a, i) => (
              <li key={a.title} className="flex flex-col gap-4 rounded-sm border border-(--rule) bg-white p-7">
                <span aria-hidden="true" className="font-serif text-lg font-medium text-(--accent)">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="font-serif text-title font-medium leading-snug text-(--fg)">{a.title}</h3>
                <p className="text-base leading-relaxed text-(--fg-muted)">{a.desc}</p>
              </li>
            ))}
          </ol>
        </ContentContainer>
      </Section>

      {/* 4. DEPLOYMENT OPTIONS */}
      <Section variant="white" aria-labelledby="options-heading">
        <ContentContainer>
          <div className="mb-12 grid gap-10 lg:grid-cols-12 lg:gap-16">
            <SectionHeading id="options-heading" className="lg:col-span-5">
              The right boundary for the requirement
            </SectionHeading>
            <p className="text-lead text-(--fg-muted) lg:col-span-7">
              Private, on-premises, disconnected and air-gapped are not interchangeable. We help you
              choose the least complex option that meets your security, reliability and business
              requirements.
            </p>
          </div>

          {/* Tablet and up: a two-column table */}
          <table className="hidden w-full border-collapse text-left md:table">
            <thead>
              <tr className="border-b-2 border-gold">
                <th scope="col" className="w-2/5 py-4 pr-8 text-[0.8125rem] font-semibold uppercase tracking-[0.14em] text-(--accent)">
                  Option
                </th>
                <th scope="col" className="py-4 text-[0.8125rem] font-semibold uppercase tracking-[0.14em] text-(--accent)">
                  When it fits
                </th>
              </tr>
            </thead>
            <tbody>
              {OPTIONS.map((o) => (
                <tr key={o.option} className="border-b border-(--rule) align-top">
                  <th scope="row" className="py-5 pr-8 font-serif text-title font-medium text-(--fg)">
                    {o.option}
                  </th>
                  <td className="py-5 text-base leading-relaxed text-(--fg-muted)">{o.fit}</td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Phone: the same rows as a stacked list */}
          <dl className="border-b border-(--rule) md:hidden">
            {OPTIONS.map((o) => (
              <div key={o.option} className="border-t border-(--rule) py-5">
                <dt className="font-serif text-title font-medium text-(--fg)">{o.option}</dt>
                <dd className="mt-2 text-base leading-relaxed text-(--fg-muted)">
                  <span className="mb-1 block text-[0.8125rem] font-semibold uppercase tracking-[0.14em] text-(--accent)">
                    When it fits
                  </span>
                  {o.fit}
                </dd>
              </div>
            ))}
          </dl>
        </ContentContainer>
      </Section>

      {/* 5. HOW WE ENGAGE */}
      <Section variant="paper" aria-labelledby="engage-heading">
        <ContentContainer>
          <div className="mb-12 grid gap-10 lg:grid-cols-12 lg:gap-16">
            <SectionHeading id="engage-heading" className="lg:col-span-5">
              Three ways to engage
            </SectionHeading>
            <p className="text-lead text-(--fg-muted) lg:col-span-7">
              Engagements are sized to the problem, from a single workflow to a team, a domain or the
              enterprise. Each component can be engaged on its own when requirements are already known.
            </p>
          </div>
          <ol className="grid list-none gap-5 p-0 md:grid-cols-3">
            {ENGAGEMENTS.map((e, i) => (
              <li key={e.title} className="flex flex-col gap-4 rounded-sm border border-(--rule) bg-white p-7">
                <span aria-hidden="true" className="font-serif text-lg font-medium text-(--accent)">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="font-serif text-title font-medium leading-snug text-(--fg)">{e.title}</h3>
                <p className="text-base leading-relaxed text-(--fg-muted)">{e.desc}</p>
              </li>
            ))}
          </ol>
        </ContentContainer>
      </Section>

      {/* 6. GOVERNED BY DESIGN */}
      <Section variant="navy" aria-labelledby="governed-heading">
        <ContentContainer>
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="space-y-8 lg:col-span-5">
              <SectionHeading id="governed-heading">
                Traceable answers. Enforced access. Owned operations.
              </SectionHeading>
              <p className="text-lead text-(--fg-muted)">
                Private deployment alone doesn&apos;t make AI trustworthy. We design for what has to hold up
                in daily use:
              </p>
            </div>
            <ul className="border-b border-(--rule) lg:col-span-7">
              {GOVERNED.map((g) => (
                <li key={g.title} className="border-t border-(--rule) py-5 text-base leading-relaxed text-(--fg-muted) md:py-6">
                  <span className="font-semibold text-(--fg)">{g.title}</span> {g.desc}
                </li>
              ))}
            </ul>
          </div>
        </ContentContainer>
      </Section>

      {/* 7. HOW WE DELIVER */}
      <Section variant="white" aria-labelledby="deliver-heading">
        <ContentContainer>
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <SectionHeading id="deliver-heading" className="lg:col-span-5">
              We own the outcome. Specialists deliver the platform.
            </SectionHeading>
            <p className="text-lead text-(--fg-muted) lg:col-span-7">
              xlSigma leads the business outcome, functional design, integration coordination, adoption
              and benefits realization. Qualified specialists deliver infrastructure, AI engineering and
              security work within scopes you can see. You keep ownership of your data, access decisions
              and acceptance. Day-to-day operation is assigned to a named owner before go-live, whether
              that&apos;s your IT team, a platform provider or a specialist partner.
            </p>
          </div>
        </ContentContainer>
      </Section>

      {/* 8. CLOSING CTA */}
      <Section variant="navy" aria-labelledby="private-ai-cta">
        <ContentContainer>
          <div className="grid items-end gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <Rule variant="gold" className="mb-6" />
              <Headline id="private-ai-cta" level={2} size="xl" className="mb-5">
                Have knowledge that can&apos;t leave your environment?
              </Headline>
              <p className="max-w-xl text-lead text-(--fg-muted)">
                Tell us about the work you want to improve and the constraint you&apos;re working within.
              </p>
            </div>
            <div className="lg:col-span-5 lg:justify-self-end">
              <CtaButton />
            </div>
          </div>
        </ContentContainer>
      </Section>
    </>
  );
}
