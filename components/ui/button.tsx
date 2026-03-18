import type React from 'react';

import { cn } from '@/lib/utils';

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'default' | 'ghost';
};

export function Button({
  className,
  variant = 'default',
  type,
  ...props
}: ButtonProps) {
  return (
    <button
      type={type ?? 'button'}
      className={cn(
        'inline-flex items-center justify-center whitespace-nowrap transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50',
        variant === 'ghost' && 'bg-transparent',
        className,
      )}
      {...props}
    />
  );
}

