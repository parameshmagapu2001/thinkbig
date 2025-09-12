"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div className="bg-white p-0 sm:p-4">
      <section className="relative w-full h-[70vh] sm:h-[94vh] rounded-none sm:rounded-[3rem] overflow-hidden">
        {/* Background image with priority loading */}
        <Image
          src="/images/heroimg.svg"
          alt="Dream House"
          fill
          className="object-cover z-0"
          priority
          sizes="100vw"
        />
        
        {/* Gradient overlay for better text visibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent z-10"></div>

        {/* Centered text with responsive sizing */}
        <div className="absolute inset-0 flex items-center justify-center px-4 sm:px-0 z-20">
          <motion.h1
            initial={{ y: -40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 12,
              duration: 0.8,
            }}
            viewport={{ once: false, amount: 0.3 }}
            className="text-white text-center 
                       text-3xl xs:text-4xl sm:text-5xl lg:text-6xl 
                       font-bold leading-tight sm:leading-snug drop-shadow-lg 
                       max-w-full sm:max-w-3xl px-2"
          >
            Real Estate, Simplified!
          </motion.h1>
        </div>
      </section>
    </div>
  );
}