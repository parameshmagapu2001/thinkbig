"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Buy() {
  return (
    <div className="bg-white p-2 sm:p-4">
      <section className="relative w-full h-[80vh] sm:h-[94vh] rounded-[1.5rem] sm:rounded-[4rem] overflow-hidden">
        {/* Background image */}
        <Image
          src="/images/sign.svg"
          alt="Dream House"
          fill
          className="object-cover z-0"
          priority
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent z-10" />

        {/* Centered container */}
        <div className="absolute inset-0 flex flex-col justify-center items-center sm:items-start text-center sm:text-left px-4 sm:px-16 z-20">
          {/* Heading */}
          <motion.h1
            initial={{ y: -50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 12,
              duration: 0.8,
            }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-white text-3xl sm:text-5xl md:text-6xl font-bold leading-snug drop-shadow-lg max-w-full sm:max-w-lg"
          >
            Get Your Premium <br /> Property Today
          </motion.h1>
        </div>
      </section>
    </div>
  );
}
