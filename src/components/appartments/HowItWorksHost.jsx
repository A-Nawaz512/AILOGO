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
  { id: 1, icon: FaUserPlus, title: "Register as provider", description: "Sign up as a host and create your provider account on ALLOGO." },
  { id: 2, icon: FaImages, title: "Add apartment listings", description: "Add apartments with photos, descriptions, and amenities." },
  { id: 3, icon: FaFileAlt, title: "Upload ownership documents", description: "Submit ownership or authorization documents for verification." },
  { id: 4, icon: FaCheckCircle, title: "Get validated by controller", description: "Wait for verification and approval from the platform controller." },
  { id: 5, icon: FaCalendarAlt, title: "Manage bookings & prices", description: "Receive booking requests and manage your calendar and pricing." },
  { id: 6, icon: FaStar, title: "Rate tenants", description: "After each stay, rate the tenant to maintain trust and transparency." },
];

function TimelineCard({ Icon, number, title, description, delay, align }) {
  return (
    <div
      data-aos={align === "left" ? "fade-right" : "fade-left"}
      data-aos-delay={delay}
      className={`relative w-full mb-8 flex ${align === "left" ? "justify-start" : "justify-end"}`}
    >
      {/* ICON on center line */}
      <div
        className={`
          absolute top-1/2 -translate-y-1/2
          h-12 w-12 rounded-full bg-white border border-[#B78E3B]
          shadow-md flex items-center justify-center z-30
          left-1/2 -translate-x-1/2
        `}
      >
        <Icon className="text-[#B78E3B]" size={20} />
      </div>

      {/* CARD */}
      <div
        className={`
          max-w-md bg-white p-4 rounded-2xl shadow-md border border-gray-200
          relative
          ${align === "left" ? "mr-6" : "ml-6"}
        `}
      >
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

        {/* HEADER */}
        <div className="flex justify-center items-center mb-12">
          <div className="h-px mt-2 w-16 bg-gradient-to-r from-transparent to-[#B78E3B] mr-4"></div>
          <h2 className="text-2xl md:text-3xl font-bold">
            How It <span className="text-[#B78E3B]">Works – Host / Provider</span>
          </h2>
          <div className="h-px mt-2 w-16 bg-gradient-to-l from-transparent to-[#B78E3B] ml-4"></div>
        </div>

        {/* CENTER LINE */}
        <div className="relative w-full">
          <div className="absolute left-1/2 top-0 h-full w-[2px] bg-[#B78E3B]/30 -translate-x-1/2"></div>

          {/* TIMELINE CARDS */}
          {HOST_STEPS.map((step, index) => (
            <TimelineCard
              key={step.id}
              Icon={step.icon}
              number={index + 1}
              title={step.title}
              description={step.description}
              delay={index * 200}
              align={index % 2 === 0 ? "left" : "right"}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
