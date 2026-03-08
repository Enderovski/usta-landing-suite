import { useState } from "react";
import { motion } from "framer-motion";

const BeforeAfterSlider = ({ beforeUrl, afterUrl }: { beforeUrl: string; afterUrl: string }) => {
  const [position, setPosition] = useState(50);

  return (
    <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden select-none">
      <img src={afterUrl} alt="After" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 overflow-hidden" style={{ width: `${position}%` }}>
        <img src={beforeUrl} alt="Before" className="absolute inset-0 w-full h-full object-cover" style={{ minWidth: `${100 / (position / 100)}%`, maxWidth: `${100 / (position / 100)}%` }} />
      </div>
      <div className="absolute top-0 bottom-0" style={{ left: `${position}%`, transform: "translateX(-50%)" }}>
        <div className="w-1 h-full bg-brand shadow-lg" />
        <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-brand flex items-center justify-center shadow-lg">
          <span className="text-brand-foreground font-bold text-xs">↔</span>
        </div>
      </div>
      <div className="absolute top-3 left-3 bg-surface-dark/80 text-surface-dark-foreground px-3 py-1 rounded text-xs font-bold">BEFORE</div>
      <div className="absolute top-3 right-3 bg-brand/90 text-brand-foreground px-3 py-1 rounded text-xs font-bold">AFTER</div>
      <input
        type="range"
        min={0}
        max={100}
        value={position}
        onChange={(e) => setPosition(Number(e.target.value))}
        className="before-after-slider absolute inset-0 w-full h-full opacity-0 cursor-grab"
      />
    </div>
  );
};

const GallerySection = () => {
  return (
    <section className="py-16 md:py-24 bg-muted/50" id="gallery">
      <div className="container">
        <div className="text-center mb-12">
          <span className="text-brand font-bold text-sm uppercase tracking-widest">Our Portfolio</span>
          <h2 className="text-3xl md:text-4xl font-black text-foreground mt-2">Work Gallery</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <BeforeAfterSlider
              beforeUrl="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&q=80"
              afterUrl="https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&q=80"
            />
            <p className="text-center text-muted-foreground text-sm mt-3 font-medium">Bathroom Renovation</p>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.15 }}>
            <BeforeAfterSlider
              beforeUrl="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80"
              afterUrl="https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=800&q=80"
            />
            <p className="text-center text-muted-foreground text-sm mt-3 font-medium">Kitchen Remodel</p>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {[
            "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?w=400&q=80",
            "https://images.unsplash.com/photo-1523413363574-c30aa1c2a516?w=400&q=80",
            "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&q=80",
            "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=400&q=80",
          ].map((url, i) => (
            <motion.img
              key={i}
              src={url}
              alt={`Project example ${i + 1}`}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="w-full aspect-square object-cover rounded-lg shadow-md hover:shadow-xl transition-shadow"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
