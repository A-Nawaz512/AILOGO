// src/components/ModernNavbar.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";
import logo from "../../assets/AIlogo.png";

const ModernNavbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const toggleMobile = () => setMobileOpen(!mobileOpen);
  const toggleServices = () => setServicesOpen(!servicesOpen);

  return (
    <nav className="bg-black text-gray-100 py-3 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Brand */}
          <Link to="/" className="flex items-center space-x-2">
            <img
              src={logo}
              alt="Logo"
              className="h-15 w-auto lg:h-15 lg:w-auto"
            />
            {/* <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#DEB74B] via-[#F1C27D] to-[#FFD700] text-3xl font-semibold font-mono">
              AI LOGO
            </span> */}
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              to="/"
              className="px-4 py-2 rounded font-medium transition-all duration-300 hover:bg-[#6F4918]"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="px-4 py-2 rounded font-medium transition-all duration-300 hover:bg-[#6F4918]"
            >
              About
            </Link>

            {/* SERVICES DROPDOWN */}
            <div className="relative">
              <button
                onClick={toggleServices}
                className="px-4 py-2 rounded flex items-center space-x-1 font-medium transition-all duration-300 hover:bg-[#6F4918]"
              >
                <span>Services</span>
                <span>{servicesOpen ? <FaCaretUp /> : <FaCaretDown />}</span>
              </button>

              {servicesOpen && (
                <div className="absolute mt-2 w-52 py-6 bg-black border border-[#202020] rounded-lg shadow-lg animate-fadeIn">
                  {[
                    { label: "Rides", path: "/services/rides" },
                    { label: "Deliveries", path: "/services/deliveries" },
                    { label: "Rentals", path: "/services/rentals" },
                    { label: "Apartments", path: "/services/apartments" },
                  ].map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className="block px-4 py-2 text-gray-100 rounded-md transition-all duration-300 hover:bg-[#6F4918]"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="/contact"
              className="px-4 py-2 rounded font-medium transition-all duration-300 hover:bg-[#6F4918]"
            >
              Contact
            </Link>
          </div>

          {/* AUTH BUTTONS */}
          <div className="hidden md:flex space-x-4">
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

          {/* MOBILE TOGGLE */}
          <button
            onClick={toggleMobile}
            className="md:hidden text-gray-100 hover:text-[#FFD700] transition-all duration-300"
          >
            {mobileOpen ? <HiX size={32} /> : <HiMenu size={32} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {mobileOpen && (
        <div className="md:hidden bg-black border-t border-[#202020] py-4 space-y-2 animate-fadeIn">
          <Link to="/" className="block px-6 py-2 hover:bg-[#6F4918] transition-all duration-300 rounded">
            Home
          </Link>

          <Link to="/about" className="block px-6 py-2 hover:bg-[#6F4918] transition-all duration-300 rounded">
            About
          </Link>

          <button
            onClick={toggleServices}
            className="w-full text-left px-6 py-2 flex justify-between items-center hover:bg-[#6F4918] transition-all duration-300 rounded"
          >
            Services
            <span>{servicesOpen ? "▲" : "▼"}</span>
          </button>

          {servicesOpen && (
            <div className="ml-6 space-y-2 animate-fadeIn">
              <Link to="/services/rides" className="block px-6 py-2 hover:bg-[#6F4918] rounded">
                Rides
              </Link>
              <Link to="/services/deliveries" className="block px-6 py-2 hover:bg-[#6F4918] rounded">
                Deliveries
              </Link>
              <Link to="/services/rentals" className="block px-6 py-2 hover:bg-[#6F4918] rounded">
                Rentals
              </Link>
              <Link to="/services/apartments" className="block px-6 py-2 hover:bg-[#6F4918] rounded">
                Apartments
              </Link>
            </div>
          )}

          <Link to="/contact" className="block px-6 py-2 hover:bg-[#6F4918] transition-all duration-300 rounded">
            Contact
          </Link>

          <div className="px-6 space-y-3 pt-4">
            <Link
              to="/signup"
              className="block text-center px-5 py-2 bg-gradient-to-r from-[#6F4918] to-[#E2CF7D] text-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
            >
              Sign Up
            </Link>
            <Link
              to="/login"
              className="block text-center px-5 py-2 border-2 border-[#6F4918] text-white rounded-lg hover:bg-[#6F4918] transition-all duration-300"
            >
              Login
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default ModernNavbar;
