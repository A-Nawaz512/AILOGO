// Updated Home component where MOST title words have gradient and FEW remain white
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const Home = () => {
  const slides = [
    {
      id: 1,
      title: "ALL Services, One Platform",
      // Now specify which words should remain WHITE instead of gradient
      whiteWords: ["ALL", "One"],
      subtitle: "InDrive + ALLOGO Complete Ecosystem",
      description:
        "Rides, deliveries, rentals, roadside assistance with price negotiation, driver selection, live OpenStreetMap 3D tracking, WhatsApp communication & point transfer system.",
      image:
        "https://img.freepik.com/premium-photo/digital-composite-man-holding-car-icon-car-automobile-insurance-car-services-concept-businessman-with-offering-gesture-icon-car_150455-11485.jpg",
      link: "/services/rides",
    },
    {
      id: 2,
      title: "Book Rides & Order for Others",
      whiteWords: ["Book", "for"],
      subtitle: "Male/Female Drivers • Motorcycles • Direct Assignment",
      description:
        "Choose driver gender, vehicle type (cars/motorcycles), or order rides for someone else. Real-time price negotiation & only 7% commission. Provider credit system included.",
      image:
        "https://img.freepik.com/free-photo/close-up-mobile-with-map-directions_23-2148906400.jpg",
      link: "/services/rides",
    },
    {
      id: 3,
      title: "Smart Delivery & Food Service",
      whiteWords: ["Smart", "Service"],
      subtitle: "Transparent & Traceable • 5% Commission",
      description:
        "Send parcels, groceries, or order food with live tracking. Delivery A → B → C possible. Direct assignment available. WhatsApp registration & validation.",
      image:
        "https://img.freepik.com/premium-photo/courier-with-mobile-phone-checks-apartment-number-standing-entrance-man-holds-pizza-boxes_307890-5351.jpg",
      link: "/services/deliveries",
    },
    {
      id: 4,
      title: "Rent Vehicles & Apartments Securely",
      whiteWords: ["Rent"],
      subtitle: "Card Payment Only • Temporary Numbers • 3% Commission",
      description:
        "Book cars, scooters, motorcycles, SUVs, trucks, bikes, or apartments instantly. Secure card payments with temporary numbers generated for communication.",
      image:
        "https://img.freepik.com/free-photo/female-realtor-shaking-hands-with-couple-new-house-deal_23-2148895463.jpg",
      link: "/services/rentals",
    },
    {
      id: 5,
      title: "24/7 Roadside Assistance",
      whiteWords: ["24/7"],
      subtitle: "Mechanic • Towing • Battery • Fuel • 5% Commission",
      description:
        "Request emergency help instantly: mechanic, towing, battery service, tires, fuel delivery. Live tracking with in-app chat/call or WhatsApp communication.",
      image:
        "https://img.freepik.com/free-photo/long-shot-couple-repairing-car_23-2148270640.jpg",
      link: "/services/roadside",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    AOS.init({ duration: 800, once: false, offset: 100 });

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const currentSlide = slides[currentIndex];

  return (
    <section className="relative h-[90vh] overflow-hidden bg-[#1a1a1a]">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? "opacity-40" : "opacity-0"
          }`}
          style={{ backgroundImage: `url(${slide.image})` }}
        />
      ))}

      <div className="absolute inset-0 bg-gradient-to-r from-[#6F4918]/70 to-[#E2CF7D]/40 mix-blend-multiply" />

      <div className="relative z-10 flex flex-col items-center justify-center text-center h-full px-6 lg:px-8">
        <div className="max-w-3xl animate-fadeIn">
          <h1
            className="text-3xl md:text-5xl font-bold mb-6 transition-all duration-1000"
            data-aos="zoom-in"
            key={currentSlide.id}
          >
            {currentSlide.title.split(" ").map((word, i) => {
              const isWhite = currentSlide.whiteWords.includes(word);
              return (
                <span
                  key={i}
                  className={
                    isWhite
                      ? "text-white"
                      : "bg-gradient-to-r from-[#6F4918] to-[#E2CF7D] bg-clip-text text-transparent"
                  }
                >
                  {word + " "}
                </span>
              );
            })}
          </h1>

          <p
            className="text-xl md:text-2xl text-gray-300 mb-4"
            data-aos="zoom-in"
            data-aos-delay="100"
          >
            {currentSlide.subtitle}
          </p>

          <p
            className="text-md md:text-lg text-gray-200 leading-relaxed mb-8"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            {currentSlide.description}
          </p>

          <Link to={currentSlide.link}>
            <button className="relative px-5 py-2 cursor-pointer font-semibold text-white rounded-xl overflow-hidden bg-gradient-to-r from-[#6F4918] to-[#E2CF7D] shadow-lg transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-2xl">
              <span className="absolute inset-0 bg-gradient-to-r from-[#E2CF7D]/50 to-[#6F4918]/50 opacity-0 hover:opacity-100 transition-opacity duration-500 rounded-xl"></span>
              <span className="relative z-10">Explore Now →</span>
            </button>
          </Link>
        </div>

        <div className="flex space-x-3 mt-10">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`transition-all duration-500 cursor-pointer rounded-full ${
                currentIndex === index
                  ? "bg-gradient-to-r from-[#6F4918] to-[#E2CF7D] w-8 h-3 shadow-lg"
                  : "bg-white/30 w-3 h-3 hover:bg-[#6F4918]"
              }`}
            />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn { animation: fadeIn 1s ease-out; }
      `}</style>
    </section>
  );
};

export default Home;
