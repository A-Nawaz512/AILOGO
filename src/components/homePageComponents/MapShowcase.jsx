import React from "react";
import { Car, Bike, Home, Truck, Utensils, Wrench, Users } from "lucide-react";
import { motion } from "framer-motion";

export const MapShowcase = () => {
  const services = [
    { id: "ride", name: "Ride Vehicles (Male/Female)", icon: Car, color: "#B78E3B", description: "Track all rides with driver selection, price negotiation, and order-for-someone-else functionality. 7% commission." },
    { id: "rental", name: "Vehicle Rentals", icon: Bike, color: "#543918", description: "Rent cars, scooters, motorcycles, SUVs, trucks. Card payment required, temporary numbers for secure contact. 3% commission." },
    { id: "apartment", name: "Apartment Rentals", icon: Home, color: "#B78E3B", description: "Verified apartments with integrated payment, ratings, and dispute management. 3% commission." },
    { id: "delivery", name: "Package Delivery", icon: Truck, color: "#543918", description: "Send parcels, food, or pharmacy items with live tracking. Direct assignment optional. 5% commission." },
    { id: "food", name: "Food Delivery", icon: Utensils, color: "#B78E3B", description: "Order meals or groceries with live tracking and instant confirmation. 5% commission." },
    { id: "assistance", name: "Roadside Assistance", icon: Wrench, color: "#543918", description: "Mechanic, towing, battery, tire change, fuel delivery with instant 24/7 response. 5% commission." },
  ];

  return (
    <div className="bg-[#c39e4877] px-4 py-10">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <div className="h-px w-12 bg-[#543918] mr-4"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              Real Time 3D Service <span style={{ color: "#B78E3B" }}>Tracking</span>
            </h2>
            <div className="h-px w-12 bg-[#543918] ml-4"></div>
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Track rides, deliveries, rentals, and roadside assistance live in 3D with secure, free, and transparent MapLibre visualization</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Features List */}
          <div>
            <h3 className="text-2xl font-bold mb-6" style={{ color: "#543918" }}>
              Live Service Tracking
            </h3>

            <div className="space-y-4 mb-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full mt-2" style={{ backgroundColor: "#B78E3B" }}></div>
                <div>
                  <h4 className="font-semibold text-gray-800">Real-time 3D Visualization</h4>
                  <p className="text-gray-600 text-sm">All rides, deliveries, rentals, and roadside services shown live on map with gentle animation.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full mt-2" style={{ backgroundColor: "#B78E3B" }}></div>
                <div>
                  <h4 className="font-semibold text-gray-800">Free Map Solution</h4>
                  <p className="text-gray-600 text-sm">Open-source MapLibre 3D, no Google Maps fees.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full mt-2" style={{ backgroundColor: "#B78E3B" }}></div>
                <div>
                  <h4 className="font-semibold text-gray-800">Verified Providers</h4>
                  <p className="text-gray-600 text-sm">All drivers, delivery personnel, and owners validated by ALLOGO controller.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full mt-2" style={{ backgroundColor: "#B78E3B" }}></div>
                <div>
                  <h4 className="font-semibold text-gray-800">Credits & Points System</h4>
                  <p className="text-gray-600 text-sm">Providers and users earn points and credits; points can be used or transferred to providers.</p>
                </div>
              </div>
            </div>

            {/* Service Legend */}
            <div className="border border-gray-200 p-3 rounded-lg">
              <h4 className="font-semibold mb-3" style={{ color: "#543918" }}>Service Colors</h4>
              <div className="grid grid-cols-2 gap-2">
                {services.map((service) => (
                  <div key={service.id} className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: service.color }}></div>
                    <span className="text-sm text-gray-700">{service.name}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
          {/* Map Visualization */}
          <div className="relative">
            <div className="bg-gray-900 rounded-xl overflow-hidden border-2 border-[#B78E3B]/30 h-[400px] relative">

              {/* Grid Lines */}
              <div className="absolute inset-0 opacity-10">
                {Array.from({ length: 10 }).map((_, i) => (
                  <div key={i} className="absolute h-px w-full bg-gray-500" style={{ top: `${i * 10}%` }}></div>
                ))}
                {Array.from({ length: 10 }).map((_, i) => (
                  <div key={i} className="absolute w-px h-full bg-gray-500" style={{ left: `${i * 10}%` }}></div>
                ))}
              </div>

              {/* Roads */}
              <div className="absolute top-1/2 left-0 right-0 h-1 bg-yellow-500/30 transform -translate-y-1/2 animate-pulse"></div>
              <div className="absolute top-1/3 left-0 right-0 h-1 bg-gray-400/20 transform -translate-y-1/2 animate-pulse"></div>
              <div className="absolute top-2/3 left-0 right-0 h-1 bg-gray-400/20 transform -translate-y-1/2 animate-pulse"></div>

              {/* Service Markers */}
              {services.map((service, index) => (
                <motion.div
                  key={service.id}
                  className="absolute cursor-pointer"
                  style={{
                    left: `${15 + index * 12}%`,
                    top: `${25 + (index % 3) * 25}%`,
                  }}
                  whileHover={{ scale: 1.2 }}
                  title={service.description}
                  animate={{ y: ["0%", "-5%", "0%"], transition: { repeat: Infinity, duration: 2 + index * 0.2 } }}
                >
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center border-2 border-white"
                    style={{ backgroundColor: service.color }}
                  >
                    <service.icon className="w-4 h-4 text-white" />
                  </div>
                </motion.div>
              ))}

              {/* User Marker */}
              <motion.div
                className="absolute top-1/2 left-1/3 transform -translate-x-1/2 -translate-y-1/2"
                animate={{ scale: [1, 1.2, 1], opacity: [1, 0.7, 1] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                <div className="w-10 h-10 rounded-full bg-[#B78E3B]/20 border-2 border-[#B78E3B] flex items-center justify-center">
                  <div className="w-4 h-4 rounded-full bg-[#B69144]"></div>
                </div>
              </motion.div>

              {/* MapLibre Badge */}
              <div className="absolute bottom-4 right-4 bg-[#543918] text-white text-xs px-3 py-1 rounded">
                MapLibre 3D
              </div>
            </div>
          </div>


        </div>

      </div>
    </div>
  );
};
