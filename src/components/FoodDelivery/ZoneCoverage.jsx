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
      color: "from-[#B78E3B] to-yellow-400",
      description: "Fast deliveries within city limits",
      features: [
        {
          text: "Under 30 minutes average",
          icon: <Clock className="w-4 h-4" />,
        },
        {
          text: "Real-time traffic updates",
          icon: <Navigation className="w-4 h-4" />,
        },
        {
          text: "Multiple pickup points",
          icon: <MapPin className="w-4 h-4" />,
        },
      ],
    },
    {
      id: "between-cities",
      name: "Between Cities",
      icon: <Train className="w-6 h-6" />,
      color: "from-[#B78E3B] to-yellow-400",
      description: "Reliable inter-city transportation",
      features: [
        {
          text: "Cross-zone coordination",
          icon: <Globe className="w-4 h-4" />,
        },
        { text: "Priority handling", icon: <Shield className="w-4 h-4" /> },
        {
          text: "Express options available",
          icon: <Zap className="w-4 h-4" />,
        },
      ],
    },
    {
      id: "multi-zone",
      name: "Multi-Zone Network",
      icon: <Globe className="w-6 h-6" />,
      color: "from-[#B78E3B] to-yellow-400",
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
    {
      id: "city-a",
      name: "Metropolis A",
      zone: "within-city",
      x: "15%",
      y: "40%",
    },
    {
      id: "city-b",
      name: "Urban Center B",
      zone: "within-city",
      x: "45%",
      y: "55%",
    },
    {
      id: "city-c",
      name: "Capital City C",
      zone: "between-cities",
      x: "70%",
      y: "25%",
    },
    {
      id: "city-d",
      name: "Hub City D",
      zone: "between-cities",
      x: "35%",
      y: "15%",
    },
    {
      id: "city-e",
      name: "Port City E",
      zone: "multi-zone",
      x: "80%",
      y: "65%",
    },
    {
      id: "city-f",
      name: "Tech Valley F",
      zone: "multi-zone",
      x: "10%",
      y: "75%",
    },
  ];

  const currentZone = zones.find((z) => z.id === selectedZone);

  const multiZoneRoute = [
    { from: "city-f", to: "city-a" },
    { from: "city-a", to: "city-e" },
  ];

  const getCityCoords = (cityId) => {
    const city = cities.find((c) => c.id === cityId);
    return { left: city.x, top: city.y };
  };

  return (
    <section
      id="zones"
      className="py-6 px-4 sm:px-6 lg:px-8 bg-white text-black relative"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-3 bg-gradient-to-r from-[#B78E3B] to-yellow-400 rounded-full mb-4">
            <Globe className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Comprehensive{" "}
            <span className="bg-gradient-to-r from-[#B78E3B] to-yellow-400 bg-clip-text text-transparent">
              Zone Coverage
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
            Seamless delivery network across all zones with intelligent routing
            and real-time tracking
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Zone Selector */}
          <div className="space-y-8">
            <div className="bg-white rounded-3xl p-6 shadow-xl border border-gray-300">
              <h3 className="text-2xl font-bold mb-6">Select Zone Type</h3>
              <div className="space-y-4">
                {zones.map((zone) => (
                  <button
                    key={zone.id}
                    onClick={() => setSelectedZone(zone.id)}
                    className={`w-full p-4 rounded-xl border-2 transition-all duration-300 transform cursor-pointer ${
                      selectedZone === zone.id
                        ? `border-transparent bg-gradient-to-r ${zone.color} text-white shadow-lg scale-105`
                        : "border-gray-300 hover:border-[#B78E3B] hover:bg-gray-50 text-[#B78E3B]"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div
                          className={`p-3 rounded-lg ${
                            selectedZone === zone.id
                              ? "bg-white/20"
                              : "bg-gray-100"
                          }`}
                        >
                          {zone.icon}
                        </div>
                        <div className="text-left">
                          <div className="font-semibold text-lg">
                            {zone.name}
                          </div>
                          <div
                            className={`text-sm ${
                              selectedZone === zone.id
                                ? "text-white/90"
                                : "text-gray-600"
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
                          <div
                            key={idx}
                            className="flex items-center space-x-2 text-gray-700"
                          >
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
            <div
              className={`bg-gradient-to-r ${currentZone.color} rounded-3xl p-6 shadow-xl`}
            >
              <h3 className="text-2xl font-bold mb-6 text-white">
                Zone Performance
              </h3>
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
            <div className="bg-white rounded-3xl p-6 shadow-xl border border-gray-300 h-full relative">
              <h3 className="text-2xl font-bold mb-4">Zone Network Map</h3>
              <p className="text-gray-700 mb-4">
                Interactive coverage visualization
              </p>
              <div className="relative h-96 bg-gray-100 rounded-2xl border-2 border-gray-300">
                {/* City Points */}
                {cities.map((city) => (
                  <button
                    key={city.id}
                    onClick={() => setActiveCity(city.id)}
                    className={`absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${
                      activeCity === city.id
                        ? "scale-125 z-10"
                        : "hover:scale-110 z-0"
                    }`}
                    style={{ left: city.x, top: city.y }}
                  >
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center shadow-lg border-2 border-white ${
                        city.zone === "within-city"
                          ? "bg-gradient-to-br from-[#B78E3B] to-yellow-400"
                          : city.zone === "between-cities"
                          ? "bg-gradient-to-br from-[#B78E3B] to-yellow-400"
                          : "bg-gradient-to-br from-[#B78E3B] to-yellow-400"
                      }`}
                    >
                      {zoneIcons[city.zone]}
                    </div>
                  </button>
                ))}

                {/* Multi-zone routes */}
                {multiZoneRoute.map((route, idx) => {
                  const from = getCityCoords(route.from);
                  const to = getCityCoords(route.to);
                  return (
                    <svg key={idx} className="absolute w-full h-full">
                      <line
                        x1={from.left}
                        y1={from.top}
                        x2={to.left}
                        y2={to.top}
                        stroke="url(#routeGradient)"
                        strokeWidth="3"
                        className="transition-all duration-300"
                      />
                      <defs>
                        <linearGradient
                          id="routeGradient"
                          x1="0"
                          y1="0"
                          x2="1"
                          y2="1"
                        >
                          <stop offset="0%" stopColor="#B78E3B" />
                          <stop offset="100%" stopColor="#F5B45D" />
                        </linearGradient>
                      </defs>
                    </svg>
                  );
                })}
              </div>

              {/* Ready to Deliver CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-gradient-to-r from-[#B78E3B] to-yellow-400 rounded-3xl p-8 text-center shadow-xl mt-8 space-y-6"
              >
                <h3 className="text-2xl md:text-3xl font-bold text-white">
                  Ready to Deliver?
                </h3>
                <p className="text-white/90 text-lg md:text-xl max-w-xl mx-auto">
                  Join our network of delivery providers and start earning
                  today. 5% flat commission across all zones.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  {/* Become a Provider Button */}
                  <button
                    className="relative inline-block px-10 py-3 font-semibold rounded-full
      bg-gradient-to-r from-[#B78E3B] via-[#D4AF37] to-[#FFD700] text-white
      shadow-md shadow-black/40 hover:shadow-lg hover:shadow-[#FFD700]/60
      transform hover:-translate-y-1 hover:scale-105
      transition-all duration-300 overflow-hidden
      before:absolute before:top-0 before:left-0 before:w-full before:h-full
      before:bg-white/10 before:rounded-full before:opacity-0 before:transition-opacity before:duration-500 hover:before:opacity-20
      after:absolute after:-top-1 after:-left-1 after:w-0 after:h-full
      after:bg-gradient-to-r from-white/40 via-white/10 to-white/40
      after:skew-x-12 after:transition-all after:duration-700 hover:after:w-[calc(100%+2px)]
    "
                  >
                    Become a Provider
                  </button>

                  {/* View Zone Details Button */}
                  <button
                    className="relative inline-block px-10 py-3 font-semibold rounded-full
      border-2 border-[#B78E3B] text-[black] bg-transparent
      hover:bg-gradient-to-r hover:from-[#B78E3B] hover:via-[#D4AF37] hover:to-[#FFD700] hover:text-white
      shadow-md shadow-black/30 hover:shadow-lg hover:shadow-[#FFD700]/40
      transform hover:-translate-y-1 hover:scale-105
      transition-all duration-300 overflow-hidden
      before:absolute before:top-0 before:left-0 before:w-full before:h-full
      before:bg-white/10 before:rounded-full before:opacity-0 before:transition-opacity before:duration-500 hover:before:opacity-20
      after:absolute after:-top-1 after:-left-1 after:w-0 after:h-full
      after:bg-gradient-to-r from-white/40 via-white/10 to-white/40
      after:skew-x-12 after:transition-all after:duration-700 hover:after:w-[calc(100%+2px)]
    "
                  >
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
