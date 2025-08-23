import { Shield, Award, CheckCircle2, Star } from 'lucide-react';

const CertificationsSection = () => {
  const certifications = [
    {
      icon: Shield,
      title: "IS:15328-2003",
      description: "Indian Standard for PVC pipes and fittings",
      type: "BIS Certification"
    },
    {
      icon: Award,
      title: "ISO 4985-2021", 
      description: "International standard for pipe systems",
      type: "ISO Certification"
    },
    {
      icon: CheckCircle2,
      title: "Quality Management",
      description: "Comprehensive quality control systems",
      type: "Internal Standards"
    },
    {
      icon: Star,
      title: "Industry Excellence",
      description: "Recognition for manufacturing excellence",
      type: "Industry Awards"
    }
  ];

  return (
    <section id="quality" className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Quality Certifications</h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Our commitment to quality is validated by prestigious certifications and 
              adherence to international standards, ensuring superior products for our customers.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {certifications.map((cert, index) => (
              <div key={index} className="text-center">
                <div className="bg-primary-light p-6 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                  <cert.icon className="h-10 w-10 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-2">{cert.title}</h3>
                <p className="text-sm opacity-80 mb-2">{cert.type}</p>
                <p className="text-sm opacity-70">{cert.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center bg-primary-light p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">Our Quality Promise</h3>
            <p className="text-lg opacity-90 max-w-3xl mx-auto">
              Every product undergoes rigorous testing and quality checks to ensure it meets 
              the highest standards of performance, durability, and safety. We are committed 
              to delivering leak-proof, long-lasting solutions that exceed industry expectations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;