import React, { useEffect } from 'react';
import { IoLocationOutline, IoTimeOutline } from 'react-icons/io5';
import { MdOutlineEmail, MdOutlineSupportAgent } from 'react-icons/md';
import { FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';
import { HiOutlineBuildingOffice2 } from 'react-icons/hi2';
import AOS from 'aos';
import 'aos/dist/aos.css';

function ContactInfo() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  const contactItems = [
    {
      icon: <IoLocationOutline className="w-6 h-6" />,
      title: "Headquarters",
      content: "Algiers Digital Hub, Zone 2, Bab Ezzouar, Algiers, Algeria",
      sub: "Main operational center",
      color: "from-blue-500/20 to-cyan-500/10",
      textColor: "text-cyan-300"
    },
    {
      icon: <HiOutlineBuildingOffice2 className="w-6 h-6" />,
      title: "Regional Offices",
      content: "Oran · Constantine · Annaba · Tlemcen",
      sub: "Available in major cities",
      color: "from-emerald-500/20 to-green-500/10",
      textColor: "text-emerald-300"
    },
    {
      icon: <FaPhoneAlt className="w-5 h-5" />,
      title: "Support Line",
      content: "+213 770 12 34 56",
      sub: "24/7 Customer Service",
      color: "from-purple-500/20 to-violet-500/10",
      textColor: "text-purple-300"
    },
    {
      icon: <FaWhatsapp className="w-5 h-5" />,
      title: "WhatsApp Business",
      content: "+213 550 12 34 56",
      sub: "Quick response guaranteed",
      color: "from-green-500/20 to-emerald-500/10",
      textColor: "text-green-300"
    },
    {
      icon: <MdOutlineEmail className="w-6 h-6" />,
      title: "Email",
      content: "contact@allogo.dz",
      sub: "support@allogo.dz",
      color: "from-amber-500/20 to-orange-500/10",
      textColor: "text-amber-300"
    },
    {
      icon: <IoTimeOutline className="w-6 h-6" />,
      title: "Operating Hours",
      content: "24/7 All Services",
      sub: "Round-the-clock availability",
      color: "from-rose-500/20 to-pink-500/10",
      textColor: "text-rose-300"
    }
  ];

  return (
    <div>
      <div className="mb-8" data-aos="fade-down">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#FFD700]/20 to-[#FFA500]/10 rounded-full border border-[#FFD700]/20 mb-4">
          <MdOutlineSupportAgent className="text-[#FFD700]" />
          <span className="text-sm font-medium text-[#C1A762]">Always Available</span>
        </div>
        <h2 className="text-3xl font-bold text-white mb-4">
          Get in <span className="text-[#C1A762]">Touch</span>
        </h2>
        <p className="text-gray-400 leading-relaxed">
          Whether you need support with rides, rentals, deliveries, or want to partner with AlLOGO, our team is ready to assist you 24/7.
        </p>
      </div>

      <div className="space-y-4">
        {contactItems.map((item, index) => (
          <div 
            key={index} 
            className={`group p-4 rounded-xl border border-gray-800 hover:border-gray-700 hover:bg-gradient-to-r ${item.color} transition-all duration-300 cursor-pointer backdrop-blur-sm`}
            data-aos="fade-up"
            data-aos-delay={index * 50}
          >
            <div className="flex items-start gap-4">
              <div className={`p-3 rounded-lg bg-gradient-to-br ${item.color} group-hover:scale-110 transition-all duration-300`}>
                <div className={item.textColor}>
                  {item.icon}
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-gray-300 font-semibold mb-1 group-hover:text-white transition-colors">{item.title}</h3>
                <p className="text-white font-medium text-lg mb-1">{item.content}</p>
                <p className="text-sm text-gray-500">{item.sub}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 pt-8 border-t border-gray-800" data-aos="fade-up" data-aos-delay="300">
        <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
          <span className="text-red-400">🚨</span> Emergency Support
        </h4>
        <button 
          className="w-full py-4 bg-gradient-to-r from-red-900/40 via-red-800/30 to-red-900/40 hover:from-red-800/50 hover:via-red-700/40 hover:to-red-800/50 border border-red-800/40 rounded-xl text-red-100 font-semibold transition-all duration-300 hover:scale-105 backdrop-blur-sm group"
        >
          <span className="flex items-center justify-center gap-3">
            Emergency Roadside Assistance
            <svg className="w-5 h-5 group-hover:animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </span>
        </button>
      </div>
    </div>
  );
}

export default ContactInfo;