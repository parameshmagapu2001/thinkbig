"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";

const clients = [
  {
    name: "Phani Krishna",
    location: "Hyderabad, Telangana",
    text: "We own both a shop and a flat in the city but couldn’t manage them effectively from afar. Their rental and commercial property management services helped us organize everything from tenants to repairs. Now both places are running smoothly without our constant involvement.",
    image: "/images/test1.svg",
  },
  {
    name: "Paramesh Magapu",
    location: "Hyderabad, Telangana",
    text: "Managing both our residential and retail spaces was becoming overwhelming. Their rental and commercial property management services allowed us to streamline everything through one contact point. It's made life significantly easier.",
    image: "/images/paramesh.svg",
  },
];

export default function Page() {
  const [index, setIndex] = useState(0);

  const nextClient = () => setIndex((prev) => (prev + 1) % clients.length);
  const prevClient = () => setIndex((prev) => (prev - 1 + clients.length) % clients.length);

  return (
    <>
      {/* ================== Testimonials Section ================== */}
     <section className="w-full min-h-[60vh] flex flex-col justify-center px-4 sm:px-8 lg:px-10 py-0 sm:py-16 bg-white">
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.31 }}
          className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-snug text-[#3D3A37]"

        >
          TESTIMONIALS
        </motion.h1>

        {/* Testimonial */}
        <div className="max-w-6xl text-justify space-y-3 sm:space-y-4">
          <AnimatePresence mode="wait">
            {clients[index].text.split("\n").map((line, lineIndex) => (
              <motion.p
                key={`${index}-${lineIndex}`}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                viewport={{ once: false, amount: 0.3 }}
                className="text-lg sm:text-2xl md:text-4xl font-semibold leading-snug text-[#3D3A37]"
              >
                {line.split(" ").map((word, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.02 }}
                    viewport={{ once: false, amount: 0.3 }}
                    className="inline-block mr-1 sm:mr-2"
                  >
                    {word}
                  </motion.span>
                ))}
              </motion.p>
            ))}
          </AnimatePresence>
        </div>

        {/* Client info */}
        <motion.div
          key={`image-${index}`}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
          viewport={{ once: false, amount: 0.3 }}
          className="flex items-center mt-6 sm:mt-8 gap-4 sm:gap-8"
        >
          <Image
            src={clients[index].image}
            alt={clients[index].name}
            width={64}
            height={64}
            className="rounded-full object-cover sm:w-[84px] sm:h-[84px]"
          />
          <div>
            <p className="text-base sm:text-lg md:text-xl text-[#3D3A37] font-semibold">
              {clients[index].name}
            </p>
            <p className="text-sm sm:text-base md:text-lg text-[#3D3A37]">
              {clients[index].location}
            </p>
          </div>
        </motion.div>

        {/* Arrows */}
        <div className="flex gap-4 sm:gap-6 mt-6 sm:mt-10">
          <button
            onClick={prevClient}
            className="group p-2 sm:p-3 border border-black bg-white rounded-full shadow-sm hover:bg-black transition"
          >
            <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 text-black group-hover:text-white" />
          </button>
          <button
            onClick={nextClient}
            className="group p-2 sm:p-3 border border-black bg-white rounded-full shadow-sm hover:bg-black transition"
          >
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-black group-hover:text-white" />
          </button>
        </div>
      </section>

  


    </>
  );
}
