import { useState, useEffect } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, ArrowRight } from 'lucide-react';

const Portfolio = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const filteredProjects = projects.filter(
    project => activeCategory === 'all' || project.category === activeCategory
  );

  return (
    <div className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className={`text-center transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <h1 className="text-4xl md:text-5xl font-montserrat font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent mb-6">
            Our Portfolio
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
            Explore our showcase of successful projects and implementations that demonstrate our expertise and innovation
          </p>
        </div>

        <div className={`flex flex-wrap justify-center gap-4 mb-12 transition-all duration-700 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-[-20px] opacity-0'}`}>
          <CategoryButton 
            category="all" 
            activeCategory={activeCategory} 
            onClick={() => setActiveCategory('all')}
            label="All Projects"
          />
          <CategoryButton 
            category="ai" 
            activeCategory={activeCategory} 
            onClick={() => setActiveCategory('ai')}
            label="AI & ML"
          />
          <CategoryButton 
            category="web" 
            activeCategory={activeCategory} 
            onClick={() => setActiveCategory('web')}
            label="Web Development"
          />
          <CategoryButton 
            category="mobile" 
            activeCategory={activeCategory} 
            onClick={() => setActiveCategory('mobile')}
            label="Mobile Apps"
          />
          <CategoryButton 
            category="cloud" 
            activeCategory={activeCategory} 
            onClick={() => setActiveCategory('cloud')}
            label="Cloud Solutions"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.title} 
              className={`transition-all duration-700 delay-${(index % 3 + 1) * 200} ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-[30px] opacity-0'
              }`}
            >
              <Card className="h-full overflow-hidden hover:shadow-xl transition-all duration-300 border-0 shadow-md group">
                <div className="relative overflow-hidden h-48">
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-secondary/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 z-10 flex items-center justify-center">
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-white text-secondary rounded-md font-medium flex items-center space-x-2 hover:bg-accent hover:text-white transition-colors duration-300"
                    >
                      <span>View Project</span>
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover object-center group-hover:scale-110 transition-all duration-500"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-montserrat font-semibold text-primary group-hover:text-secondary transition-colors duration-300">
                      {project.title}
                    </h3>
                    <span className="text-xs font-medium bg-secondary/10 text-secondary px-2 py-1 rounded">
                      {project.categoryName}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map(tech => (
                      <span 
                        key={tech} 
                        className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded group-hover:bg-secondary/10 group-hover:text-secondary transition-colors duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        <div className={`bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 rounded-2xl p-8 md:p-12 text-center transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[20px]'}`}>
          <h2 className="text-2xl md:text-3xl font-montserrat font-bold text-primary mb-6">Have a Project in Mind?</h2>
          <p className="max-w-2xl mx-auto mb-8 text-gray-600">
            Let's collaborate to bring your vision to life with our expertise in cutting-edge technologies.
          </p>
          <a 
            href="/contact" 
            className="inline-flex items-center px-6 py-2.5 bg-gradient-to-r from-primary to-secondary text-white rounded-full text-base font-medium hover:shadow-lg transition-all duration-300 hover:scale-105"
          >
            Get Started
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform duration-500" />
          </a>
        </div>
      </div>
    </div>
  );
};

const CategoryButton = ({ category, activeCategory, onClick, label }) => {
  return (
    <button
      className={`px-4 py-2 rounded-full transition-all duration-300 ${
        activeCategory === category
          ? 'bg-secondary text-white shadow-lg'
          : 'bg-gray-100 text-gray-600 hover:bg-secondary/10 hover:text-secondary'
      }`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

const projects = [
  {
    title: "NexusAI Analytics Platform",
    description: "An AI-driven analytics platform that provides predictive insights for e-commerce businesses.",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    category: "ai",
    categoryName: "AI & ML",
    technologies: ["Python", "TensorFlow", "React", "AWS"],
    link: "#",
  },
  {
    title: "MediTrack Healthcare App",
    description: "A mobile application for patients to manage prescriptions and schedule appointments with healthcare providers.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    category: "mobile",
    categoryName: "Mobile App",
    technologies: ["React Native", "Firebase", "Node.js", "Express"],
    link: "#",
  },
  {
    title: "Global Connect E-commerce",
    description: "A scalable e-commerce platform with multi-language support and international shipping integrations.",
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    category: "web",
    categoryName: "Web Development",
    technologies: ["Next.js", "MongoDB", "Stripe", "Vercel"],
    link: "#",
  },
  {
    title: "CloudOps Management Suite",
    description: "A comprehensive cloud resource management and monitoring solution for enterprise customers.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    category: "cloud",
    categoryName: "Cloud Solutions",
    technologies: ["AWS", "Docker", "Kubernetes", "Terraform"],
    link: "#",
  },
  {
    title: "SmartRetail Inventory System",
    description: "An AI-powered inventory management system with image recognition for automatic stock tracking.",
    image: "https://images.unsplash.com/photo-1521791055366-0d553381c019?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    category: "ai",
    categoryName: "AI & ML",
    technologies: ["Python", "Computer Vision", "React", "MongoDB"],
    link: "#",
  },
  {
    title: "FinTrack Investment App",
    description: "A mobile application for tracking investments, market trends, and personal finance management.",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    category: "mobile",
    categoryName: "Mobile App",
    technologies: ["Flutter", "Firebase", "GraphQL", "Node.js"],
    link: "#",
  },
  {
    title: "EduLearn LMS Platform",
    description: "A learning management system for educational institutions with interactive course content and analytics.",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    category: "web",
    categoryName: "Web Development",
    technologies: ["React", "Node.js", "PostgreSQL", "Socket.io"],
    link: "#",
  },
  {
    title: "SecureShare Cloud Storage",
    description: "A highly secure cloud storage solution with end-to-end encryption for business-critical data.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    category: "cloud",
    categoryName: "Cloud Solutions",
    technologies: ["AWS S3", "Encryption", "Go", "React"],
    link: "#",
  },
  {
    title: "VoiceAssist Customer Service",
    description: "An AI voice assistant system that handles customer inquiries and provides automated support.",
    image: "https://images.unsplash.com/photo-1596524430615-b46475ddff6e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    category: "ai",
    categoryName: "AI & ML",
    technologies: ["NLP", "Speech Recognition", "Cloud Functions", "Vue.js"],
    link: "#",
  },
];

export default Portfolio;
