import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaUser, FaPhone, FaEnvelope, FaLock, FaTag } from "react-icons/fa";

export default function ClientSignup() {
  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
    referral: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  // Shared input style
  const inputClass =
    "w-full pl-10 pr-4 py-2 bg-white text-black border border-[#9A7A3E] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#9A7A3E]";

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-white">
      <div className="w-full max-w-md bg-white rounded-2xl transition-all duration-300 hover:shadow-[0_0_30px_#9A7A3E] p-8 border border-[#9A7A3E]/40">
        <h1 className="text-3xl font-bold text-center mb-6 text-black tracking-wide">
          Create Your Account
        </h1>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Full Name */}
          <div className="relative">
            <label className="block text-sm font-medium text-[#D9B22C] mb-1">Full Name</label>
            <FaUser className="absolute left-3 top-[38px] text-[#D9B22C]" />
            <input
              name="fullName"
              type="text"
              required
              value={form.fullName}
              onChange={handleChange}
              className={inputClass}
              placeholder="Enter your full name"
            />
          </div>

          {/* Phone */}
          <div className="relative">
            <label className="block text-sm font-medium text-[#D9B22C] mb-1">Phone Number</label>
            <FaPhone className="absolute left-3 top-[38px] text-[#D9B22C]" />
            <input
              name="phone"
              type="tel"
              required
              value={form.phone}
              onChange={handleChange}
              className={inputClass}
              placeholder="Enter phone number"
            />
          </div>

          {/* Email */}
          <div className="relative">
            <label className="block text-sm font-medium text-[#D9B22C] mb-1">Email </label>
            <FaEnvelope className="absolute left-3 top-[38px] text-[#D9B22C]" />
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              className={inputClass}
              placeholder="Enter email"
            />
          </div>

          {/* Password */}
          <div className="relative">
            <label className="block text-sm font-medium text-[#D9B22C] mb-1">Password</label>
            <FaLock className="absolute left-3 top-[38px] text-[#D9B22C]" />
            <input
              name="password"
              type="password"
              required
              value={form.password}
              onChange={handleChange}
              className={inputClass}
              placeholder="Enter password"
            />
          </div>

          {/* Confirm Password */}
          <div className="relative">
            <label className="block text-sm font-medium text-[#D9B22C] mb-1">Confirm Password</label>
            <FaLock className="absolute left-3 top-[38px] text-[#D9B22C]" />
            <input
              name="confirmPassword"
              type="password"
              required
              value={form.confirmPassword}
              onChange={handleChange}
              className={inputClass}
              placeholder="Re-enter password"
            />
          </div>

          {/* Referral */}
          <div className="relative">
            <label className="block text-sm font-medium text-[#D9B22C] mb-1">Referral Code (optional)</label>
            <FaTag className="absolute left-3 top-[38px] text-[#D9B22C]" />
            <input
              name="referral"
              type="text"
              value={form.referral}
              onChange={handleChange}
              className={inputClass}
              placeholder="Enter referral code"
            />
          </div>

          {/* Signup Button */}
          <button
            type="submit"
            className="w-full py-2 rounded-xl font-semibold text-white bg-[#D9B22C] hover:bg-[#b8924b] transition-all shadow-lg hover:shadow-[#9A7A3E]/50"
          >
            Sign Up
          </button>
        </form>

        <p className="mt-6 text-center text-gray-700 text-sm">
          Already have an account?{" "}
          <Link to="/login" className="text-[#D9B22C] hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
