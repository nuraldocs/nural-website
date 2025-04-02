
import { Mail, Phone, MapPin, Twitter, Linkedin, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto py-12 px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center">
              <img 
                src="/lovable-uploads/8d69dfe1-1692-404d-a1df-d2c6ad112e56.png" 
                alt="NURAL Logo" 
                className="h-10 mr-2"
              />
            </div>
            <p className="text-gray-400">
              Empowering investors with innovative technology and expert financial strategies.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-nural-400 transition duration-200">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-nural-400 transition duration-200">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-nural-400 transition duration-200">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Services</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition duration-200">Investment Management</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition duration-200">Trading Platform</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition duration-200">Financial Analytics</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition duration-200">Wealth Advisory</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition duration-200">Robo-Advisory</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition duration-200">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition duration-200">Our Team</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition duration-200">Mission & Vision</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition duration-200">Privacy Policy</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-400">
                <MapPin size={16} className="mr-2" />
                <span>123 Financial St, Investment District</span>
              </li>
              <li className="flex items-center text-gray-400">
                <Mail size={16} className="mr-2" />
                <a href="mailto:contact@nural.com" className="hover:text-white transition duration-200">contact@nural.com</a>
              </li>
              <li className="flex items-center text-gray-400">
                <Phone size={16} className="mr-2" />
                <a href="tel:+15551234567" className="hover:text-white transition duration-200">+1 (555) 123-4567</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-6 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} NURAL Investment & Financial Services. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
