import { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const productCategories = [
    'PVC Pipes & Fittings',
    'CPVC Pipes & Fittings', 
    'UPVC Pipes & Fittings',
    'HDPE Pipes & Fittings',
    'SWR Systems',
    'Irrigation Systems',
    'Solvent Cement',
    'Rain Water Harvesting'
  ];

  return (
    <nav className="bg-card shadow-card border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-xl font-bold text-primary">
              HN INDUSTRIES EQUIPMENTS PVT LTD
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-foreground hover:text-primary transition-colors">
              Home
            </a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors">
              About Us
            </a>
            
            {/* Products Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveDropdown('products')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center text-foreground hover:text-primary transition-colors">
                Products
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              
              {activeDropdown === 'products' && (
                <div className="absolute top-full left-0 mt-2 w-72 bg-card shadow-hover border border-border rounded-lg z-50 animate-fade-in backdrop-blur-sm">
                  <div className="py-3">
                    {productCategories.map((category, index) => (
                      <a
                        key={index}
                        href="#products"
                        className="block px-5 py-3 text-sm text-foreground hover:bg-secondary hover:text-primary transition-all duration-200 hover:translate-x-1"
                      >
                        {category}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <a href="#quality" className="text-foreground hover:text-primary transition-colors">
              Quality Policy
            </a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">
              Contact
            </a>
            
            <Button variant="accent" className="hover:scale-105 transform transition-all duration-300">
              Enquire Now
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground hover:text-primary"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-2">
              <a href="#" className="py-2 text-foreground hover:text-primary">Home</a>
              <a href="#about" className="py-2 text-foreground hover:text-primary">About Us</a>
              <a href="#products" className="py-2 text-foreground hover:text-primary">Products</a>
              <a href="#quality" className="py-2 text-foreground hover:text-primary">Quality Policy</a>
              <a href="#contact" className="py-2 text-foreground hover:text-primary">Contact</a>
              <Button variant="accent" className="mt-2">
                Enquire Now
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;