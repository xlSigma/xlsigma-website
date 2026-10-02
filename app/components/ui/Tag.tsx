import type { ReactNode } from 'react';

/** Small outlined label. Follows the section tone, so it works on light and navy. */
export default function Tag({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={`inline-block rounded-sm border border-(--accent)/60 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-(--accent) ${className}`}
    >
      {children}
    </span>
  );
}
