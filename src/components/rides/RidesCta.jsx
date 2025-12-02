import React from "react";

const RidesCTA = () => {
  return (
    <section className="relative bg-gradient-to-b from-white to-amber-50/20 py-20 overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSIjZmVmM2M3IiBmaWxsLW9wYWNpdHk9IjAuMiIgZmlsbC1ydWxlPSJldmVub2RkIj48Y2lyY2xlIGN4PSIzIiBjeT0iMyIgcj0iMyIvPjxjaXJjbGUgY3g9IjEzIiBjeT0iMTMiIHI9IjMiLz48L2c+PC9zdmc+')] opacity-20"></div>
      
      <div className="relative mx-auto max-w-5xl px-4 text-center">
        
        {/* Heading */}
        <h2
          className="mx-auto max-w-3xl bg-gradient-to-r from-[#F9D777] via-[#D8A635] to-[#B8871B]
          bg-clip-text text-3xl py-4 font-bold text-transparent sm:text-4xl lg:text-5xl
          drop-shadow-[0_2px_10px_rgba(251,191,36,0.3)]"
        >
          Ready to move with AILOGO?
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-sm text-gray-600 sm:text-base relative">
          <span className="relative z-10 bg-gradient-to-r from-transparent via-white/50 to-transparent px-4 py-2">
            Book a ride in seconds or start earning today as a verified driver.
            Fast, reliable and available in every wilaya across Algeria.
          </span>
        </p>

        {/* CTA Buttons */}
        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
          
          {/* Primary CTA */}
          <a
            href="#book"
            className="group relative inline-flex items-center justify-center rounded-full 
            bg-gradient-to-r from-[#F9D777] via-[#D8A635] to-[#B8871B]
            px-10 py-3.5 text-sm font-semibold text-slate-900 
            shadow-xl shadow-[#B8871B]/50 transition-all duration-300 
            hover:scale-[1.04] hover:shadow-2xl hover:shadow-[#B8871B]/60
            before:absolute before:inset-0 before:rounded-full before:bg-gradient-to-r before:from-white/20 before:to-transparent before:opacity-0 before:transition-opacity before:duration-300 hover:before:opacity-100"
          >
            <span className="relative flex items-center">
              <span className="absolute -left-2 h-4 w-4 rounded-full bg-white/40"></span>
              Book a Ride
              <span className="ml-2 text-base transition-all duration-300 group-hover:translate-x-2 group-hover:scale-110">→</span>
            </span>
          </a>

          {/* Secondary CTA */}
          <a
            href="#driver"
            className="group relative inline-flex items-center justify-center rounded-full 
            border-2 border-[#D8A635]/80 bg-gradient-to-b from-white to-amber-50/30 px-10 py-3.5 
            text-sm font-semibold text-[#B8871B]
            shadow-lg shadow-amber-200/50 transition-all duration-300 
            hover:-translate-y-0.5 hover:border-[#D8A635] hover:bg-gradient-to-b hover:from-white hover:to-amber-50/50
            hover:shadow-xl hover:shadow-amber-300/50"
          >
            <span className="relative">
              Become a Driver
              <span className="absolute -bottom-1 left-1/2 h-[2px] w-0 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#D8A635] to-transparent transition-all duration-300 group-hover:w-4/5"></span>
            </span>
          </a>
        </div>

        {/* Footer Note */}
        <div className="mt-6 relative">
          <p className="relative z-10 text-xs text-gray-500 sm:text-sm inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-amber-400 animate-pulse"></span>
            No subscriptions, no hidden fees — simple and transparent rides for everyone.
          </p>
          {/* Decorative elements */}
          <div className="absolute -left-4 top-1/2 h-8 w-8 rounded-full bg-gradient-to-r from-amber-200/40 to-yellow-200/30 blur-sm"></div>
          <div className="absolute -right-4 top-1/2 h-8 w-8 rounded-full bg-gradient-to-r from-amber-200/40 to-yellow-200/30 blur-sm"></div>
        </div>
      </div>
    </section>
  );
};

export default RidesCTA;