import { Mail, Phone, MapPin, Twitter, Linkedin, Facebook } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-black">
      <div className="container mx-auto py-12 px-4 md:px-6 bg-zinc-50">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center">
              <img
                src="/lovable-uploads/8d69dfe1-1692-404d-a1df-d2c6ad112e56.png"
                alt="NURAL Logo"
                className="h-10 mr-2"
              />
            </div>
            <p className="text-black">
              Empowering investors with innovative technology and expert
              financial strategies.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-black hover:text-nural-400 transition duration-200"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="text-black hover:text-nural-400 transition duration-200"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className="text-black hover:text-nural-400 transition duration-200"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4 text-black">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/services"
                  className="text-black hover:text-nural-500 transition duration-200"
                >
                  Investment Planning
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-black hover:text-nural-500 transition duration-200"
                >
                  Trading Education
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-black hover:text-nural-500 transition duration-200"
                >
                  Trading Coaching
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-black hover:text-nural-500 transition duration-200"
                >
                  Strategy Development
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-black hover:text-nural-500 transition duration-200"
                >
                  Asset Management
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4 text-black">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/about"
                  className="text-black hover:text-nural-500 transition duration-200"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-black hover:text-nural-500 transition duration-200"
                >
                  Our Team
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-black hover:text-nural-500 transition duration-200"
                >
                  Mission & Vision
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-black hover:text-nural-500 transition duration-200"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4 text-black">Contact</h4>
            <ul className="space-y-2">
              <li className="flex items-center text-black">
                <MapPin size={16} className="mr-2" />
                <span>Bengaluru, Karnataka, India</span>
              </li>
              <li className="flex items-center text-black">
                <Mail size={16} className="mr-2" />
                <a
                  href="mailto:team@thenural.com"
                  className="text-black hover:text-nural-500 transition duration-200"
                >
                  team@thenural.com
                </a>
              </li>
              <li className="flex items-center text-black">
                <Phone size={16} className="mr-2" />
                <a
                  href="tel:+918310760036"
                  className="text-black hover:text-nural-500 transition duration-200 block"
                >
                  Siddharth Gowda
                  <br />
                  +91 831 076 0036
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-6 text-center text-black text-sm">
          <p>
            &copy; {new Date().getFullYear()} NURAL Investment & Financial
            Services. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
