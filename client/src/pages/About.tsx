import { useEffect, useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float, Environment } from '@react-three/drei';
import { Suspense } from 'react';

// 3D Model Component for About Page
function AboutModel() {
  const [time, setTime] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prev) => prev + 0.01);
    }, 16);

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Float
      speed={1.5}
      rotationIntensity={1}
      floatIntensity={2}
      floatingRange={[0, 0.5]}
    >
      <group rotation={[isMobile ? 0 : time * 0.1, time * 0.2, 0]}>
        {/* Central Hub */}
        <group position={[0, 0, 0]}>
          {/* Main Sphere */}
          <mesh>
            <sphereGeometry args={[1.2, 32, 32]} />
            <meshStandardMaterial 
              color="#f3f4f6"
              metalness={0.2}
              roughness={0.8}
              transparent
              opacity={0.15}
              wireframe
            />
          </mesh>
          
          {/* Orbital Rings */}
          {Array.from({ length: 4 }).map((_, i) => (
            <mesh 
              key={i}
              position={[0, 0, 0]}
              rotation={[i * Math.PI / 4, time * 0.2, 0]}
            >
              <torusGeometry args={[2, 0.02, 16, 100]} />
              <meshStandardMaterial 
                color="#e5e7eb"
                metalness={0.1}
                roughness={0.9}
                transparent
                opacity={0.1}
              />
            </mesh>
          ))}
        </group>

        {/* Floating Elements */}
        {Array.from({ length: 12 }).map((_, i) => (
          <group 
            key={i}
            position={[
              Math.cos(i * Math.PI / 6) * 3,
              Math.sin(i * Math.PI / 6) * 3,
              Math.sin(i * Math.PI / 6) * 0.5
            ]}
            rotation={[time * 0.2, time * 0.3, time * 0.1]}
          >
            {/* Element Core */}
            <mesh>
              <octahedronGeometry args={[0.3, 0]} />
              <meshStandardMaterial 
                color="#f3f4f6"
                metalness={0.1}
                roughness={0.9}
                transparent
                opacity={0.1}
                wireframe
              />
            </mesh>
            
            {/* Connection Lines */}
            <mesh rotation={[0, i * Math.PI / 6 + time * 0.2, 0]}>
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

        {/* Data Stream */}
        {Array.from({ length: 15 }).map((_, i) => (
          <mesh 
            key={i}
            position={[
              Math.sin(i * Math.PI / 8 + time) * 4,
              Math.cos(i * Math.PI / 8 + time) * 4,
              Math.sin(i * Math.PI / 8 + time) * 0.5
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

        {/* Background Grid */}
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

// 3D Model Component for Services
function ServicesModel() {
  const [time, setTime] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prev) => prev + 0.01);
    }, 16);

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Float
      speed={1.5}
      rotationIntensity={1}
      floatIntensity={2}
      floatingRange={[0, 0.5]}
    >
      <group rotation={[isMobile ? time * 0.2 : 0, time * 0.3, isMobile ? 0 : time * 0.1]}>
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

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    setIsVisible(true);
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8 relative">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ 
          position: isMobile ? [0, 0, 12] : [0, 0, 8], 
          fov: isMobile ? 60 : 45 
        }}>
          <Suspense fallback={null}>
            <ServicesModel />
            <OrbitControls 
              enableZoom={false} 
              enablePan={false}
              minPolarAngle={isMobile ? Math.PI / 3 : 0}
              maxPolarAngle={isMobile ? Math.PI / 2 : Math.PI}
            />
            <Environment preset="city" />
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={0.5} />
            <fog attach="fog" args={['#ffffff', 5, 20]} />
            <color attach="background" args={['#ffffff']} />
          </Suspense>
        </Canvas>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className={`text-center transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <h1 className="text-4xl md:text-5xl font-montserrat font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent mb-6">
            About xDev Solutions
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
            Where innovation meets excellence in technology solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div className={`transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <h2 className="text-2xl md:text-3xl font-montserrat font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent mb-6">Our Story</h2>
            <p className="text-gray-600 mb-4">
              Founded in 2018, xDev Solutions was born from a simple yet powerful vision: to make cutting-edge technology accessible to businesses of all sizes. What started as a small team of passionate developers has grown into a comprehensive IT solutions provider trusted by clients worldwide.
            </p>
            <p className="text-gray-600 mb-4">
              Our journey has been marked by constant innovation, learning, and growth. We've embraced emerging technologies like artificial intelligence, machine learning, and cloud computing to deliver solutions that not only meet current needs but anticipate future challenges.
            </p>
            <p className="text-gray-600">
              Today, we're proud to be at the forefront of digital transformation, helping businesses leverage technology to achieve their goals, improve efficiency, and create exceptional experiences for their customers.
            </p>
          </div>
          
          <div className={`relative overflow-hidden rounded-xl shadow-lg h-[400px] transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <img 
              src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d" 
              alt="Team collaboration" 
              className="w-full h-full object-cover object-center rounded-xl"
            />
          </div>
        </div>

        <div className={`text-center mb-12 transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <h2 className="text-2xl md:text-3xl font-montserrat font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent mb-6">Our Mission & Values</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            At xDev Solutions, we're on a mission to empower businesses through innovative technology solutions that drive growth, efficiency, and competitive advantage. Our work is guided by a set of core values that define who we are.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {values.map((value, index) => (
            <Card 
              key={value.title} 
              className={`group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 relative ${
                isVisible ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <CardContent className="p-6 relative z-10">
                <div className="h-12 w-12 rounded-full bg-gradient-to-br from-primary/30 via-secondary/30 to-accent/30 flex items-center justify-center mb-4">
                  <span className="text-2xl text-secondary">{value.icon}</span>
                </div>
                <h3 className="text-xl font-montserrat font-semibold mb-3 text-primary">
                  {value.title}
                </h3>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 rounded-2xl p-8 md:p-12 mb-16">
          <div className={`text-center mb-10 transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <h2 className="text-2xl md:text-3xl font-montserrat font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent mb-6">Our Team</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              The heart of xDev Solutions is our diverse team of talented professionals who bring unique perspectives and skills to every project.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div 
                key={member.name} 
                className={`group relative transition-opacity duration-500 ${
                  isVisible ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <div className="overflow-hidden rounded-xl mb-4 aspect-square relative">
                  <img 
                    src={member.photo} 
                    alt={member.name} 
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <h3 className="text-lg font-semibold text-primary mb-1">{member.name}</h3>
                <p className="text-secondary text-sm mb-2">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const values = [
  {
    title: "Innovation",
    description: "We constantly push boundaries and explore new technologies to deliver cutting-edge solutions that keep our clients ahead of the curve.",
    icon: "💡",
  },
  {
    title: "Excellence",
    description: "We hold ourselves to the highest standards in everything we do, from code quality and design to client communication and service delivery.",
    icon: "✨",
  },
  {
    title: "Collaboration",
    description: "We believe the best solutions emerge when diverse perspectives come together, working as true partners with our clients and each other.",
    icon: "🤝",
  },
  {
    title: "Integrity",
    description: "We build trust through transparency, honesty, and ethical conduct in all our relationships and business practices.",
    icon: "🛡️",
  },
  {
    title: "Adaptability",
    description: "We embrace change and remain flexible, allowing us to navigate complex challenges and evolve in a rapidly changing industry.",
    icon: "🔄",
  },
  {
    title: "Client Focus",
    description: "We place our clients at the center of everything we do, aligning our solutions with their goals and delivering measurable value.",
    icon: "🎯",
  },
];

const team = [
  {
    name: "Pruthvi Viradiya",
    role: "CEO & Founder",
    bio: "Visionary leader driving xDev's strategic direction and growth.",
    photo: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
  },
  {
    name: "Alex Johnson",
    role: "CTO",
    bio: "Leads technology strategy, specializing in AI and scalable solutions.",
    photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
  },
  {
    name: "Tilak Viradiya",
    role: "AI Engineer",
    bio: "Develops cutting-edge AI solutions; full-stack expert.",
    photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
  },
  {
    name: "Keyur Moradiya",
    role: "Lead Developer",
    bio: "Guides development, crafting intuitive and beautiful user experiences.",
    photo: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
  },
];

export default About;
