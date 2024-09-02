import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '../../lib/utils';

const H1Variants = cva('text-balance lg:text-6xl text-4xl', {
  variants: {
    textColor: {
      default: 'text-slate-900',
      green: 'text-green-800 dark:text-slate-100'
    }
  },
  defaultVariants: {
    textColor: 'default'
  }
});

export interface H1Props
  extends React.HTMLProps<HTMLDivElement>,
    VariantProps<typeof H1Variants> {
  asChild?: boolean;
}

const H1 = React.forwardRef<HTMLDivElement, H1Props>(
  ({ className, textColor, asChild = false, ...props }, ref) => {
    const Comp = asChild ? React.Fragment : 'h1';

    return (
      <Comp
        className={cn(H1Variants({ textColor, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);

H1.displayName = 'H1';

export { H1, H1Variants };
