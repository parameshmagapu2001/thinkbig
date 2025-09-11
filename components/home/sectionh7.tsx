"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";

const clients = [
  {
    name: "Markus Simpson",
    location: "Hyderabad, Telangana",
    text: "From the first shortlist to handover, the experience stayed seamless—clear updates, transparent costs, and a villa that matched every requirement.",
    image: "/images/markus.svg",
  },
  {
    name: "Sophia Allen",
    location: "Hyderabad, Telangana",
    text: "An amazing journey with outstanding service. Every update was timely and every promise kept, making the whole process smooth and stress-free.",
    image: "/images/markus.svg",
  },
  {
    name: "Rohan Mehta",
    location: "Hyderabad, Telangana",
    text: "The attention to detail and the transparent process impressed us. We found our dream villa without hassle and with complete clarity.",
    image: "/client.jpg",
  },
  {
    name: "Emily Carter",
    location: "Hyderabad, Telangana",
    text: "Professional and reliable throughout. From day one till the handover, it felt effortless and absolutely trustworthy.",
    image: "/client.jpg",
  },
  {
    name: "David Johnson",
    location: "Hyderabad, Telangana",
    text: "Seamless experience, clear updates, and great support throughout. Truly a stress-free property buying journey.",
    image: "/client.jpg",
  },
];

export default function Page() {
  const [index, setIndex] = useState(0);

  const nextClient = () => setIndex((prev) => (prev + 1) % clients.length);
  const prevClient = () => setIndex((prev) => (prev - 1 + clients.length) % clients.length);

  return (
    <>
      {/* ================== Testimonials Section ================== */}
      <section className="w-full min-h-[60vh] flex flex-col justify-center px-20 py-10 bg-white">
        {/* Heading */}
        <h1 className="text-[#3D3A37] text-base mb-4">Do our clients like us?</h1>

        {/* Testimonial */}
        <div className="max-w-5xl">
          <AnimatePresence mode="wait">
            <motion.p
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-2xl md:text-4xl font-medium leading-snug text-[#3D3A37]"
            >
              {clients[index].text}
            </motion.p>
          </AnimatePresence>
        </div>

        {/* Client info */}
        <div className="flex items-center mt-6 gap-6">
          <motion.div
            key={`image-${index}`}
            initial={{ x: -60, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -60, opacity: 0 }}
            transition={{ type: "spring", stiffness: 120, damping: 12 }}
            className="flex-shrink-0"
          >
            <Image
              src={clients[index].image}
              alt={clients[index].name}
              width={50}
              height={50}
              className="rounded-full object-cover"
            />
          </motion.div>
          <div>
            <p className="text-base text-[#3D3A37] font-semibold">{clients[index].name}</p>
            <p className="text-[#3D3A37] text-sm">{clients[index].location}</p>
          </div>
        </div>

        {/* Arrows */}
        <div className="flex gap-5 mt-8">
          <button
            onClick={prevClient}
            className="group p-2 border border-black bg-white rounded-full shadow-sm hover:bg-black transition"
          >
            <ArrowLeft className="w-4 h-4 text-black group-hover:text-white" />
          </button>
          <button
            onClick={nextClient}
            className="group p-2 border border-black bg-white rounded-full shadow-sm hover:bg-black transition"
          >
            <ArrowRight className="w-4 h-4 text-black group-hover:text-white" />
          </button>
        </div>
      </section>

      {/* ================== Hero Section ================== */}
      <section className="relative w-full h-[85vh] bg-white flex items-center justify-center">
        {/* Rounded Border Frame */}
        <div className="absolute inset-0 p-[4%]">
          <div
            className="relative w-full h-full border-[5px] border-white rounded-[1.5rem] overflow-hidden bg-cover bg-center"
            style={{ backgroundImage: "url('/images/p1.svg')" }}
          >
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/20"></div>

            {/* Content Inside */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
              {/* Logo */}
              <div className="absolute top-6 left-8">
                <Image
                  src="/images/logo1.svg"
                  alt="Logo"
                  width={120}
                  height={70}
                  className="object-contain"
                />
              </div>

              {/* ===== Center Large Text (middle of image) ===== */}
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
                Think Big Property <br /> Management
              </h1>

              {/* CTA + Subtext */}
              <div className="absolute bottom-6 left-8 w-[90%]">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  {/* Left side heading */}
                  <h2 className="text-lg md:text-xl font-bold md:w-1/2 leading-snug text-left">
                    Discover Your <br /> Dream House!
                  </h2>

                  {/* Right side paragraph */}
                  <p className="text-xs md:text-sm md:w-1/2 leading-relaxed text-right">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                  </p>
                </div>
              </div>
            </div>
          </div>
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
        <div className="overflow-hidden w-full">
          <motion.h1
            className="font-bold text-[#3d3a37] text-[190px] whitespace-nowrap leading-none"
            initial={{ x: "100%" }}
            animate={{ x: "-100%" }}
            transition={{
              repeat: Infinity,
              duration: 10,
              ease: "linear",
            }}
          >
            Book your property
          </motion.h1>
        </div>
      </section>
    </>
  );
}
