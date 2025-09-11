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

        {/* bottom container with flex for side by side */}
        <div className="absolute bottom-6 sm:bottom-8 left-4 sm:left-8 right-4 sm:right-8 flex flex-col sm:flex-row justify-between items-end gap-4 z-20">
          {/* left text */}
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
            className="text-white text-3xl sm:text-5xl font-bold leading-snug drop-shadow-lg max-w-[90%] sm:max-w-md"
          >
            Discover Your <br /> Dream House!
          </motion.h1>

          {/* right paragraph */}
          <motion.p
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 12,
              duration: 0.8,
              delay: 0.2,
            }}
            viewport={{ once: false, amount: 0.3 }}
            className="text-white text-sm sm:text-base md:text-lg drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)] max-w-[90%] sm:max-w-md text-right"
          >
            Everything from selection to handover for a seamless luxury purchase.
          </motion.p>
        </div>
      </section>
    </div>
  );
}
