// components/BadgeTag.tsx
// import { cn } from "@/lib/utils"; // optional utility if you use shadcn
import { icons, LucideIcon } from "lucide-react"

interface BadgeTagProps {
  icon: LucideIcon | null;
  text: string;
  className?: string;
}

export default function BadgeTag({ icon: Icon, text, className = "inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full glass md:mb-6 mb-3" }: BadgeTagProps) {
  return (
    <div
      className={className}
    >
      {Icon && <Icon className="h-4 w-4 text-white" />}
      <span className="md:text-lg text-xs font-medium text-white/60">
        {text}
      </span>
    </div>
  );
}


