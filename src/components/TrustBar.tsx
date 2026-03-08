import { siteConfig } from "@/config/siteConfig";
import { CheckCircle } from "lucide-react";

const TrustBar = () => {
  const items = [...siteConfig.trustItems, ...siteConfig.trustItems];

  return (
    <section className="bg-brand py-4 overflow-hidden">
      <div className="animate-marquee flex whitespace-nowrap">
        {items.map((item, i) => (
          <div key={i} className="flex items-center gap-2 mx-8">
            <CheckCircle size={18} className="text-brand-foreground flex-shrink-0" />
            <span className="text-brand-foreground font-bold text-sm md:text-base uppercase tracking-wide">
              {item}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrustBar;
