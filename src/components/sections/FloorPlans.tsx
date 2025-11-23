import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const FloorPlans = () => {
  const [activeTab, setActiveTab] = useState("industrial");

  return (
    <section id="floorplans" className="section-padding bg-white">
      <div className="container-padding text-center">
        <span className="text-secondary uppercase tracking-widest text-sm font-medium">
          Technical Details
        </span>
        <h2 className="text-4xl md:text-5xl font-serif text-primary mt-2 mb-12">
          Product Specifications
        </h2>

        <Tabs defaultValue="industrial" className="w-full">
          <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto mb-12">
            <TabsTrigger value="industrial">Industrial Pipes</TabsTrigger>
            <TabsTrigger value="agricultural">Agricultural Pipes</TabsTrigger>
          </TabsList>

          <TabsContent value="industrial" className="animate-fade-in">
            <div className="bg-white p-8 rounded-lg shadow-lg border border-border">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="space-y-6">
                  <h3 className="text-2xl font-serif font-bold text-primary">Industrial Grade PVC/CPVC</h3>
                  <ul className="space-y-4">
                    <li className="flex items-center text-muted-foreground">
                      <span className="w-2 h-2 bg-secondary rounded-full mr-3" />
                      High chemical resistance
                    </li>
                    <li className="flex items-center text-muted-foreground">
                      <span className="w-2 h-2 bg-secondary rounded-full mr-3" />
                      Withstands high pressure and temperature
                    </li>
                    <li className="flex items-center text-muted-foreground">
                      <span className="w-2 h-2 bg-secondary rounded-full mr-3" />
                      Long service life (50+ years)
                    </li>
                    <li className="flex items-center text-muted-foreground">
                      <span className="w-2 h-2 bg-secondary rounded-full mr-3" />
                      Available in sizes: 1/2" to 12"
                    </li>
                  </ul>
                  <Button className="btn-primary-luxury w-full md:w-auto">
                    Download Technical Sheet
                  </Button>
                </div>
                <div className="h-[300px] bg-muted/20 rounded-lg flex items-center justify-center border-2 border-dashed border-muted">
                  <span className="text-muted-foreground">Industrial Pipe Diagram Placeholder</span>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Assuming a similar structure for agricultural pipes based on the TabsTrigger */}
          <TabsContent value="agricultural" className="animate-fade-in">
            <div className="bg-white p-8 rounded-lg shadow-lg border border-border">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="space-y-6">
                  <h3 className="text-2xl font-serif font-bold text-primary">Agricultural Grade PVC/CPVC</h3>
                  <ul className="space-y-4">
                    <li className="flex items-center text-muted-foreground">
                      <span className="w-2 h-2 bg-secondary rounded-full mr-3" />
                      UV resistant for outdoor use
                    </li>
                    <li className="flex items-center text-muted-foreground">
                      <span className="w-2 h-2 bg-secondary rounded-full mr-3" />
                      Optimized for irrigation systems
                    </li>
                    <li className="flex items-center text-muted-foreground">
                      <span className="w-2 h-2 bg-secondary rounded-full mr-3" />
                      Corrosion-resistant
                    </li>
                    <li className="flex items-center text-muted-foreground">
                      <span className="w-2 h-2 bg-secondary rounded-full mr-3" />
                      Available in sizes: 1" to 8"
                    </li>
                  </ul>
                  <Button className="btn-primary-luxury w-full md:w-auto">
                    Download Technical Sheet
                  </Button>
                </div>
                <div className="h-[300px] bg-muted/20 rounded-lg flex items-center justify-center border-2 border-dashed border-muted">
                  <span className="text-muted-foreground">Agricultural Pipe Diagram Placeholder</span>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default FloorPlans;
