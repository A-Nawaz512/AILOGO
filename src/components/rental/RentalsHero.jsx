
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

// Import your local images
import img1 from "../../assets/rentall1.jpg";
import img2 from "../../assets/rentall2.jpg";
import img3 from "../../assets/rentall3.jpg";
import img4 from "../../assets/rentall4.jpg";
import img5 from "../../assets/rentall5.jpg";
import img6 from "../../assets/rentall6.jpg";

const  RentalsHero = () => {
  const slides = [
    {
      title: "Rentals  Cars & Scooters",
      subText:
        "Find vehicles nearby, book for hours or days, and hit the road. Owners and rental agencies can list their fleet, set availability, and manage bookings — all in one place.",
      image: img1,
      cta1: { text: "Rent a vehicle", link: "/rent" },
      cta2: { text: "List your vehicle", link: "/list" },
    },
    {
      title: "For Clients Short-term  Hours / Days",
      subText:
        "Rent a car or scooter in a few taps: open the map, choose your vehicle, review price & conditions, and start your trip.",
      image: img2,
      cta1: { text: "View Map", link: "/map" },
      cta2: { text: "Learn More", link: "/clients" },
    },
    {
      title: "For Owners & Rental Agencies",
      subText:
        "List vehicles, set prices, and manage bookings from a unified dashboard. Vehicles automatically appear on the 3D map whenever they are available.",
      image: img3,
      cta1: { text: "List Vehicle", link: "/list" },
      cta2: { text: "Dashboard", link: "/dashboard" },
    },
    {
      title: "Luxury Rentals  Cars & Scooters",
      subText:
        "Premium vehicles for rent, fully verified, and ready to hit the road.",
      image: img4,
      cta1: { text: "Rent Luxury", link: "/rent/luxury" },
      cta2: { text: "List Premium", link: "/list" },
    },
    {
      title: "Affordable Rentals Nearby",
      subText:
        "Find the best deals on cars and scooters near your location.",
      image: img5,
      cta1: { text: "Find Deals", link: "/rent/deals" },
      cta2: { text: "List Yours", link: "/list" },
    },
    {
      title: "Quick Rentals  On the Go",
      subText:
        "Instant booking for vehicles ready when you need them.",
      image: img6,
      cta1: { text: "Book Now", link: "/rent/quick" },
      cta2: { text: "List Vehicle", link: "/list" },
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

  return (
    <div className="relative min-h-screen text-white overflow-hidden">
      <section className="relative h-[90vh] flex items-center justify-center">
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
        <div className="relative z-20 text-center px-5 max-w-3xl mx-auto" data-aos="fade-up">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.8 }}
            >
              {/* Main Title */}
              <h1 className="text-3xl md:text-4xl font-extrabold leading-tight mb-6">
                {slide.title}
              </h1>

              {/* Subtext */}
              <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-8">
                {slide.subText}
              </p>

              {/* CTA Buttons */}
              <div className="flex justify-center gap-4 mt-6">
                <a
                  href={slide.cta1.link}
                  className="bg-[#B78E3B] text-white font-semibold px-5 py-2 rounded-xl hover:bg-[#B78E3B] transition transform hover:scale-105 shadow-lg"
                >
                  {slide.cta1.text}
                </a>
                <a
                  href={slide.cta2.link}
                  className="border-2 border-[#B78E3B] text-[#B78E3B] font-semibold px-5 py-2 rounded-xl hover:bg-[#B78E3B] hover:text-white transition transform hover:scale-105 shadow-lg"
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
}

export default  RentalsHero 