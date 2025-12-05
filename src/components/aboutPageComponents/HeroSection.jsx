import React, { useEffect, useState } from "react";
import { FaCar, FaMotorcycle, FaWrench, FaHome } from "react-icons/fa";
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
      gradientWords: ["Rides"], // word with gradient
      description:
        "Book a ride anytime, anywhere with our easy-to-use platform. Enjoy safe and comfortable trips. Real-time tracking ensures you never wait long.",
      icon: <FaCar className="text-[#E2CF7D] text-2xl mb-2" />,
    },
    {
      title: "Fast Deliveries",
      gradientWords: ["Fast"], // word with gradient
      description:
        "Send packages or groceries effortlessly across the city. Track your delivery live with updates at every step. Safe, timely, and convenient service for everyone.",
      icon: <FaMotorcycle className="text-[#E2CF7D] text-2xl mb-2" />,
    },
    {
      title: "Roadside Assistance",
      gradientWords: ["Assistance"], // word with gradient
      description:
        "Stuck on the road? Our experts are just a click away. Fast, reliable, and professional help for any car trouble. Peace of mind wherever you go.",
      icon: <FaWrench className="text-[#E2CF7D] text-2xl mb-2" />,
    },
    {
      title: "Car Rentals",
      gradientWords: ["Rentals"], // word with gradient
      description:
        "Rent a car for a few hours or days at affordable rates. Wide selection of vehicles to suit your needs. Hassle-free booking and convenient pick-up/drop-off options.",
      icon: <FaCar className="text-[#E2CF7D] text-2xl mb-2" />,
    },
    {
      title: "Comfortable Apartments",
      gradientWords: ["Comfortable"], // word with gradient
      description:
        "Find the perfect apartment for short or long stays. Verified listings with detailed information. Enjoy hassle-free rentals with secure payments.",
      icon: <FaHome className="text-[#E2CF7D] text-2xl mb-2" />,
    },
  ];

  useEffect(() => {
    const isDesktopOrTablet = window.innerWidth >= 768;

    if (isDesktopOrTablet) {
      AOS.init({ duration: 800, once: false, offset: 100 });
    }

    const handleResize = () => {
      if (window.innerWidth >= 768) {
        AOS.init({ duration: 800, once: false, offset: 100 });
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

  useEffect(() => {
    if (window.innerWidth >= 768) {
      AOS.refresh();
    }
  }, [currentContentIndex]);

  const currentContent = contentTexts[currentContentIndex];

  return (
    <section className="relative px-6 lg:px-8 overflow-hidden bg-[#1a1a1a]">
      {backgroundImages.map((image, index) => (
        <div
          key={image}
          className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ease-in-out ${
            index === currentImageIndex ? "opacity-40" : "opacity-0"
          }`}
          style={{ backgroundImage: `url('${image}')` }}
        />
      ))}

      <div className="absolute inset-0 bg-gradient-to-r from-[#6F4918]/70 to-[#E2CF7D]/40 mix-blend-multiply" />

      <div className="max-w-[100%] flex items-center justify-center mx-auto relative z-10">
        <div className="max-w-7xl flex items-center justify-center pt-20">
          <div className="animate-fadeIn w-[70%] mx-auto flex flex-col justify-center items-center gap-15">
            <div>
              <h1
                className="text-3xl text-center md:text-6xl font-bold mb-6 transition-all duration-1000"
                data-aos="zoom-in"
                data-aos-delay="100"
                key={currentContentIndex}
              >
                {currentContent.title.split(" ").map((word, i) => {
                  const isGradient =
                    currentContent.gradientWords.includes(word);
                  return (
                    <span
                      key={i}
                      className={
                        isGradient
                          ? "bg-gradient-to-r from-[#6F4918] to-[#E2CF7D] bg-clip-text text-transparent"
                          : "text-white"
                      }
                    >
                      {word}{" "}
                    </span>
                  );
                })}
              </h1>

              <p
                className="text-white text-center text-lg mb-8 leading-relaxed transition-all duration-1000"
                data-aos="zoom-in"
                data-aos-delay="200"
                key={`desc-${currentContentIndex}`}
              >
                {currentContent.description}
              </p>
            </div>

            <div className="flex gap-2">
              <button className="group relative inline-block">
                <Link
                  to="/contact"
                  className="relative px-8 py-3 font-semibold text-white rounded-xl overflow-hidden bg-gradient-to-r from-[#6F4918] to-[#E2CF7D] shadow-lg transition-all duration-500 ease-in-out group-hover:scale-105 group-hover:shadow-2xl"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-[#E2CF7D]/50 to-[#6F4918]/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></span>
                  <span className="relative z-10">Contact Us</span>
                </Link>
              </button>
              <button className="group relative inline-block">
                <Link
                  to="/services/food-delivery"
                  className="relative px-8 py-3 font-semibold text-white rounded-xl overflow-hidden bg-gradient-to-r from-[#6F4918] to-[#E2CF7D] shadow-lg transition-all duration-500 ease-in-out group-hover:scale-105 group-hover:shadow-2xl"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-[#E2CF7D]/50 to-[#6F4918]/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></span>
                  <span className="relative z-10">View More</span>
                </Link>
              </button>
            </div>

            <div className="hidden md:flex space-x-3 mb-8">
              {contentTexts.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentContentIndex(index);
                    setCurrentImageIndex(index);
                  }}
                  className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${
                    index === currentContentIndex
                      ? "bg-[#6F4918] w-8"
                      : "bg-white/50"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

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
