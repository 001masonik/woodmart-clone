import { FC, useState, useEffect } from "react";
import { Star } from "lucide-react";
import limitedAirpods from "@/assets/limited-airpods.jpg";

const sideProducts = [
  { name: "Baseus Privity Ring Bracket", price: "$12.00", rating: 5 },
  { name: "Belkin Blue Light UltraGlass 2", price: "$44.99", rating: 5 },
  { name: "Nokia G60 5G", price: "$378.00", rating: 5 },
  { name: "OtterBox Figura Series Case", price: "$49.95", rating: 5 },
  { name: "Poco Honor X9b", price: "$350.00", rating: 5 },
  { name: "SanDisk MAX ENDURANCE", price: "$32.00", rating: 5 },
];

const LimitedOffersSection: FC = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 289, hours: 9, mins: 18, secs: 19 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { days, hours, mins, secs } = prev;
        secs--;
        if (secs < 0) { secs = 59; mins--; }
        if (mins < 0) { mins = 59; hours--; }
        if (hours < 0) { hours = 23; days--; }
        if (days < 0) return prev;
        return { days, hours, mins, secs };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="container mt-12">
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 mb-6">
        <div>
          <h2 className="text-2xl font-bold text-foreground">Limited Offers!</h2>
          <p className="text-sm text-muted-foreground mt-1">Hurry up to buy these products with discount.</p>
        </div>
        <div className="flex items-center gap-2 bg-countdown text-primary-foreground text-xs font-bold px-4 py-2 rounded-full sm:ml-auto">
          <span>{timeLeft.days}d</span>:<span>{String(timeLeft.hours).padStart(2, "0")}h</span>:<span>{String(timeLeft.mins).padStart(2, "0")}m</span>:<span>{String(timeLeft.secs).padStart(2, "0")}s</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-4">
        {/* Main banner */}
        <div className="relative rounded-xl overflow-hidden min-h-[350px]">
          <img src={limitedAirpods} alt="AirPods Pro 3" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-transparent flex flex-col items-start justify-center pl-8 md:pl-12">
            <p className="text-xs text-muted-foreground mb-1 uppercase tracking-wider">Mi Cordless Screwdriver</p>
            <h3 className="text-3xl md:text-5xl font-bold text-foreground mb-6">AirPods Pro 3</h3>
            <a href="#" className="inline-flex items-center bg-foreground text-background px-6 py-3 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity">
              Shop Now
            </a>
          </div>
        </div>

        {/* Side products list */}
        <div className="bg-background border border-border rounded-xl p-4">
          <div className="space-y-2">
            {sideProducts.map((product) => (
              <a key={product.name} href="#" className="flex items-center gap-3 p-2 rounded-lg hover:bg-secondary transition-colors">
                <div className="w-14 h-14 bg-hero-bg rounded-lg shrink-0 flex items-center justify-center">
                  <span className="text-lg opacity-50">📦</span>
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
          </div>
          <div className="pt-3 mt-3 border-t border-border">
            <p className="text-[10px] text-muted-foreground">*Number of products is limited!</p>
            <p className="text-[10px] text-muted-foreground">**Promotional products cannot be combined with promotional codes.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LimitedOffersSection;
