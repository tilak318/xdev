import { useState, useEffect } from 'react';
import { ArrowRight, Users, Code, Cloud, Shield, Zap, Target, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className={`text-5xl md:text-7xl font-montserrat font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent transition-all duration-1000 transform ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              Innovate with xDev Solutions
            </h1>
            <p className={`mt-6 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto transition-all duration-1000 delay-300 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              Transforming businesses through cutting-edge IT solutions and AI technologies. 
              We bring your digital vision to life.
            </p>
            <div className={`mt-10 transition-all duration-1000 delay-500 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-white text-secondary rounded-lg font-medium hover:bg-secondary hover:text-white transition-all duration-500 group shadow-lg hover:shadow-xl"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform duration-500" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent to-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-16">
            {stats.map((stat, index) => (
              <div 
                key={stat.label} 
                className={`group bg-white rounded-xl p-4 md:p-5 shadow-lg hover:shadow-2xl transition-all duration-500 relative ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-[30px] opacity-0'
                }`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/10 to-accent/5 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left rounded-xl"></div>
                <div className="relative z-10 text-center">
                  <div className="h-10 w-10 md:h-12 md:w-12 rounded-full bg-gradient-to-br from-primary/30 via-secondary/30 to-accent/30 flex items-center justify-center mx-auto mb-3 group-hover:bg-gradient-to-br group-hover:from-primary/40 group-hover:via-secondary/40 group-hover:to-accent/40 transition-all duration-500 group-hover:scale-110">
                    <span className="text-xl md:text-2xl text-secondary group-hover:text-primary transition-colors duration-500">{stat.icon}</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-primary group-hover:text-secondary transition-colors duration-500 mb-1">{stat.value}</h3>
                  <p className="text-sm md:text-base text-gray-600 group-hover:text-gray-800 transition-colors duration-500">{stat.label}</p>
                </div>
              </div>
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
