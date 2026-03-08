// === CONTRACTOR TEMPLATE SITE CONFIG ===
// Change these values to rebrand the entire site in seconds.

export const siteConfig = {
  // Business Info
  businessName: "Pro Builders",
  serviceName: "Remodeling & Construction",
  location: "Houston, TX",
  phone: "+1 (713) 555-0199",
  whatsappNumber: "17135550199", // no + or spaces
  email: "info@probuilderstx.com",
  address: "4521 Westheimer Rd, Houston, TX 77027",
  
  // Hero
  heroHeadline: "Professional Remodeling & Construction Services",
  heroSubheadline: "Years of experience, guaranteed workmanship, and fair pricing. We deliver on time, every time.",
  heroHighlightWords: ["Professional", "Services"],
  
  // Trust Bar items
  trustItems: [
    "Free Estimates",
    "Licensed & Insured",
    "Certified Contractors",
    "Upfront Pricing",
    "Satisfaction Guaranteed",
    "Clean Job Sites",
  ],

  // Services
  services: [
    {
      icon: "Wrench" as const,
      title: "Full Remodeling",
      description: "We renovate your home or business from top to bottom. Our professional team brings your dream space to life.",
    },
    {
      icon: "Paintbrush" as const,
      title: "Painting",
      description: "Interior and exterior painting with premium materials and expert craftsmanship you can trust.",
    },
    {
      icon: "Droplets" as const,
      title: "Plumbing",
      description: "Water lines, heating systems, and gas line installation, maintenance, and repair services.",
    },
    {
      icon: "Zap" as const,
      title: "Electrical",
      description: "Panel upgrades, wiring, and lighting — safe and guaranteed electrical solutions for your property.",
    },
    {
      icon: "LayoutGrid" as const,
      title: "Tile & Flooring",
      description: "Bathroom, kitchen, and floor tiling with flawless installation guaranteed every time.",
    },
    {
      icon: "Home" as const,
      title: "Kitchen & Bath",
      description: "Modern kitchen and bathroom designs that transform your living spaces completely.",
    },
  ],

  // Why Choose Us
  whyChooseUs: [
    {
      icon: "ShieldCheck" as const,
      title: "No Hidden Costs",
      description: "The price we quote after inspection is final. No surprise charges, ever.",
    },
    {
      icon: "Sparkles" as const,
      title: "Clean Job Sites",
      description: "We leave your space spotless when the job is done. Every single time.",
    },
    {
      icon: "Clock" as const,
      title: "Fast Response",
      description: "We return your call the same day. No wasted time, no runaround.",
    },
  ],

  // Testimonials
  testimonials: [
    {
      name: "James R.",
      text: "They did a complete remodel of our home. The quality of work and on-time delivery were outstanding.",
      rating: 5,
    },
    {
      name: "Sarah M.",
      text: "They renovated our bathroom from scratch. Very clean and organized crew. Highly recommend!",
      rating: 5,
    },
    {
      name: "Mike D.",
      text: "Best value for money. No hidden costs — they delivered exactly at the quoted price.",
      rating: 5,
    },
  ],

  // Business Hours
  businessHours: [
    { day: "Monday - Friday", hours: "7:00 AM - 6:00 PM" },
    { day: "Saturday", hours: "8:00 AM - 4:00 PM" },
    { day: "Sunday", hours: "Closed" },
  ],

  // Social Media
  social: {
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
  },

  // Google Maps embed URL (Houston, TX)
  mapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d443088.1291735498!2d-95.68191469453am!3d29.81707309983498!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640b8b4488d8501%3A0xca0d02def365053b!2sHouston%2C%20TX!5e0!3m2!1sen!2sus!4v1234567890",
};
