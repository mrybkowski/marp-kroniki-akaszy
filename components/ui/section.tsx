import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '../../lib/utils';

const sectionVariants = cva('', {
  variants: {
    sectionBackgroundColor: {
      default: 'bg-transparent',
      gray: 'bg-slate-100 dark:bg-slate-800',
      white: 'bg-white',
      green:
        'bg-[rgb(33,107,100)] bg-[radial-gradient(circle,rgba(33,107,100,1)_0%,rgba(19,84,78,1)_100%)]'
    },
    sectionWidth: {
      default:
        'max-w-full sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl'
    },
    sectionMargin: {
      default: 'mx-auto'
    },
    sectionRounded: {
      default: 'rounded-2xl'
    },
    sectionPadding: {
      default: 'p-10'
    }
  },
  defaultVariants: {
    sectionBackgroundColor: 'default',
    sectionWidth: 'default',
    sectionMargin: 'default',
    sectionRounded: 'default',
    sectionPadding: 'default'
  }
});

export interface SectionProps
  extends React.HTMLProps<HTMLDivElement>,
    VariantProps<typeof sectionVariants> {
  asChild?: boolean;
}

const Section = React.forwardRef<HTMLDivElement, SectionProps>(
  (
    {
      className,
      sectionBackgroundColor,
      sectionWidth,
      sectionMargin,
      sectionRounded,
      sectionPadding,
      asChild = false,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? React.Fragment : 'section';

    return (
      <Comp
        data-aos="fade-up"
        className={cn(
          sectionVariants({
            sectionBackgroundColor,
            sectionWidth,
            sectionMargin,
            sectionRounded,
            sectionPadding,
            className
          })
        )}
        ref={ref}
        {...props}
      />
    );
  }
);

Section.displayName = 'Section';

export { Section, sectionVariants };
