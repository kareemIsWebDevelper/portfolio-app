import React from 'react';
import type { LucideIcon } from 'lucide-react';

interface SectionHeaderProps {
  readonly title: string;
  readonly subtitle?: string;
  readonly icon?: LucideIcon;
  readonly secondaryIcon?: LucideIcon;
  readonly centered?: boolean;
  readonly className?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  subtitle,
  icon: Icon,
  secondaryIcon: SecondaryIcon,
  centered = true,
  className = ''
}) => {
  const containerClasses = centered ? 'text-center' : 'text-left';

  return (
    <div className={`mb-16 ${containerClasses} ${className}`}>
      <div className={`flex items-center gap-3 mb-4 ${centered ? 'justify-center' : ''}`}>
        {Icon && <Icon className="h-8 w-8 text-blue-600" />}
        <h2 className="text-4xl font-bold text-slate-900 dark:text-white">
          {title}
        </h2>
        {SecondaryIcon && <SecondaryIcon className="h-8 w-8 text-green-600" />}
      </div>
      
      <div className={`w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mb-4 ${centered ? 'mx-auto' : ''}`}></div>
      
      {subtitle && (
        <p className={`text-xl text-slate-600 dark:text-slate-300 leading-relaxed ${centered ? 'max-w-3xl mx-auto' : 'max-w-3xl'}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;