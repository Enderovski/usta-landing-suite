import { Phone, ArrowRight } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";
import { motion } from "framer-motion";

const CTABanner = () => {
  return (
    <section className="py-16 md:py-24 bg-brand relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 bg-brand-foreground rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-foreground rounded-full translate-x-1/3 translate-y-1/3" />
      </div>

      <div className="container relative text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-black text-brand-foreground mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-brand-foreground/80 text-lg md:text-xl max-w-2xl mx-auto mb-8">
            Get a free, no-obligation estimate today. We'll visit your property, assess the work, and give you a fair price — guaranteed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${siteConfig.phone}`}
              className="flex items-center justify-center gap-3 bg-surface-dark hover:bg-surface-dark/90 transition-colors text-surface-dark-foreground font-bold px-8 py-4 rounded-lg text-lg"
            >
              <Phone size={22} />
              Call for Free Estimate
            </a>
            <a
              href="#services"
              className="flex items-center justify-center gap-3 border-2 border-brand-foreground text-brand-foreground hover:bg-brand-foreground hover:text-brand transition-colors font-bold px-8 py-4 rounded-lg text-lg"
            >
              View Our Services
              <ArrowRight size={22} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTABanner;
