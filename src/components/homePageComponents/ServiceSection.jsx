import React from "react";
import { Car, Home, Bike, Truck, Utensils, Wrench, Shield, Zap, Users, Map, Clock, Award } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    title: "Smart Ride Booking (VTC)",
    icon: Car,
    description: "Choose your driver preference (male/female) and vehicle type with live 3D tracking. Inter-city & intra-city rides available.",
    features: ["Driver Selection", "Live 3D Tracking", "Route Planning", "9% Commission"]
  },
  {
    title: "Vehicle Rentals",
    icon: Bike,
    description: "Rent cars or scooters by hour/day with real-time availability on 3D map. Flexible booking options.",
    features: ["Hourly/Daily Rates", "Real-time Availability", "Secure Booking", "5% Commission"]
  },
  {
    title: "Apartment Rentals",
    icon: Home,
    description: "Find and book verified apartments with integrated payment system and transparent pricing.",
    features: ["Verified Listings", "Secure Payments", "Location-based Search", "5% Commission"]
  },
  {
    title: "Package Delivery",
    icon: Truck,
    description: "Send parcels with live courier tracking and instant delivery confirmation system.",
    features: ["Live Tracking", "Delivery Confirmation", "Secure Handling", "5% Commission"]
  },
  {
    title: "Food Delivery",
    icon: Utensils,
    description: "Order from restaurants with real-time order tracking and temperature-controlled delivery.",
    features: ["Restaurant Network", "Live Order Tracking", "Fresh Delivery", "5% Commission"]
  },
  {
    title: "Roadside Assistance",
    icon: Wrench,
    description: "24/7 emergency vehicle support with nearby technician matching and instant response.",
    features: ["24/7 Availability", "Nearby Technicians", "Quick Response", "5% Commission"]
  },
];

const features = [
  { icon: Map, title: "3D Map Tracking", description: "Live 3D visualization using MapLibre" },
  { icon: Award, title: "Loyalty Points", description: "1 point = 1 DA per service" },
  { icon: Shield, title: "Secure Payments", description: "Integrated payment system" },
  { icon: Users, title: "Trusted Network", description: "Verified service providers" },
  { icon: Zap, title: "Real-time Updates", description: "Instant notifications" },
  { icon: Clock, title: "24/7 Support", description: "Always available assistance" },
];

export default function ServicesSection() {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-white text-black py-4 px-4">
      {/* SECTION HEADER */}
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-6"
        >
          <div className="inline-flex items-center justify-center mb-2">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#B78E3B] mr-4"></div>
            {/* <span className="text-sm font-semibold tracking-wider uppercase" style={{ color: "#543918" }}>
              Our Comprehensive Services
            </span> */}
            <h2 className="text-2xl md:text-4xl font-bold ">
              <span style={{ color: '#B78E3B' }}>Our Services</span>

            </h2>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#B78E3B] ml-4"></div>
          </div>
          <p className="text-md text-gray-600 max-w-2xl mx-auto">
            Ride, rent, deliver, and repair all visualized in real-time 3D across Algeria's first multi-service super app
          </p>
        </motion.div>

        {/* SERVICES GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              {/* Card */}
              <div className="relative bg-white rounded-2xl p-8 h-full 
                border-2 border-[#543918]/20
                hover:border-[#B78E3B]
                transition-all duration-500
                shadow-lg hover:shadow-2xl
                overflow-hidden"
              >
                {/* Accent Border */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#543918] to-[#B78E3B]"></div>

                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute top-4 right-4 w-20 h-20 rounded-full" style={{ border: "2px solid #B78E3B" }}></div>
                  <div className="absolute bottom-4 left-4 w-12 h-12 rounded-full" style={{ border: "1px solid #543918" }}></div>
                </div>

                {/* Icon Container */}
                <div className="relative mb-6">
                  <div className="inline-flex items-center justify-center p-4 rounded-xl
                    bg-gradient-to-br from-[#543918] to-[#B78E3B]
                    group-hover:scale-110 transition-transform duration-500
                    shadow-lg"
                  >
                    <service.icon className="w-8 h-8 text-white" strokeWidth={2} />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold mb-4 group-hover:text-[#B78E3B] transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <div className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm">
                      <div className="w-1.5 h-1.5 rounded-full mr-3" style={{ backgroundColor: "#B78E3B" }}></div>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Hover Indicator */}
                <div className="absolute bottom-0 left-0 right-0 h-1 
                  bg-gradient-to-r from-transparent via-[#B78E3B] to-transparent
                  opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                ></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* KEY FEATURES SECTION */}
        <div className="mb-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 md:mb-10"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
              Why Choose <span style={{ color: "#B78E3B" }}>AlLOGO?</span>
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto px-4 text-sm md:text-base">
              Built for efficiency and transparency
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 px-4 md:px-0">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: "easeOut"
                }}
                whileHover={{
                  y: -5,
                  transition: { duration: 0.2 }
                }}
                className="bg-white border border-[#b78e3b6f] rounded-lg p-6 
          hover:border-[#B78E3B] transition-colors duration-300"
              >
                <div className="flex items-start gap-3 md:gap-4">
                  <motion.div
                    className="p-2.5 md:p-3 rounded-lg flex-shrink-0"
                    style={{ backgroundColor: "rgba(183, 142, 59, 0.1)" }}
                    whileHover={{
                      rotate: [0, -5, 5, 0],
                      transition: { duration: 0.4 }
                    }}
                  >
                    <feature.icon className="w-5 h-5 md:w-6 md:h-6" style={{ color: "#543918" }} />
                  </motion.div>

                  <div className="flex-1">
                    <motion.h4
                      className="font-bold text-gray-800 mb-2 text-base md:text-lg"
                      whileHover={{ color: "#543918" }}
                      transition={{ duration: 0.2 }}
                    >
                      {feature.title}
                    </motion.h4>
                    <p className="text-gray-600 text-xs md:text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>


      </div>
    </div>
  );
}