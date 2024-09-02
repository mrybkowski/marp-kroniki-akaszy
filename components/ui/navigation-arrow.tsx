import { useTranslation } from 'react-i18next';
import { Button } from './button';
import { ArrowLeftIcon, ArrowRightIcon } from '@radix-ui/react-icons';

interface INavigationArrow {
  onClick?: () => void;
  isDisabled?: boolean;
  isArrowBack?: boolean;
  isArrowForward?: boolean;
}

function NavigationArrow({
  onClick,
  isDisabled,
  isArrowBack,
  isArrowForward
}: INavigationArrow) {
  const { t } = useTranslation();

  return (
    <Button
      variant="outline"
      onClick={onClick}
      disabled={isDisabled}
      className="cursor-pointer"
      aria-label={isArrowBack ? t('aria.slider.back') : t('aria.slider.next')}>
      {isArrowBack && <ArrowLeftIcon />}
      {isArrowForward && <ArrowRightIcon />}
    </Button>
  );
}

export default NavigationArrow;
