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
    <div className="min-h-[100vh] flex items-center justify-center bg-gray-100 p-4">
  <div className="bg-[#3D3A37] rounded-[57px] max-w-[1600px] w-full 
            p-8 md:p-24 text-white flex flex-col lg:flex-row gap-8 lg:gap-16 relative
            pt-32 sm:pt-20 lg:pt-32">


    {/* Success Alert Box */}
    {successMsg && (
      <div className="absolute inset-0 flex items-center justify-center z-50">
        <div className="bg-white text-black text-center rounded-2xl shadow-xl w-[90%] sm:w-[70%] md:w-[50%] h-[150px] flex flex-col items-center justify-center p-4 sm:p-6">
          <h3 className="text-xl sm:text-2xl font-bold mb-2">Success!</h3>
          <p className="text-sm sm:text-lg">Details submitted successfully.</p>
        </div>
      </div>
    )}

    {/* Left Section */}
    <div className="flex-1 mb-8 lg:mb-0">
      <h1 className="text-5xl sm:text-7xl lg:text-[130px] font-bold mb-4 sm:mb-6 leading-tight">
        Contact <br /> Form
      </h1>
      <p className="text-base sm:text-xl lg:text-[28px] mb-4 leading-relaxed">
        Ready to explore premium homes in <br /> Hyderabad? Share
        preferences via the <br />
        inquiry form; a property specialist will respond within 24 hours.
      </p>
    </div>

    <form onSubmit={handleSubmit} className="flex-1 space-y-6 sm:space-y-10">
      <h2 className="text-lg sm:text-xl lg:text-[28px] font-semibold">
        1. Help us understand your preferences.
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8">
        {/* First Name */}
        <div className="flex flex-col">
          <label className="text-gray-300 mb-1 sm:mb-2 text-sm sm:text-base">First Name</label>
          <input
            type="text"
            name="firstName"
            placeholder="firstname"
            value={formData.firstName}
            onChange={handleChange}
            className="bg-transparent focus:bg-transparent border-b border-gray-400 focus:border-white focus:outline-none py-2 sm:py-3 px-2 text-white text-sm sm:text-base"
            required
          />
        </div>

        {/* Last Name */}
        <div className="flex flex-col">
          <label className="text-gray-300 mb-1 sm:mb-2 text-sm sm:text-base">Last Name</label>
          <input
            type="text"
            name="lastName"
            placeholder="lastname"
            value={formData.lastName}
            onChange={handleChange}
            className="bg-transparent focus:bg-transparent border-b border-gray-400 focus:border-white focus:outline-none py-2 sm:py-3 px-2 text-white text-sm sm:text-base"
            required
          />
        </div>

        {/* Contact Number */}
        <div className="flex flex-col">
          <label className="text-gray-300 mb-1 sm:mb-2 text-sm sm:text-base">Contact Number</label>
          <input
            type="text"
            name="contactNumber"
            placeholder="+91 000000"
            value={formData.contactNumber}
            onChange={handleChange}
            className="bg-transparent focus:bg-transparent border-b border-gray-400 focus:border-white focus:outline-none py-2 sm:py-3 px-2 text-white text-sm sm:text-base"
            required
          />
        </div>

        {/* Email */}
        <div className="flex flex-col">
          <label className="text-gray-300 mb-1 sm:mb-2 text-sm sm:text-base">Email</label>
          <input
            type="email"
            name="email"
            placeholder="example@email.com"
            value={formData.email}
            onChange={handleChange}
            className="bg-transparent focus:bg-transparent border-b border-gray-400 focus:border-white focus:outline-none py-2 sm:py-3 px-2 text-white text-sm sm:text-base"
            required
          />
        </div>
      </div>

      {/* Property Type */}
      <div className="flex flex-col">
        <label className="text-gray-300 mb-1 sm:mb-2 text-sm sm:text-base">Property Type</label>
        <select
          name="propertyType"
          value={formData.propertyType}
          onChange={handleChange}
          className="bg-transparent focus:bg-transparent border-b border-gray-400 focus:border-white focus:outline-none py-2 sm:py-3 px-2 text-white text-sm sm:text-base"
          required
        >
          <option value="">Select Property Type</option>
          <option value="Luxury apartment">Luxury apartment</option>
          <option value="Villa">Villa</option>
          <option value="Plot">Plot</option>
        </select>
      </div>

      <h2 className="text-lg sm:text-xl lg:text-[28px] font-semibold">2. One more thing</h2>

      {/* How did you find us */}
      <div className="flex flex-col">
        <label className="text-gray-300 mb-1 sm:mb-2 text-sm sm:text-base">
          Let us know how did you find us
        </label>
        <select
          name="howDidYouFindUs"
          value={formData.howDidYouFindUs}
          onChange={handleChange}
          className="bg-transparent focus:bg-transparent border-b border-gray-400 focus:border-white focus:outline-none py-2 sm:py-3 px-2 text-white text-sm sm:text-base"
          required
        >
          <option value="">Select where you found us</option>
          <option value="Google">Google</option>
          <option value="Social Media">Social Media</option>
          <option value="Referral">Referral</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <label className="flex items-start space-x-2 sm:space-x-3 text-gray-300 text-sm sm:text-base">
        <input
          type="checkbox"
          name="agree"
          checked={formData.agree}
          onChange={handleChange}
          className="w-5 h-5 sm:w-[25px] sm:h-[22px] mt-1 bg-transparent border border-gray-400 rounded-[7px] appearance-none checked:bg-white checked:border-white focus:outline-none"
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
        } px-6 sm:px-8 py-2 sm:py-3 rounded-full flex items-center space-x-2 sm:space-x-3 text-sm sm:text-base`}
        disabled={!isFormValid()}
      >
        <span>Send Inquiry</span>
        <img src="/images/arrow.svg" alt="arrow icon" className="w-6 sm:w-8 h-6 sm:h-8" />
      </button>
    </form>
  </div>
</div>

  );
}
