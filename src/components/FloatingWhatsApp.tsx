import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";
import { motion } from "framer-motion";

const FloatingWhatsApp = () => {
  return (
    <motion.a
      href={`https://wa.me/${siteConfig.whatsappNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 200 }}
      className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-whatsapp hover:scale-110 transition-transform rounded-full flex items-center justify-center shadow-lg shadow-whatsapp/30"
      aria-label="Message on WhatsApp"
    >
      <MessageCircle size={30} className="text-whatsapp-foreground" />
      <span className="absolute -top-1 -right-1 w-4 h-4 bg-brand rounded-full animate-ping" />
      <span className="absolute -top-1 -right-1 w-4 h-4 bg-brand rounded-full" />
    </motion.a>
  );
};

export default FloatingWhatsApp;
