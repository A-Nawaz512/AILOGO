import React from "react";
import {
  FaMap,
  FaMapMarkerAlt,
  FaCar,
  FaTools,
  FaHouseUser,
  FaShippingFast,
  FaBicycle,
  FaLayerGroup,
} from "react-icons/fa";

const MapFeatures = () => {
  const mapServices = [
    {
      service: "Roadside Assistance",
      color: "from-[#6F4918] to-[#E2CF7D]",
      icon: <FaTools />,
      description: "Orange markers on the map",
      features: ["Real-time tracking", "ETA estimation", "Service type visible"],
    },
    {
      service: "Rides / Drivers",
      color: "from-[#6F4918] to-[#E2CF7D]",
      icon: <FaCar />,
      description: "Black (male) / Pink (female)",
      features: ["Driver selection", "Price negotiation", "Live tracking"],
    },
    {
      service: "Deliveries",
      color: "from-[#6F4918] to-[#E2CF7D]",
      icon: <FaShippingFast />,
      description: "Dark blue markers",
      features: ["Package tracking", "Multi-stop", "Direct assignment"],
    },
    {
      service: "Apartment Rental",
      color: "from-[#6F4918] to-[#E2CF7D]",
      icon: <FaHouseUser />,
      description: "Dark green markers",
      features: ["Property details", "Ratings", "Booking system"],
    },
    {
      service: "Vehicle Rental",
      color: "from-[#6F4918] to-[#E2CF7D]",
      icon: <FaBicycle />,
      description: "Dark purple markers",
      features: ["Various vehicles", "Instant booking", "Digital keys"],
    },
  ];

  const realTimeFeatures = [
    { title: "2D / 3D View", desc: "Switch between 2D and 3D map views" },
    { title: "Live Tracking", desc: "Real-time provider location updates" },
    { title: "Pop-up Details", desc: "Tap markers for provider information" },
    { title: "Route Planning", desc: "Optimized routes for service providers" },
  ];

  const popupInfo = [
    { color: "bg-green-500", text: "Provider Name & Type" },
    { color: "bg-yellow-500", text: "Rating & Reviews" },
    { color: "bg-blue-500", text: "Service Availability" },
    { color: "bg-purple-500", text: "Estimated Arrival Time" },
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        {/* Heading */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center justify-center bg-gradient-to-r from-[#6F4918] to-[#E2CF7D] text-white px-6 py-3 rounded-full mb-6 shadow-lg">
            <FaMap className="mr-2" />
            <span className="font-bold">OpenStreetMap Integration</span>
          </div>
          <div className="flex justify-center items-center mb-4">
            <div className="h-px mt-2 w-16 bg-gradient-to-r from-transparent to-[#B78E3B] mr-4"></div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800">
              Live Map Tracking <span className="text-[#B78E3B]">& Service Discovery</span>
            </h2>
            <div className="h-px mt-2 w-16 bg-gradient-to-l from-transparent to-[#B78E3B] ml-4"></div>
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Real-time service provider tracking integrated with OpenStreetMap
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {/* Map Legend */}
          <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-transform duration-500">
            <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-6 flex items-center">
              <FaLayerGroup className="mr-3 text-[#B78E3B]" />
              Service Map Legend
            </h3>
            <div className="space-y-4">
              {mapServices.map((service, index) => (
                <div
                  key={index}
                  className="bg-white p-5 rounded-2xl border border-gray-200 shadow-md hover:scale-105 hover:shadow-xl transition-transform duration-500"
                >
                  <div className="flex items-center">
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center mr-4 bg-gradient-to-r ${service.color} text-white text-xl shadow-md`}
                    >
                      {service.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-center mb-1">
                        <h4 className="text-gray-800 font-bold">{service.service}</h4>
                        <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-xs">
                          {service.description}
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-2 mt-1">
                        {service.features.map((feature, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-1 bg-gray-100 text-gray-800 rounded-full text-xs shadow-sm"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Map Features */}
          <div className="space-y-6">
            <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-transform duration-500">
              <div className="flex items-center mb-6">
                <FaMapMarkerAlt className="text-3xl text-[#B78E3B] mr-4" />
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-800">Real-time Features</h3>
                  <p className="text-gray-600 text-sm md:text-base">Advanced map functionality for better service discovery</p>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {realTimeFeatures.map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-white p-5 rounded-xl text-gray-800 border border-gray-200 shadow-md hover:scale-105 hover:shadow-xl transition-transform duration-500"
                  >
                    <h4 className="font-bold mb-1">{item.title}</h4>
                    <p className="text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-lg hover:shadow-2xl transition-transform duration-500">
              <h4 className="text-lg md:text-xl font-bold text-gray-800 mb-4">Pop-up Information Includes:</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {popupInfo.map((item, idx) => (
                  <div key={idx} className="flex items-center">
                    <div className={`${item.color} w-3 h-3 rounded-full mr-3 shadow-sm`}></div>
                    <span className="text-gray-800 text-sm">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center mt-4">
              <button className="bg-gradient-to-r from-[#6F4918] to-[#E2CF7D] hover:from-[#E2CF7D] hover:to-[#6F4918] text-white font-bold py-3 px-6 md:py-4 md:px-8 rounded-full text-base md:text-lg transition transform hover:scale-105 shadow-lg">
                Explore Live Map
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapFeatures;
