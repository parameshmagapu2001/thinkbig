"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

type Direction = "top" | "right" | "left" | "bottom";

const getVariants = (direction: Direction) => {
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
      transition: { duration: 1.5, ease: "easeOut" },
    },
  };
};

export default function SignatureAndWhyThinkBig() {
  return (
    <section className="bg-white w-full">
      {/* ===== Signature Heading Section ===== */}
      <div className="max-w-[1339px]  px-5 sm:px-6 md:px-15 py-24 text-left">
        <h2
          className="text-[#3D3A37] font-medium text-[45px] sm:text-[65px] md:text-[93px] leading-[50px] sm:leading-[70px] md:leading-[102px]"
          style={{
            fontFamily: "Clash Grotesk, sans-serif",
            fontWeight: 500,
          }}
        >
          Everything for crafting a <br /> signature residence.
        </h2>

        <p className="text-[#3D3A37] text-[18px] sm:text-[24px] md:text-[30px] mt-4 sm:mt-5 md:mt-6">
          Everything in one place for exclusive residences and refined living.
        </p>
      </div>

      {/* ===== Animated Cards Grid Section ===== */}
      <div className="max-w-[1500px] mx-auto px-6 py-16">
        {/* Grid of Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 justify-center items-center">
          <motion.div
            variants={getVariants("left")}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            className="w-[692px] h-[692px] rounded-[34px] overflow-hidden bg-gray-100 shadow-lg relative mx-auto"
          >
            <Image
              src="/images/why1.svg"
              alt="Balcony View"
              fill
              className="object-cover rounded-[34px]"
              priority
            />
          </motion.div>

          <motion.div
            variants={getVariants("right")}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            className="w-[692px] h-[692px] rounded-[34px] bg-[#3D3A37] text-white shadow-lg flex flex-col justify-center items-center p-8 mx-auto"
          >
            <h3 className="text-2xl font-semibold text-center mb-4">
              Experience sweeping vistas from the wide open balcony.
            </h3>
            <p className="text-base opacity-80 text-center">
              Enjoy open views, privacy, and sunlight all at once.
            </p>
          </motion.div>

          <motion.div
            variants={getVariants("left")}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            className="w-[692px] h-[692px] rounded-[34px] bg-[#3D3A37] text-white shadow-lg flex flex-col justify-center items-center p-8 mx-auto"
          >
            <h3 className="text-2xl font-semibold text-center mb-4">
              Peaceful escape beyond city hustle, uncompromised privacy.
            </h3>
            <p className="text-base opacity-80 text-center">
              Nature’s tranquility and your personal sanctuary.
            </p>
          </motion.div>

          <motion.div
            variants={getVariants("top")}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            className="w-[692px] h-[692px] rounded-[34px] overflow-hidden bg-gray-100 shadow-lg relative mx-auto"
          >
            <Image
              src="/images/why3.svg"
              alt="Towers"
              fill
              className="object-cover rounded-[34px]"
              priority
            />
          </motion.div>

          <motion.div
            variants={getVariants("top")}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            className="w-[692px] h-[692px] rounded-[34px] overflow-hidden bg-gray-100 shadow-lg relative mx-auto"
          >
            <Image
              src="/images/why2.svg"
              alt="Villa"
              fill
              className="object-cover rounded-[34px]"
              priority
            />
          </motion.div>

          <motion.div
            variants={getVariants("right")}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            className="w-[692px] h-[692px] rounded-[34px] bg-[#3D3A37] text-white shadow-lg flex flex-col justify-center items-center p-8 mx-auto"
          >
            <h3 className="text-2xl font-semibold text-center mb-4">
              Live the resort life at home—villa luxury, perfected.
            </h3>
            <p className="text-base opacity-80 text-center">
              Curated amenities—lap pool, fitness, lounges, and more.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
