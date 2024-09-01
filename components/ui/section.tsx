import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '../../lib/utils';

const sectionVariants = cva('mx-auto rounded-2xl p-10', {
  variants: {
    backgroundColor: {
      default: 'bg-white',
      gray: 'bg-zinc-100',
      white: 'bg-white'
    }
  },
  defaultVariants: {
    backgroundColor: 'default'
  }
});

export interface SectionProps
  extends React.HTMLProps<HTMLDivElement>,
    VariantProps<typeof sectionVariants> {
  asChild?: boolean;
}

const Section = React.forwardRef<HTMLDivElement, SectionProps>(
  ({ className, backgroundColor, asChild = false, ...props }, ref) => {
    const Comp = asChild ? React.Fragment : 'div';

    return (
      <Comp
        className={cn(
          sectionVariants({ backgroundColor, className }),
          'max-w-full sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl'
        )}
        ref={ref}
        {...props}
      />
    );
  }
);

Section.displayName = 'Section';

export { Section, sectionVariants };
