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
        <div className="flex flex-col just gap-5 justify-end lg:w-1/2 sm:pt-0 pt-5">
          <div className="flex flex-col">
            <h2 className="text-white font-bold">#{t('about:subtitle')}</h2>
            <h3 className="text-balance lg:text-5xl text-4xl text-green-400">
              {t('about:title')}
            </h3>
          </div>
          <div className="text-white">
            <div
              dangerouslySetInnerHTML={{
                __html: t('about:description')
              }}></div>
            <br />
            <Button variant="link" className="text-white">
              {t('common:action.readMore')}
            </Button>
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row mt-5 gap-10 w-full">
        <div
          className="flex flex-col p-5 lg:w-1/3 gap-5 bg-white rounded-2xl"
          data-aos="fade-up">
          <div className="flex flex-row items-center justify-between">
            <h4 className="text-xl font-bold">
              {t('about:values.contact.title')}
            </h4>
            <ImportContacts fontSize="medium" />
          </div>
          <p className="text-balance">
            {t('about:values.contact.description')}
          </p>
        </div>

        <div
          className="flex flex-col p-5 lg:w-1/3 gap-5 bg-white rounded-2xl"
          data-aos="fade-up">
          <div className="flex flex-row items-center justify-between">
            <h4 className="text-xl font-bold">
              {t('about:values.philosophy.title')}
            </h4>
            <LightbulbOutlined fontSize="medium" />
          </div>
          <p className="text-balance">
            {t('about:values.philosophy.description')}
          </p>
        </div>

        <div
          className="flex flex-col p-5 lg:w-1/3 gap-5 bg-white rounded-2xl"
          data-aos="fade-up">
          <div className="flex flex-row items-center justify-between">
            <h4 className="text-xl font-bold">
              {t('about:values.trust.title')}
            </h4>
            <Handshake fontSize="medium" />
          </div>
          <p className="text-balance">{t('about:values.trust.description')}</p>
        </div>
      </div>
    </SectionWrapper>
  );
}

export default Section;
