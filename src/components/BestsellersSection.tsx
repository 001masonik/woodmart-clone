import { FC, useState } from "react";
import ProductCard from "./ProductCard";

const tabs = ["Smartphones", "PC & Components", "Appliances"];

const products: Record<string, Array<{ name: string; category: string; price: string; rating: number }>> = {
  Smartphones: [
    { name: "Apple iPhone 15", category: "Smartphones", price: "$799.00", rating: 5 },
    { name: "Apple iPhone 15 Plus", category: "Smartphones", price: "$899.00", rating: 5 },
    { name: "Apple iPhone 15 Pro", category: "Smartphones", price: "$999.00", rating: 5 },
    { name: "Apple iPhone 15 Pro Max", category: "Smartphones", price: "$1,199.00", rating: 5 },
    { name: "Apple iPhone 17", category: "Smartphones", price: "$999.00", rating: 5 },
    { name: "Google Pixel 8", category: "Smartphones", price: "$699.99", rating: 4 },
  ],
  "PC & Components": [
    { name: "ASUS ROG Strix B550-F", category: "Motherboards", price: "$189.99", rating: 5 },
    { name: "AMD Ryzen 7 5800X", category: "Processors", price: "$299.00", rating: 5 },
    { name: "Corsair Vengeance 32GB", category: "Memory", price: "$119.99", rating: 4 },
    { name: "Samsung 980 PRO 1TB", category: "Storage", price: "$149.99", rating: 5 },
    { name: "NVIDIA RTX 4070", category: "Graphics Cards", price: "$599.00", rating: 5 },
    { name: "Corsair RM850x", category: "Power Supplies", price: "$139.99", rating: 4 },
  ],
  Appliances: [
    { name: "ARIETE 0979", category: "Ovens", price: "$110.00", rating: 5 },
    { name: "Bamix DeLuxe M200", category: "Blenders", price: "$230.00", rating: 4 },
    { name: "Bosch KUW20VHF0G", category: "Fridges", price: "$745.00", rating: 4 },
    { name: "Bosch MMB6141B", category: "Blenders", price: "$90.00", rating: 4 },
    { name: "Bosch Serie 2 SMS2ITW08G", category: "Dishwashers", price: "$440.00", rating: 5 },
    { name: "Bosch WAV28K90ME", category: "Washing Machines", price: "$1,200.00", rating: 5 },
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
        <div className="flex gap-2">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                tab === activeTab
                  ? "bg-foreground text-background"
                  : "border border-border text-foreground hover:bg-secondary"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
        {products[activeTab].map((product) => (
          <ProductCard key={product.name} {...product} />
        ))}
      </div>
    </section>
  );
};

export default BestsellersSection;
