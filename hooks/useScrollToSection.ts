'use client';

import { useCallback } from 'react';

/**
 * Hook to scroll to a section with a given ID.
 * @param targetId - The ID of the target element to scroll to.
 *                   Must be one of the defined SectionId types.
 * @returns A function that triggers the scroll.
 */

type SectionId = 'witajcie' | 'o-nas' | 'sesje' | 'materialy';

function useScrollToSection(targetId: SectionId): () => void {
  const scrollToSection = useCallback(() => {
    const element = document.querySelector(`#${targetId}`);

    if (element) {
      element.scrollIntoView();
    }
  }, [targetId]);

  return scrollToSection;
}

export default useScrollToSection;
