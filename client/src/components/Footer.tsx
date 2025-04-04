import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, ArrowRight, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-white to-gray-50 text-gray-700 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-montserrat font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              xDev Solutions
            </h3>
            <p className="text-gray-600 mb-6">
              Innovation through technology. We build cutting-edge solutions that transform businesses.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 group">
                <Phone size={18} className="text-secondary group-hover:text-primary transition-colors duration-300" />
                <span className="text-gray-600 group-hover:text-primary transition-colors duration-300">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3 group">
                <Mail size={18} className="text-secondary group-hover:text-primary transition-colors duration-300" />
                <span className="text-gray-600 group-hover:text-primary transition-colors duration-300">contact@xdevsolutions.com</span>
              </div>
              <div className="flex items-center space-x-3 group">
                <MapPin size={18} className="text-secondary group-hover:text-primary transition-colors duration-300" />
                <span className="text-gray-600 group-hover:text-primary transition-colors duration-300">123 Tech Plaza, Silicon Valley, CA</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-montserrat font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">Quick Links</h3>
            <ul className="space-y-3">
              {['Home', 'Services', 'Portfolio', 'About', 'Contact'].map((item) => (
                <li key={item} className="group transition-transform duration-300 hover:-translate-y-1">
                  <Link 
                    to={`/${item.toLowerCase() === 'home' ? '' : item.toLowerCase()}`} 
                    className="flex items-center space-x-2"
                  >
                    <ArrowRight size={16} className="text-secondary group-hover:text-primary transition-colors duration-300" />
                    <span className="text-gray-600 group-hover:text-primary transition-colors duration-300">{item}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-montserrat font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">Our Services</h3>
            <ul className="space-y-3">
              {[
                'Web Development',
                'Mobile Apps',
                'UI/UX Design',
                'Cloud Services',
                'AI Solutions',
                'IT Consulting'
              ].map((service) => (
                <li key={service} className="group transition-transform duration-300 hover:-translate-y-1">
                  <Link to="/services" className="flex items-center space-x-2">
                    <ArrowRight size={16} className="text-secondary group-hover:text-primary transition-colors duration-300" />
                    <span className="text-gray-600 group-hover:text-primary transition-colors duration-300">{service}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-montserrat font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">Newsletter</h3>
            <p className="text-gray-600 mb-4">
              Subscribe to our newsletter for updates on the latest tech trends.
            </p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="px-4 py-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-secondary/50 flex-grow bg-white border border-gray-200 text-gray-600 placeholder:text-gray-400"
              />
              <Button 
                className="rounded-l-none bg-gradient-to-r from-primary to-secondary text-white hover:shadow-lg hover:scale-[1.02] transition-all duration-300"
              >
                <Send size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </div>
            
            {/* Social Media Links */}
            <div className="flex items-center space-x-4 mt-6">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
                <a 
                  key={index}
                  href="#" 
                  className="w-9 h-9 rounded-full bg-gradient-to-br from-primary/30 via-secondary/30 to-accent/30 flex items-center justify-center hover:bg-gradient-to-br hover:from-primary/40 hover:via-secondary/40 hover:to-accent/40 group transition-all duration-300 hover:scale-110"
                  aria-label="Social media"
                >
                  <Icon size={18} className="text-secondary group-hover:text-primary transition-colors duration-300" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-600">
              &copy; {currentYear} xDev Solutions. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0 flex space-x-6">
              <Link to="/privacy" className="text-sm text-gray-600 hover:text-primary transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-sm text-gray-600 hover:text-primary transition-colors duration-300">
                Terms of Service
              </Link>
              <Link to="/sitemap" className="text-sm text-gray-600 hover:text-primary transition-colors duration-300">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
