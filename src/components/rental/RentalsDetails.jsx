// RentalsHeroLight.jsx
import React from "react";

const RentalsHeroLight = () => {
   return (
      <section className="relative overflow-hidden bg-white">
         <div className="relative mx-auto max-w-6xl px-6 py-16 lg:py-20 xl:px-0">
            {/* Heading Section */}
            <div className="text-center mb-12">
               <h1 className="text-3xl font-bold text-gray-900 sm:text-5xl lg:text-5xl">
                  Rent a Vehicle
                  <span className="block text-[#B78E3B] mt-2">
                     Simple & Hassle-Free
                  </span>
               </h1>
               <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
                  Find and book cars or scooters near you with just a few
                  clicks. Perfect for short trips or long journeys.
               </p>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
               {[
                  { number: "100+", label: "Vehicles Available" },
                  { number: "24/7", label: "Support" },
                  { number: "5%", label: "Commission" },
                  { number: "4.8★", label: "Rating" },
               ].map((stat, index) => (
                  <div
                     key={index}
                     className="text-center p-6 bg-white border-2 border-gray-100 rounded-xl shadow-sm hover:shadow-lg hover:border-[#B78E3B] transition-all duration-300 hover:-translate-y-1"
                  >
                     <div className="text-3xl font-bold text-[#B78E3B]">
                        {stat.number}
                     </div>
                     <div className="mt-2 text-gray-600">{stat.label}</div>
                  </div>
               ))}
            </div>

            {/* How It Works */}
            <div className="mb-12 border-2 border-[#B78E3B] p-10 rounded-2xl shadow-[#eee0c5] shadow-2xl">
               <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                  How It Works
               </h2>
               <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {[
                     {
                        step: "1",
                        title: "Search",
                        desc: "Find vehicles near you on the map",
                     },
                     {
                        step: "2",
                        title: "Book",
                        desc: "Select dates and confirm booking",
                     },
                     {
                        step: "3",
                        title: "Drive",
                        desc: "Pick up and start your journey",
                     },
                  ].map((item, index) => (
                     <div key={index} className="text-center p-6">
                        <div className="w-16 h-16 bg-[#B78E3B] text-white text-2xl font-bold rounded-full flex items-center justify-center mx-auto mb-4">
                           {item.step}
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                           {item.title}
                        </h3>
                        <p className="text-gray-600">{item.desc}</p>
                     </div>
                  ))}
               </div>
               <div className="text-center space-y-4">
                  <div className="flex flex-wrap justify-center gap-4">
                     <button className="px-8 py-3 bg-[#B78E3B] text-white font-semibold rounded-lg shadow hover:bg-[#A37C32] hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                        Book a Vehicle
                     </button>
                     <button className="px-8 py-3 border-2 border-[#B78E3B] text-[#B78E3B] hover:shadow-lg font-semibold rounded-lg hover:bg-[#B78E3B] hover:text-white transition-all duration-300 hover:-translate-y-1">
                        List Your Vehicle
                     </button>
                  </div>
                  <p className="text-gray-500 text-sm mt-6">
                     Join thousands of satisfied customers and vehicle owners
                  </p>
               </div>
            </div>
         </div>
      </section>
   );
};

export default RentalsHeroLight;
