import React from "react";
import Home from "../components/homePageComponents/Home";
import ServicesSection from "../components/homePageComponents/ServiceSection";
// import FeaturesSection from "../components/homePageComponents/FeatureSection";
// import WhyChooseUs from "../components/homePageComponents/WhyChooseUs";
// import Testimonials from "../components/homePageComponents/testimonials";
import { MapShowcase } from "../components/homePageComponents/MapShowcase";
import { HowItWorks } from "../components/homePageComponents/HowItWorks";
import { ForPartners } from "../components/homePageComponents/ForPartners";
import { FAQSection } from "../components/homePageComponents/FAQSection";





function HomePage() {
   return (
      <>
         <Home/>
         <ServicesSection/>
         <MapShowcase/>
         <HowItWorks/>
         <ForPartners/>
         <FAQSection/>
     
         
         {/* <FeaturesSection/>
         <WhyChooseUs/> */}
         {/* <Testimonials/> */}
         
        
      </>
   );
}

export default HomePage;
