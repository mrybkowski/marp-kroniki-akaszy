import { useTranslation } from 'react-i18next';

import Card from './Card';
import { imageDatabase } from '@/lib/utils';
import Carousel from '@/components/ui/carousel';

function CarouselWrapper() {
  const { t } = useTranslation();

  const sessionItems = [
    <Card
      key="1"
      title={t('sessions:type.akasha.title')}
      shortDescription={t('sessions:type.akasha.shortDescription')}
      image={imageDatabase.akashaSession}
    />,
    <Card
      key="2"
      title={t('sessions:type.hellinger.title')}
      shortDescription={t('sessions:type.hellinger.shortDescription')}
      image={imageDatabase.systemSettingsSession}
    />,
    <Card
      key="3"
      title={t('sessions:type.regression.title')}
      shortDescription={t('sessions:type.regression.shortDescription')}
      image={imageDatabase.regressionSessions}
    />,
    <Card
      key="4"
      title={t('sessions:type.bioenergotherapy.title')}
      shortDescription={t('sessions:type.bioenergotherapy.shortDescription')}
      image={imageDatabase.bioenergotherapy}
    />,
    <Card
      key="5"
      title={t('sessions:type.radiesthesia.title')}
      shortDescription={t('sessions:type.radiesthesia.shortDescription')}
      image={imageDatabase.radiesthesia}
    />,
    <Card
      key="6"
      title={t('sessions:type.decoding.title')}
      shortDescription={t('sessions:type.decoding.shortDescription')}
      image={imageDatabase.decoding}
    />
  ];

  return <Carousel items={sessionItems} />;
}

export default CarouselWrapper;
