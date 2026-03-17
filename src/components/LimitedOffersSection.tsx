import { FC } from "react";
import { Star } from "lucide-react";

const sideProducts = [
  { name: "Baseus Privity Ring Bracket", price: "$12.00", rating: 5 },
  { name: "Belkin Blue Light UltraGlass 2", price: "$44.99", rating: 5 },
  { name: "Nokia G60 5G", price: "$378.00", rating: 5 },
  { name: "OtterBox Figura Series Case", price: "$49.95", rating: 5 },
  { name: "SanDisk MAX ENDURANCE", price: "$32.00", rating: 5 },
];

const LimitedOffersSection: FC = () => (
  <section className="container mt-12">
    <div className="mb-4">
      <h2 className="text-2xl font-bold text-foreground">Limited Offers!</h2>
      <p className="text-sm text-muted-foreground mt-1">Hurry up to buy these products with discount.</p>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-4">
      {/* Main banner */}
      <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl p-8 md:p-12 flex flex-col items-center justify-center text-center min-h-[300px]">
        <p className="text-xs text-muted-foreground mb-1">Mi Cordless Screwdriver</p>
        <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">AirPods Pro 3</h3>
        <a href="#" className="inline-flex items-center bg-foreground text-background px-6 py-3 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity">
          Shop Now
        </a>
        {/* Countdown */}
        <div className="flex items-center gap-2 mt-6 bg-countdown text-primary-foreground text-xs font-bold px-4 py-2 rounded-full">
          <span>289d</span>:<span>09h</span>:<span>18m</span>:<span>19s</span>
        </div>
      </div>

      {/* Side products list */}
      <div className="bg-background border border-border rounded-xl p-4 space-y-3">
        {sideProducts.map((product) => (
          <a key={product.name} href="#" className="flex items-center gap-3 p-2 rounded-lg hover:bg-secondary transition-colors">
            <div className="w-14 h-14 bg-hero-bg rounded-lg shrink-0 flex items-center justify-center">
              <span className="text-lg">📦</span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-foreground truncate">{product.name}</p>
              <div className="flex items-center gap-0.5 mt-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={10} className={i < product.rating ? "fill-star text-star" : "text-muted"} />
                ))}
              </div>
              <p className="text-sm font-bold text-price mt-0.5">{product.price}</p>
            </div>
          </a>
        ))}
        <div className="pt-2 border-t border-border">
          <p className="text-[10px] text-muted-foreground">*Number of products is limited!</p>
          <p className="text-[10px] text-muted-foreground">**Promotional products cannot be combined with promotional codes.</p>
        </div>
      </div>
    </div>
  </section>
);

export default LimitedOffersSection;
