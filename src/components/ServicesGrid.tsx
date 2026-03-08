import { siteConfig } from "@/config/siteConfig";
import { Wrench, Paintbrush, Droplets, Zap, LayoutGrid, Home } from "lucide-react";
import { motion } from "framer-motion";

const iconMap = { Wrench, Paintbrush, Droplets, Zap, LayoutGrid, Home };

const ServicesGrid = () => {
  return (
    <section className="py-16 md:py-24 bg-background" id="hizmetler">
      <div className="container">
        <div className="text-center mb-12">
          <span className="text-brand font-bold text-sm uppercase tracking-widest">Hizmetlerimiz</span>
          <h2 className="text-3xl md:text-4xl font-black text-foreground mt-2">Neler Yapıyoruz?</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {siteConfig.services.map((service, i) => {
            const Icon = iconMap[service.icon];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow border border-border group"
              >
                <div className="w-14 h-14 rounded-lg bg-brand/10 flex items-center justify-center mb-4 group-hover:bg-brand transition-colors">
                  <Icon size={28} className="text-brand group-hover:text-brand-foreground transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-card-foreground mb-2">{service.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
