import { motion } from "framer-motion";
import { Hammer, Users, Calendar, ThumbsUp } from "lucide-react";

const stats = [
  { icon: Hammer, value: "500+", label: "Projects Completed" },
  { icon: Users, value: "400+", label: "Happy Clients" },
  { icon: Calendar, value: "15+", label: "Years Experience" },
  { icon: ThumbsUp, value: "100%", label: "Satisfaction Rate" },
];

const StatsCounter = () => {
  return (
    <section className="py-12 md:py-16 bg-brand">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <Icon size={32} className="text-brand-foreground/70 mx-auto mb-3" />
                <p className="text-3xl md:text-4xl font-black text-brand-foreground">{stat.value}</p>
                <p className="text-brand-foreground/70 text-sm font-semibold mt-1 uppercase tracking-wider">
                  {stat.label}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatsCounter;
