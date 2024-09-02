import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '../../lib/utils';

const H3Variants = cva('text-balance lg:text-5xl text-4xl', {
  variants: {
    textColor: {
      default: 'text-slate-900 dark:text-white text-bold',
      green: 'text-green-400'
    }
  },
  defaultVariants: {
    textColor: 'default'
  }
});

export interface H3Props
  extends React.HTMLProps<HTMLDivElement>,
    VariantProps<typeof H3Variants> {
  asChild?: boolean;
}

const H3 = React.forwardRef<HTMLDivElement, H3Props>(
  ({ className, textColor, asChild = false, ...props }, ref) => {
    const Comp = asChild ? React.Fragment : 'h3';

    return (
      <Comp
        className={cn(H3Variants({ textColor, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);

H3.displayName = 'H3';

export { H3, H3Variants };
