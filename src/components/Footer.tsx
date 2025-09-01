import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    'Home', 'About Us', 'Products', 'Quality Policy', 'Certifications', 'Contact Us'
  ];

  const products = [
    'PVC Pipes & Fittings', 'CPVC Pipes & Fittings', 'UPVC Pipes & Fittings',
    'HDPE Pipes & Fittings', 'SWR Systems', 'Irrigation Systems'
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-bold mb-4">HN INDUSTRIES EQUIPMENTS PVT LTD</h3>
            <p className="mb-6 opacity-90">
              Leading manufacturer of premium industrial pipes and fittings, 
              committed to delivering leak-proof quality and long-lasting solutions.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-3" />
                <span>+91 93243 45792</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-3" />
                <span>info@hnindustries.com</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-3" />
                <span>Industrial Area, Phase-II, New Delhi</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href="#" className="opacity-90 hover:opacity-100 hover:text-accent transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Products</h4>
            <ul className="space-y-2">
              {products.map((product, index) => (
                <li key={index}>
                  <a href="#" className="opacity-90 hover:opacity-100 hover:text-accent transition-colors">
                    {product}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Business Hours & Social */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Business Hours</h4>
            <div className="space-y-2 mb-6">
              <p className="opacity-90">Monday - Friday: 9:00 AM - 6:00 PM</p>
              <p className="opacity-90">Saturday: 9:00 AM - 2:00 PM</p>
              <p className="opacity-90">Sunday: Closed</p>
            </div>

            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="opacity-90 hover:opacity-100 hover:text-accent transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="opacity-90 hover:opacity-100 hover:text-accent transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="opacity-90 hover:opacity-100 hover:text-accent transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="opacity-90 hover:opacity-100 hover:text-accent transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-light mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="opacity-90 mb-4 md:mb-0">
              © 2024 HN Industries Equipments Pvt Ltd. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="opacity-90 hover:opacity-100 hover:text-accent transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="opacity-90 hover:opacity-100 hover:text-accent transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;