// RentalsHero.jsx
import React, { useState, useEffect } from "react";

const RentalsHero = () => {
   const images = ["/rides.jpg", "/scooter.jpg", "/vehical-rental.webp"];

   const [currentImageIndex, setCurrentImageIndex] = useState(0);

   useEffect(() => {
      const interval = setInterval(() => {
         setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 5000); // 5 seconds

      return () => clearInterval(interval);
   }, [images.length]);

   return (
      <section className="relative overflow-hidden text-white min-h-[500px] lg:min-h-[90vh]">
         {/* Background Images with fade transition */}
         <div className="absolute inset-0 z-0">
            {images.map((image, index) => (
               <div
                  key={image}
                  className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${
                     index === currentImageIndex ? "opacity-100" : "opacity-0"
                  }`}
                  style={{
                     backgroundImage: `url('${image}')`,
                     zIndex: images.length - index,
                  }}
               >
                  {/* Dark overlay for better text readability */}
                  <div className="absolute inset-0 bg-black/60"></div>
                  {/* Gradient overlay */}
               </div>
            ))}
         </div>

         {/* Image indicator dots */}
         <div className="absolute bottom-6 left-1/2 z-30 flex -translate-x-1/2 gap-2">
            {images.map((_, index) => (
               <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`h-2 w-2 rounded-full transition-all duration-300 ${
                     index === currentImageIndex
                        ? "w-8 bg-[#f5c451]"
                        : "bg-white/50 hover:bg-white/80"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
               />
            ))}
         </div>

        
         <div className="relative z-20 mx-auto flex items-center justify-center max-w-6xl flex-col gap-12 px-6 py-16 lg:flex-row lg:items-center lg:py-20 xl:px-0">
            <div className="flex flex-col items-center text-center space-y-8">
               <h1 className="text-4xl font-semibold leading-tight text-[#B78E3B] sm:text-5xl lg:text-6xl">
                  Rent a car or scooter
                 <br />
                     right from the 3D map.
          
               </h1>

               <p className="max-w-xl text-sm text-gray-300 sm:text-base">
                  Find vehicles nearby, book for hours or days, and hit the
                  road. Owners and rental agencies can list their fleet, set
                  availability, and manage bookings — all in one place.
               </p>

               {/* CTA buttons */}
               <div className="flex flex-wrap gap-4 pt-2">
                  <button className="rounded-full bg-[#B78E3B] px-6 py-3 text-medium font-semibold text-black shadow-lg shadow-[#f5c451]/40 transition-all duration-300 hover:translate-y-0.5 hover:bg-[#a18842] hover:shadow-xl hover:shadow-[#f5c451]/60">
                     Rent a vehicle
                  </button>
                  <button className="rounded-full border-2 border-[#B78E3B]/60 bg-transparent px-6 py-3 text-medium font-semibold text-[#B78E3B] transition-all duration-300 hover:border-[#f5c451] hover:translate-y-0.5 hover:bg-[#B78E3B] hover:text-white hover:shadow-lg hover:shadow-[#f5c451]/20">
                     List your vehicle
                  </button>
               </div>
            </div>
         </div>
      </section>
   );
};

export default RentalsHero;
