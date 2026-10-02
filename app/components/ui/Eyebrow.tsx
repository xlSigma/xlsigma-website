import type { ReactNode } from 'react';

export default function Eyebrow({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <p className={`font-sans text-[0.8125rem] font-semibold uppercase tracking-[0.18em] text-(--accent) ${className}`}>
      {children}
    </p>
  );
}
