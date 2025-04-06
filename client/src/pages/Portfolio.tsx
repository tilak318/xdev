import { useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float, Environment } from '@react-three/drei';
import { Suspense } from 'react';
import { ProjectCard } from '@/components/ProjectCard';
import { projects } from '@/data/projects';

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
          <CategoryButton 
            category="automation" 
            activeCategory={activeCategory} 
            onClick={() => setActiveCategory('automation')}
            label="Automation"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id}
              className={`transition-all duration-500 transform hover:-translate-y-1`}
            >
              <ProjectCard project={project} />
            </div>
          ))}
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