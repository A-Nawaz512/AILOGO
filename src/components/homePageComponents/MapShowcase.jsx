import React from "react";
import { MapPin, Car, Bike, Home, Truck, Utensils, Wrench } from "lucide-react";

export const MapShowcase = () => {
  
  const services = [
    { id: "ride", name: "Ride Vehicles", icon: Car, color: "#B78E3B" },
    { id: "rental", name: "Rentals", icon: Bike, color: "#543918" },
    { id: "apartment", name: "Apartments", icon: Home, color: "#B78E3B" },
    { id: "delivery", name: "Delivery", icon: Truck, color: "#543918" },
    { id: "food", name: "Food Delivery", icon: Utensils, color: "#B78E3B" },
    { id: "assistance", name: "Assistance", icon: Wrench, color: "#543918" },
  ];

  return (
    <div className="bg-white  px-4">
      <div className="max-w-6xl mx-auto">
        
        {/* Simple Header */}
        <div className="text-center mb-5">
          <div className="flex items-center justify-center mb-4">
            <div className="h-px w-12 bg-[#543918] mr-4"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              3D Map <span style={{ color: "#B78E3B" }}>Tracking</span>
            </h2>
            <div className="h-px w-12 bg-[#543918] ml-4"></div>
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Track all services in real-time with our MapLibre 3D visualization system
          </p>
        </div>

        {/* Simple Map Visualization */}
        <div className="grid lg:grid-cols-2 gap-12 items-center ">
          
          {/* Map Container */}
          <div className="relative">
            <div className="bg-gray-900 rounded-xl overflow-hidden border-2 border-[#B78E3B]/30 h-[400px]">
              
              {/* Simple Map Grid */}
              <div className="absolute inset-0 opacity-10">
                {Array.from({ length: 10 }).map((_, i) => (
                  <div key={i} className="absolute h-px w-full bg-gray-500" style={{ top: `${i * 10}%` }}></div>
                ))}
                {Array.from({ length: 10 }).map((_, i) => (
                  <div key={i} className="absolute w-px h-full bg-gray-500" style={{ left: `${i * 10}%` }}></div>
                ))}
              </div>

              {/* Simple Road */}
              <div className="absolute top-1/2 left-0 right-0 h-1 bg-yellow-500/30 transform -translate-y-1/2"></div>
              <div className="absolute top-1/3 left-0 right-0 h-1 bg-gray-400/20 transform -translate-y-1/2"></div>
              <div className="absolute top-2/3 left-0 right-0 h-1 bg-gray-400/20 transform -translate-y-1/2"></div>

              {/* Simple Service Markers */}
              {services.map((service, index) => (
                <div
                  key={service.id}
                  className="absolute"
                  style={{
                    left: `${20 + index * 12}%`,
                    top: `${30 + (index % 3) * 20}%`,
                  }}
                >
                  <div 
                    className="w-8 h-8 rounded-full flex items-center justify-center border-2 border-white"
                    style={{ backgroundColor: service.color }}
                  >
                    <service.icon className="w-4 h-4 text-white" />
                  </div>
                </div>
              ))}

              {/* User Marker */}
              <div className="absolute top-1/2 left-1/3 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-10 h-10 rounded-full bg-[#B78E3B]/20 border-2 border-[#B78E3B] flex items-center justify-center">
                  <div className="w-4 h-4 rounded-full bg-[#B69144]"></div>
                </div>
              </div>

              {/* MapLibre Badge */}
              <div className="absolute bottom-4 right-4 bg-[#543918] text-white text-xs px-3 py-1 rounded">
                MapLibre 3D
              </div>
            </div>
          </div>

          {/* Simple Features */}
          <div>
            <h3 className="text-2xl font-bold mb-6" style={{ color: "#543918" }}>
              Live Service Tracking
            </h3>
            
            <div className="space-y-4 mb-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full mt-2" style={{ backgroundColor: "#B78E3B" }}></div>
                <div>
                  <h4 className="font-semibold text-gray-800">Real-time 3D Visualization</h4>
                  <p className="text-gray-600 text-sm">See all moving vehicles and available services on map</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full mt-2" style={{ backgroundColor: "#B78E3B" }}></div>
                <div>
                  <h4 className="font-semibold text-gray-800">Free Map Solution</h4>
                  <p className="text-gray-600 text-sm">No Google Maps fees with MapLibre open-source</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full mt-2" style={{ backgroundColor: "#B78E3B" }}></div>
                <div>
                  <h4 className="font-semibold text-gray-800">All Services Visible</h4>
                  <p className="text-gray-600 text-sm">Rides, rentals, deliveries, and technicians shown in real-time</p>
                </div>
              </div>
            </div>

            {/* Service Legend */}
            <div className="border border-gray-200 p-3  rounded-lg">
              <h4 className="font-semibold mb-3" style={{ color: "#543918" }}>Service Colors</h4>
              <div className="grid grid-cols-2 gap-2 p-">
                {services.slice(0, 4).map((service) => (
                  <div key={service.id} className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: service.color }}></div>
                    <span className="text-sm text-gray-700">{service.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};