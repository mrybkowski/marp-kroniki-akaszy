'use client';

import { Section as SectionWrapper } from '@/components/ui/section';
import { H2 } from '@/components/ui/typography-h2';
import { H3 } from '@/components/ui/typography-h3';
import { P } from '@/components/ui/typography-p';
import { useTranslation } from 'react-i18next';
import CarouselWrapper from './CarouselWrapper';

function Section() {
  const { t } = useTranslation();

  return (
    <SectionWrapper
      key="sesje"
      id="sesje"
      sectionBackgroundColor="gray"
      className="flex flex-col gap-5 w-full">
      <div className="flex flex-col">
        <H2 textColor="blue">#{t('sessions:subtitle')}</H2>
        <H3>{t('sessions:title')}</H3>
      </div>

      <div className="flex flex-col gap-5">
        <P>{t('sessions:description')}</P>
        <CarouselWrapper />
      </div>
    </SectionWrapper>
  );
}

export default Section;
