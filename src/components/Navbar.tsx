import { useState, useEffect } from 'react';
import logo from '../assets/logo.png'; // <-- CHANGE THIS PATH TO YOUR LOGO

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'tracks', label: 'Events' },
    { id: 'schedule', label: 'Schedule' },
    { id: 'highlights', label: 'Highlights' },
    { id: 'coordinators', label: 'Coordinators' },
    { id: 'contact', label: 'Contact' },
    { id: 'register', label: '🚀 Register' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = navLinks
        .map(link => {
          const element = document.getElementById(link.id);
          if (element) {
            const rect = element.getBoundingClientRect();
            return { id: link.id, top: rect.top, bottom: rect.bottom };
          }
          return null;
        })
        .filter(Boolean);

      const currentSection =
        sections.find(section => section.top <= 100 && section.bottom >= 100) ||
        sections.find(section => section.top > 0 && section.top < 200);

      if (currentSection) setActiveSection(currentSection.id);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth',
      });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen
          ? 'bg-dark-card/95 backdrop-blur-md border-b border-dark-border'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">

          {/* LOGO + TITLE */}
          <div className="flex items-center space-x-3">
            <img
              src={logo}
              alt="Logo"
              className="h-10 w-10 object-contain"
            />
            <span className="text-2xl font-bold text-primary">DATA FUSION</span>
          </div>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map(link => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  activeSection === link.id
                    ? 'text-primary border-b-2 border-primary'
                    : 'text-text-secondary hover:text-primary'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* MOBILE MENU */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-2 bg-dark-card/95 backdrop-blur-md rounded-b-lg">
            {navLinks.map(link => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`block w-full text-left px-4 py-2 rounded-lg transition-colors ${
                  activeSection === link.id
                    ? 'text-primary bg-primary/10'
                    : 'text-text-secondary hover:text-primary hover:bg-dark-border/30'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
