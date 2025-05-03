import React from "react";
import Link from "next/link";
import { Phone, Mail, X, Facebook, Instagram, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="relative overflow-hidden bg-black/90 backdrop-blur-lg border-t border-white/10">
      {/* Decorative Layered Background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0"
      >
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[120vw] h-[60vw] bg-gradient-to-tr from-[#bff747]/30 via-[#1a1a1a]/60 to-[#bff747]/10 rounded-full blur-3xl opacity-80"></div>
        <svg
          className="absolute bottom-0 right-0 w-1/2 h-1/2 opacity-30"
          viewBox="0 0 400 400"
          fill="none"
        >
          <circle cx="200" cy="200" r="200" fill="#bff747" fillOpacity="0.08" />
        </svg>
      </div>
      <div className="relative z-10 container mx-auto px-4 py-8 md:py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & Contact */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2 mb-2">
              {/* <Image src="/logo.png" alt="Artistic" width={40} height={40} /> */}
              <span className="text-[#bff747] text-2xl font-bold drop-shadow-lg">
                PourchCare.
              </span>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              Elevating your digital presence with innovative solutions and
              expert strategies.
            </p>
            <div className="flex items-center gap-3 text-[#bff747]">
              <Phone className="w-5 h-5" />
              <span className="text-white font-medium text-base">
                (309) 8855–314
              </span>
            </div>
            <div className="flex items-center gap-3 text-[#bff747]">
              <Mail className="w-5 h-5" />
              <span className="text-white font-medium text-base">
                Contact@pouchcare.com
              </span>
            </div>
            <div className="flex items-center gap-3 text-[#bff747]">
              <MapPin className="w-5 h-5" />
              <span className="text-white font-medium text-base">
                New Bally Road, Phulpur
              </span>
            </div>
          </div>

          <div>
            <h3 className="text-white text-lg font-semibold mb-4">
              About Our Agency
            </h3>
            <p className="text-gray-400 text-sm mb-3">
              PouchCare is a leading digital agency specializing in web
              development, app solutions, and digital marketing. We empower
              businesses to grow online with innovative strategies and
              cutting-edge technology.
            </p>
            <ul className="text-gray-400 text-sm space-y-2">
              <li>
                <span className="text-[#bff747] font-semibold">Founded:</span>{" "}
                2021
              </li>
              <li>
                <span className="text-[#bff747] font-semibold">Clients:</span>{" "}
                200+ worldwide
              </li>
              <li>
                <span className="text-[#bff747] font-semibold">Support:</span>{" "}
                24/7 Customer Care
              </li>
            </ul>
          </div>

          {/* Quick Link */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {["Home", "About", "Services", "Blogs", "Contact-Us"].map(
                (link) => (
                  <li key={link}>
                    <Link
                      href={`/${link.replace(/\s+/g, "").toLowerCase()}`}
                      className="text-gray-400 hover:text-[#bff747] transition-colors flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 bg-[#bff747] rounded-full"></span>
                      {link}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">
              Subscribe Our Newsletter
            </h3>
            <p className="text-gray-400 text-sm mb-4">
              Stay updated with our latest news and special offers.
            </p>
            <form className="flex flex-col sm:flex-row gap-2 mb-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="rounded-md px-4 py-2 bg-transparent border border-white/20 text-white focus:outline-none focus:border-[#bff747] w-full"
              />
              <button
                type="submit"
                className="rounded-md px-5 py-2 bg-[#bff747] text-black font-semibold hover:bg-[#d4ff6b] transition-colors whitespace-nowrap shadow"
              >
                Subscribe
              </button>
            </form>
            <div className="flex gap-4 mt-4">
              <Link
                target="_blank"
                href="https://x.com/Pouchcareofficial"
                className="w-8 h-8 rounded-full border border-[#bff747] flex items-center justify-center hover:bg-[#bff747] hover:text-black transition-colors shadow"
              >
                <X className="w-4 h-4" />
              </Link>
              <Link
                target="_blank"
                href="https://www.facebook.com/pouchcaredm"
                className="w-8 h-8 rounded-full border border-[#bff747] flex items-center justify-center hover:bg-[#bff747] hover:text-black transition-colors shadow"
              >
                <Facebook className="w-4 h-4" />
              </Link>
              <Link
                target="_blank"
                href="https://pouchcare.com"
                className="w-8 h-8 rounded-full border border-[#bff747] flex items-center justify-center hover:bg-[#bff747] hover:text-black transition-colors shadow"
              >
                <Instagram className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        <hr className="my-6 md:my-8 border-white/10" />

        {/* Copyright */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            Copyright © {currentYear} Pouch Care. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link
              href="/privacy"
              className="text-gray-400 hover:text-[#bff747] text-sm"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-gray-400 hover:text-[#bff747] text-sm"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
