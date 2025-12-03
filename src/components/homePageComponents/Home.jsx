import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  const slides = [
    {
      id: 1,
      title: "ALL Services, One Platform",
      subtitle: "InDrive + ALLOGO Complete Ecosystem",
      description: "Rides, deliveries, rentals, roadside assistance with price negotiation, driver selection, live OpenStreetMap 3D tracking, WhatsApp communication & point transfer system.",
      image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      link: '/services',
      color: "text-[#B78E3B]"
    },
    {
      id: 2,
      title: "Book Rides & Order for Others",
      subtitle: "Male/Female Drivers • Motorcycles • Direct Assignment",
      description: "Choose driver gender, vehicle type (cars/motorcycles), or order rides for someone else. Real-time price negotiation & only 7% commission. Provider credit system included.",
      image: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      link: '/services/rides',
      color: "text-[#B78E3B]"
    },
    {
      id: 3,
      title: "Smart Delivery & Food Service",
      subtitle: "Transparent & Traceable • 5% Commission",
      description: "Send parcels, groceries, or order food with live tracking. Delivery A → B → C possible. Direct assignment available. WhatsApp registration & validation.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      link: '/services/deliveries',
      color: "text-[#B78E3B]"
    },
    {
      id: 4,
      title: "Rent Vehicles & Apartments Securely",
      subtitle: "Card Payment Only • Temporary Numbers • 3% Commission",
      description: "Book cars, scooters, motorcycles, SUVs, trucks, bikes, or apartments instantly. Secure card payments with temporary numbers generated for communication.",
      image: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      link: '/services/rentals',
      color: "text-[#B78E3B]"
    },
    {
      id: 5,
      title: "24/7 Roadside Assistance",
      subtitle: "Mechanic • Towing • Battery • Fuel • 5% Commission",
      description: "Request emergency help instantly: mechanic, towing, battery service, tires, fuel delivery. Live tracking with in-app chat/call or WhatsApp communication.",
      image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      link: '/services/roadside',
      color: "text-[#B78E3B]"
    }
  ];

  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  const goToSlide = (index) => setCurrent(index);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(prev => (prev + 1) % slides.length);
    }, 10000);

    return () => clearInterval(interval); 
  }, [slides.length]);
  const slideVariants = {
    enter: (direction) => ({ x: direction > 0 ? 1000 : -1000, opacity: 0 }),
    center: { x: 0, opacity: 1, transition: { type: "spring", stiffness: 300, damping: 30 } },
    exit: (direction) => ({ x: direction < 0 ? 1000 : -1000, opacity: 0, transition: { type: "spring", stiffness: 300, damping: 30 } })
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black/70">
      <AnimatePresence >
        <motion.div
          key={slides[current].id}
          custom={1}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          autplay={true}
          className="absolute inset-0 w-full h-full"
        >
          <img
            src={slides[current].image}
            alt={slides[current].title}
            className="w-full h-full object-cover"
            loading="eager"
            onError={(e) => { e.target.style.backgroundColor = "#000"; }}
          />
          <div className="absolute inset-0 bg-black/70" />

          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 md:px-8 lg:px-16">
            <motion.h1
              className={`text-4xl md:text-5xl lg:text-6xl font-bold ${slides[current].color} mb-4`}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0, transition: { duration: 0.8 } }}
            >
              {slides[current].title}
            </motion.h1>
            <motion.h2
              className="text-xl md:text-2xl lg:text-3xl font-semibold text-white mb-6"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.2 } }}
            >
              {slides[current].subtitle}
            </motion.h2>
            <motion.p
              className="text-lg md:text-xl max-w-3xl text-gray-200 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.4 } }}
            >
              {slides[current].description}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1, transition: { duration: 0.5, delay: 0.6 } }}
            >
              <Link to={slides[current].link}>
                <button className="px-8 py-4 rounded-lg font-semibold text-lg bg-[#B78E3B] text-white hover:bg-[#a67c2a] shadow-lg transition">
                  Explore Now →
                </button>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Controls */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center space-x-4 z-30">
        <button onClick={prevSlide} className="p-3 rounded-full bg-[#b78e3b41] text-[#B78E3B] backdrop-blur-sm hover:bg-[#b78e3b60] transition">
          <FaChevronLeft size={20} />
        </button>
        <button onClick={nextSlide} className="p-3 rounded-full bg-[#b78e3b41] text-[#B78E3B] backdrop-blur-sm hover:bg-[#b78e3b60] transition">
          <FaChevronRight size={20} />
        </button>
      </div>

      {/* Slide Indicators */}
      <div className="absolute top-1/2 right-8 z-30 hidden md:flex flex-col space-y-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${index === current
              ? "bg-[#B78E3B] border-2 border-[#B78E3B]"
              : "border border-white/70 hover:border-[#B78E3B] hover:bg-[#B78E3B]/30"
              }`}
          />
        ))}
      </div>
    </div>
  );
}
