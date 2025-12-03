import React, { useEffect } from 'react';
import {
  FaUserPlus,
  FaImages,
  FaFileAlt,
  FaCheckCircle,
  FaCalendarAlt,
  FaStar,
} from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

const HOST_STEPS = [
  {
    id: 1,
    icon: FaUserPlus,
    title: "Register as provider",
    description: "Sign up as a host and create your provider account on ALLOGO.",
  },
  {
    id: 2,
    icon: FaImages,
    title: "Add apartment listings",
    description: "Add apartments with photos, descriptions, and amenities.",
  },
  {
    id: 3,
    icon: FaFileAlt,
    title: "Upload ownership documents",
    description: "Submit ownership or authorization documents for verification.",
  },
  {
    id: 4,
    icon: FaCheckCircle,
    title: "Get validated by controller",
    description: "Wait for verification and approval from the platform controller.",
  },
  {
    id: 5,
    icon: FaCalendarAlt,
    title: "Manage bookings & prices",
    description: "Receive booking requests and manage your calendar and pricing.",
  },
  {
    id: 6,
    icon: FaStar,
    title: "Rate tenants",
    description: "After each stay, rate the tenant to maintain trust and transparency.",
  },
];

function TimelineItem({ Icon, number, title, description, delay }) {
  return (
    <div
      data-aos="fade-up"
      data-aos-delay={delay}
      className="relative pl-14 py-8 group"
    >
    
      <span className="absolute left-5 top-0 h-full w-1 bg-[#B78E3B]/20 rounded-full"></span>

  
      <div className="absolute left-0 flex items-center justify-center h-10 w-10 rounded-full 
                      bg-white shadow-md border border-[#B78E3B]/40 
                      group-hover:shadow-xl group-hover:shadow-[#B78E3B]/50 transition duration-300">
        <Icon className="text-[#B78E3B]" size={20} />
      </div>

      
      <div className="bg-white rounded-2xl p-6 
                      shadow-md border border-gray-200 
                      group-hover:shadow-xl group-hover:shadow-[#B78E3B]/40 transition duration-300">
        <h3 className="text-lg font-semibold text-[#B78E3B] mb-2">
          {number}. {title}
        </h3>
        <p className="text-black text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

export default function HowItWorksHost() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <h2
          data-aos="fade-down"
          className="text-center text-3xl font-bold text-[#B78E3B] mb-12"
        >
          How It Works – Host / Provider
        </h2>

      
        <div className="max-w-3xl mx-auto">
          {HOST_STEPS.map((step, index) => (
            <TimelineItem
              key={step.id}
              Icon={step.icon}
              number={index + 1}
              title={step.title}
              description={step.description}
              delay={index * 200} 
            />
          ))}
        </div>
      </div>
    </section>
  );
}
