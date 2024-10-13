import * as React from 'react';

import { Label } from '@radix-ui/react-label';
import { SearchIcon } from 'lucide-react';
import { cn } from '../../utils/cn';

export interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  invalid?: boolean;
}
export interface InputProps extends InputFieldProps {
  /**
   * An error message for the input.
   */
  error?: string | undefined | string[];

  /**
   * The content to display as the label.
   */
  label?: React.ReactNode;

  /**
   * An additional description for the input.
   */
  description?: string;

  /**
   * Handler that is called when the element's value changes
   */
  onValueChange?: (value: string) => void;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, label, error, description, onChange, onValueChange, ...props }, ref) => {
    const elemId = React.useId();

    const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
      // console.log('handleChange', event.target.value, onValueChange, onChange);
      onValueChange?.(event.target.value);
      onChange?.(event);
    };
    const errorMessage = Array.isArray(error) ? error.join(', ') : error;

    const ariaProps = {
      ...(!!errorMessage && { 'aria-invalid': true }),
      ...(!!errorMessage && { 'aria-errormessage': `${elemId}-msg` }),
      ...(!!description && { 'aria-describedby': `${elemId}-desc` }),
    };

    return (
      <div className="grid w-full gap-1.5">
        {label && <Label htmlFor="email">{label}</Label>}
        {type === 'search' && (
          <SearchIcon className="absolute top-2.5 left-2.5 h-4 w-4 text-gray-500" />
        )}
        <input
          type={type}
          className={cn(
            'flex h-10 w-full rounded-md border bg-background px-3 py-2',
            'text-sm ring-offset-background file:border-0 file:bg-transparent file:font-medium',
            'file:text-foreground file:text-sm placeholder:text-muted-foreground focus-visible:outline-none',
            'focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ',
            'disabled:cursor-not-allowed disabled:opacity-50',
            errorMessage ? 'border-destructive' : 'border-input',
            type === 'search' && 'pl-8',
            className,
          )}
          onChange={handleChange}
          ref={ref}
          {...props}
          {...ariaProps}
        />
        {description && (
          <p id={`${elemId}-desc`} className={cn('text-muted-foreground text-sm')}>
            {description}
          </p>
        )}
        {!!errorMessage && (
          <p id={`${elemId}-msg`} className="text-destructive text-sm">
            {errorMessage}
          </p>
        )}
      </div>
    );
  },
);
Input.displayName = 'Input';

export default Input;
export { Input };
