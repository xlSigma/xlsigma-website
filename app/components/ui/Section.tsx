import type { CSSProperties, ReactNode } from 'react';

export type SectionVariant = 'white' | 'paper' | 'navy';

type Props = {
  children: ReactNode;
  variant?: SectionVariant;
  id?: string;
  /** Set false when the section manages its own vertical padding (heroes). */
  padded?: boolean;
  className?: string;
  style?: CSSProperties;
  'aria-labelledby'?: string;
};

const VARIANTS: Record<SectionVariant, string> = {
  white: 'bg-white tone-light',
  paper: 'bg-paper tone-light tone-paper',
  navy:  'bg-navy tone-navy',
};

export default function Section({
  children, variant = 'white', id, padded = true, className = '', style, ...rest
}: Props) {
  return (
    <section
      id={id}
      style={style}
      aria-labelledby={rest['aria-labelledby']}
      className={`${VARIANTS[variant]} ${padded ? 'py-section' : ''} text-(--fg) ${className}`}
    >
      {children}
    </section>
  );
}
