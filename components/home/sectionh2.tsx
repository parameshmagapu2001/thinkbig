"use client";

import { useEffect, useState, useRef } from "react";
import { motion, Variants, useInView } from "framer-motion";

export default function AboutSection() {
  const fullText = `We are a leading company in the real estate sector, specializing in providing a wide range of services and solutions to meet the needs of buying, renting, and managing real estate assets.`;

  const [displayedText, setDisplayedText] = useState("");
  const [typingDone, setTypingDone] = useState(false);

  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: false, amount: 0.4 });

  // Typing effect for the main paragraph
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

  // Variants for individual words
  const wordVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  const postTextWords = ["BUY", "|", "SELL", "|", "RENT", "|", "LEASE"];

  return (
   <section
  ref={sectionRef}
  className="px-4 sm:px-8 md:px-[10%] pt-10 pb-6 sm:py-10 min-h-[60vh] bg-white"
>

      {/* Typing Text */}
      <div className="w-full mb-10 sm:mb-16">
        <motion.h1
          className="w-full 
                     text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl 
                     font-semibold sm:font-bold 
                     text-left sm:text-justify 
                     leading-relaxed sm:leading-[1.4] 
                     tracking-tight 
                     whitespace-normal 
                     text-[#3D3A37]"
          initial={{ opacity: 0 }}
          animate={{ opacity: inView ? 1 : 0 }}
          transition={{ duration: 1 }}
        >
          {displayedText}
        </motion.h1>
      </div>

      {/* Post-typing text with per-word animation */}
      {typingDone && (
        <motion.div
          className="flex flex-wrap justify-center items-center gap-4 sm:gap-x-6 
                     text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl 
                     font-bold text-[#3D3A37] tracking-wide sm:tracking-wider text-center"
        >
          {postTextWords.map((word, index) => (
            <motion.span
              key={index}
              variants={wordVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: index * 0.2 }}
            >
              {word}
            </motion.span>
          ))}
        </motion.div>
      )}
    </section>
  );
}
