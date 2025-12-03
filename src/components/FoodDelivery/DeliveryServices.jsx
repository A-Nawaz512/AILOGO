// src/components/DeliveryServices.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  UtensilsCrossed, Pill, Package as PackageIcon, ShoppingBag
} from 'lucide-react';

const DeliveryServices = () => {
  const [activeService, setActiveService] = useState('food');

  const services = {
    food: {
      icon: <UtensilsCrossed className="w-12 h-12" />,
      title: 'Food Delivery',
      description: 'Restaurant meals, groceries, and specialty foods delivered hot and fresh',
      features: ['Live tracking', 'Temperature control', 'Restaurant partnerships'],
      color: 'from-[#86632C] to-yellow-600'
    },
    pharmacy: {
      icon: <Pill className="w-12 h-12" />,
      title: 'Pharmacy',
      description: 'Prescription medicines and healthcare products delivered discreetly',
      features: ['24/7 service', 'Prescription upload', 'Healthcare integration'],
      color: 'from-[#86632C] to-green-600'
    },
    packages: {
      icon: <PackageIcon className="w-12 h-12" />,
      title: 'Packages',
      description: 'Parcels, documents, and important shipments with real-time tracking',
      features: ['Insurance options', 'Multiple size options', 'International shipping'],
      color: 'from-[#86632C] to-blue-600'
    },
    products: {
      icon: <ShoppingBag className="w-12 h-12" />,
      title: 'Products',
      description: 'Retail, e-commerce, and marketplace deliveries with flexible scheduling',
      features: ['Same-day delivery', 'Bulk shipments', 'Warehouse integration'],
      color: 'from-[#86632C] to-purple-600'
    }
  };

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#151212]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Comprehensive <span className="bg-gradient-to-r from-[#86632C] to-yellow-600 bg-clip-text text-transparent">Delivery Services</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            From food to pharmaceuticals, we handle all your delivery needs with precision and care
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
                  ? `border-transparent bg-gradient-to-br ${service.color} text-white shadow-2xl` 
                  : 'border-gray-700 bg-[#1e1c1b] hover:border-[#86632C] hover:bg-[#2a2623] text-[#86632C]'
              }`}
            >
              <div className={`mb-4 ${activeService === key ? 'text-white' : 'text-[#86632C]'}`}>
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className={`text-sm ${activeService === key ? 'text-white/90' : 'text-gray-400'}`}>
                {service.description}
              </p>
            </motion.button>
          ))}
        </div>

        {/* Active Service Details */}
        <div className="bg-[#1e1c1b] rounded-3xl p-8 md:p-12 shadow-xl border border-gray-700">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Service Info */}
            <motion.div
              key={activeService}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className={`p-4 rounded-xl bg-gradient-to-br ${services[activeService].color}`}>
                  {services[activeService].icon}
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white">{services[activeService].title}</h3>
                  <div className="w-16 h-1 bg-gradient-to-r from-[#86632C] to-yellow-600 mt-2 rounded-full"></div>
                </div>
              </div>
              <p className="text-gray-300 text-lg mb-8">{services[activeService].description}</p>
              <ul className="space-y-3 mb-8">
                {services[activeService].features.map((feature, idx) => (
                  <li key={idx} className="flex items-center space-x-3 text-gray-300">
                    <div className="w-2 h-2 bg-gradient-to-r from-[#86632C] to-yellow-600 rounded-full"></div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="bg-gradient-to-r from-[#86632C] to-yellow-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all cursor-pointer">
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
              <div className="bg-[#2a2623] rounded-2xl p-6 text-white shadow-md">
                <div className="flex justify-between items-center mb-6">
                  <h4 className="text-xl font-semibold">Live Tracking</h4>
                  <div className="flex space-x-2 items-center">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-sm text-green-400">Active</span>
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
