/**
 * SVEONARA - Central Configuration
 * Du kan enkelt ändra priser, WhatsApp-nummer och texter här!
 * يمكنك تعديل الأسعار ورقم الواتساب هنا بسهولة!
 */

const SVEONARA_CONFIG = {
  brand: {
    name: "SWEDISH NARA",
    tagline: "Nordic Premium IPTV",
    region: "Sverige",
    supportEmail: "support@swedishnara.com",
    // WhatsApp-nummer med landskod (1 för USA/Kanada utan + eller mellanslag)
    whatsappNumber: "19027036354",
    whatsappDisplay: "+1 902 703 6354",
    whatsappDefaultMessage: "[Swedish Nara] Hej! Jag är intresserad av ett IPTV-abonnemang. Kan du hjälpa mig?",
    telegramUsername: "swedishnara_iptv"
  },

  pricing: {
    currency: "kr", // SEK
    currencyCode: "SEK",
    packages: [
      {
        id: "1-month",
        name: "1 MÅNAD",
        badge: "Testa På",
        basePrice: 149,
        originalPrice: 199,
        savePercent: 25,
        popular: false,
        connections: [
          { devices: 1, label: "1 Enhet", price: 149 },
          { devices: 2, label: "2 Enheter", price: 249 },
          { devices: 3, label: "3 Enheter", price: 349 }
        ],
        features: [
          "Över 22 000+ Livekanaler",
          "95 000+ Filmer & Serier (VOD)",
          "Alla Svenska & Nordiska Kanaler",
          "Allsvenskan & Premier League i 4K",
          "Anti-Freeze™ v9.8 Skydd",
          "Komplett Svensk TV-Guide (EPG)",
          "Direktleverans inom 2 minuter",
          "24/7 Svensk WhatsApp Support"
        ]
      },
      {
        id: "3-months",
        name: "3 MÅNADER",
        badge: "Populär",
        basePrice: 349,
        originalPrice: 499,
        savePercent: 30,
        popular: false,
        connections: [
          { devices: 1, label: "1 Enhet", price: 349 },
          { devices: 2, label: "2 Enheter", price: 549 },
          { devices: 3, label: "3 Enheter", price: 699 }
        ],
        features: [
          "Över 22 000+ Livekanaler",
          "95 000+ Filmer & Serier (VOD)",
          "Alla Svenska & Nordiska Kanaler",
          "Allsvenskan & Premier League i 4K",
          "Anti-Freeze™ v9.8 Skydd",
          "Komplett Svensk TV-Guide (EPG)",
          "Direktleverans inom 2 minuter",
          "24/7 Svensk WhatsApp Support"
        ]
      },
      {
        id: "6-months",
        name: "6 MÅNADER",
        badge: "Storsäljare",
        basePrice: 599,
        originalPrice: 899,
        savePercent: 35,
        popular: false,
        connections: [
          { devices: 1, label: "1 Enhet", price: 599 },
          { devices: 2, label: "2 Enheter", price: 899 },
          { devices: 3, label: "3 Enheter", price: 1199 }
        ],
        features: [
          "Över 22 000+ Livekanaler",
          "95 000+ Filmer & Serier (VOD)",
          "Alla Svenska & Nordiska Kanaler",
          "Allsvenskan & Premier League i 4K",
          "Anti-Freeze™ v9.8 Skydd",
          "Komplett Svensk TV-Guide (EPG)",
          "Direktleverans inom 2 minuter",
          "24/7 Prioriterad VIP Support"
        ]
      },
      {
        id: "12-months",
        name: "1 ÅR (12 MÅN)",
        badge: "MEST POPULÄR",
        basePrice: 899,
        originalPrice: 1799,
        savePercent: 50,
        popular: true,
        bonusText: "+ 2 Månader Gratis Bonus!",
        connections: [
          { devices: 1, label: "1 Enhet", price: 899 },
          { devices: 2, label: "2 Enheter", price: 1399 },
          { devices: 3, label: "3 Enheter", price: 1799 }
        ],
        features: [
          "Över 22 000+ Livekanaler",
          "95 000+ Filmer & Serier (VOD)",
          "Alla Svenska & Nordiska Kanaler",
          "Allsvenskan, Champions League, SHL i 4K/60FPS",
          "Anti-Freeze™ v9.8 VIP Server",
          "Komplett Svensk TV-Guide (EPG)",
          "Direktleverans inom 2 minuter",
          "24/7 Prioriterad VIP WhatsApp Support",
          "100% Full Driftsgaranti Hela Året"
        ]
      }
    ]
  },

  socialProofRecentOrders: [
    { name: "Johan L.", city: "Stockholm", plan: "1 År (12 Månader)", time: "för 3 min sedan" },
    { name: "Marcus E.", city: "Göteborg", plan: "1 År (12 Månader)", time: "för 9 min sedan" },
    { name: "Sofia K.", city: "Malmö", plan: "6 Månader", time: "för 16 min sedan" },
    { name: "Henrik B.", city: "Uppsala", plan: "1 År (12 Månader)", time: "för 23 min sedan" },
    { name: "Linnea V.", city: "Västerås", plan: "3 Månader", time: "för 31 min sedan" },
    { name: "Alexander N.", city: "Örebro", plan: "1 År (12 Månader)", time: "för 39 min sedan" }
  ]
};

window.SVEONARA_CONFIG = SVEONARA_CONFIG;
