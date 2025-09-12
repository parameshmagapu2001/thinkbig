"use client";

import { Twitter, Instagram, Youtube } from "lucide-react";

export default function Home() {
  return (
    <div className="font-clash min-h-screen bg-white flex flex-col justify-between text-black">
      {/* === Top Section === */}
      <header className="w-full px-6 sm:px-10 py-4 flex flex-col md:flex-row justify-between items-start md:items-center">
        {/* Left Text */}
        <div className="max-w-m text-[17px] sm:text-[19px] md:text-[20px] leading-relaxed mb-3 md:mb-0">
          Hyderabad’s finest properties,
          <br />
          elevated by concierge-level service
          <br />
          from search to handover.
        </div>

        {/* Right Nav */}
        <nav className="md:text-right space-y-3 sm:space-y-2 text-[25px] sm:text-[26px] md:text-[28px] font-medium">
          <p className="hover:text-gray-700 cursor-pointer">Home</p>
          <p className="hover:text-gray-700 cursor-pointer">About Us</p>
          <p className="hover:text-gray-700 cursor-pointer">Buy</p>
          <p className="hover:text-gray-700 cursor-pointer">Get to know us</p>
        </nav>
      </header>

      {/* Sub tagline row */}
      <div className="w-full px-6 sm:px-10 flex flex-col md:flex-row justify-between items-center py-4">
        {/* Social icons */}
        <div className="flex space-x-3 mb-3 md:mb-0">
          <div className="w-11 h-11 flex items-center justify-center rounded-full bg-black hover:bg-gray-800 transition">
            <Twitter size={18} className="text-white" />
          </div>
          <div className="w-11 h-11 flex items-center justify-center rounded-full bg-black hover:bg-gray-800 transition">
            <Instagram size={18} className="text-white" />
          </div>
          <div className="w-11 h-11 flex items-center justify-center rounded-full bg-black hover:bg-gray-800 transition">
            <Youtube size={18} className="text-white" />
          </div>
        </div>

        {/* Right small tagline */}
        <p className="text-[15px] sm:text-[16px] md:text-[17px] max-w-lg text-center md:text-right leading-relaxed">
          Premium properties made easy: exceptional amenities,
          <br />
          transparent process, trusted partners
        </p>
      </div>

      {/* Divider */}
      <hr className="border-t border-gray-400 my-4 md:my-6" />

      {/* Hero Text */}
      <main className="px-6 sm:px-10 py-8 flex justify-center md:justify-center">
        <h1 className="font-bold leading-tight text-[#3D3A37] text-center text-[190px] sm:text-[110px] md:text-[140px] lg:text-[220px] tracking-tight">
          Think Big
        </h1>
      </main>

      {/* Footer */}
      <footer className="w-full px-6 sm:px-10 py-4 flex flex-col md:flex-row justify-between text-[13px] sm:text-[14px] md:text-[15px] text-center md:text-left">
        <p>Website made by — TechGy Innovations</p>
        <p>All rights reserved © 2025</p>
      </footer>
    </div>
  );
}
