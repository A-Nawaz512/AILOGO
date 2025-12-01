// Footer.jsx
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaFacebookF, FaTwitter, FaInstagram, FaWhatsapp } from "react-icons/fa";

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
    <footer className="relative bg-gradient-to-br from-[#FFD700] via-[#DAA520] to-[#B8860B] text-black overflow-hidden">
      {/* Animated Wave SVG at top */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] rotate-180">
        <svg className="relative block w-full h-20" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0 C600,120 600,0 1200,120 L1200,0 L0,0 Z" fill="rgba(0,0,0,0.1)"></path>
        </svg>
      </div>

      {/* Floating background circles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-10 -left-10 w-32 h-32 bg-black/10 rounded-full animate-pulse-slow"></div>
        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-black/10 rounded-full animate-pulse-slow"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-14">
        {/* Store Info */}
        <div data-aos="fade-up" className="space-y-4">
          <h2 className="text-2xl font-bold text-black">AlLOGO 🚀</h2>
          <p className="text-black/90 text-sm leading-relaxed font-medium">
            All-in-one platform for rides, <span className="font-semibold text-black">Rentals, Food Delivery</span>, apartments, and roadside assistance. Earn loyalty points with every service.
          </p>
          <div className="flex items-center space-x-2 text-black/70 text-sm font-medium">
            <div className="w-2 h-2 bg-black/50 rounded-full mr-3 group-hover:bg-black transition-colors font-medium animate-pulse"></div>
            <span>New arrivals added weekly!</span>
          </div>
        </div>

        {/* Quick Links */}
        <div data-aos="fade-up" data-aos-delay="150">
          <h2 className="text-lg font-bold mb-6 uppercase tracking-wider text-black border-b border-black/20 pb-2">
            Quick Links
          </h2>
          <ul className="space-y-3">
            {companyLinks.map((link, index) => (
              <motion.li key={index} whileHover={{ x: 5, scale: 1.05 }} transition={{ type: "spring", stiffness: 200 }}>
                <a
                  href={link.href}
                  className="text-black/80 hover:text-black transition-all duration-300 text-sm flex items-center group font-medium"
                >
                  <span className="w-1 h-1 bg-black/50 rounded-full mr-3 group-hover:bg-black transition-colors font-medium"></span>
                  {link.name}
                </a>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div data-aos="fade-up" data-aos-delay="300">
          <h2 className="text-lg font-bold mb-6 uppercase tracking-wider text-black border-b border-black/20 pb-2">
            Services
          </h2>
          <ul className="space-y-3">
            {services.map((service, index) => (
              <motion.li key={index} whileHover={{ x: 5, scale: 1.05 }} transition={{ type: "spring", stiffness: 200 }}>
                <a
                  href={service.href}
                  className="text-black/80 hover:text-black transition-all duration-300 text-sm flex items-center group font-medium"
                >
                  <span className="w-1 h-1 bg-black/50 rounded-full mr-3 group-hover:bg-black transition-colors"></span>
                  {service.name}
                </a>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div data-aos="fade-up" data-aos-delay="450" className="space-y-4">
          <h2 className="text-lg font-bold mb-6 uppercase tracking-wider text-black border-b border-black/20 pb-2">
            Contact
          </h2>
          <div className="space-y-4">
            <motion.a href="mailto:support@allogo.dz" whileHover={{ scale: 1.05 }} className="flex items-center space-x-3 text-black/80 hover:text-black transition-colors duration-300 group font-medium">
              <div className="p-2 bg-black/10 rounded-lg group-hover:bg-black/20 transition-colors">
                <FaEnvelope className="text-sm text-white" />
              </div>
              <span className="text-sm">support@allogo.dz</span>
            </motion.a>

            <motion.a href="tel:+213XX XXX XXXX" whileHover={{ scale: 1.05 }} className="flex items-center space-x-3 text-black/80 hover:text-black transition-colors duration-300 group font-medium">
              <div className="p-2 bg-black/10 rounded-lg group-hover:bg-black/20 transition-colors">
                <FaPhone className="text-sm text-white" />
              </div>
              <span className="text-sm">+213 XX XXX XXXX</span>
            </motion.a>

            <div className="flex items-start space-x-3 text-black/80 font-medium">
              <div className="p-2 bg-black/10 rounded-lg mt-1">
                <FaMapMarkerAlt className="text-sm text-white" />
              </div>
              <span className="text-sm leading-relaxed">Algiers, Algeria</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="relative border-t border-black/20 pt-5 pb-6">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-black/70 text-sm text-center md:text-left font-medium" 
          >
            &copy; {currentYear} AlLOGO. All rights reserved. Made with ❤️ for a seamless ride experience!
          </motion.div>

          {/* Social Icons */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="flex space-x-4"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 10 }}
                className="p-3 bg-black/10 hover:bg-black/20 rounded-xl transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 group"
                aria-label={social.label}
              >
                <social.icon className="text-lg text-white group-hover:text-black/90" />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
