import { useParams } from 'react-router-dom';
import { projects } from '@/data/projects';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectDetails = () => {
  const { id } = useParams();
  console.log('Current ID:', id);
  console.log('Available projects:', projects);
  const project = projects.find(p => p.id === Number(id));
  console.log('Found project:', project);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-black">
        <h1 className="text-2xl text-gray-400">Project not found</h1>
      </div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 to-black text-white"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Project Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="relative h-[400px] rounded-xl overflow-hidden"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Project Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
            <div className="bg-blue-500/10 text-blue-400 px-4 py-2 rounded-full inline-block mb-6">
              {project.categoryName}
            </div>
            <p className="text-gray-300 text-lg mb-8">{project.description}</p>
            
            {/* Technologies */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4">Technologies Used</h3>
              <div className="flex flex-wrap gap-3">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-gray-800 text-gray-300 px-4 py-2 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Features */}
            {project.features && (
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">Key Features</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                  {project.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Links */}
            <div className="flex gap-4">
              {project.githubLink && (
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 transition-colors px-6 py-3 rounded-lg text-white"
                >
                  <FaGithub className="text-xl" />
                  <span>View Code</span>
                </a>
              )}
              {project.demoLink && (
                <a
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 transition-colors px-6 py-3 rounded-lg text-white"
                >
                  <FaExternalLinkAlt className="text-xl" />
                  <span>Live Demo</span>
                </a>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectDetails;
