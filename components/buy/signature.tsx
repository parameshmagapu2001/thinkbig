"use client";

import React from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";

type Direction = "top" | "right" | "left" | "bottom";

const getVariants = (direction: Direction): Variants => {
  let hidden;
  switch (direction) {
    case "right":
      hidden = { x: 100, opacity: 0 };
      break;
    case "left":
      hidden = { x: -100, opacity: 0 };
      break;
    case "top":
      hidden = { y: -100, opacity: 0 };
      break;
    case "bottom":
      hidden = { y: 100, opacity: 0 };
      break;
  }

  return {
    hidden,
    visible: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        duration: 1.2,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };
};

export default function SignatureAndWhyThinkBig() {
  return (
    <section className="bg-white w-full">
      {/* Heading Section */}
      <div className="max-w-[1339px] px-5 sm:px-6 md:px-12 py-12 sm:py-16 text-left mx-auto">
        <h2 className="text-[#3D3A37] font-medium text-3xl sm:text-4xl md:text-[65px] lg:text-[93px] leading-snug sm:leading-snug md:leading-[70px] lg:leading-[102px]">
          Everything for crafting a <br /> signature residence.
        </h2>
        <p className="text-[#3D3A37] text-base sm:text-lg md:text-xl lg:text-2xl mt-3 sm:mt-4 md:mt-5">
          Everything in one place for exclusive residences and refined living.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="max-w-[1500px] mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 justify-center items-center">
          {/* Card 1 - Image */}
          <motion.div
            variants={getVariants("left")}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            className="w-full aspect-square rounded-2xl overflow-hidden bg-gray-100 shadow-lg relative mx-auto"
          >
            <Image
              src="/images/why1.svg"
              alt="Balcony View"
              fill
              className="object-cover rounded-2xl"
              priority
            />
          </motion.div>

          {/* Card 2 - Text */}
          <motion.div
            variants={getVariants("right")}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            className="w-full aspect-square rounded-2xl bg-[#3D3A37] text-white shadow-lg flex flex-col justify-center items-center p-6 sm:p-8 mx-auto"
          >
            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-center mb-2 sm:mb-4">
              Experience sweeping vistas from the wide open balcony.
            </h3>
            <p className="text-sm sm:text-base md:text-base opacity-80 text-center">
              Enjoy open views, privacy, and sunlight all at once.
            </p>
          </motion.div>

          {/* Card 3 - Text */}
          <motion.div
            variants={getVariants("left")}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            className="w-full aspect-square rounded-2xl bg-[#3D3A37] text-white shadow-lg flex flex-col justify-center items-center p-6 sm:p-8 mx-auto"
          >
            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-center mb-2 sm:mb-4">
              Peaceful escape beyond city hustle, uncompromised privacy.
            </h3>
            <p className="text-sm sm:text-base md:text-base opacity-80 text-center">
              Nature’s tranquility and your personal sanctuary.
            </p>
          </motion.div>

          {/* Card 4 - Image */}
          <motion.div
            variants={getVariants("top")}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            className="w-full aspect-square rounded-2xl overflow-hidden bg-gray-100 shadow-lg relative mx-auto"
          >
            <Image
              src="/images/why3.svg"
              alt="Towers"
              fill
              className="object-cover rounded-2xl"
              priority
            />
          </motion.div>

          {/* Card 5 - Image */}
          <motion.div
            variants={getVariants("top")}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            className="w-full aspect-square rounded-2xl overflow-hidden bg-gray-100 shadow-lg relative mx-auto"
          >
            <Image
              src="/images/why2.svg"
              alt="Villa"
              fill
              className="object-cover rounded-2xl"
              priority
            />
          </motion.div>

          {/* Card 6 - Text */}
          <motion.div
            variants={getVariants("right")}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            className="w-full aspect-square rounded-2xl bg-[#3D3A37] text-white shadow-lg flex flex-col justify-center items-center p-6 sm:p-8 mx-auto"
          >
            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-center mb-2 sm:mb-4">
              Live the resort life at home—villa luxury, perfected.
            </h3>
            <p className="text-sm sm:text-base md:text-base opacity-80 text-center">
              Curated amenities—lap pool, fitness, lounges, and more.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
