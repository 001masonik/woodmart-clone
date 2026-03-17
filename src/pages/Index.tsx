import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import BrandBar from "@/components/BrandBar";
import BestsellersSection from "@/components/BestsellersSection";
import PopularSection from "@/components/PopularSection";
import LimitedOffersSection from "@/components/LimitedOffersSection";
import BlogSection from "@/components/BlogSection";
import FooterSection from "@/components/FooterSection";

const applianceProducts = [
  { name: "ARIETE 0979", category: "Ovens", price: "$110.00", rating: 5 },
  { name: "ARIETE 986", category: "Ovens", price: "$150.00", rating: 4 },
  { name: "Bamix DeLuxe M200", category: "Blenders", price: "$230.00", rating: 4 },
  { name: "Bamix Luxurylin M200", category: "Blenders", price: "$605.00", rating: 5 },
  { name: "Bosch KUW20VHF0G", category: "Fridges", price: "$745.00", rating: 4 },
  { name: "Bosch Serie 2 SMS2ITW08G", category: "Dishwashers", price: "$440.00", rating: 5, badge: "hot" as const },
];

const gamingProducts = [
  { name: "Cobra Rally GT900", category: "Wheels", price: "$180.00", rating: 4 },
  { name: "Cyberpunk 2077", category: "PC Games", price: "$60.00", rating: 5 },
  { name: "DualSense", category: "Gamepads", price: "$70.00", rating: 5 },
  { name: "FIFA 22", category: "PC Games", price: "$39.00", rating: 4 },
  { name: "God of War Ragnarok", category: "Console Games", price: "$60.00", rating: 5, badge: "hot" as const },
  { name: "Hogwarts Legacy", category: "Console Games", price: "$69.00", rating: 5 },
];

const Index = () => (
  <div className="min-h-screen bg-background">
    <TopBar />
    <Header />
    <HeroSection />
    <BrandBar />
    <BestsellersSection />
    <PopularSection title="Appliances" products={applianceProducts} />
    <LimitedOffersSection />
    <PopularSection title="Gaming" products={gamingProducts} />
    <BlogSection />
    <FooterSection />
  </div>
);

export default Index;
