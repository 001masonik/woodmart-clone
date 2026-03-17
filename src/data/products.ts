export interface Product {
  id: string;
  name: string;
  category: string;
  subcategory: string;
  price: string;
  priceNum: number;
  oldPrice?: string;
  rating: number;
  badge?: "hot" | "sale" | null;
  colors?: string[];
  brand?: string;
}

export interface Category {
  slug: string;
  name: string;
  subcategories: { slug: string; name: string; count: number }[];
}

export const categories: Category[] = [
  {
    slug: "smartphones",
    name: "Smartphones",
    subcategories: [
      { slug: "smartphons", name: "Smartphones", count: 19 },
      { slug: "covers-for-phones", name: "Covers for Phones", count: 8 },
      { slug: "data-cables", name: "Data Cables", count: 4 },
      { slug: "mains-chargers", name: "Mains Chargers", count: 4 },
      { slug: "memory-cards", name: "Memory Cards", count: 4 },
      { slug: "power-banks", name: "Power Banks", count: 16 },
      { slug: "screen-protectors", name: "Screen Protectors", count: 8 },
      { slug: "wireless-chargers", name: "Wireless Chargers", count: 4 },
    ],
  },
  {
    slug: "laptops-tablets",
    name: "Laptops, Tablets & PCs",
    subcategories: [
      { slug: "laptops", name: "Laptops", count: 12 },
      { slug: "tablets", name: "Tablets", count: 8 },
      { slug: "desktops", name: "Desktop PCs", count: 6 },
      { slug: "monitors", name: "Monitors", count: 10 },
    ],
  },
  {
    slug: "pc-components",
    name: "PC Components",
    subcategories: [
      { slug: "motherboards", name: "Motherboards", count: 8 },
      { slug: "processors", name: "Processors", count: 6 },
      { slug: "graphics-cards", name: "Graphics Cards", count: 10 },
      { slug: "memory", name: "Memory", count: 8 },
      { slug: "storage", name: "Storage", count: 12 },
      { slug: "power-supplies", name: "Power Supplies", count: 6 },
      { slug: "cases", name: "Cases", count: 8 },
      { slug: "cooling", name: "Cooling", count: 6 },
    ],
  },
  {
    slug: "gaming",
    name: "Gaming",
    subcategories: [
      { slug: "pc-games", name: "PC Games", count: 12 },
      { slug: "console-games", name: "Console Games", count: 10 },
      { slug: "gamepads", name: "Gamepads", count: 6 },
      { slug: "wheels", name: "Wheels", count: 4 },
      { slug: "vr-headsets", name: "VR Headsets", count: 3 },
    ],
  },
  {
    slug: "appliances",
    name: "Appliances",
    subcategories: [
      { slug: "ovens", name: "Ovens", count: 4 },
      { slug: "blenders", name: "Blenders", count: 8 },
      { slug: "fridges", name: "Fridges", count: 6 },
      { slug: "dishwashers", name: "Dishwashers", count: 4 },
      { slug: "washing-machines", name: "Washing Machines", count: 6 },
    ],
  },
  {
    slug: "tv-audio",
    name: "TV & Audio",
    subcategories: [
      { slug: "televisions", name: "Televisions", count: 8 },
      { slug: "speakers", name: "Speakers", count: 10 },
      { slug: "headphones", name: "Headphones", count: 12 },
      { slug: "soundbars", name: "Soundbars", count: 6 },
    ],
  },
  {
    slug: "home-outdoor",
    name: "Home & Outdoor",
    subcategories: [
      { slug: "smart-home", name: "Smart Home", count: 8 },
      { slug: "lighting", name: "Lighting", count: 6 },
      { slug: "security", name: "Security", count: 4 },
    ],
  },
  {
    slug: "cameras",
    name: "Cameras",
    subcategories: [
      { slug: "dslr", name: "DSLR", count: 6 },
      { slug: "mirrorless", name: "Mirrorless", count: 8 },
      { slug: "action-cameras", name: "Action Cameras", count: 4 },
      { slug: "lenses", name: "Lenses", count: 10 },
    ],
  },
];

export const allProducts: Product[] = [
  // Smartphones
  { id: "iphone-15", name: "Apple iPhone 15", category: "smartphones", subcategory: "Smartphones", price: "$799.00", priceNum: 799, rating: 5, colors: ["Gray", "Green", "Pink", "White", "Yellow"], brand: "Apple" },
  { id: "iphone-15-plus", name: "Apple iPhone 15 Plus", category: "smartphones", subcategory: "Smartphones", price: "$899.00", priceNum: 899, rating: 5, colors: ["Gray", "Green", "Pink", "White", "Yellow"], brand: "Apple" },
  { id: "iphone-15-pro", name: "Apple iPhone 15 Pro", category: "smartphones", subcategory: "Smartphones", price: "$999.00", priceNum: 999, rating: 5, colors: ["Blue", "Gray", "Starlight", "White"], brand: "Apple" },
  { id: "iphone-15-pro-max", name: "Apple iPhone 15 Pro Max", category: "smartphones", subcategory: "Smartphones", price: "$1,199.00", priceNum: 1199, rating: 5, colors: ["Blue", "Gray", "Starlight", "White"], brand: "Apple" },
  { id: "iphone-17", name: "Apple iPhone 17", category: "smartphones", subcategory: "Smartphones", price: "$999.00", priceNum: 999, rating: 5, colors: ["Gray", "Green", "Pink", "White"], brand: "Apple" },
  { id: "iphone-17-pro", name: "Apple iPhone 17 Pro", category: "smartphones", subcategory: "Smartphones", price: "$1,099.00", priceNum: 1099, rating: 5, colors: ["Gray", "White", "Yellow"], brand: "Apple" },
  { id: "iphone-air", name: "Apple iPhone Air", category: "smartphones", subcategory: "Smartphones", price: "$899.00", priceNum: 899, rating: 5, colors: ["Blue", "Gray", "White", "Yellow"], brand: "Apple" },
  { id: "pixel-8", name: "Google Pixel 8", category: "smartphones", subcategory: "Smartphones", price: "$699.99", priceNum: 699.99, rating: 4, colors: ["Black", "Bronze", "Green"], brand: "Google" },
  { id: "pixel-8-pro", name: "Google Pixel 8 Pro", category: "smartphones", subcategory: "Smartphones", price: "$999.99", priceNum: 999.99, rating: 5, colors: ["Black", "Bronze", "Purple"], brand: "Google" },
  { id: "moto-edge", name: "Motorola Edge+ (2023)", category: "smartphones", subcategory: "Smartphones", price: "$617.45", priceNum: 617.45, rating: 4, brand: "Motorola" },
  { id: "moto-razr", name: "Motorola Moto Razr 40 Ultra", category: "smartphones", subcategory: "Smartphones", price: "$899.99", priceNum: 899.99, rating: 4, colors: ["Black", "Green", "Orchid"], brand: "Motorola" },
  { id: "nokia-g60", name: "Nokia G60 5G", category: "smartphones", subcategory: "Smartphones", price: "$378.00", priceNum: 378, rating: 5, colors: ["Black", "White"], brand: "Nokia" },
  { id: "apple-clear-case", name: "Apple Clear Case", category: "smartphones", subcategory: "Covers for Phones", price: "$49.00", priceNum: 49, rating: 4, brand: "Apple" },
  { id: "apple-finewoven", name: "Apple FineWoven Case", category: "smartphones", subcategory: "Covers for Phones", price: "$59.00", priceNum: 59, rating: 4, colors: ["Black", "Blue", "Pink", "White"], brand: "Apple" },
  { id: "otterbox-figura", name: "OtterBox Figura Series Case", category: "smartphones", subcategory: "Covers for Phones", price: "$49.95", priceNum: 49.95, rating: 5, brand: "OtterBox" },
  { id: "baseus-ring", name: "Baseus Privity Ring Bracket", category: "smartphones", subcategory: "Accessories", price: "$12.00", priceNum: 12, rating: 5, brand: "Baseus" },
  { id: "belkin-glass", name: "Belkin Blue Light UltraGlass 2", category: "smartphones", subcategory: "Screen Protectors", price: "$44.99", priceNum: 44.99, rating: 5, brand: "Belkin" },
  { id: "poco-x9b", name: "Poco Honor X9b", category: "smartphones", subcategory: "Smartphones", price: "$350.00", priceNum: 350, rating: 5, brand: "Poco" },
  { id: "sandisk-endurance", name: "SanDisk MAX ENDURANCE", category: "smartphones", subcategory: "Memory Cards", price: "$32.00", priceNum: 32, rating: 5, brand: "SanDisk" },

  // PC Components
  { id: "rog-b550", name: "ASUS ROG Strix B550-F Gaming", category: "pc-components", subcategory: "Motherboards", price: "$189.99", priceNum: 189.99, rating: 5, brand: "Asus" },
  { id: "ryzen-5800x", name: "AMD Ryzen 7 5800X Processor", category: "pc-components", subcategory: "Processors", price: "$299.00", priceNum: 299, rating: 5, badge: "hot", brand: "AMD" },
  { id: "corsair-vengeance", name: "Corsair Vengeance 32GB DDR5", category: "pc-components", subcategory: "Memory", price: "$119.99", priceNum: 119.99, rating: 4, brand: "Corsair" },
  { id: "samsung-980pro", name: "Samsung 980 PRO 1TB NVMe", category: "pc-components", subcategory: "Storage", price: "$149.99", priceNum: 149.99, rating: 5, brand: "Samsung" },
  { id: "rtx-4070", name: "NVIDIA GeForce RTX 4070", category: "pc-components", subcategory: "Graphics Cards", price: "$599.00", priceNum: 599, rating: 5, brand: "NVIDIA" },
  { id: "corsair-rm850x", name: "Corsair RM850x 850W PSU", category: "pc-components", subcategory: "Power Supplies", price: "$139.99", priceNum: 139.99, rating: 4, brand: "Corsair" },
  { id: "nzxt-h7", name: "NZXT H7 Flow Mid-Tower", category: "pc-components", subcategory: "Cases", price: "$129.99", priceNum: 129.99, rating: 5, brand: "NZXT" },
  { id: "noctua-d15", name: "Noctua NH-D15 CPU Cooler", category: "pc-components", subcategory: "Cooling", price: "$109.95", priceNum: 109.95, rating: 5, brand: "Noctua" },
  { id: "wd-sn850x", name: "WD Black SN850X 2TB", category: "pc-components", subcategory: "Storage", price: "$179.99", priceNum: 179.99, rating: 5, brand: "WD" },
  { id: "gskill-z5", name: "G.Skill Trident Z5 RGB 64GB", category: "pc-components", subcategory: "Memory", price: "$249.99", priceNum: 249.99, rating: 5, brand: "G.Skill" },
  { id: "msi-z790", name: "MSI MEG Z790 ACE", category: "pc-components", subcategory: "Motherboards", price: "$499.99", priceNum: 499.99, rating: 4, brand: "MSI" },
  { id: "evga-1000w", name: "EVGA SuperNOVA 1000W", category: "pc-components", subcategory: "Power Supplies", price: "$189.99", priceNum: 189.99, rating: 5, brand: "EVGA" },

  // Appliances
  { id: "ariete-0979", name: "ARIETE 0979 Pizza Oven", category: "appliances", subcategory: "Ovens", price: "$110.00", priceNum: 110, rating: 5, brand: "Ariete" },
  { id: "ariete-986", name: "ARIETE 986 Vintage Oven", category: "appliances", subcategory: "Ovens", price: "$150.00", priceNum: 150, rating: 4, brand: "Ariete" },
  { id: "bamix-deluxe", name: "Bamix DeLuxe M200", category: "appliances", subcategory: "Blenders", price: "$230.00", priceNum: 230, rating: 4, brand: "Bamix" },
  { id: "bamix-luxury", name: "Bamix Luxurylin M200", category: "appliances", subcategory: "Blenders", price: "$605.00", priceNum: 605, rating: 5, brand: "Bamix" },
  { id: "bosch-kuw20", name: "Bosch KUW20VHF0G Wine Cooler", category: "appliances", subcategory: "Fridges", price: "$745.00", priceNum: 745, rating: 4, brand: "Bosch" },
  { id: "bosch-mmb", name: "Bosch MMB6141B Blender", category: "appliances", subcategory: "Blenders", price: "$90.00", priceNum: 90, rating: 4, brand: "Bosch" },
  { id: "bosch-serie2-dish", name: "Bosch Serie 2 SMS2ITW08G", category: "appliances", subcategory: "Dishwashers", price: "$440.00", priceNum: 440, rating: 5, badge: "hot", brand: "Bosch" },
  { id: "bosch-serie2-dish2", name: "Bosch Serie 2 SMV2ITX18G", category: "appliances", subcategory: "Dishwashers", price: "$520.00", priceNum: 520, rating: 4, brand: "Bosch" },
  { id: "bosch-serie4", name: "Bosch Serie 4 KSV36VLEP", category: "appliances", subcategory: "Fridges", price: "$830.00", priceNum: 830, rating: 4, brand: "Bosch" },
  { id: "bosch-wav28", name: "Bosch WAV28K90ME", category: "appliances", subcategory: "Washing Machines", price: "$1,200.00", priceNum: 1200, rating: 5, brand: "Bosch" },
  { id: "bosch-wdu28", name: "Bosch WDU28590OE", category: "appliances", subcategory: "All in One", price: "$1,200.00", priceNum: 1200, rating: 5, brand: "Bosch" },
  { id: "bosch-ms64", name: "Bosch MS64M6170", category: "appliances", subcategory: "Blenders", price: "$100.00", priceNum: 100, rating: 4, brand: "Bosch" },
  { id: "bosch-wga", name: "Bosch WGA242X0ME", category: "appliances", subcategory: "Washing Machines", price: "$650.00", priceNum: 650, oldPrice: "$780.00", rating: 5, badge: "sale", brand: "Bosch" },

  // Gaming
  { id: "cobra-gt900", name: "Cobra Rally GT900", category: "gaming", subcategory: "Wheels", price: "$180.00", priceNum: 180, rating: 4, brand: "Cobra" },
  { id: "cyberpunk", name: "Cyberpunk 2077", category: "gaming", subcategory: "PC Games", price: "$60.00", priceNum: 60, rating: 5, brand: "CD Projekt" },
  { id: "dualsense", name: "DualSense Controller", category: "gaming", subcategory: "Gamepads", price: "$70.00", priceNum: 70, rating: 5, brand: "Sony" },
  { id: "fifa-22", name: "FIFA 22", category: "gaming", subcategory: "PC Games", price: "$39.00", priceNum: 39, rating: 4, brand: "EA" },
  { id: "fifa-23", name: "FIFA 23", category: "gaming", subcategory: "Console Games", price: "$69.00", priceNum: 69, rating: 5, brand: "EA" },
  { id: "gow-ragnarok", name: "God of War Ragnarok", category: "gaming", subcategory: "Console Games", price: "$60.00", priceNum: 60, rating: 5, badge: "hot", brand: "Sony" },
  { id: "hogwarts", name: "Hogwarts Legacy", category: "gaming", subcategory: "Console Games", price: "$69.00", priceNum: 69, rating: 5, brand: "WB" },
  { id: "forza-h5", name: "Forza Horizon 5", category: "gaming", subcategory: "Console Games", price: "$55.00", priceNum: 55, rating: 4, brand: "Microsoft" },
  { id: "hori-pro", name: "Hori Horipad Pro", category: "gaming", subcategory: "Gamepads", price: "$60.00", priceNum: 60, rating: 4, brand: "Hori" },
  { id: "horizon-zd", name: "Horizon Zero Dawn", category: "gaming", subcategory: "PC Games", price: "$39.00", priceNum: 39, rating: 4, badge: "hot", brand: "Sony" },
  { id: "fifa-23-pc", name: "FIFA 23 PC Edition", category: "gaming", subcategory: "PC Games", price: "$69.00", priceNum: 69, rating: 5, brand: "EA" },
  { id: "hogwarts-pc", name: "Hogwarts Legacy PC", category: "gaming", subcategory: "PC Games", price: "$69.00", priceNum: 69, rating: 5, brand: "WB" },

  // TV & Audio
  { id: "audioengine-a2bt", name: "Audioengine A2+BT", category: "tv-audio", subcategory: "Speakers", price: "$300.00", priceNum: 300, rating: 5, brand: "Audioengine" },
  { id: "sony-wh1000", name: "Sony WH-1000XM5", category: "tv-audio", subcategory: "Headphones", price: "$349.99", priceNum: 349.99, rating: 5, brand: "Sony" },
  { id: "bose-qc45", name: "Bose QuietComfort 45", category: "tv-audio", subcategory: "Headphones", price: "$329.00", priceNum: 329, rating: 5, brand: "Bose" },
  { id: "sonos-beam", name: "Sonos Beam Gen 2", category: "tv-audio", subcategory: "Soundbars", price: "$449.00", priceNum: 449, rating: 5, brand: "Sonos" },
  { id: "samsung-qn90b", name: "Samsung QN90B 55\" QLED", category: "tv-audio", subcategory: "Televisions", price: "$1,299.00", priceNum: 1299, rating: 5, brand: "Samsung" },
  { id: "lg-c3", name: "LG C3 55\" OLED", category: "tv-audio", subcategory: "Televisions", price: "$1,499.00", priceNum: 1499, rating: 5, brand: "LG" },

  // Laptops
  { id: "macbook-pro-14", name: "Apple MacBook Pro 14\" M3", category: "laptops-tablets", subcategory: "Laptops", price: "$1,999.00", priceNum: 1999, rating: 5, brand: "Apple" },
  { id: "dell-xps-15", name: "Dell XPS 15", category: "laptops-tablets", subcategory: "Laptops", price: "$1,499.00", priceNum: 1499, rating: 5, brand: "Dell" },
  { id: "ipad-pro", name: "Apple iPad Pro 12.9\"", category: "laptops-tablets", subcategory: "Tablets", price: "$1,099.00", priceNum: 1099, rating: 5, brand: "Apple" },
  { id: "surface-pro", name: "Microsoft Surface Pro 9", category: "laptops-tablets", subcategory: "Tablets", price: "$999.00", priceNum: 999, rating: 4, brand: "Microsoft" },
  { id: "asus-zenbook", name: "ASUS ZenBook 14", category: "laptops-tablets", subcategory: "Laptops", price: "$899.00", priceNum: 899, rating: 4, brand: "Asus" },
  { id: "lenovo-thinkpad", name: "Lenovo ThinkPad X1 Carbon", category: "laptops-tablets", subcategory: "Laptops", price: "$1,649.00", priceNum: 1649, rating: 5, brand: "Lenovo" },

  // Cameras
  { id: "canon-r6", name: "Canon EOS R6 Mark II", category: "cameras", subcategory: "Mirrorless", price: "$2,499.00", priceNum: 2499, rating: 5, brand: "Canon" },
  { id: "sony-a7iv", name: "Sony A7 IV", category: "cameras", subcategory: "Mirrorless", price: "$2,498.00", priceNum: 2498, rating: 5, brand: "Sony" },
  { id: "gopro-12", name: "GoPro Hero 12 Black", category: "cameras", subcategory: "Action Cameras", price: "$399.99", priceNum: 399.99, rating: 5, brand: "GoPro" },
  { id: "sony-24-70", name: "Sony FE 24-70mm f/2.8 GM II", category: "cameras", subcategory: "Lenses", price: "$2,199.00", priceNum: 2199, rating: 5, brand: "Sony" },

  // Home & Outdoor
  { id: "nest-hub", name: "Google Nest Hub Max", category: "home-outdoor", subcategory: "Smart Home", price: "$229.00", priceNum: 229, rating: 4, brand: "Google" },
  { id: "ring-doorbell", name: "Ring Video Doorbell 4", category: "home-outdoor", subcategory: "Security", price: "$199.99", priceNum: 199.99, rating: 5, brand: "Ring" },
  { id: "philips-hue", name: "Philips Hue Starter Kit", category: "home-outdoor", subcategory: "Lighting", price: "$199.99", priceNum: 199.99, rating: 5, brand: "Philips" },
];

export function getProductsByCategory(categorySlug: string): Product[] {
  return allProducts.filter((p) => p.category === categorySlug);
}

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}

export function getBrands(categorySlug: string): { name: string; count: number }[] {
  const products = getProductsByCategory(categorySlug);
  const brandMap: Record<string, number> = {};
  products.forEach((p) => {
    if (p.brand) {
      brandMap[p.brand] = (brandMap[p.brand] || 0) + 1;
    }
  });
  return Object.entries(brandMap)
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => a.name.localeCompare(b.name));
}
