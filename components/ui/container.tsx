import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '../../lib/utils';

const containerVariants = cva('flex flex-col mx-auto', {
  variants: {
    backgroundColor: {
      default: 'transparent'
    }
  },
  defaultVariants: {
    backgroundColor: 'default'
  }
});

export interface ContainerProps
  extends React.HTMLProps<HTMLDivElement>,
    VariantProps<typeof containerVariants> {
  asChild?: boolean;
}

const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, backgroundColor, asChild = false, ...props }, ref) => {
    const Comp = asChild ? React.Fragment : 'div';

    return (
      <Comp
        className={cn(
          containerVariants({ backgroundColor, className }),
          'max-w-full sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl'
        )}
        ref={ref}
        {...props}
      />
    );
  }
);

Container.displayName = 'Container';

export { Container, containerVariants };
