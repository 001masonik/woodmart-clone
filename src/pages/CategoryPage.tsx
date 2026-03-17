import { FC, useState, useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import FooterSection from "@/components/FooterSection";
import ProductCard from "@/components/ProductCard";
import { getProductsByCategory, getCategoryBySlug, categories, getBrands } from "@/data/products";
import { ChevronRight, Grid3X3, LayoutGrid, SlidersHorizontal } from "lucide-react";

type SortOption = "default" | "price-low" | "price-high" | "rating";

const CategoryPage: FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [sort, setSort] = useState<SortOption>("default");
  const [selectedSubcat, setSelectedSubcat] = useState<string | null>(null);
  const [selectedBrand, setSelectedBrand] = useState<string | null>(null);
  const [gridCols, setGridCols] = useState<3 | 4>(3);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 5000]);

  const category = getCategoryBySlug(slug || "");
  const allCatProducts = useMemo(() => getProductsByCategory(slug || ""), [slug]);
  const brands = useMemo(() => getBrands(slug || ""), [slug]);

  const filteredProducts = useMemo(() => {
    let result = [...allCatProducts];

    if (selectedSubcat) {
      result = result.filter((p) => p.subcategory === selectedSubcat);
    }
    if (selectedBrand) {
      result = result.filter((p) => p.brand === selectedBrand);
    }
    result = result.filter((p) => p.priceNum >= priceRange[0] && p.priceNum <= priceRange[1]);

    switch (sort) {
      case "price-low":
        result.sort((a, b) => a.priceNum - b.priceNum);
        break;
      case "price-high":
        result.sort((a, b) => b.priceNum - a.priceNum);
        break;
      case "rating":
        result.sort((a, b) => b.rating - a.rating);
        break;
    }
    return result;
  }, [allCatProducts, selectedSubcat, selectedBrand, sort, priceRange]);

  const maxPrice = useMemo(() => {
    if (allCatProducts.length === 0) return 5000;
    return Math.ceil(Math.max(...allCatProducts.map((p) => p.priceNum)) / 100) * 100;
  }, [allCatProducts]);

  if (!category) {
    return (
      <div className="min-h-screen bg-background">
        <TopBar />
        <Header />
        <div className="container py-16 text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Category not found</h1>
          <Link to="/" className="text-primary hover:underline">← Back to Home</Link>
        </div>
        <FooterSection />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <TopBar />
      <Header />

      {/* Breadcrumb */}
      <div className="container py-4">
        <nav className="flex items-center gap-2 text-sm">
          <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">Home</Link>
          <ChevronRight size={14} className="text-muted-foreground" />
          <span className="font-medium text-foreground">{category.name}</span>
        </nav>
      </div>

      <div className="container pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-6">
          {/* Sidebar Filters */}
          <aside className="space-y-6">
            {/* Categories */}
            <div className="border border-border rounded-xl p-5">
              <h3 className="font-bold text-foreground mb-4">Categories</h3>
              <ul className="space-y-1">
                <li>
                  <button
                    onClick={() => setSelectedSubcat(null)}
                    className={`w-full flex items-center justify-between py-1.5 px-2 rounded-md text-sm transition-colors ${
                      !selectedSubcat ? "bg-secondary font-medium text-foreground" : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                    }`}
                  >
                    <span>All {category.name}</span>
                    <span className="text-xs bg-muted px-1.5 py-0.5 rounded-full">{allCatProducts.length}</span>
                  </button>
                </li>
                {category.subcategories.map((sub) => {
                  const count = allCatProducts.filter((p) => p.subcategory === sub.name).length;
                  return (
                    <li key={sub.slug}>
                      <button
                        onClick={() => setSelectedSubcat(selectedSubcat === sub.name ? null : sub.name)}
                        className={`w-full flex items-center justify-between py-1.5 px-2 rounded-md text-sm transition-colors ${
                          selectedSubcat === sub.name ? "bg-secondary font-medium text-foreground" : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                        }`}
                      >
                        <span>{sub.name}</span>
                        <span className="text-xs bg-muted px-1.5 py-0.5 rounded-full">{count}</span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Price Filter */}
            <div className="border border-border rounded-xl p-5">
              <h3 className="font-bold text-foreground mb-4">Filter By Price</h3>
              <input
                type="range"
                min={0}
                max={maxPrice}
                value={priceRange[1]}
                onChange={(e) => setPriceRange([0, Number(e.target.value)])}
                className="w-full accent-primary"
              />
              <div className="flex items-center justify-between mt-2 text-sm text-muted-foreground">
                <span>Price: $0 — ${priceRange[1].toLocaleString()}</span>
                <button
                  onClick={() => setPriceRange([0, maxPrice])}
                  className="text-xs font-medium text-primary hover:underline"
                >
                  Reset
                </button>
              </div>
            </div>

            {/* Brand Filter */}
            {brands.length > 0 && (
              <div className="border border-border rounded-xl p-5">
                <h3 className="font-bold text-foreground mb-4">Brand</h3>
                <ul className="space-y-1">
                  {brands.map((brand) => (
                    <li key={brand.name}>
                      <button
                        onClick={() => setSelectedBrand(selectedBrand === brand.name ? null : brand.name)}
                        className={`w-full flex items-center justify-between py-1.5 px-2 rounded-md text-sm transition-colors ${
                          selectedBrand === brand.name ? "bg-secondary font-medium text-foreground" : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                        }`}
                      >
                        <span>{brand.name}</span>
                        <span className="text-xs bg-muted px-1.5 py-0.5 rounded-full">{brand.count}</span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Other categories navigation */}
            <div className="border border-border rounded-xl p-5">
              <h3 className="font-bold text-foreground mb-4">All Departments</h3>
              <ul className="space-y-1">
                {categories.map((cat) => (
                  <li key={cat.slug}>
                    <Link
                      to={`/category/${cat.slug}`}
                      className={`block py-1.5 px-2 rounded-md text-sm transition-colors ${
                        cat.slug === slug ? "bg-primary text-primary-foreground font-medium" : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                      }`}
                    >
                      {cat.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          {/* Main Content */}
          <div>
            {/* Title bar */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
              <div>
                <h1 className="text-2xl font-bold text-foreground">{category.name}</h1>
                <p className="text-sm text-muted-foreground mt-1">
                  {filteredProducts.length} product{filteredProducts.length !== 1 ? "s" : ""} found
                  {selectedSubcat && <span> in <strong>{selectedSubcat}</strong></span>}
                  {selectedBrand && <span> by <strong>{selectedBrand}</strong></span>}
                </p>
              </div>
              <div className="flex items-center gap-3">
                {/* Grid toggle */}
                <div className="flex items-center border border-border rounded-lg overflow-hidden">
                  <button
                    onClick={() => setGridCols(3)}
                    className={`p-2 transition-colors ${gridCols === 3 ? "bg-secondary text-foreground" : "text-muted-foreground hover:bg-secondary/50"}`}
                  >
                    <Grid3X3 size={16} />
                  </button>
                  <button
                    onClick={() => setGridCols(4)}
                    className={`p-2 transition-colors ${gridCols === 4 ? "bg-secondary text-foreground" : "text-muted-foreground hover:bg-secondary/50"}`}
                  >
                    <LayoutGrid size={16} />
                  </button>
                </div>
                {/* Sort */}
                <select
                  value={sort}
                  onChange={(e) => setSort(e.target.value as SortOption)}
                  className="border border-border rounded-lg px-3 py-2 text-sm bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20"
                >
                  <option value="default">Default sorting</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                </select>
              </div>
            </div>

            {/* Active filters */}
            {(selectedSubcat || selectedBrand || priceRange[1] < maxPrice) && (
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <SlidersHorizontal size={14} className="text-muted-foreground" />
                {selectedSubcat && (
                  <button
                    onClick={() => setSelectedSubcat(null)}
                    className="flex items-center gap-1 bg-secondary text-foreground text-xs font-medium px-3 py-1.5 rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    {selectedSubcat} ✕
                  </button>
                )}
                {selectedBrand && (
                  <button
                    onClick={() => setSelectedBrand(null)}
                    className="flex items-center gap-1 bg-secondary text-foreground text-xs font-medium px-3 py-1.5 rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    {selectedBrand} ✕
                  </button>
                )}
                {priceRange[1] < maxPrice && (
                  <button
                    onClick={() => setPriceRange([0, maxPrice])}
                    className="flex items-center gap-1 bg-secondary text-foreground text-xs font-medium px-3 py-1.5 rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    Under ${priceRange[1]} ✕
                  </button>
                )}
                <button
                  onClick={() => { setSelectedSubcat(null); setSelectedBrand(null); setPriceRange([0, maxPrice]); }}
                  className="text-xs text-primary hover:underline ml-2"
                >
                  Clear all
                </button>
              </div>
            )}

            {/* Products Grid */}
            {filteredProducts.length > 0 ? (
              <div className={`grid gap-3 ${
                gridCols === 3
                  ? "grid-cols-1 sm:grid-cols-2 md:grid-cols-3"
                  : "grid-cols-2 sm:grid-cols-3 md:grid-cols-4"
              }`}>
                {filteredProducts.map((product) => (
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
            ) : (
              <div className="text-center py-16">
                <p className="text-lg text-muted-foreground">No products found matching your filters.</p>
                <button
                  onClick={() => { setSelectedSubcat(null); setSelectedBrand(null); setPriceRange([0, maxPrice]); }}
                  className="mt-4 text-primary hover:underline font-medium"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      <FooterSection />
    </div>
  );
};

export default CategoryPage;
