// src/pages/About.jsx
import React from "react";
import HeroSection from "../components/aboutPageComponents/HeroSection";
import OurStory from "../components/aboutPageComponents/OurStory";
import ServicesOverview from "../components/aboutPageComponents/ServicesOverview";
import VisionMission from "../components/aboutPageComponents/VisionMission";
import ContactCTA from "../components/aboutPageComponents/ContactCTA";

const AboutPage = () => {
   return (
      <div className="min-h-screen bg-white overflow-x-hidden">
         <HeroSection />
         <OurStory />
         <ServicesOverview />
         <VisionMission />
         <ContactCTA />
      </div>
   );
};

export default AboutPage;
