import React from 'react';
import { Star } from 'lucide-react';
import { SectionHeader, AnimatedSection, Badge } from '../ui';
import { topTechnologies, getFeaturedProjects, getOtherProjects } from '../../data/portfolio';
import ProjectCard from './ProjectCard';

const Projects: React.FC = () => {
  const featuredProjects = getFeaturedProjects();
  const otherProjects = getOtherProjects();

  return (
    <section id="projects" className="py-20 bg-white dark:bg-slate-900 relative overflow-hidden transition-colors duration-300">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-50/30 to-purple-50/30 dark:from-blue-900/10 dark:to-purple-900/10"></div>
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-gradient-to-l from-blue-400/5 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedSection>
          <SectionHeader
            title="Featured Projects"
            subtitle="A selection of my recent work showcasing different skills and technologies"
          />
        </AnimatedSection>

        {/* Featured Projects */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <AnimatedSection key={project.id} delay={index * 200}>
              <ProjectCard {...project} />
            </AnimatedSection>
          ))}
        </div>

        {/* Other Projects Grid */}
        <AnimatedSection delay={400}>
          <SectionHeader
            title="Other Notable Projects"
            subtitle=""
            centered={true}
            className="mb-8"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {otherProjects.map((project, index) => (
              <ProjectCard key={project.id} {...project} delay={(index + 2) * 100} />
            ))}
          </div>
        </AnimatedSection>

        {/* Featured Technologies */}
        <AnimatedSection delay={600}>
          <div className="text-center">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 flex items-center justify-center gap-2">
              <Star className="h-6 w-6 text-yellow-500" />
              Featured Technologies
              <Star className="h-6 w-6 text-yellow-500" />
            </h3>
            <div className="flex flex-wrap gap-4 justify-center">
              {topTechnologies.map((tech) => (
                <Badge
                  key={tech}
                  variant="primary"
                  size="lg"
                  className="transform hover:scale-105 hover:-translate-y-1 cursor-pointer"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Projects;