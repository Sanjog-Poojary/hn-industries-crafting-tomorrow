import { Quote, Star } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Rajesh Kumar",
      title: "Project Manager, Industrial Solutions Ltd",
      content: "HN Industries has been our trusted partner for over 5 years. Their pipes and fittings have never failed us, even in the most demanding industrial applications. Excellent quality and reliable service.",
      rating: 5
    },
    {
      name: "Priya Sharma", 
      title: "Chief Engineer, Water Works Department",
      content: "The HDPE pipes supplied by HN Industries for our municipal water project have performed exceptionally well. Zero leakage issues and outstanding durability. Highly recommended for large-scale projects.",
      rating: 5
    },
    {
      name: "Amit Patel",
      title: "Director, Agricultural Development Corp",
      content: "Their irrigation systems transformed our agricultural operations. The drip irrigation pipes and fittings are of superior quality, leading to significant water savings and improved crop yields.",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-section-gradient">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">What Our Clients Say</h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Trusted by industry leaders across various sectors for our commitment 
              to quality, reliability, and exceptional service.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-card p-8 rounded-lg shadow-card border border-border relative">
                <Quote className="h-8 w-8 text-accent mb-4" />
                
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-accent fill-current" />
                  ))}
                </div>

                <p className="text-muted-foreground mb-6 italic">
                  "{testimonial.content}"
                </p>

                <div className="border-t border-border pt-4">
                  <h4 className="font-bold text-foreground">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;