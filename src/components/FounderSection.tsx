import { Quote } from 'lucide-react';

const FounderSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Founder's Image */}
            <div className="order-2 lg:order-1">
              <div className="relative">
                <div className="w-full h-96 bg-muted rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-32 bg-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-4xl font-bold text-primary-foreground">HN</span>
                    </div>
                    <p className="text-muted-foreground">Founder's Photo</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Founder's Message */}
            <div className="order-1 lg:order-2">
              <div className="mb-8">
                <Quote className="h-12 w-12 text-accent mb-6" />
                <h2 className="text-4xl font-bold text-foreground mb-6">A Message from Our Founder</h2>
              </div>

              <div className="space-y-6">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  "When I established HN Industries Equipments Pvt Ltd, my vision was simple yet 
                  ambitious: to create products that would stand the test of time and deliver 
                  uncompromising quality to our customers."
                </p>
                
                <p className="text-lg text-muted-foreground leading-relaxed">
                  "Over the years, we have built our reputation on three fundamental pillars: 
                  innovative engineering, rigorous quality control, and unwavering commitment 
                  to customer satisfaction. Every pipe, every fitting, and every solution we 
                  deliver carries our promise of excellence."
                </p>
                
                <p className="text-lg text-muted-foreground leading-relaxed">
                  "As we continue to grow and expand our capabilities, our core values remain 
                  unchanged. We are not just manufacturing products; we are building the 
                  infrastructure that powers industries and communities across the nation."
                </p>

                <div className="pt-6 border-t border-border">
                  <h4 className="text-xl font-bold text-foreground">Mr. Hriday Narayan</h4>
                  <p className="text-muted-foreground">Founder & Promoter</p>
                  <p className="text-muted-foreground">HN Industries Equipments Pvt Ltd</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;