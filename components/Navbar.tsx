"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const navItems = [
    { name: "ABOUT", href: "#about", icon: "ℹ️" },
    { name: "FEATURES", href: "#features", icon: "⚡" },
    { name: "ROADMAP", href: "#roadmap", icon: "🛣️" },
    // { name: "FAQ", href: "#faq", icon: "❓" },
  ];

  const handleMobileMenuClick = (href: string) => {
    setIsMobileMenuOpen(false);
    // Smooth scroll to section
    setTimeout(() => {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 300);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-cyber-dark/95 backdrop-blur-sm border-b border-cyber-primary/30"
            : "bg-cyber-dark/80 backdrop-blur-sm"
        }`}
      >
        <div className="container mx-auto px-4 2xl:px-0 py-3 max-w-screen-xl">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center">
              <Image
                src="/Logo.jpg"
                alt="lumio"
                width={100}
                height={100}
                className="w-[50px] h-auto"
              />
              {/* Logo */}
              <div className="text-xl font-bold font-mono z-50 relative ml-">
                <span className="cyber-text-glow mr-1">LUMIO</span>
                <span className="text-cyber-secondary">AI</span>
              </div>
            </Link>

            {/* Desktop Navigation Items */}
            <div className="hidden lg:flex items-center space-x-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="cyber-button text-xs px-4 py-2 hover:scale-105 transition-transform"
                >
                  {item.name}
                </Link>
              ))}

              {/* Launch IDE Button - Special Style */}
              <Link
                href="#lumio"
                className="cyber-button-secondary text-xs px-6 py-2 ml-2 hover:scale-105 transition-transform"
              >
                🛠️ LAUNCH Lumio
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden cyber-button text-xs px-4 py-2 transition-all duration-300 z-50 relative ${
                isMobileMenuOpen ? "bg-cyber-primary text-cyber-dark" : ""
              }`}
            >
              <span className="flex items-center gap-2">
                {isMobileMenuOpen ? "❌" : "☰"}
                {isMobileMenuOpen ? "CLOSE" : "MENU"}
              </span>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${
          isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
        <div
          className={`absolute top-16 left-0 right-0 transform transition-all duration-300 ${
            isMobileMenuOpen
              ? "translate-y-0 opacity-100"
              : "-translate-y-full opacity-0"
          }`}
        >
          <div className="bg-cyber-dark/95 backdrop-blur-sm border-b border-cyber-primary/30 shadow-lg">
            <div className="container mx-auto px-4 py-6">
              <div className="flex flex-col space-y-4">
                {navItems.map((item, index) => (
                  <button
                    key={item.name}
                    onClick={() => handleMobileMenuClick(item.href)}
                    className={`cyber-button text-left text-sm px-4 py-3 w-full hover:scale-105 transition-all duration-300 flex items-center gap-3`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <span className="text-lg">{item.icon}</span>
                    <span>{item.name}</span>
                  </button>
                ))}

                {/* Launch IDE Button - Mobile */}
                <button
                  onClick={() => handleMobileMenuClick("#lumio")}
                  className="cyber-button-secondary text-sm px-4 py-3 w-full hover:scale-105 transition-all duration-300 flex items-center gap-3 mt-4"
                >
                  <span className="text-lg">🛠️</span>
                  <span>LAUNCH Lumio</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
