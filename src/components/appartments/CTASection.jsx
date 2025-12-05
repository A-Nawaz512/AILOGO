import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

export default function CTASection() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="py-20 bg-[#f8f6f1]">
      <div className="container mx-auto px-6 text-center">
        {/* Heading */}
       <div className="flex  justify-center items-center mb-4">
            <div className="h-px mt-2 w-12 bg-gradient-to-r from-transparent to-[#B78E3B] mr-4"></div>
            <h2 className="text-2xl md:text-4xl font-bold">
              Ready {""} <span style={{ color: '#B78E3B' }}>to Explore ALLOGO?</span>
            </h2>
            <div className="h-px mt-2 w-12 bg-gradient-to-l from-transparent to-[#B78E3B] ml-4"></div>
          </div>

        <p
          data-aos="fade-up"
          className="text-black max-w-xl mx-auto mb-12"
        >
          Browse thousands of apartments or start earning by listing your own.
        </p>

        {/* CTA Buttons */}
        <div
          data-aos="fade-up"
          data-aos-delay="200"
          className="flex flex-col md:flex-row justify-center gap-6"
        >
          {/* Browse Apartments */}
          <Link
            to="/apartments"
            className="px-5 py-2 rounded-xl bg-[#B78E3B] text-white font-semibold 
                       shadow-md hover:shadow-xl hover:bg-[#B78E3B] transition"
          >
            Browse Apartments
          </Link>

          {/* List Your Apartment */}
          <Link
            to="/list-apartment"
            className="px-5 py-2 rounded-xl border-2 border-[#B78E3B] text-[#B78E3B] font-semibold 
                       bg-white shadow-md hover:shadow-xl hover:bg-[#B78E3B] hover:text-white transition duration-300"
          >
            List Your Apartment
          </Link>
        </div>
      </div>
    </section>
  );
}
