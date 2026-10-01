type Props = {
  /** gold: short accent rule. hairline: full-width divider that follows the section tone. */
  variant?: 'gold' | 'hairline';
  className?: string;
};

export default function Rule({ variant = 'hairline', className = '' }: Props) {
  const style = variant === 'gold' ? 'h-0.5 w-14 bg-gold' : 'h-px w-full bg-(--rule)';
  return <div role="presentation" aria-hidden="true" className={`${style} ${className}`} />;
}
