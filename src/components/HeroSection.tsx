import { FC, useState } from "react";
import { ChevronLeft, ChevronRight, Smartphone, Laptop, Cpu, Gamepad2, WashingMachine, Tv, TreePine, Camera, Star } from "lucide-react";
import heroLaptop from "@/assets/hero-laptop.jpg";
import heroPhone from "@/assets/hero-phone.jpg";
import heroVR from "@/assets/hero-vr.jpg";
import hotDealSpeakers from "@/assets/hot-deal-speakers.jpg";

const categories = [
  { name: "Smartphones", icon: Smartphone },
  { name: "Laptops, Tablets & PCs", icon: Laptop },
  { name: "PC Components", icon: Cpu },
  { name: "Gaming", icon: Gamepad2 },
  { name: "Appliances", icon: WashingMachine },
  { name: "TV & Audio", icon: Tv },
  { name: "Home & Outdoor", icon: TreePine },
  { name: "Cameras", icon: Camera },
];

const slides = [
  {
    title: "Meet the new Surface Laptop",
    subtitle: "Gorgeous at every angle",
    tab: "Surface Laptop",
    image: heroLaptop,
  },
  {
    title: "Galaxy Fold7 | Flip7",
    subtitle: "Unlock Ultra capabilities",
    tab: "Galaxy Fold7 | Flip7",
    image: heroPhone,
  },
  {
    title: "Mixed Reality with Meta Quest 3",
    subtitle: "Step into a new dimension",
    tab: "Meta Quest 3",
    image: heroVR,
  },
];

const HeroSection: FC = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const nextSlide = () => setActiveSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section className="container mt-6">
      <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr_300px] gap-4">
        {/* Categories Sidebar */}
        <div className="hidden lg:block bg-background border border-border rounded-xl p-4">
          <nav className="space-y-0.5">
            {categories.map((cat) => (
              <a
                key={cat.name}
                href="#"
                className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-foreground hover:bg-secondary transition-colors"
              >
                <cat.icon size={18} className="text-muted-foreground" />
                {cat.name}
              </a>
            ))}
          </nav>
        </div>

        {/* Hero Slider */}
        <div className="relative rounded-xl overflow-hidden min-h-[380px] md:min-h-[420px]">
          {slides.map((slide, i) => (
            <div
              key={i}
              className={`absolute inset-0 transition-opacity duration-500 ${
                i === activeSlide ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
            >
              <img
                src={slide.image}
                alt={slide.tab}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/30 to-transparent" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-8">
                <h1 className="text-2xl md:text-4xl font-bold text-foreground mb-2 drop-shadow-sm">
                  {slide.title}
                </h1>
                <p className="text-muted-foreground text-base md:text-lg mb-6">
                  {slide.subtitle}
                </p>
                <a
                  href="#"
                  className="inline-flex items-center bg-foreground text-background px-6 py-3 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity"
                >
                  Buy Now
                </a>
              </div>
            </div>
          ))}

          <button
            onClick={prevSlide}
            className="absolute left-3 top-1/2 -translate-y-1/2 z-20 bg-background/80 hover:bg-background p-2 rounded-full shadow-sm transition-colors"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-3 top-1/2 -translate-y-1/2 z-20 bg-background/80 hover:bg-background p-2 rounded-full shadow-sm transition-colors"
          >
            <ChevronRight size={20} />
          </button>

          {/* Tabs */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-4 z-20">
            {slides.map((slide, i) => (
              <button
                key={i}
                onClick={() => setActiveSlide(i)}
                className={`text-xs font-medium pb-1 border-b-2 transition-colors ${
                  i === activeSlide
                    ? "border-foreground text-foreground"
                    : "border-transparent text-muted-foreground hover:text-foreground"
                }`}
              >
                {slide.tab}
              </button>
            ))}
          </div>
        </div>

        {/* Hot Deals Sidebar */}
        <div className="hidden lg:flex flex-col bg-background border border-border rounded-xl overflow-hidden">
          <div className="flex items-center justify-between px-4 pt-4 pb-2">
            <div className="flex items-center gap-2">
              <span className="text-lg">🔥</span>
              <h3 className="font-bold text-foreground">Hot Deals</h3>
            </div>
            <div className="flex items-center gap-1 bg-countdown text-primary-foreground text-[10px] font-bold px-2.5 py-1 rounded-full">
              <span>289d</span><span>:</span><span>09h</span><span>:</span><span>18m</span>
            </div>
          </div>

          <div className="flex-1 mx-3 rounded-lg overflow-hidden relative">
            <img src={hotDealSpeakers} alt="Hot deal speakers" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent flex flex-col items-center justify-end pb-6">
              <p className="text-xs text-muted-foreground mb-1">Audioengine A2+BT</p>
              <p className="font-bold text-foreground text-sm">Only today, 25% discount</p>
              <a href="#" className="inline-block mt-3 text-xs font-medium border border-foreground text-foreground px-4 py-2 rounded-lg hover:bg-foreground hover:text-background transition-colors bg-background/50 backdrop-blur-sm">
                Buy Now
              </a>
            </div>
          </div>

          <div className="p-4">
            <p className="text-sm font-medium text-foreground">Audioengine A2+BT</p>
            <div className="flex items-center gap-1 mt-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={12} className="fill-star text-star" />
              ))}
            </div>
            <p className="text-sm font-bold text-price mt-1">$300.00</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
