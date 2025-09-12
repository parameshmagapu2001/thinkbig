"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Buy() {
  return (
    <div className="bg-white p-2 sm:p-4 rounded-none sm:rounded-[0rem]">
      <section className="relative w-full h-[90vh] sm:h-[94vh] rounded-[2rem] sm:rounded-[4rem] overflow-hidden">
        {/* background image */}
        <Image
          src="/images/sign.svg"
          alt="Dream House"
          fill
          className="object-cover z-0"
          priority
        />

        {/* gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent z-10"></div>

        {/* Centered container */}
        <div className="flex flex-col sm:flex-row justify-center items-center text-center gap-4 min-h-[500px]">
          {/* Left text */}
          <motion.h1
            initial={{ y: -100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 12,
              duration: 0.8,
            }}
            viewport={{ once: false, amount: 0.3 }}
            className="text-white text-3xl sm:text-5xl font-bold leading-snug drop-shadow-lg max-w-[90%] sm:max-w-md mt-85"
          >
            Get Your Premium <br /> Property Today
          </motion.h1>
        </div>
      </section>
    </div>
  );
}
