"use client";

import React from "react";
import { motion } from "framer-motion";

const ServiceSection: React.FC = () => {
  const text = "Step into refined villa life—clubhouse mornings, poolside evenings, and a smooth buying journey.";

  return (
    <section className="w-full bg-white py-16">
      <div className="container mx-auto px-4">
        {/* Animated Heading Paragraph */}
        <motion.h2
          className="text-4xl md:text-6xl lg:text-6xl font-bold leading-snug mb-16 text-[#3D3A37]"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 1 }}
        >
          {text.split("").map((char, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ delay: i * 0.03, duration: 0.5, ease: "easeOut" }}
            >
              {char}
            </motion.span>
          ))}
        </motion.h2>

{/* Services + Description Side by Side */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-10">
  {/* Left Side - Service Tiers */}
  <div className="flex flex-col justify-center">
    <h3 className="text-2xl font-semibold mb-10 text-[#3D3A37]">Service tiers :</h3>

    <div className="space-y-8">
      {/* Item 1 */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.7 }}
      >
        <p className="font-semibold text-lg text-[#3D3A37]">
          Book a private villa tour
        </p>
        <div className="flex items-center mt-3 w-full">
          <div className="h-[4px] bg-[#3D3A37] w-[80%]" />
          <div className="h-[1px] bg-[#3D3A37] w-[10%]" />
          <div className="w-[30%]" />
        </div>
      </motion.div>

      {/* Item 2 */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.7, delay: 0.1 }}
      >
        <p className="font-semibold text-lg text-[#3D3A37]">
          Get loan pre-approval guidance
        </p>
        <div className="flex items-center mt-3 w-full">
      <div className="h-[4px] bg-[#3D3A37] w-[80%]" />
          <div className="h-[1px] bg-[#3D3A37] w-[10%]" />
          <div className="w-[30%]" />
        </div>
      </motion.div>

      {/* Item 3 */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <p className="font-semibold text-lg text-[#3D3A37]">
          Explore clubhouse and pool amenities.
        </p>
        <div className="flex items-center mt-3 w-full">
      <div className="h-[4px] bg-[#3D3A37] w-[80%]" />
          <div className="h-[1px] bg-[#3D3A37] w-[10%]" />
          <div className="w-[30%]" />
        </div>
      </motion.div>
    </div>
  </div>

  {/* Right Side - Description */}
<motion.div
  initial={{ opacity: 0, x: 50 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: false, amount: 0.3 }}
  transition={{ duration: 0.8 }}
  className="flex items-center md:justify-end"
>
  <div className="max-w-lg md:max-w-xl text-left"> 
    <p className="text-xl md:text-2xl leading-relaxed text-[#3D3A37]">
      From tailored shortlists and guided site visits to home-loan assistance with leading lenders and documentation support, the buying experience is streamlined end-to-end.
    </p>
    <p className="text-xl md:text-2xl leading-relaxed text-[#3D3A37] mt-6">
      Expect resort-grade comforts—clubhouse, fitness, and pool—across top gated communities, paired with clear timelines and professional coordination.
    </p>
  </div>
</motion.div>

</div>

      </div>
    </section>
  );
};

export default ServiceSection;
