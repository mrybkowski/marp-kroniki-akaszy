import { useIsMobile } from '@/hooks';
import { cn } from '@/lib/utils';
import React, { useRef, useState } from 'react';
import NavigationArrow from './navigation-arrow';

interface CarouselProps {
  items: React.ReactNode[];
  isWhiteNavigation?: boolean;
}

function Carousel({ items, isWhiteNavigation }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const isMobile = useIsMobile();
  const startXRef = useRef<number | null>(null);
  const carouselRef = useRef<HTMLDivElement | null>(null);

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - (isMobile ? 1 : 0.5));
    }
  };

  const handleNext = () => {
    if (isMobile && currentIndex < items.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else if (!isMobile && currentIndex < items.length - 2) {
      setCurrentIndex(currentIndex + 0.5);
    }
  };

  const handleTouchStart = (event: React.TouchEvent) => {
    startXRef.current = event.touches[0].clientX;
  };

  const handleTouchMove = (event: React.TouchEvent) => {
    if (startXRef.current !== null) {
      const diff = startXRef.current - event.touches[0].clientX;
      if (diff > 50 && !isNextDisabled()) {
        handleNext();
        startXRef.current = null;
      } else if (diff < -50 && !isPrevDisabled()) {
        handlePrev();
        startXRef.current = null;
      }
    }
  };

  const handleMouseDown = (event: React.MouseEvent) => {
    startXRef.current = event.clientX;
  };

  const handleMouseMove = (event: React.MouseEvent) => {
    if (startXRef.current !== null) {
      const diff = startXRef.current - event.clientX;
      if (diff > 50 && !isNextDisabled()) {
        handleNext();
        startXRef.current = null;
      } else if (diff < -50 && !isPrevDisabled()) {
        handlePrev();
        startXRef.current = null;
      }
    }
  };

  const handleMouseUp = () => {
    startXRef.current = null;
  };

  const isPrevDisabled = () => currentIndex === 0;

  const isNextDisabled = () => {
    return (
      (isMobile && currentIndex === items.length - 1) ||
      (!isMobile && currentIndex * 2 === items.length - 2)
    );
  };

  return (
    <div
      id="carouselRoot"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      ref={carouselRef}>
      <div className="flex overflow-hidden justify-center transition-transform ease duration-500">
        <div
          className="flex transition-transform ease duration-500 relative"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
            width: '100%'
          }}>
          {items.map((item, index) => (
            <div
              className="cursor-grab"
              style={{
                minWidth: isMobile ? '100%' : '50%'
              }}
              key={index}>
              {item}
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-between items-center w-full mt-5">
        <div className="flex relative gap-1">
          <NavigationArrow
            onClick={handlePrev}
            isDisabled={isPrevDisabled()}
            isArrowBack
          />
          <NavigationArrow
            onClick={handleNext}
            isDisabled={isNextDisabled()}
            isArrowForward
          />
        </div>
        <div className="md:mr-10 mr-0">
          <span color={isWhiteNavigation ? 'white' : 'unset'}>
            <strong>
              {isMobile ? currentIndex + 1 : currentIndex * 2 + 1}
            </strong>
            <span>
              &nbsp;/&nbsp;{isMobile ? items.length : items.length - 1}
            </span>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Carousel;
