import { Wrench, Droplets, Hammer, Recycle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ProductsSection = () => {
  const products = [
    {
      icon: Wrench,
      title: "Pipes & Fittings",
      description: "Complete range of PVC, CPVC, UPVC, and HDPE pipes with precision-engineered fittings",
      categories: ["PVC Pipes", "CPVC Pipes", "UPVC Pipes", "HDPE Pipes", "Industrial Fittings"]
    },
    {
      icon: Droplets,
      title: "Irrigation Systems",
      description: "Advanced irrigation solutions for agricultural and landscape applications",
      categories: ["Drip Irrigation", "Sprinkler Systems", "Agricultural Pipes", "Water Distribution"]
    },
    {
      icon: Hammer,
      title: "Solvent Cement",
      description: "High-strength solvent cement for secure and permanent pipe joint solutions",
      categories: ["PVC Solvent", "CPVC Solvent", "Industrial Grade", "Quick Setting"]
    },
    {
      icon: Recycle,
      title: "Rain Water Harvesting",
      description: "Sustainable water management systems for rainwater collection and storage",
      categories: ["Collection Systems", "Storage Tanks", "Filtration Units", "Distribution Networks"]
    }
  ];

  return (
    <section id="products" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Our Products</h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive range of industrial pipes, fittings, and accessories engineered 
              for durability, performance, and reliability in demanding applications.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
            {products.map((product, index) => (
              <div key={index} className="bg-card-gradient p-8 rounded-lg shadow-card border border-border hover:shadow-hover hover-lift transition-all duration-300 animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="flex items-center mb-6">
                  <div className="bg-primary p-3 rounded-lg mr-4">
                    <product.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">{product.title}</h3>
                </div>
                
                <p className="text-muted-foreground mb-6">{product.description}</p>
                
                <div className="space-y-2">
                  {product.categories.map((category, categoryIndex) => (
                    <div key={categoryIndex} className="flex items-center">
                      <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                      <span className="text-foreground text-sm">{category}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button variant="accent" size="lg" className="px-8 font-semibold" asChild>
              <a href="#products">View All Products</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;