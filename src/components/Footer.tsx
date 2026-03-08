import { siteConfig } from "@/config/siteConfig";
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-surface-dark pt-16 pb-8" id="contact">
      <div className="container">
        <div className="text-center mb-12">
          <span className="text-brand font-bold text-sm uppercase tracking-widest">Contact</span>
          <h2 className="text-3xl md:text-4xl font-black text-surface-dark-foreground mt-2">Get In Touch</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Map */}
          <div className="rounded-lg overflow-hidden shadow-lg aspect-video bg-muted">
            <iframe
              src={siteConfig.mapsEmbed}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Our Location"
            />
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <a href={`tel:${siteConfig.phone}`} className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-lg bg-brand/15 flex items-center justify-center group-hover:bg-brand transition-colors">
                <Phone size={22} className="text-brand group-hover:text-brand-foreground transition-colors" />
              </div>
              <div>
                <p className="text-surface-dark-foreground/50 text-xs uppercase tracking-wider font-medium">Phone</p>
                <p className="text-surface-dark-foreground font-bold">{siteConfig.phone}</p>
              </div>
            </a>

            <a href={`https://wa.me/${siteConfig.whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-lg bg-whatsapp/15 flex items-center justify-center group-hover:bg-whatsapp transition-colors">
                <MessageCircle size={22} className="text-whatsapp group-hover:text-whatsapp-foreground transition-colors" />
              </div>
              <div>
                <p className="text-surface-dark-foreground/50 text-xs uppercase tracking-wider font-medium">WhatsApp</p>
                <p className="text-surface-dark-foreground font-bold">Send a Message</p>
              </div>
            </a>

            <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-lg bg-brand/15 flex items-center justify-center group-hover:bg-brand transition-colors">
                <Mail size={22} className="text-brand group-hover:text-brand-foreground transition-colors" />
              </div>
              <div>
                <p className="text-surface-dark-foreground/50 text-xs uppercase tracking-wider font-medium">Email</p>
                <p className="text-surface-dark-foreground font-bold">{siteConfig.email}</p>
              </div>
            </a>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-brand/15 flex items-center justify-center">
                <MapPin size={22} className="text-brand" />
              </div>
              <div>
                <p className="text-surface-dark-foreground/50 text-xs uppercase tracking-wider font-medium">Address</p>
                <p className="text-surface-dark-foreground font-bold">{siteConfig.address}</p>
              </div>
            </div>

            {/* Business Hours */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-brand/15 flex items-center justify-center flex-shrink-0">
                <Clock size={22} className="text-brand" />
              </div>
              <div>
                <p className="text-surface-dark-foreground/50 text-xs uppercase tracking-wider font-medium mb-2">Business Hours</p>
                {siteConfig.businessHours.map((bh, i) => (
                  <div key={i} className="flex justify-between gap-8 text-sm">
                    <span className="text-surface-dark-foreground/70">{bh.day}</span>
                    <span className="text-surface-dark-foreground font-bold">{bh.hours}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Social & Copyright */}
        <div className="border-t border-surface-dark-foreground/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-surface-dark-foreground/40 text-sm">
            © {new Date().getFullYear()} {siteConfig.businessName}. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a href={siteConfig.social.facebook} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-surface-dark-foreground/10 flex items-center justify-center hover:bg-brand transition-colors group">
              <Facebook size={18} className="text-surface-dark-foreground/60 group-hover:text-brand-foreground transition-colors" />
            </a>
            <a href={siteConfig.social.instagram} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-surface-dark-foreground/10 flex items-center justify-center hover:bg-brand transition-colors group">
              <Instagram size={18} className="text-surface-dark-foreground/60 group-hover:text-brand-foreground transition-colors" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
