// src/components/Header.jsx
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// LOCAL IMAGES
import rideImage from "../../assets/car.jpg";
import motoImage from "../../assets/moto.jpg";
import cityImage from "../../assets/city.jpg";

const RidesHero = () => {
  const slides = [
    {
      type: "Rides",
      text: "Request a ride with transparent price negotiation",
      subText:
        "Choose your driver, negotiate your fare in real time, and track every trip live on the map.",
      image: rideImage,
      cta1: { text: "Book a Ride", link: "/rides" },
      cta2: { text: "Become a Driver", link: "/drivers" },
      badge: "City rides · Cars & motos",
    },
    {
      type: "Moto",
      text: "Beat city traffic with fast moto rides",
      subText:
        "Ideal for quick moves through busy streets with verified motorcycle drivers.",
      image: motoImage,
      cta1: { text: "Request Moto Ride", link: "/rides/moto" },
      cta2: { text: "Join as Moto Driver", link: "/drivers/moto" },
      badge: "Two-wheelers · Express",
    },
    {
      type: "City Trips",
      text: "Book trusted drivers for inter-city and airport rides",
      subText:
        "Plan long distance and airport transfers with transparent pricing and live tracking.",
      image: cityImage,
      cta1: { text: "Plan a Trip", link: "/rides/trips" },
      cta2: { text: "View Ride History", link: "/account/trips" },
      badge: "Inter-city · Airport rides",
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
              className={`absolute inset-0 bg-cover bg-center transition-opacity duration-2000 ease-in-out ${
                i === currentIndex ? "opacity-100" : "opacity-0"
              }`}
              style={{ backgroundImage: `url(${slide.image})` }}
            />
          ))}
        </div>

        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-linear-to-r from-black/65 via-black/70 to-black/30" />
        <div className="absolute inset-0 bg-linear-to-b from-black/55 via-transparent to-black/80" />

        {/* CONTENT WRAPPER */}
        <div className="relative z-10 w-full max-w-6xl mx-auto px-4 md:px-6 py-24 flex flex-col justify-between gap-10">
          <div>
            {/* top badge */}
            <div
              data-aos="fade-down"
              className="flex justify-start mb-6"
            >
              <span className="inline-flex items-center gap-2 px-4 py-1 rounded-full text-[11px] font-semibold bg-white/10 text-[#E2CF7D] backdrop-blur">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E2CF7D]" />
                RIDES / DRIVERS · ALLOGO
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
              <div
                className="flex flex-wrap gap-4 pt-4"
                data-aos="zoom-in"
                data-aos-delay="150"
              >
                <a
                  href={currentSlide.cta1.link}
                  className="bg-linear-to-r from-[#6F4918] to-[#E2CF7D] text-[#1a1207] font-semibold px-6 py-3 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition text-sm md:text-base"
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

          {/* bottom row: indicators + small stats */}
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
              <span className="flex items-center gap-1">
                <span className="text-[#E2CF7D] text-sm">☑</span> Controller
                validation
              </span>
              <span className="flex items-center gap-1">
                <span className="text-[#E2CF7D] text-sm">⬤</span> Order for someone
                else
              </span>
            </div>
          </div>
        </div>

        {/* bottom fade */}
        <div className="absolute bottom-0 left-0 w-full h-24 bg-linear-to-t from-black via-black/90 to-transparent" />
      </section>
    </div>
  );
};

export default RidesHero;
