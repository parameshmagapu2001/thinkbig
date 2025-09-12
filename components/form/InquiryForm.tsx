"use client";

import React, { useState } from "react";

interface FormData {
  name: string;
  email: string;
  phone: string;
}

export default function InquiryForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    if (!formData.name || !formData.email || !formData.phone) {
      alert("Please fill in all fields");
      return;
    }

    alert("Inquiry sent successfully!");
    setFormData({ name: "", email: "", phone: "" });
  };

  return (
    <div className="bg-white text-[#3D3A37] p-6 sm:p-8 md:p-10 rounded-2xl max-w-md mx-auto shadow-lg">
      <h2 className="text-2xl sm:text-3xl font-semibold mb-6 text-center">
        Send an Inquiry
      </h2>
      <div className="space-y-6">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          placeholder="Enter Name"
          className="w-full border-b border-gray-300 pb-2 text-base sm:text-lg focus:outline-none focus:border-[#3D3A37] transition"
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="Enter Email"
          className="w-full border-b border-gray-300 pb-2 text-base sm:text-lg focus:outline-none focus:border-[#3D3A37] transition"
        />
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleInputChange}
          placeholder="Enter Phone Number"
          className="w-full border-b border-gray-300 pb-2 text-base sm:text-lg focus:outline-none focus:border-[#3D3A37] transition"
        />
        <button
          onClick={handleSubmit}
          className="mt-6 w-full px-6 py-3 bg-[#3D3A37] text-white rounded-full hover:opacity-90 transition text-base sm:text-lg"
        >
          Send Inquiry →
        </button>
      </div>
    </div>
  );
}
