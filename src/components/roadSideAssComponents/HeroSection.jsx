import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

// LOCAL IMAGES
import mechanic from "../../assets/rm1.jpg";
import towing from "../../assets/rt2.jpg";
import battery from "../../assets/rb3.jpg";
import tires from "../../assets/rt4.jpg";
import fueldelivery from "../../assets/rd6.jpg";
import newslide from "../../assets/rfd5.jpg";
import lastslide from "../../assets/rdm7.jpg";

const Header = () => {
  const slides = [
    {
      title: "Instant",
      subText:
        "Get immediate roadside support anywhere in the city—mechanics, towing, battery boost, flat tire replacement, and fuel delivery.",
      image: mechanic,
      highlight: "Roadside Assistance",
      cta1: { text: "Request Help", link: "/roadside-help" },
      cta2: { text: "View Services", link: "/roadside-services" },
    },
    {
      title: "24/7 Reliable",
      subText:
        "Professional towing service available anytime. Move broken-down vehicles safely within the city or to another zone.",
      image: towing,
      highlight: "Towing Service",
      cta1: { text: "Call Tow Truck", link: "/towing" },
      cta2: { text: "Learn More", link: "/towing-info" },
    },
    {
      title: "On-Spot",
      subText:
        "Dead battery? Flat tire? Our verified providers offer quick battery boosts, tire replacement, and essential on-spot repairs.",
      image: battery,
      highlight: "Mechanic Support",
      cta1: { text: "Get Mechanic", link: "/mechanic" },
      cta2: { text: "Explore Options", link: "/roadside-options" },
    },
    {
      title: "Fuel Delivery",
      subText:
        "Ran out of fuel? Request instant fuel delivery wherever you are. Fast, safe, and affordable.",
      image: tires,
      highlight: "Fuel Service",
      cta1: { text: "Request Fuel", link: "/fuel" },
      cta2: { text: "Service Details", link: "/fuel-info" },
    },
    {
      title: "In-App Chat & WhatsApp",
      subText:
        "Instant communication via in-app chat, phone call, or WhatsApp. Stay fully connected with your assigned provider.",
      image: fueldelivery,
      highlight: "Communication",
      cta1: { text: "Try Demo", link: "/demo" },
      cta2: { text: "Contact Support", link: "/contact" },
    },
    {
      title: "Only 5% Commission",
      subText:
        "Affordable pricing with secure cash or card payments. Providers must verify card to unlock new roadside missions.",
      image: newslide,
      highlight: "Commission",
      cta1: { text: "Sign Up", link: "/signup" },
      cta2: { text: "Pricing", link: "/pricing" },
    },
    {
      title: "Fast & Verified",
      subText:
        "Our roadside experts are fully verified and arrive fast to help you anywhere in the city.",
      image: lastslide,
      highlight: "Verified Providers",
      cta1: { text: "Meet Providers", link: "/providers" },
      cta2: { text: "Learn More", link: "/providers-info" },
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const slide = slides[currentIndex];
  const highlightIndex = slide.title.indexOf(slide.highlight);
  const before =
    highlightIndex >= 0 ? slide.title.slice(0, highlightIndex) : slide.title;
  const after =
    highlightIndex >= 0
      ? slide.title.slice(highlightIndex + slide.highlight.length)
      : "";

  return (
    <header className="relative min-h-screen text-white overflow-hidden bg-black">
      <section className="relative min-h-screen flex items-center justify-center">

        {/* Background Slides */}
        <AnimatePresence mode="wait">
          {slides.map((s, i) =>
            i === currentIndex ? (
              <motion.div
                key={i}
                className="absolute inset-0 bg-cover bg-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                style={{ backgroundImage: `url(${s.image})` }}
              />
            ) : null
          )}
        </AnimatePresence>

        {/* 🔥 Strong black overlay (clean, no gray) */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Content */}
        <div className="relative z-20 text-center px-5 max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 1, ease: "easeInOut" }}
            >
              <h1 className="text-3xl md:text-6xl font-extrabold leading-tight mb-6">
                {before}
                <span className="bg-gradient-to-r from-[#6F4918] to-[#E2CF7D] bg-clip-text text-transparent">
                  {slide.highlight}
                </span>
                {after}
              </h1>

              <p className="text-gray-200 text-lg md:text-xl max-w-2xl mx-auto mb-8">
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
                        : "border-2 border-[#B78E3B] text-[#B78E3B]"
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
