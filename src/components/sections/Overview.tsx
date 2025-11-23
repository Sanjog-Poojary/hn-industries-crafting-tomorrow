import { Button } from "@/components/ui/button";

const Overview = () => {
  return (
    <section id="overview" className="section-padding bg-white">
      <div className="container-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <span className="text-secondary uppercase tracking-widest text-sm font-medium">
              Our Vision
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-primary">
              Excellence in Industrial Manufacturing
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              HN Industries is not just a manufacturer; it is a symbol of reliability. 
              Designed for those who seek the best, every product we create 
              meets the highest standards of quality and durability.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              With state-of-the-art facilities and a commitment to innovation, 
              we offer solutions that stand the test of time. 
              Experience the difference of true industrial craftsmanship.
            </p>
            <Button className="btn-outline-luxury mt-4">
              Download Brochure
            </Button>
          </div>

          {/* Image Content */}
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-full h-full border-2 border-secondary z-0" />
            <img
              src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=1200&auto=format&fit=crop"
              alt="Industrial Facility"
              className="relative z-10 w-full h-[500px] object-cover shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Overview;
