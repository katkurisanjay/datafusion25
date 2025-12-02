import { useState, useEffect } from "react";

const Navbar = () => {
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const navLinks = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "tracks", label: "Events" },
    { id: "schedule", label: "Schedule" },
    { id: "highlights", label: "Highlights" },
    { id: "coordinators", label: "Coordinators" },
    { id: "contact", label: "Contact" },
    { id: "register", label: "🚀 Register" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const section = navLinks
        .map((l) => {
          const el = document.getElementById(l.id);
          if (!el) return null;
          const rect = el.getBoundingClientRect();
          return { id: l.id, top: rect.top, bottom: rect.bottom };
        })
        .filter(Boolean)
        .find((s) => s!.top <= 120 && s!.bottom >= 120);

      if (section) setActive(section.id);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const offset = 80;
    const y = el.getBoundingClientRect().top + window.scrollY - offset;

    window.scrollTo({ top: y, behavior: "smooth" });
    setOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? "bg-dark-card/95 backdrop-blur-md border-b border-dark-border"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-primary">DATA FUSION</div>

        <div className="hidden md:flex space-x-6">
          {navLinks.map((l) => (
            <button
              key={l.id}
              onClick={() => scrollTo(l.id)}
              className={`px-3 py-2 text-sm font-medium transition ${
                active === l.id
                  ? "text-primary border-b-2 border-primary"
                  : "text-text-secondary hover:text-primary"
              }`}
            >
              {l.label}
            </button>
          ))}
        </div>

        {/* Mobile Trigger */}
        <button className="md:hidden text-white" onClick={() => setOpen(!open)}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-dark-card/95 backdrop-blur-md rounded-b-lg mt-2 space-y-2 pb-4">
          {navLinks.map((l) => (
            <button
              key={l.id}
              onClick={() => scrollTo(l.id)}
              className={`block w-full px-4 py-2 text-left rounded-lg transition ${
                active === l.id
                  ? "text-primary bg-primary/10"
                  : "text-text-secondary hover:text-primary hover:bg-dark-border/30"
              }`}
            >
              {l.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
