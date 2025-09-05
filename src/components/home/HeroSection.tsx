"use client";

import BadgeTag from "@/components/BadgeTag";
import Button from "@/components/buttons/Button";
import { motion, Variants } from "framer-motion";
import { ArrowRight, Play, Sparkles } from "lucide-react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (custom = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: custom * 0.2,
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center md:justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('/hero-magical-event.jpg')` }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 0.6, scale: 1 }}
          transition={{ duration: 1.2, repeat: Infinity, repeatType: "reverse" }}
          className="magical-glow absolute top-20 left-10 float-animation"
        >
          <Sparkles className="h-6 w-6 text-primary" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 0.4, scale: 1 }}
          transition={{ duration: 1.8, delay: 1, repeat: Infinity, repeatType: "reverse" }}
          className="magical-glow absolute top-40 right-20 float-animation"
        >
          <Sparkles className="h-8 w-8 text-accent" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 0.5, scale: 1 }}
          transition={{ duration: 2, delay: 2, repeat: Infinity, repeatType: "reverse" }}
          className="magical-glow absolute bottom-40 left-20 float-animation"
        >
          <Sparkles className="h-5 w-5 text-primary-glow" />
        </motion.div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <div className="md:max-w-4xl w-full mx-auto flex flex-col items-center justify-start md:justify-center min-h-screen pt-6 md:pt-0">
          {/* Badge */}
          <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={0}>
            <BadgeTag icon={Sparkles} text="Premium Event Management" />
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={1}
            className="text-[2.5rem] md:text-6xl lg:text-7xl font-bold md:mb-6 md:text-center text-start"
          >
            <span className="text-white">Fresh ideas are </span>
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                brewing
              </span>
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 1, duration: 1, ease: "easeOut" }}
                className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full origin-left"
              ></motion.div>
            </span>
          </motion.h1>

          <motion.h2
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={2}
            className="md:text-center mt-5 text-2xl md:text-4xl lg:text-5xl font-light md:mb-6 mb-2 md:text-muted-foreground text-white/50"
          >
            A new space where{" "}
            <span className="text-gold-gradient underline underline-offset-2">
              magic is re-imagined
            </span>
          </motion.h2>

          {/* Description */}
          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={3}
            className="text-sm md:text-xl text-white/70 md:text-muted-foreground MD:mb-10 mb-6 max-w-xl md:max-w-2xl mx-auto leading-relaxed md:text-center text-start"
          >
            Transform your vision into unforgettable experiences. From intimate
            gatherings to grand celebrations, we craft moments that inspire and
            amaze.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={4}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center md:mb-16 mb-6"
          >
            <Button
              className="relative inline-flex items-center gap-2 px-8 py-3 text-lg font-semibold text-white 
               bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 rounded-2xl 
               shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 group"
            >
              Plan Your Event
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>

            <Button
              variant="ghost"
              className="group btn-ghost-magical flex gap-2 border-1 p-3 rounded-xl"
            >
              <Play className="ghost-magical h-5 w-5 group-hover:scale-110 transition-transform" />
              View Our Work
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={5}
            className="flex justify-between w-full md:max-w-3xl mx-auto"
          >
            {[
              { num: "500+", label: "Events Created" },
              { num: "98%", label: "Client Satisfaction" },
              { num: "50+", label: "Premium Venues" },
            ].map((stat, idx) => (
              <div className="text-center" key={idx}>
                <div className="text-2xl md:text-4xl font-bold text-gradient mb-2">
                  {stat.num}
                </div>
                <div className="text-[10px] text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute text-white md:bottom-8 bottom-16 left-1/2 transform -translate-x-1/2 animate-bounce"
      >
        <div className="w-6 h-10 border-2 text-white  border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
