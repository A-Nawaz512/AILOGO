// src/components/SmartRouting.jsx
import React, { useState } from "react";
import {
  Map,
  Navigation,
  Target,
  CheckCircle,
  MessageCircle,
} from "lucide-react";
import { motion } from "framer-motion";

const SmartRouting = () => {
  const [route, setRoute] = useState(["A", "B", "C"]);

  const addStop = () => {
    const stops = ["D", "E", "F", "G"];
    const nextStop = stops[route.length - 1];
    if (nextStop) setRoute([...route, nextStop]);
  };

  const removeStop = (index) => {
    if (route.length > 2) setRoute(route.filter((_, i) => i !== index));
  };

  return (
    <section id="routing" className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50 text-gray-900">
      <div className="max-w-7xl mx-auto">
        {/* HEADER */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-3 bg-gradient-to-r from-[#6F4918] to-[#E2CF7D] rounded-full mb-4">
            <Navigation className="w-8 h-8 text-gray-50" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Smart{" "}
            <span className="bg-gradient-to-r from-[#6F4918] to-[#E2CF7D] bg-clip-text text-transparent">
              Delivery Routing
            </span>
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Efficient multi-stop routing across zones with real-time optimization
            and delivery assignment.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* ROUTE BUILDER */}
          <div className="bg-white border border-gray-200 rounded-3xl p-8 shadow-lg">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl font-bold">Route Builder</h3>
              <button
                onClick={addStop}
                disabled={route.length >= 7}
                className="bg-gradient-to-r from-[#6F4918] to-[#E2CF7D] text-gray-50 px-6 py-2 rounded-full hover:shadow-lg transition disabled:opacity-40"
              >
                Add Stop
              </button>
            </div>

            <div className="relative">
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-r from-[#6F4918] to-[#E2CF7D]"></div>

              {route.map((stop, index) => (
                <div key={index} className="flex items-center mb-8 ml-4">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center z-10 shadow-md border border-gray-200 ${
                      index === 0
                        ? "bg-gradient-to-r from-[#6F4918] to-[#E2CF7D]"
                        : index === route.length - 1
                        ? "bg-gradient-to-r from-[#6F4918] to-[#E2CF7D]"
                        : "bg-gradient-to-r from-[#6F4918] to-[#E2CF7D]"
                    }`}
                  >
                    {index === 0 ? (
                      <Target className="w-6 h-6 text-gray-50" />
                    ) : index === route.length - 1 ? (
                      <CheckCircle className="w-6 h-6 text-gray-50" />
                    ) : (
                      <Map className="w-6 h-6 text-gray-50" />
                    )}
                  </div>

                  <div className="ml-4 flex-1">
                    <div className="flex justify-between items-center">
                      <div>
                        <h4 className="font-semibold">Stop {stop}</h4>
                        <p className="text-sm text-gray-500">
                          {index === 0
                            ? "Pickup Location"
                            : index === route.length - 1
                            ? "Final Destination"
                            : `Delivery Point ${stop}`}
                        </p>
                      </div>
                      {index > 0 && index < route.length - 1 && (
                        <button
                          onClick={() => removeStop(index)}
                          className="text-red-500 hover:text-red-600 transition"
                        >
                          Remove
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* SUMMARY */}
            <div className="mt-8 p-4 bg-gray-50 border border-gray-200 rounded-xl">
              <div className="flex justify-between">
                <div>
                  <p className="text-sm text-gray-500">Total Stops</p>
                  <p className="text-2xl font-bold">{route.length}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Est. Time</p>
                  <p className="text-2xl font-bold">{route.length * 25} min</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Distance</p>
                  <p className="text-2xl font-bold">
                    {(route.length * 4.2).toFixed(1)} km
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* FEATURES */}
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-md">
              <h4 className="text-xl font-semibold mb-2">Delivery Types</h4>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Food</li>
                <li>Pharmacy</li>
                <li>Packages</li>
                <li>Products</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-md">
              <h4 className="text-xl font-semibold mb-2">Zones</h4>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Within the city</li>
                <li>Between two cities / zones</li>
                <li>Delivery A → B → C possible</li>
                <li>Direct assignment of a delivery person possible</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-md">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-gradient-to-r from-[#6F4918] to-[#E2CF7D] rounded-lg">
                  <MessageCircle className="w-6 h-6 text-gray-50" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-1">Communication</h4>
                  <p className="text-gray-500">
                    In-app chat, call, or WhatsApp with customers and providers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Commission & Payment */}
        <div
          id="commission"
          className="mx-auto max-w-2xl mt-10 p-8 bg-gradient-to-r from-[#6F4918] to-[#E2CF7D] rounded-3xl shadow-lg text-white"
        >
          <h3 className="text-3xl font-bold mb-6">Commission & Payment</h3>

          <div className="space-y-4">
            <div className="flex items-center gap-4 p-4 bg-white rounded-xl hover:bg-gray-100 transition">
              <span className="p-2 bg-gradient-to-r from-[#6F4918] to-[#E2CF7D] rounded-full">💰</span>
              <div>
                <p className="font-semibold">ALLOGO Commission</p>
                <p className="text-gray-700 text-sm">Flat 5% rate on each delivery</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 bg-white rounded-xl hover:bg-gray-100 transition">
              <span className="p-2 bg-gradient-to-r from-[#6F4918] to-[#E2CF7D] rounded-full">💳</span>
              <div>
                <p className="font-semibold">Customer Payment</p>
                <p className="text-gray-700 text-sm">Cash or Card accepted</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 bg-white rounded-xl hover:bg-gray-100 transition">
              <span className="p-2 bg-gradient-to-r from-[#6F4918] to-[#E2CF7D] rounded-full">🛡️</span>
              <div>
                <p className="font-semibold">Provider Requirement</p>
                <p className="text-gray-700 text-sm">Card verification required to unlock new deliveries</p>
              </div>
            </div>
          </div>

          <div className="mt-6 flex justify-between text-black items-center p-4 bg-white/50 rounded-xl">
            <span className="text-lg font-medium">Commission Rate</span>
            <span className="text-4xl  font-bold">5%</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SmartRouting;
