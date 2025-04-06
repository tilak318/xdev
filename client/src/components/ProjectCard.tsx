import { Card } from "@/components/ui/card";
import { ExternalLink, Github } from 'lucide-react';
import type { Project } from '@/data/projects';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <Card className="h-full group relative overflow-hidden rounded-xl border-0 shadow-lg hover:shadow-xl transition-all duration-500">
      {/* Image Container */}
      <div className="relative h-64 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10" />
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover object-center transform group-hover:scale-110 transition-all duration-700"
        />
        
        {/* Category Badge */}
        <div className="absolute top-4 right-4 z-20">
          <span className="px-4 py-1 text-sm text-white font-medium rounded-full bg-gradient-to-r from-primary/80 to-secondary/80 backdrop-blur-sm">
            {project.categoryName}
          </span>
        </div>

        {/* Project Links */}
        <div className="absolute bottom-4 right-4 z-20 flex gap-3">
          {project.demoLink && (
            <a
              href={project.demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group/demo p-2 rounded-full bg-white/10 backdrop-blur-sm hover:bg-gradient-to-r hover:from-primary hover:to-secondary hover:scale-110 transition-all duration-300"
            >
              <ExternalLink size={18} className="text-white transform group-hover/demo:rotate-12 transition-transform duration-300" />
              <span className="absolute -top-8 right-0 min-w-max px-2 py-1 bg-black/80 text-white text-xs rounded opacity-0 group-hover/demo:opacity-100 transition-opacity duration-300">
                Live Demo
              </span>
            </a>
          )}
          {project.githubLink && (
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group/github p-2 rounded-full bg-white/10 backdrop-blur-sm hover:bg-gradient-to-r hover:from-[#2b3137] hover:to-[#424b55] hover:scale-110 transition-all duration-300"
            >
              <Github size={18} className="text-white transform group-hover/github:rotate-12 transition-transform duration-300" />
              <span className="absolute -top-8 right-0 min-w-max px-2 py-1 bg-black/80 text-white text-xs rounded opacity-0 group-hover/github:opacity-100 transition-opacity duration-300">
                View Code
              </span>
            </a>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="relative p-6 bg-white">
        <h3 className="text-xl font-montserrat font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors duration-300">
          {project.title}
        </h3>
        
        <p className="text-gray-600 mb-4 line-clamp-2">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {project.technologies.slice(0, 3).map(tech => (
            <span 
              key={tech}
              className="px-3 py-1 text-xs font-medium text-gray-700 bg-gray-100 rounded-full"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="px-3 py-1 text-xs font-medium text-gray-700 bg-gray-100 rounded-full">
              +{project.technologies.length - 3}
            </span>
          )}
        </div>
      </div>
    </Card>
  );
};