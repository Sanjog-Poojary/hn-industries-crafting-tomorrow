import { useState, useRef } from "react";
import { useModal } from "@/hooks/use-modal";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const { setEnquiryOpen } = useModal();

  // Use objects with stable ids to avoid using array indexes as keys and to make
  // it easier to attach routes or slugs later.
  const productCategories = [
    { id: "pvc-pipes-fittings", label: "PVC Pipes & Fittings" },
    { id: "cpvc-pipes-fittings", label: "CPVC Pipes & Fittings" },
    { id: "upvc-pipes-fittings", label: "UPVC Pipes & Fittings" },
    { id: "hdpe-pipes-fittings", label: "HDPE Pipes & Fittings" },
    { id: "swr-systems", label: "SWR Systems" },
    { id: "irrigation-systems", label: "Irrigation Systems" },
    { id: "solvent-cement", label: "Solvent Cement" },
    { id: "rain-water-harvesting", label: "Rain Water Harvesting" },
  ];

  return (
    <nav className="sticky top-0 z-40 backdrop-blur bg-card/90 shadow-card border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-xl font-bold text-primary">
              HN INDUSTRIES EQUIPMENTS PVT LTD
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#"
              className="text-foreground hover:text-primary transition-colors"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-foreground hover:text-primary transition-colors"
            >
              About Us
            </a>

            {/* Products Dropdown (keyboard accessible) */}
            <div className="relative" ref={useRef<HTMLDivElement | null>(null)}>
              <button
                aria-haspopup="menu"
                aria-expanded={activeDropdown === "products"}
                onClick={() =>
                  setActiveDropdown((prev) =>
                    prev === "products" ? null : "products"
                  )
                }
                onKeyDown={(e) => {
                  if (e.key === "Escape") setActiveDropdown(null);
                }}
                className="flex items-center text-foreground hover:text-primary transition-colors"
              >
                Products
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>

              {activeDropdown === "products" && (
                <div
                  role="menu"
                  aria-label="Products"
                  className="absolute top-full left-0 mt-2 w-72 bg-card shadow-hover border border-border rounded-lg z-50 animate-fade-in backdrop-blur-sm"
                  onKeyDown={(e) => {
                    // keyboard navigation inside the menu
                    const menu = e.currentTarget as HTMLElement;
                    const items = Array.from(
                      menu.querySelectorAll('[role="menuitem"]')
                    ) as HTMLElement[];
                    if (!items.length) return;

                    const active = document.activeElement as HTMLElement | null;
                    const idx = active ? items.indexOf(active) : -1;

                    if (e.key === "ArrowDown") {
                      e.preventDefault();
                      const next = items[(idx + 1) % items.length];
                      next?.focus();
                    } else if (e.key === "ArrowUp") {
                      e.preventDefault();
                      const prev =
                        items[(idx - 1 + items.length) % items.length];
                      prev?.focus();
                    } else if (e.key === "Home") {
                      e.preventDefault();
                      items[0]?.focus();
                    } else if (e.key === "End") {
                      e.preventDefault();
                      items[items.length - 1]?.focus();
                    }
                  }}
                  onBlur={(e) => {
                    // close when focus leaves the menu and the trigger
                    const related = (e as React.FocusEvent)
                      .relatedTarget as Node | null;
                    if (!related) {
                      setActiveDropdown(null);
                      return;
                    }
                    // if related target is outside this container, close
                    const container = (e.currentTarget as HTMLElement)
                      .parentElement;
                    if (container && !container.contains(related)) {
                      setActiveDropdown(null);
                    }
                  }}
                >
                  <div className="py-3">
                    {productCategories.map((category) => (
                      <a
                        key={category.id}
                        href="#products"
                        role="menuitem"
                        onClick={() => setActiveDropdown(null)}
                        className="block px-5 py-3 text-sm text-foreground hover:bg-secondary hover:text-primary transition-all duration-200 hover:translate-x-1"
                      >
                        {category.label}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <a
              href="#quality"
              className="text-foreground hover:text-primary transition-colors"
            >
              Quality Policy
            </a>
            <a
              href="#contact"
              className="text-foreground hover:text-primary transition-colors"
            >
              Contact
            </a>

            <Button
              variant="accent"
              className="hover:scale-105 transform transition-all duration-300"
              onClick={() => setEnquiryOpen(true)}
            >
              Enquire Now
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground hover:text-primary"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-2">
              <a href="#" className="py-2 text-foreground hover:text-primary">
                Home
              </a>
              <a
                href="#about"
                className="py-2 text-foreground hover:text-primary"
              >
                About Us
              </a>
              <a
                href="#products"
                className="py-2 text-foreground hover:text-primary"
              >
                Products
              </a>
              <a
                href="#quality"
                className="py-2 text-foreground hover:text-primary"
              >
                Quality Policy
              </a>
              <a
                href="#contact"
                className="py-2 text-foreground hover:text-primary"
              >
                Contact
              </a>
              <Button
                variant="accent"
                className="mt-2"
                onClick={() => setEnquiryOpen(true)}
              >
                Enquire Now
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
