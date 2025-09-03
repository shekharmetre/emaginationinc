"use client";
import { motion, type Variants } from "framer-motion";
import { Gem, Heart, SquareCheckBig, Star } from "lucide-react";

const services = [
  {
    title: "Creative Expertise",
    description:
      "We offer a variety of services, personalized for your needs, ensuring your event reflects your unique style.",
    icon: Star,
  },
  {
    title: "Stress-Free Planning",
    description:
      "We manage everything from vendor selection and venue coordination to budget and seamless execution.",
    icon: SquareCheckBig,
  },
  {
    title: "Trendsetting Designs",
    description:
      "One-of-a-kind decor that sets the standards. We stay ahead of the curve, incorporating the latest trends.",
    icon: Heart,
  },
  {
    title: "Personalized Service",
    description:
      "Every event deserves a touch of individuality. Let us create a space that is as extraordinary as you are.",
    icon: Gem,
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariant: Variants = {
  hidden: (i: number) => ({
    opacity: 0,
    x: i % 2 === 0 ? -60 : 60,
  }),
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function PopupServices() {
  return (
    <motion.section
      id="popup-show"
      // show only on small screens like you had; keep md:hidden if desired
      className="md:hidden p-1 gap-2 grid grid-cols-2 -mt-4 overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      variants={containerVariants}
    >
      {services.map((item, index) => (
        <motion.div
          key={item.title}
          custom={index}
          variants={cardVariant}
          // avoid layout prop: transforms are GPU accelerated and smooth
          className="p-3 bg-gray-800 rounded-md transform-gpu"
          style={{ willChange: "transform, opacity" }}
        >
          <item.icon color="#f3c5ff" size={35} />
          <span className="text-[#ff6f91] text-xl font-semibold italic block mt-1">
            {item.title}
          </span>
          <p className="text-[11px] text-gray-400 mt-1">{item.description}</p>
        </motion.div>
      ))}
    </motion.section>
  );
}
