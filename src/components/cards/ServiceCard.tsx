import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon; // Lucide icon component
  gradient: string; // Tailwind gradient (e.g., "from-purple-500 to-pink-500")
  title: string;
  description: string;
  features: string[];
  onLearnMore?: () => void;
}

export function ServiceCard({
  icon: Icon,
  gradient,
  title,
  description,
  features,
  onLearnMore,
}: ServiceCardProps) {
  return (
    <div className={`md:min-w-[250px] h-full min-w-[200px] p-2 rounded-2xl overflow-hidden shadow-lg bg-gradient-to-br ${gradient}`}>
      <div className="text-center mb-4">
        <div
          className={`w-10 md:w-12 md:h-16 h-10 mx-auto mb-4 rounded-full bg-gradient-to-r ${gradient} flex items-center justify-center`}
        >
          <Icon className="md:h-8 md:w-8 w-5 h-5 text-white" />
        </div>
        <h3 className="md:text-xl text-md font-semibold text-white mb-2">{title}</h3>
        <p className="text-white/70 md:text-sm text-xs md:text-center text-start md:mb-4 mb-2">{description}</p>
      </div>

      <div className="text-center">
        <ul className="space-y-2 mb-4 ">
          {features.map((feature, featureIndex) => (
            <li
              key={featureIndex}
              className="flex items-center text-sm text-gray-300"
            >
              <CheckCircle className="h-4 w-4 text-emerald-400 mr-2" />
              {feature}
            </li>
          ))}
        </ul>

        <Button
          variant="gold"
          className="w-fit text-center md:mt-4 mt-2 text-gray-300  text-sm py-2 px-4 rounded"
          onClick={onLearnMore}
        >
          Learn More
          <ArrowRight className="ml-2 h-4 w-4 inline" />
        </Button>
      </div>
    </div>
  );
}
