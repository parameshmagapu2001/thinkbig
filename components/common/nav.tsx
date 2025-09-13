"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [showNav, setShowNav] = useState(true);

  // Prevent background scroll when menu is open
  useEffect(() => {
    if (open) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [open]);

  useEffect(() => {
    const handleScroll = () => {
      setShowNav(window.scrollY === 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Main navbar */}
      <nav
  className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300 ${
    showNav ? "translate-y-0" : "-translate-y-full"
  }`}
>
  <div className="flex justify-between items-center px-[9%] py-6 sm:py-10">
    {/* Logo */}
    <Link href="/" className="flex items-center">
      <Image
        src="/images/Logo .svg"
        alt="ThinkBig Logo"
        width={100}
        height={40}
        className="object-contain"
      />
    </Link>

    {/* Hamburger */}
    {/* <button
      onClick={() => setOpen(true)}
      className="flex items-center gap-3 bg-white rounded-full px-4 py-2 shadow-md"
    >
      <span className="text-xs sm:text-sm text-[#3D3A37] font-medium">Menu</span>
      <div className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-black">
        <Menu size={18} className="text-white sm:text-white" />
      </div>
    </button> */}
  </div>
</nav>


      {/* Fullscreen Overlay Menu */}
      {open && (
        <div className="fixed inset-0 z-50 flex p-2 sm:p-4">
          <div className="flex w-full h-full rounded-[2rem] overflow-hidden">
            {/* Left column */}
            <div className="w-2/3 bg-[#333333] text-white flex flex-col justify-between p-4 sm:p-10">
              <div>
                <ul className="flex flex-col space-y-4 sm:space-y-10 text-2xl sm:text-4xl md:text-5xl font-semibold tracking-wide">
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
                <div className="flex gap-3 sm:gap-6 mt-4 sm:mt-10 text-xl sm:text-2xl">
                  <Link href="https://facebook.com" target="_blank"><FaFacebookF /></Link>
                  <Link href="https://twitter.com" target="_blank"><FaTwitter /></Link>
                  <Link href="https://instagram.com" target="_blank"><FaInstagram /></Link>
                  <Link href="https://linkedin.com" target="_blank"><FaLinkedinIn /></Link>
                </div>

                <p className="text-sm sm:text-base md:text-lg leading-relaxed text-gray-300 max-w-md mt-4 sm:mt-6">
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
                className="absolute top-4 sm:top-6 right-4 sm:right-6 flex items-center gap-2 sm:gap-3 bg-white rounded-full px-3 py-1 sm:px-4 sm:py-2 shadow-md"
              >
                <span className="text-xs sm:text-sm text-[#3D3A37] font-medium">Close</span>
                <div className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-black">
                  <X size={18} className="text-white sm:text-white" />
                </div>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
