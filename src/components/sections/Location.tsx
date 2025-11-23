import { MapPin, Navigation } from "lucide-react";

const Location = () => {
  return (
    <section id="location" className="section-padding bg-muted/30">
      <div className="container-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Content */}
          <div>
            <span className="text-secondary uppercase tracking-widest text-sm font-medium">
              Connectivity
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-primary mt-2 mb-8">
              Strategically Located
            </h2>
            
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="bg-white p-3 rounded-full shadow-sm text-secondary">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-serif mb-2">Prime Location</h3>
                  <p className="text-muted-foreground">
                    Located in Badlapur (W), our facility is strategically positioned for efficient logistics and connectivity to major industrial hubs.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-white p-3 rounded-full shadow-sm text-secondary">
                  <Navigation className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-serif mb-2">Seamless Connectivity</h3>
                  <ul className="space-y-2 text-muted-foreground mt-2">
                    <li>• 5 mins from Badlapur Railway Station</li>
                    <li>• Easy access to MIDC Industrial Area</li>
                    <li>• Connected to Mumbai-Pune Expressway</li>
                    <li>• 45 mins from International Airport</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="bg-white p-2 shadow-xl h-[400px] relative overflow-hidden rounded-sm">
             <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.667957774676!2d73.2431335!3d19.166861!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be792cd3b772cb5%3A0x2b6d2d4c74fc5389!2sWadilal%20Tower!5e0!3m2!1sen!2sin!4v1763876641662!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy"
              className="grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
