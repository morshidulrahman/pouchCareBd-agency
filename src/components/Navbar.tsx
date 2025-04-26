'use client'
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Facebook,
  Instagram,
  Globe,
  X as CloseIcon,
  Menu as MenuIcon,
} from 'lucide-react';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/services', label: 'Services' },
  { href: '/pages', label: 'Pages' },
  { href: '/contact', label: 'Contact Us' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
        ${scrolled
          ? 'bg-black/90 backdrop-blur-md shadow-lg'
          : 'bg-black/30 backdrop-blur-lg'
        }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 py-5">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <span className="text-white text-xl font-bold">PouchCare<span className="text-[#c5ff00]">.</span></span>
        </div>
        {/* Desktop Nav Links */}
        <ul className="hidden md:flex items-center gap-6 text-white font-medium">
          {navLinks.map((link) => (
            <li key={link.href} className="relative group">
              <Link
                href={link.href}
                className={`transition-colors pb-1 ${
                  pathname === link.href
                    ? 'text-[#c5ff00]'
                    : 'hover:text-[#c5ff00]'
                }`}
              >
                {link.label}
                {/* Animated underline */}
                <span
                  className={`block h-0.5 bg-[#c5ff00] rounded transition-all duration-300
                    ${pathname === link.href
                      ? 'w-full'
                      : 'w-0 group-hover:w-full'
                    }`}
                ></span>
              </Link>
              {(link.label === 'Home' || link.label === 'Pages')}
            </li>
          ))}
        </ul>
        {/* Social Icons */}
        <div className="hidden md:flex items-center gap-4">
          <a href="#" className="text-[#c5ff00] hover:text-white transition-colors" aria-label="Facebook">
            <Facebook size={20} />
          </a>
          <a href="#" className="text-[#c5ff00] hover:text-white transition-colors" aria-label="Instagram">
            <Instagram size={20} />
          </a>
          <a href="#" className="text-[#c5ff00] hover:text-white transition-colors" aria-label="Website">
            <Globe size={20} />
          </a>
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
        className={`fixed inset-0 z-40 bg-black/70 backdrop-blur-sm transition-opacity duration-300 ${
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setMobileOpen(false)}
      />
      {/* Mobile Menu Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-black/95 backdrop-blur-lg z-50 transform transition-transform duration-300
          ${mobileOpen ? 'translate-x-0' : 'translate-x-full'}
        `}
      >
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
          <span className="text-white text-xl font-bold">PouchCare<span className="text-[#c5ff00]">.</span></span>
          <button
            className="text-white"
            onClick={() => setMobileOpen(false)}
            aria-label="Close menu"
          >
            <CloseIcon size={28} />
          </button>
        </div>
        <ul className="flex flex-col gap-4 px-6 py-8 text-white font-medium">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`block py-2 px-2 rounded transition-colors ${
                  pathname === link.href
                    ? 'text-[#c5ff00] bg-white/10'
                    : 'hover:text-[#c5ff00]'
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-6 px-6 mt-auto pb-8">
          <a href="#" className="text-[#c5ff00] hover:text-white transition-colors" aria-label="Facebook">
            <Facebook size={22} />
          </a>
          <a href="#" className="text-[#c5ff00] hover:text-white transition-colors" aria-label="Instagram">
            <Instagram size={22} />
          </a>
          <a href="#" className="text-[#c5ff00] hover:text-white transition-colors" aria-label="Website">
            <Globe size={22} />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;