"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";

const clients = [
  {
    name: "Anjali Singh",
    location: "Hyderabad, Telangana",
    text: "Managing both our residential and retail spaces was becoming overwhelming. Their rental and commercial property management services allowed us to streamline everything through one contact point. It's made life significantly easier.",
    image: "/images/anjali.png",
  },
  {
    name: "Kishore Tn",
    location: "Hyderabad, Telangana",
    text: "After a tenant left my property damaged, i needed someone to take full charge. Think Bigs end to end property management services restored the House, repainted it, and placed a New tenant quickly. They've been handling all follow-ups professionally.",
    image: "/images/kishore.png",
  },
  {
    name: "Ajay kumar Gattu",
    location: "Hyderabad, Telangana",
    text: "As a working couple, we didn’t have the time to manage our inherited property. Their customized property management services allowed us to choose only the maintenance and tenant communication support we needed. It's been running on autopilot ever since.",
    image: "/images/ajay.png",
  },
  {
    name: "Rakesh Parbat",
    location: "Hyderabad, Telangana",
    text: "Thankyouuu... for understanding my requirements and provided end-to-end support for finding my Dream Home. Truly a leading name in Hyderabad’s real estate space.",
    image: "/images/parbat.png",
  },
  {
    name: "Ayushmaan Sharma",
    location: "Hyderabad, Telangana",
    text: "They are really good at rental property management, providing end to end property management services.",
    image: "/images/sharma.png",
  },
  {
    name: "Raghava Vicky",
    location: "Hyderabad, Telangana",
    text: "As an NRI, I was anxious about renting out my apartment in Hyderabad. Think Big stepped in as a dependable property management company in Kokapet and made the entire process seamless. I now have stable tenants and peace of mind.",
    image: "/images/raghava.png",
  },
];

export default function Page() {
  const [index, setIndex] = useState(0);

  const nextClient = () => setIndex((prev) => (prev + 1) % clients.length);
  const prevClient = () => setIndex((prev) => (prev - 1 + clients.length) % clients.length);

  return (
    <section className="w-full min-h-[60vh] flex flex-col justify-center px-4 sm:px-8 lg:px-10 py-8 sm:py-16 bg-white">
      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.31 }}
        className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-snug text-[#3D3A37] mb-8"
      >
        TESTIMONIALS
      </motion.h1>

      {/* Testimonial Text */}
      <div className="max-w-6xl text-justify mb-8 sm:mb-12 space-y-3 sm:space-y-4">
        <AnimatePresence mode="wait">
          {clients[index].text.split("\n").map((line, lineIndex) => (
            <motion.p
              key={`${index}-${lineIndex}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="text-base sm:text-lg md:text-xl font-light leading-relaxed text-[#3D3A37]"
            >
              {line}
            </motion.p>
          ))}
        </AnimatePresence>
      </div>

      {/* Client info */}
      <motion.div
        key={`image-${index}`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="flex items-center gap-3 sm:gap-6 mb-6"
      >
        <Image
          src={clients[index].image}
          alt={clients[index].name}
          width={64}
          height={64}
          className="rounded-full object-cover sm:w-[84px] sm:h-[84px]"
        />
        <div>
          <p className="text-sm sm:text-base font-semibold text-[#3D3A37]">{clients[index].name}</p>
          <p className="text-xs sm:text-sm text-[#3D3A37]">{clients[index].location}</p>
        </div>
      </motion.div>

      {/* Arrows */}
      <div className="flex gap-4 sm:gap-6">
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
  );
}
