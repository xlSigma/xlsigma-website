import { ArrowDown, ArrowRight, ArrowUp } from 'lucide-react';

type Stage = {
  num:      string;
  title:    string;
  desc:     string;
  featured?: boolean;
};

const STAGES: Stage[] = [
  {
    num:   '01',
    title: 'Enterprise Systems & Knowledge',
    desc:  'Data / Documents / Platforms',
  },
  {
    num:      '02',
    title:    'Enterprise Semantic Foundation',
    desc:     'Meaning / Entities / Relationships',
    featured: true,
  },
  {
    num:   '03',
    title: 'Process & Policy',
    desc:  'Workflows / Rules / Controls',
  },
  {
    num:   '04',
    title: 'Role & Authority',
    desc:  'Responsibilities / Decisions / Approvals',
  },
  {
    num:   '05',
    title: 'AI Agents & Intelligent Automation',
    desc:  'Agents / Orchestration / RPA',
  },
  {
    num:   '06',
    title: 'Business Outcomes',
    desc:  'Speed / Adaptability / Control',
  },
];

export default function SemanticToActionDiagram() {
  return (
    <div className="w-full overflow-x-hidden">
      <ol
        role="list"
        aria-label="Semantic-to-Action™ Architecture stages"
        className="list-none p-0 m-0 flex flex-col xl:grid xl:grid-cols-6 xl:gap-x-5 xl:gap-y-4"
      >
        {STAGES.flatMap((stage, i) => {
          const card = (
            <li
              key={stage.title}
              className={[
                'relative min-w-0 rounded-sm p-4 xl:p-5 flex flex-col gap-2',
                stage.featured
                  ? 'bg-gold-pale border border-gold'
                  : 'bg-white border border-rule hover:border-gold transition-colors',
                i >= 1 && i <= 3 ? 'max-xl:border-l-4 max-xl:border-l-gold' : '',
              ].join(' ')}
            >
              <span className="font-serif text-lg font-medium text-(--accent) tracking-wide">
                {stage.num}
              </span>
              <h3 className="font-serif text-lg font-medium text-ink leading-snug">
                {stage.title}
              </h3>
              <p className="text-sm text-ink-muted leading-relaxed">
                {stage.desc}
              </p>
              {i < STAGES.length - 1 && (
                <ArrowRight
                  size={16}
                  strokeWidth={1.5}
                  aria-hidden="true"
                  className="pointer-events-none absolute top-1/2 -right-[18px] hidden -translate-y-1/2 text-gold xl:block"
                />
              )}
            </li>
          );

          if (i < STAGES.length - 1) {
            const connector = (
              <li
                key={`connector-${i}`}
                role="presentation"
                aria-hidden="true"
                className="flex items-center justify-center py-2 xl:hidden"
              >
                <ArrowDown size={16} strokeWidth={1.5} className="text-gold" />
              </li>
            );
            if (i === 3) {
              // Context Services band: unnumbered and not a list item (role="presentation"),
              // so the list keeps its six items.
              const band = (
                <li
                  key="context-services"
                  role="presentation"
                  className="xl:col-span-3 xl:col-start-2 xl:row-start-2"
                >
                  <div
                    role="group"
                    aria-label="Context Services draw on layers 2 to 4 and deliver context to layer 5."
                    className="h-full rounded-sm border-2 border-gold bg-gold-pale p-4 xl:px-5 xl:py-4"
                  >
                    <p className="font-serif text-lg font-medium leading-snug text-ink">
                      Context Services
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-ink-muted">
                      Semantic, operational, and authority context, delivered to AI at runtime
                    </p>
                    <p
                      aria-hidden="true"
                      className="mt-2 text-xs font-semibold uppercase tracking-[0.14em] text-gold-ink xl:hidden"
                    >
                      Serves Layer 5
                    </p>
                  </div>
                </li>
              );
              const bandArrow = (
                <li
                  key="context-services-arrow"
                  role="presentation"
                  aria-hidden="true"
                  className="flex items-center justify-center py-2 xl:hidden"
                >
                  <ArrowDown size={16} strokeWidth={1.5} className="text-gold" />
                </li>
              );
              const bandLink = (
                <li
                  key="context-services-link"
                  role="presentation"
                  aria-hidden="true"
                  className="relative hidden xl:col-start-5 xl:row-start-2 xl:block"
                >
                  <span className="absolute -top-4 right-1/2 bottom-1/2 -left-5 rounded-br-sm border-r-2 border-b-2 border-gold" />
                  <ArrowUp
                    size={16}
                    strokeWidth={2}
                    className="absolute -top-4 left-1/2 -translate-x-1/2 text-gold"
                  />
                </li>
              );
              return [card, connector, band, bandArrow, bandLink];
            }
            return [card, connector];
          }
          return [card];
        })}
      </ol>
      <p className="mt-6 border-t border-rule pt-5 text-sm leading-relaxed text-ink-muted xl:text-base">
        Business Outcomes, formally Outcomes &amp; Measurement in our reference architecture, is where results are measured and fed back so each use case can build on the last. Context Services deliver the context AI needs, at the moment it acts.
      </p>
    </div>
  );
}
