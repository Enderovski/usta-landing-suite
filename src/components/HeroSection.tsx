import { Phone, MessageCircle } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative bg-surface-dark overflow-hidden">
      {/* Diagonal brand accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-brand/10 -skew-x-12 translate-x-1/4" />
      
      <div className="container relative py-16 md:py-24 lg:py-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <div className="inline-block bg-brand px-4 py-1.5 rounded-sm mb-6">
            <span className="text-brand-foreground font-bold text-sm tracking-wider uppercase">
              {siteConfig.location} Bölgesi
            </span>
          </div>
          
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-surface-dark-foreground leading-tight mb-6">
            {siteConfig.heroHeadline.split(" ").map((word, i) => (
              <span key={i}>
                {word === "Profesyonel" || word === "Hizmetleri" ? (
                  <span className="text-brand">{word} </span>
                ) : (
                  <>{word} </>
                )}
              </span>
            ))}
          </h1>

          <p className="text-surface-dark-foreground/70 text-base md:text-lg mb-8 leading-relaxed max-w-xl">
            {siteConfig.heroSubheadline}
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={`tel:${siteConfig.phone}`}
              className="flex items-center justify-center gap-3 bg-brand hover:bg-brand-glow transition-colors text-brand-foreground font-bold px-8 py-4 rounded-lg text-lg shadow-lg shadow-brand/25"
            >
              <Phone size={22} />
              Hemen Ara
            </a>
            <a
              href={`https://wa.me/${siteConfig.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-whatsapp hover:opacity-90 transition-opacity text-whatsapp-foreground font-bold px-8 py-4 rounded-lg text-lg"
            >
              <MessageCircle size={22} />
              WhatsApp'tan Yaz
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
