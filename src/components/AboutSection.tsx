import { CheckCircle, Award, Users, Factory } from 'lucide-react';

const AboutSection = () => {
  const highlights = [
    {
      icon: Factory,
      title: "Manufacturing Excellence",
      description: "State-of-the-art manufacturing facilities with cutting-edge technology"
    },
    {
      icon: Award,
      title: "Quality Certified",
      description: "ISO and BIS certified products meeting international standards"
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Experienced professionals dedicated to delivering superior solutions"
    },
    {
      icon: CheckCircle,
      title: "Trusted Partner",
      description: "Reliable partner for industrial pipe and fitting solutions nationwide"
    }
  ];

  return (
    <section id="about" className="py-20 bg-section-gradient">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Who We Are</h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              HN Industries Equipments Pvt Ltd is a leading manufacturer and supplier of premium 
              industrial pipes and fittings, committed to delivering leak-proof quality and 
              long-lasting solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-bold text-primary mb-6">Our Expertise</h3>
              <p className="text-muted-foreground mb-6">
                With years of industry experience, we specialize in manufacturing a comprehensive 
                range of pipes and fittings including PVC, CPVC, UPVC, HDPE, SWR systems, 
                irrigation solutions, and high-quality solvent cement.
              </p>
              <p className="text-muted-foreground mb-8">
                Our commitment to excellence ensures that every product meets the highest standards 
                of quality, durability, and performance, making us the preferred choice for 
                industrial applications across various sectors.
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-accent mr-3" />
                  <span className="text-foreground">IS:15328-2003 Certified</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-accent mr-3" />
                  <span className="text-foreground">ISO 4985-2021 Compliant</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-accent mr-3" />
                  <span className="text-foreground">BIS Standards Approved</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {highlights.map((highlight, index) => (
                <div key={index} className="bg-card p-6 rounded-lg shadow-card border border-border hover-lift animate-fade-in hover:shadow-hover transition-all duration-300" style={{animationDelay: `${index * 0.1}s`}}>
                  <highlight.icon className="h-8 w-8 text-accent mb-4" />
                  <h4 className="font-semibold text-foreground mb-2">{highlight.title}</h4>
                  <p className="text-sm text-muted-foreground">{highlight.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;