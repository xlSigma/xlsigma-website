import type { ReactNode } from 'react';

export default function PullQuote({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <div className={`border-l-2 border-gold pl-6 md:pl-8 ${className}`}>
      <p className="font-serif text-title font-medium leading-snug text-balance text-(--fg)">
        {children}
      </p>
    </div>
  );
}
