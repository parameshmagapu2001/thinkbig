"use client";

import { Twitter, Instagram, Youtube } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="font-clash bg-white text-[#3D3A37] flex flex-col">
      {/* === Top Section === */}
      <header className="w-full px-4 sm:px-10 py-6 sm:py-10 flex justify-end items-center">
        {/* Nav Items - Right */}
        <nav className="flex space-x-3 sm:space-x-5 text-[16px] sm:text-[20px] md:text-[22px] font-medium">
          <Link href="/" className="underline hover:no-underline cursor-pointer">
            Home
          </Link>
          <Link href="/about" className="underline hover:no-underline cursor-pointer">
            About Us
          </Link>
          <Link href="/buy" className="underline hover:no-underline cursor-pointer">
            Buy
          </Link>
          <Link href="/contact" className="underline hover:no-underline cursor-pointer">
            Get to know us
          </Link>
        </nav>
      </header>

      {/* Social Row */}
      <div className="w-full px-4 sm:px-10 flex justify-start items-center py-2 sm:py-2">
        {/* Social icons - Left */}
        <div className="flex space-x-2">
          <div className="w-9 h-9 flex items-center justify-center rounded-full bg-black hover:bg-gray-800 transition">
            <Twitter size={16} className="text-white" />
          </div>
          <div className="w-9 h-9 flex items-center justify-center rounded-full bg-black hover:bg-gray-800 transition">
            <Instagram size={16} className="text-white" />
          </div>
          <div className="w-9 h-9 flex items-center justify-center rounded-full bg-black hover:bg-gray-800 transition">
            <Youtube size={16} className="text-white" />
          </div>
        </div>
      </div>

      {/* === Footer === */}
      <footer className="w-full px-4 sm:px-10 py-4 sm:py-6 flex flex-col md:flex-row justify-between items-center gap-4 sm:gap-6 text-[12px] sm:text-[13px] md:text-[14px]">
        {/* Center: Made by */}
        <p className="font-semibold text-left">
          Website made by —{" "}
          <a
            href="https://techgyinnovations.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:no-underline"
          >
            Tech<span className="text-red-600">G</span>y Innovations
          </a>
        </p>

        {/* Right: Copyright */}
        <p className="text-center">All rights reserved © 2025</p>
      </footer>

      {/* Thick Divider */}
      <hr className="border-t-4 border-gray-500 m-0" />
    </div>
  );
}
