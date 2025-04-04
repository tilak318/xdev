import { useState, useEffect, Suspense } from 'react';
import { ArrowRight, Users, Code, Cloud, Shield, Zap, Target, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, Float, PresentationControls, Environment } from '@react-three/drei';
import { motion } from 'framer-motion';

// 3D Model Component
function Model() {
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
        {/* Digital Core */}
        <group position={[0, 0, 0]}>
          {/* Main Processor */}
          <mesh>
            <boxGeometry args={[1.5, 1.5, 1.5]} />
            <meshStandardMaterial 
              color="#f3f4f6"
              metalness={0.2}
              roughness={0.8}
              transparent
              opacity={0.15}
              wireframe
            />
          </mesh>
          
          {/* Circuit Lines */}
          {Array.from({ length: 6 }).map((_, i) => (
            <mesh 
              key={i}
              position={[0, 0, 0]}
              rotation={[i * Math.PI / 3, 0, 0]}
            >
              <planeGeometry args={[2, 2]} />
              <meshStandardMaterial 
                color="#e5e7eb"
                metalness={0.1}
                roughness={0.9}
                transparent
                opacity={0.1}
                wireframe
              />
            </mesh>
          ))}
        </group>

        {/* Digital Network */}
        {Array.from({ length: 8 }).map((_, i) => (
          <group 
            key={i}
            position={[
              Math.cos(i * Math.PI / 4) * 2.5,
              Math.sin(i * Math.PI / 4) * 2.5,
              Math.sin(i * Math.PI / 4) * 0.5
            ]}
            rotation={[time * 0.2, time * 0.3, time * 0.1]}
          >
            {/* Network Node */}
            <mesh>
              <boxGeometry args={[0.3, 0.3, 0.3]} />
              <meshStandardMaterial 
                color="#f3f4f6"
                metalness={0.1}
                roughness={0.9}
                transparent
                opacity={0.1}
                wireframe
              />
            </mesh>
            
            {/* Data Lines */}
            <mesh rotation={[0, i * Math.PI / 4 + time * 0.2, 0]}>
              <cylinderGeometry args={[0.01, 0.01, 2.5, 8]} />
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

        {/* Binary Data Stream */}
        {Array.from({ length: 20 }).map((_, i) => (
          <mesh 
            key={i}
            position={[
              Math.sin(i * Math.PI / 10 + time) * 3.5,
              Math.cos(i * Math.PI / 10 + time) * 3.5,
              Math.sin(i * Math.PI / 10 + time) * 0.5
            ]}
          >
            <boxGeometry args={[0.1, 0.1, 0.1]} />
            <meshStandardMaterial 
              color="#f3f4f6"
              metalness={0.1}
              roughness={0.9}
              transparent
              opacity={0.2}
            />
          </mesh>
        ))}

        {/* Circuit Board Pattern */}
        <mesh position={[0, 0, -2]} rotation={[0, time * 0.1, 0]}>
          <gridHelper args={[10, 20, '#f3f4f6', '#e5e7eb']} />
          <meshStandardMaterial 
            transparent
            opacity={0.03}
            wireframe
          />
        </mesh>

        {/* Digital Connections */}
        {Array.from({ length: 12 }).map((_, i) => (
          <mesh 
            key={i}
            position={[0, 0, 0]}
            rotation={[0, i * Math.PI / 6 + time * 0.2, 0]}
          >
            <torusGeometry args={[2, 0.01, 8, 100]} />
            <meshStandardMaterial 
              color="#e5e7eb"
              metalness={0.1}
              roughness={0.9}
              transparent
              opacity={0.05}
            />
          </mesh>
        ))}

        {/* Data Points */}
        {Array.from({ length: 30 }).map((_, i) => (
          <mesh 
            key={i}
            position={[
              Math.cos(i * Math.PI / 15) * 3,
              Math.sin(i * Math.PI / 15) * 3,
              Math.sin(i * Math.PI / 15) * 0.5
            ]}
          >
            <sphereGeometry args={[0.02, 8, 8]} />
            <meshStandardMaterial 
              color="#f3f4f6"
              metalness={0.1}
              roughness={0.9}
              transparent
              opacity={0.15}
            />
          </mesh>
        ))}

        {/* Digital Grid */}
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
                metalness={0.8}
                roughness={0.1}
                envMapIntensity={2}
                transparent
                opacity={0.9}
              />
            </mesh>
            {/* Glass Effect */}
            <mesh position={[0, 0, 0.11]}>
              <planeGeometry args={[4, 2]} />
              <meshStandardMaterial 
                color="#ffffff"
                metalness={0.9}
                roughness={0.1}
                transparent
                opacity={0.1}
                envMapIntensity={1}
              />
            </mesh>
          </group>
        </PresentationControls>
        <Environment preset="city" />
      </Canvas>
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="relative z-10 w-full h-full flex items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-lg"></div>
          <div className="relative z-20 text-center">
            {children}
          </div>
        </div>
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
      <section className="relative pt-32 pb-16 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
        <div className="absolute inset-0 z-0">
          <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
            <Suspense fallback={null}>
              <Model />
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
          <div className="text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-5xl md:text-7xl font-montserrat font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent drop-shadow-lg"
            >
              Innovate with xDev Solutions
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="mt-6 text-lg md:text-xl text-gray-700 max-w-3xl mx-auto drop-shadow-lg"
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
                className="inline-flex items-center px-6 py-2.5 bg-gradient-to-r from-primary to-secondary text-white rounded-full text-base font-medium hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform duration-500" />
              </Link>
            </motion.div>
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
