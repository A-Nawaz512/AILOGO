// src/components/SmartRouting.jsx
import React, { useState } from "react";
import {
  Map,
  Navigation,
  Users,
  Target,
  CheckCircle,
  MessageCircle,
  CreditCard,
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
    <section
      id="routing"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-[#151212] text-white"
    >
      <div className="max-w-7xl mx-auto">
        {/* HEADER */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-3 bg-gradient-to-r from-[#86632C] to-yellow-600 rounded-full mb-4">
            <Navigation className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Smart{" "}
            <span className="bg-gradient-to-r from-[#86632C] to-yellow-600 bg-clip-text text-transparent">
              Delivery Routing
            </span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Efficient multi-stop routing across zones with real-time
            optimization and delivery assignment.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* ROUTE BUILDER */}
          <div className="bg-[#1e1c1b] border border-gray-700 rounded-3xl p-8 shadow-xl">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl font-bold">Route Builder</h3>
              <button
                onClick={addStop}
                disabled={route.length >= 7}
                className="bg-gradient-to-r from-[#86632C] to-yellow-600 text-white px-6 py-2 rounded-full hover:shadow-lg transition disabled:opacity-40"
              >
                Add Stop
              </button>
            </div>

            <div className="relative">
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#86632C] to-yellow-600"></div>

              {route.map((stop, index) => (
                <div key={index} className="flex items-center mb-8 ml-4">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center z-10 shadow-lg border border-white/20 ${
                      index === 0
                        ? "bg-gradient-to-r from-green-600 to-emerald-500"
                        : index === route.length - 1
                        ? "bg-gradient-to-r from-red-600 to-pink-600"
                        : "bg-gradient-to-r from-[#86632C] to-yellow-600"
                    }`}
                  >
                    {index === 0 ? (
                      <Target className="w-6 h-6 text-white" />
                    ) : index === route.length - 1 ? (
                      <CheckCircle className="w-6 h-6 text-white" />
                    ) : (
                      <Map className="w-6 h-6 text-white" />
                    )}
                  </div>

                  <div className="ml-4 flex-1">
                    <div className="flex justify-between items-center">
                      <div>
                        <h4 className="font-semibold">Stop {stop}</h4>
                        <p className="text-sm text-gray-400">
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
                          className="text-red-400 hover:text-red-600 transition"
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
            <div className="mt-8 p-4 bg-[#151212] border border-gray-700 rounded-xl">
              <div className="flex justify-between">
                <div>
                  <p className="text-sm text-gray-400">Total Stops</p>
                  <p className="text-2xl font-bold">{route.length}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-400">Est. Time</p>
                  <p className="text-2xl font-bold">{route.length * 25} min</p>
                </div>
                <div>
                  <p className="text-sm text-gray-400">Distance</p>
                  <p className="text-2xl font-bold">
                    {(route.length * 4.2).toFixed(1)} km
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* FEATURES */}
          <div className="space-y-6">
            {/* Delivery Types */}
            <div className="bg-[#1e1c1b] p-6 rounded-2xl border border-gray-700 shadow-lg">
              <h4 className="text-xl font-semibold mb-2">Delivery Types</h4>
              <ul className="list-disc list-inside text-gray-300 space-y-1">
                <li>Food</li>
                <li>Pharmacy</li>
                <li>Packages</li>
                <li>Products</li>
              </ul>
            </div>

            {/* Zones */}
            <div className="bg-[#1e1c1b] p-6 rounded-2xl border border-gray-700 shadow-lg">
              <h4 className="text-xl font-semibold mb-2">Zones</h4>
              <ul className="list-disc list-inside text-gray-300 space-y-1">
                <li>Within the city</li>
                <li>Between two cities / zones</li>
                <li>Delivery A → B → C possible</li>
                <li>Direct assignment of a delivery person possible</li>
              </ul>
            </div>

            {/* Communication */}
            <div className="bg-[#1e1c1b] p-6 rounded-2xl border border-gray-700 shadow-lg">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-1">Communication</h4>
                  <p className="text-gray-400">
                    In-app chat, call, or WhatsApp with customers and providers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Commission & Payment */}
        <div className="bg-gradient-to-r mx-auto max-w-2xl mt-10 from-[#86632C] to-yellow-600 rounded-2xl p-8 text-white shadow-xl">
          <h3 className="text-2xl font-bold mb-4">Commission & Payment</h3>
          <ul className="list-disc list-inside mb-4 space-y-1">
            <li>ALLOGO Commission: 5% flat rate</li>
            <li>Customer payment: cash or card</li>
            <li>Provider must use card to unlock new deliveries</li>
          </ul>
          <div className="flex justify-between items-center">
            <span className="text-lg">Commission Rate</span>
            <span className="text-4xl font-bold">5%</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SmartRouting;
