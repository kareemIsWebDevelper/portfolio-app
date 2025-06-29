import React from 'react';
import type { LucideIcon } from 'lucide-react';
import type { ButtonVariant, ButtonSize } from '../../types';

interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  readonly icon: LucideIcon;
  readonly variant?: ButtonVariant;
  readonly size?: ButtonSize;
  readonly rounded?: boolean;
  readonly tooltip?: string;
}

const IconButton: React.FC<IconButtonProps> = ({
  icon: Icon,
  variant = 'default',
  size = 'md',
  rounded = true,
  tooltip,
  className = '',
  ...props
}) => {
  const baseClasses = 'inline-flex items-center justify-center transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-4 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none' as const;
  
  const variantClasses: Record<ButtonVariant, string> = {
    default: 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700 hover:text-slate-900 dark:hover:text-white focus:ring-slate-500/20',
    primary: 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 hover:shadow-xl focus:ring-blue-500/20',
    secondary: 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 hover:shadow-lg focus:ring-slate-500/20',
    ghost: 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 focus:ring-slate-500/20'
  } as const;
  
  const sizeClasses: Record<ButtonSize, string> = {
    sm: 'w-8 h-8 p-1.5',
    md: 'w-10 h-10 p-2',
    lg: 'w-12 h-12 p-2.5'
  } as const;
  
  const iconSizes: Record<ButtonSize, string> = {
    sm: 'h-4 w-4',
    md: 'h-5 w-5',
    lg: 'h-6 w-6'
  } as const;
  
  const roundedClass = rounded ? 'rounded-xl' : 'rounded-lg';
  
  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${roundedClass} ${className}`;

  return (
    <button
      className={classes}
      title={tooltip}
      {...props}
    >
      <Icon className={iconSizes[size]} />
    </button>
  );
};

export default IconButton;