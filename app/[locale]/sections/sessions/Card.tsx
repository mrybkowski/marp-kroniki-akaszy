import { useTranslation } from 'react-i18next';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { H4 } from '@/components/ui/typography-h4';
import { P } from '@/components/ui/typography-p';

interface ISessionCard {
  title: string;
  shortDescription: string;
  image: string;
  signIn?: () => void;
  details?: () => void;
}

function Card({
  title,
  shortDescription,
  image,
  signIn,
  details
}: ISessionCard) {
  const { t } = useTranslation();

  return (
    <div className="bg-slate-900 h-full flex items-start flex-col-reverse md:flex-row justify-start rounded-2xl md:mr-10 mr-0">
      <div className="flex flex-col justify-around p-5 md:w-2/3 lg:w-1/2 h-full gap-5">
        <H4 className="text-white">{title}</H4>
        <P textColor="white">{shortDescription}</P>
        <div className="flex flex-col items-start gap-3">
          <Button variant="linkWhite">{t('common:action.readMore')}</Button>
          <Button>{t('common:action.signUp')}</Button>
        </div>
      </div>
      <div className="md:w-1/3 lg:w-1/2 h-full w-full">
        <Image
          width={300}
          height={300}
          className="object-cover w-full h-full rounded-2xl"
          src={image}
          alt={title}
          loading="lazy"
        />
      </div>
    </div>
  );
}

export default Card;
