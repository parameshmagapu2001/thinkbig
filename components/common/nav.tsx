"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      <div className="flex justify-between items-center px-[9%] py-10">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/images/logo.svg"
            alt="ThinkBig Logo"
            width={160}
            height={50}
            className="object-contain"
          />
        </Link>

        {/* Hamburger */}
        <button
          onClick={() => setOpen(true)}
          className="flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-md"
        >
          <span className="text-sm text-[#3D3A37] font-medium">Menu</span>
          <Menu size={25} className="text-[#3D3A37]" />
        </button>
      </div>

      {/* Fullscreen Overlay Menu */}
      {open && (
        <div className="fixed inset-0 z-50 flex p-4">
          <div className="flex w-full h-full rounded-[2rem] overflow-hidden">
            {/* Left column */}
            <div className="w-2/3 bg-[#333333] text-white flex flex-col justify-between p-10">
              <div>
                <Image
                  src="/images/logo1.svg"
                  alt="ThinkBig Logo"
                  width={180}
                  height={60}
                  className="mb-12"
                />

                {/* Big navigation links */}
                <ul className="space-y-10 text-5xl md:text-6xl font-semibold tracking-wide">
                  <li>
                    <Link href="/" onClick={() => setOpen(false)}>Home</Link>
                  </li>
                  <li>
                    <Link href="/about" onClick={() => setOpen(false)}>About Us</Link>
                  </li>
                  <li>
                    <Link href="/buy" onClick={() => setOpen(false)}>Buy</Link>
                  </li>
                  <li>
                    <Link href="/contact" onClick={() => setOpen(false)}>Get to know us</Link>
                  </li>
                </ul>
              </div>

              <div>
                {/* Social Media Icons */}
                <div className="flex gap-6 mt-10 text-white text-2xl">
                  <Link href="https://facebook.com" target="_blank"><FaFacebookF /></Link>
                  <Link href="https://twitter.com" target="_blank"><FaTwitter /></Link>
                  <Link href="https://instagram.com" target="_blank"><FaInstagram /></Link>
                  <Link href="https://linkedin.com" target="_blank"><FaLinkedinIn /></Link>
                </div>

                <p className="text-base md:text-lg leading-relaxed text-gray-300 max-w-md mt-6">
                  Premium properties made easy: exceptional amenities, transparent
                  process, trusted partners
                </p>
              </div>
            </div>

            {/* Right column */}
            <div className="relative w-1/3">
              <Image
                src="/images/heroimg.svg"
                alt="Menu preview"
                fill
                className="object-cover"
              />
              <button
                onClick={() => setOpen(false)}
                className="absolute top-6 right-6 flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-md"
              >
                <span className="text-sm text-[#3D3A37] font-medium">Close</span>
                <X size={20} className="text-[#3D3A37]" />
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
