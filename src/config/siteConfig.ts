// === USTA TEMPLATE SITE CONFIG ===
// Change these values to rebrand the entire site in seconds.

export const siteConfig = {
  // Business Info
  businessName: "Usta Pro",
  serviceName: "Tadilat & Renovasyon",
  location: "İstanbul",
  phone: "+90 555 123 4567",
  whatsappNumber: "905551234567", // no + or spaces
  email: "info@ustapro.com",
  address: "Kadıköy, İstanbul, Türkiye",
  
  // Hero
  heroHeadline: "Profesyonel Tadilat & Renovasyon Hizmetleri",
  heroSubheadline: "Yılların deneyimi, garantili işçilik ve uygun fiyat. Zamanında teslim, her zaman.",
  
  // Trust Bar items
  trustItems: [
    "Ücretsiz Keşif",
    "7/24 Hizmet",
    "Sertifikalı Usta",
    "Sabit Fiyat",
    "Garantili İş",
    "Temiz Çalışma",
  ],

  // Services
  services: [
    {
      icon: "Wrench" as const,
      title: "Komple Tadilat",
      description: "Evinizi veya iş yerinizi baştan sona yeniliyoruz. Profesyonel ekibimizle hayalinizdeki mekânı oluşturuyoruz.",
    },
    {
      icon: "Paintbrush" as const,
      title: "Boya & Badana",
      description: "İç ve dış cephe boya işlerinizde kaliteli malzeme ve uzman işçilik ile yanınızdayız.",
    },
    {
      icon: "Droplets" as const,
      title: "Tesisat",
      description: "Su tesisatı, kalorifer ve doğalgaz tesisatı kurulum, bakım ve onarım hizmetleri sunuyoruz.",
    },
    {
      icon: "Zap" as const,
      title: "Elektrik Tesisatı",
      description: "Elektrik pano, kablolama ve aydınlatma işlerinizde güvenli ve garantili çözümler üretiyoruz.",
    },
    {
      icon: "LayoutGrid" as const,
      title: "Fayans & Seramik",
      description: "Banyo, mutfak ve zemin kaplama işlerinizde kusursuz döşeme garantisi veriyoruz.",
    },
    {
      icon: "Home" as const,
      title: "Mutfak & Banyo",
      description: "Modern mutfak ve banyo tasarımlarıyla yaşam alanlarınızı dönüştürüyoruz.",
    },
  ],

  // Why Choose Us
  whyChooseUs: [
    {
      icon: "ShieldCheck" as const,
      title: "Gizli Maliyet Yok",
      description: "Keşif sonrası verilen fiyat nettir. Ek ücret talep etmiyoruz.",
    },
    {
      icon: "Sparkles" as const,
      title: "Temiz Çalışma Ortamı",
      description: "İş bitiminde mekânınızı tertemiz teslim ediyoruz.",
    },
    {
      icon: "Clock" as const,
      title: "Hızlı Dönüş",
      description: "Aramanıza aynı gün içinde dönüş yapıyoruz. Zaman kaybı yok.",
    },
  ],

  // Testimonials
  testimonials: [
    {
      name: "Ahmet Y.",
      text: "Evimizin komple tadilatını yaptırdık. İşçilik kalitesi ve zamanında teslimat konusunda çok memnun kaldık.",
      rating: 5,
    },
    {
      name: "Fatma K.",
      text: "Banyomuzu baştan sona yenilediler. Çok temiz ve düzenli çalıştılar. Kesinlikle tavsiye ederim.",
      rating: 5,
    },
    {
      name: "Mehmet S.",
      text: "Fiyat performans açısından en iyi seçim. Gizli maliyet olmadan, söyledikleri fiyata teslim ettiler.",
      rating: 5,
    },
  ],

  // Business Hours
  businessHours: [
    { day: "Pazartesi - Cuma", hours: "08:00 - 19:00" },
    { day: "Cumartesi", hours: "09:00 - 17:00" },
    { day: "Pazar", hours: "Kapalı" },
  ],

  // Social Media
  social: {
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
  },

  // Google Maps embed URL (replace with real one)
  mapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d192698.15068774522!2d28.847252924248882!3d41.00523706820655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caa7040068086b%3A0xe1ccfe98bc01b0d0!2zxLBzdGFuYnVs!5e0!3m2!1sen!2str!4v1234567890",
};
