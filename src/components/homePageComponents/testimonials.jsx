import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, Star, ChevronLeft, ChevronRight, Award, TrendingUp } from "lucide-react";

// ⬇ NEW ALLOGO THEMED TESTIMONIALS
const testimonials = [
  {
    id: 1,
    name: "Imen",
    role: "Ride Customer",
    image: "🚖",
    content: "Booked a ride on ALLOGO and the driver arrived in minutes. Smooth, clean, and professional.",
    rating: 5,
    achievement: "Top Ride Experience",
  },
  {
    id: 2,
    name: "Rachid",
    role: "Delivery Sender",
    image: "🚚",
    content: "Sent an urgent package across town. ALLOGO delivered it faster than I expected!",
    rating: 5,
    achievement: "Express Delivery User",
  },
  {
    id: 3,
    name: "Meriam",
    role: "Food Lover",
    image: "🍔",
    content: "My burger arrived hot and fresh. ALLOGO became my favorite food delivery app!",
    rating: 4,
    achievement: "Food Delivery Fan",
  },
  {
    id: 4,
    name: "Sami",
    role: "Scooter Rider",
    image: "🛵",
    content: "Quick scooter booking with great prices. Perfect for quick trips around the city.",
    rating: 5,
    achievement: "Urban Rider",
  },
  {
    id: 5,
    name: "Nawal",
    role: "Grocery Shopper",
    image: "🛒",
    content: "Ordered groceries through ALLOGO. Everything arrived packed neatly and right on time.",
    rating: 5,
    achievement: "Smart Shopper",
  },
  {
    id: 6,
    name: "Yanis",
    role: "Home Service Client",
    image: "🏠",
    content: "Needed quick assistance at home—ALLOGO connected me instantly with a reliable service provider.",
    rating: 4,
    achievement: "Home Helper User",
  },
  {
    id: 7,
    name: "Khaled",
    role: "Tow Truck Request",
    image: "🪝",
    content: "My car broke down on the highway. ALLOGO towing saved the day with fast support!",
    rating: 5,
    achievement: "Emergency Rescue",
  },
  {
    id: 8,
    name: "Dina",
    role: "Key Service User",
    image: "🔑",
    content: "Lost my keys and ALLOGO locksmith arrived quickly. Super reliable!",
    rating: 5,
    achievement: "Quick Fix Client",
  },
];

const slideVariants = {
  enter: (direction) => ({ x: direction > 0 ? 300 : -300, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (direction) => ({ x: direction < 0 ? 300 : -300, opacity: 0 }),
};

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const next = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(next, 7000);
    return () => clearInterval(interval);
  }, []);

  const t = testimonials[currentIndex];

  return (
    <section className="relative bg-black text-white py-24 px-6 overflow-hidden">
      {/* Golden Glows */}
      <div className="absolute -top-24 -left-24 w-72 h-72 bg-gradient-to-br from-gold/20 to-transparent rounded-full blur-3xl animate-pulse-slow pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-gradient-to-tr from-gold/10 to-transparent rounded-full blur-3xl animate-pulse-slow pointer-events-none" />

      <div className="max-w-5xl mx-auto text-center relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full border border-white/20 mb-6 backdrop-blur-sm">
            <TrendingUp className="w-4 h-4 text-gold" />
            <span className="text-sm text-gold font-semibold tracking-wide">Success Stories</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Hear from Our <span className="text-gold">Users</span>
          </h2>
          <p className="text-white/70 mt-4 max-w-2xl mx-auto">
            Real experiences from users who love ALLOGO's multi-service platform.
          </p>
        </motion.div>

        {/* Testimonial Card */}
        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.7, ease: "easeInOut" }}
              className="bg-darkSoft border border-white/10 shadow-2xl rounded-3xl p-10 md:p-14 backdrop-blur-xl
                         hover:scale-105 hover:shadow-gold transition-all duration-500"
            >
              <motion.div
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                <Quote className="w-10 h-10 text-gold mx-auto mb-6 animate-bounce-slow" />
              </motion.div>

              <p className="text-xl md:text-2xl text-white/90 leading-relaxed mb-8">“{t.content}”</p>

              <div className="flex flex-col items-center gap-3">
                <div className="text-6xl p-2 rounded-full border-4 border-gold/50 shadow-[0_0_20px_rgba(255,215,0,0.5)]">
                  {t.image}
                </div>
                <h3 className="text-lg font-semibold">{t.name}</h3>
                <p className="text-gold text-sm">{t.role}</p>

                <div className="flex gap-1 mt-2">
                  {[...Array(t.rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.1 * i, type: "spring", stiffness: 300 }}
                    >
                      <Star className="w-4 h-4 text-gold fill-current" />
                    </motion.div>
                  ))}
                </div>

                <div className="mt-4 inline-flex items-center gap-2 bg-gold/10 px-4 py-2 rounded-full border border-gold/30">
                  <Award className="w-4 h-4 text-gold" />
                  <span className="text-gold text-sm">{t.achievement}</span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <div className="absolute inset-y-0 left-0 flex items-center">
            <button
              onClick={prev}
              className="bg-white/10 hover:bg-white/20 text-gold p-2 rounded-full border border-white/20 transition-all hover:scale-110"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center">
            <button
              onClick={next}
              className="bg-white/10 hover:bg-white/20 text-gold p-2 rounded-full border border-white/20 transition-all hover:scale-110"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                i === currentIndex ? "bg-gold w-6" : "bg-white/20 hover:bg-white/30"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
