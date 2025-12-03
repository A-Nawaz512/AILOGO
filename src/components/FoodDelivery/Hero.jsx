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
        "https://images.pexels.com/photos/6169041/pexels-photo-6169041.jpeg?auto=compress&cs=tinysrgb&w=1600",
      highlight: "Delivery",
      cta1: { text: "Get Started", link: "/start" },
      cta2: { text: "Learn More", link: "/about" },
    },
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
        "Customer can pay via cash or card. Providers must verify card to unlock new deliveries.",
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
  const highlightWord = slide.highlight;
  const [before, after] = slide.title.split(highlightWord);

  return (
    <div className="relative min-h-screen bg-[#0D0D0D] text-white overflow-hidden">
      <section className="relative h-[100vh] flex items-center justify-center">
        {/* Background Images */}
        {slides.map((s, i) => (
          <div
            key={i}
            className={`absolute inset-0 bg-cover bg-center transition-all duration-[2000ms] ${
              i === currentIndex ? "opacity-100 scale-100" : "opacity-0 scale-105"
            }`}
            style={{ backgroundImage: `url(${s.image})` }}
          ></div>
        ))}

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
              {/* Main Title */}
              <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
                {before}
                <span className="text-[#B78E3B]">{highlightWord}</span>
                {after}
              </h1>

              {/* Subtext */}
              <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-8">
                {slide.subText}
              </p>

              {/* CTA Buttons */}
              <div className="flex justify-center gap-4 mt-6">
                <a
                  href={slide.cta1.link}
                  className="bg-[#B78E3B] text-white font-semibold px-6 py-3 rounded-xl hover:bg-[#d89a49] transition-all transform hover:scale-105 shadow-lg hover:shadow-[#B78E3B]/50"
                >
                  {slide.cta1.text}
                </a>
                <a
                  href={slide.cta2.link}
                  className="border-2 border-[#B78E3B] text-[#B78E3B] font-semibold px-6 py-3 rounded-xl hover:bg-[#B78E3B] hover:text-white transition-all transform hover:scale-105 shadow-lg hover:shadow-[#B78E3B]/40"
                >
                  {slide.cta2.text}
                </a>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Bottom Fade */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#0D0D0D] to-transparent"></div>
      </section>
    </div>
  );
};

export default Header;
