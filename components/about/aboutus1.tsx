"use client";

import { motion } from "framer-motion";

export default function Aboutus() {
  return (
    <section className="relative h-[400px] sm:h-[500px] md:h-[700px] w-full rounded-2xl overflow-hidden flex items-end">
      {/* Background Image */}
      <img
        src="/images/villa-luxury.jpg"
        alt="Luxury Villa"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Content Row */}
      <div className="relative z-10 flex flex-col md:flex-row justify-between w-full px-4 sm:px-8 md:px-16 pb-8 sm:pb-12">
        <motion.h1
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-white text-xl sm:text-2xl md:text-5xl font-bold max-w-full md:max-w-xl drop-shadow-lg mb-4 md:mb-0"
        >
          About Think Big Property Management
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-white text-sm sm:text-base md:text-lg font-semibold max-w-full md:max-w-lg text-left md:text-right drop-shadow-md"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
        </motion.p>
      </div>
    </section>
  );
}
