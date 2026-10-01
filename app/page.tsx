import type { Metadata } from 'next';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import Section from './components/ui/Section';
import ContentContainer from './components/ui/ContentContainer';
import Eyebrow from './components/ui/Eyebrow';
import Headline from './components/ui/Headline';
import Rule from './components/ui/Rule';
import Button from './components/ui/Button';
import PullQuote from './components/ui/PullQuote';
import { CapabilityList, CapabilityRow } from './components/ui/CapabilityRow';

export const metadata: Metadata = {
  title: 'xlSigma | Operational Excellence, AI & Enterprise Transformation',
  description:
    'xlSigma helps commercial and government organizations improve performance through Lean Six Sigma, enterprise knowledge and semantic transformation, AI agents, intelligent automation, analytics, and technology-enabled transformation.',
};

const CAPABILITIES_PREVIEW = [
  {
    title: 'Lean Six Sigma / Continuous Improvement',
    desc:  'DMAIC-driven transformation led by a certified Master Black Belt.',
  },
  {
    title: 'Enterprise Knowledge & Semantic Transformation',
    desc:  'AI-ready knowledge and semantic foundations that connect enterprise concepts, institutional knowledge, and system context.',
  },
  {
    title: 'AI, Agents & Intelligent Automation',
    desc:  'AI agents, RPA, and intelligent automation that orchestrate work, reduce repetitive effort, and operate within defined controls.',
  },
  {
    title: 'Data Analytics & KPI Dashboards',
    desc:  'Power BI, Tableau, and custom frameworks that turn data into decisions.',
  },
];

const LEADERSHIP = [
  {
    role:    'President',
    details: 'MBA, Michigan Ross · Lean Six Sigma Master Black Belt · BS Electrical Engineering, FIU',
  },
  {
    role:    'Chief Growth & Transformation Officer',
    details: 'BS Economics and Accounting, Elizabethtown College · Lean Six Sigma Master Black Belt (PwC) · Former Big 4 Strategy Partner · Led $300M CENTCOM enterprise transformation',
  },
  {
    role:    'Chief Technology Officer',
    details: 'MS Computer Science, Washington University in St. Louis · 25+ years enterprise software architecture · Azure platform serving 200,000+ users',
  },
];

const STAGES = [
  'Systems & Knowledge',
  'Semantic Foundation',
  'Process & Policy',
  'Role & Authority',
  'AI & Automation',
  'Outcomes',
];

const VALUE_PROPS = [
  'Senior-only delivery teams on every engagement -- no juniors, no bench',
  'Workflow Automation Full-stack delivery: strategy, design, build, implement, and training',
  'Strategy Deployment, Process Improvement, Data Analytics, KPI Dashboards',
  'Leadership: Lean Six Sigma Master Black Belt with Fortune 500 track record',
  'Deep expertise across Accenture, GE, Emerson, Citi, Discover, Federal Government agencies',
  'Bilingual delivery: English, Spanish',
];

const CREDENTIAL_TAGS = ['SDVOSB', 'FL OSD Veteran CBE (pending)', 'SAM.gov Registered'];

export default function HomePage() {
  return (
    <>
      {/* Hero: banner field blends into the navy hero body */}
      <Section variant="navy" padded={false}>
        <div className="bg-linear-to-b from-banner-top to-banner-bottom py-5 md:py-8">
          <div className="mx-auto w-full max-w-[1128px]">
            <Image
              src="/xlsigma_banner_260717.jpg"
              alt="xlSigma: AI, Automation and Enterprise Knowledge Transformation. Powered by Lean Six Sigma. Service-Disabled Veteran-Owned Small Business, SDVOSB."
              width={1128}
              height={191}
              priority
              quality={90}
              sizes="(min-width: 1128px) 1128px, 100vw"
              className="banner-mask h-auto w-full"
            />
          </div>
        </div>

        <div
          style={{
            backgroundImage:
              'linear-gradient(to bottom, var(--color-banner-bottom), var(--color-navy) 10rem)',
          }}
        >
          <ContentContainer className="pb-20 pt-14 md:pb-28 md:pt-20">
            <div className="grid items-end gap-12 lg:grid-cols-12 lg:gap-16">
              <Headline level={1} size="xl" className="lg:col-span-7">
                <span className="block text-title font-normal text-(--fg-muted)">
                  Senior-Level Consulting for
                </span>
                <span className="mt-3 block text-display text-gold">
                  Operations Excellence
                </span>
              </Headline>

              <div className="lg:col-span-5 lg:border-l lg:border-gold/50 lg:pl-10">
                <p className="text-lead font-semibold leading-snug text-(--fg)">
                  Process Reengineering &bull; Lean Six Sigma &bull; AI &amp; Intelligent Automation
                </p>
                <p className="mt-3 text-lead font-semibold leading-snug text-(--fg)">
                  Enterprise Knowledge Transformation &bull; Advanced Analytics
                </p>
                <Rule variant="gold" className="my-7" />
                <p className="text-base leading-relaxed text-(--fg-muted)">
                  Backed by Fortune 500 experience in transformation and operational excellence
                </p>
                <div className="mt-9 flex flex-wrap gap-4">
                  <Button href="/capabilities" variant="primary">View Capabilities</Button>
                  <Button href="/contact" variant="secondary">Get in Touch</Button>
                </div>
              </div>
            </div>
          </ContentContainer>
        </div>
      </Section>

      {/* Who We Are */}
      <Section variant="paper" aria-labelledby="who-we-are">
        <ContentContainer>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <Eyebrow className="mb-5">Who We Are</Eyebrow>
              <Rule variant="gold" className="mb-6" />
              <Headline id="who-we-are" level={2} size="xl">
                Operational Excellence. Senior. Accountable.
              </Headline>
            </div>

            <div className="lg:col-span-7">
              <div className="space-y-5 text-lead text-(--fg-muted)">
                <p>
                  xlSigma is a management consulting and technology firm built to deliver
                  enterprise-grade expertise with small-firm agility and direct accountability.
                </p>
                <p>
                  You won&apos;t be handed off to a junior delivery team. Every engagement is led by senior practitioners and backed by direct principal oversight.
                </p>
              </div>

              <div className="mt-14">
                <h3 className="mb-2 text-[0.8125rem] font-semibold uppercase tracking-[0.18em] text-(--accent)">
                  Leadership Credentials
                </h3>
                <dl className="border-b border-(--rule)">
                  {LEADERSHIP.map(({ role, details }) => (
                    <div key={role} className="grid gap-2 border-t border-(--rule) py-6 md:grid-cols-12 md:gap-8">
                      <dt className="font-serif text-xl font-medium text-(--fg) md:col-span-5">{role}</dt>
                      <dd className="text-[0.9375rem] leading-relaxed text-(--fg-muted) md:col-span-7">{details}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </ContentContainer>
      </Section>

      {/* Capabilities Preview */}
      <Section variant="white" aria-labelledby="what-we-do">
        <ContentContainer>
          <div className="mb-12 grid gap-6 lg:mb-16 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <Eyebrow className="mb-5">Core Capabilities</Eyebrow>
              <Rule variant="gold" className="mb-6" />
              <Headline id="what-we-do" level={2} size="xl">What We Do</Headline>
            </div>
          </div>

          <CapabilityList>
            {CAPABILITIES_PREVIEW.map(({ title, desc }, i) => (
              <CapabilityRow key={title} index={i + 1} title={title}>{desc}</CapabilityRow>
            ))}
          </CapabilityList>

          <div className="mt-10">
            <Button href="/capabilities" variant="secondary">
              View All Capabilities <ArrowRight size={16} aria-hidden="true" />
            </Button>
          </div>
        </ContentContainer>
      </Section>

      {/* Semantic-to-Action Teaser */}
      <Section variant="navy" aria-labelledby="semantic-teaser">
        <ContentContainer>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <Eyebrow className="mb-5">Our Transformation Architecture</Eyebrow>
              <Rule variant="gold" className="mb-6" />
              <Headline id="semantic-teaser" level={2} size="xl">
                From Enterprise Meaning to Intelligent Action
              </Headline>
            </div>

            <div className="lg:col-span-7">
              <div className="space-y-5 text-lead text-(--fg-muted)">
                <p>
                  AI can access enterprise information without truly understanding how the business works. xlSigma&apos;s Semantic-to-Action Architecture connects enterprise systems and knowledge to a shared Semantic Foundation, then adds the processes, policies, roles, decision authority, and controls AI needs to operate effectively.
                </p>
                <p>
                  The result is a governed business architecture that allows AI to move beyond isolated tools and begin reasoning across operations and acting within defined boundaries.
                </p>
              </div>
              <PullQuote className="mt-10">
                We don&apos;t start with the AI agent. We model the business the agent must understand.
              </PullQuote>
            </div>
          </div>

          <ol
            className="mt-14 hidden gap-x-6 md:grid md:grid-cols-6"
            aria-hidden="true"
          >
            {STAGES.map((label) => (
              <li key={label} className="border-t border-gold/60 pt-4 text-sm font-medium leading-snug text-(--fg)">
                {label}
              </li>
            ))}
          </ol>

          <div className="mt-12">
            <Button href="/capabilities#semantic-to-action" variant="primary">
              Explore the Semantic-to-Action Architecture <ArrowRight size={16} aria-hidden="true" />
            </Button>
          </div>
        </ContentContainer>
      </Section>

      {/* Why xlSigma */}
      <Section variant="paper" aria-labelledby="why-xlsigma">
        <ContentContainer>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <Eyebrow className="mb-5">Why xlSigma</Eyebrow>
              <Rule variant="gold" className="mb-6" />
              <Headline id="why-xlsigma" level={2} size="xl" className="mb-8">
                The Engagement Model Makes the Difference
              </Headline>
              <p className="text-lead text-(--fg-muted)">
                Large firms send senior partners to sell -- then deliver with junior staff.
                xlSigma operates differently. We deliver with senior-level consultants with Principal oversight from day one through final handoff.
              </p>
            </div>

            <ul className="border-b border-(--rule) lg:col-span-7">
              {VALUE_PROPS.map((prop) => (
                <li
                  key={prop}
                  className="border-t border-(--rule) py-5 text-base leading-relaxed text-(--fg) md:py-6"
                >
                  {prop}
                </li>
              ))}
            </ul>
          </div>
        </ContentContainer>
      </Section>

      {/* Government Contracting Banner */}
      <Section variant="navy" aria-labelledby="federal-prime">
        <ContentContainer>
          <div className="grid items-end gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <ul className="mb-8 flex flex-wrap gap-3">
                {CREDENTIAL_TAGS.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-sm border border-gold/60 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-gold"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
              <Headline id="federal-prime" level={2} size="xl" className="mb-6">
                Federal Prime Contractor?
              </Headline>
              <p className="max-w-xl text-lead text-(--fg-muted)">
                xlSigma is a certified SDVOSB -- helping
                prime contractors meet participation goals while delivering senior-level execution.
              </p>
            </div>
            <div className="lg:col-span-5 lg:justify-self-end">
              <Button href="/government-contracting" variant="primary">
                View Federal Contracting Credentials <ArrowRight size={16} aria-hidden="true" />
              </Button>
            </div>
          </div>
        </ContentContainer>
      </Section>

      {/* Final CTA */}
      <Section variant="white" aria-labelledby="get-started">
        <ContentContainer>
          <div className="grid items-end gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <Rule variant="gold" className="mb-6" />
              <Headline id="get-started" level={2} size="xl" className="mb-5">
                Ready to Get Started?
              </Headline>
              <p className="max-w-xl text-lead text-(--fg-muted)">
                Tell us about your challenge. We will respond within one business day.
              </p>
            </div>
            <div className="lg:col-span-5 lg:justify-self-end">
              <Button href="/contact" variant="primary">Contact Us</Button>
            </div>
          </div>
        </ContentContainer>
      </Section>
    </>
  );
}
