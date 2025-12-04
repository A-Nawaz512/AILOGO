import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  UtensilsCrossed,
  Pill,
  Package as PackageIcon,
  ShoppingBag,
} from "lucide-react";

const DeliveryServices = () => {
  const [activeService, setActiveService] = useState("food");

  const services = {
    food: {
      icon: <UtensilsCrossed className="w-12 h-12" />,
      title: "Food Delivery",
      description:
        "Restaurant meals, groceries, and specialty foods delivered hot and fresh",
      features: [
        "Live tracking",
        "Temperature control",
        "Restaurant partnerships",
      ],
    },
    pharmacy: {
      icon: <Pill className="w-12 h-12" />,
      title: "Pharmacy",
      description:
        "Prescription medicines and healthcare products delivered discreetly",
      features: [
        "24/7 service",
        "Prescription upload",
        "Healthcare integration",
      ],
    },
    packages: {
      icon: <PackageIcon className="w-12 h-12" />,
      title: "Packages",
      description:
        "Parcels, documents, and important shipments with real-time tracking",
      features: [
        "Insurance options",
        "Multiple size options",
        "International shipping",
      ],
    },
    products: {
      icon: <ShoppingBag className="w-12 h-12" />,
      title: "Products",
      description:
        "Retail, e-commerce, and marketplace deliveries with flexible scheduling",
      features: [
        "Same-day delivery",
        "Bulk shipments",
        "Warehouse integration",
      ],
    },
  };

  const activeGradient = "from-[#6F4918] to-[#E2CF7D]";

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
         <h2 className="relative text-4xl md:text-5xl font-bold text-black mb-4 flex items-center justify-center">
  {/* Left line */}
  <span className="absolute left-0 top-1/2 w-24 h-0.5 bg-gradient-to-r from-[#6F4918] to-[#E2CF7D] opacity-60 -translate-y-1/2"></span>

  {/* Gradient text */}
  <span className="bg-gradient-to-r from-[#6F4918] to-[#E2CF7D] bg-clip-text text-transparent px-6">
    Delivery Services
  </span>

  {/* Right line */}
  <span className="absolute right-0 top-1/2 w-24 h-0.5 bg-gradient-to-r from-[#6F4918] to-[#E2CF7D] opacity-60 -translate-y-1/2"></span>
</h2>


          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
            From food to pharmaceuticals, we handle all your delivery needs with
            precision and care
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {Object.entries(services).map(([key, service]) => (
            <motion.button
              key={key}
              onClick={() => setActiveService(key)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className={`p-6 rounded-2xl border-2 transition-all duration-300 cursor-pointer ${
                activeService === key
                  ? `border-transparent bg-gradient-to-br ${activeGradient} text-white shadow-2xl`
                  : "border-gray-300 bg-white hover:border-[#B78E3B] hover:bg-gray-50 text-[#B78E3B]"
              }`}
            >
              <div
                className={`mb-4 ${
                  activeService === key ? "text-white" : "text-[#B78E3B]"
                }`}
              >
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p
                className={`text-sm ${
                  activeService === key ? "text-white/90" : "text-gray-700"
                }`}
              >
                {service.description}
              </p>
            </motion.button>
          ))}
        </div>

        {/* Active Service Details */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-200">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Service Info */}
            <motion.div
              key={activeService}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center space-x-4 mb-6">
                <div
                  className={`p-4 rounded-xl text-white bg-gradient-to-br ${activeGradient}`}
                >
                  {services[activeService].icon}
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-black">
                    {services[activeService].title}
                  </h3>
                  <div className="w-16 h-1 bg-gradient-to-r from-[#6F4918] to-[#E2CF7D] mt-2 rounded-full"></div>
                </div>
              </div>
              <p className="text-gray-700 text-lg mb-8">
                {services[activeService].description}
              </p>
              <ul className="space-y-3 mb-8">
                {services[activeService].features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-center space-x-3 text-gray-700"
                  >
                    <div className="w-2 h-2 bg-gradient-to-r from-[#6F4918] to-[#E2CF7D] rounded-full"></div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
             <button className="
  relative inline-block px-10 py-3 font-semibold rounded-full
  bg-gradient-to-r from-[#6F4918] to-[#E2CF7D] 
  text-white
  shadow-md shadow-black/40
  hover:shadow-lg hover:shadow-[#6F4918]/60
  transform hover:-translate-y-1 hover:scale-105
  transition-all duration-300
  overflow-hidden
  before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-white/10 before:rounded-full before:opacity-0 before:transition-opacity before:duration-500 hover:before:opacity-20
">
  Order Now
</button>

            </motion.div>

            {/* Live Tracking */}
            <motion.div
              key={`${activeService}-tracking`}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="bg-gray-50 rounded-2xl p-6 text-black shadow-md border border-gray-200">
                <div className="flex justify-between items-center mb-6">
                  <h4 className="text-xl font-semibold">Live Tracking</h4>
                  <div className="flex space-x-2 items-center">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-sm text-green-600">Active</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span>Status</span>
                    <span className="font-semibold">In Transit</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Estimated Arrival</span>
                    <span className="font-semibold">25 min</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Provider Rating</span>
                    <span className="font-semibold">4.9 ★</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeliveryServices;
