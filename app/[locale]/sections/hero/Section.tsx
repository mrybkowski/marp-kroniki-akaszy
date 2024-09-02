'use client';

import { Button } from '@/components/ui/button';
import { Section as SectionWrapper } from '@/components/ui/section';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';
import { useScrollToSection } from '@/hooks';
import { H1 } from '@/components/ui/typography-h1';
import { P } from '@/components/ui/typography-p';

function Section() {
  const { t } = useTranslation();
  const scrollToAboutSection = useScrollToSection('o-nas');

  return (
    <SectionWrapper
      key="witajcie"
      id="witajcie"
      className="flex lg:flex-row flex-col-reverse items-center gap-5">
      <div className="flex flex-col lg:w-1/2 w-full gap-5">
        <H1 textColor="green">{t('common:app.title')}</H1>
        <P fontWeight={'bold'}>{t('common:app.prayer')}</P>
        <P>~ {t('common:app.authors')}</P>
        <Button variant="outlineGreen" onClick={scrollToAboutSection}>
          {t('common:action.start')}
        </Button>
      </div>
      <div className="flex flex-col lg:w-1/2 w-full gap-5">
        <Image
          className="rounded-2xl"
          width={750}
          height={500}
          src="/hero.webp"
          alt="Hero zdjęcie"
          priority={true}
        />
      </div>
    </SectionWrapper>
  );
}

export default Section;
