import React, { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiEdit, FiTrash2, FiInfo, FiCheckCircle } from "react-icons/fi";

const driversData = [
  { id: 1, name: "Ali Khan", vehicle: "Motorbike", image: "https://randomuser.me/api/portraits/men/32.jpg", online: true, location: "Downtown", distance: "0.5km" },
  { id: 2, name: "Sara Ahmed", vehicle: "Car", image: "https://randomuser.me/api/portraits/women/44.jpg", online: false, location: "City Center", distance: "1.2km" },
  { id: 3, name: "Omar Farooq", vehicle: "Scooter", image: "https://randomuser.me/api/portraits/men/55.jpg", online: true, location: "Uptown", distance: "0.8km" },
  { id: 4, name: "Hina Ali", vehicle: "Bike", image: "https://randomuser.me/api/portraits/women/65.jpg", online: true, location: "Midtown", distance: "0.3km" },
  { id: 5, name: "Bilal Khan", vehicle: "Car", image: "https://randomuser.me/api/portraits/men/66.jpg", online: false, location: "Suburbs", distance: "2.1km" },
  { id: 6, name: "Fatima Noor", vehicle: "Motorbike", image: "https://randomuser.me/api/portraits/women/67.jpg", online: true, location: "Downtown", distance: "0.6km" },
];

const DeliveriesAvailability = () => {
  const [drivers, setDrivers] = useState(driversData);
  const [assignedDriver, setAssignedDriver] = useState(null);
  const [notification, setNotification] = useState("");

  const updateAvailability = useCallback(() => {
    setDrivers(prev => prev.map(d => ({ 
      ...d, 
      online: Math.random() > 0.3,
      distance: `${(Math.random() * 3).toFixed(1)}km`
    })));
  }, []);

  useEffect(() => {
    const interval = setInterval(updateAvailability, 5000);
    return () => clearInterval(interval);
  }, [updateAvailability]);

  const assignDriver = () => {
    const available = drivers.filter(d => d.online);
    if (available.length) {
      const nearest = available.sort((a,b) => 
        parseFloat(a.distance) - parseFloat(b.distance)
      )[0];
      setAssignedDriver(nearest);
      setNotification(`✅ ${nearest.name} assigned! Arriving in ${Math.ceil(Math.random() * 10)}min`);
      setTimeout(() => setNotification(""), 3000);
    } else {
      setNotification("⚠️ No drivers available nearby");
      setTimeout(() => setNotification(""), 3000);
    }
  };

  const deleteDriver = (id) => {
    if(window.confirm("Remove this driver from system?")) {
      setDrivers(prev => prev.filter(d => d.id !== id));
      if(assignedDriver?.id === id) setAssignedDriver(null);
    }
  };

  const updateDriver = (id) => {
    const newName = prompt("Update driver name:");
    if(newName?.trim()) {
      setDrivers(prev => prev.map(d => 
        d.id === id ? {...d, name: newName} : d
      ));
    }
  };

  const viewDetails = (driver) => {
    alert(`📋 Driver Details:\n\nName: ${driver.name}\nVehicle: ${driver.vehicle}\nLocation: ${driver.location}\nDistance: ${driver.distance}\nStatus: ${driver.online ? "🟢 Online" : "🔴 Offline"}`);
  };

  const renderCard = (driver) => (
    <motion.div
      key={driver.id}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      whileHover={{ y: -3 }}
      className="bg-white rounded-3xl shadow-2xl p-6 flex flex-col items-center gap-4 border-l-4 border-[#B78E3B] hover:shadow-3xl transition-all relative"
    >
      <div className="relative">
        <img
          src={driver.image}
          alt={driver.name}
          className="w-24 h-24 rounded-full object-cover border-4 border-[#B78E3B] shadow-md"
        />
        <span className={`absolute bottom-0 right-0 w-6 h-6 rounded-full border-2 border-white ${driver.online ? "bg-green-500" : "bg-gray-400"}`} />
      </div>
      <h3 className="font-bold text-lg text-[#6F4918]">{driver.name}</h3>
      <p className="text-gray-600 font-semibold">{driver.vehicle}</p>
      <div className="flex items-center gap-2">
        <span className="text-gray-500 text-sm">📍 {driver.location}</span>
        <span className="text-gray-400">•</span>
        <span className="text-[#B78E3B] text-sm font-bold">{driver.distance}</span>
      </div>
      <div className="flex items-center gap-2 mt-1">
        <span className={`w-3 h-3 rounded-full ${driver.online ? "bg-green-500 animate-pulse" : "bg-red-500"}`}></span>
        <span className="text-gray-700 font-medium">{driver.online ? "Available Now" : "Offline"}</span>
      </div>

      <div className="flex gap-3 mt-4">
        <button onClick={() => updateDriver(driver.id)} className="bg-[#F9D57E] p-2 rounded-full hover:scale-110 transition-transform shadow-md">
          <FiEdit className="text-[#6F4918]" size={18} />
        </button>
        <button onClick={() => deleteDriver(driver.id)} className="bg-[#F87171] p-2 rounded-full hover:scale-110 transition-transform shadow-md">
          <FiTrash2 className="text-white" size={18} />
        </button>
        <button onClick={() => viewDetails(driver)} className="bg-[#60A5FA] p-2 rounded-full hover:scale-110 transition-transform shadow-md">
          <FiInfo className="text-white" size={18} />
        </button>
      </div>
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#fefcf2] to-[#fff8e5] py-16 px-4">
      <h2 className="text-4xl md:text-4xl font-extrabold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-[#6F4918] to-[#B78E3B] drop-shadow-lg">
        🚚 Real-Time Driver Availability
      </h2>
      
      <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
        Live tracking of nearby delivery drivers. Status updates every 5 seconds.
      </p>

      <AnimatePresence>
        {notification && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className={`max-w-md mx-auto mb-8 p-4 rounded-2xl shadow-lg ${
              notification.includes("✅") ? "bg-green-50 border border-green-200" : "bg-yellow-50 border border-yellow-200"
            }`}
          >
            <div className="flex items-center gap-3 justify-center">
              {notification.includes("✅") ? <FiCheckCircle className="text-[#B78E3B]" /> : "⚠️"}
              <span className="font-semibold">{notification}</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex justify-center mb-16">
        <button
          onClick={assignDriver}
          className="bg-gradient-to-r from-[#B78E3B] to-[#E2CF7D] text-[#6F4918] font-bold px-8 py-3 rounded-full shadow-2xl hover:scale-105 hover:shadow-lg transition-transform flex items-center gap-3"
        >
          <span>📍 Assign Nearest Driver</span>
        </button>
      </div>

      <AnimatePresence mode="wait">
        {assignedDriver && (
          <motion.div
            key={assignedDriver.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="max-w-xl mx-auto mb-16 bg-white rounded-3xl shadow-2xl p-6 flex items-center gap-6 border-l-8 border-[#B78E3B] relative"
          >
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-[#B78E3B] text-white px-4 py-1 rounded-full text-sm font-bold">
              🎯 ASSIGNED DRIVER
            </div>
            <img
              src={assignedDriver.image}
              alt={assignedDriver.name}
              className="w-28 h-28 rounded-full object-cover border-4 border-[#B78E3B] shadow-lg"
            />
            <div className="flex-1">
              <h3 className="font-bold text-2xl text-[#6F4918]">{assignedDriver.name}</h3>
              <p className="text-gray-700 font-semibold">{assignedDriver.vehicle}</p>
              <div className="flex items-center gap-3 mt-2">
                <span className="text-gray-500">📍 {assignedDriver.location}</span>
                <span className="text-[#B78E3B] font-bold">• {assignedDriver.distance} away</span>
              </div>
              <div className="mt-3 flex items-center gap-2">
                <span className={`w-4 h-4 rounded-full ${assignedDriver.online ? "bg-green-500 animate-pulse" : "bg-red-500"}`}></span>
                <span className="text-gray-700 font-medium">
                  {assignedDriver.online ? "🟢 Active & Tracking" : "🔴 Unavailable"}
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {drivers.slice(0,3).map(renderCard)}
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mt-8">
        {drivers.slice(3,6).map(renderCard)}
      </div>

      <div className="mt-12 text-center text-gray-500 text-sm">
        <p>🔄 Real-time updates active • {drivers.filter(d => d.online).length} drivers online</p>
      </div>
    </div>
  );
};

export default DeliveriesAvailability;
