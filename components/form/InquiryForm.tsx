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
    <div className="bg-white text-[#3D3A37] p-6 rounded-xl">
      <div className="space-y-4">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          placeholder="Enter Name"
          className="w-full border-b border-gray-300 pb-2 focus:outline-none"
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="Enter Email"
          className="w-full border-b border-gray-300 pb-2 focus:outline-none"
        />
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleInputChange}
          placeholder="Enter Phone Number"
          className="w-full border-b border-gray-300 pb-2 focus:outline-none"
        />
        <button
          onClick={handleSubmit}
          className="mt-4 w-full px-6 py-3 bg-[#3D3A37] text-white rounded-full hover:opacity-90 transition"
        >
          Send Inquiry →
        </button>
      </div>
    </div>
  );
}
