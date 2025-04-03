
import { useEffect, useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from 'lucide-react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className={`text-center transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <h1 className="text-4xl md:text-5xl font-montserrat font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent mb-6">
            About xDev Solutions
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
            Where innovation meets excellence in technology solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-[-50px] opacity-0'}`}>
            <h2 className="text-2xl md:text-3xl font-montserrat font-bold text-primary mb-6">Our Story</h2>
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
          
          <div className={`relative overflow-hidden rounded-xl shadow-lg h-[400px] transition-all duration-1000 delay-500 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-[50px] opacity-0'}`}>
            <div className="absolute inset-0 bg-gradient-to-tr from-secondary/30 to-accent/20 z-10 rounded-xl"></div>
            <img 
              src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d" 
              alt="Team collaboration" 
              className="w-full h-full object-cover object-center rounded-xl"
            />
          </div>
        </div>

        <div className={`text-center mb-12 transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-[20px] opacity-0'}`}>
          <h2 className="text-2xl md:text-3xl font-montserrat font-bold text-primary mb-6">Our Mission & Values</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            At xDev Solutions, we're on a mission to empower businesses through innovative technology solutions that drive growth, efficiency, and competitive advantage. Our work is guided by a set of core values that define who we are.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {values.map((value, index) => (
            <Card key={value.title} className="group overflow-hidden border-0 shadow-md hover:shadow-xl transition-all duration-300 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-secondary/5 to-accent/5 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              <CardContent className="p-6 relative z-10">
                <div className="h-12 w-12 rounded-full bg-secondary/10 flex items-center justify-center mb-4 group-hover:bg-secondary/20 transition-colors duration-300">
                  <span className="text-2xl text-secondary">{value.icon}</span>
                </div>
                <h3 className="text-xl font-montserrat font-semibold mb-3 text-primary group-hover:text-secondary transition-colors duration-300">
                  {value.title}
                </h3>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-gray-50 rounded-2xl p-8 md:p-12 mb-16">
          <div className={`text-center mb-10 transition-all duration-1000 delay-900 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <h2 className="text-2xl md:text-3xl font-montserrat font-bold text-primary mb-6">Our Team</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              The heart of xDev Solutions is our diverse team of talented professionals who bring unique perspectives and skills to every project.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div 
                key={member.name} 
                className={`group relative transition-all duration-700 delay-${
                  (index + 1) * 200
                } ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-[30px] opacity-0'}`}
              >
                <div className="overflow-hidden rounded-xl mb-4 aspect-square relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-end">
                    <div className="p-4 w-full">
                      <div className="flex justify-center space-x-3">
                        <a href="#" className="h-8 w-8 rounded-full bg-white flex items-center justify-center text-secondary hover:bg-accent hover:text-white transition-all duration-300">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                          </svg>
                        </a>
                        <a href="#" className="h-8 w-8 rounded-full bg-white flex items-center justify-center text-secondary hover:bg-accent hover:text-white transition-all duration-300">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                            <rect width="4" height="12" x="2" y="9"></rect>
                            <circle cx="4" cy="4" r="2"></circle>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                  <img 
                    src={member.photo} 
                    alt={member.name} 
                    className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-lg font-semibold text-primary mb-1">{member.name}</h3>
                <p className="text-secondary text-sm mb-2">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>

        <div className={`bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 md:p-12 text-white text-center transition-all duration-1000 delay-1100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[20px]'}`}>
          <h2 className="text-2xl md:text-3xl font-montserrat font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="max-w-2xl mx-auto mb-8">
            Partner with xDev Solutions and leverage our expertise to drive innovation and growth for your organization.
          </p>
          <a 
            href="/contact" 
            className="inline-flex items-center px-6 py-3 bg-white text-secondary rounded-md font-medium hover:bg-accent hover:text-white transition-all duration-300 group"
          >
            Get in Touch
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </a>
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
    name: "Alex Johnson",
    role: "CEO & Founder",
    bio: "Tech visionary with 15+ years of experience in software development and IT leadership.",
    photo: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
  },
  {
    name: "Sarah Chen",
    role: "CTO",
    bio: "AI specialist and software architect with a focus on scalable enterprise solutions.",
    photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
  },
  {
    name: "Michael Rodriguez",
    role: "Lead Developer",
    bio: "Full-stack developer with expertise in React, Node.js, and cloud infrastructure.",
    photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
  },
  {
    name: "Priya Patel",
    role: "UX/UI Designer",
    bio: "Creative designer passionate about crafting intuitive and beautiful user experiences.",
    photo: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
  },
];

export default About;
