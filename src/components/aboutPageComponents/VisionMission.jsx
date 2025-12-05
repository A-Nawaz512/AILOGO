// src/components/about/VisionMission.jsx
import React, { useEffect, useState, useCallback, useMemo } from "react";
import {
  FaEye,
  FaBullseye,
  FaStar,
  FaChartLine,
  FaShieldAlt,
  FaUsers,
  FaRocket,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion, AnimatePresence } from "framer-motion";

// Utility component for Accordion content motion
const AccordionContent = ({ children, isOpen }) => (
  <AnimatePresence initial={false}>
    {isOpen && (
      <motion.div
        key="content"
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: "auto", opacity: 1 }}
        exit={{ height: 0, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="px-6 pb-4 overflow-hidden"
      >
        <p className="text-gray-600 leading-relaxed">{children}</p>
      </motion.div>
    )}
  </AnimatePresence>
);

const VisionMission = () => {
  const [openIndex, setOpenIndex] = useState(null);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      disable: window.innerWidth < 768,
      startEvent: "DOMContentLoaded",
      offset: 100,
    });
  }, []);

  const coreValues = useMemo(
    () => [
      {
        icon: <FaChartLine />,
        label: "Innovation",
        desc: "Pioneering tech solutions that anticipate market needs and drive digital transformation.",
      },
      {
        icon: <FaShieldAlt />,
        label: "Trust",
        desc: "Building Algeria's most secure and reliable platform through transparent operations.",
      },
      {
        icon: <FaUsers />,
        label: "Community",
        desc: "Empowering local economies with a community-first approach that values Algerian talent.",
      },
      {
        icon: <FaStar />,
        label: "Excellence",
        desc: "Delivering exceptional quality through rigorous standards and continuous improvement.",
      },
    ],
    []
  );

  const businessModels = useMemo(
    () => [
      {
        rate: "9%",
        title: "VTC Transport",
        desc: "Passenger Transport",
        tag: "Premium",
        color: "from-[#B78E3B] to-[#E2CF7D]",
      },
      {
        rate: "5%",
        title: "Vehicle Rental",
        desc: "Car & scooter rentals",
        tag: "Standard",
        color: "from-[#6F4918] to-[#B78E3B]",
      },
      {
        rate: "5%",
        title: "Delivery Services",
        desc: "Packages & food delivery",
        tag: "Standard",
        color: "from-[#6F4918] to-[#B78E3B]",
      },
      {
        rate: "5%",
        title: "Road Assistance",
        desc: "Emergency services",
        tag: "Essential",
        color: "from-[#202020] to-[#6F4918]",
      },
    ],
    []
  );

  const toggleAccordion = useCallback((index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  }, []);

  const getTagClasses = (tag) => {
    switch (tag) {
      case "Premium":
        return "bg-gradient-to-r from-[#B78E3B] to-[#E2CF7D] text-white";
      case "Essential":
        return "bg-blue-100 text-blue-700";
      case "Standard":
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <section
      id="vision-mission"
      className="pt-20 px-6 lg:px-8 bg-gray-100 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <header
          className="text-center mb-16"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <motion.div
            className="flex justify-center items-center mb-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#B78E3B] mr-4"></div>
            <h1 className="text-2xl md:text-4xl font-bold text-[#1E2939]">
              Our Mission<span style={{ color: "#B78E3B" }}> And Vision</span>
            </h1>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#B78E3B] ml-4"></div>
          </motion.div>
          <motion.p
            className="text-gray-700 text-lg max-w-3xl mx-auto transition-colors duration-500 hover:text-[#6F4918]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Driving innovation with purpose, building Algeria's most trusted
            service ecosystem
          </motion.p>
        </header>

        {/* Vision & Mission Cards */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-20">
          {/* Vision Card */}
          <motion.div
            className="relative group"
            data-aos="fade-up"
            data-aos-delay="200"
            initial={{ y: 0, scale: 1 }}
            whileHover={{
              y: -5,
              scale: 1.02,
              transition: { type: "spring", stiffness: 200, damping: 20 },
            }}
          >
            <article className="relative bg-white p-8 rounded-2xl border border-gray-200 h-full overflow-visible transition-all duration-500 hover:shadow-xl hover:shadow-[black]/10">
              <div className="flex items-start justify-between mb-8">
                <div>
                  <motion.div
                    className="inline-flex items-center justify-center p-3 bg-gradient-to-br from-[#6F4918]/10 to-[#E2CF7D]/10 rounded-xl mb-4 transition-all duration-400 hover:scale-110 hover:rotate-3"
                    whileHover={{ scale: 1.1, rotate: 3 }}
                  >
                    <FaEye className="text-xl text-[#B78E3B]" />
                  </motion.div>

                  {/* Title with hover gradient */}
                  <h2
                    className="
            text-3xl font-bold mb-2
            text-[#1E2939]
            group-hover:bg-gradient-to-r group-hover:from-[#6F4918] group-hover:to-[#E2CF7D]
            group-hover:bg-clip-text group-hover:text-transparent
            transition-all duration-400
          "
                  >
                    Our Vision
                  </h2>
                </div>
              </div>

              <p className="text-gray-700 text-lg mb-8 leading-relaxed transition-colors duration-400">
                To become Algeria's leading multi-service platform,
                revolutionizing daily life through integrated digital solutions
                that connect communities with essential services.
              </p>

              {/* Strategic Goals */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-[#1E2939] mb-4 flex items-center gap-3 transition-colors duration-400">
                  <FaRocket className="text-[#B78E3B]" /> Strategic Goals
                </h3>
                <ul className="grid gap-2">
                  {[
                    "National expansion across all 58 wilayas",
                    "AI-powered service optimization",
                    "Sustainable EV integration network",
                    "Regional expansion across North Africa",
                  ].map((goal, i) => (
                    <motion.li
                      key={i}
                      className="flex items-center text-gray-700 gap-2"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <div className="w-2 h-2 bg-[#B78E3B] rounded-full flex-shrink-0"></div>
                      <span>{goal}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </article>
          </motion.div>

          {/* Mission Card */}
          <div
            className="relative group"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <motion.article
              className="relative bg-white p-8 rounded-2xl border border-gray-200 h-full overflow-hidden"
              initial={{ scale: 1 }}
              whileHover={{
                y: -5,
                transition: { duration: 0.3, ease: "easeOut" },
              }}
            >
              {/* Background glow effect on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-br from-[#B78E3B]/5 to-transparent rounded-2xl"></div>
              </div>

              <div className="relative z-10">
                <div className="flex items-start justify-between mb-8">
                  <div>
                    <div className="inline-flex items-center justify-center p-3 bg-gradient-to-br from-[#6F4918]/10 to-[#E2CF7D]/10 rounded-xl mb-4">
                      <FaBullseye className="text-xl text-[#B78E3B]" />
                    </div>

                    {/* Title with hover gradient */}
                    <h2
                      className="
              text-3xl font-bold mb-2
              text-[#1E2939]
              group-hover:bg-gradient-to-r group-hover:from-[#6F4918] group-hover:to-[#E2CF7D]
              group-hover:bg-clip-text group-hover:text-transparent
              transition-all duration-300
            "
                    >
                      Our Mission
                    </h2>
                  </div>
                </div>

                <p className="text-gray-700 text-lg mb-8 leading-relaxed">
                  To empower Algerians with reliable, accessible, and innovative
                  services that simplify everyday tasks while supporting local
                  economies and digital transformation.
                </p>

                {/* Core Values Accordion */}
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-[#1E2939] mb-4 flex items-center gap-3">
                    <FaStar className="text-[#B78E3B]" /> Core Values
                  </h3>
                  <div
                    role="region"
                    aria-label="Core Values Accordion"
                    className="grid gap-4"
                  >
                    {coreValues.map((value, i) => {
                      const isOpen = openIndex === i;
                      return (
                        <div
                          key={i}
                          className="relative rounded-2xl border border-gray-200 bg-white overflow-hidden"
                        >
                          <h4 className="m-0">
                            <button
                              className={`w-full flex items-center justify-between px-5 py-2 cursor-pointer transition-all duration-300 ${
                                isOpen
                                  ? "bg-gradient-to-r from-[#6F4918] to-[#E2CF7D] rounded-t-2xl"
                                  : "bg-gradient-to-r from-[#6F4918] to-[#E2CF7D] rounded-2xl"
                              }`}
                              onClick={() => toggleAccordion(i)}
                              aria-expanded={isOpen}
                              aria-controls={`accordion-content-${i}`}
                              id={`accordion-header-${i}`}
                            >
                              <div className="flex items-center gap-4">
                                <div
                                  className={`w-12 h-12 flex items-center justify-center rounded-full transition-all duration-300 ${
                                    isOpen ? "bg-white" : "bg-white/20"
                                  }`}
                                >
                                  <span
                                    className={`text-xl transition-all duration-300 ${
                                      isOpen ? "text-[#B78E3B]" : "text-white"
                                    }`}
                                  >
                                    {value.icon}
                                  </span>
                                </div>
                                <span
                                  className={`font-semibold text-lg transition-colors duration-300 ${
                                    isOpen ? "text-white" : "text-white"
                                  }`}
                                >
                                  {value.label}
                                </span>
                              </div>
                              <span
                                className={`text-2xl font-light transition-colors duration-300 ${
                                  isOpen ? "text-white" : "text-white"
                                }`}
                                style={{
                                  transform: isOpen
                                    ? "rotate(180deg)"
                                    : "rotate(0deg)",
                                }}
                              >
                                <FaChevronDown />
                              </span>
                            </button>
                          </h4>

                          <div
                            id={`accordion-content-${i}`}
                            role="region"
                            aria-labelledby={`accordion-header-${i}`}
                            className={isOpen ? "block" : "hidden"}
                          >
                            <div className="px-6 pb-4">
                              <p className="text-gray-600 leading-relaxed">
                                {value.desc}
                              </p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </motion.article>
          </div>
        </div>

        {/* Business Model */}
        <div className="mb-12">
          <motion.h2
            className="text-3xl font-bold text-center bg-gradient-to-r from-[#6F4918] to-[#E2CF7D] bg-clip-text text-transparent mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <span className="text-[#1E2939]">Sustainable</span> Business Model
          </motion.h2>
          <motion.p
            className="text-gray-700 text-center max-w-2xl mx-auto mb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Fair commissions supporting platform growth while providing value to
            service providers
          </motion.p>

          <div className="grid md:grid-cols-4 gap-6">
            {businessModels.map((model, idx) => (
              <motion.div
                key={idx}
                className="relative group"
                data-aos="fade-up"
                data-aos-delay={500 + idx * 100}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 + 0.6 }}
                whileHover={{ y: -8 }}
              >
                <article className="relative bg-white p-6 rounded-2xl border border-gray-200 hover:border-[#B78E3B] hover:shadow-xl hover:shadow-[black]/10 transition-all duration-500 overflow-hidden">
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                    style={{
                      background: `linear-gradient(135deg, ${model.color})`,
                    }}
                    aria-hidden="true"
                  />
                  <div className="absolute top-4 right-4 z-10">
                    <span
                      className={`px-3 py-1 text-xs font-semibold rounded-full transition-all duration-400 ${getTagClasses(
                        model.tag
                      )}`}
                    >
                      {model.tag}
                    </span>
                  </div>
                  <h3 className="text-4xl font-bold mb-3 bg-gradient-to-br text-transparent bg-clip-text from-[#B78E3B] to-[#E2CF7D]">
                    {model.rate}
                  </h3>
                  <h4 className="text-xl font-bold text-[#1E2939] mb-2 group-hover:text-[#B78E3B] transition-colors duration-400">
                    {model.title}
                  </h4>
                  <p className="text-gray-900 group-hover:text-gray-800 transition-colors duration-400">
                    {model.desc}
                  </p>
                  <p className="mt-4 pt-4 border-t border-gray-200 group-hover:border-[#E2CF7D]/30 transition-colors duration-400 text-gray-800 text-sm">
                    Platform commission rate
                  </p>
                </article>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;
