
import Button from "@/components/buttons/Button";
import { Sparkles } from "lucide-react";

const DesktopNavigation = () => {
  const navItems = [
    { name: "Home", active: true },
    { name: "Services", active: false },
    { name: "Portfolio", active: false },
    { name: "About", active: false },
    { name: "Contact", active: false },
  ];

  return (
    <header className="hidden md:block fixed top-0 left-0 right-0 z-50 glass">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="magical-glow">
              <Sparkles className="h-8 w-8 text-primary" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gradient">MagicEvents</h1>
              <p className="text-xs text-muted-foreground">Where magic is re-imagined</p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex items-center gap-8">
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

          {/* CTA Button */}
          <Button variant="primary">
            Plan Your Event
          </Button>
        </div>
      </div>
    </header>
  );
};

export default DesktopNavigation;