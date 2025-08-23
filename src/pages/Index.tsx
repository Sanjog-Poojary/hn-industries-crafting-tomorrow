import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ProductsSection from '@/components/ProductsSection';
import CertificationsSection from '@/components/CertificationsSection';
import FounderSection from '@/components/FounderSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import QuoteSection from '@/components/QuoteSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ProductsSection />
      <CertificationsSection />
      <FounderSection />
      <TestimonialsSection />
      <QuoteSection />
      <Footer />
    </div>
  );
};

export default Index;
