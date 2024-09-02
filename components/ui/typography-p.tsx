import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '../../lib/utils';

const PVariants = cva('text-balance', {
  variants: {
    textColor: {
      default: 'text-slate-700 dark:text-slate-300'
    },
    fontWeight: {
      default: 'font-normal',
      bold: 'font-bold'
    }
  },
  defaultVariants: {
    textColor: 'default',
    fontWeight: 'default'
  }
});

export interface PProps
  extends React.HTMLProps<HTMLDivElement>,
    VariantProps<typeof PVariants> {
  asChild?: boolean;
}

const P = React.forwardRef<HTMLDivElement, PProps>(
  ({ className, textColor, fontWeight, asChild = false, ...props }, ref) => {
    const Comp = asChild ? React.Fragment : 'p';

    return (
      <Comp
        className={cn(PVariants({ textColor, fontWeight, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);

P.displayName = 'P';

export { P, PVariants };
