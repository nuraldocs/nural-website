
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuActive, setIsMenuActive] = useState(false);

  const toggleMenu = () => {
    setIsMenuActive(!isMenuActive);
  };

  return (
    <nav className="navbar is-white is-fixed-top has-shadow" role="navigation" aria-label="main navigation">
      <div className="container">
        <div className="navbar-brand">
          <a href="/" className="navbar-item">
            <img 
              src="/lovable-uploads/8d69dfe1-1692-404d-a1df-d2c6ad112e56.png" 
              alt="NURAL Logo" 
              width="112" 
              height="28"
            />
          </a>

          <a 
            role="button" 
            className={`navbar-burger ${isMenuActive ? 'is-active' : ''}`}
            aria-label="menu" 
            aria-expanded={isMenuActive ? "true" : "false"}
            onClick={toggleMenu}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div className={`navbar-menu ${isMenuActive ? 'is-active' : ''}`}>
          <div className="navbar-end">
            <a href="#services" className="navbar-item">Services</a>
            <a href="#about" className="navbar-item">About</a>
            <a href="#testimonials" className="navbar-item">Testimonials</a>
            <a href="#instagram" className="navbar-item">Instagram</a>
            <a href="#contact" className="navbar-item">Contact</a>
            <div className="navbar-item">
              <a href="#get-started" className="button is-neural">Get Started</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
