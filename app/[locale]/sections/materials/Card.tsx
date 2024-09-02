import { useTranslation } from 'react-i18next';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { H4 } from '@/components/ui/typography-h4';
import { P } from '@/components/ui/typography-p';

interface ISessionCard {
  title: string;
  price: number;
  shortDescription: string;
  image: string;
  signIn?: () => void;
  details?: () => void;
}

function Card({
  title,
  price,
  shortDescription,
  image,
  signIn,
  details
}: ISessionCard) {
  const { t } = useTranslation();

  return (
    <div className="bg-slate-900 h-full flex rounded-2xl md:mr-10 mr-0 relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center filter blur-sm z-0"
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className="relative flex flex-col-reverse justify-center lg:flex-row p-5 w-full bg-slate-900/75 gap-10 rounded-2xl z-10">
        <div className="flex flex-col items-center w-full gap-5 lg:w-1/2">
          <div className="flex flex-col gap-10 h-full justify-between">
            <div className="flex flex-col gap-2">
              <H4 textColor="white">{title}</H4>
              <P textColor="white" fontWeight="bold">
                {price}&nbsp;zł
              </P>
              <P textColor="white">{shortDescription}</P>
            </div>
            <Button variant="outlineWhite">{t('common:action.details')}</Button>
          </div>
        </div>
        <div className="flex items-center lg:justify-center">
          <Image
            width={300}
            height={300}
            className="rounded-2xl"
            src={image}
            alt={title}
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}

export default Card;
