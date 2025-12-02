import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade, Navigation } from "swiper/modules";
import { useNavigate } from "react-router-dom";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "swiper/css/navigation";

export default function HeroSection() {
  const navigate = useNavigate();

  const slides = [
  
  {
    title: "Delivery & Courier",
    subtitle: "Send packages instantly with smart route optimization and real-time tracking for peace of mind."
  },
  {
    title: "Vehicle Rental",
    subtitle: "Rent cars, scooters, or bikes with flexible periods and easy online booking, perfect for all your mobility needs."
  },
  {
    title: "Apartment & Home Rentals",
    subtitle: "Discover verified short-term and long-term rentals with online tours and instant booking."
  },
  {
    title: "Food Delivery",
    subtitle: "Order from your favorite restaurants and enjoy hot, fresh meals delivered right to your doorstep."
  },
  {
    title: "Roadside Assistance",
    subtitle: "24/7 emergency support for towing, tire changes, fuel delivery, and quick vehicle repairs."
  }
];


  // Typewriter logic
  const [textIndex, setTextIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  
  useEffect(() => {
    const currentText = slides[textIndex].subtitle;
    let i = 0;
    const interval = setInterval(() => {
      setDisplayedText(currentText.slice(0, i + 1));
      i++;
      if (i === currentText.length) clearInterval(interval);
    }, 30);
    return () => clearInterval(interval);
  }, [textIndex]);

  return (
    <div className="text-white min-h-screen w-full bg-black relative overflow-hidden">

      {/* Floating Gold Glow */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.3, scale: 1 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#E2CF7D]/20 blur-[150px]"
      />

      <Swiper
        modules={[Autoplay, Pagination, EffectFade, Navigation]}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{
          clickable: true,
          bulletClass: "swiper-pagination-bullet !bg-white/10",
          bulletActiveClass: "!bg-[#E2CF7D] !scale-150 !shadow-[0_0_10px_#E2CF7D]",
        }}
        navigation={{
          nextEl: ".hero-next",
          prevEl: ".hero-prev",
        }}
        effect="fade"
        loop
        onSlideChange={(swiper) => setTextIndex(swiper.realIndex)}
        className="min-h-screen"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="min-h-screen flex items-center justify-center bg-black px-6 text-center pt-24 pb-20">
              
              <motion.div
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="max-w-4xl mx-auto"
              >
                {/* Title with shimmer gradient */}
                <motion.h1
                  initial={{ backgroundPosition: "0% 50%" }}
                  animate={{ backgroundPosition: "100% 50%" }}
                  transition={{ duration: 4, repeat: Infinity, repeatType: "reverse" }}
                  className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-[#E2CF7D] via-[#6F4918] to-[#E2CF7D] 
                  text-transparent bg-clip-text tracking-tight drop-shadow-[0_0_18px_rgba(226,207,125,0.35)]
                  bg-[length:300%_300%]"
                >
                  {slide.title}
                </motion.h1>

                {/* Typewriter Subtitle */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                  className="text-gray-300 max-w-2xl mx-auto mt-4 text-sm md:text-base leading-relaxed h-[80px]"
                >
                  {displayedText}
                  <span className="animate-pulse">|</span>
                </motion.p>

                {/* Learn More button with glow + scale */}
                <motion.button
                  whileHover={{ scale: 1.1, boxShadow: "0 0 35px rgba(226,207,125,0.7)" }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-6 px-8 py-3 rounded-full bg-gradient-to-r 
                    from-[#E2CF7D] to-[#86631F] text-black font-semibold shadow-lg
                    transition-all duration-300"
                >
                  Learn More
                </motion.button>
              </motion.div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation Arrows */}
      <motion.button
        whileHover={{ scale: 1.15, rotate: -5 }}
        className="hero-prev absolute top-1/2 left-5 -translate-y-1/2 z-30
        w-12 h-12 rounded-full flex items-center justify-center
        bg-white/10 backdrop-blur-xl border border-white/30 shadow-xl
        hover:bg-[#E2CF7D] hover:shadow-[0_0_25px_rgba(226,207,125,0.7)]
        transition-all duration-300"
      >
        <span className="text-2xl font-bold text-white">‹</span>
      </motion.button>

      <motion.button
        whileHover={{ scale: 1.15, rotate: 5 }}
        className="hero-next absolute top-1/2 right-5 -translate-y-1/2 z-30
        w-12 h-12 rounded-full flex items-center justify-center
        bg-white/10 backdrop-blur-xl border border-white/30 shadow-xl
        hover:bg-[#E2CF7D] hover:shadow-[0_0_25px_rgba(226,207,125,0.7)]
        transition-all duration-300"
      >
        <span className="text-2xl font-bold text-white">›</span>
      </motion.button>

    </div>
  );
}
