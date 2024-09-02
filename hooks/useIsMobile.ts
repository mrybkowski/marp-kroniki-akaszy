'use client';

import { useState, useEffect } from 'react';

/**
 * Custom hook that determines whether the current viewport width
 * is considered "mobile" based on a specified breakpoint.
 *
 * @param {number} [breakpoint=1280] - The maximum width (in pixels) for the viewport to be considered "mobile".
 *                                     Defaults to 1280 pixels.
 * @returns {boolean} - A boolean value indicating whether the viewport width
 *                      is less than or equal to the specified breakpoint.
 */

const useIsMobile = (breakpoint = 1280) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= breakpoint);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, [breakpoint]);

  return isMobile;
};

export default useIsMobile;
