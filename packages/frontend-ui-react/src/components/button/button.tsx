import { Slot } from '@radix-ui/react-slot';
import { type VariantProps, cva } from 'class-variance-authority';
import { Loader2 } from 'lucide-react';
import { forwardRef } from 'react';
import type { ButtonHTMLAttributes } from 'react';

import { cn } from '../../utils/cn';

export const buttonVariants = cva(
  'inline-flex gap-2 items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground shadow hover:bg-primary/90',
        destructive: 'bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90',
        outline:
          'border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground',
        secondary: 'bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'text-primary underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-9 px-4 py-2',
        sm: 'h-8 rounded-md px-3 text-xs',
        lg: 'h-10 rounded-md px-8',
        icon: 'h-9 w-9',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  /**
   * Replace `button` element with `slot` element (useful for `a` elements)
   */
  asChild?: boolean;

  /**
   * Display the button full width
   * @default false
   */
  fullWidth?: boolean;

  /**
   * Allows to set custom class names for the button
   */
  className?: string;

  /**
   * Variant of the button. The secondary is like a outline button, the tertiary is like a ghost button
   * @default 'primary'
   */
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link';

  /**
   * The button start content.
   */
  startContent?: React.ReactNode;

  /**
   * The button end content.
   */
  endContent?: React.ReactNode;

  /**
   * Whether to show a loading spinner inside the button.
   * @default false
   */
  loading?: boolean;

  /**
   * The type of the button
   * @default button
   */
  type?: 'button' | 'submit' | 'reset';

  /**
   * The size of the button
   * @default md
   */
  size?: 'default' | 'sm' | 'lg' | 'icon';
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      asChild = false,
      fullWidth = false,
      children,
      type = 'button',
      startContent,
      endContent,
      loading = false,
      ...restProps
    },
    outerRef,
  ) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }), fullWidth && 'w-full')}
        ref={outerRef}
        type={type}
        {...restProps}
      >
        {startContent}
        {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
        {children}
        {endContent}
      </Comp>
    );
  },
);

Button.displayName = 'Button';

export { Button };
export default Button;
