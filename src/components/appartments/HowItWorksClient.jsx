import React, { useEffect } from 'react';
import { FaMapMarkerAlt, FaImages, FaLock, FaPhone, FaStar } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

const steps = [
  {
    icon: <FaMapMarkerAlt size={28} className="text-[#B78E3B]" />,
    title: "Search by city, dates, price range",
    description: "Select your preferred city, dates, and price range for your stay."
  },
  {
    icon: <FaImages size={28} className="text-[#B78E3B]" />,
    title: "View apartment details",
    description: "Check photos, amenities, and location on the map for each apartment."
  },
  {
    icon: <FaLock size={28} className="text-[#B78E3B]" />,
    title: "Book & pay by card only",
    description: "Securely book your apartment using card payment."
  },
  {
    icon: <FaPhone size={28} className="text-[#B78E3B]" />,
    title: "Get temporary contact number",
    description: "Receive a temporary number and check-in details after booking."
  },
  {
    icon: <FaStar size={28} className="text-[#B78E3B]" />,
    title: "Rate owner/apartment",
    description: "After your stay, rate the owner and apartment to help future tenants."
  },
];

export default function HowItWorksClient() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="py-20 bg-gray-50 text-black">
      <div className="container mx-auto px-5 py-2 text-center">
        <div className="flex  justify-center items-center mb-12">
            <div className="h-px mt-2 w-12 bg-gradient-to-r from-transparent to-[#B78E3B] mr-4"></div>
            <h2 className="text-2xl md:text-3xl font-bold">
               Client {""} <span style={{ color: '#B78E3B' }}>Journey (Tenants)</span>
            </h2>
            <div className="h-px mt-2 w-12 bg-gradient-to-l from-transparent to-[#B78E3B] ml-4"></div>
          </div>

        <div className="relative flex flex-wrap justify-center gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 200}
              className={`flex flex-col items-center bg-white px-5 py-2 rounded-3xl shadow-lg 
                         hover:shadow-[#B78E3B]/70 transition duration-300 w-72 md:w-80
                         ${index >= 3 ? 'mt-12 lg:mt-6' : 'mt-0'}`}
            >
              {/* ICON – removed background like your screenshot */}
              <div className="mb-4 flex items-center justify-center">
                {step.icon}
              </div>

              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-black text-sm leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
