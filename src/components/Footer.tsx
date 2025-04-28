import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, X, Facebook, Instagram, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-black/90 backdrop-blur-lg border-t border-white/10">
      <div className="container mx-auto px-4 py-8 md:py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & Contact */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2 mb-2">
              {/* <Image src="/logo.png" alt="Artistic" width={40} height={40} /> */}
              <span className="text-[#bff747] text-2xl font-bold">
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

          {/* Quick Link */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {[
                "Home",
                "About Us",
                "Services",
                "Blog",
                "Portfolio",
                "Pricing",
              ].map((link) => (
                <li key={link}>
                  <Link
                    href={`/${link.replace(/\s+/g, "").toLowerCase()}`}
                    className="text-gray-400 hover:text-[#bff747] transition-colors flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 bg-[#bff747] rounded-full"></span>
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              {[
                "Contact us",
                "Terms & Conditions",
                "Privacy Policy",
                "Career",
                "Help & FAQ",
              ].map((link) => (
                <li key={link}>
                  <Link
                    href={`/${link.replace(/\s+/g, "").toLowerCase()}`}
                    className="text-gray-400 hover:text-[#bff747] transition-colors flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 bg-[#bff747] rounded-full"></span>
                    {link}
                  </Link>
                </li>
              ))}
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
                className="rounded-md px-5 py-2 bg-[#bff747] text-black font-semibold hover:bg-[#d4ff6b] transition-colors whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
            <div className="flex gap-4 mt-4">
              <Link
                target="_blank"
                href="https://x.com/Pouchcareofficial"
                className="w-8 h-8 rounded-full border border-[#bff747] flex items-center justify-center hover:bg-[#bff747] hover:text-black transition-colors"
              >
                <X className="w-4 h-4" />
              </Link>
              <Link
                target="_blank"
                href="https://www.facebook.com/pouchcaredm"
                className="w-8 h-8 rounded-full border border-[#bff747] flex items-center justify-center hover:bg-[#bff747] hover:text-black transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </Link>
              <Link
                target="_blank"
                href="https://pouchcare.com"
                className="w-8 h-8 rounded-full border border-[#bff747] flex items-center justify-center hover:bg-[#bff747] hover:text-black transition-colors"
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
