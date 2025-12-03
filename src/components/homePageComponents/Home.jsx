import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";


const Home = () => {
  const slides = [
    {
      id: 1,
      title: "ALL Services, One Platform",
      subtitle: "InDrive + ALLOGO Complete Ecosystem",
      description:
        "Rides, deliveries, rentals, roadside assistance with price negotiation, driver selection, live OpenStreetMap 3D tracking, WhatsApp communication & point transfer system.",
      image:
        "https://img.freepik.com/premium-photo/digital-composite-man-holding-car-icon-car-automobile-insurance-car-services-concept-businessman-with-offering-gesture-icon-car_150455-11485.jpg?ga=GA1.1.1146211304.1754028702&semt=ais_se_enriched&w=740&q=80",
      link: "/services",
      color: "text-[#B78E3B]",
    },
    {
      id: 2,
      title: "Book Rides & Order for Others",
      subtitle: "Male/Female Drivers • Motorcycles • Direct Assignment",
      description:
        "Choose driver gender, vehicle type (cars/motorcycles), or order rides for someone else. Real-time price negotiation & only 7% commission. Provider credit system included.",
      image:
        "https://img.freepik.com/free-photo/close-up-mobile-with-map-directions_23-2148906400.jpg?ga=GA1.1.1146211304.1754028702&semt=ais_se_enriched&w=740&q=80",
      link: "/services/rides",
      color: "text-[#B78E3B]",
    },
    {
      id: 3,
      title: "Smart Delivery & Food Service",
      subtitle: "Transparent & Traceable • 5% Commission",
      description:
        "Send parcels, groceries, or order food with live tracking. Delivery A → B → C possible. Direct assignment available. WhatsApp registration & validation.",
      image:
        "https://img.freepik.com/premium-photo/courier-with-mobile-phone-checks-apartment-number-standing-entrance-man-holds-pizza-boxes_307890-5351.jpg?ga=GA1.1.1146211304.1754028702&semt=ais_se_enriched&w=740&q=80",
      link: "/services/deliveries",
      color: "text-[#B78E3B]",
    },
    {
      id: 4,
      title: "Rent Vehicles & Apartments Securely",
      subtitle: "Card Payment Only • Temporary Numbers • 3% Commission",
      description:
        "Book cars, scooters, motorcycles, SUVs, trucks, bikes, or apartments instantly. Secure card payments with temporary numbers generated for communication.",
      image:
        "https://img.freepik.com/free-photo/female-realtor-shaking-hands-with-couple-new-house-deal_23-2148895463.jpg?ga=GA1.1.1146211304.1754028702&semt=ais_se_enriched&w=740&q=80",
      link: "/services/rentals",
      color: "text-[#B78E3B]",
    },
    {
      id: 5,
      title: "24/7 Roadside Assistance",
      subtitle: "Mechanic • Towing • Battery • Fuel • 5% Commission",
      description:
        "Request emergency help instantly: mechanic, towing, battery service, tires, fuel delivery. Live tracking with in-app chat/call or WhatsApp communication.",
      image:
        "https://img.freepik.com/free-photo/long-shot-couple-repairing-car_23-2148270640.jpg?ga=GA1.1.1146211304.1754028702&semt=ais_se_enriched&w=740&q=80",
      link: "/services/roadside",
      color: "text-[#B78E3B]",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // AOS Init
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
              className={`absolute inset-0 bg-cover bg-center transition-opacity duration-2000 ease-in-out ${index === currentIndex ? "opacity-100" : "opacity-0"
                }`}
              style={{ backgroundImage: `url(${slide.image})` }}
            ></div>
          ))}
        </div>

        <div className="absolute inset-0 bg-gradient-to-b from-[#0d0d0d]/70 via-[#0d0d0d]/60 to-[#0d0d0d]"></div>
        <div
          className="relative z-10 text-center px-2 md:px-5 max-w-full md:max-w-3xl mx-auto"
          data-aos="fade-up"
        >
          <h1 className="text-3xl md:text-5xl text-[#B78E3B] font-bold mb-6">
            {currentSlide.title}
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-4">
            {currentSlide.subtitle}
          </p>

          <p className="text-md md:text-lg text-gray-200 leading-relaxed">
            {currentSlide.description}
          </p>

          <Link to={currentSlide.link}>
            <button className="mt-8 px-8 py-4 rounded-lg bg-[#B78E3B] text-white text-lg font-semibold hover:bg-[#926f2d] transition shadow-lg">
              Explore Now →
            </button>
          </Link>
        </div>
        <div className="hidden lg:flex absolute bottom-10 left-1/2 -translate-x-1/2 space-x-3 z-20">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${currentIndex === index
                  ? "bg-[#B78E3B] scale-110 shadow-lg"
                  : "bg-gray-400/50 hover:bg-gray-300"
                }`}
            ></button>
          ))}
        </div>

        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#0d0d0d] via-[#0d0d0d]/80 to-transparent"></div>
      </section>
    </div>
  );
};

export default Home;
