import { ArrowDown, ArrowRight } from 'lucide-react';

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
        aria-label="Semantic-to-Action Architecture stages"
        className="list-none p-0 m-0 flex flex-col xl:flex-row xl:items-stretch"
      >
        {STAGES.flatMap((stage, i) => {
          const card = (
            <li
              key={stage.title}
              className={[
                'flex-1 min-w-0 rounded-xl p-4 xl:p-5 flex flex-col gap-2',
                stage.featured
                  ? 'bg-gold-pale border-2 border-gold'
                  : 'bg-white border-2 border-slate-200 hover:border-gold/50 hover:shadow-sm transition-all',
              ].join(' ')}
            >
              <span className="text-xs font-mono font-semibold text-gold tracking-widest">
                {stage.num}
              </span>
              <h3 className="font-bold text-navy text-sm leading-snug">
                {stage.title}
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                {stage.desc}
              </p>
            </li>
          );

          if (i < STAGES.length - 1) {
            const connector = (
              <li
                key={`connector-${i}`}
                role="presentation"
                aria-hidden="true"
                className="flex xl:flex-col items-center justify-center
                           py-2 xl:py-0 xl:px-2 flex-shrink-0"
              >
                <ArrowDown
                  size={16}
                  strokeWidth={1.5}
                  className="xl:hidden text-slate-300"
                />
                <ArrowRight
                  size={16}
                  strokeWidth={1.5}
                  className="hidden xl:block text-slate-300"
                />
              </li>
            );
            return [card, connector];
          }
          return [card];
        })}
      </ol>
    </div>
  );
}
