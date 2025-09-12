"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const properties = [
  { id: 1, title: "Lansum Encanto", location: "Financial District ", beds: "3 & 4 BHK Luxury Apartments", area: "4055 – 5045 Sq.Ft", image: "/images/l.svg" },
  { id: 2, title: "R One Diamond Towers", location: "Financial District", beds: "2, 3 BHK & 4 BHK luxury Apartments", area: "2765 - 4205 SFT.",  image: "/images/r.svg" },
  { id: 3, title: "Palais Royale", location: "Financial District", beds: " 4 & 5 BHK Residences", area: "3800 - 6610 SFT. ",  image: "/images/p.svg" },
  { id: 4, title: "Evania by AVR", location: "Kokapet", beds: "3.5 & 4 BHK Apartment", area: "3315 SFT. & 3575 SFT.",  image: "/images/e.svg" },
  { id: 5, title: "Vaishnoi Southwood ", location: "Mamidipally", beds: "4 & 5 BHK ultra luxurious villas", area: "300 to 940 Sq. Yards", image: "/images/v.svg" },
  { id: 6, title: "CasaGrand Hanford", location: "Kokapet", beds: "3.5 & 4 BHK Apartments ", area: "3315 SFT. -  3575 SFT.",  image: "/images/c.svg" },
];

// Parent motion
const gridVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

// Card animation
const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function FeaturedPropertiesCarousel() {
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () =>
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : properties.length - 1));
  const next = () =>
    setCurrentIndex((prev) => (prev < properties.length - 1 ? prev + 1 : 0));

  // On mobile: show 1 card | On tablet+: show 3 cards
  const visibleCards = Array.from(
    { length: typeof window !== "undefined" && window.innerWidth < 640 ? 1 : 3 },
    (_, i) => properties[(currentIndex + i) % properties.length]
  );

  return (
   <section className="px-4 sm:px-6 md:px-12 py-0 sm:py-10 bg-white text-[#3D3A37]">

      {/* Title */}
      <motion.h4
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-8 sm:mb-10 text-left"
      >
        {"Featured Properties.".split("").map((char, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05, duration: 0.05, ease: "easeOut" }}
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </motion.h4>

      {/* Carousel */}
      <div className="relative">
        {/* Cards */}
        <motion.div
          className="flex gap-4 sm:gap-6 justify-center overflow-hidden"
          initial="hidden"
          animate="visible"
          variants={gridVariants}
        >
          {visibleCards.map((property, index) => {
            const isSecond = index % 2 === 1;
            return (
              <motion.div
                key={property.id}
                variants={cardVariants}
                className={`flex-shrink-0 w-full sm:w-[70%] md:w-[30%] rounded-xl sm:rounded-2xl overflow-hidden shadow-md sm:shadow-lg border border-gray-200 flex flex-col transition ${
                  isSecond
                    ? "bg-[#3D3A37] text-white"
                    : "bg-white text-[#3D3A37]"
                }`}
              >
                {/* Image */}
                <div className="relative w-full h-52 sm:h-64 md:h-72">
                  <Image
                    src={property.image}
                    alt={property.title}
                    fill
                    className="object-cover rounded-t-xl sm:rounded-t-2xl"
                  />
                </div>

                {/* Card Content */}
                <div className="p-4 sm:p-6 flex-1 flex flex-col justify-between space-y-3 sm:space-y-4">
                  <div>
                    <h3 className="text-base sm:text-lg md:text-xl font-semibold">
                      {property.title}
                    </h3>
                    <p className="flex items-center gap-2 text-xs sm:text-sm opacity-80 mt-1">
                      📍 {property.location}
                    </p>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4 text-xs sm:text-sm opacity-80 mt-2">
                      <span>🛏 {property.beds}</span>
                      <span>{property.area}</span>
                    </div>
                  </div>

                  <div className="pt-3 sm:pt-4 border-t border-gray-300/30 flex items-center justify-between">
                    <button
                      onClick={() =>
                        router.push(`/viewproperties/${property.id}`)
                      }
                      className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition ${
                        isSecond
                          ? "bg-white text-[#3D3A37] hover:bg-gray-200"
                          : "bg-[#3D3A37] text-white hover:opacity-90"
                      }`}
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Arrows */}
        <div className="flex justify-center items-center gap-3 sm:gap-4 mt-6 sm:mt-8">
          <button
            onClick={prev}
            className="p-2 sm:p-3 bg-gray-200 rounded-full hover:bg-gray-300 transition"
          >
            <ChevronLeft size={22} className="sm:w-7 sm:h-7" />
          </button>
          <button
            onClick={next}
            className="p-2 sm:p-3 bg-gray-200 rounded-full hover:bg-gray-300 transition"
          >
            <ChevronRight size={22} className="sm:w-7 sm:h-7" />
          </button>
        </div>
      </div>

      {/* Showcase Image */}
      <div className="container mx-auto px-2 sm:px-4 flex flex-col items-center mt-12 sm:mt-16">
        <Image
          src="/images/elysium.svg"
          alt="Showcase"
          width={1000}
          height={400}
          className="w-full max-w-full sm:max-w-5xl h-auto rounded-xl sm:rounded-3xl object-cover shadow-md sm:shadow-lg"
        />
      </div>
    </section>
  );
}
