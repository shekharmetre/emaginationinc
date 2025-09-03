import Button from "@/components/buttons/Button";
import { Home, Sparkles, Camera, MessageCircle, Menu } from "lucide-react";
const MobileNavigation = () => {
  const navItems = [
    { icon: Home, label: "Home", active: true },
    { icon: Sparkles, label: "Services", active: false },
    { icon: Camera, label: "Gallery", active: false },
    { icon: MessageCircle, label: "Contact", active: false },
    { icon: Menu, label: "More", active: false },
  ];

  return (
    <div className="bottom-nav md:hidden">
      <div className="flex items-center justify-around py-2 px-4">
        {navItems.map((item, index) => (
          <Button
            key={index}
            variant="ghost"
            size="sm"
            className={`flex flex-col items-center gap-1 p-2 h-auto ${item.active
              ? "text-primary"
              : "text-muted-foreground hover:text-foreground"
              }`}
          >
            <item.icon size={20} />
            <span className="text-xs">{item.label}</span>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default MobileNavigation;