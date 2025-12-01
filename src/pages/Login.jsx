import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaPhone, FaLock } from "react-icons/fa";

export default function ClientLogin() {
  const [form, setForm] = useState({
    phone: "",
    password: "",
    remember: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  const inputClass =
    "w-full pl-10 pr-4 py-2 bg-white text-black border border-[#9A7A3E] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#9A7A3E]";

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl hover:shadow-[0_0_25px_#9A7A3E] transition-all p-8 border border-[#9A7A3E]/40">
        <h1 className="text-3xl font-bold text-center mb-6 text-black tracking-wide">
          Welcome Back
        </h1>

        <form onSubmit={handleSubmit} className="space-y-5">

          {/* Phone Number */}
          <div className="relative">
            <label className="block text-sm font-medium text-[#9A7A3E] mb-1">
              Phone Number
            </label>
            <FaPhone className="absolute left-3 top-[38px] text-[#9A7A3E]" />
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

          {/* Password */}
          <div className="relative">
            <label className="block text-sm font-medium text-[#9A7A3E] mb-1">
              Password
            </label>
            <FaLock className="absolute left-3 top-[38px] text-[#9A7A3E]" />
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

          {/* Remember Me */}
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 text-[#9A7A3E]">
              <input
                name="remember"
                type="checkbox"
                checked={form.remember}
                onChange={handleChange}
                className="h-4 w-4 rounded border-[#9A7A3E] text-[#9A7A3E] focus:ring-[#9A7A3E]"
              />
              Remember Me
            </label>

            <a href="#" className="text-[#9A7A3E] hover:underline">
              Forgot Password?
            </a>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full py-2 rounded-xl font-semibold text-white bg-[#9A7A3E] hover:bg-[#b8924b] transition-all shadow-lg hover:shadow-[#9A7A3E]/50"
          >
            Login
          </button>
        </form>

        <p className="mt-6 text-center text-gray-700 text-sm">
          Don’t have an account?{" "}
          <Link to="/signup" className="text-[#9A7A3E] hover:underline">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}
