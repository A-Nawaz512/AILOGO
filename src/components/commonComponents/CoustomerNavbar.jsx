// src/components/ModernNavbar.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";
import logo from "../../assets/Logo (3).png";

const ModernNavbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const toggleMobile = () => setMobileOpen(!mobileOpen);
  const toggleServices = () => setServicesOpen(!servicesOpen);

  return (
    <nav className="bg-[#000000] text-gray-100 py-2 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center ">
          {/* Brand */}
          <Link
            to="/"
            className="text-3xl flex items-center h-auto w-auto"
          >
            <img
              src={logo}
              alt="Logo"
              className="h-10 w-auto lg:h-12 lg:w-auto"
            />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#DEB74B] via-[#F1C27D] to-[#FFD700] text-3xl font-semibold font-mono">
              AI LOGO
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <Link
              to="/"
              className="text-gray-100 hover:bg-[#6F4918] px-5 py-2 rounded font-medium transition-colors duration-300"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-gray-100 hover:bg-[#6F4918] px-5 py-2 rounded font-medium transition-colors duration-300"
            >
              About
            </Link>

            {/* Services Dropdown */}
            <div className="relative">
              <button
                onClick={toggleServices}
                className="flex items-center space-x-1 text-gray-100 hover:bg-[#6F4918] px-5 py-2 rounded font-medium transition-colors duration-300"
              >
                <span>Services</span>
                <svg
                  className={`w-4 h-4 ml-1 transform transition-transform duration-300 ${
                    servicesOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {servicesOpen && (
                <div className="absolute mt-2 w-48 bg-gray-800 border border-[#202020] rounded-lg shadow-lg py-2 animate-fadeIn">
                  <Link
                    to="/services/rides"
                    className="block px-4 py-2 text-gray-100 hover:bg-[#6F4918] rounded-md transition-colors duration-300"
                  >
                    Rides
                  </Link>
                  <Link
                    to="/services/deliveries"
                    className="block px-4 py-2 text-gray-100 hover:bg-[#6F4918] rounded-md transition-colors duration-300"
                  >
                    Deliveries
                  </Link>
                  <Link
                    to="/services/rentals"
                    className="block px-4 py-2 text-gray-100 hover:bg-[#6F4918] rounded-md transition-colors duration-300"
                  >
                    Rentals
                  </Link>
                  <Link
                    to="/services/apartments"
                    className="block px-4 py-2 text-gray-100 hover:bg-[#6F4918] rounded-md transition-colors duration-300"
                  >
                    Apartments
                  </Link>
                </div>
              )}
            </div>
            <Link
              to="/contact"
              className="text-gray-100 hover:bg-[#6F4918] px-5 py-2 rounded font-medium transition-colors duration-300"
            >
              Contact
            </Link>

            {/* Buttons */}
            <Link
              to="/signup"
              className="px-5 py-2 bg-gradient-to-r from-[#6F4918] via-[#6F4918] to-[#E2CF7D] text-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
            >
              Sign Up
            </Link>
            <Link
              to="/login"
              className="px-5 py-2 border-2 border-[#6F4918] text-white rounded-lg hover:bg-[#6F4918] transition-all duration-300"
            >
              Login
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobile}
              className="text-gray-100 hover:text-pink-400 focus:outline-none"
            >
              {mobileOpen ? <HiX size={28} /> : <HiMenu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-gray-900 border-t border-gray-700 shadow-lg animate-fadeIn">
          <Link
            to="/"
            className="block px-6 py-3 text-gray-100 hover:bg-gray-800 transition-colors duration-300"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="block px-6 py-3 text-gray-100 hover:bg-gray-800 transition-colors duration-300"
          >
            About
          </Link>
          <button
            onClick={toggleServices}
            className="w-full flex justify-between items-center px-6 py-3 text-gray-100 hover:bg-gray-800 transition-colors duration-300"
          >
            Services
            <span className="text-xl">{servicesOpen ? "-" : "+"}</span>
          </button>
          {servicesOpen && (
            <div className="pl-6 bg-gray-800">
              <Link
                to="/services/rides"
                className="block px-4 py-2 text-gray-100 hover:bg-pink-900 rounded-md transition-colors duration-300"
              >
                Rides
              </Link>
              <Link
                to="/services/deliveries"
                className="block px-4 py-2 text-gray-100 hover:bg-pink-900 rounded-md transition-colors duration-300"
              >
                Deliveries
              </Link>
              <Link
                to="/services/rentals"
                className="block px-4 py-2 text-gray-100 hover:bg-pink-900 rounded-md transition-colors duration-300"
              >
                Rentals
              </Link>
              <Link
                to="/services/apartments"
                className="block px-4 py-2 text-gray-100 hover:bg-pink-900 rounded-md transition-colors duration-300"
              >
                Apartments
              </Link>
            </div>
          )}

          <Link
            to="/signup"
            className="block mx-6 mt-3 px-5 py-2 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white rounded-lg shadow-md text-center hover:shadow-xl transition-all duration-300"
          >
            Sign Up
          </Link>

          <Link
            to="/login"
            className="block mx-6 my-3 px-5 py-2 border border-pink-500 text-pink-400 rounded-lg text-center hover:bg-gray-800 hover:text-pink-300 transition-all duration-300"
          >
            Login
          </Link>
        </div>
      )}
    </nav>
  );
};

export default ModernNavbar;
