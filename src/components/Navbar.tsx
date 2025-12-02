import React, { useEffect, useRef, useState } from 'react';

type NavLink = { id: string; label: string };

const DEFAULT_LOGO_DATA_URL =
  // simple SVG data URL placeholder (you can replace with your own image URL)
  `data:image/svg+xml;utf8,` +
  encodeURIComponent(
    `<svg xmlns='http://www.w3.org/2000/svg' width='120' height='40' viewBox='0 0 120 40'>
       <rect width='120' height='40' rx='6' fill='#0ea5a4'/>
       <text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='14' fill='white'>DATA FUSION</text>
     </svg>`
  );

const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [logoUrl, setLogoUrl] = useState<string>(DEFAULT_LOGO_DATA_URL);
  const [logoFileName, setLogoFileName] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const navLinks: NavLink[] = [
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
    let mounted = true;
    const handleScroll = () => {
      if (!mounted) return;
      setIsScrolled(window.scrollY > 50);

      // Determine active section based on scroll position
      const sections = navLinks
        .map((link) => {
          const element = document.getElementById(link.id);
          if (element) {
            const rect = element.getBoundingClientRect();
            return { id: link.id, top: rect.top, bottom: rect.bottom };
          }
          return null;
        })
        .filter(Boolean) as { id: string; top: number; bottom: number }[];

      const currentSection =
        sections.find((section) => section.top <= 100 && section.bottom >= 100) ||
        sections.find((section) => section.top > 0 && section.top < 200);

      if (currentSection) {
        setActiveSection(currentSection.id);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // initial check

    return () => {
      mounted = false;
      window.removeEventListener('scroll', handleScroll);
    };
  }, [navLinks]);

  // Cleanup created object URL when component unmounts or logo changes
  useEffect(() => {
    return () => {
      // revoke object URL if it's not the default inline data URL
      if (logoUrl && !logoUrl.startsWith('data:image/svg')) {
        try {
          URL.revokeObjectURL(logoUrl);
        } catch {
          // ignore
        }
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // run only on unmount

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Account for sticky navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
      setIsMobileMenuOpen(false); // Close mobile menu after clicking
    }
  };

  const handleLogoClick = () => {
    // open file dialog
    fileInputRef.current?.click();
  };

  const handleLogoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setError(null);
    const file = e.target.files?.[0];
    if (!file) return;

    // Validation: type & size
    const validTypes = ['image/png', 'image/jpeg', 'image/jpg', 'image/svg+xml', 'image/webp'];
    const maxSizeBytes = 2 * 1024 * 1024; // 2 MB

    if (!validTypes.includes(file.type)) {
      setError('Invalid file type. Use PNG/JPEG/SVG/WEBP.');
      e.target.value = ''; // reset input
      return;
    }
    if (file.size > maxSizeBytes) {
      setError('File too large. Max 2 MB.');
      e.target.value = '';
      return;
    }

    // Revoke previous object URL if applicable
    if (logoUrl && !logoUrl.startsWith('data:image/svg')) {
      try {
        URL.revokeObjectURL(logoUrl);
      } catch {
        // ignore
      }
    }

    // Use object URL for preview
    const objectUrl = URL.createObjectURL(file);
    setLogoUrl(objectUrl);
    setLogoFileName(file.name);
    e.target.value = '';
  };

  const resetToDefaultLogo = () => {
    if (logoUrl && !logoUrl.startsWith('data:image/svg')) {
      try {
        URL.revokeObjectURL(logoUrl);
      } catch {
        // ignore
      }
    }
    setLogoUrl(DEFAULT_LOGO_DATA_URL);
    setLogoFileName(null);
    setError(null);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen
          ? 'bg-dark-card/95 backdrop-blur-md border-b border-dark-border'
          : 'bg-transparent'
      }`}
      role="navigation"
      aria-label="Main Navigation"
    >
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* logo + site name */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => scrollToSection('home')}
              className="flex items-center gap-3 focus:outline-none"
              aria-label="Go to home"
            >
              <img
                src={logoUrl}
                alt="Site logo"
                className="w-10 h-10 rounded-md object-contain"
                onError={(e) => {
                  // fallback if image fails to load
                  (e.target as HTMLImageElement).src = DEFAULT_LOGO_DATA_URL;
                }}
              />
              <div className="hidden sm:block text-xl font-bold text-primary select-none">
                DATA FUSION
              </div>
            </button>

            {/* small logo upload control (desktop) */}
            <div className="hidden sm:flex items-center gap-2">
              <button
                onClick={handleLogoClick}
                className="text-sm px-2 py-1 border rounded-md bg-transparent hover:bg-dark-border/30"
                title="Upload logo"
                aria-label="Upload logo"
                type="button"
              >
                Upload Logo
              </button>
              <button
                onClick={resetToDefaultLogo}
                className="text-sm px-2 py-1 border rounded-md bg-transparent hover:bg-dark-border/30"
                title="Reset logo"
                aria-label="Reset logo to default"
                type="button"
              >
                Reset
              </button>
            </div>
          </div>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  activeSection === link.id
                    ? 'text-primary border-b-2 border-primary'
                    : 'text-text-secondary hover:text-primary'
                }`}
                type="button"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center gap-2">
            <div className="sm:hidden flex items-center gap-2">
              <button
                onClick={handleLogoClick}
                className="text-sm px-2 py-1 border rounded-md"
                title="Upload logo"
                aria-label="Upload logo"
                type="button"
              >
                Upload
              </button>
            </div>

            <button
              className="md:hidden text-white"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              title="Toggle mobile menu"
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div id="mobile-menu" className="md:hidden mt-4 pb-4 space-y-2 bg-dark-card/95 backdrop-blur-md rounded-b-lg">
            <div className="px-4 pt-2 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img src={logoUrl} alt="logo" className="w-9 h-9 rounded-md object-contain" />
                <div className="text-sm font-semibold">DATA FUSION</div>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={handleLogoClick}
                  className="px-2 py-1 text-sm rounded-md"
                  type="button"
                >
                  Upload
                </button>
                <button
                  onClick={resetToDefaultLogo}
                  className="px-2 py-1 text-sm rounded-md"
                  type="button"
                >
                  Reset
                </button>
              </div>
            </div>

            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`block w-full text-left px-4 py-2 rounded-lg transition-colors ${
                  activeSection === link.id
                    ? 'text-primary bg-primary/10'
                    : 'text-text-secondary hover:text-primary hover:bg-dark-border/30'
                }`}
                type="button"
              >
                {link.label}
              </button>
            ))}
          </div>
        )}

        {/* Hidden file input */}
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handleLogoChange}
          aria-hidden
        />

        {/* small error / filename display */}
        <div className="mt-2 px-1">
          {logoFileName && <div className="text-xs text-text-secondary">Uploaded: {logoFileName}</div>}
          {error && <div className="text-xs text-red-400">{error}</div>}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
