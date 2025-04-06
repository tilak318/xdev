import { useParams } from 'react-router-dom';
import { projects } from '@/data/projects';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find(p => p.id === Number(id));

  if (!project) {
    return (
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-montserrat font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
          Project not found
        </h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-transparent to-gray-50 pt-16">
      <div className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <Button
          variant="ghost"
          className="mb-6 text-secondary hover:text-primary transition-colors duration-300 group"
          onClick={() => navigate('/portfolio')}
        >
          <ArrowLeft className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform duration-300" />
          Back to Portfolio
        </Button>

        {/* Hero Section */}
        <div className="relative h-[60vh] rounded-2xl overflow-hidden mb-12 group">
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent z-10 transition-opacity duration-500" />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-secondary/30 to-accent/30 opacity-0 group-hover:opacity-40 transition-opacity duration-500 z-10" />
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute bottom-0 left-0 right-0 z-20 p-8 text-white">
            <div className="inline-block px-4 py-2 bg-gradient-to-r from-primary to-secondary rounded-full mb-4 shadow-lg">
              {project.categoryName}
            </div>
            <h1 className="text-4xl md:text-5xl font-montserrat font-bold mb-4 drop-shadow-lg">{project.title}</h1>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/10 to-accent/5 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
              <div className="relative z-10">
                <h2 className="text-2xl font-montserrat font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                  Project Overview
                </h2>
                <p className="text-gray-700 mb-8 leading-relaxed">{project.description}</p>

                {project.features && (
                  <>
                    <h3 className="text-xl font-montserrat font-bold mb-4 text-primary">Key Features</h3>
                    <ul className="list-none space-y-3 text-gray-700 mb-8">
                      {project.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <span className="inline-block w-2 h-2 mt-2 mr-3 rounded-full bg-gradient-to-r from-primary to-secondary" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Technologies */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/10 to-accent/5 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
              <div className="relative z-10">
                <h3 className="text-xl font-montserrat font-bold mb-4 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                  Technologies Used
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 rounded-full text-sm font-medium text-primary hover:from-primary/20 hover:via-secondary/20 hover:to-accent/20 transition-all duration-300 cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Links */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/10 to-accent/5 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
              <div className="relative z-10">
                <h3 className="text-xl font-montserrat font-bold mb-4 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                  Project Links
                </h3>
                <div className="space-y-3">
                  {project.link && (
                    <Button
                      variant="outline"
                      className="w-full justify-start text-secondary hover:text-primary hover:border-primary transition-colors duration-300"
                      onClick={() => window.open(project.link, '_blank')}
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Visit Website
                    </Button>
                  )}
                  {project.demoLink && (
                    <Button
                      variant="outline"
                      className="w-full justify-start text-secondary hover:text-primary hover:border-primary transition-colors duration-300"
                      onClick={() => window.open(project.demoLink, '_blank')}
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </Button>
                  )}
                  {project.githubLink && (
                    <Button
                      variant="outline"
                      className="w-full justify-start text-secondary hover:text-primary hover:border-primary transition-colors duration-300"
                      onClick={() => window.open(project.githubLink, '_blank')}
                    >
                      <Github className="mr-2 h-4 w-4" />
                      View Source
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
