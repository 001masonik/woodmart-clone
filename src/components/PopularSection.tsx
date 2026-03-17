import { FC } from "react";
import { ChevronRight } from "lucide-react";
import ProductCard from "./ProductCard";

interface PopularSectionProps {
  title: string;
  products: Array<{ name: string; category: string; price: string; rating: number; badge?: "hot" | "sale" | null }>;
}

const PopularSection: FC<PopularSectionProps> = ({ title, products }) => (
  <section className="container mt-12">
    <div className="flex items-center justify-between mb-6">
      <h2 className="text-2xl font-bold text-foreground">Popular in {title}</h2>
      <a href="#" className="flex items-center gap-1 text-sm font-medium text-foreground hover:text-primary transition-colors">
        All Products <ChevronRight size={14} />
      </a>
    </div>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
      {products.map((product) => (
        <ProductCard key={product.name} {...product} />
      ))}
    </div>
  </section>
);

export default PopularSection;
