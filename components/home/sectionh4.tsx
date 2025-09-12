"use client";

import React from "react";
import Image from "next/image";
import { motion, circOut } from "framer-motion";

type Direction = "top" | "right" | "left" | "bottom";

const getVariants = (direction: Direction) => {
  const map: Record<Direction, { x?: number; y?: number }> = {
    top: { y: -100 },
    right: { x: 100 },
    left: { x: -100 },
    bottom: { y: 100 },
  };

  return {
    hidden: { ...map[direction], opacity: 0 },
    visible: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        duration: 1.2,
        ease: circOut,
      },
    },
  };
};

export default function WhyThinkBig() {
  return (
    <section className="w-full bg-white py-10 md:py-20">
      <div className="container mx-auto px-4">
        {/* ===== marquee headline ===== */}
        <div className="overflow-hidden w-full mb-10 md:mb-26">
          <motion.h2
            className="font-bold text-[#3d3a37] text-[48px] sm:text-[80px] md:text-[140px] lg:text-[180px] whitespace-nowrap leading-tight"
            initial={{ x: "100%" }}
            animate={{ x: "-100%" }}
            transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
          >
            Why think big? * Why think big? * Why think big? * Why think big? *
          </motion.h2>
        </div>

        {/* ===== grid of cards ===== */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
          {/* card 1 from top */}
          <motion.div
            variants={getVariants("top")}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            className="rounded-2xl overflow-hidden bg-gray-100 shadow-lg aspect-[4/5] md:h-[600px] relative"
          >
            <Image
              src="/images/why1.svg"
              alt="Balcony View"
              fill
              className="object-cover rounded-2xl"
              priority
            />
          </motion.div>

          {/* card 2 from right */}
          <motion.div
            variants={getVariants("right")}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            className="relative rounded-2xl bg-[#3D3A37] text-white shadow-lg aspect-[4/5] md:h-[600px] flex flex-col justify-between p-4 md:p-8"
          >
            <h3 className="text-base sm:text-lg md:text-2xl font-medium text-right">
              Experience sweeping vistas from the wide open balcony.
            </h3>
            <div className="flex justify-between items-end">
              <div className="flex items-center space-x-2">
                <span className="w-7 h-7 md:w-8 md:h-8 flex items-center justify-center rounded-full border border-white text-xs md:text-sm">
                  01
                </span>
                <span className="w-7 h-7 md:w-8 md:h-8 flex items-center justify-center rounded-full border border-gray-600 text-xs md:text-sm text-gray-400">
                  02
                </span>
              </div>
              <p className="text-xs sm:text-sm opacity-80 max-w-[180px] md:max-w-[220px] text-right">
                Experience sweeping vistas from the wide open balcony.
              </p>
            </div>
          </motion.div>

          {/* card 3 from left */}
          <motion.div
            variants={getVariants("left")}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            className="relative rounded-2xl bg-[#3D3A37] text-white shadow-lg aspect-[4/5] md:h-[600px] flex flex-col justify-between p-4 md:p-8"
          >
            <h3 className="text-base sm:text-lg md:text-2xl font-medium text-left">
              Peaceful escape beyond the city hustle, with uncompromised
              privacy.
            </h3>
            <div className="flex justify-between items-end">
              <div className="flex items-center space-x-2">
                <span className="w-7 h-7 md:w-8 md:h-8 flex items-center justify-center rounded-full border border-white text-xs md:text-sm">
                  02
                </span>
                <span className="w-7 h-7 md:w-8 md:h-8 flex items-center justify-center rounded-full border border-gray-600 text-xs md:text-sm text-gray-400">
                  03
                </span>
              </div>
              <p className="text-xs sm:text-sm opacity-80 max-w-[180px] md:max-w-[220px] text-left">
                Experience nature’s tranquility and renewal—your personal
                sanctuary awaits.
              </p>
            </div>
          </motion.div>

          {/* card 4 from top */}
          <motion.div
            variants={getVariants("top")}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            className="rounded-2xl overflow-hidden bg-gray-100 shadow-lg aspect-[4/5] md:h-[600px] relative"
          >
            <Image
              src="/images/why3.svg"
              alt="Towers"
              fill
              className="object-cover rounded-2xl"
              priority
            />
          </motion.div>

          {/* card 5 from bottom */}
          <motion.div
            variants={getVariants("bottom")}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            className="rounded-2xl overflow-hidden bg-gray-100 shadow-lg aspect-[4/5] md:h-[600px] relative"
          >
            <Image
              src="/images/why2.svg"
              alt="Villa"
              fill
              className="object-cover rounded-2xl"
              priority
            />
          </motion.div>

          {/* card 6 from right */}
          <motion.div
            variants={getVariants("right")}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            className="relative rounded-2xl bg-[#3D3A37] text-white shadow-lg aspect-[4/5] md:h-[600px] flex flex-col justify-between p-4 md:p-8"
          >
            <h3 className="text-base sm:text-lg md:text-2xl font-medium text-right">
              Live the resort life at home—villa luxury, perfected
            </h3>
            <div className="flex justify-between items-end">
              <div className="flex items-center space-x-2">
                <span className="w-7 h-7 md:w-8 md:h-8 flex items-center justify-center rounded-full border border-white text-xs md:text-sm">
                  03
                </span>
                <span className="w-7 h-7 md:w-8 md:h-8 flex items-center justify-center rounded-full border border-gray-600 text-xs md:text-sm text-gray-400">
                  01
                </span>
              </div>
              <p className="text-xs sm:text-sm opacity-80 max-w-[180px] md:max-w-[220px] text-right">
                Indulge in curated amenities—lap pool, fitness, lounges, and
                more.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
