import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '../../lib/utils';

const containerVariants = cva('mx-auto px-4 sm:px-6 lg:px-8', {
  variants: {
    variant: {
      default: 'max-w-7xl',
      narrow: 'max-w-3xl',
      wide: 'max-w-9xl'
    },
    padding: {
      default: 'py-4',
      compact: 'py-2',
      spacious: 'py-8'
    }
  },
  defaultVariants: {
    variant: 'default',
    padding: 'default'
  }
});

export interface ContainerProps
  extends React.HTMLProps<HTMLDivElement>,
    VariantProps<typeof containerVariants> {
  asChild?: boolean;
}

const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, variant, padding, asChild = false, ...props }, ref) => {
    const Comp = asChild ? React.Fragment : 'div';

    return (
      <Comp
        className={cn(
          containerVariants({ variant, padding, className }),
          'max-w-full sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl 2xl:max-w-5xl' // Add responsive max-width classes
        )}
        ref={ref}
        {...props}
      />
    );
  }
);

Container.displayName = 'Container';

export { Container, containerVariants };
