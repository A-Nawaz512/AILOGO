import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

// Import local images from src/assets
import slide1 from "../../assets/slide1.jpg";
import slide2 from "../../assets/slide2.jpg";
import slide3 from "../../assets/slide3.jpg";
import slide4 from "../../assets/slide4.jpg";

const Header = () => {
  const slides = [
    {
      title: "Fast Delivery for Food",
      subText: "All-in-one delivery platform for orders, errands, pickups and logistics.",
      image: slide1,
      highlight: "Delivery",
      cta1: { text: "Get Started", link: "/start" },
      cta2: { text: "Learn More", link: "/about" },
    },
    {
      title: "City & Intercity Deliveries",
      subText: "Flexible routes, zone-based pricing, and direct assignment to delivery providers.",
      image: slide2,
      highlight: "Deliveries",
      cta1: { text: "Create Delivery", link: "/create" },
      cta2: { text: "Explore Features", link: "/features" },
    },
    {
      title: "In-App Chat, WhatsApp Communication",
      subText: "Stay connected with customers and providers in real time with instant communication tools.",
      image: slide3,
      highlight: "Communication",
      cta1: { text: "Try Demo", link: "/demo" },
      cta2: { text: "Connect Team", link: "/contact" },
    },
    {
      title: "Only 5% Commission with Secured Payments",
      subText: "Customer can pay via cash or card. Providers must verify card to unlock new deliveries.",
      image: slide4,
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
    <div className="relative min-h-screen text-white overflow-hidden">
      <section className="relative h-screen flex items-center justify-center">
        {/* Background Images */}
        {slides.map((s, i) => (
          <motion.div
            key={i}
            className="absolute inset-0 bg-cover bg-center transition-opacity duration-[1800ms]"
            style={{ backgroundImage: `url(${s.image})` }}
            animate={
              i === currentIndex
                ? { scale: [1, 1.05, 1], opacity: 1, x: [0, 5, 0], y: [0, 5, 0] }
                : { scale: 1, opacity: 0 }
            }
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
        ))}

        {/* Overlay Gradient with Brown + Black Opacity */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/50 to-[#E2CF7D]/40"></div>
          <div className="absolute inset-0 bg-black/25"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-20 text-center px-5 max-w-3xl mx-auto" data-aos="fade-up">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 1 }}
            >
              <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 text-shadow-lg">
                {before}
                <span className="text-[#B78E3B] drop-shadow-lg">{highlightWord}</span>
                {after}
              </h1>

              <motion.p
                className="text-white text-lg md:text-xl max-w-2xl mx-auto mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                {slide.subText}
              </motion.p>

              <motion.div
                className="flex justify-center gap-4 mt-6 flex-wrap"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                <a
                  href={slide.cta1.link}
                  className="bg-gradient-to-r from-[#B78E3B] to-[#E2CF7D] text-[#6F4918] font-semibold px-6 py-3 rounded-xl hover:scale-105 hover:shadow-2xl transition-all transform"
                >
                  {slide.cta1.text}
                </a>
                <a
                  href={slide.cta2.link}
                  className="border-2 border-[#B78E3B] text-[#B78E3B] font-semibold px-6 py-3 rounded-xl hover:bg-[#B78E3B] hover:text-white hover:scale-105 hover:shadow-lg transition-all transform"
                >
                  {slide.cta2.text}
                </a>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Bottom Fade */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black/60 to-transparent"></div>
      </section>
    </div>
  );
};

export default Header;
