import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StickyNav from "@/components/StickyNav";
import Overview from "@/components/sections/Overview";
import Gallery from "@/components/sections/Gallery";
import Amenities from "@/components/sections/Amenities";
import Location from "@/components/sections/Location";
import FloorPlans from "@/components/sections/FloorPlans";
import FAQ from "@/components/sections/FAQ";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground selection:bg-secondary selection:text-white">
      <Navbar />
      <Hero />
      <StickyNav />
      
      <main>
        <Overview />
        <Gallery />
        <Amenities />
        <Location />
        <FloorPlans />
        <FAQ />
      </main>

      <Footer />
    </div>
  );
};

export default Index;
