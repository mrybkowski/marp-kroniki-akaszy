'use client';

import { Button } from '@/components/ui/button';
import { Section as SectionWrapper } from '@/components/ui/section';
import { useTranslation } from 'react-i18next';
import useScrollToSection from '@/hooks/useScrollToSection';
import Image from 'next/image';

function Section() {
  const { t } = useTranslation();
  const scrollToAboutSection = useScrollToSection('o-nas');

  return (
    <SectionWrapper
      key="witajcie"
      id="witajcie"
      sectionBackgroundColor="gray"
      className="flex lg:flex-row flex-col-reverse items-center gap-5">
      <div className="flex flex-col lg:w-1/2 w-full gap-5">
        <h1 className="text-green-900 text-balance lg:text-6xl text-4xl">
          {t('common:app.title')}
        </h1>
        <span className="text-balance">
          <strong>{t('common:app.prayer')}</strong>
          <br />~ {t('common:app.authors')}
        </span>
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
