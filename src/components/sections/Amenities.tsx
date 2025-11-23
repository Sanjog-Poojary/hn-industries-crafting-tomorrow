import { ShieldCheck, Zap, Droplets, Leaf, Wrench, Award } from 'lucide-react';

const Amenities = () => {
  return (
    <section id="amenities" className="section-padding bg-primary text-white">
      <div className="container-padding">
        <div className="text-center mb-16">
            <span className="text-secondary uppercase tracking-widest text-sm font-medium">
              Why Choose Us
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-primary mt-2">
              Key Features
            </h2>
        </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {[
              { icon: ShieldCheck, title: "Leak Proof", desc: "Advanced joint technology" },
              { icon: Zap, title: "High Durability", desc: "Built to last 50+ years" },
              { icon: Droplets, title: "Chemical Resistant", desc: "Safe for all fluids" },
              { icon: Leaf, title: "Eco Friendly", desc: "100% Recyclable materials" },
              { icon: Wrench, title: "Easy Installation", desc: "Lightweight & flexible" },
              { icon: Award, title: "Certified Quality", desc: "ISO 9001:2015 Certified" }
            ].map((item, index) => (
              <div key={index} className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border border-border/50">
                <item.icon className="w-12 h-12 text-secondary mb-4" />
                <h3 className="text-xl font-serif font-semibold text-primary mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
      </div>
    </section>
  );
};

export default Amenities;
