import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '../../lib/utils';

const H2Variants = cva('text-balance font-bold', {
  variants: {
    textColor: {
      default: 'text-slate-800 dark:text-white',
      white: 'text-white',
      blue: 'text-blue-700 dark:text-white'
    }
  },
  defaultVariants: {
    textColor: 'default'
  }
});

export interface H2Props
  extends React.HTMLProps<HTMLDivElement>,
    VariantProps<typeof H2Variants> {
  asChild?: boolean;
}

const H2 = React.forwardRef<HTMLDivElement, H2Props>(
  ({ className, textColor, asChild = false, ...props }, ref) => {
    const Comp = asChild ? React.Fragment : 'h2';

    return (
      <Comp
        className={cn(H2Variants({ textColor, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);

H2.displayName = 'H2';

export { H2, H2Variants };
