"use client";

import React from "react";
import Image from "next/image";
import { motion, circOut } from "framer-motion"; // ✅ use proper easing fn

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
        duration: 1.5,
        ease: circOut, // ✅ FIX
      },
    },
  };
};

export default function WhyThinkBig() {
  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-[1500px] mx-auto px-6">
        {/* Headline */}
        <div className="overflow-hidden w-full mb-12 text-center">
          <motion.h2
            initial={{ y: -100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: circOut }}
            viewport={{ once: true }}
            className="font-bold text-[#3d3a37] text-[48px] sm:text-[80px] md:text-[120px] lg:text-[150px] leading-tight"
          >
            Why ThinkBig?
          </motion.h2>
        </div>

        {/* Grid of Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 justify-center items-center">
          {/* Card 1 – From Left */}
          <motion.div
            variants={getVariants("left")}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            className="w-[692px] h-[692px] rounded-[34px] overflow-hidden bg-gray-100 shadow-lg relative mx-auto"
          >
            <Image
              src="/images/card1.svg"
              alt="Balcony View"
              fill
              className="object-cover rounded-[34px]"
              priority
            />
          </motion.div>

          {/* Card 2 – From Right */}
          <motion.div
            variants={getVariants("right")}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            className="w-[692px] h-[692px] rounded-[34px] bg-[#3D3A37] text-white shadow-lg flex flex-col justify-center items-center p-8 mx-auto"
          >
            <h2 className="text-2xl font-semibold text-center mb-4">
              Access to High-End Real Estate
            </h2>
          </motion.div>

          {/* Card 3 – From Left */}
          <motion.div
            variants={getVariants("left")}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            className="w-[692px] h-[692px] rounded-[34px] bg-[#3D3A37] text-white shadow-lg flex flex-col justify-center items-center p-8 mx-auto"
          >
            <h2 className="text-2xl font-semibold text-center mb-4">
              Backed by Trusted Developers
            </h2>
          </motion.div>

          {/* Card 4 – From Top */}
          <motion.div
            variants={getVariants("top")}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            className="w-[692px] h-[692px] rounded-[34px] overflow-hidden bg-gray-100 shadow-lg relative mx-auto"
          >
            <Image
              src="/images/card2.svg"
              alt="Towers"
              fill
              className="object-cover rounded-[34px]"
              priority
            />
          </motion.div>

          {/* Card 5 – From Top */}
          <motion.div
            variants={getVariants("top")}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            className="w-[692px] h-[692px] rounded-[34px] overflow-hidden bg-gray-100 shadow-lg relative mx-auto"
          >
            <Image
              src="/images/card3.svg"
              alt="Villa"
              fill
              className="object-cover rounded-[34px]"
              priority
            />
          </motion.div>

          {/* Card 6 – From Right */}
          <motion.div
            variants={getVariants("right")}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            className="w-[692px] h-[692px] rounded-[34px] bg-[#3D3A37] text-white shadow-lg flex flex-col justify-center items-center p-8 mx-auto"
          >
            <h2 className="text-2xl font-semibold text-center mb-4">
              24×7 Market Analysis & Survey
            </h2>
          </motion.div>

          {/* Card 7 – From Left */}
          <motion.div
            variants={getVariants("left")}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            className="w-[692px] h-[692px] rounded-[34px] bg-[#3D3A37] text-white shadow-lg flex flex-col justify-center items-center p-8 mx-auto"
          >
            <h2 className="text-2xl font-semibold text-center mb-4">
              Professional Team of Experts
            </h2>
          </motion.div>

          {/* Card 8 – From Top */}
          <motion.div
            variants={getVariants("top")}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            className="w-[692px] h-[692px] rounded-[34px] overflow-hidden bg-gray-100 shadow-lg relative mx-auto"
          >
            <Image
              src="/images/card4.svg"
              alt="Towers"
              fill
              className="object-cover rounded-[34px]"
              priority
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
