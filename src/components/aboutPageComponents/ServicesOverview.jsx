// src/components/about/ServicesOverview.jsx
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FaCar,
  FaKey,
  FaHome,
  FaBox,
  FaUtensils,
  FaWrench,
  FaArrowRight,
} from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const ServicesOverview = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      disable: window.innerWidth < 768,
      startEvent: "DOMContentLoaded",
      offset: 100,
    });
  }, []);

  const services = [
    {
      title: "VTC Transport",
      icon: <FaCar />,
      description:
        "Book rides with choice of driver gender, vehicle type, and destination",
      image: "/rides.jpg",
      path: "/services/rides",
      buttonText: "Book a Ride",
    },
    {
      title: "Vehicle Rental",
      icon: <FaKey />,
      description: "Rent cars and scooters with availability management",
      image: "/vehical-rental.webp",
      path: "/services/rentals",
      buttonText: "Rent Now",
    },
    {
      title: "Apartment Rental",
      icon: <FaHome />,
      description: "Find and rent apartments with integrated payment",
      image: "/apartement-rental.jpg",
      path: "/services/apartments",
      buttonText: "Find Apartments",
    },
    {
      title: "Delivery & Courier",
      icon: <FaBox />,
      description: "Send packages with delivery confirmation",
      image: "/delivery.avif",
      path: "/services/deliveries",
      buttonText: "Send Package",
    },
    {
      title: "Food Delivery",
      icon: <FaUtensils />,
      description: "Order food from local restaurants",
      image: "https://images.pexels.com/photos/4393668/pexels-photo-4393668.jpeg",
      path: "/services/food",
      buttonText: "Order Food",
    },
    {
      title: "Roadside Assistance",
      icon: <FaWrench />,
      description: "Get help for vehicle breakdowns",
      image: "/rodeside-assistence.avif",
      path: "/services/assistance",
      buttonText: "Get Help",
    },
  ];

  return (
    <section className="pt-12 px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
        <div className="flex  justify-center items-center mb-2">
            <div className="h-px mt-2 w-12 bg-gradient-to-r from-transparent to-[#B78E3B] mr-4"></div>
            <h2 className="text-2xl text-[#1E2939] md:text-4xl font-bold">
              Our<span style={{ color: '#B78E3B' }}> Services</span>
            </h2>
            <div className="h-px mt-2 w-12 bg-gradient-to-l from-transparent to-[#B78E3B] ml-4"></div>
          </div>

          <p
            className="text-gray-800 text-lg max-w-3xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Explore our wide range of services with modern, easy-to-use
            interfaces for every need.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="group relative rounded-xl overflow-hidden shadow-xl  transition-all duration-500 "
              data-aos="fade-up"
              data-aos-delay={300 + idx * 100}
            >
              {/* Background image */}
              <div className="relative h-60 overflow-hidden transition-transform duration-500 ease-in-out group-hover:scale-110">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>

              {/* Content Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/60 to-transparent rounded-b-3xl">
                <div className="flex items-center space-x-4 mb-3">
                  <div className="bg-gradient-to-br from-[#6F4918] to-[#E2CF7D] w-12 h-12 flex items-center justify-center rounded-full text-white text-2xl transition-transform duration-500 group-hover:scale-110">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white transition-transform duration-500 group-hover:translate-x-1">
                    {service.title}
                  </h3>
                </div>
                <p className="text-gray-200 mb-4">{service.description}</p>
                <Link
                  to={service.path}
                  className="inline-flex items-center px-4 py-2  bg-gradient-to-r from-[#6F4918] to-[#E2CF7D] hover:bg-[#997630] rounded-full text-white font-medium gap-2 transition-all duration-300"
                >
                  {service.buttonText} <FaArrowRight />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Heading line animations */}
      <style>
        {`
          @keyframes slideLeft {
            0% { transform: translateX(-50%); opacity: 0; }
            100% { transform: translateX(0); opacity: 1; }
          }
          @keyframes slideRight {
            0% { transform: translateX(50%); opacity: 0; }
            100% { transform: translateX(0); opacity: 1; }
          }
          .animate-slideLeft { animation: slideLeft 1s ease-out forwards; }
          .animate-slideRight { animation: slideRight 1s ease-out forwards; }
        `}
      </style>
    </section>
  );
};

export default ServicesOverview;
