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
        "Restaurant meals, groceries, and specialty foods delivered hot and fresh.",
      image:
        "https://images.pexels.com/photos/4393532/pexels-photo-4393532.jpeg",
      features: ["Live tracking", "Temperature control", "Restaurant partnerships"],
    },
    pharmacy: {
      icon: <Pill className="w-12 h-12" />,
      title: "Pharmacy Delivery",
      description:
        "Prescription medicines and healthcare products delivered discreetly.",
      image:
        "https://images.pexels.com/photos/5214959/pexels-photo-5214959.jpeg",
      features: ["24/7 service", "Prescription upload", "Healthcare integration"],
    },
    packages: {
      icon: <PackageIcon className="w-12 h-12" />,
      title: "Package Delivery",
      description:
        "Parcels, documents, and important shipments with real-time tracking.",
      image:
        "https://images.pexels.com/photos/4246228/pexels-photo-4246228.jpeg",
      features: ["Insurance options", "Multiple size options", "International shipping"],
    },
    products: {
      icon: <ShoppingBag className="w-12 h-12" />,
      title: "Product Delivery",
      description:
        "Retail, e-commerce, and marketplace deliveries with flexible scheduling.",
      image:
        "https://images.pexels.com/photos/5025508/pexels-photo-5025508.jpeg",
      features: ["Same-day delivery", "Bulk shipments", "Warehouse integration"],
    },
  };

  const activeGradient = "from-[#6F4918] to-[#E2CF7D]";

  return (
    <section id="services" className="py-8 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">

        {/* Updated Header */}
        <div className="text-center mb-16 relative">
         <div className="flex  justify-center items-center mb-2">
            <div className="h-px mt-2 w-12 bg-gradient-to-r from-transparent to-[#B78E3B] mr-4"></div>
            <h2 className="text-2xl md:text-4xl font-bold">
              Our<span style={{ color: '#B78E3B' }}> Services</span>
            </h2>
            <div className="h-px mt-2 w-12 bg-gradient-to-l from-transparent to-[#B78E3B] ml-4"></div>
          </div>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
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

        {/* Bottom Mini Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex justify-center mb-12"
        >
          <div className="bg-white shadow-lg border border-gray-200 px-5 py-2 rounded-full flex space-x-6">
            {Object.entries(services).map(([key, service]) => (
              <button
                key={key}
                onClick={() => setActiveService(key)}
                className={`text-sm font-medium transition-all ${
                  activeService === key
                    ? "text-[#6F4918] border-b-2 border-[#E2CF7D]"
                    : "text-gray-500 hover:text-black"
                }`}
              >
                {service.title}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Active Service Details */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-200">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Text Section */}
            <motion.div
              key={activeService}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className={`p-4 rounded-xl text-white bg-gradient-to-br ${activeGradient}`}>
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
                  <li key={idx} className="flex items-center space-x-3 text-gray-700">
                    <div className="w-2 h-2 bg-gradient-to-r from-[#6F4918] to-[#E2CF7D] rounded-full"></div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className="
                relative inline-block px-10 py-2 font-semibold rounded-xl
                bg-gradient-to-r from-[#6F4918] to-[#E2CF7D] 
                text-white shadow-md shadow-black/40
                hover:shadow-lg hover:shadow-[#6F4918]/60
                transform hover:-translate-y-1 hover:scale-105
                transition-all duration-300
                overflow-hidden
                before:absolute before:top-0 before:left-0 before:w-full before:h-full 
                before:bg-white/10 before:rounded-full before:opacity-0 
                before:transition-opacity before:duration-500 
                hover:before:opacity-20
              "
              >
                Order Now
              </button>
            </motion.div>

            {/* Image Section */}
            <motion.div
              key={`${activeService}-image`}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative rounded-xl overflow-hidden shadow-2xl border border-gray-200">
                <img
                  src={services[activeService].image}
                  alt={services[activeService].title}
                  className="w-full h-80 object-cover"
                />

                <div
                  className="
                    absolute bottom-4 left-1/2 -translate-x-1/2
                    bg-white/80 backdrop-blur-md
                    px-5 py-2 rounded-2xl shadow-lg border border-white
                    w-[85%]
                  "
                >
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="text-lg font-semibold text-black">Live Tracking</h4>
                    <div className="flex items-center space-x-2">
                      <span className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></span>
                      <span className="text-sm text-green-600">Active</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 text-center text-gray-700">
                    <div>
                      <p className="text-xs">Status</p>
                      <p className="font-semibold">In Transit</p>
                    </div>
                    <div>
                      <p className="text-xs">ETA</p>
                      <p className="font-semibold">25 min</p>
                    </div>
                    <div>
                      <p className="text-xs">Rating</p>
                      <p className="font-semibold">4.9 ★</p>
                    </div>
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