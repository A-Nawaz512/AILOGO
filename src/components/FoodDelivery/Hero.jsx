// src/components/Header.jsx
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Header = () => {
  const slides = [
    {
      type: "Food",
      text: "Delicious Meals Delivered to Your Door",
      subText:
        "Freshly cooked meals from your favorite restaurants, delivered fast and hot to you.",
      image:
        "https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=1600",
      cta1: { text: "Order Now", link: "/order" },
      cta2: { text: "View Menu", link: "/menu" },
    },
    {
      type: "Specials",
      text: "Hot & Fresh Deals Every Day",
      subText:
        "Check out our daily specials and discounts to make your meal even more enjoyable.",
      image:
        "https://images.pexels.com/photos/2232/vegetables-italian-pizza-restaurant.jpg?auto=compress&cs=tinysrgb&w=1600",
      cta1: { text: "Explore Deals", link: "/deals" },
      cta2: { text: "Order Now", link: "/order" },
    },
    {
      type: "Fast Delivery",
      text: "Quick Delivery Right to Your Doorstep",
      subText:
        "Track your order in real-time and enjoy your meal without waiting too long.",
      image:
        "https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=1600",
      cta1: { text: "Track Order", link: "/track" },
      cta2: { text: "Order Again", link: "/order" },
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Initialize AOS
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  // Auto slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const currentSlide = slides[currentIndex];

  // Determine highlight word
  const highlightWord =
    currentSlide.type === "Food"
      ? "Delivered"
      : currentSlide.type === "Specials"
      ? "Deals"
      : "Delivery";

  return (
    <div className="bg-amber-300 min-h-screen text-white relative overflow-x-hidden">
      <section className="relative flex items-center justify-center h-[100vh] overflow-hidden">
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
          className="relative z-10 text-center px-3 md:px-6 max-w-full md:max-w-3xl mx-auto"
          data-aos="fade-up"
        >
          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 text-white">
            {currentSlide.text.includes(highlightWord) ? (
              <>
                <span className="text-white">
                  {currentSlide.text.split(highlightWord)[0]}
                </span>{" "}
                <span className="text-[#f7b35a]">{highlightWord}</span>
                <span className="text-white">
                  {currentSlide.text.split(highlightWord)[1]}
                </span>
              </>
            ) : (
              <span className="text-white">{currentSlide.text}</span>
            )}
          </h1>

          {/* Sub Text */}
          <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed">
            {currentSlide.subText}
          </p>

          {/* CTA Buttons */}
          <div className="flex justify-center space-x-4 mt-4" data-aos="zoom-in">
            <a
              href={currentSlide.cta1.link}
              className="bg-[#ca9249] text-[white] font-semibold px-6 py-3 rounded-xl hover:bg-[#8d5b1a] transition transform hover:scale-105 shadow-lg"
            >
              {currentSlide.cta1.text}
            </a>
            <a
              href={currentSlide.cta2.link}
              className="border-2 border-[#6F4918] text-[#976626] font-semibold px-6 py-3 rounded-xl hover:bg-[#e8a856] hover:text-[white] transition transform hover:scale-105"
            >
              {currentSlide.cta2.text}
            </a>
          </div>
        </div>

        {/* Bottom Gradient */}
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#0d0d0d] via-[#0d0d0d]/90 to-transparent"></div>
      </section>
    </div>
  );
};
export default Header