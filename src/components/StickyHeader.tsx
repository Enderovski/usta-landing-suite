import { Phone, Menu, X } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";
import { useState } from "react";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "Why Us", href: "#why-us" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

const StickyHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false);

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

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-surface-dark-foreground/70 hover:text-brand transition-colors font-semibold text-sm uppercase tracking-wider"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={`tel:${siteConfig.phone}`}
            className="flex items-center gap-2 bg-whatsapp hover:opacity-90 transition-opacity text-whatsapp-foreground font-bold px-5 py-3 rounded-lg text-sm md:text-base"
          >
            <Phone size={18} />
            <span className="hidden sm:inline">CALL NOW</span>
          </a>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-surface-dark-foreground p-2"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {menuOpen && (
        <nav className="md:hidden bg-surface-dark border-t border-surface-dark-foreground/10 pb-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block px-6 py-3 text-surface-dark-foreground/70 hover:text-brand hover:bg-surface-dark-foreground/5 transition-colors font-semibold text-sm uppercase tracking-wider"
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
};

export default StickyHeader;
