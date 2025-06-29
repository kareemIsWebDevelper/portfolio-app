import React, { forwardRef } from 'react';
import type { LucideIcon } from 'lucide-react';

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  readonly label?: string;
  readonly icon?: LucideIcon;
  readonly error?: string;
  readonly helperText?: string;
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(({
  label,
  icon: Icon,
  error,
  helperText,
  className = '',
  ...props
}, ref) => {
  const textareaClasses = `w-full px-4 py-3 bg-white dark:bg-slate-800 border-2 rounded-xl transition-all duration-300 resize-none text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 ${
    error
      ? 'border-red-500 ring-4 ring-red-500/20 focus:border-red-500 focus:ring-red-500/20'
      : 'border-slate-300 dark:border-slate-600 hover:border-slate-400 dark:hover:border-slate-500 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20'
  } ${className}`;

  return (
    <div className="space-y-2">
      {label && (
        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 flex items-center gap-2">
          {Icon && <Icon className="h-4 w-4" />}
          {label}
        </label>
      )}
      
      <textarea
        ref={ref}
        className={textareaClasses}
        {...props}
      />
      
      {(error || helperText) && (
        <p className={`text-sm ${error ? 'text-red-600 dark:text-red-400' : 'text-slate-500 dark:text-slate-400'}`}>
          {error || helperText}
        </p>
      )}
    </div>
  );
});

Textarea.displayName = 'Textarea';

export default Textarea;