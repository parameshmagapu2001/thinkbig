"use client";

import { useEffect, useState, useRef } from "react";
import { motion, Variants, useInView } from "framer-motion";
import Image from "next/image";

export default function AboutSection() {
  const fullText = `We are a leading company in the real estate sector, specializing in providing a wide range of services and solutions to meet the needs of buying, renting, and managing real estate assets.`;

  const [displayedText, setDisplayedText] = useState("");
  const [typingDone, setTypingDone] = useState(false);

  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: false, amount: 0.4 });

  // Typing effect that restarts every time section is in view
  useEffect(() => {
    if (inView) {
      setDisplayedText("");
      setTypingDone(false);

      let index = 0;
      const interval = setInterval(() => {
        setDisplayedText(fullText.slice(0, index));
        index++;
        if (index > fullText.length) {
          clearInterval(interval);
          setTypingDone(true);
        }
      }, 8);

      return () => clearInterval(interval);
    }
  }, [inView, fullText]);

  const images = ["v1.svg", "v2.svg"];

  // Variants
  const imageVariants: Variants = {
    hidden: { opacity: 0, y: 60 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: 0.3 + i * 0.3, duration: 0.7, ease: "easeOut" },
    }),
  };

  const textVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  return (
    <section ref={sectionRef} className="px-[10%] py-20 min-h-[90vh] bg-white">
      {/* Typing Text */}
      <div className="w-full mb-16">
        <motion.h1
          className="w-full text-4xl sm:text-4xl md:text-4xl lg:text-5xl font-bold leading-[1.4] tracking-tight whitespace-normal text-[#3D3A37]"
          initial={{ opacity: 0 }}
          animate={{ opacity: inView ? 1 : 0 }}
          transition={{ duration: 1 }}
        >
          {displayedText}
        </motion.h1>
      </div>

      {/* Images + Text: only after typing is done */}
      {typingDone && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
          {/* Left: two images side by side */}
          <div className="grid grid-cols-2 gap-15 col-span-1">
            {images.map((img, i) => (
              <motion.div
                key={i}
                custom={i}
                variants={imageVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
                className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-0"
              >
                <Image
                  src={`/images/${img}`}
                  alt={`Property ${i + 1}`}
                  fill
                  className="object-cover"
                />
              </motion.div>
            ))}
          </div>

          {/* Right: text */}
          <motion.div
            className="lg:col-span-2"
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
          >
            <p className="text-xl sm:text-2xl md:text-2xl text-black leading-relaxed tracking-wide">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </motion.div>
        </div>
      )}
    </section>
  );
}
