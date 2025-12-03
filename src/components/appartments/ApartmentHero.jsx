import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import img1 from "../../assets/apt1.webp";
import img2 from "../../assets/apt2.jpg";
import img3 from "../../assets/apt3.webp";
import img4 from "../../assets/apt4.jpg";

const ApartmentHero = () => {
  const slides = [
    {
      type: "Apartment",
      text: "Apartment Rentals",
      subText: "Book verified apartments with secure online payment.",
      image: img1,
      cta1: { text: "Find an Apartment", link: "/apartments" },
      cta2: { text: "List Your Apartment", link: "/list" },
    },
    {
      type: "Apartment",
      text: "Luxury Apartments",
      subText: "Verified listings, secure payments, and trusted owners.",
      image: img2,
      cta1: { text: "Explore Apartments", link: "/apartments" },
      cta2: { text: "List Yours", link: "/list" },
    },
    {
      type: "Apartment",
      text: "Affordable Rentals",
      subText: "Safe and verified apartments at the best prices.",
      image: img3,
      cta1: { text: "Book Now", link: "/apartments" },
      cta2: { text: "Learn More", link: "/list" },
    },
    {
      type: "Apartment",
      text: "Modern Living",
      subText: "Comfortable apartments with verified amenities.",
      image: img4,
      cta1: { text: "Find an Apartment", link: "/apartments" },
      cta2: { text: "List Your Apartment", link: "/list" },
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const currentSlide = slides[currentIndex];

  return (
    <div className="min-h-screen text-white relative overflow-x-hidden">
      <section className="relative flex items-center justify-center h-[90vh] overflow-hidden">
        
        {/* Background Images */}
        <div className="absolute inset-0 w-full h-full">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 bg-cover bg-center transition-opacity duration-2000 ease-in-out ${
                index === currentIndex ? "opacity-100" : "opacity-0"
              }`}
              style={{ backgroundImage: `url(${slide.image})` }}
            ></div>
          ))}
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0d0d0d]/70 via-[#0d0d0d]/60 to-[#0d0d0d]"></div>

        {/* Text Content */}
        <div
          className="relative z-10 text-center px-2 md:px-5 max-w-full md:max-w-3xl mx-auto -mt-1"
          data-aos="fade-up"
        >
          <h1 className="text-3xl md:text-4xl font-extrabold leading-tight mb-6 text-white">
            {currentSlide.text}
          </h1>

          <p className="text-lg md:text-2xl text-gray-200 mb-8 leading-relaxed">
            {currentSlide.subText}
          </p>

          <div className="flex justify-center space-x-4 mt-4" data-aos="zoom-in">
            <a
              href={currentSlide.cta1.link}
              className="bg-[#B78E3B] text-white font-semibold px-5 py-2 rounded-xl hover:bg-[#B78E3B] transition transform hover:scale-105 shadow-lg"
            >
              {currentSlide.cta1.text}
            </a>
            <a
              href={currentSlide.cta2.link}
              className="border-2 border-[#B78E3B] text-[#B78E3B] font-semibold px-5 py-2 rounded-xl hover:bg-[#B78E3B] hover:text-white transition transform hover:scale-105"
            >
              {currentSlide.cta2.text}
            </a>
          </div>
        </div>

      
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#0d0d0d] via-[#0d0d0d]/90 to-transparent"></div>
      </section>
    </div>
  );
};

export default ApartmentHero;
