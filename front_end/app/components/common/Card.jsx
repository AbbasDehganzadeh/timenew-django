import { HTMLAttributes, forwardRef } from 'react';
import { clsx } from 'clsx';

const Card = forwardRef(
  ({ className, variant = 'default', hover = false, children, ...props }, ref) => {
    const baseClasses = 'card bg-base-100';
    
    const variantClasses = {
      default: 'shadow-sm',
      bordered: 'border border-base-300',
      compact: 'card-compact shadow-sm'
    };

    return (
      <div
        ref={ref}
        className={clsx(
          baseClasses,
          variantClasses[variant],
          hover && 'hover:shadow-md transition-shadow duration-300',
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = 'Card';

const CardBody = forwardRef(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={clsx('card-body', className)} {...props} />
  )
);

CardBody.displayName = 'CardBody';

const CardTitle = forwardRef(
  ({ className, ...props }, ref) => (
    <h2 ref={ref} className={clsx('card-title', className)} {...props} />
  )
);

CardTitle.displayName = 'CardTitle';

const CardActions = forwardRef(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={clsx('card-actions', className)} {...props} />
  )
);

CardActions.displayName = 'CardActions';

export { Card, CardBody, CardTitle, CardActions };
