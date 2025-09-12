"use client";

import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    contactNumber: "",
    email: "",
    propertyType: "",
    howDidYouFindUs: "",
    agree: false,
  });

  const [successMsg, setSuccessMsg] = useState(false); // boolean to show/hide alert

  const isFormValid = () => {
    return (
      formData.firstName.trim() !== "" &&
      formData.lastName.trim() !== "" &&
      formData.contactNumber.trim() !== "" &&
      formData.email.trim() !== "" &&
      formData.propertyType.trim() !== "" &&
      formData.howDidYouFindUs.trim() !== "" &&
      formData.agree === true
    );
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    let newValue: string | boolean = value;
    if (type === "checkbox" && "checked" in e.target) {
      newValue = e.target.checked;
    }
    setFormData({
      ...formData,
      [name]: newValue,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!isFormValid()) {
      alert("Please fill all the fields properly.");
      return;
    }

    console.log("Form submitted:", formData);

    // Show success alert box
    setSuccessMsg(true);

    // Hide after 3 seconds
    setTimeout(() => setSuccessMsg(false), 3000);

    // Reset form
    setFormData({
      firstName: "",
      lastName: "",
      contactNumber: "",
      email: "",
      propertyType: "",
      howDidYouFindUs: "",
      agree: false,
    });
  };

  return (
    <div className="min-h-[100] flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-[#3D3A37] rounded-[57px] max-w-[1600px] w-full p-16 text-white flex flex-col lg:flex-row gap-16 min-h-[100px] relative">
        {/* Success Alert Box */}
        {successMsg && (
          <div className="absolute inset-0 flex items-center justify-center z-50">
            <div className="bg-white text-black text-center rounded-2xl shadow-xl w-[50%] md:w-[50%] h-[150px] flex flex-col items-center justify-center p-6">
              <h3 className="text-2xl font-bold mb-2">Success!</h3>
              <p className="text-lg">Details submitted successfully.</p>
            </div>
          </div>
        )}

        {/* Left Section */}
        <div className="flex-1">
          <h1 className="text-[130px] font-bold mb-6 mt-25 ml-10 leading-[1.0]">
            Contact <br /> Form
          </h1>
          <p className="text-[28px] mb-4 ml-13 leading-relaxed ">
            Ready to explore premium homes in <br /> Hyderabad? Share
            preferences via the <br />
            inquiry form; a property specialist will respond within 24 hours.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex-1 space-y-10 mt-30">
          <h2 className="text-[28px] font-semibold">
            1. Help us understand your preferences.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* First Name */}
            <div className="flex flex-col">
              <label className="text-gray-300 mb-2">First Name</label>
              <input
                type="text"
                name="firstName"
                placeholder="firstname"
                value={formData.firstName}
                onChange={handleChange}
                className="bg-transparent focus:bg-transparent border-b border-gray-400 focus:border-white focus:outline-none py-3 px-2 text-white"
                required
              />
            </div>

            {/* Last Name */}
            <div className="flex flex-col">
              <label className="text-gray-300 mb-2">Last Name</label>
              <input
                type="text"
                name="lastName"
                placeholder="lastname"
                value={formData.lastName}
                onChange={handleChange}
                className="bg-transparent focus:bg-transparent border-b border-gray-400 focus:border-white focus:outline-none py-3 px-2 text-white"
                required
              />
            </div>

            {/* Contact Number */}
            <div className="flex flex-col">
              <label className="text-gray-300 mb-2">Contact Number</label>
              <input
                type="text"
                name="contactNumber"
                placeholder="+91 000000"
                value={formData.contactNumber}
                onChange={handleChange}
                className="bg-transparent focus:bg-transparent border-b border-gray-400 focus:border-white focus:outline-none py-3 px-2 text-white"
                required
              />
            </div>

            {/* Email */}
            <div className="flex flex-col">
              <label className="text-gray-300 mb-2">Email</label>
              <input
                type="email"
                name="email"
                placeholder="example@email.com"
                value={formData.email}
                onChange={handleChange}
                className="bg-transparent focus:bg-transparent border-b border-gray-400 focus:border-white focus:outline-none py-3 px-2 text-white"
                required
              />
            </div>
          </div>

          {/* Property Type */}
          <div className="flex flex-col">
            <label className="text-gray-300 mb-2">Property Type</label>
            <select
              name="propertyType"
              value={formData.propertyType}
              onChange={handleChange}
              className="bg-transparent focus:bg-transparent border-b border-gray-400 focus:border-white focus:outline-none py-3 px-2 text-white"
              required
            >
              <option value="">Select Property Type</option>
              <option value="Luxury apartment">Luxury apartment</option>
              <option value="Villa">Villa</option>
              <option value="Plot">Plot</option>
            </select>
          </div>

          <h2 className="text-[28px] font-semibold">2. One more thing</h2>

          {/* How did you find us */}
          <div className="flex flex-col">
            <label className="text-gray-300 mb-2">
              Let us know how did you find us
            </label>
            <select
              name="howDidYouFindUs"
              value={formData.howDidYouFindUs}
              onChange={handleChange}
              className="bg-transparent focus:bg-transparent border-b border-gray-400 focus:border-white focus:outline-none py-3 px-2 text-white"
              required
            >
              <option value="">Select where you found us</option>
              <option value="Google">Google</option>
              <option value="Social Media">Social Media</option>
              <option value="Referral">Referral</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <label className="flex items-start space-x-3 text-gray-300">
            <input
              type="checkbox"
              name="agree"
              checked={formData.agree}
              onChange={handleChange}
              className="w-[25px] h-[22px] mt-1 bg-transparent border border-gray-400 rounded-[7px] appearance-none checked:bg-white checked:border-white focus:outline-none"
              required
            />
            <span>
              I agree to send my personal details to receive a proposal. These
              details won’t be used in any inappropriate way.
            </span>
          </label>

          <button
            type="submit"
            className={`${
              isFormValid()
                ? "bg-white text-black hover:bg-gray-200"
                : "bg-white text-gray-700 cursor-not-allowed"
            } px-8 py-1 rounded-full flex items-center space-x-3`}
            disabled={!isFormValid()}
          >
            <span>Send Inquiry</span>
            <img
              src="/images/arrow.svg"
              alt="arrow icon"
              className="w-8 h-13"
            />
          </button>
        </form>
      </div>
    </div>
  );
}
