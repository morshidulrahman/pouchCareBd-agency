"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Facebook,
  Instagram,
  Globe,
  X as CloseIcon,
  Menu as MenuIcon,
  X,
} from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/blogs", label: "Blogs" },
  { href: "/contact-us", label: "Contact Us" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
        ${
          scrolled
            ? "bg-black/90 backdrop-blur-md shadow-lg"
            : "bg-black/30 backdrop-blur-lg"
        }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 py-5">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Link href="/" className="text-white text-xl font-bold">
            PouchCare<span className="text-[#c5ff00]">.</span>
          </Link>
        </div>
        {/* Desktop Nav Links */}
        <ul className="hidden md:flex items-center gap-6 text-white font-medium">
          {navLinks.map((link) => (
            <li key={link.href} className="relative group">
              <Link
                href={link.href}
                className={`transition-colors pb-1 ${
                  pathname === link.href
                    ? "text-[#c5ff00]"
                    : "hover:text-[#c5ff00]"
                }`}
              >
                {link.label}
                {/* Animated underline */}
                <span
                  className={`block h-0.5 bg-[#c5ff00] rounded transition-all duration-300
                    ${
                      pathname === link.href
                        ? "w-full"
                        : "w-0 group-hover:w-full"
                    }`}
                ></span>
              </Link>
              {link.label === "Home" || link.label === "Pages"}
            </li>
          ))}
        </ul>
        {/* Social Icons */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            href="https://www.facebook.com/pouchcaredm"
            className="text-[#c5ff00] hover:text-white transition-colors"
            aria-label="Facebook"
            target="_blank"
          >
            <Facebook size={20} />
          </Link>
          <Link
            href="https://pouchcare.com"
            className="text-[#c5ff00] hover:text-white transition-colors"
            aria-label="Instagram"
            target="_blank"
          >
            <Instagram size={20} />
          </Link>
          <Link
            href="https://x.com/Pouchcareofficial"
            className="text-[#c5ff00] hover:text-white transition-colors"
            aria-label="Website"
            target="_blank"
          >
            <X size={20} />
          </Link>
        </div>
        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setMobileOpen(true)}
          aria-label="Open menu"
        >
          <MenuIcon size={28} />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black/70 backdrop-blur-sm z-40 md:hidden transition-opacity duration-300 ${
          mobileOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMobileOpen(false)}
      />

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed top-0 left-0 w-full bg-black/95 backdrop-blur-md z-50 md:hidden transition-transform duration-500 ease-in-out transform ${
          mobileOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="container mx-auto px-4 py-5">
          <div className="flex items-center justify-between mb-8">
            {/* Logo in Mobile Menu */}
            <div className="flex items-center gap-2">
              <span className="text-white text-xl font-bold">
                PouchCare<span className="text-[#c5ff00]">.</span>
              </span>
            </div>
            {/* Close Button */}
            <button
              className="text-white"
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
            >
              <CloseIcon size={24} />
            </button>
          </div>

          {/* Mobile Nav Links */}
          <ul className="flex flex-col gap-6 text-white font-medium mb-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`text-xl transition-colors block py-2 ${
                    pathname === link.href
                      ? "text-[#c5ff00]"
                      : "hover:text-[#c5ff00]"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Social Icons in Mobile Menu */}
          <div className="flex items-center gap-6 mt-8 pb-8">
            <a
              href="#"
              className="text-[#c5ff00] hover:text-white transition-colors"
              aria-label="Facebook"
            >
              <Facebook size={24} />
            </a>
            <a
              href="#"
              className="text-[#c5ff00] hover:text-white transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={24} />
            </a>
            <a
              href="#"
              className="text-[#c5ff00] hover:text-white transition-colors"
              aria-label="Website"
            >
              <Globe size={24} />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
