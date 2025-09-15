import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-manufacturing.jpg';

const HeroSection = () => {
  return (
    <section className="relative h-[600px] overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-hero-gradient opacity-80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
        <div className="max-w-3xl text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            CRAFTING THE FUTURE
          </h1>
          <p className="text-xl md:text-2xl mb-4 font-medium">
            with HN INDUSTRIES EQUIPMENTS PVT LTD
          </p>
          <p className="text-lg mb-8 opacity-90 max-w-2xl">
            Leading manufacturer of premium industrial pipes and fittings, delivering 
            leak-proof quality and long-lasting solutions for all your industrial needs.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              variant="hero"
              size="lg" 
              className="px-8 py-4 text-lg font-semibold"
              asChild
            >
              <a href="#contact">Get Quote Now</a>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-white text-white hover:bg-white hover:text-primary font-semibold px-8 py-4 text-lg backdrop-blur-sm"
              asChild
            >
              <a href="#products">View Products</a>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;