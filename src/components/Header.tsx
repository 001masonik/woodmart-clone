import { FC } from "react";
import { Search, User, Heart, ShoppingCart, LayoutGrid } from "lucide-react";

const Header: FC = () => (
  <header className="border-b border-border bg-background sticky top-0 z-50">
    <div className="container flex items-center gap-4 py-3">
      {/* Logo */}
      <a href="#" className="flex items-center gap-2 shrink-0">
        <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
          <span className="text-primary-foreground font-bold text-sm">E</span>
        </div>
        <span className="text-xl font-bold text-foreground hidden sm:block">ElectroMart</span>
      </a>

      {/* Categories button */}
      <button className="hidden lg:flex items-center gap-2 bg-foreground text-background px-4 py-2.5 rounded-lg text-sm font-medium shrink-0">
        <LayoutGrid size={16} />
        Categories
      </button>

      {/* Search */}
      <div className="flex-1 relative">
        <input
          type="text"
          placeholder="Search for products"
          className="w-full border border-border rounded-lg py-2.5 px-4 pr-10 text-sm bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
        />
        <button className="absolute right-1 top-1/2 -translate-y-1/2 bg-primary text-primary-foreground p-2 rounded-md hover:opacity-90 transition-opacity">
          <Search size={16} />
        </button>
      </div>

      {/* Discounts link */}
      <a href="#" className="hidden xl:flex items-center text-sm font-medium border border-border rounded-lg px-4 py-2.5 hover:border-primary hover:text-primary transition-colors shrink-0">
        Discounts
      </a>

      {/* Icons */}
      <div className="flex items-center gap-1">
        <button className="p-2.5 hover:bg-secondary rounded-lg transition-colors">
          <User size={20} className="text-foreground" />
        </button>
        <button className="p-2.5 hover:bg-secondary rounded-lg transition-colors relative hidden sm:block">
          <Heart size={20} className="text-foreground" />
          <span className="absolute -top-0.5 -right-0.5 bg-primary text-primary-foreground text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-medium">0</span>
        </button>
        <button className="p-2.5 hover:bg-secondary rounded-lg transition-colors relative">
          <ShoppingCart size={20} className="text-foreground" />
          <span className="absolute -top-0.5 -right-0.5 bg-primary text-primary-foreground text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-medium">0</span>
        </button>
      </div>
    </div>
  </header>
);

export default Header;
