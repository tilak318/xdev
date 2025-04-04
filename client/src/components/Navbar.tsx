
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { title: 'Home', path: '/' },
    { title: 'Services', path: '/services' },
    { title: 'Portfolio', path: '/portfolio' },
    { title: 'About', path: '/about' },
    { title: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/80 backdrop-blur-lg shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center space-x-2">
              <span className="font-montserrat font-bold text-xl bg-gradient-to-r from-secondary via-accent to-secondary bg-clip-text text-transparent">
                xDev Solutions
              </span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="font-inter text-sm font-medium text-gray-700 hover:text-secondary transition-colors"
                >
                  {item.title}
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="group text-gray-700 hover:text-secondary transition-colors"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? (
                  <X size={24} className="text-white" />
                ) : (
                  <Menu 
                    size={24} 
                    className="bg-gradient-to-r from-secondary via-accent to-secondary bg-clip-text text-transparent" 
                  />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Fullscreen Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-white z-50 flex flex-col items-center justify-center md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="absolute top-4 right-4 text-secondary hover:text-accent transition-colors"
            aria-label="Close menu"
          >
            <X size={24} className="bg-gradient-to-r from-secondary via-accent to-secondary bg-clip-text text-transparent" />
          </button>
          
          <div className="flex flex-col items-center space-y-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="font-montserrat text-2xl font-medium bg-gradient-to-r from-secondary via-accent to-secondary bg-clip-text text-transparent"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
