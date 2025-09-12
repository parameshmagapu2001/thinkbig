"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div className="bg-white p-2 sm:p-4 rounded-none sm:rounded-[0rem]">
      <section className="relative w-full h-[90vh] sm:h-[94vh] rounded-[2rem] sm:rounded-[4rem] overflow-hidden">
        {/* background image */}
        <Image
          src="/images/heroimg.svg"
          alt="Dream House"
          fill
          className="object-cover z-0"
          priority
        />
        {/* gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent z-10"></div>

        {/* Centered text */}
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <motion.h1
            initial={{ y: -50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 12,
              duration: 0.8,
            }}
            viewport={{ once: false, amount: 0.3 }}
            className="text-white text-center text-5xl sm:text-6xl font-bold leading-snug drop-shadow-lg max-w-[100%] sm:max-w-3xl mt-20 sm:mt-28"
          >
           Real Estate, Simplified!
          </motion.h1>
        </div>
      </section>
    </div>
  );
}
