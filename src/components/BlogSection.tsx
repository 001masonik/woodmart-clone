import { FC } from "react";
import { ChevronRight } from "lucide-react";
import blogMacbook from "@/assets/blog-macbook.jpg";
import blogPs5 from "@/assets/blog-ps5.jpg";
import blogVacuum from "@/assets/blog-vacuum.jpg";
import blogAirtag from "@/assets/blog-airtag.jpg";

const articles = [
  {
    title: "Review of the new MacBook Pro on the powerful M3 chip series",
    category: "Reviews",
    date: "Jan 13, 2026",
    day: "17",
    month: "Jul",
    image: blogMacbook,
  },
  {
    title: "What's New in PlayStation 5 Slim and Release Date",
    category: "Novelty",
    date: "Nov 5, 2025",
    day: "10",
    month: "Jul",
    image: blogPs5,
  },
  {
    title: "Top 5 Most Powerful Vertical Vacuum Cleaners",
    category: "Reviews",
    date: "Nov 5, 2025",
    day: "03",
    month: "Jul",
    image: blogVacuum,
  },
  {
    title: "How Do I Share Apple AirTag With Other Users?",
    category: "Advices",
    date: "Nov 5, 2025",
    day: "27",
    month: "Jun",
    image: blogAirtag,
  },
];

const BlogSection: FC = () => (
  <section className="container mt-12">
    <div className="flex items-center justify-between mb-6">
      <h2 className="text-2xl font-bold text-foreground">Useful Articles</h2>
      <a href="#" className="flex items-center gap-1 text-sm font-medium text-foreground hover:text-primary transition-colors group">
        All Articles <ChevronRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
      </a>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {articles.map((article) => (
        <a key={article.title} href="#" className="group border border-border rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300">
          <div className="aspect-[16/10] bg-hero-bg relative overflow-hidden">
            <img src={article.image} alt={article.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            <div className="absolute top-3 left-3 bg-background rounded-lg px-2.5 py-1.5 text-center shadow-sm">
              <p className="text-sm font-bold text-foreground leading-tight">{article.day}</p>
              <p className="text-[10px] text-muted-foreground uppercase">{article.month}</p>
            </div>
          </div>
          <div className="p-4">
            <span className="inline-block text-[11px] text-primary font-medium bg-primary/10 px-2 py-0.5 rounded-full">{article.category}</span>
            <h4 className="text-sm font-semibold text-foreground mt-2 line-clamp-2 group-hover:text-primary transition-colors">
              {article.title}
            </h4>
            <p className="text-[11px] text-muted-foreground mt-2">{article.date}</p>
          </div>
        </a>
      ))}
    </div>
  </section>
);

export default BlogSection;
