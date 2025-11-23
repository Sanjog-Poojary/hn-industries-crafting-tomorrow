import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2400&auto=format&fit=crop"
          alt="Industrial Excellence"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4 md:px-8 pt-20">
        <span className="text-secondary uppercase tracking-[0.3em] text-sm md:text-base mb-4 animate-fade-in">
          Premium Industrial Solutions
        </span>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-6 animate-slide-up">
          HN INDUSTRIES
        </h1>
        
        <p className="text-xl md:text-2xl text-white/90 font-light tracking-wide mb-8 opacity-90 max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: '0.2s' }}>
          Crafting Tomorrow with Quality Pipes & Fittings
        </p>

        <div className="flex flex-col md:flex-row gap-4 animate-slide-up delay-200">
          <Button 
            size="lg"
            className="bg-secondary hover:bg-secondary-hover text-primary-foreground font-semibold rounded-none px-8 py-6 text-lg min-w-[200px]"
          >
            Enquire Now
          </Button>
          <Button 
            size="lg"
            className="bg-white text-primary hover:bg-gray-100 font-semibold rounded-none px-8 py-6 text-lg min-w-[200px]"
          >
            View Products
          </Button>
        </div>

        {/* Key Stats */}
        <div className="absolute bottom-24 left-0 w-full hidden md:block animate-fade-in delay-300">
          <div className="container mx-auto px-4">
            <div className="flex justify-center items-center space-x-12 text-white">
              <div className="flex flex-col items-center">
                <span className="text-3xl font-serif font-bold">ISO</span>
                <span className="text-sm uppercase tracking-wider opacity-80">Certified</span>
              </div>
              <div className="w-px h-12 bg-white/20"></div>
              <div className="flex flex-col items-center">
                <span className="text-3xl font-serif font-bold">100%</span>
                <span className="text-sm uppercase tracking-wider opacity-80">Quality</span>
              </div>
              <div className="w-px h-12 bg-white/20"></div>
              <div className="flex flex-col items-center">
                <span className="text-3xl font-serif font-bold">Global</span>
                <span className="text-sm uppercase tracking-wider opacity-80">Standards</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <ChevronDown className="w-8 h-8 text-white/70" />
      </div>
    </section>
  );
};

export default Hero;
