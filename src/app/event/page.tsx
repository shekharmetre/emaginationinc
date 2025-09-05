import { Calendar, Camera, Mic, Music, Palette, Utensils } from "lucide-react";

const categories = [
  { name: "Photographers", icon: Camera, color: "text-red-500", count: "250+" },
  { name: "Event Planners", icon: Calendar, color: "text-primary", count: "180+" },
  { name: "DJs", icon: Mic, color: "text-purple-500", count: "120+" },
  { name: "Caterers", icon: Utensils, color: "text-green-500", count: "300+" },
  { name: "Decorators", icon: Palette, color: "text-blue-500", count: "90+" },
  { name: "Musicians", icon: Music, color: "text-indigo-500", count: "150+" },
];

export default function EventPlanner() {
  return (
    <div>
      event mode
    </div>
  )
}