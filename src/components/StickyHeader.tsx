import { Phone } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";

const StickyHeader = () => {
  return (
    <header className="sticky top-0 z-50 bg-surface-dark shadow-lg">
      <div className="container flex items-center justify-between py-3">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-md bg-brand flex items-center justify-center">
            <span className="text-brand-foreground font-black text-lg">P</span>
          </div>
          <span className="text-surface-dark-foreground font-extrabold text-xl tracking-tight">
            {siteConfig.businessName}
          </span>
        </div>

        <a
          href={`tel:${siteConfig.phone}`}
          className="flex items-center gap-2 bg-whatsapp hover:opacity-90 transition-opacity text-whatsapp-foreground font-bold px-5 py-3 rounded-lg text-sm md:text-base"
        >
          <Phone size={18} />
          CALL NOW
        </a>
      </div>
    </header>
  );
};

export default StickyHeader;
