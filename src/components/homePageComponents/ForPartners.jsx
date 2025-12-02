import React from "react";
import { FaCoins, FaCreditCard, FaUserShield, FaChartBar } from "react-icons/fa";

export const ForPartners = () => {
  return (
    <div className="bg-white py-6 px-4">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <div className="h-px w-12 bg-[#543918] mr-4"></div>
            <h2 className="text-3xl font-bold text-gray-800">
              Loyalty & <span style={{ color: "#B78E3B" }}>Credit System</span>
            </h2>
            <div className="h-px w-12 bg-[#543918] ml-4"></div>
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Earn points and access credit based on your activity and loyalty
          </p>
        </div>

        {/* Main Features */}
        <div className="grid md:grid-cols-2 gap-8 ">
          
          {/* Loyalty Points */}
          <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-lg flex items-center justify-center"
                style={{ backgroundColor: "rgba(183, 142, 59, 0.1)" }}>
                <FaCoins className="w-6 h-6" style={{ color: "#543918" }} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800">Loyalty Points</h3>
                <div className="text-lg font-bold" style={{ color: "#B78E3B" }}>1 point = 1 DA</div>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full mt-2" style={{ backgroundColor: "#B78E3B" }}></div>
                <p className="text-gray-600">Earn 1 point for every 1 DA spent on any service</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full mt-2" style={{ backgroundColor: "#B78E3B" }}></div>
                <p className="text-gray-600">Points credited to all users (drivers, couriers, renters)</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full mt-2" style={{ backgroundColor: "#B78E3B" }}></div>
                <p className="text-gray-600">Redeem points for future services</p>
              </div>
            </div>
          </div>

          {/* Credit System */}
          <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-lg flex items-center justify-center"
                style={{ backgroundColor: "rgba(183, 142, 59, 0.1)" }}>
                <FaCreditCard className="w-6 h-6" style={{ color: "#543918" }} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800">Credit Facility</h3>
                <div className="text-lg font-bold" style={{ color: "#B78E3B" }}>1000-2000 DA</div>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full mt-2" style={{ backgroundColor: "#B78E3B" }}></div>
                <p className="text-gray-600">Active users can borrow 1000-2000 DA based on loyalty and activity</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full mt-2" style={{ backgroundColor: "#B78E3B" }}></div>
                <p className="text-gray-600">Credit tied to commissions - automatic repayment system</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full mt-2" style={{ backgroundColor: "#B78E3B" }}></div>
                <p className="text-gray-600">Cannot borrow new balance until previous one is repaid</p>
              </div>
            </div>
          </div>
        </div>

       
      </div>
    </div>
  );
};