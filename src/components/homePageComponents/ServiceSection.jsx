import React from "react";
import {
  Car,
  Home,
  Bike,
  Truck,
  Utensils,
  Wrench,
  Shield,
  Zap,
  Users,
  Map,
  Clock,
  Award,
} from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const services = [
  {
    title: "Smart Ride Booking (VTC)",
    gradientWords: ["Ride", "Booking"],
    icon: Car,
    description:
      "Choose your driver (male/female), vehicle type, negotiate price, and even order a ride for someone else. Track rides in real-time 3D across Algeria.",
    features: [
      "Driver Selection",
      "Price Negotiation",
      "Order for Someone Else",
      "Live 3D Tracking",
      "7% Commission",
    ],
    link: "/services/rides",
  },
  {
    title: "Vehicle Rentals",
    gradientWords: ["Vehicle", "Rentals"],
    icon: Bike,
    description:
      "Rent cars, scooters, motorcycles, SUVs, or trucks with card-only payment and temporary numbers for secure communication.",
    features: [
      "Hourly/Daily Booking",
      "Verified Vehicles",
      "Secure Payments",
      "Temporary Numbers",
      "3% Commission",
    ],
    link: "/services/rentals",
  },
  {
    title: "Apartment Rentals",
    gradientWords: ["Apartment", "Rentals"],
    icon: Home,
    description:
      "Book verified apartments instantly with integrated card payment, ratings, and dispute management for tenants and owners.",
    features: [
      "Verified Listings",
      "Secure Card Payment",
      "Ratings & History",
      "Dispute Management",
      "3% Commission",
    ],
    link: "/services/apartments",
  },
  {
    title: "Package Delivery",
    gradientWords: ["Package", "Delivery"],
    icon: Truck,
    description:
      "Send parcels, products, or pharmacy items with live courier tracking and optional direct assignment of a delivery person.",
    features: [
      "Live Tracking",
      "Direct Assignment",
      "Delivery Confirmation",
      "Secure Handling",
      "5% Commission",
    ],
    link: "/services/deliveries",
  },
  {
    title: "Food Delivery",
    gradientWords: ["Food", "Delivery"],
    icon: Utensils,
    description:
      "Order from restaurants or groceries with live tracking and instant delivery confirmation.",
    features: [
      "Restaurant & Grocery Network",
      "Live Tracking",
      "Fresh Delivery",
      "Secure Payments",
      "5% Commission",
    ],
    link: "/services/food-delivery",
  },
  {
    title: "Roadside Assistance",
    gradientWords: ["Roadside", "Assistance"],
    icon: Wrench,
    description:
      "Request mechanics, towing, battery, tire change, or fuel delivery instantly. 24/7 assistance with nearby technician matching.",
    features: [
      "24/7 Support",
      "Nearby Technicians",
      "Quick Response",
      "Direct Assignment",
      "5% Commission",
    ],
    link: "/services/roadside-assistance",
  },
];

const features = [
  {
    icon: Map,
    title: "3D Map Tracking",
    description:
      "Real-time GPS tracking for rides, deliveries, and roadside assistance using OpenStreetMap",
  },
  {
    icon: Award,
    title: "Loyalty Points",
    description:
      "1 point = 1 DZD; use points for rides, deliveries, rentals, or transfer to providers",
  },
  {
    icon: Shield,
    title: "Secure Payments",
    description:
      "Integrated card & cash payment system, card required for rentals and provider credits",
  },
  {
    icon: Users,
    title: "Verified Providers",
    description:
      "All drivers, delivery personnel, and owners verified by ALLOGO controller",
  },
  {
    icon: Zap,
    title: "Real-time Updates",
    description:
      "Instant notifications for assignments, negotiations, and delivery status",
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description:
      "Always available assistance for rides, deliveries, rentals, and roadside emergencies",
  },
];

export default function ServicesSection() {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-white text-black py-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* SECTION HEADER */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10"
        >
          <div className="flex justify-center items-center mb-2">
            <div className="h-px mt-2 w-12 bg-gradient-to-r from-transparent to-[#B78E3B] mr-4"></div>
            <h2 className="text-2xl md:text-4xl text-[#1E2939] font-bold">
              Our <span className="text-[#B78E3B]">Services</span>
            </h2>
            <div className="h-px mt-2 w-12 bg-gradient-to-l from-transparent to-[#B78E3B] ml-4"></div>
          </div>
          <p className="text-md text-gray-600 max-w-2xl mx-auto">
            Ride, rent, deliver, and repair all in Algeria's first multi-service
            super app with live 3D tracking, verified providers, and secure
            payments.
          </p>
        </motion.div>

        {/* SERVICES GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
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
              <div className="relative bg-white rounded-2xl p-8 h-full border-2 border-[#543918]/20 hover:border-[#B78E3B] transition-all duration-500 shadow-lg hover:shadow-2xl overflow-hidden">
                {/* Top Gradient Line */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#543918] to-[#B78E3B]"></div>

                {/* Decorative Circles */}
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute top-4 right-4 w-20 h-20 rounded-full border-2 border-[#B78E3B]"></div>
                  <div className="absolute bottom-4 left-4 w-12 h-12 rounded-full border border-[#543918]"></div>
                </div>

                {/* Icon */}
                <div className="relative mb-6">
                  <div className="inline-flex items-center justify-center p-4 rounded-xl bg-gradient-to-br from-[#543918] to-[#B78E3B] group-hover:scale-110 transition-transform duration-500 shadow-lg">
                    <service.icon
                      className="w-8 h-8 text-white"
                      strokeWidth={2}
                    />
                  </div>
                </div>

                {/* Title with Gradient Words */}
                <h3 className="text-xl text-[#1E2939] font-bold mb-4">
                  {service.title.split(" ").map((word, i) => {
                    const isGradient = service.gradientWords?.includes(word);
                    return (
                      <span
                        key={i}
                        className={
                          isGradient
                            ? "bg-gradient-to-r from-[#6F4918] to-[#B78E3B] bg-clip-text text-transparent"
                            : "text-gray-900"
                        }
                      >
                        {word}{" "}
                      </span>
                    );
                  })}
                </h3>

                <p className="text-gray-600 mb-6 leading-relaxed text-justify">
                  {service.description}
                </p>

                {/* Features */}
                <div className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm">
                      <div
                        className="w-1.5 h-1.5 rounded-full mr-3"
                        style={{ backgroundColor: "#B78E3B" }}
                      ></div>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* See More Button */}
                <Link to={service.link}>
                  <span className="absolute right-4 bottom-4 px-3 py-2 rounded-lg bg-gradient-to-r from-[#6F4918] to-[#B78E3B] text-white text-sm font-semibold shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer">
                    See more..
                  </span>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* FEATURES GRID */}
        <div className="mb-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 md:mb-10"
          >
            <div className="flex justify-center items-center">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#B78E3B] mr-4"></div>
              <h3 className="text-xl md:text-4xl font-bold text-gray-800 mb-3">
                Why Choose <span className="text-[#B78E3B]">ALLOGO?</span>
              </h3>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#B78E3B] ml-4"></div>
            </div>

            <p className="text-gray-600 max-w-2xl mx-auto px-4 text-sm md:text-base">
              Built for efficiency, transparency, and multi-service convenience
              with points, credits, verified providers, and 24/7 support.
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
                  ease: "easeOut",
                }}
                whileHover={{
                  y: -5,
                  scale: 1.03,
                  transition: { duration: 0.2 },
                }}
                className="group bg-white border border-[#b78e3b6f] rounded-lg p-6 hover:border-[#B78E3B] transition-colors duration-300 shadow-lg"
              >
                <div className="flex items-start gap-3 md:gap-4">
                  <motion.div
                    className="p-2.5 md:p-3 rounded-lg flex-shrink-0 bg-gradient-to-r from-[#6F4918] to-[#E2CF7D]"
                    whileHover={{
                      rotate: [0, -5, 5, 0],
                      transition: { duration: 0.4 },
                    }}
                  >
                    <feature.icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
                  </motion.div>
                  <div className="flex-1">
                    <motion.h4
                      className="font-bold mb-2 text-base md:text-lg transition-colors duration-300 
                     group-hover:bg-gradient-to-r group-hover:from-[#6F4918] group-hover:to-[#E2CF7D] 
                     group-hover:bg-clip-text group-hover:text-transparent"
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
