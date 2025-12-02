import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaPhone, FaLock } from "react-icons/fa";
import { IoEye, IoEyeOff } from "react-icons/io5";

export default function Login() {
  const [form, setForm] = useState({
    phone: "",
    password: "",
    remember: false,
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  const inputClass =
    "w-full pl-10 pr-10 py-2 bg-white text-black border border-[#B78E3B] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#9A7A3E]";

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-5">
      <div className="w-full max-w-md bg-white rounded-2xl border border-[#B78E3B]/40 overflow-hidden">

{/* HEADER */}
<div className="bg-[#0D0D0D] text-center py-6 px-6 relative">
  <h2 className="text-2xl font-semibold tracking-wide text-[#B78E3B]">
    WELCOME BACK
  </h2>

  {/* Premium thin line */}
  <div className="border-t border-[#B78E3B]/30 w-11/12 mx-auto my-2"></div>

  <p className="text-sm text-white">
    Sign in to your account
  </p>
</div>



        {/* FORM CONTAINER */}
        <div className="p-8 transition-all duration-300 hover:shadow-[0_0_25px_#B78E3B]">
          <form onSubmit={handleSubmit} className="space-y-5">

            {/* Phone Number */}
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

              {/* Eye toggle */}
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-[36px] text-[#B78E3B]"
              >
                {showPassword ? (
                  <IoEyeOff size={20} />
                ) : (
                  <IoEye size={20} />
                )}
              </button>
            </div>

            {/* Remember Me + Forgot */}
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 text-[#B78E3B]">
                <input
                  name="remember"
                  type="checkbox"
                  checked={form.remember}
                  onChange={handleChange}
                  className="h-4 w-4 rounded border-[#B78E3B] text-[#B78E3B] focus:ring-[#B78E3B]"
                />
                Remember Me
              </label>

              <a href="#" className="text-[#B78E3B] hover:underline">
                Forgot Password?
              </a>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full py-2 rounded-xl font-semibold text-white bg-[#B78E3B] hover:bg-[#b8924b] transition-all shadow-lg hover:shadow-[#9A7A3E]/50"
            >
              Login
            </button>
          </form>

          <p className="mt-6 text-center text-black text-sm">
            Don’t have an account?{" "}
            <Link to="/signup" className="text-[#B78E3B] hover:underline">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
