import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaCommentDots, FaPhone, FaClock, FaReceipt, FaDownload } from "react-icons/fa";

const DeliveryCommunication = () => {
  const [eta, setEta] = useState(18);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [selectedInvoice, setSelectedInvoice] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 1200, once: true, easing: "ease-in-out" });
    // Simulate ETA countdown
    const interval = setInterval(() => {
      setEta(prev => (prev > 1 ? prev - 1 : 0));
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  const deliveries = [
    {
      id: 1,
      date: "2025-11-28",
      time: "14:30",
      driver: "Ahmed Ali",
      vehicle: "Motorbike",
      status: "Delivered",
      price: "500 DZD",
      invoice: "#INV1023",
      rating: "★★★★★"
    },
    {
      id: 2,
      date: "2025-11-27",
      time: "11:15",
      driver: "Sara Khan",
      vehicle: "Car",
      status: "On the Way",
      price: "350 DZD",
      invoice: "#INV1022",
      rating: "★★★★☆"
    },
    {
      id: 3,
      date: "2025-11-26",
      time: "16:45",
      driver: "Mohamed Farah",
      vehicle: "Scooter",
      status: "Delivered",
      price: "700 DZD",
      invoice: "#INV1021",
      rating: "★★★★★"
    },
  ];

  const handleViewInvoice = (invoice) => {
    setSelectedInvoice(invoice);
    alert(`Invoice ${invoice} details:\n\nYou can download the receipt from your delivery history.`);
  };

  const handleChat = () => {
    setIsChatOpen(true);
    alert("💬 Chat opened with your driver. You can send messages in real-time.");
  };

  const handleCall = () => {
    alert("📞 Calling your driver through masked number...\n(Phone numbers are hidden for privacy)");
  };

  return (
    <section className="relative bg-gradient-to-b from-white to-[#fefcf2] py-32 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col items-center justify-center mb-16">
          <h2 className="text-4xl md:text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-[#6F4918] to-[#B78E3B] mb-4" data-aos="fade-down">
            📞 Communication & History
          </h2>
          <p className="text-gray-600 text-center max-w-2xl" data-aos="fade-down" data-aos-delay="100">
            Real-time communication with drivers and complete delivery history
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-start gap-16 relative z-10">
          {/* Left: Communication Section */}
          <div className="md:w-1/2" data-aos="fade-right">
            <div className="bg-gradient-to-br from-white to-[#FFF8E5] rounded-3xl shadow-2xl p-8 border-l-8 border-[#B78E3B]">
              <h3 className="text-2xl font-bold text-[#6F4918] mb-6">💬 Live Communication</h3>
              
              {/* ETA Display */}
              <div className="mb-8 bg-gradient-to-r from-[#fefcf2] to-white rounded-2xl p-6 border-2 border-[#E2CF7D] shadow-lg">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="bg-[#B78E3B] text-white p-3 rounded-full">
                      <FaClock className="text-xl" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-[#6F4918]">Live ETA Updates</h4>
                      <p className="text-gray-600">Updated in real-time</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-4xl font-extrabold text-[#6F4918]">{eta} min</div>
                    <p className="text-gray-500 text-sm">Arrival Time</p>
                  </div>
                </div>
              </div>

              {/* Communication Options */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <button 
                  onClick={handleChat}
                  className="bg-gradient-to-r from-[#FFF8E5] to-white border-2 border-[#E2CF7D] rounded-2xl p-6 text-center transition-all hover:scale-105 hover:shadow-xl hover:border-[#B78E3B] group"
                >
                  <div className="bg-gradient-to-tr from-[#B78E3B] to-[#E2CF7D] text-white p-4 rounded-full text-2xl inline-flex justify-center items-center mb-4 group-hover:scale-110 transition-transform">
                    <FaCommentDots />
                  </div>
                  <h4 className="text-lg font-bold text-[#6F4918] mb-2">In-app Chat</h4>
                  <p className="text-gray-600 text-sm">Message driver securely</p>
                  <div className="mt-3 text-xs text-[#B78E3B] bg-[#FFF8E5] px-3 py-1 rounded-full inline-block">
                    🔒 Encrypted
                  </div>
                </button>

                <button 
                  onClick={handleCall}
                  className="bg-gradient-to-r from-[#FFF8E5] to-white border-2 border-[#E2CF7D] rounded-2xl p-6 text-center transition-all hover:scale-105 hover:shadow-xl hover:border-[#B78E3B] group"
                >
                  <div className="bg-gradient-to-tr from-[#B78E3B] to-[#E2CF7D] text-white p-4 rounded-full text-2xl inline-flex justify-center items-center mb-4 group-hover:scale-110 transition-transform">
                    <FaPhone />
                  </div>
                  <h4 className="text-lg font-bold text-[#6F4918] mb-2">Direct Call</h4>
                  <p className="text-gray-600 text-sm">Call with masked number</p>
                  <div className="mt-3 text-xs text-[#B78E3B] bg-[#FFF8E5] px-3 py-1 rounded-full inline-block">
                    📞 Privacy Protected
                  </div>
                </button>
              </div>

              {/* Status Message */}
              <div className="bg-gray-50 rounded-2xl p-4 text-center">
                <p className="text-gray-600">
                  <span className="text-[#6F4918] font-medium">Live communication</span> with your driver ensures smooth delivery
                </p>
              </div>
            </div>
          </div>

          {/* Right: Delivery History */}
          <div className="md:w-1/2" data-aos="fade-left">
            <div className="bg-gradient-to-br from-white to-[#FFF8E5] rounded-3xl shadow-2xl p-8 border-l-8 border-[#B78E3B]">
              <div className="flex justify-between items-center mb-8">
                <h3 className="text-2xl font-bold text-[#6F4918]">📋 Delivery History</h3>
                <span className="text-sm text-[#B78E3B] bg-[#FFF8E5] px-3 py-1 rounded-full">
                  {deliveries.length} deliveries
                </span>
              </div>

              <div className="space-y-6">
                {deliveries.map((delivery) => (
                  <div
                    key={delivery.id}
                    className="bg-white rounded-2xl shadow-lg p-6 border border-[#E2CF7D] hover:shadow-xl hover:border-[#B78E3B] transition-all hover:-translate-y-1"
                  >
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-gray-500 font-medium">{delivery.date} • {delivery.time}</span>
                          <span className={`font-bold text-sm px-3 py-1 rounded-full ${
                            delivery.status === "Delivered" 
                              ? "bg-green-100 text-green-700" 
                              : "bg-yellow-100 text-yellow-700"
                          }`}>
                            {delivery.status}
                          </span>
                        </div>
                        <h3 className="text-lg font-bold text-[#6F4918] mb-1">{delivery.driver}</h3>
                        <p className="text-gray-600 text-sm mb-1">🚗 {delivery.vehicle}</p>
                        <div className="text-yellow-500 text-sm">{delivery.rating}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-xl font-bold text-[#B78E3B] mb-2">{delivery.price}</div>
                        <button 
                          onClick={() => handleViewInvoice(delivery.invoice)}
                          className="text-[#6F4918] hover:text-[#B78E3B] transition-colors text-sm flex items-center gap-1"
                        >
                          <FaReceipt className="text-sm" />
                          {delivery.invoice}
                        </button>
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                      <div className="text-gray-500 text-sm">
                        Invoice available for download
                      </div>
                      <button className="flex items-center gap-2 bg-[#FFF8E5] text-[#6F4918] hover:bg-[#E2CF7D] px-4 py-2 rounded-full text-sm font-medium transition-colors">
                        <FaDownload className="text-sm" />
                        Download Receipt
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* View All Button */}
              <div className="mt-8 text-center">
                <button className="bg-gradient-to-r from-[#6F4918] to-[#B78E3B] text-white font-bold px-8 py-3 rounded-full hover:scale-105 transition-all shadow-lg hover:shadow-xl">
                  View All Delivery History
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle Background Circle */}
      <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[50rem] h-[50rem] bg-gradient-to-r from-[#B78E3B]/15 to-[#E2CF7D]/10 rounded-full filter blur-3xl"></div>
    </section>
  );
};

export default DeliveryCommunication;