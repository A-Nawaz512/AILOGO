import React, { useEffect } from 'react';
import { IoLocationOutline, IoTimeOutline } from 'react-icons/io5';
import { MdOutlineEmail, MdOutlineSupportAgent } from 'react-icons/md';
import { FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';
import { HiOutlineBuildingOffice2 } from 'react-icons/hi2';
import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css'; // Import AOS styles

function ContactInfo() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true,     // Animation triggers only once
    });
  }, []);

  const contactItems = [
    {
      icon: <IoLocationOutline className="w-6 h-6" />,
      title: "Headquarters",
      content: "Algiers Digital Hub, Zone 2, Bab Ezzouar, Algiers, Algeria",
      sub: "Main operational center",
      aos: "flip-up" // Flip-up animation for Headquarters
    },
    {
      icon: <HiOutlineBuildingOffice2 className="w-6 h-6" />,
      title: "Regional Offices",
      content: "Oran · Constantine · Annaba · Tlemcen",
      sub: "Available in major cities",
      aos: "slide-right" // Slide-right animation for Regional Offices
    },
    {
      icon: <FaPhoneAlt className="w-5 h-5" />,
      title: "Support Line",
      content: "+213 770 12 34 56",
      sub: "24/7 Customer Service",
      aos: "fade-left" // Fade-left animation for Support Line
    },
    {
      icon: <FaWhatsapp className="w-5 h-5" />,
      title: "WhatsApp Business",
      content: "+213 550 12 34 56",
      sub: "Quick response guaranteed",
      aos: "zoom-in" // Zoom-in animation for WhatsApp Business
    },
    {
      icon: <MdOutlineEmail className="w-6 h-6" />,
      title: "Email",
      content: "contact@allogo.dz",
      sub: "support@allogo.dz",
      aos: "flip-left" // Flip-left animation for Email
    },
    {
      icon: <IoTimeOutline className="w-6 h-6" />,
      title: "Operating Hours",
      content: "24/7 All Services",
      sub: "Round-the-clock availability",
      aos: "fade-right" // Fade-right animation for Operating Hours
    }
  ];

  return (
    <div>
      <div className="mb-8">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#6F4918]/20 to-[#E2CF7D]/10 rounded-full border border-[#E2CF7D]/20 mb-4">
          <MdOutlineSupportAgent className="text-[#E2CF7D]" />
          <span className="text-sm font-medium text-[#E2CF7D]">Always Available</span>
        </div>
        <h2 className="text-3xl font-bold text-white mb-4" data-aos="slide-up">
          Get in <span className="text-[#E2CF7D]">Touch</span>
        </h2>
        <p className="text-gray-400 leading-relaxed" data-aos="fade-down">
          Whether you need support with rides, rentals, deliveries, or want to partner with AlLOGO, our team is ready to assist you 24/7.
        </p>
      </div>

      <div className="space-y-6">
        {contactItems.map((item, index) => (
          <div 
            key={index} 
            className="group p-4 rounded-xl border border-gray-800 hover:border-[#E2CF7D]/30 hover:bg-gradient-to-r hover:from-[#E2CF7D]/5 hover:to-transparent transition-all duration-300 cursor-pointer"
            data-aos={item.aos} // Dynamic AOS animation for each contact item
          >
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-gradient-to-br from-[#6F4918]/20 to-[#E2CF7D]/10 group-hover:from-[#E2CF7D]/30 group-hover:to-[#6F4918]/30 transition-all duration-300">
                <div className="text-[#E2CF7D]">
                  {item.icon}
                </div>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-1">{item.title}</h3>
                <p className="text-gray-300 font-medium">{item.content}</p>
                <p className="text-sm text-gray-500 mt-1">{item.sub}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 pt-8 border-t border-gray-800">
        <h4 className="text-white font-semibold mb-4" data-aos="zoom-out">
          Emergency Support
        </h4>
        <button 
          className="w-full py-3 bg-gradient-to-r from-red-900/30 to-red-800/20 hover:from-red-800/40 hover:to-red-900/30 border border-red-800/30 rounded-xl text-red-300 font-medium transition-all duration-300 hover:scale-105" 
          data-aos="flip-down" // Flip-down animation for Emergency Button
        >
          🚨 Emergency Roadside Assistance
        </button>
      </div>
    </div>
  );
}

export default ContactInfo;
