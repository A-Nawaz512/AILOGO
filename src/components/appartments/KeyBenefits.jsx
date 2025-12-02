import React, { useEffect } from 'react';
import { FaMapMarkerAlt, FaImages, FaLock, FaSearch } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

const benefits = [
  {
    icon: <FaSearch size={30} className="text-[#B78E3B] mb-2" />,
    title: "Search by city, dates, and price",
    description: "Easily filter apartments by location, availability, and budget."
  },
  {
    icon: <FaImages size={30} className="text-[#B78E3B] mb-2" />,
    title: "Photos and detailed descriptions",
    description: "View high-quality images and detailed apartment information."
  },
  {
    icon: <FaLock size={30} className="text-[#B78E3B] mb-2" />,
    title: "Secure bookings",
    description: "Book with confidence through our safe and secure platform."
  },
  {
    icon: <FaMapMarkerAlt size={30} className="text-[#B78E3B] mb-2" />,
    title: "Location preview on map",
    description: "See apartment locations directly on our interactive 3D map."
  },
];

export default function KeyBenefits() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="py-16 bg-white text-black">
      <div className="container mx-auto px-6 text-center">
        <h2
          data-aos="fade-down"
          className="text-3xl font-bold mb-12 text-[#B78E3B]"
        >
          Key Benefits
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center">
          {benefits.map((benefit, index) => {
            const marginClass = index % 2 === 0 ? "md:ml-40 " : "md:mr-40";

            return (
              <div 
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 200} // stagger animations
                className={`bg-white border border-[#B78E3B]/30 p-6 rounded-2xl shadow-md 
                           hover:shadow-[#B78E3B]/80 transition duration-300 w-full max-w-sm ${marginClass}`}
              >
                <div className="flex flex-col items-center">
                  {benefit.icon}
                  <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-black text-sm">{benefit.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
