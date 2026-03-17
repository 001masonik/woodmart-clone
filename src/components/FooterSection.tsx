import { FC } from "react";

const FooterSection: FC = () => (
  <footer className="container mt-12 mb-12">
    <div className="bg-secondary rounded-xl p-6 md:p-8">
      <h3 className="text-lg font-bold text-foreground mb-2">Online store of household appliances and electronics</h3>
      <p className="text-sm text-muted-foreground leading-relaxed max-w-3xl">
        Your trusted destination for the latest electronics, smart devices, and home appliances. We offer competitive prices,
        fast shipping, and excellent customer service. Browse our wide selection of smartphones, laptops, gaming gear, and more.
      </p>
      <div className="mt-6 pt-6 border-t border-border">
        <h4 className="text-lg font-bold text-foreground mb-2">Online shopping that really is convenient</h4>
        <p className="text-sm text-muted-foreground leading-relaxed max-w-3xl">
          With our streamlined shopping experience, finding and purchasing the perfect tech products has never been easier.
          From product comparisons to customer reviews, we provide all the information you need to make informed decisions.
        </p>
      </div>
    </div>
    <div className="text-center mt-8 text-xs text-muted-foreground">
      © 2026 ElectroMart. All rights reserved. Built as a demo project.
    </div>
  </footer>
);

export default FooterSection;
