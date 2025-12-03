// src/components/Navbar.jsx
import React, { useState, useEffect, useCallback } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Throttle scroll handler for better performance
  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 20);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // Navigation data for better maintainability
  const navigationItems = [
    {
      label: "Deliveries",
      type: "dropdown",
      items: [
        { label: "Food", href: "#food" },
        { label: "Pharmacy", href: "#pharmacy" },
        { label: "Packages", href: "#packages" },
        { label: "Products", href: "#products" },
      ],
    },
    {
      label: "Zones",
      type: "info",
      items: [
        { label: "Within the city", type: "description" },
        { label: "Between two cities / zones", type: "description" },
        { label: "Multi-stop delivery (A → B → C)", type: "description" },
        { label: "Direct Assignment", href: "#routing" },
        { label: "Chat / Call / WhatsApp", href: "#contact" },
      ],
    },

    { label: "Commission", href: "#commission" },
    { label: "Customer Payment", href: "#payment" },
    { label: "Provider Card Unlock", href: "#provider" },
  ];

  const NavDropdown = ({ label, items, type = "links" }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
      <div
        className="relative group"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <button
          className="flex items-center text-[#86632C] hover:text-yellow-500 transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50 rounded-md px-2 py-1"
          aria-haspopup="true"
          aria-expanded={isHovered}
        >
          {label}
          <svg
            className={`ml-1 w-4 h-4 transition-transform ${
              isHovered ? "rotate-180" : ""
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>

        <div
          className={`absolute left-0 mt-2 w-48 z-50 transition-all duration-200 origin-top transform ${
            isHovered
              ? "opacity-100 scale-100 visible"
              : "opacity-0 scale-95 invisible"
          }`}
          role="menu"
        >
          <div className="bg-gray-800 rounded-lg shadow-xl py-2 ring-1 ring-black ring-opacity-5">
            {items.map((item, idx) =>
              type === "links" ? (
                <a
                  key={idx}
                  href={item.href}
                  className="block px-4 py-2 text-sm text-[#86632C] hover:bg-gray-700 hover:text-yellow-500 transition-colors focus:outline-none focus:bg-gray-700 focus:text-yellow-500"
                  role="menuitem"
                >
                  {item.label}
                </a>
              ) : (
                <span
                  key={idx}
                  className="block px-4 py-1 text-sm text-gray-400"
                  role="menuitem"
                >
                  {item.label}
                </span>
              )
            )}
          </div>
        </div>
      </div>
    );
  };

  const MobileNavItem = ({ item }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    if (item.type === "dropdown") {
      return (
        <div className="border-b border-gray-800 last:border-b-0">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex justify-between items-center w-full px-4 py-3 text-left text-[#86632C] font-medium hover:text-yellow-500 transition-colors focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50 rounded-lg"
            aria-expanded={isExpanded}
          >
            {item.label}
            <svg
              className={`w-5 h-5 transition-transform ${
                isExpanded ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>

          <div
            className={`overflow-hidden transition-all duration-200 ${
              isExpanded ? "max-h-48" : "max-h-0"
            }`}
          >
            <div className="pl-6 py-2 space-y-1">
              {item.items.map((subItem, idx) => (
                <a
                  key={idx}
                  href={subItem.href}
                  className="block px-4 py-2 text-sm text-[#86632C] hover:bg-gray-800 hover:text-yellow-500 rounded-lg transition-colors focus:outline-none focus:bg-gray-800 focus:text-yellow-500"
                  onClick={() => setIsOpen(false)}
                >
                  {subItem.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      );
    }

    if (item.type === "info") {
      return (
        <div className="border-b border-gray-800 last:border-b-0">
          <div className="px-4 py-3 text-[#86632C] font-medium">
            {item.label}
          </div>
          <div className="pl-6 pb-3 space-y-1">
            {item.items.map((subItem, idx) => (
              <span key={idx} className="block px-4 py-1 text-sm text-gray-400">
                {subItem.label}
              </span>
            ))}
          </div>
        </div>
      );
    }

    return (
      <a
        href={item.href}
        className="block px-4 py-3 text-[#86632C] hover:text-yellow-500 hover:bg-gray-800 rounded-lg transition-colors border-b border-gray-800 last:border-b-0 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50"
        onClick={() => setIsOpen(false)}
      >
        {item.label}
      </a>
    );
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-[#110f0f] backdrop-blur-md shadow-lg" : "bg-[#181717]"
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <a
              href="/"
              className="text-2xl font-bold text-[#86632C] hover:text-yellow-500 transition-colors focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50 rounded-md p-1"
              aria-label="FoodDelivery Home"
            >
              FoodDelivery
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4 lg:space-x-6">
            {navigationItems.map((item, idx) =>
              item.type === "dropdown" || item.type === "info" ? (
                <NavDropdown
                  key={idx}
                  label={item.label}
                  items={item.items}
                  type={item.type === "info" ? "info" : "links"}
                />
              ) : (
                <a
                  key={idx}
                  href={item.href}
                  className="text-[#86632C] hover:text-yellow-500 transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50 rounded-md px-2 py-1"
                >
                  {item.label}
                </a>
              )
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-[#86632C] hover:text-yellow-500 transition-colors p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50 cursor-pointer"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0"
          }`}
          aria-hidden={!isOpen}
        >
          <div className="bg-gray-800 border-t border-gray-700 mt-2 py-4 px-2 rounded-lg shadow-xl space-y-1">
            {navigationItems.map((item, idx) => (
              <MobileNavItem key={idx} item={item} />
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
