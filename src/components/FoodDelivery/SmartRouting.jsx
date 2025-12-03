// src/components/SmartRouting.jsx
import React, { useState } from 'react';
import { Map, Navigation, Users, Target, CheckCircle } from 'lucide-react';

const SmartRouting = () => {
  const [route, setRoute] = useState(['A', 'B', 'C']);

  const addStop = () => {
    const stops = ['D', 'E', 'F', 'G'];
    const nextStop = stops[route.length - 1];
    setRoute([...route, nextStop]);
  };

  const removeStop = (index) => {
    if (route.length > 2) {
      setRoute(route.filter((_, i) => i !== index));
    }
  };

  return (
    <section id="routing" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-indigo-50 to-purple-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-3 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full mb-4">
            <Navigation className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Intelligent <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Multi-Stop Routing</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Advanced routing algorithms for complex delivery chains: A → B → C and beyond
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Route Visualization */}
          <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl font-bold text-gray-900">Route Builder</h3>
              <button 
                onClick={addStop}
                disabled={route.length >= 7}
                className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-2 rounded-full hover:shadow-lg transition-all disabled:opacity-50"
              >
                Add Stop
              </button>
            </div>

            {/* Route Display */}
            <div className="relative">
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-500 to-purple-500"></div>
              
              {route.map((stop, index) => (
                <div key={index} className="flex items-center mb-8 ml-4">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center z-10 ${
                    index === 0 ? 'bg-gradient-to-r from-green-500 to-emerald-500' :
                    index === route.length - 1 ? 'bg-gradient-to-r from-red-500 to-pink-500' :
                    'bg-gradient-to-r from-indigo-500 to-purple-500'
                  }`}>
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
                        <h4 className="font-semibold text-gray-900">Stop {stop}</h4>
                        <p className="text-gray-600 text-sm">
                          {index === 0 ? 'Pickup Location' : 
                           index === route.length - 1 ? 'Final Destination' : 
                           `Delivery Point ${stop}`}
                        </p>
                      </div>
                      {index > 0 && index < route.length - 1 && (
                        <button 
                          onClick={() => removeStop(index)}
                          className="text-red-500 hover:text-red-700"
                        >
                          Remove
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 p-4 bg-gradient-to-r from-gray-50 to-white rounded-xl border border-gray-200">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm text-gray-600">Total Stops</p>
                  <p className="text-2xl font-bold text-gray-900">{route.length}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Estimated Time</p>
                  <p className="text-2xl font-bold text-gray-900">{route.length * 25} min</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Total Distance</p>
                  <p className="text-2xl font-bold text-gray-900">{route.length * 4.2} km</p>
                </div>
              </div>
            </div>
          </div>

          {/* Features */}
          <div>
            <div className="space-y-8">
              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-white/20 shadow-lg">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">
                      Direct Assignment
                    </h4>
                    <p className="text-gray-600">
                      Assign specific delivery personnel based on location, rating, and availability
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-white/20 shadow-lg">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg">
                    <Navigation className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">
                      Dynamic Optimization
                    </h4>
                    <p className="text-gray-600">
                      Real-time route adjustments based on traffic, weather, and priority levels
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-white/20 shadow-lg">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">
                      Zone Intelligence
                    </h4>
                    <p className="text-gray-600">
                      Smart zone detection and automatic routing between city zones and inter-city
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Commission Structure</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span>Base Commission</span>
                  <span className="text-3xl font-bold">5%</span>
                </div>
                <div className="text-sm text-indigo-100">
                  Transparent 5% commission on all transactions. No hidden fees or additional charges.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SmartRouting;