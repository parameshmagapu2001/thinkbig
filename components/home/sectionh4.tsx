"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

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
        ease: "circOut",
      },
    },
  };
};

export default function WhyThinkBig() {
  return (
    <section className="w-full bg-white py-0 sm:py-8">
      <div className="max-w-[1500px] mx-auto px-4 sm:px-6">
        {/* Headline - Fixed for mobile */}
        <div className="overflow-visible w-full mb-8 sm:mb-12 text-center">
          <motion.h2
            initial={{ y: -50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "circOut" }}
            viewport={{ once: true, margin: "-50px" }}
            className="font-bold text-[#3d3a37] text-[36px] xs:text-[42px] sm:text-[60px] md:text-[80px] lg:text-[100px] xl:text-[120px] leading-[1.1] sm:leading-tight"
          >
            Why ThinkBig?
          </motion.h2>
        </div>

        {/* Grid of Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-10 justify-center items-center">
          {[
            { type: "image", src: "/images/card1.svg", alt: "Balcony View", dir: "left" },
            { type: "text", text: "Access to High-End Real Estate", dir: "right", hideMobile: true },
            { type: "text", text: "Backed by Trusted Developers", dir: "left", hideMobile: true },
            { type: "image", src: "/images/card2.svg", alt: "Towers", dir: "top" },
            { type: "image", src: "/images/card3.svg", alt: "Villa", dir: "top" },
            { type: "text", text: "24×7 Market Analysis & Survey", dir: "right", hideMobile: true },
            { type: "text", text: "Professional Team of Experts", dir: "left", hideMobile: true },
            { type: "image", src: "/images/card4.svg", alt: "Towers", dir: "top" },
          ].map((card, idx) => (
            <motion.div
  key={idx}
  variants={getVariants(card.dir as Direction)}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.3 }}
  className={`w-full h-[300px] sm:h-[400px] md:h-[450px] lg:h-[600px] xl:h-[692px]
              rounded-[24px] sm:rounded-[34px] shadow-lg relative mx-auto flex
              items-center justify-center bg-[#3D3A37] text-white
              p-6 sm:p-8 
              ${card.hideMobile ? "hidden sm:flex" : ""}`}
>

              {card.type === "image" ? (
                <Image
                  src={card.src!}
                  alt={card.alt!}
                  fill
                  className="object-cover rounded-[24px] sm:rounded-[34px]"
                  priority
                />
              ) : (
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-center">
                  {card.text}
                </h2>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}