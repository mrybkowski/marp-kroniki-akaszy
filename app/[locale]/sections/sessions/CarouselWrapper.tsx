import { useTranslation } from 'react-i18next';
import Card from './Card';
import { imageDatabase } from '@/lib/utils';
import Carousel from '@/components/ui/carousel';

function CarouselWrapper() {
  const { t } = useTranslation();

  const sessionData = [
    {
      key: '1',
      titleKey: 'sessions:type.akasha.title',
      descriptionKey: 'sessions:type.akasha.shortDescription',
      image: imageDatabase.akashaSession
    },
    {
      key: '2',
      titleKey: 'sessions:type.hellinger.title',
      descriptionKey: 'sessions:type.hellinger.shortDescription',
      image: imageDatabase.systemSettingsSession
    },
    {
      key: '3',
      titleKey: 'sessions:type.regression.title',
      descriptionKey: 'sessions:type.regression.shortDescription',
      image: imageDatabase.regressionSessions
    },
    {
      key: '4',
      titleKey: 'sessions:type.bioenergotherapy.title',
      descriptionKey: 'sessions:type.bioenergotherapy.shortDescription',
      image: imageDatabase.bioenergotherapy
    },
    {
      key: '5',
      titleKey: 'sessions:type.radiesthesia.title',
      descriptionKey: 'sessions:type.radiesthesia.shortDescription',
      image: imageDatabase.radiesthesia
    },
    {
      key: '6',
      titleKey: 'sessions:type.decoding.title',
      descriptionKey: 'sessions:type.decoding.shortDescription',
      image: imageDatabase.decoding
    }
  ];

  const sessionItems = sessionData.map(
    ({ key, titleKey, descriptionKey, image }) => (
      <Card
        key={key}
        title={t(titleKey)}
        shortDescription={t(descriptionKey)}
        image={image}
      />
    )
  );

  return <Carousel items={sessionItems} />;
}

export default CarouselWrapper;
