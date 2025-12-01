// src/pages/About.jsx
import React from "react";
import HeroSection from "../components/aboutPageComponents/HeroSection";
import OurStory from "../components/aboutPageComponents/OurStory";
import ServicesOverview from "../components/aboutPageComponents/ServicesOverview";
import Technology from "../components/aboutPageComponents/Technology";
import VisionMission from "../components/aboutPageComponents/VisionMission";
import ContactCTA from "../components/aboutPageComponents/ContactCTA";

const AboutPage = () => {
   return (
      <div className="min-h-screen bg-gradient-to-b from-[#0a0a0a] to-[#202020] overflow-x-hidden">
         <HeroSection />
         <OurStory />
         <ServicesOverview />
         <Technology />
         <VisionMission />
         <ContactCTA />
      </div>
   );
};

export default AboutPage;
