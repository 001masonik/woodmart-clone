import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import BrandBar from "@/components/BrandBar";
import BestsellersSection from "@/components/BestsellersSection";
import PopularSection from "@/components/PopularSection";
import LimitedOffersSection from "@/components/LimitedOffersSection";
import BlogSection from "@/components/BlogSection";
import FooterSection from "@/components/FooterSection";
import PromoBanners from "@/components/PromoBanners";

const applianceProducts = [
  { name: "ARIETE 0979 Pizza Oven", category: "Ovens", price: "$110.00", rating: 5 },
  { name: "ARIETE 986 Vintage Oven", category: "Ovens", price: "$150.00", rating: 4 },
  { name: "Bamix DeLuxe M200", category: "Blenders", price: "$230.00", rating: 4 },
  { name: "Bamix Luxurylin M200", category: "Blenders", price: "$605.00", rating: 5 },
  { name: "Bosch KUW20VHF0G", category: "Fridges", price: "$745.00", rating: 4 },
  { name: "Bosch Serie 2 SMS2ITW08G", category: "Dishwashers", price: "$440.00", rating: 5, badge: "hot" as const },
  { name: "Bosch Serie 2 SMV2ITX18G", category: "Dishwashers", price: "$520.00", rating: 4 },
  { name: "Bosch Serie 4 KSV36VLEP", category: "Fridges", price: "$830.00", rating: 4 },
  { name: "Bosch WAV28K90ME", category: "Washing Machines", price: "$1,200.00", rating: 5 },
  { name: "Bosch WDU28590OE", category: "All in One", price: "$1,200.00", rating: 5 },
  { name: "Bosch MMB6141B Blender", category: "Blenders", price: "$90.00", rating: 4 },
  { name: "Bosch MS64M6170", category: "Blenders", price: "$100.00", rating: 4 },
];

const gamingProducts = [
  { name: "Cobra Rally GT900", category: "Wheels", price: "$180.00", rating: 4 },
  { name: "Cyberpunk 2077", category: "PC Games", price: "$60.00", rating: 5 },
  { name: "DualSense Controller", category: "Gamepads", price: "$70.00", rating: 5 },
  { name: "FIFA 22", category: "PC Games", price: "$39.00", rating: 4 },
  { name: "FIFA 23", category: "Console Games", price: "$69.00", rating: 5 },
  { name: "God of War Ragnarok", category: "Console Games", price: "$60.00", rating: 5, badge: "hot" as const },
  { name: "Hogwarts Legacy", category: "Console Games", price: "$69.00", rating: 5 },
  { name: "Forza Horizon 5", category: "Console Games", price: "$55.00", rating: 4 },
  { name: "Hori Horipad Pro", category: "Gamepads", price: "$60.00", rating: 4 },
  { name: "Horizon Zero Dawn", category: "PC Games", price: "$39.00", rating: 4, badge: "hot" as const },
  { name: "FIFA 23 PC Edition", category: "PC Games", price: "$69.00", rating: 5 },
  { name: "Hogwarts Legacy PC", category: "PC Games", price: "$69.00", rating: 5 },
];

const Index = () => (
  <div className="min-h-screen bg-background">
    <TopBar />
    <Header />
    <HeroSection />
    <BrandBar />
    <BestsellersSection />
    <PopularSection title="Appliances" categorySlug="appliances" products={applianceProducts} />
    <LimitedOffersSection />
    <PopularSection title="Gaming" categorySlug="gaming" products={gamingProducts} />
    <PromoBanners />
    <BlogSection />
    <FooterSection />
  </div>
);

export default Index;
