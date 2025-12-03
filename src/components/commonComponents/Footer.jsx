// Footer.jsx
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";
import { PiGreaterThanBold } from "react-icons/pi";
import { FaPhoneAlt } from "react-icons/fa";

const Footer = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  const currentYear = new Date().getFullYear();

  const companyLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
  ];

  const services = [
    { name: "VTC Rides", href: "" },
    { name: "Vehicle Rental", href: "" },
    { name: "Apartment Rental", href: "" },
    { name: "Food Delivery", href: "" },
    { name: "Courier / Delivery", href: "" },
    { name: "Roadside Assistance", href: "" },
  ];

  const socialLinks = [
    { icon: FaFacebookF, href: "https://facebook.com", label: "Facebook" },
    { icon: FaTwitter, href: "https://twitter.com", label: "Twitter" },
    { icon: FaInstagram, href: "https://instagram.com", label: "Instagram" },
    { icon: FaWhatsapp, href: "https://wa.me/", label: "WhatsApp" },
  ];

  return (
    <div className="bg-white">
      <footer className="bg-black text-white relative overflow-hidden border-t-5 border-[#CEAA36]">
        {/* LIGHT GOLD GRADIENT TOP BORDER */}
        <div className="w-full bg-gradient-to-r from-[#734D1C] via-[#BCA25B] to-[#734D1C]"></div>

        <div className="relative px-8 py-15 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-14">
          {/* Brand */}
          <div data-aos="fade-up" className="space-y-4">
            <img
              src="/ailogo.png"
              alt="Logo"
              className="h-10 w-auto lg:h-18 w-18 bg-black-400/20 shadow-sm shadow-[#755023] rounded-lg"
            />
            <p className="text-white/80 text-md leading-relaxed">
              All-in-one platform for Rides, Rentals, Food Delivery, Apartments
              & Roadside Assistance.
            </p>
            <p className="text-[#CEAA36] text-sm font-semibold animate-pulse">
              ★ Premium Services – 24/7 Available
            </p>
          </div>

          {/* Quick Links */}
          <div data-aos="fade-right" data-aos-delay="150">
            <h3 className="text-lg font-bold mb-6 uppercase tracking-wider text-[#CEAA36] border-b border-[#CEAA36]/30 pb-2">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {companyLinks.map((link, index) => (
                <li key={index}>
                  <motion.a
                    href={link.href}
                    className="text-white/70 flex items-center gap-3"
                    whileHover={{ x: 5, scale: 1.05, color: "#BCA25B" }} // hover animation
                    transition={{ type: "spring", stiffness: 300, damping: 20 }} // smooth motion
                  >
                    <PiGreaterThanBold className="text-[#BCA25B] text-[13px]" />{" "}
                    {/* ⭐ Arrow icon */}
                    {link.name}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div data-aos="fade-down" data-aos-delay="300">
            <h3 className="text-lg font-bold mb-6 uppercase tracking-wider text-[#CEAA36] border-b border-[#CEAA36]/30 pb-2">
              Services
            </h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <motion.a
                    href={service.href}
                    className="text-white/70 flex items-center gap-3"
                    whileHover={{ x: 5, scale: 1.05, color: "#BCA25B" }} // hover animation
                    transition={{ type: "spring", stiffness: 300, damping: 20 }} // smooth motion
                  >
                    <PiGreaterThanBold className="text-[#BCA25B] text-[13px]" />{" "}
                    {/* ⭐ Arrow icon */}
                    {service.name}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div data-aos="fade-left" data-aos-delay="450" className="space-y-4">
            <h3 className="text-lg font-bold mb-6 uppercase tracking-wider text-[#CEAA36] border-b border-[#CEAA36]/30 pb-2">
              Contact
            </h3>

            {/* Email */}
            <motion.a
              href="mailto:support@allogo.dz"
              className="group flex items-center space-x-3"
              style={{ color: "rgba(255,255,255,0.8)" }} // default text color
              whileHover={{ x: 5, scale: 1.05, color: "#BCA25B" }} // hover animation
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="p-2 bg-white/10 rounded-lg">
                <FaEnvelope className="text-inherit animate-pulse text-md" />
              </div>
              <span className="text-md">support@allogo.dz</span>
            </motion.a>

            {/* Phone */}
            <motion.a
              href="tel:+213XX XXX XXXX"
              className="group flex items-center space-x-3"
              style={{ color: "rgba(255,255,255,0.8)" }}
              whileHover={{ x: 5, scale: 1.05, color: "#BCA25B" }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="p-2 bg-white/10 rounded-lg">
                <FaPhoneAlt className="text-inherit animate-pulse text-md" />
              </div>
              <span className="text-md">+213 XX XXX XXXX</span>
            </motion.a>

            {/* Location */}
            <motion.div
              className="group flex items-start space-x-3 cursor-pointer"
              style={{ color: "rgba(255,255,255,0.8)" }}
              whileHover={{ x: 5, scale: 1.05, color: "#BCA25B" }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="p-2 bg-white/10 rounded-lg">
                <FaMapMarkerAlt className="text-inherit animate-pulse text-md" />
              </div>
              <span className="text-md leading-relaxed">Algiers, Algeria</span>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#CEAA36]/20 py-6">
          <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-white/60 text-md">
              © {currentYear}{" "}
              <span className="text-[#CEAA36] font-semibold animate-pulse">
                ALLOGO
              </span>{" "}
              — All Rights Reserved
            </p>

            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  className="p-3 rounded-xl"
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.05)",
                    color: "#ffffff",
                  }} // default bg & icon color
                  whileHover={{
                    scale: 1.2,
                    color: "#BCA25B",
                    backgroundColor: "rgba(206, 170, 54, 0.2)", // light bg on hover
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <social.icon className="text-xl animate-pulse" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
