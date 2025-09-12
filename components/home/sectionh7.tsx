"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";

const clients = [
  {
    name: "Phani Krishna",
    location: "Hyderabad, Telangana",
    text: "We own both a shop and a flat in the city but couldn’t manage them effectively from afar. Their rental and commercial property management services helped us organize everything from tenants to repairs. Now both places are running smoothly without our constant involvement.",
    image: "/images/test1.svg",
  },
  {
    name: "Paramesh Magapu",
    location: "Hyderabad, Telangana",
    text: "An Managing both our residential and retail spaces was becoming overwhelming. Their rental and commercial property management services allowed us to streamline everything through one contact point. It's made life significantly easier. journey with outstanding service. Every update was timely and every promise kept, making the whole process smooth and stress-free.",
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
<section className="w-full min-h-[60vh]  flex flex-col justify-center px-10 py-16 bg-white">
  {/* Heading */}
  <motion.h1
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.2, ease: "easeOut" }} // faster
    viewport={{ once: false, amount: 0.31 }}
    className="text-[#3D3A37] text-lg md:text-xl mb-6"
  >
   TESTIMONIALS
  </motion.h1>

  {/* Testimonial */}
<div className="max-w-10xl text-justify  space-y-4">
  <AnimatePresence mode="wait">
    {clients[index].text.split("\n").map((line, lineIndex) => (
      <motion.p
        key={`${index}-${lineIndex}`}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.3 }}
        className="text-4xl md:text-5xl text-justify font-semibold leading-snug text-[#3D3A37]"
      >

          {line.split(" ").map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.2 }}
              viewport={{ once: false, amount: 0.3 }}
              className="inline-block mr-2" // extra spacing between words
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
    className="flex items-center mt-8 gap-8"
  >
    <Image
      src={clients[index].image}
      alt={clients[index].name}
      width={84}
      height={84}
      className="rounded-full object-cover"
    />
    <div>
      <p className="text-lg md:text-xl text-[#3D3A37] font-semibold">
        {clients[index].name}
      </p>
      <p className="text-[#3D3A37] text-base md:text-lg">
        {clients[index].location}
      </p>
    </div>
  </motion.div>

  {/* Arrows */}
  <div className="flex gap-6 mt-10">
    <button
      onClick={prevClient}
      className="group p-3 border border-black bg-white rounded-full shadow-sm hover:bg-black transition"
    >
      <ArrowLeft className="w-5 h-5 text-black group-hover:text-white" />
    </button>
    <button
      onClick={nextClient}
      className="group p-3 border border-black bg-white rounded-full shadow-sm hover:bg-black transition"
    >
      <ArrowRight className="w-5 h-5 text-black group-hover:text-white" />
    </button>
  </div>
</section>
      {/* ================== Call to Action Section ================== */}
      <section className="w-full min-h-[50vh] bg-white flex flex-col items-start justify-center px-8 py-15">
        {/* Small text */}
        <div className="space-y-2 mb-6">
          <p className="text-gray-700 text-2xl">Interested in premium properties?</p>
          <p className="text-gray-700 text-2xl">Reserve one by using our platform.</p>
        </div>

        {/* Large horizontal moving text */}
        <div className="overflow-hidden justify-center w-full">
          <motion.h1
            className="font-bold text-[#3d3a37] text-[120px] text-center whitespace-nowrap leading-none"
          >
            Book your property
          </motion.h1>
        </div>
      </section>
    </>
  );
}
