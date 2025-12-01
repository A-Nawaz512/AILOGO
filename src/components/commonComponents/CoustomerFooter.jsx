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

const CoustomerFooter = () => {
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
    { name: "VTC Rides", href: "/services" },
    { name: "Vehicle Rental", href: "/services" },
    { name: "Apartment Rental", href: "/services" },
    { name: "Food Delivery", href: "/services" },
    { name: "Courier / Delivery", href: "/services" },
    { name: "Roadside Assistance", href: "/services" },
  ];

  const socialLinks = [
    { icon: FaFacebookF, href: "https://facebook.com", label: "Facebook" },
    { icon: FaTwitter, href: "https://twitter.com", label: "Twitter" },
    { icon: FaInstagram, href: "https://instagram.com", label: "Instagram" },
    { icon: FaWhatsapp, href: "https://wa.me/", label: "WhatsApp" },
  ];

  return (
    <footer className="bg-black text-white relative overflow-hidden">

      {/* GOLD TOP BORDER */}
      <div className="w-full h-1 bg-gradient-to-r from-[#734D1C] via-[#BCA25B] to-[#734D1C]"></div>

      <div className="relative max-w-7xl mx-auto px-6 py-15 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-14">

        {/* Brand */}
        <div data-aos="fade-up" className="space-y-4">
          <h2 className="text-3xl font-bold text-[#BCA25B]">AlLOGO</h2>
          <p className="text-white/80 text-sm leading-relaxed">
            All-in-one platform for Rides, Rentals, Food Delivery, Apartments & Roadside Assistance.
          </p>
          <p className="text-[#BCA25B] text-sm font-semibold animate-pulse">
            ★ Premium Services – 24/7 Available
          </p>
        </div>

        {/* Quick Links */}
        <div data-aos="fade-up" data-aos-delay="150">
          <h3 className="text-lg font-bold mb-6 uppercase tracking-wider text-[#BCA25B] border-b border-[#BCA25B]/30 pb-2">
            Quick Links
          </h3>
          <ul className="space-y-3">
            {companyLinks.map((link, index) => (
              <motion.li
                key={index}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <a
                  href={link.href}
                  className="text-white/70 hover:text-[#BCA25B] transition-all duration-300 flex items-center gap-2"
                >
                  {link.name}
                </a>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div data-aos="fade-up" data-aos-delay="300">
          <h3 className="text-lg font-bold mb-6 uppercase tracking-wider text-[#BCA25B] border-b border-[#BCA25B]/30 pb-2">
            Services
          </h3>
          <ul className="space-y-3">
            {services.map((service, index) => (
              <motion.li
                key={index}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <a
                  href={service.href}
                  className="text-white/70 hover:text-[#BCA25B] transition-all duration-300"
                >
                  {service.name}
                </a>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div data-aos="fade-up" data-aos-delay="450" className="space-y-4">
          <h3 className="text-lg font-bold mb-6 uppercase tracking-wider text-[#BCA25B] border-b border-[#BCA25B]/30 pb-2">
            Contact
          </h3>

          {/* Email */}
          <motion.a
            whileHover={{ scale: 1.05 }}
            href="mailto:support@allogo.dz"
            className="flex items-center space-x-3 text-white/80 hover:text-[#BCA25B] transition-all"
          >
            <div className="p-2 bg-white/10 rounded-lg">
              <FaEnvelope className="text-white animate-pulse" />
            </div>
            <span className="text-sm">support@allogo.dz</span>
          </motion.a>

          {/* Phone */}
          <motion.a
            whileHover={{ scale: 1.05 }}
            href="tel:+213XX XXX XXXX"
            className="flex items-center space-x-3 text-white/80 hover:text-[#BCA25B] transition-all"
          >
            <div className="p-2 bg-white/10 rounded-lg">
              <FaPhone className="text-white animate-pulse" />
            </div>
            <span className="text-sm">+213 XX XXX XXXX</span>
          </motion.a>

          {/* Location */}
          <div className="flex items-start space-x-3 text-white/80">
            <div className="p-2 bg-white/10 rounded-lg">
              <FaMapMarkerAlt className="text-white animate-pulse" />
            </div>
            <span className="text-sm leading-relaxed">Algiers, Algeria</span>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#BCA25B]/20 py-6">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">

          <p className="text-white/60 text-sm">
            © {currentYear} <span className="text-[#BCA25B] font-semibold">AlLOGO</span> — All Rights Reserved
          </p>

          {/* Social Icons */}
          <div className="flex space-x-4">
            {socialLinks.map((social, index) => (
              <motion.a
                whileHover={{ scale: 1.2 }}
                key={index}
                href={social.href}
                target="_blank"
                className="p-3 bg-white/5 rounded-xl hover:bg-[#BCA25B]/20 transition-all"
              >
                <social.icon className="text-xl animate-pulse text-white hover:text-[#BCA25B]" />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default CoustomerFooter;
