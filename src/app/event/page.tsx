import DesktopNavigation from "@/components/home/DesktopNavigation";
import ScrollableImageGallery from "@/components/ui/ImageScroll";

const evnetImges = [
  'https://res.cloudinary.com/dvf6d5bam/image/upload/v1756788543/289495977_738326807210627_5403146746986998821_n_oy6lov.jpg', 'https://res.cloudinary.com/dvf6d5bam/image/upload/v1756788538/322661083_1327598858026594_7318505374480828883_n_jti5vm.jpg',
  'https://res.cloudinary.com/dvf6d5bam/image/upload/v1756788532/322838628_147272731203243_7670000954453369220_n_voyoqx.jpg', 'https://res.cloudinary.com/dvf6d5bam/image/upload/v1756788521/A_grand_affair_-_P_R_wedding._Our_beautiful_couple_Prathima_and_Raj_living_in_the_US_wanted_to_g_2_e0ynhq.jpg', 'https://res.cloudinary.com/dvf6d5bam/image/upload/v1756788512/comealive_y3rkn6.jpg'
]

interface Category {
  name: string;
  icon: string;
  color: string;
  count: string;
}


const categories: Category[] = [
  { name: "Photographers", icon: "Camera", color: "text-red-500", count: "250+" },
  { name: "Event Planners", icon: "Calendar", color: "text-primary", count: "180+" },
  { name: "DJs", icon: "Mic", color: "text-purple-500", count: "120+" },
  { name: "Caterers", icon: "Utensils", color: "text-green-500", count: "300+" },
  { name: "Decorators", icon: "Palette", color: "text-blue-500", count: "90+" },
  { name: "Musicians", icon: "Music", color: "text-indigo-500", count: "150+" },
];

export default function EventPlanner() {
  return (
    <div>
      <DesktopNavigation scroll={true} />
      <ScrollableImageGallery imageClassName="rounded-none" className="mt-20" images={evnetImges} />
    </div>
  )
}
