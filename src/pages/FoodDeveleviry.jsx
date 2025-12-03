import React from 'react';
import Navbar from '../components/fooddelivery/Navbar';
import Hero from '../components/FoodDelivery/Hero';
import DeliveryServices from '../components/FoodDelivery/DeliveryServices';
import ZoneCoverage from '../components/FoodDelivery/ZoneCoverage';
import SmartRouting from '../components/FoodDelivery/SmartRouting';
import PaymentSystem from '../components/FoodDelivery/PaymentSystem';
import ChatIntegration from '../components/FoodDelivery/ChatIntegration';
import ProviderPaymentUnlock from '../components/FoodDelivery/ProviderPaymentUnlock';
function FoodDeliveryPage() {
  return (
    <div className="">
      <Navbar/>
      <Hero />
      <DeliveryServices />
      <ZoneCoverage />
      <SmartRouting />
      <PaymentSystem />
      <ChatIntegration />
      <ProviderPaymentUnlock/>
    </div>
  );
}

export default FoodDeliveryPage;