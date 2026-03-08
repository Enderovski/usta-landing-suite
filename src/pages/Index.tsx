import StickyHeader from "@/components/StickyHeader";
import HeroSection from "@/components/HeroSection";
import TrustBar from "@/components/TrustBar";
import ServicesGrid from "@/components/ServicesGrid";
import GallerySection from "@/components/GallerySection";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import { siteConfig } from "@/config/siteConfig";

const Index = () => {
  return (
    <>
      <title>{`${siteConfig.businessName} | ${siteConfig.serviceName} - ${siteConfig.location}`}</title>
      <meta name="description" content={siteConfig.heroSubheadline} />
      
      <div className="min-h-screen">
        <StickyHeader />
        <HeroSection />
        <TrustBar />
        <ServicesGrid />
        <GallerySection />
        <WhyChooseUs />
        <Testimonials />
        <Footer />
      </div>
    </>
  );
};

export default Index;
