import { FC, useState } from "react";
import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";
import { allProducts } from "@/data/products";

const tabs = [
  { label: "Smartphones", category: "smartphones" },
  { label: "PC & Components", category: "pc-components" },
  { label: "Appliances", category: "appliances" },
];

const BestsellersSection: FC = () => {
  const [activeTab, setActiveTab] = useState("smartphones");
  const activeLabel = tabs.find(t => t.category === activeTab)?.label || "";

  const products = allProducts.filter((p) => p.category === activeTab).slice(0, 12);

  return (
    <section className="container mt-12">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
        <h2 className="text-2xl font-bold text-foreground">
          <span className="text-section-accent">Bestsellers</span> in Category
        </h2>
        <div className="flex gap-2 flex-wrap">
          {tabs.map((tab) => (
            <button
              key={tab.category}
              onClick={() => setActiveTab(tab.category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                tab.category === activeTab
                  ? "bg-foreground text-background shadow-md"
                  : "border border-border text-foreground hover:bg-secondary"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            name={product.name}
            category={product.subcategory}
            price={product.price}
            oldPrice={product.oldPrice}
            rating={product.rating}
            badge={product.badge}
          />
        ))}
      </div>
      <div className="text-center mt-6">
        <Link
          to={`/category/${activeTab}`}
          className="inline-flex items-center text-sm font-medium text-primary hover:underline"
        >
          View all {activeLabel} →
        </Link>
      </div>
    </section>
  );
};

export default BestsellersSection;
