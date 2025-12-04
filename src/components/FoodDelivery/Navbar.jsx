import React, { useState, useEffect, useCallback } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 20);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const navigationItems = [
    { label: "Deliveries", href: "#services" },
    { label: "Zones", href: "#zones" },
    { label: "Commission", href: "#commission" },
    { label: "Customer Payment", href: "#payment" },
    { label: "Communication", href: "#communication" },
    { label: "ProviderPaymentUnlock", href: "#provider-payment-unlock" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ease-in-out ${
        scrolled ? "bg-[#0D0D0D] backdrop-blur-md shadow-lg" : "bg-[#0D0D0D]"
      }`}
      role="navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <a
            href="/"
            className="text-2xl font-bold text-[white] hover:text-[#d3a458] transition-colors duration-300 rounded-md p-1"
          >
            FoodDelivery
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navigationItems.map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                className="
        relative font-semibold px-3 py-1
        text-[#B78E3B] transition-colors duration-300
        no-underline

        /* subtle hover glow using after */
        after:absolute after:inset-0 after:rounded-md
        after:bg-gradient-to-r after:from-[#46352022] after:to-[#3c361d22]
        after:opacity-0 after:transition-opacity after:duration-300 after:blur-sm
        hover:after:opacity-100

        /* optional text highlight */
        hover:text-white
      "
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-[#B78E3B] hover:text-[#d3a458] p-2 rounded-md transition-colors duration-300"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            isOpen ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="bg-[#0D0D0D] border-t border-[#B78E3B]/40 py-4 px-2 rounded-lg space-y-2">
            {navigationItems.map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                className="relative block text-[#B78E3B] hover:text-[#d3a458] px-4 py-2 rounded-md transition-colors duration-300
                           after:absolute after:left-0 after:-bottom-0.5 after:w-0 after:h-[2px] after:bg-[#B78E3B]
                           after:transition-all after:duration-300 after:ease-in-out hover:after:w-full"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
