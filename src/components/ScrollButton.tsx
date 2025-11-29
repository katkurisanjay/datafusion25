import { useState, useEffect } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const ScrollButton = () => {
  const [showButton, setShowButton] = useState(false);
  const [isAboveRegister, setIsAboveRegister] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const registerSection = document.getElementById('register');
      
      if (!registerSection) return;

      const registerPosition = registerSection.getBoundingClientRect().top;

      // Show button after scrolling some amount
      setShowButton(window.scrollY > 100);

      // Check if user has scrolled past the register section
      setIsAboveRegister(registerPosition > window.innerHeight / 2);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = () => {
    const registerSection = document.getElementById('register');
    if (isAboveRegister && registerSection) {
      registerSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  if (!showButton) return null;

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-8 right-8 p-4 bg-primary hover:bg-primary/90 text-white rounded-full shadow-lg transition-all duration-300 hover:scale-110 glow-primary z-40"
      aria-label={isAboveRegister ? 'Scroll to register' : 'Scroll to top'}
      title={isAboveRegister ? 'Scroll to Register' : 'Scroll to Top'}
    >
      {isAboveRegister ? (
        <ChevronDown size={24} />
      ) : (
        <ChevronUp size={24} />
      )}
    </button>
  );
};

export default ScrollButton;
