import React, { useEffect } from 'react';
import { FaLock, FaPhone, FaCheckCircle, FaStar, FaHistory, FaCoins } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

const features = [
  {
    icon: <FaLock size={30} className="text-[#B78E3B] mb-2" />,
    title: "Card-only payment",
    description: "All bookings are securely paid via card only."
  },
  {
    icon: <FaPhone size={30} className="text-[#B78E3B] mb-2" />,
    title: "Temporary number",
    description: "A temporary contact number is generated after payment."
  },
  {
    icon: <FaCheckCircle size={30} className="text-[#B78E3B] mb-2" />,
    title: "Verified listings",
    description: "Documents and photos of apartments are thoroughly verified."
  },
  {
    icon: <FaStar size={30} className="text-[#B78E3B] mb-2" />,
    title: "Owner & tenant ratings",
    description: "Rate both owners and tenants after your stay."
  },
  {
    icon: <FaHistory size={30} className="text-[#B78E3B] mb-2" />,
    title: "History & dispute management",
    description: "Track booking history and manage disputes efficiently."
  },
  {
    icon: <FaCoins size={30} className="text-[#B78E3B] mb-2" />,
    title: "Earn & use points",
    description: "Users can pay part of booking with points; owners may convert points to app credit."
  },
];

export default function KeyBenefits() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="py-2 bg-white text-black">
      <div className="container mx-auto px-5 py-2 text-center">
        <div className="flex  justify-center items-center mb-6 ">
            <div className="h-px mt-2 w-12 bg-gradient-to-r from-transparent to-[#B78E3B] mr-4"></div>
            <h2 className="text-2xl md:text-3xl font-bold">
              Key{""} <span style={{ color: '#B78E3B' }}> Benefits </span>
            </h2>
            <div className="h-px mt-2 w-12 bg-gradient-to-l from-transparent to-[#B78E3B] ml-4"></div>
          </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center">
          {features.map((feature, index) => (
            <div 
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 200} // stagger animations
              className="bg-white border border-[#B78E3B]/30 p-6 rounded-2xl shadow-md 
                         hover:shadow-[#B78E3B]/80 transition duration-400 w-full max-w-sm"
            >
              <div className="flex flex-col items-center">
                {feature.icon}
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-black text-sm">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
