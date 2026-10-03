import type { Metadata } from 'next';
import { ArrowRight } from 'lucide-react';
import Section from '../components/ui/Section';
import ContentContainer from '../components/ui/ContentContainer';
import MedallionHero from '../components/ui/MedallionHero';
import Eyebrow from '../components/ui/Eyebrow';
import Headline from '../components/ui/Headline';
import Rule from '../components/ui/Rule';
import Button from '../components/ui/Button';
import PullQuote from '../components/ui/PullQuote';

export const metadata: Metadata = {
  title: 'Operational Excellence for Commercial Enterprises | xlSigma',
};

const VALUE_PROPS = [
  'Senior-only delivery teams with Fortune 500 depth — no juniors, no bench',
  'Lean Six Sigma-led process reengineering that drives measurable cycle-time and cost results',
  'AI, agents, and intelligent automation deployed on real operational workflows',
  'Enterprise knowledge and semantic transformation that makes systems and data AI-ready',
  'Full-stack delivery: strategy, design, build, implementation, and training',
];

const INDUSTRIES = [
  { label: 'Financial Services', sub: 'Banking, KYC, regulatory operations' },
  { label: 'Healthcare',         sub: 'Clinical & administrative workflows' },
  { label: 'Manufacturing',      sub: 'Operations & supply chain'           },
];

export default function CommercialPage() {
  return (
    <>
      {/* Hero */}
      <MedallionHero>
        <Headline level={1} size="display" className="mx-auto max-w-4xl">
          <span className="block">Operational Excellence for</span>
          <span className="mt-2 block text-gold">Commercial Enterprises</span>
        </Headline>
        <p className="mx-auto mt-8 max-w-2xl text-lead text-(--fg-muted)">
          xlSigma partners with private-sector organizations to reengineer processes,
          deploy AI and intelligent automation, and build the enterprise knowledge
          foundations that make transformation stick.
        </p>
      </MedallionHero>

      {/* Value Props */}
      <Section variant="paper" aria-labelledby="practitioner-led">
        <ContentContainer>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <Eyebrow className="mb-5">Why Commercial Clients Choose xlSigma</Eyebrow>
              <Rule variant="gold" className="mb-6" />
              <Headline id="practitioner-led" level={2} size="xl" className="mb-8">
                Practitioner-Led Transformation
              </Headline>
              <p className="text-lead text-(--fg-muted)">
                We bring the same senior-level rigor used across Fortune 500 engagements
                to organizations of any size — pairing Lean Six Sigma discipline with
                modern AI and automation capability.
              </p>
              <PullQuote className="mt-10">
                We don&apos;t start with the AI agent. We model the business the agent must understand.
              </PullQuote>
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

      {/* Industries */}
      <Section variant="white" aria-labelledby="industries">
        <ContentContainer>
          <div className="mb-12 lg:mb-16">
            <Eyebrow className="mb-5">Where We Deliver</Eyebrow>
            <Rule variant="gold" className="mb-6" />
            <Headline id="industries" level={2} size="xl">Industries We Serve</Headline>
          </div>
          <ul className="grid gap-x-10 gap-y-8 md:grid-cols-3">
            {INDUSTRIES.map(({ label, sub }) => (
              <li key={label} className="border-t border-gold pt-6">
                <h3 className="font-serif text-title font-medium text-(--fg)">{label}</h3>
                <p className="mt-2 text-base leading-relaxed text-(--fg-muted)">{sub}</p>
              </li>
            ))}
          </ul>
        </ContentContainer>
      </Section>

      {/* CTA */}
      <Section variant="navy" aria-labelledby="commercial-cta">
        <ContentContainer>
          <div className="grid items-end gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <Rule variant="gold" className="mb-6" />
              <Headline id="commercial-cta" level={2} size="xl" className="mb-5">
                Let&apos;s Talk Transformation
              </Headline>
              <p className="max-w-xl text-lead text-(--fg-muted)">
                Whether you&apos;re tackling a single process bottleneck or an
                enterprise-wide transformation, xlSigma is ready to engage.
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
