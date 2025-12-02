import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaUser,
  FaPhone,
  FaEnvelope,
  FaLock,
  FaTag,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";

export default function Signup() {
  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
    referral: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  const inputClass =
    "w-full pl-10 pr-10 py-2 bg-white text-black border border-[#B78E3B] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#B78E3B]";

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-white">
      <div className="w-full max-w-md bg-white rounded-2xl border border-[#B78E3B]/40 overflow-hidden">
        
{/* HEADER */}
<div className="bg-[#0D0D0D] text-center py-6 px-6 relative">
  <h2 className="text-2xl font-semibold tracking-wide text-[#B78E3B]">
        CREATE YOUR ACCOUNT

  </h2>

  {/* Premium thin line */}
  <div className="border-t border-[#B78E3B]/30 w-11/12 mx-auto my-2"></div>

  <p className="text-sm text-white">
        Join us and start your journey today

  </p>
</div>



        {/* FORM */}
        <div className="p-8 transition-all duration-300 hover:shadow-[0_0_30px_#B78E3B]">
          <form onSubmit={handleSubmit} className="space-y-5">

            {/* Full Name */}
            <div className="relative">
              <label className="block text-sm font-medium text-[#B78E3B] mb-1">
                Full Name
              </label>
              <FaUser className="absolute left-3 top-[38px] text-[#B78E3B]" />
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
              <label className="block text-sm font-medium text-[#B78E3B] mb-1">
                Phone Number
              </label>
              <FaPhone className="absolute left-3 top-[38px] text-[#B78E3B]" />
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
              <label className="block text-sm font-medium text-[#B78E3B] mb-1">
                Email
              </label>
              <FaEnvelope className="absolute left-3 top-[38px] text-[#B78E3B]" />
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
              <label className="block text-sm font-medium text-[#B78E3B] mb-1">
                Password
              </label>
              <FaLock className="absolute left-3 top-[38px] text-[#B78E3B]" />
              <input
                name="password"
                type={showPassword ? "text" : "password"}
                required
                value={form.password}
                onChange={handleChange}
                className={inputClass}
                placeholder="Enter password"
              />
              <span
                className="absolute right-3 top-[38px] text-[#B78E3B] cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>

            {/* Confirm Password */}
            <div className="relative">
              <label className="block text-sm font-medium text-[#B78E3B] mb-1">
                Confirm Password
              </label>
              <FaLock className="absolute left-3 top-[38px] text-[#B78E3B]" />
              <input
                name="confirmPassword"
                type={showConfirmPassword ? "text" : "password"}
                required
                value={form.confirmPassword}
                onChange={handleChange}
                className={inputClass}
                placeholder="Re-enter password"
              />
              <span
                className="absolute right-3 top-[38px] text-[#B78E3B] cursor-pointer"
                onClick={() =>
                  setShowConfirmPassword(!showConfirmPassword)
                }
              >
                {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>

            {/* Referral */}
            <div className="relative">
              <label className="block text-sm font-medium text-[#B78E3B] mb-1">
                Referral Code (optional)
              </label>
              <FaTag className="absolute left-3 top-[38px] text-[#B78E3B]" />
              <input
                name="referral"
                type="text"
                value={form.referral}
                onChange={handleChange}
                className={inputClass}
                placeholder="Enter referral code"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-2 rounded-xl font-semibold text-white bg-[#B78E3B] hover:bg-[#b8924b] transition-all shadow-lg hover:shadow-[#B78E3B]/50"
            >
              Sign Up
            </button>
          </form>

          <p className="mt-6 text-center text-black text-sm">
            Already have an account?{" "}
            <Link to="/login" className="text-[#B78E3B] hover:underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
