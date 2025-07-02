import React, { useState } from 'react';
import { ExternalLink, Github, Star, Eye } from 'lucide-react';
import Card from '../ui/Card';
import Badge from '../ui/Badge';
import IconButton from '../ui/IconButton';
import Button from '../ui/Button';
import type { Project } from '../../types';

interface ProjectCardProps extends Project {
  readonly delay?: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  technologies,
  liveUrl,
  githubUrl,
  stats,
  featured = false,
  delay = 0
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleExternalLink = (url: string): void => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  if (featured) {
    return (
      <Card
        hover
        padding="none"
        className="group overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{ animationDelay: `${delay}ms` }}
      >
        <div className="relative overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          {/* Project Stats Overlay */}
          <div className={`absolute top-4 right-4 flex gap-2 transition-all duration-500 ${
            isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'
          }`}>
            <Badge variant="secondary" size="sm">
              <Star className="h-3 w-3 text-yellow-500 mr-1" />
              <span className="text-slate-900 dark:text-white">{stats.stars}</span>
            </Badge>
            <Badge variant="secondary" size="sm">
              <Eye className="h-3 w-3 text-blue-500 mr-1" />
              <span className="text-slate-900 dark:text-white">{stats.views}</span>
            </Badge>
          </div>

          {/* Quick Action Buttons */}
          <div className={`absolute bottom-4 left-4 right-4 flex gap-2 transition-all duration-500 ${
            isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            <Button
              variant="secondary"
              size="sm"
              icon={ExternalLink}
              className="flex-1 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm hover:bg-white dark:hover:bg-slate-800"
              onClick={() => handleExternalLink(liveUrl)}
            >
              Live Demo
            </Button>
            <IconButton
              icon={Github}
              variant="secondary"
              className="bg-slate-800/90 dark:bg-slate-700/90 backdrop-blur-sm text-black hover:text-white hover:bg-slate-900 dark:hover:bg-slate-60 ms-2"
              onClick={() => handleExternalLink(githubUrl)}
            />
          </div>
        </div>

        <div className="p-8">
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
            {title}
          </h3>
          <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
            {description}
          </p>
          
          <div className="flex flex-wrap gap-2 mb-6">
            {technologies.map((tech) => (
              <Badge key={tech} variant="secondary">
                {tech}
              </Badge>
            ))}
          </div>

          <div className="flex space-x-4">
            <Button
              variant="primary"
              icon={ExternalLink}
              onClick={() => handleExternalLink(liveUrl)}
            >
              Live Demo
            </Button>
            <Button
              variant="outline"
              icon={Github}
              onClick={() => handleExternalLink(githubUrl)}
            >
              Code
            </Button>
          </div>
        </div>
      </Card>
    );
  }

  // Compact card for non-featured projects
  return (
    <Card
      hover
      padding="none"
      variant="gradient"
      className="group overflow-hidden"
    >
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-40 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      
      <div className="p-6">
        <h4 className="font-bold text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
          {title}
        </h4>
        <p className="text-slate-600 dark:text-slate-300 text-sm mb-4 line-clamp-2 leading-relaxed">
          {description}
        </p>
        
        <div className="flex flex-wrap gap-1 mb-4">
          {technologies.slice(0, 2).map((tech) => (
            <Badge key={tech} variant="default" size="sm">
              {tech}
            </Badge>
          ))}
          {technologies.length > 2 && (
            <Badge variant="primary" size="sm">
              +{technologies.length - 2}
            </Badge>
          )}
        </div>
        
        <div className="flex justify-between items-center">
          <div className="flex space-x-3">
            <IconButton
              icon={ExternalLink}
              variant="ghost"
              size="sm"
              className="text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/30"
              onClick={() => handleExternalLink(liveUrl)}
            />
            <IconButton
              icon={Github}
              variant="ghost"
              size="sm"
              onClick={() => handleExternalLink(githubUrl)}
            />
          </div>
          <div className="flex items-center gap-2 text-xs">
            <Star className="h-3 w-3 text-yellow-500" />
            <span className="text-slate-900 dark:text-white font-medium">{stats.stars}</span>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ProjectCard;