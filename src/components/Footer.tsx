
import { Mail, Phone, MapPin, Twitter, Linkedin, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto py-12 px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold gradient-text">Neural</h3>
            <p className="text-gray-400">
              Empowering traders and investors with expert coaching and asset management strategies.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-neural-400 transition duration-200">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-neural-400 transition duration-200">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-neural-400 transition duration-200">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Services</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition duration-200">Trading Coaching</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition duration-200">Asset Management</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition duration-200">Strategy Development</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition duration-200">Investment Planning</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition duration-200">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition duration-200">Our Team</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition duration-200">Careers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition duration-200">Privacy Policy</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-400">
                <MapPin size={16} className="mr-2" />
                <span>123 Trading St, Financial District</span>
              </li>
              <li className="flex items-center text-gray-400">
                <Mail size={16} className="mr-2" />
                <a href="mailto:contact@neural.com" className="hover:text-white transition duration-200">contact@neural.com</a>
              </li>
              <li className="flex items-center text-gray-400">
                <Phone size={16} className="mr-2" />
                <a href="tel:+15551234567" className="hover:text-white transition duration-200">+1 (555) 123-4567</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-6 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Neural Trading & Asset Management. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
