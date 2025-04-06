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
        <h1 className="text-3xl font-bold">Project not found</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-gray-50 pt-16">
      <div className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <Button
          variant="ghost"
          className="mb-6 hover:bg-gray-100"
          onClick={() => navigate('/portfolio')}
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Portfolio
        </Button>

        {/* Hero Section */}
        <div className="relative h-[60vh] rounded-2xl overflow-hidden mb-12">
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10" />
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 z-20 p-8 text-white">
            <div className="inline-block px-4 py-2 bg-primary/90 rounded-full mb-4">
              {project.categoryName}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{project.title}</h1>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold mb-6">Project Overview</h2>
              <p className="text-gray-700 mb-8">{project.description}</p>

              {project.features && (
                <>
                  <h3 className="text-xl font-bold mb-4">Key Features</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 mb-8">
                    {project.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Technologies */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-bold mb-4">Technologies Used</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gray-100 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Links */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-bold mb-4">Project Links</h3>
              <div className="space-y-3">
                {project.link && (
                  <Button
                    variant="outline"
                    className="w-full justify-start"
                    onClick={() => window.open(project.link, '_blank')}
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Visit Website
                  </Button>
                )}
                {project.demoLink && (
                  <Button
                    variant="outline"
                    className="w-full justify-start"
                    onClick={() => window.open(project.demoLink, '_blank')}
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </Button>
                )}
                {project.githubLink && (
                  <Button
                    variant="outline"
                    className="w-full justify-start"
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
  );
};

export default ProjectDetails;
