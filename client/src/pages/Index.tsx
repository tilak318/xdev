
import { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
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
                className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-secondary hover:bg-secondary/90 transition-colors md:text-lg"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent to-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-center mb-12">
            Our Expert Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="group relative p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="h-12 w-12 mb-4 text-secondary group-hover:text-accent transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-xl font-montserrat font-semibold mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

const services = [
  {
    title: "AI Solutions",
    description: "Harness the power of artificial intelligence to transform your business operations and decision-making processes.",
    icon: (
      <svg className="h-full w-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 8V12M12 16H12.01M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: "Custom Software",
    description: "Tailored software solutions designed to meet your unique business requirements and challenges.",
    icon: (
      <svg className="h-full w-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M8 9L12 5L16 9M16 15L12 19L8 15" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: "Cloud Services",
    description: "Scalable and secure cloud infrastructure solutions to power your digital transformation journey.",
    icon: (
      <svg className="h-full w-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M3 15C3 16.6569 4.34315 18 6 18H18C19.6569 18 21 16.6569 21 15V9C21 7.34315 19.6569 6 18 6H6C4.34315 6 3 7.34315 3 9V15Z" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
];

export default Index;
