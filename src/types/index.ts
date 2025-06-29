import type { LucideIcon } from 'lucide-react';
// Core data types for the portfolio application

export interface ContactInfo {
  readonly icon: LucideIcon;
  readonly title: string;
  readonly value: string;
  readonly iconColor?: string;
  readonly bgColor?: string;
}

export interface SocialLink {
  readonly icon: LucideIcon;
  readonly href: string;
  readonly variant: 'default' | 'primary' | 'secondary';
  readonly label: string;
}

export interface ProjectStats {
  readonly stars: number;
  readonly views: string;
}

export interface Project {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly image: string;
  readonly technologies: readonly string[];
  readonly liveUrl: string;
  readonly githubUrl: string;
  readonly featured: boolean;
  readonly stats: ProjectStats;
  readonly category?: string;
  readonly completedAt?: Date;
}

export interface Skill {
  readonly name: string;
  readonly level: number; // 0-100
  readonly category: string;
  readonly yearsOfExperience?: number;
}

export interface SkillCategory {
  readonly id: string;
  readonly title: string;
  readonly icon: LucideIcon;
  readonly color: string;
  readonly skills: readonly Skill[];
  readonly description?: string;
}

export interface Experience {
  readonly id: string;
  readonly title: string;
  readonly company: string;
  readonly location: string;
  readonly period: string;
  readonly startDate: Date;
  readonly endDate?: Date; // undefined for current position
  readonly description: readonly string[];
  readonly technologies: readonly string[];
  readonly achievements: readonly string[];
  readonly color: string;
  readonly type: 'full-time' | 'part-time' | 'contract' | 'internship';
}

export interface PersonalInfo {
  readonly name: string;
  readonly title: string;
  readonly email: string;
  readonly phone: string;
  readonly location: string;
  readonly bio: string;
  readonly avatar: string;
  readonly resumeUrl: string;
  readonly socialLinks: readonly SocialLink[];
}

export interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export interface ContactFormState {
  data: FormData;
  errors: FormErrors;
  isSubmitting: boolean;
  isSubmitted: boolean;
}

// Theme types
export type Theme = 'light' | 'dark' | 'system';
export type ActualTheme = 'light' | 'dark';

export interface ThemeContextType {
  readonly theme: Theme;
  readonly setTheme: (theme: Theme) => void;
  readonly actualTheme: ActualTheme;
}

// Animation types
export type AnimationType = 'fade-up' | 'fade-in' | 'slide-left' | 'slide-right' | 'scale';

// UI Component types
export type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'default';
export type ButtonSize = 'sm' | 'md' | 'lg';
export type BadgeVariant = 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'error';
export type BadgeSize = 'sm' | 'md' | 'lg';
export type CardVariant = 'default' | 'gradient' | 'glass';
export type CardPadding = 'none' | 'sm' | 'md' | 'lg';
export type ProgressBarColor = 'blue' | 'purple' | 'green' | 'yellow' | 'red';
export type ProgressBarSize = 'sm' | 'md' | 'lg';

// Utility types
export type RequiredNonNull<T> = {
  [P in keyof T]-?: NonNullable<T[P]>;
};

export type Optional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;

// Event handler types
export type ClickHandler = (event: React.MouseEvent<HTMLElement>) => void;
export type ChangeHandler = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
export type SubmitHandler = (event: React.FormEvent<HTMLFormElement>) => void;

// API response types (for future use)
export interface ApiResponse<T> {
  readonly data: T;
  readonly success: boolean;
  readonly message?: string;
  readonly errors?: readonly string[];
}

export interface PaginatedResponse<T> extends ApiResponse<readonly T[]> {
  readonly pagination: {
    readonly page: number;
    readonly limit: number;
    readonly total: number;
    readonly totalPages: number;
  };
}

// Error types
export interface AppError {
  readonly code: string;
  readonly message: string;
  readonly details?: unknown;
  readonly timestamp: Date;
}

// Configuration types
export interface AppConfig {
  readonly api: {
    readonly baseUrl: string;
    readonly timeout: number;
  };
  readonly features: {
    readonly analytics: boolean;
    readonly contactForm: boolean;
    readonly darkMode: boolean;
  };
  readonly social: {
    readonly github: string;
    readonly linkedin: string;
    readonly twitter: string;
    readonly email: string;
  };
}