// src/components/about/OurStory.jsx
import React, { useEffect } from "react";
import { FaRocket, FaUsers, FaGlobeAfrica } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const OurStory = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      disable: window.innerWidth < 768,
      startEvent: "DOMContentLoaded",
      offset: 100,
    });

    const handleResize = () => {
      if (window.innerWidth >= 768) {
        AOS.init({
          duration: 800,
          once: true,
          disable: false,
          startEvent: "DOMContentLoaded",
          offset: 100,
        });
      } else {
        AOS.refreshHard();
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const cards = [
    {
      title: "The Beginning",
      icon: <FaRocket />,
      description:
        "Started with a simple idea: create a unified platform that solves multiple daily needs.",
      image: "/simple1.jpg",
    },
    {
      title: "UC Design",
      icon: <FaUsers />,
      description:
        "Clean interfaces and discreet registration with powerful features.",
      image: "/design.jpg",
    },
    {
      title: "Local Focus",
      icon: <FaGlobeAfrica />,
      description:
        "Tailored for Algerian cities with inter-wilaya and intra-wilaya services.",
      image: "/world.jpg",
    },
  ];

  return (
    <section className="min-h-screen pt-12 px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <div className="flex justify-center items-center mb-2">
            <div className="h-px mt-2 w-12 bg-gradient-to-r from-transparent to-[#B78E3B] mr-4"></div>
            <h2 className="text-2xl md:text-4xl text-[#1E2939] font-bold">
              Our<span style={{ color: "#B78E3B" }}> Story</span>
            </h2>
            <div className="h-px mt-2 w-12 bg-gradient-to-l from-transparent to-[#B78E3B] ml-4"></div>
          </div>
          <p
            className="text-gray-800 text-lg max-w-3xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Born from the vision to create Algeria's most comprehensive service
            platform, our journey began with a commitment to bridge the gap
            between traditional services and digital convenience.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="group relative rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500"
              data-aos="fade-up"
              data-aos-delay={300 + idx * 100}
            >
              {/* Background image */}
              <div className="relative h-52 overflow-hidden  ease-in-out group-hover:scale-105 transition-transform duration-500">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>

              {/* Content Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/60 to-transparent rounded-b-3xl">
                <div className="flex items-center space-x-4 mb-3">
                  <div className="bg-gradient-to-br from-[#6F4918] to-[#E2CF7D] w-12 h-12 flex items-center justify-center rounded-full text-white text-2xl transition-transform duration-500 group-hover:scale-110">
                    {card.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white transition-transform duration-500 group-hover:translate-x-1">
                    {card.title}
                  </h3>
                </div>
                <p className="text-gray-200">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurStory;
