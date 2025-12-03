import React from 'react';
import Navbar from '../components/fooddelivery/Navbar';
import Hero from '../components/FoodDelivery/Hero';
import DeliveryServices from '../components/FoodDelivery/DeliveryServices';
import ZoneCoverage from '../components/FoodDelivery/ZoneCoverage';
import SmartRouting from '../components/FoodDelivery/SmartRouting';
import PaymentSystem from '../components/FoodDelivery/PaymentSystem';
import ProviderApp from '../components/FoodDelivery/ProviderApp';
import ChatIntegration from '../components/FoodDelivery/ChatIntegration';
function FoodDeliveryPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Navbar/>
      <Hero />
      <DeliveryServices />
      <ZoneCoverage />
      <SmartRouting />
      <PaymentSystem />
      <ProviderApp />
      <ChatIntegration />
    </div>
  );
}

export default FoodDeliveryPage;