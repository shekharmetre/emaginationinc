import BadgeTag from "@/components/BadgeTag";
import { ReactNode } from "react";
import { ArrowRight, LucideIcon } from "lucide-react";

interface SectionHeaderProps {
  badgeIcon?: LucideIcon | null;
  badgeText?: string;
  title: string;
  highlight?: string;
  description?: string;
  align?: "start" | "center";
  buttonText?: string;
  onButtonClick?: () => void;
  buttonIcon?: ReactNode;
  titleClassName?: string
}

export function SectionHeader({
  badgeIcon,
  title,
  highlight,
  description,
  buttonText,
  onButtonClick,
  titleClassName,
  buttonIcon = <ArrowRight className="ml-2 h-5 w-5 inline" />,
}: SectionHeaderProps) {
  return (
    <div className="md:text-center text-center">
      <BadgeTag icon={badgeIcon || null} text="Our Portfolio" />

      <h2 className={` text-start md:text-center md:text-5xl font-bold mb-6 text-white ${titleClassName ? titleClassName : "text-[2.5rem]"}`}>
        {title}{" "}
        {highlight && (
          <span className="bg-gradient-to-r from-purple-600 to-blue-700 bg-clip-text text-transparent ">
            {highlight}
          </span>
        )}
      </h2>
      <div className="grid justify-start md:justify-center w-full items-center">
        {description && (
          <p className="md:text-xl text-start md:text-center text-md text-gray-300 max-w-3xl mx-auto mb-8">
            {description}
          </p>
        )}

      </div>
      {buttonText && (
        <button
          onClick={onButtonClick}
          className="bg-gradient-to-r from-purple-600 to-blue-700 hover:from-purple-700 hover:to-blue-800 w-fit text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25 hover:scale-105 inline-flex items-center"
        >
          {buttonText}
          {buttonIcon}
        </button>
      )}
    </div>
  );
}
