import StickyHeader from "@/components/StickyHeader";
import HeroSection from "@/components/HeroSection";
import TrustBar from "@/components/TrustBar";
import StatsCounter from "@/components/StatsCounter";
import ServicesGrid from "@/components/ServicesGrid";
import GallerySection from "@/components/GallerySection";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { siteConfig } from "@/config/siteConfig";

const Index = () => {
  return (
    <>
      <title>{`${siteConfig.businessName} | ${siteConfig.serviceName} - ${siteConfig.location}`}</title>
      <meta name="description" content={siteConfig.heroSubheadline} />
      
      <div className="min-h-screen scroll-smooth">
        <StickyHeader />
        <HeroSection />
        <TrustBar />
        <StatsCounter />
        <ServicesGrid />
        <GallerySection />
        <WhyChooseUs />
        <Testimonials />
        <CTABanner />
        <Footer />
        <FloatingWhatsApp />
      </div>
    </>
  );
};

export default Index;
