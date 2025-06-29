import type { 
  PersonalInfo, 
  Project, 
  SkillCategory, 
  Experience, 
  ContactInfo as ContactInfoType,
  SocialLink 
} from '../types';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  Twitter,
  Code2,
  Palette,
  Wrench
} from 'lucide-react';

export const personalInfo: PersonalInfo = {
  name: 'Alex Morgan',
  title: 'Frontend Engineer',
  email: 'alex.morgan@email.com',
  phone: '+1 (555) 123-4567',
  location: 'San Francisco, CA',
  bio: 'Passionate frontend engineer with a keen eye for design and a love for creating seamless user experiences that make a difference.',
  avatar: 'https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=800',
  resumeUrl: '#',
  socialLinks: [
    { icon: Github, href: '#', variant: 'default', label: 'GitHub' },
    { icon: Linkedin, href: '#', variant: 'primary', label: 'LinkedIn' },
    { icon: Twitter, href: '#', variant: 'secondary', label: 'Twitter' }
  ] as SocialLink[],
} as const;

export const contactInfo: readonly ContactInfoType[] = [
  {
    icon: Mail,
    title: 'Email',
    value: personalInfo.email,
    iconColor: 'text-blue-600 dark:text-blue-400',
    bgColor: 'bg-blue-50 dark:bg-blue-900/20 group-hover:bg-blue-100 dark:group-hover:bg-blue-900/30'
  },
  {
    icon: Phone,
    title: 'Phone',
    value: personalInfo.phone,
    iconColor: 'text-green-600 dark:text-green-400',
    bgColor: 'bg-green-50 dark:bg-green-900/20 group-hover:bg-green-100 dark:group-hover:bg-green-900/30'
  },
  {
    icon: MapPin,
    title: 'Location',
    value: personalInfo.location,
    iconColor: 'text-purple-600 dark:text-purple-400',
    bgColor: 'bg-purple-50 dark:bg-purple-900/20 group-hover:bg-purple-100 dark:group-hover:bg-purple-900/30'
  }
] as const;

export const projects: readonly Project[] = [
  {
    id: 'ecommerce-dashboard',
    title: 'E-Commerce Dashboard',
    description: 'A comprehensive admin dashboard for managing e-commerce operations with real-time analytics, inventory management, and customer insights.',
    image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Chart.js'],
    liveUrl: '#',
    githubUrl: '#',
    featured: true,
    stats: { stars: 124, views: '2.3k' },
    category: 'Web Application',
    completedAt: new Date('2024-01-15')
  },
  {
    id: 'task-management-app',
    title: 'Task Management App',
    description: 'Collaborative project management tool with drag-and-drop functionality, team collaboration features, and progress tracking.',
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['Next.js', 'Prisma', 'PostgreSQL', 'Framer Motion'],
    liveUrl: '#',
    githubUrl: '#',
    featured: true,
    stats: { stars: 89, views: '1.8k' },
    category: 'Web Application',
    completedAt: new Date('2023-11-20')
  },
  {
    id: 'weather-forecast-app',
    title: 'Weather Forecast App',
    description: 'Beautiful weather application with detailed forecasts, interactive maps, and location-based services.',
    image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['Vue.js', 'OpenWeather API', 'SCSS', 'PWA'],
    liveUrl: '#',
    githubUrl: '#',
    featured: false,
    stats: { stars: 67, views: '1.2k' },
    category: 'Mobile App',
    completedAt: new Date('2023-09-10')
  },
  {
    id: 'social-media-dashboard',
    title: 'Social Media Dashboard',
    description: 'Analytics dashboard for social media management with post scheduling, engagement metrics, and content planning.',
    image: 'https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['React', 'D3.js', 'Node.js', 'MongoDB'],
    liveUrl: '#',
    githubUrl: '#',
    featured: false,
    stats: { stars: 45, views: '890' },
    category: 'Web Application',
    completedAt: new Date('2023-07-05')
  },
  {
    id: 'restaurant-website',
    title: 'Restaurant Website',
    description: 'Modern restaurant website with online ordering system, menu management, and reservation booking functionality.',
    image: 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['Gatsby', 'Contentful', 'Stripe', 'Netlify'],
    liveUrl: '#',
    githubUrl: '#',
    featured: false,
    stats: { stars: 32, views: '654' },
    category: 'Website',
    completedAt: new Date('2023-05-15')
  },
  {
    id: 'fitness-tracking-app',
    title: 'Fitness Tracking App',
    description: 'Personal fitness tracker with workout planning, progress monitoring, and social features for motivation.',
    image: 'https://images.pexels.com/photos/416778/pexels-photo-416778.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['React Native', 'Firebase', 'Redux', 'Chart.js'],
    liveUrl: '#',
    githubUrl: '#',
    featured: false,
    stats: { stars: 78, views: '1.5k' },
    category: 'Mobile App',
    completedAt: new Date('2023-03-20')
  }
] as const;

export const skillCategories: readonly SkillCategory[] = [
  {
    id: 'frontend-technologies',
    title: 'Frontend Technologies',
    icon: Code2,
    color: 'from-blue-500 to-cyan-500',
    description: 'Modern frontend frameworks and libraries',
    skills: [
      { name: 'React', level: 95, category: 'frontend-technologies', yearsOfExperience: 4 },
      { name: 'TypeScript', level: 90, category: 'frontend-technologies', yearsOfExperience: 3 },
      { name: 'Next.js', level: 88, category: 'frontend-technologies', yearsOfExperience: 2 },
      { name: 'Vue.js', level: 80, category: 'frontend-technologies', yearsOfExperience: 2 },
      { name: 'JavaScript', level: 95, category: 'frontend-technologies', yearsOfExperience: 5 },
      { name: 'HTML/CSS', level: 98, category: 'frontend-technologies', yearsOfExperience: 5 }
    ]
  },
  {
    id: 'styling-design',
    title: 'Styling & Design',
    icon: Palette,
    color: 'from-purple-500 to-pink-500',
    description: 'CSS frameworks and design tools',
    skills: [
      { name: 'Tailwind CSS', level: 92, category: 'styling-design', yearsOfExperience: 2 },
      { name: 'Styled Components', level: 85, category: 'styling-design', yearsOfExperience: 3 },
      { name: 'SASS/SCSS', level: 88, category: 'styling-design', yearsOfExperience: 4 },
      { name: 'CSS-in-JS', level: 80, category: 'styling-design', yearsOfExperience: 2 },
      { name: 'Responsive Design', level: 95, category: 'styling-design', yearsOfExperience: 5 },
      { name: 'Figma', level: 75, category: 'styling-design', yearsOfExperience: 2 }
    ]
  },
  {
    id: 'tools-workflow',
    title: 'Tools & Workflow',
    icon: Wrench,
    color: 'from-green-500 to-emerald-500',
    description: 'Development tools and workflow optimization',
    skills: [
      { name: 'Git/GitHub', level: 90, category: 'tools-workflow', yearsOfExperience: 5 },
      { name: 'Webpack/Vite', level: 85, category: 'tools-workflow', yearsOfExperience: 3 },
      { name: 'Docker', level: 70, category: 'tools-workflow', yearsOfExperience: 1 },
      { name: 'Jest/Testing', level: 80, category: 'tools-workflow', yearsOfExperience: 3 },
      { name: 'CI/CD', level: 75, category: 'tools-workflow', yearsOfExperience: 2 },
      { name: 'Node.js', level: 78, category: 'tools-workflow', yearsOfExperience: 3 }
    ]
  }
] as const;

export const experiences: readonly Experience[] = [
  {
    id: 'techflow-senior',
    title: 'Senior Frontend Engineer',
    company: 'TechFlow Solutions',
    location: 'San Francisco, CA',
    period: '2022 - Present',
    startDate: new Date('2022-01-15'),
    type: 'full-time',
    description: [
      'Led frontend development for a team of 8 engineers, delivering high-quality web applications',
      'Architected and implemented micro-frontend solutions using React and Module Federation',
      'Improved application performance by 40% through code splitting and optimization techniques',
      'Mentored junior developers and established best practices for code quality and testing'
    ],
    technologies: ['React', 'TypeScript', 'Next.js', 'GraphQL', 'AWS'],
    achievements: ['40% Performance Improvement', 'Team Leadership', 'Micro-frontend Architecture'],
    color: 'from-blue-500 to-cyan-500'
  },
  {
    id: 'digital-innovations-frontend',
    title: 'Frontend Engineer',
    company: 'Digital Innovations Inc.',
    location: 'Austin, TX',
    period: '2020 - 2022',
    startDate: new Date('2020-03-01'),
    endDate: new Date('2022-01-10'),
    type: 'full-time',
    description: [
      'Developed responsive web applications serving 100K+ daily active users',
      'Collaborated with design team to implement pixel-perfect UI components',
      'Integrated third-party APIs and payment systems for e-commerce platforms',
      'Reduced bundle size by 30% through webpack optimization and tree shaking'
    ],
    technologies: ['Vue.js', 'JavaScript', 'SCSS', 'Node.js', 'MongoDB'],
    achievements: ['100K+ Daily Users', '30% Bundle Size Reduction', 'E-commerce Integration'],
    color: 'from-purple-500 to-pink-500'
  },
  {
    id: 'startuplab-junior',
    title: 'Junior Frontend Developer',
    company: 'StartupLab',
    location: 'Remote',
    period: '2019 - 2020',
    startDate: new Date('2019-06-01'),
    endDate: new Date('2020-02-28'),
    type: 'full-time',
    description: [
      'Built interactive landing pages and marketing websites for various clients',
      'Implemented responsive designs and ensured cross-browser compatibility',
      'Worked closely with UX designers to create engaging user experiences',
      'Contributed to open-source projects and company design system'
    ],
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'jQuery', 'Bootstrap'],
    achievements: ['Cross-browser Compatibility', 'Open Source Contributions', 'Design System'],
    color: 'from-green-500 to-emerald-500'
  }
] as const;

export const topTechnologies: readonly string[] = [
  'React',
  'TypeScript', 
  'Next.js',
  'Tailwind',
  'Node.js',
  'GraphQL',
  'AWS',
  'Docker'
] as const;

// Helper functions with proper typing
export const getFeaturedProjects = (): readonly Project[] => 
  projects.filter((project): project is Project => project.featured);

export const getOtherProjects = (): readonly Project[] => 
  projects.filter((project): project is Project => !project.featured);

export const getProjectById = (id: string): Project | undefined => 
  projects.find((project): project is Project => project.id === id);

export const getSkillsByCategory = (categoryId: string): SkillCategory['skills'] => {
  const category = skillCategories.find(cat => cat.id === categoryId);
  return category?.skills ?? [];
};

export const getCurrentExperience = (): Experience | undefined => 
  experiences.find((exp): exp is Experience => exp.endDate === undefined);

export const getTotalYearsOfExperience = (): number => {
  const startDate = new Date('2019-06-01'); // First job start date
  const currentDate = new Date();
  return Math.floor((currentDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24 * 365));
};