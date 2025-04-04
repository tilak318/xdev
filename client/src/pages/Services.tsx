import { useState, useEffect } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from 'lucide-react';

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
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
