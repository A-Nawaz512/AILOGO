// src/components/about/ContactCTA.jsx
import React from "react";
import { FaWhatsapp, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const ContactCTA = () => {
  const contacts = [
    { icon: <FaWhatsapp />, label: "WhatsApp Support", text: "1234 5678 890" },
    { icon: <FaEnvelope />, label: "Email", text: "contact@allogo.dz" },
    { icon: <FaPhoneAlt />, label: "Phone", text: "1234 5678 890" },
  ];

  const links = [
    { to: "/signup", text: "Sign Up Free", style: "bg-white bg-gradient-to-r from-[#6F4918] to-[#E2CF7D] bg-clip-text text-transparent border border-[#6F4918]" },
    { to: "/login", text: "Login to Account", style: "bg-white bg-gradient-to-r from-[#6F4918] to-[#E2CF7D] bg-clip-text text-transparent border border-[#6F4918]" },
    { to: "/services", text: "Explore Services", style: " bg-gradient-to-r from-[#6F4918] to-[#E2CF7D] text-gray-100 border border-[#BD9751]" },
  ];

  return (
    <section className="py-20 px-6 lg:px-8 overflow-hidden bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-3xl md:text-4xl text-[#1E2939] font-bold mb-6 flex flex-wrap gap-2">
              <span>Ready to Transform</span>
              <span className="bg-gradient-to-r from-[#6F4918] to-[#E2CF7D] bg-clip-text text-transparent">
                Service Experience?
              </span>
            </h2>
            <p className="text-gray-800 mb-8 text-lg hover:text-[#6F4918] transition-colors duration-500">
              Join ALLOGO today as a user, driver, courier, or partner.
            </p>

            <div className="space-y-4">
              {contacts.map((contact, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-4 group cursor-pointer transition-all duration-500"
                >
                  <div className="w-12 h-12 flex text-white items-center justify-center rounded-lg bg-gradient-to-r from-[#6F4918] to-[#E2CF7D] transition-transform duration-500">
                    {contact.icon}
                  </div>
                  <div className="transition-transform duration-500 group-hover:translate-x-2">
                    <p className="text-gray-900 text-sm group-hover:text-[#785320] transition-colors duration-500">
                      {contact.label}
                    </p>
                    <p className="text-gray-800 font-semibold group-hover:text-[#382a2a] transition-colors duration-500">
                      {contact.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Card */}
          <div className="relative">
            <div className="bg-white shadow-xl rounded-xl p-8 overflow-hidden transition-all duration-500 hover:shadow-2xl hover:scale-[1.02]">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-[#6F4918] to-[#E2CF7D] bg-clip-text text-transparent mb-6 transition-colors duration-500 group-hover:text-[#BD9751]">
                Get Started Now
              </h3>
              <div className="space-y-4">
                {links.map((link, index) => (
                  <Link
                    key={index}
                    to={link.to}
                    className={`block w-full py-2 text-center rounded-lg font-semibold text-lg transition-all duration-500 hover:scale-[1.02] hover:shadow-lg ${link.style}`}
                  >
                    {link.text}
                  </Link>
                ))}
              </div>

              <div className="mt-8 pt-8 border-t border-gray-200 transition-all duration-500 text-center">
                <p className="text-gray-600 hover:text-[#202020] transition-colors duration-500">
                  <span className="text-[#6F4918] font-semibold hover:text-[#E2CF7D] transition-colors duration-500">
                    All commissions
                  </span>{" "}
                  reinvested in platform development & user experience
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
