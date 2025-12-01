import React from "react";
import Home from "../components/homePageComponents/Home";
import ServicesSection from "../components/homePageComponents/ServiceSection";
import FeaturesSection from "../components/homePageComponents/FeatureSection";
import WhyChooseUs from "../components/homePageComponents/WhyChooseUs";
import Testimonials from "../components/homePageComponents/testimonials";


function HomePage() {
   return (
      <>
         <Home/>
         <ServicesSection/>
         <FeaturesSection/>
         <WhyChooseUs/>
         <Testimonials/>
         
        
      </>
   );
}

export default HomePage;
