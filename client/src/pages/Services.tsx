import { useState, useEffect } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from 'lucide-react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float, PresentationControls, Environment } from '@react-three/drei';
import { Suspense } from 'react';

// 3D Model Component for Services Page
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

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

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
            Our Services
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
            Comprehensive IT solutions tailored to your business needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={service.title} 
              className={`group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 relative ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-[30px] opacity-0'
              }`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/10 to-accent/5 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></div>
              <CardContent className="p-6 relative z-10">
                <div className="h-12 w-12 rounded-full bg-gradient-to-br from-primary/30 via-secondary/30 to-accent/30 flex items-center justify-center mb-4 group-hover:bg-gradient-to-br group-hover:from-primary/40 group-hover:via-secondary/40 group-hover:to-accent/40 transition-all duration-500 group-hover:scale-110">
                  <span className="text-2xl text-secondary group-hover:text-primary transition-colors duration-500">{service.icon}</span>
                </div>
                <h3 className="text-xl font-montserrat font-semibold mb-3 text-primary group-hover:text-secondary transition-colors duration-500">
                  {service.title}
                </h3>
                <p className="text-gray-600 group-hover:text-gray-800 transition-colors duration-500 mb-4">
                  {service.description}
                </p>
                <ul className="space-y-2 mb-4">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600 group-hover:text-gray-800 transition-colors duration-500">
                      <svg className="h-5 w-5 mr-2 text-secondary group-hover:text-primary transition-colors duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <a 
                  href="/contact" 
                  className="inline-flex items-center text-secondary hover:text-primary transition-colors duration-500 group"
                >
                  Learn more
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-2 transition-transform duration-500" />
                </a>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className={`bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 rounded-2xl p-8 md:p-12 text-center mt-16 transition-all duration-1000 delay-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[20px]'
        }`}>
          <h2 className="text-2xl md:text-3xl font-montserrat font-bold text-primary mb-6">Ready to Get Started?</h2>
          <p className="max-w-2xl mx-auto mb-8 text-gray-600">
            Let's discuss how our services can help transform your business and drive growth.
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

const services = [
  {
    title: "Web Development",
    description: "Custom websites and web applications built with cutting-edge technologies.",
    icon: "🌐",
    features: [
      "Responsive Design",
      "Modern Frameworks",
      "SEO Optimization",
      "Performance Focus"
    ]
  },
  {
    title: "Mobile Apps",
    description: "Native and cross-platform mobile applications for iOS and Android.",
    icon: "📱",
    features: [
      "iOS & Android",
      "Cross-platform",
      "User Experience",
      "App Store Ready"
    ]
  },
  {
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure and deployment solutions.",
    icon: "☁️",
    features: [
      "AWS & Azure",
      "DevOps",
      "Security",
      "24/7 Support"
    ]
  }
];

export default Services;
