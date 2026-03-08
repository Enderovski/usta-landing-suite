import { siteConfig } from "@/config/siteConfig";
import { ShieldCheck, Sparkles, Clock } from "lucide-react";
import { motion } from "framer-motion";

const iconMap = { ShieldCheck, Sparkles, Clock };

const WhyChooseUs = () => {
  return (
    <section className="py-16 md:py-24 bg-surface-dark" id="why-us">
      <div className="container">
        <div className="text-center mb-12">
          <span className="text-brand font-bold text-sm uppercase tracking-widest">Why Us?</span>
          <h2 className="text-3xl md:text-4xl font-black text-surface-dark-foreground mt-2">The Pro Difference</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {siteConfig.whyChooseUs.map((item, i) => {
            const Icon = iconMap[item.icon];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="text-center"
              >
                <div className="w-16 h-16 rounded-full bg-brand/15 flex items-center justify-center mx-auto mb-5">
                  <Icon size={32} className="text-brand" />
                </div>
                <h3 className="text-xl font-bold text-surface-dark-foreground mb-3">{item.title}</h3>
                <p className="text-surface-dark-foreground/60 text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
