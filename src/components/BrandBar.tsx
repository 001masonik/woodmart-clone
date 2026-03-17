import { FC } from "react";

const brands = ["Acer", "Alogic", "AOC", "Apple", "Asus", "BenQ", "Bose"];

const BrandBar: FC = () => (
  <section className="container mt-8">
    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-7 border border-brand-border rounded-xl overflow-hidden">
      {brands.map((brand) => (
        <a
          key={brand}
          href="#"
          className="flex items-center justify-center py-5 px-4 border-r border-b border-brand-border last:border-r-0 hover:bg-secondary/50 transition-colors"
        >
          <span className="text-sm font-bold text-muted-foreground tracking-wider uppercase">{brand}</span>
        </a>
      ))}
    </div>
  </section>
);

export default BrandBar;
