
import { useState } from 'react';

const Services = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-montserrat font-bold text-primary mb-6">
            Our Services
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive IT and AI solutions tailored to elevate your business to new heights
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="relative overflow-hidden rounded-xl transition-all duration-300"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className={`p-8 bg-white shadow-lg transition-all duration-300 ${
                hoveredIndex === index ? 'transform -translate-y-2' : ''
              }`}>
                <div className="h-16 w-16 mx-auto mb-6 text-secondary">
                  {service.icon}
                </div>
                <h3 className="text-xl font-montserrat font-semibold mb-4 text-center">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-center mb-6">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <svg className="h-5 w-5 mr-2 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const services = [
  {
    title: "AI & Machine Learning",
    description: "Leverage the power of artificial intelligence to transform your business operations",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 8V12M12 16H12.01M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    features: [
      "Custom AI Solutions",
      "Machine Learning Models",
      "Natural Language Processing",
      "Predictive Analytics",
      "Computer Vision Systems"
    ]
  },
  {
    title: "Software Development",
    description: "Custom software solutions designed to meet your specific needs",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M8 9L12 5L16 9M16 15L12 19L8 15" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    features: [
      "Web Applications",
      "Mobile Apps",
      "Enterprise Software",
      "API Development",
      "Legacy System Integration"
    ]
  },
  {
    title: "Cloud Services",
    description: "Scalable and secure cloud solutions for modern businesses",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M3 15C3 16.6569 4.34315 18 6 18H18C19.6569 18 21 16.6569 21 15V9C21 7.34315 19.6569 6 18 6H6C4.34315 6 3 7.34315 3 9V15Z" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    features: [
      "Cloud Migration",
      "AWS/Azure Solutions",
      "Cloud Security",
      "Serverless Architecture",
      "DevOps Implementation"
    ]
  },
  {
    title: "IT Consulting",
    description: "Strategic technology consulting to drive business growth",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    features: [
      "Digital Strategy",
      "Technology Assessment",
      "Process Optimization",
      "Security Consulting",
      "Innovation Roadmap"
    ]
  },
  {
    title: "Cybersecurity",
    description: "Comprehensive security solutions to protect your digital assets",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 15V17M6 21H18C19.1046 21 20 20.1046 20 19V13C20 11.8954 19.1046 11 18 11H6C4.89543 11 4 11.8954 4 13V19C4 20.1046 4.89543 21 6 21ZM16 11V7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7V11H16Z" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    features: [
      "Security Audits",
      "Threat Detection",
      "Incident Response",
      "Compliance Management",
      "Security Training"
    ]
  },
  {
    title: "Data Analytics",
    description: "Transform your data into actionable insights",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M16 8V16M12 11V16M8 14V16M6 20H18C19.1046 20 20 19.1046 20 18V6C20 4.89543 19.1046 4 18 4H6C4.89543 4 4 4.89543 4 6V18C4 19.1046 4.89543 20 6 20Z" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    features: [
      "Business Intelligence",
      "Data Visualization",
      "Big Data Solutions",
      "Real-time Analytics",
      "Data Warehousing"
    ]
  }
];

export default Services;
