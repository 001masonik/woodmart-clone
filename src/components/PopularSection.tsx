import { FC } from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import ProductCard from "./ProductCard";

interface PopularSectionProps {
  title: string;
  categorySlug: string;
  products: Array<{ name: string; category: string; price: string; oldPrice?: string; rating: number; badge?: "hot" | "sale" | null }>;
}

const PopularSection: FC<PopularSectionProps> = ({ title, categorySlug, products }) => (
  <section className="container mt-12">
    <div className="flex items-center justify-between mb-6">
      <h2 className="text-2xl font-bold text-foreground">Popular in {title}</h2>
      <Link to={`/category/${categorySlug}`} className="flex items-center gap-1 text-sm font-medium text-foreground hover:text-primary transition-colors group">
        All Products <ChevronRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
      </Link>
    </div>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
      {products.map((product, idx) => (
        <ProductCard key={idx} {...product} />
      ))}
    </div>
  </section>
);

export default PopularSection;
