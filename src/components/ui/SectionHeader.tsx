"use client";

import BadgeTag from "@/components/BadgeTag";
import React, { ReactNode } from "react";
import { ArrowRight, LucideIcon } from "lucide-react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
};

interface SectionHeaderProps {
  badgeIcon?: React.ReactNode | null;
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
  badgeText,
  buttonIcon = <ArrowRight className="ml-2 h-5 w-5 inline" />,
}: SectionHeaderProps) {
  return (
    <motion.div
      className="md:text-center text-center"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}

    >
      <motion.div variants={itemVariants}>
        <BadgeTag icon={Sparkles} text={badgeText ? badgeText : "Our Portfolio"} />
      </motion.div>

      <motion.h2
        variants={itemVariants}
        className={` text-start md:text-center md:text-5xl font-bold mb-6 text-white ${titleClassName ? titleClassName : "text-[2.5rem]"}`}
      >
        {title}
        {highlight && (
          <span className="bg-gradient-to-r from-purple-600 to-blue-700 bg-clip-text text-transparent ">
            {" "}{highlight}
          </span>
        )}
      </motion.h2>
      <motion.div variants={itemVariants} className="grid justify-start md:justify-center w-full items-center">
        {description && (
          <p className="md:text-xl text-start md:text-center text-md text-gray-300 max-w-3xl mx-auto mb-8">
            {description}
          </p>
        )}
      </motion.div>
      {buttonText && (
        <motion.button
          variants={itemVariants}
          onClick={onButtonClick}
          className="bg-gradient-to-r from-purple-600 to-blue-700 hover:from-purple-700 hover:to-blue-800 w-fit text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25 hover:scale-105 inline-flex items-center"
        >
          {buttonText}
          {buttonIcon}
        </motion.button>
      )}
    </motion.div>
  );
}
