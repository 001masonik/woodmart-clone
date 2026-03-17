import { FC } from "react";
import { ChevronRight } from "lucide-react";

const articles = [
  {
    title: "Review of the new MacBook Pro on the powerful M3 chip series",
    category: "Reviews",
    date: "Jan 13, 2026",
    day: "17",
    month: "Jul",
  },
  {
    title: "What's New in PlayStation 5 Slim and Release Date",
    category: "Novelty",
    date: "Nov 5, 2025",
    day: "10",
    month: "Jul",
  },
  {
    title: "Top 5 Most Powerful Vertical Vacuum Cleaners",
    category: "Reviews",
    date: "Nov 5, 2025",
    day: "03",
    month: "Jul",
  },
  {
    title: "How Do I Share Apple AirTag With Other Users?",
    category: "Advices",
    date: "Nov 5, 2025",
    day: "27",
    month: "Jun",
  },
];

const BlogSection: FC = () => (
  <section className="container mt-12">
    <div className="flex items-center justify-between mb-6">
      <h2 className="text-2xl font-bold text-foreground">Useful Articles</h2>
      <a href="#" className="flex items-center gap-1 text-sm font-medium text-foreground hover:text-primary transition-colors">
        All Articles <ChevronRight size={14} />
      </a>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {articles.map((article) => (
        <a key={article.title} href="#" className="group border border-border rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
          <div className="aspect-[16/10] bg-hero-bg flex items-center justify-center relative">
            <span className="text-4xl text-muted-foreground/30">📰</span>
            <div className="absolute top-3 left-3 bg-background rounded-md px-2 py-1 text-center shadow-sm">
              <p className="text-sm font-bold text-foreground leading-tight">{article.day}</p>
              <p className="text-[10px] text-muted-foreground uppercase">{article.month}</p>
            </div>
          </div>
          <div className="p-4">
            <span className="text-[11px] text-muted-foreground font-medium">{article.category}</span>
            <h4 className="text-sm font-semibold text-foreground mt-1 line-clamp-2 group-hover:text-primary transition-colors">
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
