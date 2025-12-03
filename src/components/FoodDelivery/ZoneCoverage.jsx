// src/components/ZoneCoverage.jsx
import React, { useState } from "react";
import {
  MapPin,
  Building,
  Car,
  Train,
  Globe,
  Navigation,
  Clock,
  Shield,
  Zap,
  ChevronRight,
} from "lucide-react";
import { motion } from "framer-motion";

const ZoneCoverage = () => {
  const [selectedZone, setSelectedZone] = useState("within-city");
  const [activeCity, setActiveCity] = useState("city-a");

  const zones = [
    {
      id: "within-city",
      name: "Within City",
      icon: <Building className="w-6 h-6" />,
      color: "from-[#86632C] to-yellow-600",
      description: "Fast deliveries within city limits",
      features: [
        { text: "Under 30 minutes average", icon: <Clock className="w-4 h-4" /> },
        { text: "Real-time traffic updates", icon: <Navigation className="w-4 h-4" /> },
        { text: "Multiple pickup points", icon: <MapPin className="w-4 h-4" /> },
      ],
    },
    {
      id: "between-cities",
      name: "Between Cities",
      icon: <Train className="w-6 h-6" />,
      color: "from-[#86632C] to-purple-600",
      description: "Reliable inter-city transportation",
      features: [
        { text: "Cross-zone coordination", icon: <Globe className="w-4 h-4" /> },
        { text: "Priority handling", icon: <Shield className="w-4 h-4" /> },
        { text: "Express options available", icon: <Zap className="w-4 h-4" /> },
      ],
    },
    {
      id: "multi-zone",
      name: "Multi-Zone Network",
      icon: <Globe className="w-6 h-6" />,
      color: "from-[#86632C] to-green-600",
      description: "Complex routing across multiple zones",
      features: [
        { text: "A → B → C routing", icon: <Navigation className="w-4 h-4" /> },
        { text: "Dynamic optimization", icon: <Zap className="w-4 h-4" /> },
        { text: "24/7 monitoring", icon: <Shield className="w-4 h-4" /> },
      ],
    },
  ];

  const zoneIcons = {
    "within-city": <Building className="w-6 h-6 text-white" />,
    "between-cities": <Train className="w-6 h-6 text-white" />,
    "multi-zone": <Globe className="w-6 h-6 text-white" />,
  };

  const cities = [
    { id: "city-a", name: "Metropolis A", zone: "within-city", x: "15%", y: "40%" },
    { id: "city-b", name: "Urban Center B", zone: "within-city", x: "45%", y: "55%" },
    { id: "city-c", name: "Capital City C", zone: "between-cities", x: "70%", y: "25%" },
    { id: "city-d", name: "Hub City D", zone: "between-cities", x: "35%", y: "15%" },
    { id: "city-e", name: "Port City E", zone: "multi-zone", x: "80%", y: "65%" },
    { id: "city-f", name: "Tech Valley F", zone: "multi-zone", x: "10%", y: "75%" },
  ];

  const currentZone = zones.find((z) => z.id === selectedZone);

  return (
    <section
      id="zones"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-[#151212] text-white relative"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-3 bg-gradient-to-r from-[#86632C] to-yellow-600 rounded-full mb-4">
            <Globe className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Comprehensive{" "}
            <span className="bg-gradient-to-r from-[#86632C] to-yellow-600 bg-clip-text text-transparent">
              Zone Coverage
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Seamless delivery network across all zones with intelligent routing
            and real-time tracking
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Zone Selector */}
          <div className="space-y-8">
            <div className="bg-[#1e1c1b] rounded-3xl p-6 shadow-xl border border-gray-700">
              <h3 className="text-2xl font-bold mb-6">Select Zone Type</h3>
              <div className="space-y-4">
                {zones.map((zone) => (
                  <button
                    key={zone.id}
                    onClick={() => setSelectedZone(zone.id)}
                    className={`w-full p-4 rounded-xl border-2 transition-all duration-300 transform cursor-pointer ${
                      selectedZone === zone.id
                        ? `border-transparent bg-gradient-to-r ${zone.color} text-white shadow-lg scale-105`
                        : "border-gray-700 hover:border-[#86632C] hover:bg-[#2a2623] text-[#86632C]"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div
                          className={`p-3 rounded-lg ${
                            selectedZone === zone.id ? "bg-white/20" : "bg-gray-800"
                          }`}
                        >
                          {zone.icon}
                        </div>
                        <div className="text-left">
                          <div className="font-semibold text-lg">{zone.name}</div>
                          <div
                            className={`text-sm ${
                              selectedZone === zone.id ? "text-white/90" : "text-gray-400"
                            }`}
                          >
                            {zone.description}
                          </div>
                        </div>
                      </div>
                      <ChevronRight
                        className={`w-5 h-5 transition-transform ${
                          selectedZone === zone.id ? "rotate-90" : ""
                        }`}
                      />
                    </div>
                    {selectedZone === zone.id && (
                      <div className="mt-4 pl-16 space-y-2 animate-fadeIn">
                        {zone.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center space-x-2 text-gray-300">
                            {feature.icon}
                            <span>{feature.text}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Zone Performance */}
            <div className={`bg-gradient-to-r ${currentZone.color} rounded-3xl p-6 shadow-xl`}>
              <h3 className="text-2xl font-bold mb-6">Zone Performance</h3>
              <div className="grid grid-cols-2 gap-6 text-white">
                <div className="bg-white/10 rounded-xl p-4">
                  <div className="text-3xl font-bold mb-1">1250</div>
                  <div className="text-sm">Active Providers</div>
                </div>
                <div className="bg-white/10 rounded-xl p-4">
                  <div className="text-3xl font-bold mb-1">8500</div>
                  <div className="text-sm">Daily Deliveries</div>
                </div>
                <div className="bg-white/10 rounded-xl p-4">
                  <div className="text-3xl font-bold mb-1">4.8</div>
                  <div className="text-sm">Avg. Rating</div>
                </div>
                <div className="bg-white/10 rounded-xl p-4">
                  <div className="text-3xl font-bold mb-1">98%</div>
                  <div className="text-sm">Coverage</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Map & CTA */}
          <div className="space-y-8">
            <div className="bg-[#1e1c1b] rounded-3xl p-6 shadow-xl border border-gray-700 h-full relative">
              <h3 className="text-2xl font-bold mb-4">Zone Network Map</h3>
              <p className="text-gray-300 mb-4">Interactive coverage visualization</p>
              <div className="relative h-96 bg-gray-900 rounded-2xl border-2 border-gray-700">
                {cities.map((city) => (
                  <button
                    key={city.id}
                    onClick={() => setActiveCity(city.id)}
                    className={`absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${
                      activeCity === city.id ? "scale-125 z-10" : "hover:scale-110 z-0"
                    }`}
                    style={{ left: city.x, top: city.y }}
                  >
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center shadow-lg border-2 border-white ${
                        city.zone === "within-city"
                          ? "bg-gradient-to-br from-[#86632C] to-yellow-600"
                          : city.zone === "between-cities"
                          ? "bg-gradient-to-br from-[#86632C] to-purple-600"
                          : "bg-gradient-to-br from-[#86632C] to-green-600"
                      }`}
                    >
                      {zoneIcons[city.zone]}
                    </div>
                  </button>
                ))}
              </div>

              {/* Ready to Deliver CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-gradient-to-r from-[#86632C] to-yellow-600 rounded-3xl p-8 text-center shadow-xl mt-8 space-y-6"
              >
                <h3 className="text-2xl md:text-3xl font-bold">Ready to Deliver?</h3>
                <p className="text-white/90 text-lg md:text-xl max-w-xl mx-auto">
                  Join our network of delivery providers and start earning today. 5% flat commission across all zones.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="bg-white text-[#86632C] px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-shadow w-full sm:w-auto">
                    Become a Provider
                  </button>
                  <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition-colors w-full sm:w-auto">
                    View Zone Details
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ZoneCoverage;
