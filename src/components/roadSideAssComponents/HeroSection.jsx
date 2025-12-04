// src/components/Header.jsx
import React, { useEffect, useState } from "react";
import { FaCheck } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

// LOCAL IMAGES
import mechanic from "../../assets/rm1.avif";
import towing from "../../assets/rt2.avif";
import battery from "../../assets/rb3.avif";
import tires from "../../assets/rt4.avif";
import fueldelivery from "../../assets/rfd5.avif";

const HeroSection = () => {
  const slides = [
    {
      type: "Zones",
      text: "Explore service availability across different areas",
      subText:
        "Browse through city zones, neighborhoods, and villa communities to find tailored services near you.",
      image: mechanic,
      cta1: { text: "View Zones", link: "/zones" },
      cta2: { text: "Service Areas", link: "/areas" },
      badge: "City · Neighborhoods · Villas",
    },
    {
      type: "Deliveries",
      text: "Fast and reliable delivery services",
      subText:
        "Send parcels, documents, and small items quickly with real-time tracking and verified riders.",
      image: towing,
      cta1: { text: "Send a Delivery", link: "/deliveries" },
      cta2: { text: "Become a Courier", link: "/couriers" },
      badge: "Pickup · Drop-off · Express",
    },
    {
      type: "Communication",
      text: "Stay connected with drivers through chat or calls",
      subText:
        "Use in-app messaging, voice calls, or WhatsApp for quick and convenient communication during your trip.",
      image: battery,
      cta1: { text: "Open Chat", link: "/chat" },
      cta2: { text: "Call or WhatsApp", link: "/contact" },
      badge: "Chat · Call · WhatsApp",
    },
    {
      type: "Commission",
      text: "Only 5% commission on every completed ride",
      subText:
        "ALLOGO keeps it simple and fair — drivers keep 95% earnings with no hidden fees or surprises.",
      image: tires,
      cta1: { text: "Learn More", link: "/commission" },
      cta2: { text: "Driver Earnings", link: "/drivers/earnings" },
      badge: "ALLOGO · 5% Commission",
    },
    {
      type: "Payment",
      text: "Flexible payment options for all customers",
      subText:
        "Pay your fare conveniently using cash or card — whichever works best for you.",
      image: fueldelivery,
      cta1: { text: "View Payment Methods", link: "/payments" },
      cta2: { text: "Add Card", link: "/account/payments" },
      badge: "Cash · Card",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  useEffect(() => {
    const interval = setInterval(
      () => setCurrentIndex((prev) => (prev + 1) % slides.length),
      5000
    );
    return () => clearInterval(interval);
  }, []);

  const currentSlide = slides[currentIndex];

  // word highlighting
  const highlightWord =
    currentSlide.type === "Rides"
      ? "ride"
      : currentSlide.type === "Moto"
      ? "moto"
      : "drivers";

  const lower = currentSlide.text.toLowerCase();
  const hwLower = highlightWord.toLowerCase();
  const idx = lower.indexOf(hwLower);
  const before = idx !== -1 ? currentSlide.text.slice(0, idx) : currentSlide.text;
  const match =
    idx !== -1 ? currentSlide.text.slice(idx, idx + highlightWord.length) : "";
  const after =
    idx !== -1 ? currentSlide.text.slice(idx + highlightWord.length) : "";

  return (
    <div className="min-h-screen text-white relative overflow-x-hidden bg-black">
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        
        {/* Background images */}
        <div className="absolute inset-0 w-full h-full">
          {slides.map((slide, i) => (
            <div
              key={i}
              className={`absolute inset-0 bg-cover bg-center transition-opacity duration-[2000ms] ease-in-out ${
                i === currentIndex ? "opacity-100" : "opacity-0"
              }`}
              style={{ backgroundImage: `url(${slide.image})` }}
            />
          ))}
        </div>

        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/70 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-transparent to-black/80" />

        {/* CONTENT */}
        <div className="relative z-10 w-full max-w-6xl mx-auto px-4 md:px-6 py-24 flex flex-col justify-between gap-10">
          <div>
            {/* top badge */}
            <div data-aos="fade-down" className="flex justify-start mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-1 rounded-full text-[11px] font-semibold bg-white/10 text-[#E2CF7D] backdrop-blur">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E2CF7D]" />
                Roadside Assistance / ALLOGO
              </span>
            </div>

            {/* main hero block */}
            <div data-aos="fade-up" className="max-w-3xl space-y-5">
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
                {idx !== -1 ? (
                  <>
                    <span className="text-white">{before}</span>
                    <span className="text-[#f7b35a]">{match}</span>
                    <span className="text-white">{after}</span>
                  </>
                ) : (
                  <span className="text-white">{currentSlide.text}</span>
                )}
              </h1>

              <div>
                <span className="inline-flex px-3 py-1 rounded-full text-[11px] font-semibold bg-black/50 text-[#E2CF7D]">
                  {currentSlide.badge}
                </span>
              </div>

              <p className="text-base md:text-lg text-gray-200 leading-relaxed">
                {currentSlide.subText}
              </p>

              {/* feature chips */}
              <div className="flex flex-wrap gap-3 text-[11px] md:text-xs text-gray-200">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10">
                  <span className="w-2 h-2 rounded-full bg-[#E2CF7D]" />
                  Live GPS tracking (OpenStreetMap)
                </span>
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10">
                  <span className="w-2 h-2 rounded-full bg-[#B78E3B]" />
                  Real-time price negotiation
                </span>
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10">
                  <span className="w-2 h-2 rounded-full bg-white" />
                  Cash / Card · 7% commission
                </span>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap gap-4 pt-4" data-aos="zoom-in" data-aos-delay="150">
                <a
                  href={currentSlide.cta1.link}
                  className="bg-gradient-to-r from-[#6F4918] to-[#E2CF7D] text-[#1a1207] font-semibold px-6 py-3 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition text-sm md:text-base"
                >
                  {currentSlide.cta1.text}
                </a>
                <a
                  href={currentSlide.cta2.link}
                  className="border border-[#E2CF7D] text-[#E2CF7D] font-semibold px-6 py-3 rounded-full bg-white/5 hover:bg-[#B78E3B] hover:text-black transition hover:-translate-y-0.5 text-sm md:text-base"
                >
                  {currentSlide.cta2.text}
                </a>
              </div>
            </div>
          </div>

          {/* bottom indicators */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    i === currentIndex
                      ? "bg-[#E2CF7D] w-5"
                      : "bg-white/35 hover:bg-white/70"
                  }`}
                />
              ))}
            </div>

            <div className="flex flex-wrap gap-4 text-[11px] text-gray-300">
              <span className="flex items-center gap-1">
                <span className="text-[#E2CF7D] text-sm">★</span> Rated drivers
              </span>
            <span className="flex items-center gap-1 text-sm  ">
  <FaCheck className="text-[#E2CF7D]" />
  Controller validation
</span>
              <span className="flex items-center gap-1">
                <span className="text-[#E2CF7D] text-sm">⬤</span> Order for someone else
              </span>
            </div>
          </div>
        </div>

        {/* bottom fade */}
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black via-black/90 to-transparent" />
      </section>
    </div>
  );
};

export default HeroSection;
