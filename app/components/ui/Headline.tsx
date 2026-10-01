import type { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  level?: 1 | 2 | 3;
  size?: 'display' | 'xl' | 'lg' | 'md';
  id?: string;
  className?: string;
};

const SIZES = {
  display: 'text-display',
  xl:      'text-headline',
  lg:      'text-headline',
  md:      'text-title',
} as const;

export default function Headline({ children, level = 2, size = 'xl', id, className = '' }: Props) {
  const Tag = `h${level}` as 'h1' | 'h2' | 'h3';
  return (
    <Tag
      id={id}
      className={`font-serif font-medium tracking-tight text-balance text-(--fg) ${SIZES[size]} ${className}`}
    >
      {children}
    </Tag>
  );
}
