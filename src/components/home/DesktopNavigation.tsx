
'use client';

import { useEffect, useState } from "react";
import Button from "@/components/buttons/Button";
import { MenuIcon, Sparkles } from "lucide-react";

const DesktopNavigation = ({ scroll }: { scroll?: boolean }) => {
  const [isScrolled, setIsScrolled] = useState(scroll || false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", active: true },
    { name: "Services", active: false },
    { name: "Portfolio", active: false },
    { name: "About", active: false },
    { name: "Contact", active: false },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${isScrolled
        ? "translate-y-0 opacity-100 glass bg-black/70"
        : "-translate-y-full opacity-0"
        }`}
    >
      <div className="container mx-auto md:px-6 md:py-4 px-2 py-2">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center md:gap-2 gap-1 text-white">
            <Sparkles />
            <div>
              <h1 className="text-2xl font-bold text-gradient ">emaginationInc</h1>
              <p className="md:text-xs text-[11px] text-muted-foreground">Where magic is re-imagined</p>
            </div>
          </div>
          {/* Navigation */}
          <nav className="hidden  md:flex items-center gap-8">
            {navItems.map((item) => (
              <Button
                key={item.name}
                variant="ghost"
                className={`text-sm font-medium ${item.active
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
                  }`}
              >
                {item.name}
              </Button>
            ))}
          </nav>
          <MenuIcon className="md:hidden block text-white" />

          {/* CTA Button */}
          <Button variant="primary" className="hidden md:block">
            Plan Your Event
          </Button>
        </div>
      </div>
    </header>
  );
};

export default DesktopNavigation;