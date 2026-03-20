import { FC, useState, useMemo, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import FooterSection from "@/components/FooterSection";
import ProductCard from "@/components/ProductCard";
import { getProductsByCategory, getCategoryBySlug, categories, getBrands, getColors } from "@/data/products";
import { ChevronRight, ChevronDown, Grid3X3, LayoutGrid, SlidersHorizontal, X } from "lucide-react";

type SortOption = "default" | "popularity" | "rating" | "date" | "price-low" | "price-high";
type PerPage = 9 | 12 | 18 | 24;

const COLOR_HEX: Record<string, string> = {
  Black: "#000000", White: "#ffffff", Gray: "#808080", Blue: "#3b82f6",
  Green: "#22c55e", Pink: "#ec4899", Yellow: "#eab308", Red: "#ef4444",
  Purple: "#a855f7", Bronze: "#cd7f32", Gold: "#ffd700", Starlight: "#f5f0e8",
  Orchid: "#da70d6",
};

const CategoryPage: FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [sort, setSort] = useState<SortOption>("default");
  const [selectedSubcats, setSelectedSubcats] = useState<string[]>([]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [gridCols, setGridCols] = useState<3 | 4>(4);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 5000]);
  const [perPage, setPerPage] = useState<PerPage>(24);
  const [currentPage, setCurrentPage] = useState(1);
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
    categories: true, price: true, brand: true, color: true,
  });
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const category = getCategoryBySlug(slug || "");
  const allCatProducts = useMemo(() => getProductsByCategory(slug || ""), [slug]);
  const brands = useMemo(() => getBrands(slug || ""), [slug]);
  const colors = useMemo(() => getColors(slug || ""), [slug]);

  // Reset filters when category changes
  useEffect(() => {
    setSelectedSubcats([]);
    setSelectedBrands([]);
    setSelectedColors([]);
    setCurrentPage(1);
    setSort("default");
    const max = allCatProducts.length > 0
      ? Math.ceil(Math.max(...allCatProducts.map((p) => p.priceNum)) / 100) * 100
      : 5000;
    setPriceRange([0, max]);
  }, [slug, allCatProducts]);

  const maxPrice = useMemo(() => {
    if (allCatProducts.length === 0) return 5000;
    return Math.ceil(Math.max(...allCatProducts.map((p) => p.priceNum)) / 100) * 100;
  }, [allCatProducts]);

  const filteredProducts = useMemo(() => {
    let result = [...allCatProducts];

    if (selectedSubcats.length > 0) {
      result = result.filter((p) => selectedSubcats.includes(p.subcategory));
    }
    if (selectedBrands.length > 0) {
      result = result.filter((p) => p.brand && selectedBrands.includes(p.brand));
    }
    if (selectedColors.length > 0) {
      result = result.filter((p) => p.colors && p.colors.some((c) => selectedColors.includes(c)));
    }
    result = result.filter((p) => p.priceNum >= priceRange[0] && p.priceNum <= priceRange[1]);

    switch (sort) {
      case "popularity":
        result.sort((a, b) => (b.popularity || 0) - (a.popularity || 0));
        break;
      case "rating":
        result.sort((a, b) => b.rating - a.rating);
        break;
      case "date":
        result.sort((a, b) => (b.dateAdded || "").localeCompare(a.dateAdded || ""));
        break;
      case "price-low":
        result.sort((a, b) => a.priceNum - b.priceNum);
        break;
      case "price-high":
        result.sort((a, b) => b.priceNum - a.priceNum);
        break;
    }
    return result;
  }, [allCatProducts, selectedSubcats, selectedBrands, selectedColors, sort, priceRange]);

  const totalPages = Math.ceil(filteredProducts.length / perPage);
  const paginatedProducts = useMemo(() => {
    const start = (currentPage - 1) * perPage;
    return filteredProducts.slice(start, start + perPage);
  }, [filteredProducts, currentPage, perPage]);

  // Reset page when filters change
  useEffect(() => { setCurrentPage(1); }, [selectedSubcats, selectedBrands, selectedColors, sort, priceRange, perPage]);

  const toggleSection = (key: string) => {
    setExpandedSections((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const toggleFilter = (arr: string[], val: string, setter: (v: string[]) => void) => {
    setter(arr.includes(val) ? arr.filter((v) => v !== val) : [...arr, val]);
  };

  const clearAllFilters = () => {
    setSelectedSubcats([]);
    setSelectedBrands([]);
    setSelectedColors([]);
    setPriceRange([0, maxPrice]);
  };

  const hasActiveFilters = selectedSubcats.length > 0 || selectedBrands.length > 0 || selectedColors.length > 0 || priceRange[1] < maxPrice;

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

  const SidebarContent = () => (
    <div className="space-y-0">
      {/* Categories Accordion */}
      <div className="border-b border-border">
        <button onClick={() => toggleSection("categories")} className="flex items-center justify-between w-full py-4 text-sm font-bold text-foreground uppercase tracking-wider">
          Categories
          <ChevronDown size={16} className={`transition-transform ${expandedSections.categories ? "rotate-180" : ""}`} />
        </button>
        {expandedSections.categories && (
          <ul className="pb-4 space-y-0.5">
            {category.subcategories.map((sub) => {
              const count = allCatProducts.filter((p) => p.subcategory === sub.name).length;
              if (count === 0) return null;
              const isActive = selectedSubcats.includes(sub.name);
              return (
                <li key={sub.slug}>
                  <button
                    onClick={() => toggleFilter(selectedSubcats, sub.name, setSelectedSubcats)}
                    className={`w-full flex items-center justify-between py-1.5 text-sm transition-colors ${
                      isActive ? "font-semibold text-foreground" : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      <span className={`w-4 h-4 rounded border flex items-center justify-center text-[10px] ${
                        isActive ? "bg-foreground border-foreground text-background" : "border-border"
                      }`}>
                        {isActive && "✓"}
                      </span>
                      {sub.name}
                    </span>
                    <span className="text-xs text-muted-foreground">({count})</span>
                  </button>
                </li>
              );
            })}
          </ul>
        )}
      </div>

      {/* Price Filter */}
      <div className="border-b border-border">
        <button onClick={() => toggleSection("price")} className="flex items-center justify-between w-full py-4 text-sm font-bold text-foreground uppercase tracking-wider">
          Filter By Price
          <ChevronDown size={16} className={`transition-transform ${expandedSections.price ? "rotate-180" : ""}`} />
        </button>
        {expandedSections.price && (
          <div className="pb-4">
            <input
              type="range"
              min={0}
              max={maxPrice}
              value={priceRange[1]}
              onChange={(e) => setPriceRange([0, Number(e.target.value)])}
              className="w-full accent-foreground h-1"
            />
            <div className="flex items-center justify-between mt-3">
              <button
                onClick={() => setPriceRange([0, maxPrice])}
                className="text-xs font-semibold text-foreground border border-border rounded px-3 py-1.5 hover:bg-secondary transition-colors uppercase"
              >
                Filter
              </button>
              <span className="text-sm text-muted-foreground">
                Price: <strong className="text-foreground">${priceRange[0]}</strong> — <strong className="text-foreground">${priceRange[1].toLocaleString()}</strong>
              </span>
            </div>
          </div>
        )}
      </div>

      {/* Color Filter */}
      {colors.length > 0 && (
        <div className="border-b border-border">
          <button onClick={() => toggleSection("color")} className="flex items-center justify-between w-full py-4 text-sm font-bold text-foreground uppercase tracking-wider">
            Color
            <ChevronDown size={16} className={`transition-transform ${expandedSections.color ? "rotate-180" : ""}`} />
          </button>
          {expandedSections.color && (
            <div className="pb-4 flex flex-wrap gap-2">
              {colors.map((color) => {
                const isActive = selectedColors.includes(color.name);
                const hex = COLOR_HEX[color.name] || "#ccc";
                return (
                  <button
                    key={color.name}
                    onClick={() => toggleFilter(selectedColors, color.name, setSelectedColors)}
                    className={`w-8 h-8 rounded-full border-2 transition-all flex items-center justify-center ${
                      isActive ? "border-foreground scale-110 ring-2 ring-foreground/20" : "border-border hover:border-muted-foreground"
                    }`}
                    style={{ backgroundColor: hex }}
                    title={`${color.name} (${color.count})`}
                  >
                    {isActive && (
                      <span className={`text-xs font-bold ${hex === "#ffffff" || hex === "#f5f0e8" || hex === "#ffd700" || hex === "#eab308" ? "text-foreground" : "text-white"}`}>✓</span>
                    )}
                  </button>
                );
              })}
            </div>
          )}
        </div>
      )}

      {/* Brand Filter */}
      {brands.length > 0 && (
        <div className="border-b border-border">
          <button onClick={() => toggleSection("brand")} className="flex items-center justify-between w-full py-4 text-sm font-bold text-foreground uppercase tracking-wider">
            Brand
            <ChevronDown size={16} className={`transition-transform ${expandedSections.brand ? "rotate-180" : ""}`} />
          </button>
          {expandedSections.brand && (
            <ul className="pb-4 space-y-0.5">
              {brands.map((brand) => {
                const isActive = selectedBrands.includes(brand.name);
                return (
                  <li key={brand.name}>
                    <button
                      onClick={() => toggleFilter(selectedBrands, brand.name, setSelectedBrands)}
                      className={`w-full flex items-center justify-between py-1.5 text-sm transition-colors ${
                        isActive ? "font-semibold text-foreground" : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      <span className="flex items-center gap-2">
                        <span className={`w-4 h-4 rounded border flex items-center justify-center text-[10px] ${
                          isActive ? "bg-foreground border-foreground text-background" : "border-border"
                        }`}>
                          {isActive && "✓"}
                        </span>
                        {brand.name}
                      </span>
                      <span className="text-xs text-muted-foreground">({brand.count})</span>
                    </button>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      )}

      {/* All Departments */}
      <div className="pt-4">
        <h3 className="text-sm font-bold text-foreground uppercase tracking-wider mb-3">All Departments</h3>
        <ul className="space-y-0.5">
          {categories.map((cat) => (
            <li key={cat.slug}>
              <Link
                to={`/category/${cat.slug}`}
                className={`block py-1.5 text-sm transition-colors ${
                  cat.slug === slug ? "font-semibold text-foreground" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {cat.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );

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
        <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-8">
          {/* Sidebar - Desktop */}
          <aside className="hidden lg:block">
            <SidebarContent />
          </aside>

          {/* Mobile filter overlay */}
          {mobileFiltersOpen && (
            <div className="fixed inset-0 z-50 lg:hidden">
              <div className="absolute inset-0 bg-black/50" onClick={() => setMobileFiltersOpen(false)} />
              <div className="absolute left-0 top-0 bottom-0 w-80 bg-background overflow-y-auto p-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="font-bold text-foreground">Filters</h2>
                  <button onClick={() => setMobileFiltersOpen(false)}><X size={20} /></button>
                </div>
                <SidebarContent />
              </div>
            </div>
          )}

          {/* Main Content */}
          <div>
            {/* Toolbar */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
              <h1 className="text-xl font-bold text-foreground">{category.name}</h1>

              <div className="flex items-center gap-4 flex-wrap">
                {/* Mobile filter button */}
                <button
                  onClick={() => setMobileFiltersOpen(true)}
                  className="lg:hidden flex items-center gap-1.5 text-sm font-medium text-foreground"
                >
                  <SlidersHorizontal size={16} />
                  Filters
                </button>

                {/* Per-page */}
                <div className="hidden sm:flex items-center gap-1.5 text-sm text-muted-foreground">
                  <span>Show</span>
                  {([9, 12, 18, 24] as PerPage[]).map((n, i) => (
                    <span key={n} className="flex items-center">
                      <button
                        onClick={() => setPerPage(n)}
                        className={`px-0.5 ${perPage === n ? "text-foreground font-semibold" : "hover:text-foreground"}`}
                      >
                        {n}
                      </button>
                      {i < 3 && <span className="text-border ml-1.5">|</span>}
                    </span>
                  ))}
                </div>

                {/* Grid toggle */}
                <div className="hidden sm:flex items-center gap-1">
                  <button
                    onClick={() => setGridCols(3)}
                    className={`p-1.5 rounded transition-colors ${gridCols === 3 ? "text-foreground" : "text-muted-foreground hover:text-foreground"}`}
                    aria-label="Grid view 3"
                  >
                    <Grid3X3 size={18} />
                  </button>
                  <button
                    onClick={() => setGridCols(4)}
                    className={`p-1.5 rounded transition-colors ${gridCols === 4 ? "text-foreground" : "text-muted-foreground hover:text-foreground"}`}
                    aria-label="Grid view 4"
                  >
                    <LayoutGrid size={18} />
                  </button>
                </div>

                {/* Sort */}
                <select
                  value={sort}
                  onChange={(e) => setSort(e.target.value as SortOption)}
                  className="border border-border rounded px-3 py-2 text-sm bg-background text-foreground focus:outline-none"
                >
                  <option value="default">Default sorting</option>
                  <option value="popularity">Sort by popularity</option>
                  <option value="rating">Sort by average rating</option>
                  <option value="date">Sort by latest</option>
                  <option value="price-low">Sort by price: low to high</option>
                  <option value="price-high">Sort by price: high to low</option>
                </select>
              </div>
            </div>

            {/* Active filters chips */}
            {hasActiveFilters && (
              <div className="flex flex-wrap items-center gap-2 mb-5">
                {selectedSubcats.map((s) => (
                  <button key={s} onClick={() => toggleFilter(selectedSubcats, s, setSelectedSubcats)}
                    className="flex items-center gap-1.5 bg-secondary text-foreground text-xs font-medium px-3 py-1.5 rounded-sm hover:bg-muted transition-colors">
                    {s} <X size={12} />
                  </button>
                ))}
                {selectedBrands.map((b) => (
                  <button key={b} onClick={() => toggleFilter(selectedBrands, b, setSelectedBrands)}
                    className="flex items-center gap-1.5 bg-secondary text-foreground text-xs font-medium px-3 py-1.5 rounded-sm hover:bg-muted transition-colors">
                    {b} <X size={12} />
                  </button>
                ))}
                {selectedColors.map((c) => (
                  <button key={c} onClick={() => toggleFilter(selectedColors, c, setSelectedColors)}
                    className="flex items-center gap-1.5 bg-secondary text-foreground text-xs font-medium px-3 py-1.5 rounded-sm hover:bg-muted transition-colors">
                    <span className="w-3 h-3 rounded-full border border-border" style={{ backgroundColor: COLOR_HEX[c] || "#ccc" }} />
                    {c} <X size={12} />
                  </button>
                ))}
                {priceRange[1] < maxPrice && (
                  <button onClick={() => setPriceRange([0, maxPrice])}
                    className="flex items-center gap-1.5 bg-secondary text-foreground text-xs font-medium px-3 py-1.5 rounded-sm hover:bg-muted transition-colors">
                    Under ${priceRange[1].toLocaleString()} <X size={12} />
                  </button>
                )}
                <button onClick={clearAllFilters} className="text-xs text-muted-foreground hover:text-foreground ml-1 underline">
                  Clear all
                </button>
              </div>
            )}

            {/* Results count */}
            <p className="text-sm text-muted-foreground mb-4">
              Showing {Math.min((currentPage - 1) * perPage + 1, filteredProducts.length)}–{Math.min(currentPage * perPage, filteredProducts.length)} of {filteredProducts.length} results
            </p>

            {/* Products Grid */}
            {paginatedProducts.length > 0 ? (
              <div className={`grid gap-5 ${
                gridCols === 3
                  ? "grid-cols-1 sm:grid-cols-2 md:grid-cols-3"
                  : "grid-cols-2 sm:grid-cols-3 md:grid-cols-4"
              }`}>
                {paginatedProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    name={product.name}
                    category={product.subcategory}
                    price={product.price}
                    oldPrice={product.oldPrice}
                    rating={product.rating}
                    badge={product.badge}
                    image={product.image}
                    hoverImage={product.hoverImage}
                    colors={product.colors}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="text-lg text-muted-foreground">No products found matching your filters.</p>
                <button onClick={clearAllFilters} className="mt-4 text-primary hover:underline font-medium">
                  Clear all filters
                </button>
              </div>
            )}

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex items-center justify-center gap-2 mt-8">
                <button
                  onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                  disabled={currentPage === 1}
                  className="px-3 py-2 text-sm border border-border rounded hover:bg-secondary disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                >
                  ←
                </button>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`w-10 h-10 text-sm rounded transition-colors ${
                      page === currentPage
                        ? "bg-foreground text-background font-semibold"
                        : "border border-border hover:bg-secondary text-foreground"
                    }`}
                  >
                    {page}
                  </button>
                ))}
                <button
                  onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                  disabled={currentPage === totalPages}
                  className="px-3 py-2 text-sm border border-border rounded hover:bg-secondary disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                >
                  →
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
