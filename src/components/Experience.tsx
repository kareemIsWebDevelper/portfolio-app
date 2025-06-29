import React, { useEffect, useRef, useState } from 'react';
import { Calendar, MapPin, Briefcase, TrendingUp } from 'lucide-react';

const Experience = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeExperience, setActiveExperience] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const experiences = [
    {
      title: 'Senior Frontend Engineer',
      company: 'TechFlow Solutions',
      location: 'San Francisco, CA',
      period: '2022 - Present',
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
      title: 'Frontend Engineer',
      company: 'Digital Innovations Inc.',
      location: 'Austin, TX',
      period: '2020 - 2022',
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
      title: 'Junior Frontend Developer',
      company: 'StartupLab',
      location: 'Remote',
      period: '2019 - 2020',
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
  ];

  return (
    <section ref={sectionRef} id="experience" className="py-20 bg-slate-50 dark:bg-slate-800 relative overflow-hidden transition-colors duration-300">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-gradient-to-r from-blue-400/10 to-purple-400/10 dark:from-blue-400/5 dark:to-purple-400/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-gradient-to-r from-green-400/10 to-blue-400/10 dark:from-green-400/5 dark:to-blue-400/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="flex items-center justify-center gap-3 mb-4">
            <Briefcase className="h-8 w-8 text-blue-600" />
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white">Professional Experience</h2>
            <TrendingUp className="h-8 w-8 text-green-600" />
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-4 rounded-full"></div>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            My journey through different roles and the impact I've made along the way
          </p>
        </div>

        <div className="relative">
          {/* Enhanced Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-600 via-purple-600 to-green-600 hidden lg:block rounded-full shadow-lg"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative transition-all duration-1000 ${
                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
                }`}
                style={{ animationDelay: `${index * 300}ms` }}
                onMouseEnter={() => setActiveExperience(index)}
                onMouseLeave={() => setActiveExperience(null)}
              >
                {/* Enhanced Timeline dot */}
                <div className="absolute left-6 w-6 h-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full border-4 border-white dark:border-slate-800 shadow-xl hidden lg:block transform transition-all duration-300 hover:scale-125">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full animate-ping opacity-20"></div>
                </div>
                
                <div className="lg:ml-20">
                  <div className={`group bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-2 border-transparent hover:border-blue-200 dark:hover:border-blue-700 ${
                    activeExperience === index ? 'scale-105 shadow-2xl border-blue-200 dark:border-blue-700' : ''
                  }`}>
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                      <div className="space-y-2">
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                          {exp.title}
                        </h3>
                        <p className="text-xl font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                          {exp.company}
                        </p>
                      </div>
                      <div className="flex flex-col lg:items-end mt-2 lg:mt-0 space-y-2">
                        <div className="flex items-center text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-slate-800 px-3 py-1 rounded-full">
                          <Calendar className="h-4 w-4 mr-2" />
                          <span className="font-medium">{exp.period}</span>
                        </div>
                        <div className="flex items-center text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-slate-800 px-3 py-1 rounded-full">
                          <MapPin className="h-4 w-4 mr-2" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>

                    {/* Key Achievements */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3 uppercase tracking-wide">Key Achievements</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.achievements.map((achievement, achievementIndex) => (
                          <span
                            key={achievementIndex}
                            className={`px-3 py-1 bg-gradient-to-r ${exp.color} text-white rounded-full text-sm font-medium shadow-lg transform hover:scale-105 transition-all duration-300`}
                          >
                            {achievement}
                          </span>
                        ))}
                      </div>
                    </div>

                    <ul className="space-y-3 mb-6">
                      {exp.description.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start group/item">
                          <span className="w-2 h-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mt-2 mr-4 flex-shrink-0 group-hover/item:scale-150 transition-transform duration-300"></span>
                          <span className="text-slate-700 dark:text-slate-300 leading-relaxed group-hover/item:text-slate-900 dark:group-hover/item:text-white transition-colors duration-300">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <div className="border-t border-slate-100 dark:border-slate-700 pt-6">
                      <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3 uppercase tracking-wide">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-4 py-2 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-xl text-sm font-medium hover:bg-slate-200 dark:hover:bg-slate-700 hover:shadow-md transition-all duration-300 transform hover:scale-105"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;