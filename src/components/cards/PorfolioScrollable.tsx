import Image from "next/image";
import { Building2, LucideIcon } from "lucide-react";
import ScrollableImageGallery from "@/components/ui/ImageScroll";

interface TagProps {
  text: string;
  bg: string; // e.g., "bg-pink-500/20 text-pink-400"
}

export function PortfolioCard({
  icon: LucideIcon,
  iconColor,
  gradient,
  tag,
  title,
  description,
  date,
  location,
  images
}: any) {
  return (
    <div
      className={`min-w-[250px] rounded-2xl overflow-hidden shadow-lg bg-gradient-to-br ${gradient}`}
    >

      <ScrollableImageGallery images={images} key={title} />
      <div className="md:p-6 p-2">
        <div className="mb-2 text-start ">
          <span className={`${gradient} font-semibold ${iconColor} px-2 py-1 rounded text-xs font-semibold`}>{tag.text}</span>
        </div>
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-400 text-sm mb-4 text-start">{description}.</p>
        <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
          <span>{date}</span>
          <span>{location}</span>
        </div>
        <button className="w-full bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded-lg transition-colors duration-300 text-sm">
          View Details
        </button>
      </div>
    </div>

  );
}
