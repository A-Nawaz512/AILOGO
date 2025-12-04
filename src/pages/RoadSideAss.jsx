import React from "react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import HeroSection from "../components/roadSideAssComponents/HeroSection";
import ServicesGrid from "../components/roadSideAssComponents/ServicesGrid";
import HowItWorks from "../components/roadSideAssComponents/HowItWorks";
import PricingCommission from "../components/roadSideAssComponents/PricingCommission";
import CreditPointsSystem from "../components/roadSideAssComponents/CreditPointsSystem";
import MapFeatures from "../components/roadSideAssComponents/MapFeatures";
import RegistrationProcess from "../components/roadSideAssComponents/RegistrationProcess";
import FreeServices from "../components/roadSideAssComponents/FreeServices";
import CTA from "../components/roadSideAssComponents/CTA";

const RoadSideAss = () => {
   useEffect(() => {
      AOS.init({
         duration: 1000,
         once: true,
         offset: 100,
      });
   }, []);

   return (
      <div className="min-h-screen bg-gray-50">
         <HeroSection />
         <ServicesGrid />
         <HowItWorks />
         <PricingCommission />
         <CreditPointsSystem />
         <MapFeatures />
         <RegistrationProcess />
         <FreeServices />
         <CTA />
      </div>
   );
};

export default RoadSideAss;
