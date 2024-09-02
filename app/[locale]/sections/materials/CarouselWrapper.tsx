import { useTranslation } from 'react-i18next';
import Card from './Card';
import { imageDatabase } from '@/lib/utils';
import Carousel from '@/components/ui/carousel';

function CarouselWrapper() {
  const { t } = useTranslation();

  const cardData = [
    {
      key: '1',
      titleKey: 'materials:type.nonPersonalizedReadings.title',
      descriptionKey: 'materials:type.nonPersonalizedReadings.shortDescription',
      image: imageDatabase.nonPersonalizedReadings
    },
    {
      key: '2',
      titleKey: 'materials:type.lawsOfTheUniverse.title',
      descriptionKey: 'materials:type.lawsOfTheUniverse.shortDescription',
      image: imageDatabase.lawsOfTheUniverse
    },
    {
      key: '3',
      titleKey: 'materials:type.consciousBreathing.title',
      descriptionKey: 'materials:type.consciousBreathing.shortDescription',
      image: imageDatabase.consciousBreathing
    },
    {
      key: '4',
      titleKey: 'materials:type.sampleSystemSettings.title',
      descriptionKey: 'materials:type.sampleSystemSettings.shortDescription',
      image: imageDatabase.sampleSystemSettings
    }
  ];

  const sessionItems = cardData.map(
    ({ key, titleKey, descriptionKey, image }) => (
      <Card
        key={key}
        title={t(titleKey)}
        price={0}
        shortDescription={t(descriptionKey)}
        image={image}
      />
    )
  );

  return <Carousel items={sessionItems} />;
}

export default CarouselWrapper;
