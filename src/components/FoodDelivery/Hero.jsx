import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

const Header = () => {
  const slides = [
    {
      title: "Fast Delivery for Food",
      subText:
        "All-in-one delivery platform for orders, errands, pickups and logistics.",
      image:
        "https://img.freepik.com/premium-photo/courier-with-mobile-phone-checks-apartment-number-standing-entrance-man-holds-pizza-boxes_307890-5351.jpg?ga=GA1.1.1146211304.1754028702&semt=ais_se_enriched&w=740&q=80",
      highlight: "Delivery",
      cta1: { text: "Get Started", link: "/start" },
      cta2: { text: "Order Now", link: "/about" },
    },

    // ---- Added Services ----
    
    {
      title: "Pharmacy Delivery",
      subText:
        "Fast, secure, and confidential delivery of medicines and health products.",
      image:
        "https://images.pexels.com/photos/5214959/pexels-photo-5214959.jpeg?auto=compress&cs=tinysrgb&w=1600",
      highlight: "Pharmacy Delivery",
      cta1: { text: "Order Medicine", link: "/pharmacy" },
      cta2: { text: "View Products", link: "/pharmacy-products" },
    },
    {
      title: "Package Delivery",
      subText:
        "Send and receive packages with real-time tracking and trusted couriers.",
      image:
        "https://images.pexels.com/photos/4246228/pexels-photo-4246228.jpeg?auto=compress&cs=tinysrgb&w=1600",
      highlight: "Package Delivery",
      cta1: { text: "Send Package", link: "/send-package" },
      cta2: { text: "Delivery Options", link: "/delivery-options" },
    },

    // ---- Original Slides ----
    {
      title: "City & Intercity Deliveries",
      subText:
        "Flexible routes, zone-based pricing, and direct assignment to delivery providers.",
      image:
        "https://images.pexels.com/photos/5025508/pexels-photo-5025508.jpeg?auto=compress&cs=tinysrgb&w=1600",
      highlight: "Routing",
      cta1: { text: "Create Delivery", link: "/create" },
      cta2: { text: "Explore Features", link: "/features" },
    },
    {
      title: "In-App Chat, WhatsApp Communication",
      subText:
        "Stay connected with customers and providers in real time with instant communication tools.",
      image:
        "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1600",
      highlight: "Communication",
      cta1: { text: "Try Demo", link: "/demo" },
      cta2: { text: "Connect Team", link: "/contact" },
    },
    {
      title: "Only 5% Commission with Secured Payments",
      subText:
        "Customers can pay via cash or card. Providers must verify card to unlock new deliveries.",
      image:
        "https://images.pexels.com/photos/4968391/pexels-photo-4968391.jpeg?auto=compress&cs=tinysrgb&w=1600",
      highlight: "Commission",
      cta1: { text: "Sign Up", link: "/signup" },
      cta2: { text: "Pricing", link: "/pricing" },
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const slide = slides[currentIndex];
  const highlightIndex = slide.title.indexOf(slide.highlight);
  const before = highlightIndex >= 0 ? slide.title.slice(0, highlightIndex) : slide.title;
  const after = highlightIndex >= 0 ? slide.title.slice(highlightIndex + slide.highlight.length) : "";

  return (
    <header className="relative min-h-screen bg-[#0D0D0D] text-white overflow-hidden">
     <section className="relative min-h-screen flex items-center justify-center">
  {/* Background Image */}
  <div
    className="absolute inset-0 bg-cover bg-center transition-all duration-[2000ms]"
    style={{ backgroundImage: `url(${slide.image})` }}
  ></div>

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/30"></div>

  {/* Content */}
  <div className="relative z-20 text-center px-5 max-w-3xl mx-auto">
    <AnimatePresence mode="wait">
      <motion.div
        key={currentIndex}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -30 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-3xl md:text-4xl font-extrabold leading-tight mb-6">
          {before}
          <span className="bg-gradient-to-r from-[#6F4918] to-[#E2CF7D] bg-clip-text text-transparent">
            {slide.highlight}
          </span>
          {after}
        </h1>

        <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-8">
          {slide.subText}
        </p>

        <div className="flex justify-center gap-4 mt-6">
          {[slide.cta1, slide.cta2].map((cta, idx) => (
            <a
              key={idx}
              href={cta.link}
              className={`${
                idx === 0
                  ? "bg-gradient-to-r from-[#6F4918] to-[#E2CF7D] text-white"
                  : "border-2 border-[#B78E3B] text-[#B78E3B] hover:bg-[#B78E3B] hover:text-white"
              } font-semibold px-5 py-2 rounded-xl hover:scale-105 transition-all shadow-lg`}
            >
              {cta.text}
            </a>
          ))}
        </div>
      </motion.div>
    </AnimatePresence>
  </div>
</section>

    </header>
  );
};

export default Header;
