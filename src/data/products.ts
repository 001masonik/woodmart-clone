export interface Product {
  id: string;
  name: string;
  category: string;
  subcategory: string;
  price: string;
  priceNum: number;
  oldPrice?: string;
  oldPriceNum?: number;
  rating: number;
  badge?: "hot" | "sale" | null;
  colors?: string[];
  storageOptions?: string[];
  brand?: string;
  image: string;
  hoverImage?: string;
  popularity?: number;
  dateAdded?: string;
}

export interface Category {
  slug: string;
  name: string;
  subcategories: { slug: string; name: string; count: number }[];
}

const WM = "https://woodmart.xtemos.com/electronics-3/wp-content/uploads/sites/27/2025";

export const categories: Category[] = [
  {
    slug: "smartphones",
    name: "Smartphones",
    subcategories: [
      { slug: "smartphons", name: "Smartphones", count: 13 },
      { slug: "covers-for-phones", name: "Covers for Phones", count: 4 },
      { slug: "car-holders", name: "Car Holders", count: 2 },
      { slug: "stand-holders", name: "Stand Holders", count: 2 },
      { slug: "mains-chargers", name: "Mains Chargers", count: 1 },
      { slug: "memory-cards", name: "Memory Cards", count: 1 },
      { slug: "power-banks", name: "Power Banks", count: 6 },
      { slug: "screen-protectors", name: "Screen Protectors", count: 1 },
      { slug: "wireless-chargers", name: "Wireless Chargers", count: 2 },
    ],
  },
  {
    slug: "laptops-tablets",
    name: "Laptops, Tablets & PCs",
    subcategories: [
      { slug: "laptops", name: "Laptops", count: 4 },
      { slug: "tablets", name: "Tablets", count: 2 },
    ],
  },
  {
    slug: "pc-components",
    name: "PC Components",
    subcategories: [
      { slug: "motherboards", name: "Motherboards", count: 2 },
      { slug: "processors", name: "Processors", count: 1 },
      { slug: "graphics-cards", name: "Graphics Cards", count: 1 },
      { slug: "memory", name: "Memory", count: 2 },
      { slug: "storage", name: "Storage", count: 2 },
      { slug: "power-supplies", name: "Power Supplies", count: 2 },
      { slug: "cases", name: "Cases", count: 1 },
      { slug: "cooling", name: "Cooling", count: 1 },
    ],
  },
  {
    slug: "gaming",
    name: "Gaming",
    subcategories: [
      { slug: "pc-games", name: "PC Games", count: 6 },
      { slug: "console-games", name: "Console Games", count: 4 },
      { slug: "gamepads", name: "Gamepads", count: 2 },
      { slug: "wheels", name: "Wheels", count: 1 },
    ],
  },
  {
    slug: "appliances",
    name: "Appliances",
    subcategories: [
      { slug: "ovens", name: "Ovens", count: 2 },
      { slug: "blenders", name: "Blenders", count: 4 },
      { slug: "fridges", name: "Fridges", count: 2 },
      { slug: "dishwashers", name: "Dishwashers", count: 2 },
      { slug: "washing-machines", name: "Washing Machines", count: 2 },
      { slug: "all-in-one", name: "All in One", count: 1 },
    ],
  },
  {
    slug: "tv-audio",
    name: "TV & Audio",
    subcategories: [
      { slug: "televisions", name: "Televisions", count: 2 },
      { slug: "speakers", name: "Speakers", count: 1 },
      { slug: "headphones", name: "Headphones", count: 2 },
      { slug: "soundbars", name: "Soundbars", count: 1 },
    ],
  },
  {
    slug: "home-outdoor",
    name: "Home & Outdoor",
    subcategories: [
      { slug: "smart-home", name: "Smart Home", count: 1 },
      { slug: "lighting", name: "Lighting", count: 1 },
      { slug: "security", name: "Security", count: 1 },
    ],
  },
  {
    slug: "cameras",
    name: "Cameras",
    subcategories: [
      { slug: "mirrorless", name: "Mirrorless", count: 2 },
      { slug: "action-cameras", name: "Action Cameras", count: 1 },
      { slug: "lenses", name: "Lenses", count: 1 },
    ],
  },
];

export const allProducts: Product[] = [
  // ===== SMARTPHONES =====
  { id: "iphone-15", name: "Apple iPhone 15", category: "smartphones", subcategory: "Smartphones", price: "$799.00", priceNum: 799, rating: 5, colors: ["Gray", "Green", "Pink", "White", "Yellow"], storageOptions: ["128GB SSD", "256GB SSD", "1 TB SSD"], brand: "Apple", image: `${WM}/07/apple-iphone-15-1-430x491.jpg.webp`, hoverImage: `${WM}/07/apple-iphone-15-2-430x491.jpg`, popularity: 95, dateAdded: "2024-09-15" },
  { id: "iphone-15-plus", name: "Apple iPhone 15 Plus", category: "smartphones", subcategory: "Smartphones", price: "$899.00", priceNum: 899, rating: 5, colors: ["Gray", "Green", "Pink", "White", "Yellow"], storageOptions: ["128GB SSD", "256GB SSD", "1 TB SSD"], brand: "Apple", image: `${WM}/07/apple-iphone-15-plus-1-430x491.jpg.webp`, hoverImage: `${WM}/07/apple-iphone-15-plus-2-430x491.jpg.webp`, popularity: 90, dateAdded: "2024-09-15" },
  { id: "iphone-15-pro", name: "Apple iPhone 15 Pro", category: "smartphones", subcategory: "Smartphones", price: "$999.00", priceNum: 999, rating: 5, colors: ["Blue", "Gray", "Starlight", "White"], storageOptions: ["128GB SSD", "256GB SSD", "1 TB SSD", "2 TB SSD"], brand: "Apple", image: `${WM}/07/apple-iphone-15-pro-1-430x491.jpg.webp`, hoverImage: `${WM}/07/apple-iphone-15-pro-2-430x491.jpg.webp`, popularity: 98, dateAdded: "2024-09-15" },
  { id: "iphone-15-pro-max", name: "Apple iPhone 15 Pro Max", category: "smartphones", subcategory: "Smartphones", price: "$1,199.00", priceNum: 1199, rating: 5, colors: ["Blue", "Gray", "Starlight", "White"], storageOptions: ["128GB SSD", "256GB SSD", "1 TB SSD", "2 TB SSD"], brand: "Apple", image: `${WM}/07/apple-iphone-15-pro-max-1-430x491.jpg.webp`, hoverImage: `${WM}/07/apple-iphone-15-pro-max-2-430x491.jpg.webp`, popularity: 97, dateAdded: "2024-09-15" },
  { id: "iphone-17", name: "Apple iPhone 17", category: "smartphones", subcategory: "Smartphones", price: "$999.00", priceNum: 999, rating: 5, colors: ["Gray", "Green", "Pink", "White"], storageOptions: ["256GB SSD"], brand: "Apple", image: `${WM}/10/apple-iphone-17-1-430x491.jpg.webp`, hoverImage: `${WM}/10/apple-iphone-17-2-430x491.jpg`, popularity: 100, dateAdded: "2025-09-01" },
  { id: "iphone-17-pro", name: "Apple iPhone 17 Pro", category: "smartphones", subcategory: "Smartphones", price: "$1,099.00", priceNum: 1099, rating: 5, colors: ["Gray", "White", "Yellow"], storageOptions: ["256GB SSD"], brand: "Apple", image: `${WM}/10/apple-iphone-17-pro-1-430x491.jpg.webp`, hoverImage: `${WM}/10/apple-iphone-17-pro-2-430x491.jpg.webp`, popularity: 99, dateAdded: "2025-09-01" },
  { id: "iphone-air", name: "Apple iPhone Air", category: "smartphones", subcategory: "Smartphones", price: "$899.00", priceNum: 899, rating: 5, colors: ["Blue", "Gray", "White", "Yellow"], storageOptions: ["256GB SSD"], brand: "Apple", image: `${WM}/10/apple-iphone-air-1-430x491.jpg.webp`, hoverImage: `${WM}/10/apple-iphone-air-2-430x491.jpg.webp`, popularity: 96, dateAdded: "2025-03-01" },
  { id: "pixel-8", name: "Google Pixel 8", category: "smartphones", subcategory: "Smartphones", price: "$699.99", priceNum: 699.99, rating: 4, colors: ["Black", "Bronze", "Green"], brand: "Google", image: `${WM}/07/google-pixel-8-1-430x491.jpg.webp`, hoverImage: `${WM}/07/google-pixel-8-2-430x491.jpg.webp`, popularity: 80, dateAdded: "2024-10-04" },
  { id: "pixel-8-pro", name: "Google Pixel 8 Pro", category: "smartphones", subcategory: "Smartphones", price: "$999.99", priceNum: 999.99, rating: 5, colors: ["Black", "Bronze", "Purple"], brand: "Google", image: `${WM}/07/google-pixel-8-pro-1-430x491.jpg.webp`, hoverImage: `${WM}/07/google-pixel-8-pro-2-430x491.jpg.webp`, popularity: 82, dateAdded: "2024-10-04" },
  { id: "moto-edge", name: "Motorola Edge+ (2023)", category: "smartphones", subcategory: "Smartphones", price: "$617.45", priceNum: 617.45, rating: 4, brand: "Motorola", image: `${WM}/07/motorola-edge-1-430x491.jpg.webp`, hoverImage: `${WM}/07/motorola-edge-2-430x491.jpg.webp`, popularity: 60, dateAdded: "2024-05-01" },
  { id: "moto-razr", name: "Motorola Moto Razr 40 Ultra", category: "smartphones", subcategory: "Smartphones", price: "$899.99", priceNum: 899.99, rating: 4, colors: ["Black", "Green", "Orchid"], brand: "Motorola", image: `${WM}/07/motorola-razr-40-ultra-1-430x491.jpg.webp`, hoverImage: `${WM}/07/motorola-razr-40-ultra-2-430x491.jpg.webp`, popularity: 65, dateAdded: "2024-06-01" },
  { id: "nokia-g60", name: "Nokia G60 5G", category: "smartphones", subcategory: "Smartphones", price: "$378.00", priceNum: 378, rating: 5, colors: ["Black", "White"], brand: "Nokia", image: `${WM}/07/nokia-g60-1-430x491.jpg.webp`, hoverImage: `${WM}/07/nokia-g60-2-430x491.jpg.webp`, popularity: 50, dateAdded: "2024-03-01" },
  { id: "poco-x9b", name: "Poco Honor X9b", category: "smartphones", subcategory: "Smartphones", price: "$350.00", priceNum: 350, rating: 5, brand: "Poco", image: `${WM}/07/poco-honor-x9b-1-430x491.jpg.webp`, hoverImage: `${WM}/07/poco-honor-x9b-2-430x491.jpg.webp`, popularity: 55, dateAdded: "2024-07-01" },

  // Covers for Phones
  { id: "apple-clear-case", name: "Apple Clear Case", category: "smartphones", subcategory: "Covers for Phones", price: "$49.00", priceNum: 49, rating: 4, brand: "Apple", image: `${WM}/07/apple-clear-case-1-430x491.jpg.webp`, hoverImage: `${WM}/07/apple-clear-case-2-430x491.jpg.webp`, popularity: 70, dateAdded: "2024-09-15" },
  { id: "apple-finewoven", name: "Apple FineWoven Case", category: "smartphones", subcategory: "Covers for Phones", price: "$59.00", priceNum: 59, rating: 4, colors: ["Black", "Blue", "Gold", "Green"], brand: "Apple", image: `${WM}/07/apple-finewoven-case-1-430x491.jpg.webp`, hoverImage: `${WM}/07/apple-finewoven-case-2-430x491.jpg.webp`, popularity: 72, dateAdded: "2024-09-15" },
  { id: "apple-silicone-case", name: "Apple Silicone Case", category: "smartphones", subcategory: "Covers for Phones", price: "$49.00", priceNum: 49, rating: 0, colors: ["Black", "Bronze", "Purple"], brand: "Apple", image: `${WM}/07/apple-silicone-case-1-430x491.jpg.webp`, hoverImage: `${WM}/07/apple-silicone-case-2-430x491.jpg`, popularity: 68, dateAdded: "2024-09-15" },
  { id: "otterbox-figura", name: "OtterBox Figura Series Case", category: "smartphones", subcategory: "Covers for Phones", price: "$49.95", priceNum: 49.95, rating: 5, brand: "OtterBox", image: `${WM}/07/otterbox-figura-1-430x491.jpg.webp`, hoverImage: `${WM}/07/otterbox-figura-2-430x491.jpg.webp`, popularity: 45, dateAdded: "2024-08-01" },

  // Car Holders
  { id: "baseus-glaze-gravity", name: "Baseus Glaze Gravity Car", category: "smartphones", subcategory: "Car Holders", price: "$18.00", priceNum: 18, rating: 0, brand: "Baseus", image: `${WM}/07/baseus-glaze-gravity-car-1-430x491.jpg.webp`, hoverImage: `${WM}/07/baseus-glaze-gravity-car-2-430x491.jpg.webp`, popularity: 30, dateAdded: "2024-04-01" },
  { id: "baseus-smart-solar", name: "Baseus Smart Solar Power", category: "smartphones", subcategory: "Car Holders", price: "$32.00", priceNum: 32, rating: 0, brand: "Baseus", image: `${WM}/07/baseus-smart-solar-power-1-430x491.jpg.webp`, hoverImage: `${WM}/07/baseus-smart-solar-power-2-430x491.jpg.webp`, popularity: 28, dateAdded: "2024-04-01" },

  // Stand Holders
  { id: "baseus-literary-youth", name: "Baseus Literary Youth", category: "smartphones", subcategory: "Stand Holders", price: "$15.50", priceNum: 15.5, rating: 0, brand: "Baseus", image: `${WM}/07/baseus-literary-youth-1-430x491.jpg.webp`, hoverImage: `${WM}/07/baseus-literary-youth-2-430x491.jpg.webp`, popularity: 25, dateAdded: "2024-04-01" },
  { id: "baseus-ring", name: "Baseus Privity Ring Bracket", category: "smartphones", subcategory: "Stand Holders", price: "$12.00", priceNum: 12, rating: 5, brand: "Baseus", image: `${WM}/07/baseus-privity-ring-bracket-2-430x491.jpg.webp`, hoverImage: `${WM}/07/baseus-privity-ring-bracket-2-1-430x491.jpg.webp`, popularity: 35, dateAdded: "2024-04-01" },

  // Power Banks
  { id: "baseus-adaman", name: "Baseus Adaman Metal PD 65W 20000mAh", category: "smartphones", subcategory: "Power Banks", price: "$65.00", priceNum: 65, rating: 0, brand: "Baseus", image: `${WM}/07/baseus-adaman-metal-1-430x491.jpg.webp`, hoverImage: `${WM}/07/baseus-adaman-metal-2-430x491.jpg.webp`, popularity: 40, dateAdded: "2024-05-01" },
  { id: "baseus-bipow", name: "Baseus Bipow Digital Display 30000 mAh 20W", category: "smartphones", subcategory: "Power Banks", price: "$63.00", priceNum: 63, rating: 0, brand: "Baseus", image: `${WM}/07/baseus-bipow-digital-display-1-430x491.jpg.webp`, hoverImage: `${WM}/07/baseus-bipow-digital-display-2-430x491.jpg.webp`, popularity: 38, dateAdded: "2024-05-01" },
  { id: "baseus-bipow-pro", name: "Baseus Bipow Pro Digital Display 10000mAh 20W", category: "smartphones", subcategory: "Power Banks", price: "$45.00", priceNum: 45, rating: 0, brand: "Baseus", image: `${WM}/07/baseus-bipow-pro-digital-display-1-430x491.jpg.webp`, hoverImage: `${WM}/07/baseus-bipow-pro-digital-display-2-430x491.jpg.webp`, popularity: 36, dateAdded: "2024-05-01" },
  { id: "baseus-blade", name: "Baseus Blade Digital Display 100W 20000mAh", category: "smartphones", subcategory: "Power Banks", price: "$80.00", priceNum: 80, rating: 0, brand: "Baseus", image: `${WM}/07/baseus-blade-digital-display-1-430x491.jpg.webp`, hoverImage: `${WM}/07/baseus-blade-digital-display-2-430x491.jpg.webp`, popularity: 42, dateAdded: "2024-05-01" },
  { id: "baseus-elf", name: "Baseus Elf 10000mAh PD22.5W", category: "smartphones", subcategory: "Power Banks", price: "$38.00", priceNum: 38, rating: 0, brand: "Baseus", image: `${WM}/07/baseus-elf-1-430x491.jpg.webp`, hoverImage: `${WM}/07/baseus-elf-2-430x491.jpg.webp`, popularity: 32, dateAdded: "2024-05-01" },
  { id: "baseus-mini-s", name: "Baseus Mini S 10000mAh 15W", category: "smartphones", subcategory: "Power Banks", price: "$26.00", priceNum: 26, rating: 0, brand: "Baseus", image: `${WM}/07/baseus-mini-s-1-430x491.jpg.webp`, hoverImage: `${WM}/07/baseus-mini-s-2-430x491.jpg.webp`, popularity: 30, dateAdded: "2024-05-01" },

  // Mains Chargers
  { id: "belkin-boostcharge-140w", name: "Belkin BoostCharge Pro 140W", category: "smartphones", subcategory: "Mains Chargers", price: "$129.99", priceNum: 129.99, rating: 0, brand: "Belkin", image: `${WM}/07/belkin-boostcharge-pro-1-430x491.jpg`, hoverImage: `${WM}/07/belkin-boostcharge-pro-2-430x491.jpg.webp`, popularity: 44, dateAdded: "2024-06-01" },

  // Wireless Chargers
  { id: "belkin-boostcharge-2in1", name: "Belkin BoostCharge Pro 2-in-1", category: "smartphones", subcategory: "Wireless Chargers", price: "$67.99", priceNum: 67.99, oldPrice: "$79.99", oldPriceNum: 79.99, rating: 0, badge: "sale", brand: "Belkin", image: `${WM}/07/belkin-boostcharge-pro-3-in-1-1-430x491.jpg.webp`, hoverImage: `${WM}/07/belkin-boostcharge-pro-3-in-1-2-430x491.jpg.webp`, popularity: 48, dateAdded: "2024-06-01" },
  { id: "belkin-boostcharge-3in1", name: "Belkin BoostCharge Pro 3-in-1", category: "smartphones", subcategory: "Wireless Chargers", price: "$149.99", priceNum: 149.99, rating: 0, brand: "Belkin", image: `${WM}/07/belkin-boostcharge-pro-2-in-1-1-430x491.jpg.webp`, hoverImage: `${WM}/07/belkin-boostcharge-pro-2-in-1-2-430x491.jpg`, popularity: 46, dateAdded: "2024-06-01" },

  // Screen Protectors
  { id: "belkin-glass", name: "Belkin Blue Light UltraGlass 2", category: "smartphones", subcategory: "Screen Protectors", price: "$44.99", priceNum: 44.99, rating: 5, brand: "Belkin", image: `${WM}/07/belkin-blue-light-ultraglass-2-1-430x491.jpg.webp`, hoverImage: `${WM}/07/belkin-blue-light-ultraglass-2-2-430x491.jpg.webp`, popularity: 52, dateAdded: "2024-07-01" },

  // Memory Cards
  { id: "sandisk-endurance", name: "SanDisk MAX ENDURANCE", category: "smartphones", subcategory: "Memory Cards", price: "$32.00", priceNum: 32, rating: 5, brand: "SanDisk", image: `${WM}/07/sandisk-max-endurance-1-430x491.jpg.webp`, hoverImage: `${WM}/07/sandisk-max-endurance-2-430x491.jpg.webp`, popularity: 34, dateAdded: "2024-03-01" },

  // ===== PC COMPONENTS =====
  { id: "rog-b550", name: "ASUS ROG Strix B550-F Gaming", category: "pc-components", subcategory: "Motherboards", price: "$189.99", priceNum: 189.99, rating: 5, brand: "Asus", image: "/placeholder.svg", popularity: 75, dateAdded: "2024-01-15" },
  { id: "ryzen-5800x", name: "AMD Ryzen 7 5800X Processor", category: "pc-components", subcategory: "Processors", price: "$299.00", priceNum: 299, rating: 5, badge: "hot", brand: "AMD", image: "/placeholder.svg", popularity: 92, dateAdded: "2024-02-01" },
  { id: "corsair-vengeance", name: "Corsair Vengeance 32GB DDR5", category: "pc-components", subcategory: "Memory", price: "$119.99", priceNum: 119.99, rating: 4, brand: "Corsair", image: "/placeholder.svg", popularity: 70, dateAdded: "2024-03-01" },
  { id: "samsung-980pro", name: "Samsung 980 PRO 1TB NVMe", category: "pc-components", subcategory: "Storage", price: "$149.99", priceNum: 149.99, rating: 5, brand: "Samsung", image: "/placeholder.svg", popularity: 85, dateAdded: "2024-01-01" },
  { id: "rtx-4070", name: "NVIDIA GeForce RTX 4070", category: "pc-components", subcategory: "Graphics Cards", price: "$599.00", priceNum: 599, rating: 5, brand: "NVIDIA", image: "/placeholder.svg", popularity: 95, dateAdded: "2024-04-01" },
  { id: "corsair-rm850x", name: "Corsair RM850x 850W PSU", category: "pc-components", subcategory: "Power Supplies", price: "$139.99", priceNum: 139.99, rating: 4, brand: "Corsair", image: "/placeholder.svg", popularity: 60, dateAdded: "2024-02-15" },
  { id: "nzxt-h7", name: "NZXT H7 Flow Mid-Tower", category: "pc-components", subcategory: "Cases", price: "$129.99", priceNum: 129.99, rating: 5, brand: "NZXT", image: "/placeholder.svg", popularity: 65, dateAdded: "2024-03-15" },
  { id: "noctua-d15", name: "Noctua NH-D15 CPU Cooler", category: "pc-components", subcategory: "Cooling", price: "$109.95", priceNum: 109.95, rating: 5, brand: "Noctua", image: "/placeholder.svg", popularity: 78, dateAdded: "2024-01-20" },
  { id: "wd-sn850x", name: "WD Black SN850X 2TB", category: "pc-components", subcategory: "Storage", price: "$179.99", priceNum: 179.99, rating: 5, brand: "WD", image: "/placeholder.svg", popularity: 72, dateAdded: "2024-02-01" },
  { id: "gskill-z5", name: "G.Skill Trident Z5 RGB 64GB", category: "pc-components", subcategory: "Memory", price: "$249.99", priceNum: 249.99, rating: 5, brand: "G.Skill", image: "/placeholder.svg", popularity: 68, dateAdded: "2024-04-15" },
  { id: "msi-z790", name: "MSI MEG Z790 ACE", category: "pc-components", subcategory: "Motherboards", price: "$499.99", priceNum: 499.99, rating: 4, brand: "MSI", image: "/placeholder.svg", popularity: 55, dateAdded: "2024-01-10" },
  { id: "evga-1000w", name: "EVGA SuperNOVA 1000W", category: "pc-components", subcategory: "Power Supplies", price: "$189.99", priceNum: 189.99, rating: 5, brand: "EVGA", image: "/placeholder.svg", popularity: 50, dateAdded: "2024-03-01" },

  // ===== APPLIANCES =====
  { id: "ariete-0979", name: "ARIETE 0979 Pizza Oven", category: "appliances", subcategory: "Ovens", price: "$110.00", priceNum: 110, rating: 5, brand: "Ariete", image: "/placeholder.svg", popularity: 60, dateAdded: "2024-02-01" },
  { id: "ariete-986", name: "ARIETE 986 Vintage Oven", category: "appliances", subcategory: "Ovens", price: "$150.00", priceNum: 150, rating: 4, brand: "Ariete", image: "/placeholder.svg", popularity: 55, dateAdded: "2024-02-15" },
  { id: "bamix-deluxe", name: "Bamix DeLuxe M200", category: "appliances", subcategory: "Blenders", price: "$230.00", priceNum: 230, rating: 4, brand: "Bamix", image: "/placeholder.svg", popularity: 45, dateAdded: "2024-03-01" },
  { id: "bamix-luxury", name: "Bamix Luxurylin M200", category: "appliances", subcategory: "Blenders", price: "$605.00", priceNum: 605, rating: 5, brand: "Bamix", image: "/placeholder.svg", popularity: 40, dateAdded: "2024-03-15" },
  { id: "bosch-kuw20", name: "Bosch KUW20VHF0G Wine Cooler", category: "appliances", subcategory: "Fridges", price: "$745.00", priceNum: 745, rating: 4, brand: "Bosch", image: "/placeholder.svg", popularity: 50, dateAdded: "2024-01-01" },
  { id: "bosch-mmb", name: "Bosch MMB6141B Blender", category: "appliances", subcategory: "Blenders", price: "$90.00", priceNum: 90, rating: 4, brand: "Bosch", image: "/placeholder.svg", popularity: 65, dateAdded: "2024-04-01" },
  { id: "bosch-serie2-dish", name: "Bosch Serie 2 SMS2ITW08G", category: "appliances", subcategory: "Dishwashers", price: "$440.00", priceNum: 440, rating: 5, badge: "hot", brand: "Bosch", image: "/placeholder.svg", popularity: 85, dateAdded: "2024-05-01" },
  { id: "bosch-serie2-dish2", name: "Bosch Serie 2 SMV2ITX18G", category: "appliances", subcategory: "Dishwashers", price: "$520.00", priceNum: 520, rating: 4, brand: "Bosch", image: "/placeholder.svg", popularity: 70, dateAdded: "2024-05-15" },
  { id: "bosch-serie4", name: "Bosch Serie 4 KSV36VLEP", category: "appliances", subcategory: "Fridges", price: "$830.00", priceNum: 830, rating: 4, brand: "Bosch", image: "/placeholder.svg", popularity: 55, dateAdded: "2024-01-15" },
  { id: "bosch-wav28", name: "Bosch WAV28K90ME", category: "appliances", subcategory: "Washing Machines", price: "$1,200.00", priceNum: 1200, rating: 5, brand: "Bosch", image: "/placeholder.svg", popularity: 60, dateAdded: "2024-02-01" },
  { id: "bosch-wdu28", name: "Bosch WDU28590OE", category: "appliances", subcategory: "All in One", price: "$1,200.00", priceNum: 1200, rating: 5, brand: "Bosch", image: "/placeholder.svg", popularity: 58, dateAdded: "2024-02-15" },
  { id: "bosch-ms64", name: "Bosch MS64M6170", category: "appliances", subcategory: "Blenders", price: "$100.00", priceNum: 100, rating: 4, brand: "Bosch", image: "/placeholder.svg", popularity: 62, dateAdded: "2024-04-15" },
  { id: "bosch-wga", name: "Bosch WGA242X0ME", category: "appliances", subcategory: "Washing Machines", price: "$650.00", priceNum: 650, oldPrice: "$780.00", oldPriceNum: 780, rating: 5, badge: "sale", brand: "Bosch", image: "/placeholder.svg", popularity: 75, dateAdded: "2024-06-01" },

  // ===== GAMING =====
  { id: "cobra-gt900", name: "Cobra Rally GT900", category: "gaming", subcategory: "Wheels", price: "$180.00", priceNum: 180, rating: 4, brand: "Cobra", image: "/placeholder.svg", popularity: 40, dateAdded: "2024-03-01" },
  { id: "cyberpunk", name: "Cyberpunk 2077", category: "gaming", subcategory: "PC Games", price: "$60.00", priceNum: 60, rating: 5, brand: "CD Projekt", image: "/placeholder.svg", popularity: 95, dateAdded: "2024-01-01" },
  { id: "dualsense", name: "DualSense Controller", category: "gaming", subcategory: "Gamepads", price: "$70.00", priceNum: 70, rating: 5, brand: "Sony", image: "/placeholder.svg", popularity: 88, dateAdded: "2024-02-01" },
  { id: "fifa-22", name: "FIFA 22", category: "gaming", subcategory: "PC Games", price: "$39.00", priceNum: 39, rating: 4, brand: "EA", image: "/placeholder.svg", popularity: 50, dateAdded: "2023-10-01" },
  { id: "fifa-23", name: "FIFA 23", category: "gaming", subcategory: "Console Games", price: "$69.00", priceNum: 69, rating: 5, brand: "EA", image: "/placeholder.svg", popularity: 72, dateAdded: "2024-01-15" },
  { id: "gow-ragnarok", name: "God of War Ragnarok", category: "gaming", subcategory: "Console Games", price: "$60.00", priceNum: 60, rating: 5, badge: "hot", brand: "Sony", image: "/placeholder.svg", popularity: 98, dateAdded: "2024-04-01" },
  { id: "hogwarts", name: "Hogwarts Legacy", category: "gaming", subcategory: "Console Games", price: "$69.00", priceNum: 69, rating: 5, brand: "WB", image: "/placeholder.svg", popularity: 90, dateAdded: "2024-02-15" },
  { id: "forza-h5", name: "Forza Horizon 5", category: "gaming", subcategory: "Console Games", price: "$55.00", priceNum: 55, rating: 4, brand: "Microsoft", image: "/placeholder.svg", popularity: 65, dateAdded: "2023-11-01" },
  { id: "hori-pro", name: "Hori Horipad Pro", category: "gaming", subcategory: "Gamepads", price: "$60.00", priceNum: 60, rating: 4, brand: "Hori", image: "/placeholder.svg", popularity: 35, dateAdded: "2024-03-15" },
  { id: "horizon-zd", name: "Horizon Zero Dawn", category: "gaming", subcategory: "PC Games", price: "$39.00", priceNum: 39, rating: 4, badge: "hot", brand: "Sony", image: "/placeholder.svg", popularity: 80, dateAdded: "2024-01-01" },
  { id: "fifa-23-pc", name: "FIFA 23 PC Edition", category: "gaming", subcategory: "PC Games", price: "$69.00", priceNum: 69, rating: 5, brand: "EA", image: "/placeholder.svg", popularity: 70, dateAdded: "2024-01-15" },
  { id: "hogwarts-pc", name: "Hogwarts Legacy PC", category: "gaming", subcategory: "PC Games", price: "$69.00", priceNum: 69, rating: 5, brand: "WB", image: "/placeholder.svg", popularity: 88, dateAdded: "2024-02-15" },

  // ===== TV & AUDIO =====
  { id: "audioengine-a2bt", name: "Audioengine A2+BT", category: "tv-audio", subcategory: "Speakers", price: "$300.00", priceNum: 300, rating: 5, brand: "Audioengine", image: "/placeholder.svg", popularity: 60, dateAdded: "2024-01-01" },
  { id: "sony-wh1000", name: "Sony WH-1000XM5", category: "tv-audio", subcategory: "Headphones", price: "$349.99", priceNum: 349.99, rating: 5, brand: "Sony", image: "/placeholder.svg", popularity: 95, dateAdded: "2024-03-01" },
  { id: "bose-qc45", name: "Bose QuietComfort 45", category: "tv-audio", subcategory: "Headphones", price: "$329.00", priceNum: 329, rating: 5, brand: "Bose", image: "/placeholder.svg", popularity: 90, dateAdded: "2024-02-01" },
  { id: "sonos-beam", name: "Sonos Beam Gen 2", category: "tv-audio", subcategory: "Soundbars", price: "$449.00", priceNum: 449, rating: 5, brand: "Sonos", image: "/placeholder.svg", popularity: 70, dateAdded: "2024-04-01" },
  { id: "samsung-qn90b", name: "Samsung QN90B 55\" QLED", category: "tv-audio", subcategory: "Televisions", price: "$1,299.00", priceNum: 1299, rating: 5, brand: "Samsung", image: "/placeholder.svg", popularity: 85, dateAdded: "2024-01-15" },
  { id: "lg-c3", name: "LG C3 55\" OLED", category: "tv-audio", subcategory: "Televisions", price: "$1,499.00", priceNum: 1499, rating: 5, brand: "LG", image: "/placeholder.svg", popularity: 88, dateAdded: "2024-02-01" },

  // ===== LAPTOPS & TABLETS =====
  { id: "macbook-pro-14", name: "Apple MacBook Pro 14\" M3", category: "laptops-tablets", subcategory: "Laptops", price: "$1,999.00", priceNum: 1999, rating: 5, brand: "Apple", image: "/placeholder.svg", popularity: 98, dateAdded: "2024-10-01" },
  { id: "dell-xps-15", name: "Dell XPS 15", category: "laptops-tablets", subcategory: "Laptops", price: "$1,499.00", priceNum: 1499, rating: 5, brand: "Dell", image: "/placeholder.svg", popularity: 80, dateAdded: "2024-06-01" },
  { id: "ipad-pro", name: "Apple iPad Pro 12.9\"", category: "laptops-tablets", subcategory: "Tablets", price: "$1,099.00", priceNum: 1099, rating: 5, brand: "Apple", image: "/placeholder.svg", popularity: 92, dateAdded: "2024-05-01" },
  { id: "surface-pro", name: "Microsoft Surface Pro 9", category: "laptops-tablets", subcategory: "Tablets", price: "$999.00", priceNum: 999, rating: 4, brand: "Microsoft", image: "/placeholder.svg", popularity: 70, dateAdded: "2024-03-01" },
  { id: "asus-zenbook", name: "ASUS ZenBook 14", category: "laptops-tablets", subcategory: "Laptops", price: "$899.00", priceNum: 899, rating: 4, brand: "Asus", image: "/placeholder.svg", popularity: 65, dateAdded: "2024-04-01" },
  { id: "lenovo-thinkpad", name: "Lenovo ThinkPad X1 Carbon", category: "laptops-tablets", subcategory: "Laptops", price: "$1,649.00", priceNum: 1649, rating: 5, brand: "Lenovo", image: "/placeholder.svg", popularity: 75, dateAdded: "2024-07-01" },

  // ===== CAMERAS =====
  { id: "canon-r6", name: "Canon EOS R6 Mark II", category: "cameras", subcategory: "Mirrorless", price: "$2,499.00", priceNum: 2499, rating: 5, brand: "Canon", image: "/placeholder.svg", popularity: 85, dateAdded: "2024-01-01" },
  { id: "sony-a7iv", name: "Sony A7 IV", category: "cameras", subcategory: "Mirrorless", price: "$2,498.00", priceNum: 2498, rating: 5, brand: "Sony", image: "/placeholder.svg", popularity: 88, dateAdded: "2024-02-01" },
  { id: "gopro-12", name: "GoPro Hero 12 Black", category: "cameras", subcategory: "Action Cameras", price: "$399.99", priceNum: 399.99, rating: 5, brand: "GoPro", image: "/placeholder.svg", popularity: 90, dateAdded: "2024-09-01" },
  { id: "sony-24-70", name: "Sony FE 24-70mm f/2.8 GM II", category: "cameras", subcategory: "Lenses", price: "$2,199.00", priceNum: 2199, rating: 5, brand: "Sony", image: "/placeholder.svg", popularity: 72, dateAdded: "2024-03-01" },

  // ===== HOME & OUTDOOR =====
  { id: "nest-hub", name: "Google Nest Hub Max", category: "home-outdoor", subcategory: "Smart Home", price: "$229.00", priceNum: 229, rating: 4, brand: "Google", image: "/placeholder.svg", popularity: 65, dateAdded: "2024-01-01" },
  { id: "ring-doorbell", name: "Ring Video Doorbell 4", category: "home-outdoor", subcategory: "Security", price: "$199.99", priceNum: 199.99, rating: 5, brand: "Ring", image: "/placeholder.svg", popularity: 80, dateAdded: "2024-04-01" },
  { id: "philips-hue", name: "Philips Hue Starter Kit", category: "home-outdoor", subcategory: "Lighting", price: "$199.99", priceNum: 199.99, rating: 5, brand: "Philips", image: "/placeholder.svg", popularity: 75, dateAdded: "2024-02-01" },
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

export function getColors(categorySlug: string): { name: string; count: number }[] {
  const products = getProductsByCategory(categorySlug);
  const colorMap: Record<string, number> = {};
  products.forEach((p) => {
    if (p.colors) {
      p.colors.forEach((c) => {
        colorMap[c] = (colorMap[c] || 0) + 1;
      });
    }
  });
  return Object.entries(colorMap)
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => a.name.localeCompare(b.name));
}
