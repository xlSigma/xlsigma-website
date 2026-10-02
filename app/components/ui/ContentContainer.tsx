import type { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  width?: 'content' | 'prose';
  className?: string;
};

export default function ContentContainer({ children, width = 'content', className = '' }: Props) {
  const max = width === 'prose' ? 'max-w-prose' : 'max-w-content';
  return <div className={`mx-auto w-full px-6 md:px-10 ${max} ${className}`}>{children}</div>;
}
