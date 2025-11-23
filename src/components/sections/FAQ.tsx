import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  return (
    <section id="faq" className="section-padding bg-muted/30">
      <div className="container-padding max-w-4xl">
        <div className="text-center mb-12">
          <span className="text-secondary uppercase tracking-widest text-sm font-medium">
            Common Queries
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-primary mt-2">
            Frequently Asked Questions
          </h2>
        </div>

        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-lg font-serif">
              What types of pipes do you manufacture?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground text-base">
              We manufacture a wide range of pipes including PVC, CPVC, UPVC, HDPE, and SWR systems suitable for various industrial and agricultural applications.
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-lg font-serif">
              Are your products ISO certified?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground text-base">
              Yes, all our products are manufactured adhering to strict ISO quality standards to ensure durability and leak-proof performance.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger className="text-lg font-serif">
              Do you offer bulk supply for construction projects?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground text-base">
              Absolutely. We specialize in bulk supply for large-scale construction, irrigation, and industrial projects. Please contact our sales team for quotes.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4">
            <AccordionTrigger className="text-lg font-serif">
              What is the warranty on your products?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground text-base">
              We offer industry-leading warranties on our products against manufacturing defects. Specific warranty terms vary by product category.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
