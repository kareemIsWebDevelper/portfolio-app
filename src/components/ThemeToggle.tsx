import React, { useState, useRef, useEffect } from 'react';
import { Sun, Moon, Monitor, ChevronDown } from 'lucide-react';
import { useTheme } from '../hooks';
import type { Theme } from '../types';
import type { LucideIcon } from 'lucide-react';

interface ThemeOption {
  readonly value: Theme;
  readonly label: string;
  readonly icon: LucideIcon;
}

const ThemeToggle: React.FC = () => {
  const { theme, setTheme, actualTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const themeOptions: readonly ThemeOption[] = [
    { value: 'system', label: 'System', icon: Monitor },
    { value: 'light', label: 'Light', icon: Sun },
    { value: 'dark', label: 'Dark', icon: Moon },
  ] as const;

  const currentOption = themeOptions.find(option => option.value === theme) ?? themeOptions[0];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent): void => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleThemeChange = (newTheme: Theme): void => {
    setTheme(newTheme);
    setIsOpen(false);
  };

  const handleToggleDropdown = (): void => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={handleToggleDropdown}
        className="relative flex items-center gap-2 px-3 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all duration-300 transform hover:scale-105 group min-w-[100px]"
        aria-label="Toggle theme"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <div className="relative w-5 h-5 flex-shrink-0">
          {theme === 'system' ? (
            <Monitor className="h-5 w-5 text-slate-600 dark:text-slate-400" />
          ) : theme === 'light' ? (
            <Sun className="h-5 w-5 text-yellow-500" />
          ) : (
            <Moon className="h-5 w-5 text-blue-400" />
          )}
        </div>
        
        <span className="text-sm font-medium text-slate-700 dark:text-slate-300 hidden sm:block">
          {currentOption && currentOption.label}
        </span>
        
        <ChevronDown className={`h-4 w-4 text-slate-500 dark:text-slate-400 transition-transform duration-200 ${
          isOpen ? 'rotate-180' : ''
        }`} />
        
        {/* Glow effect */}
        <div className={`absolute inset-0 rounded-xl transition-all duration-300 ${
          actualTheme === 'dark'
            ? 'bg-blue-400/20 opacity-0 group-hover:opacity-100'
            : 'bg-yellow-400/20 opacity-0 group-hover:opacity-100'
        }`}></div>
      </button>

      {/* Dropdown Menu */}
      <div className={`absolute top-full right-0 mt-2 w-40 bg-white dark:bg-slate-800 rounded-xl shadow-2xl border border-slate-200 dark:border-slate-700 overflow-hidden transition-all duration-300 transform origin-top-right z-50 ${
        isOpen 
          ? 'opacity-100 scale-100 translate-y-0' 
          : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'
      }`}>
        {themeOptions.map((option) => {
          // const Icon = option.icon;
          const isSelected = theme === option.value;
          
          return (
            <button
              key={option.value}
              onClick={() => handleThemeChange(option.value)}
              className={`w-full flex items-center gap-3 px-4 py-3 text-left transition-all duration-200 ${
                isSelected
                  ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400'
                  : 'text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700'
              }`}
            >
              <div className="relative w-5 h-5 flex-shrink-0">
                {option.value === 'system' ? (
                  <Monitor className={`h-5 w-5 ${isSelected ? 'text-blue-600 dark:text-blue-400' : 'text-slate-500 dark:text-slate-400'}`} />
                ) : option.value === 'light' ? (
                  <Sun className={`h-5 w-5 ${isSelected ? 'text-yellow-500' : 'text-slate-500 dark:text-slate-400'}`} />
                ) : (
                  <Moon className={`h-5 w-5 ${isSelected ? 'text-blue-400' : 'text-slate-500 dark:text-slate-400'}`} />
                )}
              </div>
              
              <div className="flex-1">
                <div className={`font-medium ${isSelected ? 'text-blue-600 dark:text-blue-400' : ''}`}>
                  {option.label}
                </div>
                {option.value === 'system' && (
                  <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                    Auto ({actualTheme})
                  </div>
                )}
              </div>
              
              {isSelected && (
                <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full flex-shrink-0"></div>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default ThemeToggle;