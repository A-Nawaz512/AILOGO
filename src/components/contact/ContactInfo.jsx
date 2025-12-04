import React, { useEffect } from "react";
import { IoLocationOutline, IoTimeOutline } from "react-icons/io5";
import { MdOutlineEmail, MdOutlineSupportAgent } from "react-icons/md";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import AOS from "aos";
import "aos/dist/aos.css";

function ContactInfo() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const contactItems = [
    {
      icon: <IoLocationOutline className="w-6 h-6" />,
      title: "Headquarters",
      content: "Algiers Digital Hub, Bab Ezzouar, Algiers, Algeria",
      sub: "Main operational center",
      textColor: "text-[#D08700]",
    },
    {
      icon: <HiOutlineBuildingOffice2 className="w-6 h-6" />,
      title: "Regional Offices",
      content: "Oran · Constantine · Annaba · Tlemcen",
      sub: "Available in major cities",
      textColor: "text-[#D08700]",
    },
    {
      icon: <FaPhoneAlt className="w-5 h-5" />,
      title: "Support Line",
      content: "+213 770 12 34 56",
      sub: "24/7 Customer Service",
      textColor: "text-[#D08700]",
    },
    {
      icon: <FaWhatsapp className="w-5 h-5" />,
      title: "WhatsApp Business",
      content: "+213 550 12 34 56",
      sub: "Quick response guaranteed",
      textColor: "text-[#D08700]",
    },
    {
      icon: <MdOutlineEmail className="w-6 h-6" />,
      title: "Email",
      content: "contact@allogo.dz",
      sub: "support@allogo.dz",
      textColor: "text-[#D08700]",
    },
    {
      icon: <IoTimeOutline className="w-6 h-6" />,
      title: "Operating Hours",
      content: "24/7 All Services",
      sub: "Round-the-clock availability",
      textColor: "text-[#D08700]",
    },
  ];

  return (
    <div>
      <div className="mb-8" data-aos="fade-down">
        {/* Status Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#6F4918] to-[#E2CF7D] rounded-full mb-4 border border-transparent">
          <MdOutlineSupportAgent className="text-white" />
          <span className="text-sm font-medium text-white">
            Always Available
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Get in{" "}
          <span className="bg-gradient-to-r from-[#6F4918] to-[#E2CF7D] bg-clip-text text-transparent">
            Touch
          </span>
        </h2>

        {/* Description */}
        <p className="text-gray-600 leading-relaxed">
          Whether you need support with rides, rentals, deliveries, or
          partnerships, our team is ready to assist 24/7.
        </p>
      </div>

      <div className="space-y-4">
       {contactItems.map((item, idx) => (
  <div
    key={idx}
    className={`group p-4 rounded-xl border border-gray-200 hover:border-transparent hover:bg-[#3b3b37] transition-all duration-300 delay-${idx * 50} cursor-pointer`}
    data-aos="fade-up"
    data-aos-delay={idx * 50}
  >
    <div className="flex items-start gap-4">
      {/* Icon Column */}
      <div className="p-3 rounded-lg bg-gray-100 group-hover:bg-gradient-to-r group-hover:from-[#6F4918] group-hover:to-[#E2CF7D] transition-all duration-300 delay-75 flex items-center justify-center">
        <div className="group-hover:text-white text-[#D08700] transition-colors duration-300 delay-150">
          {item.icon}
        </div>
      </div>

      {/* Text Column */}
      <div className="flex-1">
        <h3 className="text-gray-700 group-hover:text-white font-semibold mb-1 transition-colors duration-300 delay-150">{item.title}</h3>
        <p className="text-gray-800 group-hover:text-white font-medium text-lg mb-1 transition-colors duration-300 delay-150">{item.content}</p>
        <p className="text-sm text-gray-500 group-hover:text-gray-300 transition-colors duration-300 delay-150">{item.sub}</p>
      </div>
    </div>
  </div>
))}

      </div>

      <div
        className="mt-8 pt-8 border-t border-gray-200"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        <h4 className="text-gray-800 font-semibold mb-4 flex items-center gap-2">
          <span className="text-red-500">🚨</span> Emergency Support
        </h4>
        <button className="w-full py-4 bg-red-100 text-red-700 font-semibold rounded-xl transition-all duration-300 hover:scale-105">
          Emergency Roadside Assistance
        </button>
      </div>
    </div>
  );
}

export default ContactInfo;
