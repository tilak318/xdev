import { useState, useEffect, Suspense } from 'react';
import { ArrowRight, Users, Code, Cloud, Shield, Zap, Target, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, Float, PresentationControls, Environment } from '@react-three/drei';
import { motion } from 'framer-motion';

// 3D Model Component
function Model() {
  return (
    <Float
      speed={1.5}
      rotationIntensity={1}
      floatIntensity={2}
      floatingRange={[0, 0.5]}
    >
      <mesh>
        <torusKnotGeometry args={[1, 0.3, 128, 16]} />
        <meshNormalMaterial />
      </mesh>
    </Float>
  );
}

// 3D Card Component
function Card3D({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative h-[300px] w-full transform-gpu transition-all duration-500 hover:scale-105">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <PresentationControls
          global
          zoom={0.8}
          rotation={[0, -Math.PI / 4, 0]}
          polar={[-Math.PI / 4, Math.PI / 4]}
          azimuth={[-Math.PI / 4, Math.PI / 4]}
        >
          <group position={[0, 0, 0]}>
            <mesh receiveShadow castShadow>
              <boxGeometry args={[4, 2, 0.2]} />
              <meshStandardMaterial 
                color="#ffffff"
                metalness={0.5}
                roughness={0.2}
                envMapIntensity={2}
              />
            </mesh>
          </group>
        </PresentationControls>
        <Environment preset="city" />
      </Canvas>
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        {children}
      </div>
    </div>
  );
}

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section with 3D Model */}
      <section className="relative pt-32 pb-16 px-4 sm:px-6 lg:px-8 min-h-[80vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Canvas camera={{ position: [0, 0, 5] }}>
            <Suspense fallback={null}>
              <Model />
              <OrbitControls enableZoom={false} />
              <Environment preset="sunset" />
            </Suspense>
          </Canvas>
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-5xl md:text-7xl font-montserrat font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent"
            >
              Innovate with xDev Solutions
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="mt-6 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto"
            >
              Transforming businesses through cutting-edge IT solutions and AI technologies. 
              We bring your digital vision to life.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="mt-10"
            >
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-white text-secondary rounded-lg font-medium hover:bg-secondary hover:text-white transition-all duration-500 group shadow-lg hover:shadow-xl"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform duration-500" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section with 3D Cards */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent to-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {stats.map((stat, index) => (
              <Card3D key={stat.label}>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-primary mb-1">{stat.value}</div>
                  <p className="text-sm md:text-base text-gray-600">{stat.label}</p>
                </div>
              </Card3D>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className={`text-3xl md:text-4xl font-montserrat font-bold text-center mb-12 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[20px]'
          }`}>
            Our Expert Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={service.title} 
                className={`group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 relative ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-[30px] opacity-0'
                }`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/10 to-accent/5 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left rounded-2xl"></div>
                <div className="relative z-10">
                  <div className="h-12 w-12 rounded-full bg-gradient-to-br from-primary/30 via-secondary/30 to-accent/30 flex items-center justify-center mb-4 group-hover:bg-gradient-to-br group-hover:from-primary/40 group-hover:via-secondary/40 group-hover:to-accent/40 transition-all duration-500 group-hover:scale-110">
                    <span className="text-2xl text-secondary group-hover:text-primary transition-colors duration-500">{service.icon}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-primary group-hover:text-secondary transition-colors duration-500 mb-2">{service.title}</h3>
                  <p className="text-gray-600 group-hover:text-gray-800 transition-colors duration-500 mb-4">{service.description}</p>
                  <Link 
                    to="/services" 
                    className="inline-flex items-center text-secondary hover:text-primary transition-colors duration-500 group"
                  >
                    Learn more
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-2 transition-transform duration-500" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent to-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className={`text-3xl md:text-4xl font-montserrat font-bold text-center mb-12 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[20px]'
          }`}>
            Why Choose Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={feature.title} 
                className={`group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 relative ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-[30px] opacity-0'
                }`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/10 to-accent/5 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left rounded-2xl"></div>
                <div className="relative z-10">
                  <div className="h-12 w-12 rounded-full bg-gradient-to-br from-primary/30 via-secondary/30 to-accent/30 flex items-center justify-center mb-4 group-hover:bg-gradient-to-br group-hover:from-primary/40 group-hover:via-secondary/40 group-hover:to-accent/40 transition-all duration-500 group-hover:scale-110">
                    <span className="text-2xl text-secondary group-hover:text-primary transition-colors duration-500">{feature.icon}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-primary group-hover:text-secondary transition-colors duration-500 mb-2">{feature.title}</h3>
                  <p className="text-gray-600 group-hover:text-gray-800 transition-colors duration-500">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className={`max-w-7xl mx-auto bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 md:p-12 text-white text-center transition-all duration-1000 delay-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[20px]'
        }`}>
          <h2 className="text-2xl md:text-3xl font-montserrat font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="max-w-2xl mx-auto mb-8">
            Let's discuss how our services can help transform your business and drive growth.
          </p>
          <Link 
            to="/contact" 
            className="inline-flex items-center px-8 py-4 bg-white text-secondary rounded-lg font-medium hover:bg-secondary hover:text-white transition-all duration-500 group shadow-lg hover:shadow-xl"
          >
            Contact Us
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform duration-500" />
          </Link>
        </div>
      </section>
    </div>
  );
};

const stats = [
  { value: '500+', label: 'Projects Completed', icon: '🎯' },
  { value: '100+', label: 'Happy Clients', icon: '👥' },
  { value: '50+', label: 'Team Members', icon: '👨‍💻' },
  { value: '15+', label: 'Years Experience', icon: '⭐' },
];

const services = [
  {
    title: "AI Solutions",
    description: "Harness the power of artificial intelligence to transform your business operations and decision-making processes.",
    icon: "🤖",
  },
  {
    title: "Custom Software",
    description: "Tailored software solutions designed to meet your unique business requirements and challenges.",
    icon: "💻",
  },
  {
    title: "Cloud Services",
    description: "Scalable and secure cloud infrastructure solutions to power your digital transformation journey.",
    icon: "☁️",
  },
];

const features = [
  {
    title: "Expert Team",
    description: "Our experienced professionals bring years of industry expertise to every project.",
    icon: "👥",
  },
  {
    title: "Innovation Focus",
    description: "We stay ahead of the curve with cutting-edge technologies and methodologies.",
    icon: "💡",
  },
  {
    title: "Quality Assurance",
    description: "Rigorous testing and quality control ensure reliable and secure solutions.",
    icon: "✅",
  },
];

export default Index;
