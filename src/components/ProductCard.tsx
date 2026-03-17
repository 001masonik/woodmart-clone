import { FC } from "react";
import { Star, Heart, Eye, ArrowLeftRight } from "lucide-react";

interface ProductCardProps {
  name: string;
  category: string;
  price: string;
  rating: number;
  badge?: "hot" | "sale" | null;
}

const ProductCard: FC<ProductCardProps> = ({ name, category, price, rating, badge }) => (
  <div className="group bg-background border border-border rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
    {/* Image placeholder */}
    <div className="relative aspect-[270/309] bg-hero-bg flex items-center justify-center">
      <div className="w-24 h-24 rounded-2xl bg-muted/50 flex items-center justify-center">
        <span className="text-3xl text-muted-foreground/40">📦</span>
      </div>
      {badge && (
        <span className={`absolute top-3 left-3 text-[10px] font-bold uppercase px-2 py-1 rounded-md ${
          badge === "hot" ? "bg-badge-hot text-primary-foreground" : "bg-badge-sale text-primary-foreground"
        }`}>
          {badge}
        </span>
      )}
      {/* Hover actions */}
      <div className="absolute top-3 right-3 flex flex-col gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
        <button className="bg-background p-1.5 rounded-md shadow-sm hover:bg-primary hover:text-primary-foreground transition-colors">
          <Heart size={14} />
        </button>
        <button className="bg-background p-1.5 rounded-md shadow-sm hover:bg-primary hover:text-primary-foreground transition-colors">
          <Eye size={14} />
        </button>
        <button className="bg-background p-1.5 rounded-md shadow-sm hover:bg-primary hover:text-primary-foreground transition-colors">
          <ArrowLeftRight size={14} />
        </button>
      </div>
    </div>
    <div className="p-3">
      <p className="text-[11px] text-muted-foreground mb-1">{category}</p>
      <div className="flex items-center gap-0.5 mb-1">
        {[...Array(5)].map((_, i) => (
          <Star key={i} size={10} className={i < rating ? "fill-star text-star" : "text-muted"} />
        ))}
      </div>
      <h4 className="text-sm font-medium text-foreground line-clamp-2 mb-2">{name}</h4>
      <p className="text-sm font-bold text-price">{price}</p>
    </div>
  </div>
);

export default ProductCard;
