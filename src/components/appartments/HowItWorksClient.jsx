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
      <div className="container mx-auto px-6 text-center">
        <h2
          data-aos="fade-down"
          className="text-3xl md:text-4xl font-bold mb-16 text-[#B78E3B]"
        >
          Client Journey (Tenants)
        </h2>

        <div className="relative flex flex-wrap justify-center gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 200}
              className={`flex flex-col items-center bg-white p-5 rounded-3xl shadow-lg 
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
