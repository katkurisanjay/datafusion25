import { Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-dark-card border-t border-dark-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          
          {/* College Info */}
          <div>
            <h3 className="text-xl font-bold text-primary mb-4">
              Vaagdevi College of Engineering
            </h3>
            <p className="text-text-muted text-sm mb-2">
              Bollikunta, Khila Warangal (Mandal)
            </p>
            <p className="text-text-muted text-sm mb-2">
              Warangal Urban (Dist.), Telangana – 506 005
            </p>
            <p className="text-text-muted text-sm">
              <a href="mailto:info@vaagdevi.edu.in" className="hover:text-primary">
                info@vaagdevi.edu.in
              </a>
            </p>
            <p className="text-text-muted text-sm">
              <a href="tel:+918886536969" className="hover:text-primary">
                +91-8886536969
              </a>
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-primary mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-text-muted hover:text-primary text-sm">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-text-muted hover:text-primary text-sm">
                  About
                </a>
              </li>
              <li>
                <a href="#tracks" className="text-text-muted hover:text-primary text-sm">
                  Tracks & Events
                </a>
              </li>
              <li>
                <a href="#schedule" className="text-text-muted hover:text-primary text-sm">
                  Schedule
                </a>
              </li>
              <li>
                <a href="#register" className="text-text-muted hover:text-primary text-sm">
                  Register
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-bold text-primary mb-4">
              Follow Us
            </h3>
            <div className="space-y-2">
              <a
                href="https://instagram.com/datahub_vce"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-muted hover:text-primary text-sm flex items-center space-x-2"
              >
                <Instagram size={18} />
                <span>@datahub_vce</span>
              </a>
            </div>
          </div>

        </div>

        <div className="border-t border-dark-border pt-8 text-center">
          <p className="text-text-muted text-sm mb-2">
            © 2025 Data Fusion – CSE (Data Science), Vaagdevi College of Engineering. All rights reserved.
          </p>
          <p className="text-text-muted text-xs">
            Designed & Developed by the Data Quest Web Team.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
