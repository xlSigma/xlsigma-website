import Link from 'next/link';
import type { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  variant?: 'primary' | 'secondary';
  href?: string;
  type?: 'button' | 'submit';
  onClick?: () => void;
  className?: string;
};

const BASE =
  'inline-flex items-center justify-center gap-2 rounded-sm px-7 py-3.5 text-[0.9375rem] font-semibold ' +
  'transition-colors duration-150';

const VARIANTS = {
  primary:   'bg-gold text-navy hover:bg-gold-bright',
  secondary: 'border border-(--btn-line) text-(--btn-line) hover:bg-(--btn-line) hover:text-(--btn-inv)',
} as const;

export default function Button({
  children, variant = 'primary', href, type = 'button', onClick, className = '',
}: Props) {
  const cls = `${BASE} ${VARIANTS[variant]} ${className}`;
  if (href) {
    return <Link href={href} className={cls}>{children}</Link>;
  }
  return <button type={type} onClick={onClick} className={cls}>{children}</button>;
}
