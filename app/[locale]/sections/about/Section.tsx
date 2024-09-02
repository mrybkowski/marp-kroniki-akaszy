'use client';

import { Button } from '@/components/ui/button';
import { Section as SectionWrapper } from '@/components/ui/section';
import pagesConfig from '@/pages.config';
import { useTranslation } from 'react-i18next';
import {
  Handshake,
  ImportContacts,
  LightbulbOutlined
} from '@mui/icons-material';
import { H2 } from '@/components/ui/typography-h2';
import { H3 } from '@/components/ui/typography-h3';
import Values from './Values';

function Section() {
  const { t } = useTranslation();

  return (
    <SectionWrapper
      key="o-nas"
      id="o-nas"
      sectionBackgroundColor="green"
      className="flex lg:flex-col flex-col items-center gap-10">
      <div className="flex flex-col lg:flex-row w-full gap-10">
        <div className="lg:w-1/2">
          <iframe
            className="rounded-2xl w-full h-full aspect-video"
            src={pagesConfig.home.about.youtube}
            title="O nas - film prezentacyjny"
          />
        </div>
        <div className="flex flex-col gap-5 justify-end lg:w-1/2 sm:pt-0 pt-5">
          <div className="flex flex-col">
            <H2 textColor="white">#{t('about:subtitle')}</H2>
            <H3 textColor="green">{t('about:title')}</H3>
          </div>
          <div
            className="text-white"
            dangerouslySetInnerHTML={{
              __html: t('about:description')
            }}></div>
          <Button variant="linkWhite">{t('common:action.readMore')}</Button>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row mt-5 gap-10 w-full">
        <Values
          title={t('about:values.contact.title')}
          description={t('about:values.contact.description')}
          icon={<ImportContacts fontSize="medium" />}
        />
        <Values
          title={t('about:values.philosophy.title')}
          description={t('about:values.philosophy.description')}
          icon={<LightbulbOutlined fontSize="medium" />}
        />
        <Values
          title={t('about:values.trust.title')}
          description={t('about:values.trust.description')}
          icon={<Handshake fontSize="medium" />}
        />
      </div>
    </SectionWrapper>
  );
}

export default Section;
