import { ServiceCard } from "@/components/cards/ServiceCard";
import { ScrollableCardWrapper } from "@/components/ui/scrollable-wrapper";
import { SectionHeader } from "@/components/ui/SectionHeader";
import {
  ArrowRight,
  Building2,
  Heart,
  Sparkles,
  Users
} from "lucide-react";


const services = [
  {
    icon: Heart,
    title: "Weddings",
    description: "Create magical moments that last a lifetime with our bespoke wedding planning services.",
    features: ["Venue Selection", "Decor & Styling", "Catering Coordination", "Photography"],
    gradient: "from-pink-500 to-purple-600"
  },
  {
    icon: Building2,
    title: "Corporate Events",
    description: "Professional events that elevate your brand and create lasting business connections.",
    features: ["Product Launches", "Conferences", "Team Building", "Award Ceremonies"],
    gradient: "from-blue-500 to-purple-600"
  },
  {
    icon: Users,
    title: "Social Celebrations",
    description: "Transform your special occasions into unforgettable experiences for you and your guests.",
    features: ["Birthday Parties", "Anniversaries", "Family Reunions", "Cultural Events"],
    gradient: "from-emerald-500 to-blue-600"
  },
  {
    icon: Sparkles,
    title: "Luxury Experiences",
    description: "Exclusive, high-end events designed to exceed expectations and create magical moments.",
    features: ["VIP Events", "Gala Dinners", "Private Parties", "Destination Events"],
    gradient: "from-amber-500 to-orange-600"
  }
];


const ServicesSection = () => {

  return (
    <section className="py-20 md:px-6 px-2 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="magical-glow absolute top-20 right-10 float-animation opacity-30">
          <Sparkles className="h-12 w-12 text-accent" />
        </div>
        <div className="magical-glow absolute bottom-20 left-10 float-animation opacity-20" style={{ animationDelay: "3s" }}>
          <Sparkles className="h-8 w-8 text-primary" />
        </div>
      </div>

      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <SectionHeader title="Magical experiences for every" highlight="occassions" badgeIcon={Sparkles} titleClassName="text-3xl " badgeText="Our Services" description="From Initionmate gatherings to grand celebrations,we transform your vision into reality with our comprehensive event Management services" />

        <ScrollableCardWrapper className="md:mt-5 mt-2">
          {services.map((item) => (
            <ServiceCard key={item.title} {...item} />
          ))}
        </ScrollableCardWrapper>

        {/* CTA Section */}
        <div className="text-center mt-10">
          <button
            className="cursor-pointer relative inline-flex items-center px-8 py-4 text-lg font-semibold text-white 
               rounded-2xl overflow-hidden group"
          >
            {/* Background Gradient */}
            <span className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 
                     transition-transform duration-500 group-hover:scale-110"></span>

            {/* Glow / Blur Effect */}
            <span className="absolute inset-0 blur-lg bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 
                     opacity-70 group-hover:opacity-100 transition duration-500"></span>

            {/* Button Content */}
            <span className="relative flex items-center gap-2">
              Get Your Custom Quote
              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-2" />
            </span>
          </button>
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;


//  <div key={index} className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700/50 hover:border-purple-500/30 rounded-lg p-6 shadow-lg hover:shadow-purple-500/20 hover:transform hover:-translate-y-2 transition-all duration-300">
//               <div className="text-center mb-4">
//                 <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${service.gradient} flex items-center justify-center`}>
//                   <service.icon className="h-8 w-8 text-white" />
//                 </div>
//                 <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
//                 <p className="text-gray-400 text-sm mb-4">
//                   {service.description}
//                 </p>
//               </div>
//               <div>
//                 <ul className="space-y-2 mb-4">
//                   {service.features.map((feature, featureIndex) => (
//                     <li key={featureIndex} className="flex items-center text-sm text-gray-300">
//                       <CheckCircle className="h-4 w-4 text-emerald-400 mr-2" />
//                       {feature}
//                     </li>
//                   ))}
//                 </ul>
//                 <Button variant="ghost" className="w-full mt-4 text-gray-300 hover:text-purple-400 transition-colors text-sm py-2 px-4 rounded hover:bg-gray-800">
//                   Learn More
//                   <ArrowRight className="ml-2 h-4 w-4 inline" />
//                 </Button>
//               </div>
//             </div>