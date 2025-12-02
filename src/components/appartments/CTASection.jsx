import React from "react";
import { Link } from "react-router-dom";

export default function CTASection() {
  return (
    <section className="py-20 bg-[#f8f6f1]">
      <div className="container mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-[#9A7A3E] mb-6">
          Ready to Explore ALLOGO?
        </h2>

        <p className="text-gray-700 max-w-xl mx-auto mb-12">
          Browse thousands of apartments or start earning by listing your own.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col md:flex-row justify-center gap-6">
          {/* Browse Apartments */}
          <Link
            to="/apartments"
            className="px-5 py-2 rounded-xl bg-[#9A7A3E] text-white font-semibold 
                       shadow-md hover:shadow-xl hover:bg-[#8b6d38] transition"
          >
            Browse Apartments
          </Link>

          {/* List Your Apartment */}
          <Link
            to="/list-apartment"
            className="px-5 py-2 rounded-xl border-2 border-[#9A7A3E] text-[#9A7A3E] font-semibold 
                       bg-white shadow-md hover:shadow-xl hover:bg-[#9A7A3E] hover:text-white transition"
          >
            List Your Apartment
          </Link>
        </div>
      </div>

    </section>
  );
}