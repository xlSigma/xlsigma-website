import Link from 'next/link';
import type { ReactNode } from 'react';

export function CapabilityList({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <ol className={`border-b border-(--rule) ${className}`}>{children}</ol>;
}

type RowProps = {
  index: number;
  title: string;
  children: ReactNode;
  href?: string;
};

/** One numbered row: numeral, serif title, description. Rows are divided by thin rules. */
export function CapabilityRow({ index, title, children, href }: RowProps) {
  const numeral = String(index).padStart(2, '0');
  const heading = (
    <h3 className="font-serif text-title font-medium text-(--fg) text-balance">{title}</h3>
  );
  return (
    <li className="grid gap-x-8 gap-y-3 border-t border-(--rule) py-8 md:grid-cols-12 md:py-10">
      <span
        aria-hidden="true"
        className="font-serif text-title font-medium tabular-nums text-(--accent) md:col-span-1"
      >
        {numeral}
      </span>
      <div className="md:col-span-5">
        {href ? <Link href={href} className="hover:underline underline-offset-4">{heading}</Link> : heading}
      </div>
      <p className="text-base leading-relaxed text-(--fg-muted) md:col-span-6">{children}</p>
    </li>
  );
}

export default CapabilityRow;
