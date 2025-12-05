"use client";
import React, { useEffect, useState } from "react";
import {
   FaCar,
   FaShieldAlt,
   FaMotorcycle,
   FaHome,
   FaMapMarkedAlt,
   FaWrench,
} from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const HeroSection = () => {
   const [currentImageIndex, setCurrentImageIndex] = useState(0);
   const [currentContentIndex, setCurrentContentIndex] = useState(0);

   const backgroundImages = [
      "/rides.jpg",
      "/delivery.avif",
      "/rodeside-assistence.avif",
      "/vehical-rental.webp",
      "/apartement-rental.jpg",
   ];

   const contentTexts = [
      {
         title: "Effortless Rides",
         description:
            "Book a ride anytime, anywhere with our easy-to-use platform. Enjoy safe and comfortable trips. Real-time tracking ensures you never wait long.",
         icon: <FaCar className="text-[#E2CF7D] text-2xl mb-2" />,
         iconText: "Quick Rides",
         iconSubText: "24/7 Availability",
      },
      {
         title: "Fast Deliveries",
         description:
            "Send packages or groceries effortlessly across the city. Track your delivery live with updates at every step. Safe, timely, and convenient service for everyone.",
         icon: <FaMotorcycle className="text-[#E2CF7D] text-2xl mb-2" />,
         iconText: "Instant Delivery",
         iconSubText: "Real-time Tracking",
      },
      {
         title: "Roadside Assistance",
         description:
            "Stuck on the road? Our experts are just a click away. Fast, reliable, and professional help for any car trouble. Peace of mind wherever you go.",
         icon: <FaWrench className="text-[#E2CF7D] text-2xl mb-2" />,
         iconText: "24/7 Support",
         iconSubText: "Expert Assistance",
      },
      {
         title: "Car Rentals",
         description:
            "Rent a car for a few hours or days at affordable rates. Wide selection of vehicles to suit your needs. Hassle-free booking and convenient pick-up/drop-off options.",
         icon: <FaCar className="text-[#E2CF7D] text-2xl mb-2" />,
         iconText: "Wide Fleet",
         iconSubText: "Flexible Plans",
      },
      {
         title: "Comfortable Apartments",
         description:
            "Find the perfect apartment for short or long stays. Verified listings with detailed information. Enjoy hassle-free rentals with secure payments.",
         icon: <FaHome className="text-[#E2CF7D] text-2xl mb-2" />,
         iconText: "Verified Listings",
         iconSubText: "Flexible Stays",
      },
   ];
   // Initialize AOS (tablet & desktop only)
   useEffect(() => {
      const isDesktopOrTablet = window.innerWidth >= 768;

      if (isDesktopOrTablet) {
         AOS.init({
            duration: 800,
            once: false, // allow repeat animations
            offset: 100,
         });
      }

      const handleResize = () => {
         if (window.innerWidth >= 768) {
            AOS.init({
               duration: 800,
               once: false,
               offset: 100,
            });
         } else {
            AOS.refreshHard();
         }
      };

      window.addEventListener("resize", handleResize);

      const imageInterval = setInterval(() => {
         setCurrentImageIndex((prev) =>
            prev === backgroundImages.length - 1 ? 0 : prev + 1
         );
      }, 5000);

      const contentInterval = setInterval(() => {
         setCurrentContentIndex((prev) =>
            prev === contentTexts.length - 1 ? 0 : prev + 1
         );
      }, 5000);

      return () => {
         clearInterval(imageInterval);
         clearInterval(contentInterval);
         window.removeEventListener("resize", handleResize);
      };
   }, []);

   // Refresh AOS on content change (desktop/tablet only)
   useEffect(() => {
      if (window.innerWidth >= 768) {
         AOS.refresh();
      }
   }, [currentContentIndex]);

   const currentContent = contentTexts[currentContentIndex];

   return (
      <section className="relative py-20 px-6 lg:px-8 overflow-hidden md:min-h-[90vh]">
         {/* Background images */}
         {backgroundImages.map((image, index) => (
            <div
               key={image}
               className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ease-in-out ${
                  index === currentImageIndex ? "opacity-100" : "opacity-0"
               }`}
               style={{ backgroundImage: `url('${image}')` }}
            />
         ))}

         {/* Overlay */}
         <div className="absolute inset-0 bg-black/50 transition-opacity duration-1000"></div>

         <div className="max-w-[100%] flex items-center justify-center mx-auto relative z-10">
            <div className="max-w-7xl  flex items-center justify-center pt-20">
               <div className="animate-fadeIn w-[70%] mx-auto flex flex-col  justify-center items-center gap-15">
                  {/* Title */}
                  <div>
                     <h1
                        className="text-4xl text-center md:text-6xl font-bold mb-6 transition-all duration-1000"
                        data-aos="zoom-in"
                        data-aos-delay="100"
                        key={currentContentIndex}
                     >
                        <span className="text-white">
                           {currentContent.title
                              .split(" ")
                              .slice(0, -2)
                              .join(" ")}
                        </span>{" "}
                        <span className="bg-[#926325] bg-clip-text text-transparent">
                           {currentContent.title.split(" ").slice(-2).join(" ")}
                        </span>
                     </h1>
                     {/* Description */}
                     <p
                        className="text-white text-center text-lg mb-8 leading-relaxed transition-all duration-1000"
                        data-aos="zoom-in"
                        data-aos-delay="200"
                        key={`desc-${currentContentIndex}`}
                     >
                        {currentContent.description}
                     </p>
                  </div>

                  <div>
                     <button >
                        <Link className="border-2 border-white py-3 hover:bg-white hover:text-[#7A5522] transition-all duration-500 px-4 rounded-full text-white"  to={"/contact"} >Contact Us For Details</Link>
                     </button>
                  </div>

                  {/* Dots */}
                  <div className="hidden md:flex  space-x-3 mb-8">
                     {contentTexts.map((_, index) => (
                        <button
                           key={index}
                           onClick={() => {
                              setCurrentContentIndex(index);
                              setCurrentImageIndex(index);
                           }}
                           className={`w-3 h-3 rounded-full transition-all duration-300 ${
                              index === currentContentIndex
                                 ? "bg-[#E2CF7D] w-8"
                                 : "bg-white/50"
                           }`}
                           aria-label={`Go to slide ${index + 1}`}
                        />
                     ))}
                  </div>
               </div>
            </div>
         </div>

         {/* ✅ Corrected JSX style block */}
         <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 1s ease-out;
        }
      `}</style>
      </section>
   );
};

export default HeroSection;
