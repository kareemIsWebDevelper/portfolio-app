import React from 'react';
import type { ProgressBarColor, ProgressBarSize } from '../../types';

interface ProgressBarProps {
  readonly value: number;
  readonly max?: number;
  readonly label?: string;
  readonly showValue?: boolean;
  readonly color?: ProgressBarColor;
  readonly size?: ProgressBarSize;
  readonly animated?: boolean;
  readonly className?: string;
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  value,
  max = 100,
  label,
  showValue = true,
  color = 'blue',
  size = 'md',
  animated = true,
  className = ''
}) => {
  const percentage = Math.min((value / max) * 100, 100);
  
  const colorClasses: Record<ProgressBarColor, string> = {
    blue: 'from-blue-500 to-cyan-500',
    purple: 'from-purple-500 to-pink-500',
    green: 'from-green-500 to-emerald-500',
    yellow: 'from-yellow-500 to-orange-500',
    red: 'from-red-500 to-pink-500'
  } as const;
  
  const sizeClasses: Record<ProgressBarSize, string> = {
    sm: 'h-2',
    md: 'h-3',
    lg: 'h-4'
  } as const;

  return (
    <div className={`space-y-2 ${className}`}>
      {(label || showValue) && (
        <div className="flex justify-between items-center">
          {label && (
            <span className="text-slate-700 dark:text-slate-300 font-medium">
              {label}
            </span>
          )}
          {showValue && (
            <span className="text-slate-500 dark:text-slate-400 text-sm font-semibold">
              {Math.round(percentage)}%
            </span>
          )}
        </div>
      )}
      
      <div className={`w-full bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden ${sizeClasses[size]}`}>
        <div
          className={`${sizeClasses[size]} rounded-full bg-gradient-to-r ${colorClasses[color]} transition-all duration-1000 ease-out relative overflow-hidden`}
          style={{ width: `${percentage}%` }}
        >
          {animated && (
            <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;