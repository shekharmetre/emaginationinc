import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Sparkles } from "lucide-react";
export const testimonials = [
  {
    name: 'Sarah & Michael Johnson',
    event: 'Wedding Celebration',
    rating: 5,
    text: 'Brew Magic Events turned our dream wedding into reality. Every detail was perfect, and the magical atmosphere they created was beyond our imagination.',
  },
  {
    name: 'Tech Innovations Corp',
    event: 'Product Launch',
    rating: 5,
    text: 'Professional, creative, and flawlessly executed. Our product launch was a huge success thanks to their innovative event management.',
  },
  {
    name: 'The Rodriguez Family',
    event: '25th Anniversary',
    rating: 5,
    text: 'They captured the essence of our love story and created an evening filled with magic, joy, and unforgettable memories.',
  },
  {
    name: 'Emily Carter',
    event: 'Fantasy Themed Birthday',
    rating: 5,
    text: "An absolutely enchanting experience! The team's creativity is unmatched. They brought my fantasy theme to life in the most magical way.",
  },
  {
    name: 'Global Connect Summit',
    event: 'Annual Conference',
    rating: 5,
    text: 'Impeccable organization and a truly engaging setup. Brew Magic Events handled our large-scale conference with remarkable ease and professionalism.',
  },
  {
    name: 'David Chen',
    event: 'Private Gala',
    rating: 5,
    text: 'The elegance and sophistication of our gala were breathtaking. Their attention to detail and commitment to quality are truly commendable.',
  },
];

export function TestimonialSection() {
  return (
    <>
      <div className="mt-5">
        <SectionHeader titleClassName="md:text-3xl text-3xl text-center" title="Crafting memory that lasts" highlight="Testimonials" badgeIcon={<Sparkles />} badgeText="Our Clients" />
      </div>
      <InfiniteMovingCards items={testimonials} pauseOnHover={true} />
    </>
  )
}