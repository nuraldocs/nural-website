import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleScrollToContact = () => {
    setIsMenuOpen(false); // Close menu if open (for mobile)
    if (location.pathname === "/") {
      const section = document.getElementById("contact");
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate("/", { state: { scrollToContact: true } });
    }
  };

  // Scroll after navigating to /
  useEffect(() => {
    if (location.pathname === "/" && location.state?.scrollToContact) {
      const section = document.getElementById("contact");
      if (section) {
        setTimeout(() => {
          section.scrollIntoView({ behavior: "smooth" });
        }, 200); // delay to wait for section to mount
      }
    }
  }, [location]);

  return (
    <nav className="w-full py-4 bg-white/95 sticky top-0 z-50 shadow-sm backdrop-blur-sm">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2">
              <img
                src="/lovable-uploads/8d69dfe1-1692-404d-a1df-d2c6ad112e56.png"
                alt="Nural Logo"
                className="h-10"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/services"
              className="text-gray-700 hover:text-nural-500 transition duration-200"
            >
              Services
            </Link>
            <Link
              to="/about"
              className="text-gray-700 hover:text-nural-500 transition duration-200"
            >
              About
            </Link>
            <a
              href="/#testimonials"
              className="text-gray-700 hover:text-nural-500 transition duration-200"
            >
              Testimonials
            </a>
            <a
              href="/#instagram"
              className="text-gray-700 hover:text-nural-500 transition duration-200"
            >
              Instagram
            </a>
            <Link
              to="/contact"
              className="text-gray-700 hover:text-nural-500 transition duration-200"
            >
              Contact
            </Link>
            <Button
              className="bg-nural-500 hover:bg-nural-600 rounded-full"
              onClick={handleScrollToContact}
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
              aria-label="Toggle Menu"
              className="rounded-full"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={cn(
            "md:hidden absolute left-0 right-0 bg-white shadow-md transition-all duration-300 ease-in-out overflow-hidden",
            isMenuOpen ? "max-h-[300px] py-4" : "max-h-0"
          )}
        >
          <div className="container mx-auto px-4 flex flex-col space-y-4">
            <Link
              to="/services"
              className="text-gray-700 hover:text-nural-500 transition duration-200 py-2"
            >
              Services
            </Link>
            <Link
              to="/about"
              className="text-gray-700 hover:text-nural-500 transition duration-200 py-2"
            >
              About
            </Link>
            <a
              href="/#testimonials"
              className="text-gray-700 hover:text-nural-500 transition duration-200 py-2"
            >
              Testimonials
            </a>
            <a
              href="/#instagram"
              className="text-gray-700 hover:text-nural-500 transition duration-200 py-2"
            >
              Instagram
            </a>
            <Link
              to="/contact"
              className="text-gray-700 hover:text-nural-500 transition duration-200 py-2"
            >
              Contact
            </Link>
            <Button
              className="bg-nural-500 hover:bg-nural-600 w-full rounded-full"
              onClick={handleScrollToContact}
            >
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
