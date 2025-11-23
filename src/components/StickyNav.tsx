import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const StickyNav = () => {
  const [activeSection, setActiveSection] = useState("overview");
  const [isVisible, setIsVisible] = useState(false);

  const sections = [
    { id: "overview", label: "Overview" },
    { id: "gallery", label: "Gallery" },
    { id: "amenities", label: "Features" },
    { id: "location", label: "Location" },
    { id: "floorplans", label: "Products" },
    { id: "faq", label: "FAQ" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky nav after hero (approx 80vh)
      setIsVisible(window.scrollY > window.innerHeight * 0.8);

      // Determine active section
      const currentPosition = window.scrollY + 200;
      
      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (currentPosition >= offsetTop && currentPosition < offsetTop + offsetHeight) {
            setActiveSection(section.id);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed top-[70px] left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm hidden md:block animate-fade-in">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center space-x-8 py-4">
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className={cn(
                "text-sm uppercase tracking-widest font-medium transition-colors hover:text-secondary",
                activeSection === section.id
                  ? "text-secondary border-b-2 border-secondary pb-1"
                  : "text-gray-500"
              )}
            >
              {section.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StickyNav;
