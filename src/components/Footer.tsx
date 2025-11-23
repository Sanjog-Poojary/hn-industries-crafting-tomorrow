import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    'Overview', 'Gallery', 'Features', 'Location', 'Products', 'Contact Us'
  ];

  const projects = [
    'PVC Pipes & Fittings', 'CPVC Pipes & Fittings', 'UPVC Pipes & Fittings',
    'HDPE Pipes & Fittings', 'SWR Systems', 'Irrigation Systems'
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-serif font-bold mb-4">HN INDUSTRIES</h3>
            <p className="mb-6 opacity-90 text-sm leading-relaxed">
              Leading manufacturer of premium industrial pipes and fittings, 
              committed to delivering leak-proof quality and long-lasting solutions.
            </p>
            
            <div className="space-y-3 text-sm">
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-3 text-secondary" />
                <span>+91 93243 45792</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-3 text-secondary" />
                <span>hriday@shivalikiepl.com</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-3 text-secondary" />
                <span>Wadilal Tower, Badlapur (W), Mumbai</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-serif font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href="#" className="opacity-70 hover:opacity-100 hover:text-secondary transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-lg font-serif font-semibold mb-4">Our Products</h4>
            <ul className="space-y-2 text-sm">
              {projects.map((project, index) => (
                <li key={index}>
                  <a href="#" className="opacity-70 hover:opacity-100 hover:text-secondary transition-colors">
                    {project}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter / Social */}
          <div>
            <h4 className="text-lg font-serif font-semibold mb-4">Stay Updated</h4>
            <p className="text-sm opacity-70 mb-4">
              Subscribe to our newsletter for the latest updates and offers.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="bg-white/10 p2 rounded-full hover:bg-secondary hover:text-primary transition-all">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-secondary hover:text-primary transition-all">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-secondary hover:text-primary transition-all">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-secondary hover:text-primary transition-all">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-sm">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="opacity-60 mb-4 md:mb-0">
              © 2024 HN Industries Equipments Pvt Ltd. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="opacity-60 hover:opacity-100 hover:text-secondary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="opacity-60 hover:opacity-100 hover:text-secondary transition-colors">
                Disclaimer
              </a>
              <a href="#" className="opacity-60 hover:opacity-100 hover:text-secondary transition-colors">
                RERA Details
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;