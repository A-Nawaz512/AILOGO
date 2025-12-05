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
      color: "bg-yellow-500",
      icon: <FaTools />,
      description: "Orange markers on the map",
      features: ["Real-time tracking", "ETA estimation", "Service type visible"],
    },
    {
      service: "Rides / Drivers",
      color: "bg-pink-500",
      icon: <FaCar />,
      description: "Black (male) / Pink (female)",
      features: ["Driver selection", "Price negotiation", "Live tracking"],
    },
    {
      service: "Deliveries",
      color: "bg-blue-600",
      icon: <FaShippingFast />,
      description: "Dark blue markers",
      features: ["Package tracking", "Multi-stop", "Direct assignment"],
    },
    {
      service: "Apartment Rental",
      color: "bg-green-700",
      icon: <FaHouseUser />,
      description: "Dark green markers",
      features: ["Property details", "Ratings", "Booking system"],
    },
    {
      service: "Vehicle Rental",
      color: "bg-purple-700",
      icon: <FaBicycle />,
      description: "Dark purple markers",
      features: ["Various vehicles", "Instant booking", "Digital keys"],
    },
  ];

  return (
    <section
      className="py-15 md:py-20 relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('https://images.unsplash.com/photo-1528164344705-47542687000d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2090&q=80')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
      data-aos="fade-up"
    >
      {/* Glow Overlay */}
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_left,rgba(206,170,54,0.3),transparent)]"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Heading */}
        <div data-aos="zoom-in" className="text-center mb-14">
          <div className="inline-flex items-center justify-center bg-gradient-to-r from-yellow-500 to-[#CEAA36] text-white px-6 py-3 rounded-full mb-6 shadow-lg animate-pulse">
            <FaMap className="mr-2" />
            <span className="font-bold">OpenStreetMap Integration</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Live <span className="text-[#CEAA36]">Map Tracking</span> & Service Discovery
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Free OpenStreetMap integration with real-time service provider tracking
          </p>
        </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-0">
  {/* Map Legend */}
  <div
    className="bg-white/10 backdrop-blur-sm rounded-3xl p-4 sm:p-6 md:p-8 border border-gray-700 shadow-lg"
    data-aos="fade-right"
  >
    <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 flex items-center">
      <FaLayerGroup className="mr-3 text-yellow-500 animate-bounce-slow" />
      Service Map Legend
    </h3>

    <div className="space-y-4">
      {mapServices.map((service, index) => (
        <div
          key={index}
          className="bg-white/5 hover:bg-white/20 p-3 sm:p-4 rounded-xl border border-gray-700 transition-all duration-300 hover:scale-105 hover:shadow-md"
          data-aos="fade-up"
          data-aos-delay={index * 100}
        >
          <div className="flex flex-col sm:flex-row items-start sm:items-center">
            <div
              className={`w-12 h-12 rounded-full ${service.color} flex items-center justify-center mr-0 sm:mr-4 mb-2 sm:mb-0 transform transition-all duration-500 group-hover:scale-110`}
            >
              <div className="text-white text-xl">{service.icon}</div>
            </div>
            <div className="grow">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
                <h4 className="text-base sm:text-lg font-bold text-white">{service.service}</h4>
                <span className="mt-1 sm:mt-0 px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-xs sm:text-sm">
                  {service.description}
                </span>
              </div>
              <div className="flex flex-wrap gap-2 mt-2">
                {service.features.map((feature, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-1 bg-gray-800/50 text-gray-300 rounded-full text-xs sm:text-sm transition-all duration-300 group-hover:bg-gray-700/60"
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
    <div
      className="bg-white/10 backdrop-blur-sm rounded-3xl p-4 sm:p-6 md:p-8 border border-gray-700 shadow-lg"
      data-aos="fade-left"
    >
      <div className="flex flex-col sm:flex-row items-start sm:items-center mb-6">
        <FaMapMarkerAlt className="text-3xl text-yellow-500 mr-0 sm:mr-4 mb-2 sm:mb-0 animate-bounce-slow" />
        <div>
          <h3 className="text-xl sm:text-2xl font-bold text-white">Real-time Features</h3>
          <p className="text-gray-300 text-sm sm:text-base">Advanced map functionality</p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {[
          { title: "2D / 3D View", desc: "Switch between 2D and 3D map views", from: "from-orange-500/20", to: "to-red-500/20", textColor: "text-orange-400" },
          { title: "Live Tracking", desc: "Real-time provider location updates", from: "from-blue-500/20", to: "to-cyan-500/20", textColor: "text-blue-400" },
          { title: "Pop-up Details", desc: "Tap markers for provider information", from: "from-green-500/20", to: "to-emerald-500/20", textColor: "text-green-400" },
          { title: "Route Planning", desc: "Optimized routes for service providers", from: "from-purple-500/20", to: "to-pink-500/20", textColor: "text-purple-400" },
        ].map((item, idx) => (
          <div
            key={idx}
            className={`bg-gradient-to-br ${item.from} ${item.to} p-4 rounded-xl border border-opacity-30 border-current hover:scale-105 hover:shadow-md transition-all duration-300`}
          >
            <div className={`font-bold mb-2 text-sm sm:text-base ${item.textColor}`}>{item.title}</div>
            <p className="text-gray-300 text-xs sm:text-sm">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>

    <div
      className="bg-gradient-to-r from-orange-600/20 to-red-600/20 rounded-3xl p-4 sm:p-6 md:p-8 border border-orange-500/30 shadow-lg"
      data-aos="zoom-in"
    >
      <h4 className="text-lg sm:text-xl font-bold text-white mb-4">Pop-up Information Includes:</h4>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {[
          { color: "bg-green-500", text: "Provider Name & Type" },
          { color: "bg-yellow-500", text: "Rating & Reviews" },
          { color: "bg-blue-500", text: "Service Availability" },
          { color: "bg-purple-500", text: "Estimated Arrival Time" },
        ].map((item, idx) => (
          <div key={idx} className="flex items-center">
            <div className={`w-3 h-3 rounded-full ${item.color} mr-3 animate-pulse`}></div>
            <span className="text-gray-300 text-xs sm:text-sm">{item.text}</span>
          </div>
        ))}
      </div>
    </div>

    <div className="text-center mt-4">
      <button className="bg-gradient-to-r from-[#CEAA36] to-yellow-500 hover:from-orange-600 hover:to-red-600 text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-full text-base sm:text-lg transition duration-300 transform hover:scale-105 shadow-lg animate-pulse">
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
