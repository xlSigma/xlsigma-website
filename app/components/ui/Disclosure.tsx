import type { ReactNode } from 'react';
import { ChevronDown } from 'lucide-react';

type Props = {
  summary: string;
  children: ReactNode;
  className?: string;
};

/** Native details/summary drawer. Collapsed by default; no client JS. Follows the section tone. */
export default function Disclosure({ summary, children, className = '' }: Props) {
  return (
    <details className={`group border-y border-(--rule) ${className}`}>
      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 text-base font-semibold text-(--fg) marker:hidden [&::-webkit-details-marker]:hidden">
        <span>{summary}</span>
        <ChevronDown
          size={18}
          strokeWidth={1.75}
          aria-hidden="true"
          className="shrink-0 text-(--accent) transition-transform group-open:rotate-180 motion-reduce:transition-none"
        />
      </summary>
      <div className="pb-5 text-base leading-relaxed text-(--fg-muted)">{children}</div>
    </details>
  );
}
