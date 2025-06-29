import React from 'react';
import type { CardVariant, CardPadding } from '../../types';

interface CardProps {
  readonly children: React.ReactNode;
  readonly className?: string;
  readonly hover?: boolean;
  readonly padding?: CardPadding;
  readonly variant?: CardVariant;
  readonly onMouseEnter?: () => void;
  readonly onMouseLeave?: () => void;
}

const Card: React.FC<CardProps> = ({
  children,
  className = '',
  hover = false,
  padding = 'md',
  variant = 'default',
  onMouseEnter,
  onMouseLeave
}) => {
  const baseClasses = 'rounded-3xl transition-all duration-500 border' as const;
  
  const variantClasses: Record<CardVariant, string> = {
    default: 'bg-white dark:bg-slate-900 border-slate-200/50 dark:border-slate-700/50 shadow-lg',
    gradient: 'bg-gradient-to-br from-slate-50 to-white dark:from-slate-800 dark:to-slate-700 border-slate-100 dark:border-slate-600 shadow-xl',
    glass: 'bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl border-slate-200/50 dark:border-slate-700/50 shadow-2xl'
  } as const;
  
  const paddingClasses: Record<CardPadding, string> = {
    none: '',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8'
  } as const;
  
  const hoverClasses = hover 
    ? 'hover:shadow-2xl hover:-translate-y-2 hover:border-blue-200 dark:hover:border-blue-700 cursor-pointer' 
    : '';
  
  const classes = `${baseClasses} ${variantClasses[variant]} ${paddingClasses[padding]} ${hoverClasses} ${className}`;

  return (
    <div 
      className={classes}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </div>
  );
};

export default Card;