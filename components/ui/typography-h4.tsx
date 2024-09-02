import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '../../lib/utils';

const H4Variants = cva('text-balance font-bold text-xl', {
  variants: {
    textColor: {
      default: 'text-slate-900 dark:text-white',
      white: 'text-white'
    }
  },
  defaultVariants: {
    textColor: 'default'
  }
});

export interface H4Props
  extends React.HTMLProps<HTMLDivElement>,
    VariantProps<typeof H4Variants> {
  asChild?: boolean;
}

const H4 = React.forwardRef<HTMLDivElement, H4Props>(
  ({ className, textColor, asChild = false, ...props }, ref) => {
    const Comp = asChild ? React.Fragment : 'h4';

    return (
      <Comp
        className={cn(H4Variants({ textColor, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);

H4.displayName = 'H4';

export { H4, H4Variants };
