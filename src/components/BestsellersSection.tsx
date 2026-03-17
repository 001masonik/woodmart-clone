import { FC, useState } from "react";
import ProductCard from "./ProductCard";

const tabs = ["Smartphones", "PC & Components", "Appliances"];

const products: Record<string, Array<{ name: string; category: string; price: string; oldPrice?: string; rating: number; badge?: "hot" | "sale" | null }>> = {
  Smartphones: [
    { name: "Apple iPhone 15", category: "Smartphones", price: "$799.00", rating: 5 },
    { name: "Apple iPhone 15 Plus", category: "Smartphones", price: "$899.00", rating: 5 },
    { name: "Apple iPhone 15 Pro", category: "Smartphones", price: "$999.00", rating: 5 },
    { name: "Apple iPhone 15 Pro Max", category: "Smartphones", price: "$1,199.00", rating: 5 },
    { name: "Apple iPhone 17", category: "Smartphones", price: "$999.00", rating: 5 },
    { name: "Apple iPhone 17 Pro", category: "Smartphones", price: "$1,099.00", rating: 5 },
    { name: "Apple iPhone Air", category: "Smartphones", price: "$899.00", rating: 5 },
    { name: "Google Pixel 8", category: "Smartphones", price: "$699.99", rating: 4 },
    { name: "Google Pixel 8 Pro", category: "Smartphones", price: "$999.99", rating: 5 },
    { name: "Motorola Edge+ (2023)", category: "Smartphones", price: "$617.45", rating: 4 },
    { name: "Motorola Moto Razr 40 Ultra", category: "Smartphones", price: "$899.99", rating: 4 },
    { name: "Nokia G60 5G", category: "Smartphones", price: "$378.00", rating: 5 },
  ],
  "PC & Components": [
    { name: "ASUS ROG Strix B550-F Gaming", category: "Motherboards", price: "$189.99", rating: 5 },
    { name: "AMD Ryzen 7 5800X Processor", category: "Processors", price: "$299.00", rating: 5, badge: "hot" },
    { name: "Corsair Vengeance 32GB DDR5", category: "Memory", price: "$119.99", rating: 4 },
    { name: "Samsung 980 PRO 1TB NVMe", category: "Storage", price: "$149.99", rating: 5 },
    { name: "NVIDIA GeForce RTX 4070", category: "Graphics Cards", price: "$599.00", rating: 5 },
    { name: "Corsair RM850x 850W PSU", category: "Power Supplies", price: "$139.99", rating: 4 },
    { name: "NZXT H7 Flow Mid-Tower", category: "Cases", price: "$129.99", rating: 5 },
    { name: "Noctua NH-D15 CPU Cooler", category: "Cooling", price: "$109.95", rating: 5 },
    { name: "WD Black SN850X 2TB", category: "Storage", price: "$179.99", rating: 5 },
    { name: "G.Skill Trident Z5 RGB 64GB", category: "Memory", price: "$249.99", rating: 5 },
    { name: "MSI MEG Z790 ACE", category: "Motherboards", price: "$499.99", rating: 4 },
    { name: "EVGA SuperNOVA 1000W", category: "Power Supplies", price: "$189.99", rating: 5 },
  ],
  Appliances: [
    { name: "ARIETE 0979 Pizza Oven", category: "Ovens", price: "$110.00", rating: 5 },
    { name: "Bamix DeLuxe M200 Blender", category: "Blenders", price: "$230.00", rating: 4 },
    { name: "Bosch KUW20VHF0G Wine Cooler", category: "Fridges", price: "$745.00", rating: 4 },
    { name: "Bosch MMB6141B Blender", category: "Blenders", price: "$90.00", rating: 4 },
    { name: "Bosch Serie 2 Dishwasher", category: "Dishwashers", price: "$440.00", rating: 5, badge: "hot" },
    { name: "Bosch WAV28K90ME Washer", category: "Washing Machines", price: "$1,200.00", rating: 5 },
    { name: "Bamix Luxurylin M200", category: "Blenders", price: "$605.00", rating: 5 },
    { name: "Bosch Serie 4 KSV36VLEP", category: "Fridges", price: "$830.00", rating: 4 },
    { name: "Bosch WDU28590OE All-in-One", category: "All in One", price: "$1,200.00", rating: 5 },
    { name: "ARIETE 986 Vintage Oven", category: "Ovens", price: "$150.00", rating: 4 },
    { name: "Bosch MS64M6170 Blender", category: "Blenders", price: "$100.00", rating: 4 },
    { name: "Bosch WGA242X0ME Washer", category: "Washing Machines", price: "$650.00", oldPrice: "$780.00", rating: 5, badge: "sale" },
  ],
};

const BestsellersSection: FC = () => {
  const [activeTab, setActiveTab] = useState("Smartphones");

  return (
    <section className="container mt-12">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
        <h2 className="text-2xl font-bold text-foreground">
          <span className="text-section-accent">Bestsellers</span> in Category
        </h2>
        <div className="flex gap-2 flex-wrap">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                tab === activeTab
                  ? "bg-foreground text-background shadow-md"
                  : "border border-border text-foreground hover:bg-secondary"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
        {products[activeTab].map((product, idx) => (
          <ProductCard key={`${activeTab}-${idx}`} {...product} />
        ))}
      </div>
    </section>
  );
};

export default BestsellersSection;
