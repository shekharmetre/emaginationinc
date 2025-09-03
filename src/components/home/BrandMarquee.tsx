import { Sparkles } from "lucide-react";

const brands = [
  "Peter England",
  "Chivas",
  "Google",
  "Jio",
  "A.R. Rahman",
  "TATA",
  "Mahindra",
  "Accenture",
];

const BrandMarquee = () => {
  const marqueeBrands = [...brands, ...brands]; // Duplicate for a seamless loop

  return (
    <section className="py-12 bg-black/20">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl font-semibold text-muted-foreground mb-8">
          Trusted by World-Class Brands
        </h2>
        <div className="relative w-full overflow-hidden">
          <div className="flex animate-marquee-slow">
            {marqueeBrands.map((brand, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-48 mx-6 flex items-center justify-center gap-2"
              >
                <Sparkles className="h-6 w-6 text-amber-400" />
                <span className="text-2xl font-bold text-gray-400">{brand}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandMarquee;

