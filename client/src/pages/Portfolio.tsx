import { useState, useEffect } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, ArrowRight, Github } from 'lucide-react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float, PresentationControls, Environment } from '@react-three/drei';
import { Suspense } from 'react';
import { Link } from 'react-router-dom';

const projects = [
  {
    id: "nexusai-analytics",
    title: "NexusAI Analytics Platform",
    description: "An AI-powered analytics platform for e-commerce businesses with real-time insights.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    category: "ai",
    categoryName: "AI & Machine Learning",
    technologies: ["React", "Python", "TensorFlow", "AWS"],
    githubUrl: "https://github.com/yourusername/nexusai-analytics",
    demoUrl: "https://nexusai-analytics.demo.com",
    features: [
      "Real-time data processing",
      "Predictive analytics",
      "Custom dashboards",
      "API integration"
    ]
  },
  {
    id: "smartretail-inventory",
    title: "SmartRetail Inventory System",
    description: "An AI-powered inventory management system with image recognition for automatic stock tracking.",
    image: "https://images.unsplash.com/photo-1521791055366-0d553381c019?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    category: "automation",
    categoryName: "Automation",
    technologies: ["React", "Node.js", "TensorFlow.js", "MongoDB"],
    githubUrl: "https://github.com/yourusername/smartretail-inventory",
    demoUrl: "https://smartretail-inventory.demo.com",
    features: [
      "Image recognition",
      "Real-time tracking",
      "Automated alerts",
      "Inventory forecasting"
    ]
  },
  {
    id: "voiceassist-customer",
    title: "VoiceAssist Customer Service",
    description: "An AI voice assistant system that handles customer inquiries and provides automated support.",
    image: "https://images.unsplash.com/photo-1596524430615-b46475ddff6e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    category: "ai",
    categoryName: "AI & Machine Learning",
    technologies: ["React", "Node.js", "TensorFlow.js", "WebRTC"],
    githubUrl: "https://github.com/yourusername/voiceassist-customer",
    demoUrl: "https://voiceassist-customer.demo.com",
    features: [
      "Voice recognition",
      "Natural language processing",
      "24/7 automated support",
      "Multi-language support"
    ]
  }
];

// 3D Model Component for Services
function ServicesModel() {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prev) => prev + 0.01);
    }, 16);
    return () => clearInterval(interval);
  }, []);

  return (
    <Float
      speed={1.5}
      rotationIntensity={1}
      floatIntensity={2}
      floatingRange={[0, 0.5]}
    >
      <group>
        {/* Service Nodes */}
        {Array.from({ length: 6 }).map((_, i) => (
          <group 
            key={i}
            position={[
              Math.cos(i * Math.PI / 3) * 2.5,
              Math.sin(i * Math.PI / 3) * 2.5,
              Math.sin(i * Math.PI / 3) * 0.5
            ]}
            rotation={[time * 0.2, time * 0.3, time * 0.1]}
          >
            {/* Node Core */}
            <mesh>
              <icosahedronGeometry args={[0.4, 0]} />
              <meshStandardMaterial 
                color="#f3f4f6"
                metalness={0.2}
                roughness={0.8}
                transparent
                opacity={0.15}
                wireframe
              />
            </mesh>
            
            {/* Connection Lines */}
            <mesh rotation={[0, i * Math.PI / 3 + time * 0.2, 0]}>
              <cylinderGeometry args={[0.01, 0.01, 2, 8]} />
              <meshStandardMaterial 
                color="#e5e7eb"
                metalness={0.1}
                roughness={0.9}
                transparent
                opacity={0.05}
              />
            </mesh>
          </group>
        ))}

        {/* Service Rings */}
        {Array.from({ length: 3 }).map((_, i) => (
          <mesh 
            key={i}
            position={[0, 0, 0]}
            rotation={[i * Math.PI / 3, time * 0.2, 0]}
          >
            <torusGeometry args={[3 + i * 0.5, 0.02, 16, 100]} />
            <meshStandardMaterial 
              color="#e5e7eb"
              metalness={0.1}
              roughness={0.9}
              transparent
              opacity={0.1}
            />
          </mesh>
        ))}

        {/* Service Particles */}
        {Array.from({ length: 20 }).map((_, i) => (
          <mesh 
            key={i}
            position={[
              Math.sin(i * Math.PI / 10 + time) * 4,
              Math.cos(i * Math.PI / 10 + time) * 4,
              Math.sin(i * Math.PI / 10 + time) * 0.5
            ]}
          >
            <sphereGeometry args={[0.05, 8, 8]} />
            <meshStandardMaterial 
              color="#f3f4f6"
              metalness={0.1}
              roughness={0.9}
              transparent
              opacity={0.2}
            />
          </mesh>
        ))}

        {/* Service Grid */}
        <mesh position={[0, 0, -3]} rotation={[0, time * 0.1, 0]}>
          <gridHelper args={[15, 30, '#f3f4f6', '#e5e7eb']} />
          <meshStandardMaterial 
            transparent
            opacity={0.02}
            wireframe
          />
        </mesh>
      </group>
    </Float>
  );
}

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
    <div className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8 relative">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
          <Suspense fallback={null}>
            <ServicesModel />
            <OrbitControls enableZoom={false} />
            <Environment preset="city" />
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={0.5} />
            <fog attach="fog" args={['#ffffff', 5, 20]} />
            <color attach="background" args={['#ffffff']} />
          </Suspense>
        </Canvas>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
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
            category="automation" 
            activeCategory={activeCategory} 
            onClick={() => setActiveCategory('automation')}
            label="Automation"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id} 
              className={`transition-all duration-700 delay-${(index % 3 + 1) * 200} ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-[30px] opacity-0'
              }`}
            >
              <Card className="h-full overflow-hidden hover:shadow-xl transition-all duration-300 border-0 shadow-md group">
                <div className="relative overflow-hidden h-48">
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-secondary/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 z-10">
                    <div className="absolute bottom-0 left-0 right-0 p-4 flex justify-between items-center">
                      <Link 
                        to={`/projects/${project.id}`}
                        className="px-4 py-2 bg-white text-secondary rounded-md font-medium hover:bg-accent hover:text-white transition-colors duration-300"
                      >
                        View Details
                      </Link>
                      <div className="flex gap-2">
                        {project.githubUrl && (
                          <a 
                            href={project.githubUrl} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="p-2 bg-white/90 text-gray-800 rounded-full hover:bg-accent hover:text-white transition-colors duration-300"
                          >
                            <Github className="h-4 w-4" />
                          </a>
                        )}
                        {project.demoUrl && (
                          <a 
                            href={project.demoUrl} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="p-2 bg-white/90 text-gray-800 rounded-full hover:bg-accent hover:text-white transition-colors duration-300"
                          >
                            <ExternalLink className="h-4 w-4" />
                          </a>
                        )}
                      </div>
                    </div>
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
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map(tech => (
                      <span 
                        key={tech} 
                        className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded group-hover:bg-secondary/10 group-hover:text-secondary transition-colors duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                        +{project.technologies.length - 3}
                      </span>
                    )}
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

export default Portfolio;
