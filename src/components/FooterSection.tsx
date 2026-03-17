import { FC } from "react";
import { Truck, RotateCcw, Headphones, CreditCard, Facebook, Twitter, Instagram, Youtube, Mail } from "lucide-react";

const features = [
  { icon: Truck, title: "Free Shipping", desc: "For orders over $1,200" },
  { icon: RotateCcw, title: "90 Days Return", desc: "If goods have problems" },
  { icon: Headphones, title: "24/7 Support", desc: "Dedicated support" },
  { icon: CreditCard, title: "Secure Payment", desc: "100% secure payment" },
];

const footerLinks = {
  "About Us": ["About ElectroMart", "Careers", "Press Releases", "Investor Relations", "Corporate Social Responsibility"],
  "Customer Service": ["Help Center", "Returns & Exchanges", "Shipping Info", "Order Tracking", "Contact Us"],
  "My Account": ["My Orders", "Wishlist", "Compare Products", "Address Book", "Account Settings"],
  "Information": ["Privacy Policy", "Terms & Conditions", "Cookie Policy", "Sitemap", "Blog"],
};

const FooterSection: FC = () => (
  <footer className="mt-16">
    {/* Features bar */}
    <div className="border-t border-b border-border">
      <div className="container py-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {features.map((f) => (
            <div key={f.title} className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center shrink-0">
                <f.icon size={18} className="text-foreground" />
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">{f.title}</p>
                <p className="text-xs text-muted-foreground">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* Newsletter */}
    <div className="bg-foreground">
      <div className="container py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Mail size={24} className="text-background shrink-0" />
            <div>
              <p className="text-sm font-semibold text-background">Subscribe to our newsletter</p>
              <p className="text-xs text-background/60">Get updates on new products and promotions</p>
            </div>
          </div>
          <div className="flex w-full md:w-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 md:w-80 px-4 py-2.5 rounded-l-lg text-sm bg-background/10 border border-background/20 text-background placeholder:text-background/40 focus:outline-none focus:bg-background/15"
            />
            <button className="bg-primary text-primary-foreground px-6 py-2.5 rounded-r-lg text-sm font-medium hover:bg-primary/90 transition-colors shrink-0">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>

    {/* Links */}
    <div className="bg-secondary/50">
      <div className="container py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-sm font-bold text-foreground mb-4">{title}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* SEO Text */}
        <div className="mt-10 pt-8 border-t border-border">
          <h3 className="text-base font-bold text-foreground mb-2">Online store of household appliances and electronics</h3>
          <p className="text-xs text-muted-foreground leading-relaxed max-w-4xl">
            Your trusted destination for the latest electronics, smart devices, and home appliances. We offer competitive prices,
            fast shipping, and excellent customer service. Browse our wide selection of smartphones, laptops, gaming gear, and more.
            From product comparisons to customer reviews, we provide all the information you need to make informed decisions.
          </p>
        </div>
      </div>
    </div>

    {/* Bottom bar */}
    <div className="border-t border-border bg-background">
      <div className="container py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 bg-primary rounded-md flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-xs">E</span>
          </div>
          <span className="text-sm font-semibold text-foreground">ElectroMart</span>
          <span className="text-xs text-muted-foreground ml-2">© 2026 All rights reserved.</span>
        </div>
        <div className="flex items-center gap-3">
          <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Facebook size={16} /></a>
          <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Twitter size={16} /></a>
          <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Instagram size={16} /></a>
          <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Youtube size={16} /></a>
        </div>
        <div className="flex items-center gap-2 text-[10px] text-muted-foreground font-medium">
          <span className="bg-secondary px-2 py-1 rounded">VISA</span>
          <span className="bg-secondary px-2 py-1 rounded">MC</span>
          <span className="bg-secondary px-2 py-1 rounded">AMEX</span>
          <span className="bg-secondary px-2 py-1 rounded">PAYPAL</span>
        </div>
      </div>
    </div>
  </footer>
);

export default FooterSection;
