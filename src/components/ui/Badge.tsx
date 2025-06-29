import React from 'react';
import type { BadgeVariant, BadgeSize } from '../../types';

interface BadgeProps {
  readonly children: React.ReactNode;
  readonly variant?: BadgeVariant;
  readonly size?: BadgeSize;
  readonly className?: string;
}

const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'default',
  size = 'md',
  className = ''
}) => {
  const baseClasses = 'inline-flex items-center font-medium rounded-full transition-all duration-300 hover:scale-105' as const;
  
  const variantClasses: Record<BadgeVariant, string> = {
    default: 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300',
    primary: 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg',
    secondary: 'bg-gradient-to-r from-slate-100 to-slate-50 dark:from-slate-700 dark:to-slate-600 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-600',
    success: 'bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-lg',
    warning: 'bg-gradient-to-r from-yellow-500 to-orange-500 text-white shadow-lg',
    error: 'bg-gradient-to-r from-red-500 to-pink-500 text-white shadow-lg'
  } as const;
  
  const sizeClasses: Record<BadgeSize, string> = {
    sm: 'px-2 py-1 text-xs',
    md: 'px-3 py-1 text-sm',
    lg: 'px-4 py-2 text-base'
  } as const;
  
  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  return (
    <span className={classes}>
      {children}
    </span>
  );
};

export default Badge;