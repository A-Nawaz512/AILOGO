import React from 'react';
import {
  FaUserPlus,
  FaImages,
  FaCalendarAlt,
  FaEnvelope,
  FaMoneyBillWave,
} from 'react-icons/fa';

/* ----------------------------------------------------
   HOST STEPS DATA
---------------------------------------------------- */
const HOST_STEPS = [
  {
    id: 1,
    icon: FaUserPlus,
    title: "Create owner account",
    description: "Sign up as a host and start listing your apartments on ALLOGO.",
  },
  {
    id: 2,
    icon: FaImages,
    title: "Add apartment details, photos, rules",
    description: "Upload photos, create descriptions, and define house rules.",
  },
  {
    id: 3,
    icon: FaCalendarAlt,
    title: "Set availability & pricing",
    description: "Choose available dates and configure your pricing options.",
  },
  {
    id: 4,
    icon: FaEnvelope,
    title: "Receive bookings & messages",
    description: "Accept bookings and chat easily with clients.",
  },
  {
    id: 5,
    icon: FaMoneyBillWave,
    title: "Get paid through ALLOGO",
    description: "Receive secure payments after each completed stay.",
  },
];

/* ----------------------------------------------------
   STEP TIMELINE ITEM
---------------------------------------------------- */
function TimelineItem({ Icon, number, title, description }) {
  return (
    <div className="relative pl-14 py-8 group">
      {/* Vertical Line */}
      <span className="absolute left-5 top-0 h-full w-1 bg-[#9A7A3E]/20 rounded-full"></span>

      {/* Step Number Circle */}
      <div className="absolute left-0 flex items-center justify-center h-10 w-10 rounded-full 
                      bg-white shadow-md border border-[#9A7A3E]/40 
                      group-hover:shadow-xl group-hover:shadow-[#9A7A3E]/50 transition duration-300">
        <Icon className="text-[#9A7A3E]" size={20} />
      </div>

      {/* Content */}
      <div className="bg-white rounded-2xl p-6 
                      shadow-md border border-gray-200 
                      group-hover:shadow-xl group-hover:shadow-[#9A7A3E]/40 transition duration-300">
        <h3 className="text-lg font-semibold text-[#9A7A3E] mb-2">
          {number}. {title}
        </h3>
        <p className="text-gray-700 text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

/* ----------------------------------------------------
   MAIN COMPONENT
---------------------------------------------------- */
export default function HowItWorksHost() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-center text-3xl font-bold text-[#9A7A3E] mb-12">
          How It Works – Host / Owner
        </h2>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto">
          {HOST_STEPS.map((step, index) => (
            <TimelineItem
              key={step.id}
              Icon={step.icon}
              number={index + 1}
              title={step.title}
              description={step.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}