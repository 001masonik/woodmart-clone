import { FC } from "react";

const TopBar: FC = () => (
  <div className="bg-topbar border-b border-border">
    <div className="container flex items-center justify-between py-2 text-xs text-topbar-foreground">
      <span className="font-medium tracking-wide uppercase">Free shipping for all orders of $1200+</span>
      <nav className="hidden md:flex items-center gap-4">
        <a href="#" className="hover:text-foreground transition-colors">Blog</a>
        <span className="text-border">|</span>
        <a href="#" className="hover:text-foreground transition-colors">About Us</a>
        <span className="text-border">|</span>
        <a href="#" className="hover:text-foreground transition-colors">Contact Us</a>
        <span className="text-border">|</span>
        <a href="#" className="hover:text-foreground transition-colors">FAQs</a>
      </nav>
    </div>
  </div>
);

export default TopBar;
