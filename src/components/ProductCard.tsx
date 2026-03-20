import { FC } from "react";
import { Star, Heart, Eye, ArrowLeftRight, ShoppingCart } from "lucide-react";

interface ProductCardProps {
  name: string;
  category: string;
  price: string;
  oldPrice?: string;
  rating: number;
  badge?: "hot" | "sale" | null;
  image?: string;
  hoverImage?: string;
  colors?: string[];
}

const COLOR_HEX: Record<string, string> = {
  Black: "#000000", White: "#ffffff", Gray: "#808080", Blue: "#3b82f6",
  Green: "#22c55e", Pink: "#ec4899", Yellow: "#eab308", Red: "#ef4444",
  Purple: "#a855f7", Bronze: "#cd7f32", Gold: "#ffd700", Starlight: "#f5f0e8",
  Orchid: "#da70d6",
};

const ProductCard: FC<ProductCardProps> = ({ name, category, price, oldPrice, rating, badge, image, hoverImage, colors }) => (
  <div className="group bg-background border border-border rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300">
    {/* Image */}
    <div className="relative aspect-[270/309] bg-hero-bg flex items-center justify-center overflow-hidden">
      {image && image !== "/placeholder.svg" ? (
        <>
          <img src={image} alt={name} className={`w-full h-full object-cover transition-opacity duration-300 ${hoverImage ? "group-hover:opacity-0" : "group-hover:scale-105 transition-transform duration-500"}`} />
          {hoverImage && (
            <img src={hoverImage} alt={name} className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          )}
        </>
      ) : (
        <div className="w-full h-full bg-gradient-to-br from-secondary to-muted flex items-center justify-center">
          <span className="text-4xl opacity-30">📦</span>
        </div>
      )}
      {badge && (
        <span className={`absolute top-3 left-3 text-[10px] font-bold uppercase px-2 py-1 rounded-md text-primary-foreground ${
          badge === "hot" ? "bg-badge-hot" : "bg-badge-sale"
        }`}>
          {badge}
        </span>
      )}
      {/* Hover actions */}
      <div className="absolute top-3 right-3 flex flex-col gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
        <button className="bg-background p-1.5 rounded-md shadow-md hover:bg-primary hover:text-primary-foreground transition-colors" title="Add to wishlist">
          <Heart size={14} />
        </button>
        <button className="bg-background p-1.5 rounded-md shadow-md hover:bg-primary hover:text-primary-foreground transition-colors" title="Quick view">
          <Eye size={14} />
        </button>
        <button className="bg-background p-1.5 rounded-md shadow-md hover:bg-primary hover:text-primary-foreground transition-colors" title="Compare">
          <ArrowLeftRight size={14} />
        </button>
      </div>
      {/* Add to cart button */}
      <div className="absolute bottom-0 left-0 right-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
        <button className="w-full bg-primary text-primary-foreground py-2 text-xs font-medium flex items-center justify-center gap-1.5 hover:bg-primary/90 transition-colors">
          <ShoppingCart size={12} />
          Add to Cart
        </button>
      </div>
    </div>
    <div className="p-3">
      <p className="text-[11px] text-muted-foreground mb-1">{category}</p>
      <div className="flex items-center gap-0.5 mb-1">
        {[...Array(5)].map((_, i) => (
          <Star key={i} size={10} className={i < rating ? "fill-star text-star" : "text-muted"} />
        ))}
        <span className="text-[10px] text-muted-foreground ml-1">{rating}.0</span>
      </div>
      <h4 className="text-sm font-medium text-foreground line-clamp-2 mb-2 min-h-[2.5rem]">{name}</h4>
      <div className="flex items-center gap-2">
        <p className="text-sm font-bold text-price">{price}</p>
        {oldPrice && (
          <p className="text-xs text-muted-foreground line-through">{oldPrice}</p>
        )}
      </div>
      {colors && colors.length > 0 && (
        <div className="flex items-center gap-1 mt-2">
          {colors.map((c) => (
            <span
              key={c}
              className="w-4 h-4 rounded-full border border-border"
              style={{ backgroundColor: COLOR_HEX[c] || "#ccc" }}
              title={c}
            />
          ))}
        </div>
      )}
);

export default ProductCard;
