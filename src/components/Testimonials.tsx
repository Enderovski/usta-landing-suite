import { siteConfig } from "@/config/siteConfig";
import { Star, BadgeCheck } from "lucide-react";
import { motion } from "framer-motion";

const Testimonials = () => {
  return (
    <section className="py-16 md:py-24 bg-background" id="reviews">
      <div className="container">
        <div className="text-center mb-12">
          <span className="text-brand font-bold text-sm uppercase tracking-widest">Customer Reviews</span>
          <h2 className="text-3xl md:text-4xl font-black text-foreground mt-2">What They Say</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {siteConfig.testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card rounded-lg p-6 shadow-md border border-border"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} size={18} className="text-brand fill-brand" />
                ))}
              </div>
              <p className="text-card-foreground text-sm leading-relaxed mb-4 italic">"{t.text}"</p>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                  <span className="text-muted-foreground font-bold text-sm">{t.name[0]}</span>
                </div>
                <div>
                  <p className="text-card-foreground font-bold text-sm">{t.name}</p>
                  <div className="flex items-center gap-1">
                    <BadgeCheck size={14} className="text-brand" />
                    <span className="text-muted-foreground text-xs">Verified Customer</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
