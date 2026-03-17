import { FC } from "react";
import { Headphones, Monitor, Wifi } from "lucide-react";

const banners = [
  {
    icon: Headphones,
    title: "Premium Sound",
    subtitle: "High-quality headphones and speakers",
    cta: "Shop Audio",
    gradient: "from-primary/15 to-primary/5",
  },
  {
    icon: Monitor,
    title: "4K Displays",
    subtitle: "Crystal clear monitors for work & play",
    cta: "Shop Monitors",
    gradient: "from-secondary to-muted",
  },
  {
    icon: Wifi,
    title: "Smart Home",
    subtitle: "Connect and automate your home",
    cta: "Shop Smart",
    gradient: "from-primary/10 to-secondary",
  },
];

const PromoBanners: FC = () => (
  <section className="container mt-12">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {banners.map((banner) => (
        <div
          key={banner.title}
          className={`bg-gradient-to-br ${banner.gradient} rounded-xl p-6 flex flex-col items-start justify-between min-h-[180px] hover:shadow-md transition-shadow`}
        >
          <banner.icon size={28} className="text-primary mb-3" />
          <div>
            <h3 className="text-lg font-bold text-foreground">{banner.title}</h3>
            <p className="text-sm text-muted-foreground mt-1">{banner.subtitle}</p>
          </div>
          <a href="#" className="mt-4 text-sm font-medium text-primary hover:underline">
            {banner.cta} →
          </a>
        </div>
      ))}
    </div>
  </section>
);

export default PromoBanners;
