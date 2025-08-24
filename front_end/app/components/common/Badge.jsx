import { ButtonHTMLAttributes, forwardRef } from 'react';
import { clsx } from 'clsx';

export const Badge = forwardRef(
  ({ className, variant = 'primary', size = 'sm', children, ...props }, ref) => {
    const baseClasses = 'badge font-medium';
    
    const variantClasses = {
      primary: 'badge-primary',
      secondary: 'badge-secondary',
      accent: 'badge-accent',
      neutral: 'badge-neutral',
      ghost: 'badge-ghost'
    };

    const sizeClasses = {
      xs: 'badge-xs',
      sm: 'badge-sm',
      md: 'badge-md',
      lg: 'badge-lg'
    };

    return (
      <span
        ref={ref}
        className={clsx(
          baseClasses,
          variantClasses[variant],
          sizeClasses[size],
          className
        )}
        {...props}
      >
        {children}
      </span>
    );
  }
);

Badge.displayName = 'Badge';
