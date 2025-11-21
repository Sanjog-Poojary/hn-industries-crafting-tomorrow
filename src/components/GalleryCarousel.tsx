import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import heroImage from "@/assets/hero-manufacturing.jpg";

type Props = {
  images?: string[];
};

const defaultImages = [
  heroImage,
  "https://images.unsplash.com/photo-1581091870622-3d9f8d6f8a2f?w=1600&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1524499982521-1ffd58dd89ea?w=1600&auto=format&fit=crop&q=80",
];

const GalleryCarousel: React.FC<Props> = ({ images = defaultImages }) => {
  const [isMounted, setIsMounted] = React.useState(false);
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    skipSnaps: false,
  });
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [lightboxOpen, setLightboxOpen] = React.useState(false);

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  React.useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();
    return () => emblaApi.off("select", onSelect);
  }, [emblaApi]);

  const openLightbox = (index: number) => {
    setSelectedIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => setLightboxOpen(false);

  const goTo = (index: number) => emblaApi && emblaApi.scrollTo(index);

  // Close lightbox on Escape for accessibility
  React.useEffect(() => {
    if (!lightboxOpen) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightboxOpen]);

  if (!isMounted) {
    // Avoid SSR/hydration mismatch by rendering a simple placeholder server-side
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="w-full h-64 bg-card rounded-lg" />
      </div>
    );
  }

  return (
    <section aria-label="Gallery" className="container mx-auto px-4 py-12">
      <div className="embla overflow-hidden rounded-lg">
        <div
          className="embla__viewport"
          ref={emblaRef as unknown as (el: HTMLElement | null) => void}
        >
          <div className="flex">
            {images.map((src, i) => (
              <div key={src} className="flex-[0_0_100%]">
                <button
                  onClick={() => openLightbox(i)}
                  className="block w-full h-64 md:h-96 overflow-hidden focus:outline-none"
                  aria-label={`Open image ${i + 1}`}
                >
                  <img
                    src={src}
                    alt={`Gallery image ${i + 1}`}
                    loading="lazy"
                    className="object-cover w-full h-full rounded-lg"
                    width={1600}
                    height={900}
                  />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Thumbnails */}
      <div className="mt-4 flex gap-3 justify-center">
        {images.map((src, i) => (
          <button
            key={src}
            onClick={() => goTo(i)}
            className={`w-20 h-12 overflow-hidden rounded-md border-2 ${
              i === selectedIndex ? "border-primary" : "border-transparent"
            } focus:outline-none`}
            aria-label={`Go to slide ${i + 1}`}
          >
            <img
              src={src}
              alt={`Thumbnail ${i + 1}`}
              loading="lazy"
              className="object-cover w-full h-full"
            />
          </button>
        ))}
      </div>

      {/* Lightbox overlay */}
      {lightboxOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          onClick={closeLightbox}
        >
          <div
            className="max-w-[90%] max-h-[90%]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeLightbox}
              aria-label="Close"
              className="text-white mb-4"
            >
              Close
            </button>
            <div className="relative">
              <img
                src={images[selectedIndex]}
                alt={`Expanded ${selectedIndex + 1}`}
                className="w-full h-auto rounded-md"
              />
              <div className="absolute left-0 top-1/2 -translate-y-1/2">
                <button
                  onClick={() => emblaApi && emblaApi.scrollPrev()}
                  className="p-2 bg-white/10 rounded-full text-white mr-2"
                  aria-label="Previous"
                >
                  ‹
                </button>
              </div>
              <div className="absolute right-0 top-1/2 -translate-y-1/2">
                <button
                  onClick={() => emblaApi && emblaApi.scrollNext()}
                  className="p-2 bg-white/10 rounded-full text-white ml-2"
                  aria-label="Next"
                >
                  ›
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default GalleryCarousel;
