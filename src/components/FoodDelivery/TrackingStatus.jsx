import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const trackingStages = [
  "Request Received",
  "Driver Assigned",
  "Driver Arrived",
  "Picked Up",
  "On the Way",
  "Delivered",
];

const TrackingStatus = () => {
  const [currentStage, setCurrentStage] = useState(0);
  const driverLocation = { lat: 36.702, lng: 3.212 }; // Static for map

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  // Simulate stage progress every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStage(prev => (prev < trackingStages.length - 1 ? prev + 1 : prev));
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-[#fefcf2] py-8 px-3">

      {/* Header */}
     <div className="flex  justify-center items-center mb-8">
            <div className="h-px mt-2 w-12 bg-gradient-to-r from-transparent to-[#B78E3B] mr-4"></div>
            <h2 className="text-2xl md:text-4xl font-bold">
              Live {""} <span className="bg-gradient-to-r from-[#6F4918] to-[#E2CF7D] bg-clip-text text-transparent">
               Delivery Tracking & Status
            </span>
            </h2>
            <div className="h-px mt-2 w-12 bg-gradient-to-l from-transparent to-[#B78E3B] ml-4"></div>
          </div>

      {/* Driver Info Card */}
      <div className="flex justify-center mb-16">
        <div
          className="max-w-4xl w-full bg-gradient-to-r from-[#fefcf2] to-white rounded-xl shadow-2xl 
          p-8 border-l-8 border-[#B78E3B] hover:shadow-[0_0_8px_rgba(0,0,0,0.35)] transition-all duration-300"
          data-aos="fade-up"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="relative">
                <img
                  src="https://randomuser.me/api/portraits/men/32.jpg"
                  alt="Driver"
                  className="w-20 h-20  rounded-xl object-cover border-2 border-[#B78E3B] decoration-300 shadow-2xl"
                />
                <div className="absolute bottom-1 right-2 w-3 h-3 rounded-xl bg-green-500 border-2 border-white"></div>
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-2xl md:text-2xl font-bold text-[#6F4918] mb-2">Ali Khan</h3>
                <p className="text-gray-700 font-medium mb-2">🏍️ Vehicle: Motorbike</p>
                <p className="text-gray-600">📍 Live Location: Lat {driverLocation.lat.toFixed(3)}, Lng {driverLocation.lng.toFixed(3)}</p>
              </div>
            </div>

            {/* Status Indicator */}
            <div className="text-center md:text-right">
              <div className="flex items-center justify-center md:justify-end gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                <span className="text-sm font-medium text-gray-600">Real-time GPS Active</span>
              </div>
              <div className="text-lg font-bold text-[#B78E3B] bg-[#fff8e5] px-5 py-2 rounded-xl">
                Stage {currentStage + 1} of {trackingStages.length}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Current Status Bar */}
      <div className="flex justify-center mb-12" data-aos="fade-up" data-aos-delay="200">
        <div className="max-w-4xl w-full">
          <div className="bg-gradient-to-r from-[#B78E3B] to-[#E2CF7D] text-white px-5 py-2 rounded-xl shadow-lg text-center">
            <p className="text-lg md:text-xl font-bold flex items-center justify-center gap-4">
              <span>Current Status:</span>
              <span className="bg-white/20 px-5 py-2 rounded-xl min-w-[200px]">
                {trackingStages[currentStage]}
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div className="flex justify-center mb-16">
        <div className="max-w-4xl w-full">
          <div className="relative">
            <div className="absolute left-16 top-8 bottom-8 w-1 bg-gray-200 transform -translate-x-1/2"></div>

            {trackingStages.map((stage, index) => (
              <div
                key={index}
                className="flex items-center mb-10 relative"
                data-aos="fade-right"
                data-aos-delay={index * 100}
              >
                <div className="flex-shrink-0 w-32 flex justify-center relative z-10">
                  <div
                    className={`w-9 h-9 rounded-full border-4 flex items-center justify-center transition-all duration-300 ${
                      index <= currentStage
                        ? "border-[#B78E3B] bg-gradient-to-r from-[#6F4918] to-[#E2CF7D] text-white shadow-lg transform scale-110"
                        : "border-gray-300 bg-white text-gray-400"
                    }`}
                  >
                    {index <= currentStage ? (
                      <span className="text-lg font-bold">✓</span>
                    ) : (
                      <span className="text-lg font-bold">{index + 1}</span>
                    )}
                  </div>
                </div>

                <div className="flex-1 ml-8">
                  <div className="flex items-center justify-between mb-2">
                    <p
                      className={`text-xl md:text-2xl font-bold ${
                        index <= currentStage ? "text-[#6F4918]" : "text-gray-400"
                      }`}
                    >
                      {stage}
                    </p>
                    <span
                      className={`text-sm font-medium px-5 py-2 rounded-xl ${
                        index <= currentStage
                          ? "bg-[#E2CF7D] text-[#6F4918]"
                          : "bg-gray-100 text-gray-500"
                      }`}
                    >
                      {index === currentStage ? "In Progress" : index < currentStage ? "Completed" : "Pending"}
                    </span>
                  </div>

                  <div
                    className={`h-3 rounded-xl w-full ${
                      index < currentStage
                        ? "bg-gradient-to-r from-[#6F4918] to-[#B78E3B]"
                        : index === currentStage
                        ? "bg-gradient-to-r from-[#B78E3B] to-[#E2CF7D] animate-pulse"
                        : "bg-gray-200"
                    } transition-all duration-300`}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Map */}
      <div className="flex justify-center" data-aos="zoom-in">
        <div className="max-w-4xl w-full">
          <div className="flex  justify-center items-center mb-2">
            <div className="h-px mt-2 w-12 bg-gradient-to-r from-transparent to-[#B78E3B] mr-4"></div>
            <h2 className="text-2xl md:text-4xl font-bold">
              Live {""} <span style={{ color: '#B78E3B' }}> Driver Location</span>
            </h2>
            <div className="h-px mt-2 w-12 bg-gradient-to-l from-transparent to-[#B78E3B] ml-4"></div>
          </div>
            <p className="text-gray-600 mt-2 text-center mb-8">Real-time GPS tracking on map</p>

          <div
            className="rounded-xl shadow-2xl overflow-hidden h-80 md:h-96 
            border-4 border-[#B78E3B] relative hover:shadow-[0_0_8px_rgba(0,0,0,0.35)] transition-all duration-300"
          >
            <iframe
              title="Live Driver Map"
              className="w-full h-full"
              src={`https://maps.google.com/maps?q=${driverLocation.lat},${driverLocation.lng}&z=15&output=embed`}
              style={{ border: 0 }}
            />

            <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-sm px-5 py-2 rounded-xl shadow-xl border border-[#E2CF7D] text-right">
              <p className="text-sm font-bold text-[#6F4918] mb-1">🎯 Driver Location</p>
              <p className="text-gray-700 font-medium">Lat: {driverLocation.lat.toFixed(4)}</p>
              <p className="text-gray-700 font-medium">Lng: {driverLocation.lng.toFixed(4)}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="flex justify-center mt-12" data-aos="fade-up">
        <div className="max-w-4xl w-full text-center">
          <div
            className="bg-gray-50 rounded-xl py-2 px-5 border border-gray-200 
            hover:shadow-[0_0_8px_rgba(0,0,0,0.35)] transition-all duration-300"
          >
            <p className="text-gray-600 font-medium">
              🔄 Auto-updating every 4 seconds •
              <span className="text-[#6F4918] font-bold ml-2">
                {currentStage + 1} of {trackingStages.length} stages completed
              </span>
            </p>

            <div className="mt-2 flex items-center justify-center gap-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-xl bg-green-500"></div>
                <span className="text-sm text-gray-600">Completed</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-xl bg-[#B78E3B] animate-pulse"></div>
                <span className="text-sm text-gray-600">In Progress</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-xl bg-gray-300"></div>
                <span className="text-sm text-gray-600">Pending</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default TrackingStatus;
