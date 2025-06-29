import React from 'react';
import type { LucideIcon } from 'lucide-react';

interface ContactInfoProps {
  readonly icon: LucideIcon;
  readonly title: string;
  readonly value: string;
  readonly iconColor?: string;
  readonly bgColor?: string;
  readonly delay?: number;
}

const ContactInfo: React.FC<ContactInfoProps> = ({
  icon: Icon,
  title,
  value,
  iconColor = 'text-blue-600 dark:text-blue-400',
  bgColor = 'bg-blue-50 dark:bg-blue-900/20 group-hover:bg-blue-100 dark:group-hover:bg-blue-900/30',
  delay = 0
}) => {
  return (
    <div
      className={`group flex items-center p-4 rounded-2xl transition-all duration-300 hover:shadow-lg transform hover:scale-105 cursor-pointer ${bgColor}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="w-14 h-14 rounded-2xl flex items-center justify-center mr-4 transition-all duration-300 bg-white dark:bg-slate-800 shadow-md group-hover:shadow-lg">
        <Icon className={`h-6 w-6 ${iconColor}`} />
      </div>
      <div>
        <p className="font-semibold text-slate-900 dark:text-white group-hover:text-slate-800 dark:group-hover:text-slate-100 transition-colors duration-300">
          {title}
        </p>
        <p className="text-slate-600 dark:text-slate-400 group-hover:text-slate-700 dark:group-hover:text-slate-300 transition-colors duration-300">
          {value}
        </p>
      </div>
    </div>
  );
};

export default ContactInfo;