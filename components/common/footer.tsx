"use client";

import { useState, useEffect, ChangeEvent, FormEvent } from "react";
import { Twitter, Instagram, Youtube, Facebook } from "lucide-react";
import Link from "next/link";

export default function Home() {
  // ===== Form State =====
  const [form, setForm] = useState({ full_name: "", phone: "", email: "", captcha: "" });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [loading, setLoading] = useState(false);
  const [captcha, setCaptcha] = useState({ a: 0, b: 0 });
  const [popup, setPopup] = useState(false);

  const generateCaptcha = () => {
    setCaptcha({
      a: Math.floor(Math.random() * 10),
      b: Math.floor(Math.random() * 10),
    });
  };

  useEffect(() => {
    generateCaptcha();
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const errs: { [key: string]: string } = {};
    if (!form.full_name.trim()) errs.full_name = "Name required";
    if (!/^\d{10}$/.test(form.phone)) errs.phone = "10-digit phone required";
    if (!/\S+@\S+\.\S+/.test(form.email)) errs.email = "Valid email required";

    const correctAnswer = captcha.a + captcha.b;
    if (parseInt(form.captcha) !== correctAnswer) errs.captcha = "Incorrect captcha answer";

    return errs;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    setLoading(true);
    setErrors({});

    try {
      await new Promise((res) => setTimeout(res, 1000)); // fake API
      setPopup(true);
      setForm({ full_name: "", phone: "", email: "", captcha: "" });
      generateCaptcha();
    } catch {
      alert("Submission failed, try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="font-clash bg-white text-[#3D3A37] flex flex-col">
      {/* === Enquiry Form Section (Now at Top) === */}
      {/* === Enquiry Form Section (Now at Top) === */}
<section className="bg-[#fffffff] px-4 sm:px-6 md:px-10 lg:px-20 pt-0 pb-14" id="form">
  <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
    {/* Left Content */}
    <div className="text-center md:text-left space-y-5">
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.7rem] font-medium text-black leading-tight">
        REACH OUT TO US
        <br />
      </h2>
      <p className="text-[#444] text-base leading-relaxed max-w-md mx-auto md:mx-0">
        Register your interest below and our team will reach to you
      </p>
    </div>


          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="w-full max-w-md mx-auto space-y-6 px-6 py-8 bg-[#f8f9fa] rounded-md shadow"
          >
            <input
              type="text"
              name="full_name"
              value={form.full_name}
              onChange={handleChange}
              placeholder="Full Name"
              className="w-full border-b border-gray-300 focus:border-black focus:ring-0 text-[16px] py-2"
            />
            {errors.full_name && <p className="text-red-500 text-sm">{errors.full_name}</p>}

            <div className="flex items-center border-b border-gray-300 focus-within:border-black">
              <span className="text-[18px] font-semibold text-black pr-3">+91</span>
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="Your Phone Number*"
                className="flex-1 border-none focus:ring-0 text-[16px] py-2"
              />
            </div>
            {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}

            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email Address"
              className="w-full border-b border-gray-300 focus:border-black focus:ring-0 text-[16px] py-2"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

            <div>
              <label className="block text-sm text-black mb-1">
                What is {captcha.a} + {captcha.b}?
              </label>
              <input
                type="text"
                name="captcha"
                value={form.captcha}
                onChange={handleChange}
                placeholder="Enter answer"
                className="w-full border-b border-gray-300 focus:border-black focus:ring-0 text-[16px] py-2"
              />
              {errors.captcha && <p className="text-red-500 text-sm">{errors.captcha}</p>}
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#ecc482] hover:bg-[#e2b56d] text-black font-semibold text-[17px] py-3 rounded-full shadow-md transition-all"
            >
              {loading ? "Submitting..." : "Enquire Now"}
            </button>
          </form>
        </div>
      </section>

      {/* === Navigation Hyperlinks (Moved Down) === */}
      {/* <header className="w-full px-4 sm:px-10 py-6 sm:py-10 flex justify-end items-center">
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
      </header> */}

      {/* === Social Row ===
      <div className="w-full px-4 sm:px-10 flex justify-start items-center py-2">
        <div className="flex space-x-2">
          <a href="https://www.facebook.com/ThinkBigPropertyManagement/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 flex items-center justify-center rounded-full bg-black hover:bg-gray-800 transition">
            <Facebook size={16} className="text-white" />
          </a>
          <a href="https://www.instagram.com/thinkbigproperty_management/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 flex items-center justify-center rounded-full bg-black hover:bg-gray-800 transition">
            <Instagram size={16} className="text-white" />
          </a>
          <a href="https://www.youtube.com/@ThinkBigPropertyManagement/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 flex items-center justify-center rounded-full bg-black hover:bg-gray-800 transition">
            <Youtube size={16} className="text-white" />
          </a>
         
        </div>
      </div> */}

      {/* === Social + Contact Row === */}
<section className="w-full px-4 sm:px-10 py-6 sm:py-10 text-[14px] sm:text-[15px] md:text-[16px]">
  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
    {/* Social Icons */}
    <div className="flex space-x-2 mb-4 sm:mb-0">
      <a href="https://www.facebook.com/ThinkBigPropertyManagement/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 flex items-center justify-center rounded-full bg-black hover:bg-gray-800 transition">
        <Facebook size={16} className="text-white" />
      </a>
      <a href="https://www.instagram.com/thinkbigproperty_management/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 flex items-center justify-center rounded-full bg-black hover:bg-gray-800 transition">
        <Instagram size={16} className="text-white" />
      </a>
      <a href="https://www.youtube.com/@ThinkBigPropertyManagement/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 flex items-center justify-center rounded-full bg-black hover:bg-gray-800 transition">
        <Youtube size={16} className="text-white" />
      </a>
      <a href="https://twitter.com/ThinkBigPropMgmt" target="_blank" rel="noopener noreferrer" className="w-9 h-9 flex items-center justify-center rounded-full bg-black hover:bg-gray-800 transition">
        <Twitter size={16} className="text-white" />
      </a>
    </div>

    {/* Address */}
    <div className="space-y-3 text-right max-w-xl">
      <p>
        <span className="font-semibold">Address:</span> 3rd floor, Raichandani Kokapet One, Unit 302,
        Narsingi, Gandipet, Hyderabad, Telangana 500075
      </p>
      <p>
        <span className="font-semibold">Phone:</span>{" "}
        <a href="tel:8880198880" className="underline">8880 19 8880</a>,{" "}
        <a href="tel:9133223366" className="underline">9133 22 3366</a>
      </p>
      <p>
        <span className="font-semibold">Email:</span>{" "}
        <a href="mailto:sales@thinkbigpropmgmt.in" className="underline">
          sales@thinkbigpropmgmt.in
        </a>
      </p>
    </div>
  </div>
</section>


      {/* === Popup Modal === */}
      {popup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-lg font-semibold mb-4">✅ Submitted!</h3>
            <button
              onClick={() => setPopup(false)}
              className="px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* === Contact Info ===
      <section className="w-full px-4 sm:px-10 py-6 sm:py-10 text-[14px] sm:text-[15px] md:text-[16px]">
  <div className="flex justify-end">
    <div className="space-y-3 text-right max-w-xl">
      <p>
        <span className="font-semibold">Address:</span> 3rd floor, Raichandani Kokapet One, Unit 302,
        Narsingi, Gandipet, Hyderabad, Telangana 500075
      </p>
      <p>
        <span className="font-semibold">Phone:</span>{" "}
        <a href="tel:8880198880" className="underline">8880 19 8880</a>,{" "}
        <a href="tel:9133223366" className="underline">9133 22 3366</a>
      </p>
      <p>
        <span className="font-semibold">Email:</span>{" "}
        <a href="mailto:sales@thinkbigpropmgmt.in" className="underline">
          sales@thinkbigpropmgmt.in
        </a>
      </p>
    </div>
  </div>
</section> */}


      {/* === Footer === */}
      <footer className="w-full px-4 sm:px-10 py-4 sm:py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-[12px] sm:text-[13px] md:text-[14px]">
        <p className="font-semibold">
          Website made by —{" "}
          <a href="https://techgyinnovations.com/" target="_blank" rel="noopener noreferrer" className="underline">
            Tech<span className="text-red-600">G</span>y Innovations
          </a>
        </p>
        <p>All rights reserved © 2025</p>
      </footer>

      <hr className="border-t-4 border-gray-500 m-0" />
    </div>
  );
}
