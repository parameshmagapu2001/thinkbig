"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";

const properties = [
  {
    id: 1,
    title: "Skyper Pool Apartment",
    location: "1020 Kokapet",
    beds: "4 Beds",
    area: "450 sqft, Apartment",
    price: "₹20,80,000",
    image: "/images/property1.svg",
  },
  {
    id: 2,
    title: "North Dillard Street",
    location: "Kukatpally",
    beds: "4 Beds",
    area: "400 sqft, Commercial",
    price: "₹20,80,000",
    image: "/images/property2.svg",
  },
  {
    id: 3,
    title: "Eaton Garth Penthouse",
    location: "Financial District",
    beds: "4 Beds",
    area: "450 sqft, Villa",
    price: "₹20,80,000",
    image: "/images/property3.svg",
  },
];

// Card animation
const cardVariants: Variants = {
  hidden: { opacity: 0, y: 50, scaleY: 0.8 },
  visible: { opacity: 1, y: 0, scaleY: 1 },
};

export default function FeaturedPropertiesWithShowcase() {
  return (
    <div className="bg-white text-[#3D3A37]">
      {/* ================= Featured Properties Section ================= */}
      <section className="px-6 md:px-[10%] py-16">
        {/* Heading */}
        <motion.h5
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.5 }}
          className="text-xl sm:text-2xl md:text-3xl font-bold leading-tight mb-6 text-left"
        >
          Featured Properties
        </motion.h5>

        {/* Split text animation for h2 (word by word) */}
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          className="text-3xl sm:text-5xl md:text-[110px] lg:text-[120px] font-bold leading-snug mb-14 text-left flex flex-wrap gap-2"
        >
          {"Select the option you prefer.".split(" ").map((word, i) => (
            <motion.span
              key={i}
              className="inline-block"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ delay: i * 0.15, duration: 0.6, ease: "easeOut" }}
            >
              {word}&nbsp;
            </motion.span>
          ))}
        </motion.h2>

        {/* Properties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {properties.map((property, index) => {
            const isSecond = index % 2 === 1;
            return (
              <motion.div
                key={property.id}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                transition={{
                  delay: index * 0.2,
                  duration: 0.9,
                  ease: "easeOut",
                }}
                viewport={{ once: false, amount: 0.3 }}
                className={`rounded-2xl overflow-hidden shadow-md border border-gray-200 ${
                  isSecond ? "bg-[#3D3A37] text-white" : "bg-white text-[#3D3A37]"
                }`}
              >
                {/* Image wrapper with padding and border */}
                <div
                  className={`p-3 rounded-t-2xl ${
                    isSecond ? "bg-[#3D3A37]" : "bg-white"
                  }`}
                >
                  <div className="relative w-full h-52 md:h-60 lg:h-66 rounded-xl overflow-hidden border">
                    <Image
                      src={property.image}
                      alt={property.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Card content */}
                <div className="p-6 md:p-8 space-y-4">
                  <h3 className="text-base sm:text-lg md:text-xl font-semibold">
                    {property.title}
                  </h3>
                  <div className="flex items-center gap-2 text-xs sm:text-sm md:text-base opacity-80">
                    {/* location icon */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 11c.828 0 1.5-.672 1.5-1.5S12.828 8 12 8s-1.5.672-1.5 1.5S11.172 11 12 11z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 22s8-4.5 8-11a8 8 0 10-16 0c0 6.5 8 11 8 11z"
                      />
                    </svg>
                    {property.location}
                  </div>

                  <div className="flex items-center gap-4 text-xs sm:text-sm md:text-base opacity-80">
                    <div className="flex items-center gap-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4 10h16M4 6h16M4 14h16M4 18h16"
                        />
                      </svg>
                      {property.beds}
                    </div>
                    <div>{property.area}</div>
                  </div>

                  <div className="pt-4 border-t border-gray-300/30 flex items-center justify-between">
                    <span className="text-base sm:text-lg md:text-xl font-bold">
                      {property.price}
                    </span>
                    <button
                      className={`px-6 py-3 rounded-full text-xs sm:text-sm md:text-base font-medium transition ${
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
        </div>
      </section>

      {/* ================= Video + Showcase Section ================= */}
      <section className="w-full bg-white py-20">
        <div className="container mx-auto px-4 flex flex-col items-center gap-16">
          {/* Video Card */}
          <div className="relative w-[300px] h-[180px] md:w-[500px] md:h-[280px] rounded-2xl overflow-hidden shadow-xl bg-black">
            <motion.div
              className="absolute inset-0 flex items-center z-0"
              initial={{ x: "100%" }}
              animate={{ x: "-100%" }}
              transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
            >
              <h1 className="text-white text-[20px] sm:text-[30px] md:text-[50px] font-bold whitespace-nowrap px-4">
                BOOK YOUR PROPERTY • BOOK YOUR PROPERTY • BOOK YOUR PROPERTY •
              </h1>
            </motion.div>

            <Image
              src="/images/elysium.svg"
              alt="Showcase"
              width={1200}
              height={600}
              className="w-full h-auto rounded-3xl object-cover shadow-lg"
            />
          </div>

          {/* Image Showcase */}
          <div className="w-full">
            <div className="p-[0%]">
              <Image
                src="/images/elysium.svg"
                alt="Showcase"
                width={1200}
                height={600}
                className="w-full h-auto rounded-3xl object-cover shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
