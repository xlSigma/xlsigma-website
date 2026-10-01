import Image from 'next/image';
import type { ReactNode } from 'react';
import Section from './Section';
import ContentContainer from './ContentContainer';

/** Navy hero panel for interior pages: medallion centered at the top, content below. */
export default function MedallionHero({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <Section variant="navy" padded={false} className={className}>
      <ContentContainer className="py-16 text-center md:py-24">
        <Image
          src="/medallion.png"
          alt="xlSigma medallion"
          width={112}
          height={112}
          priority
          className="mx-auto mb-8 h-24 w-24 md:h-28 md:w-28"
        />
        {children}
      </ContentContainer>
    </Section>
  );
}
