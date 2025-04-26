import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, X, Facebook, Instagram } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-black/90 backdrop-blur-lg border-t border-white/10">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-10">
          {/* Logo & Contact */}
          <div className="flex-1 min-w-[220px] flex flex-col gap-4">
            <div className="flex items-center gap-2 mb-2">
              {/* <Image src="/logo.png" alt="Artistic" width={40} height={40} /> */}
              <span className="text-[#bff747] text-2xl font-bold">
                PourchCare.
              </span>
            </div>
            <div className="flex items-center gap-3 text-[#bff747]">
              <Phone className="w-5 h-5" />
              <span className="text-white font-medium text-lg">
                (309) 8855–314
              </span>
            </div>
            <div className="flex items-center gap-3 text-[#bff747]">
              <Mail className="w-5 h-5" />
              <span className="text-white font-medium text-lg">
                info@domainname.com
              </span>
            </div>
          </div>
          {/* Quick Link */}
          <div className="flex-1 min-w-[150px]">
            <h3 className="text-white text-lg font-semibold mb-4">
              Quick Link
            </h3>
            <ul className="space-y-2">
              {["Home", "About Us", "Services", "Blog"].map((link) => (
                <li key={link}>
                  <Link
                    href={`#${link.replace(/\s+/g, "").toLowerCase()}`}
                    className="text-gray-400 hover:text-[#bff747] transition-colors"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* Support */}
          <div className="flex-1 min-w-[150px]">
            <h3 className="text-white text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              {["Contact us", "Terms & Conditions", "Career", "Help"].map(
                (link) => (
                  <li key={link}>
                    <Link
                      href={`#${link.replace(/\s+/g, "").toLowerCase()}`}
                      className="text-gray-400 hover:text-[#bff747] transition-colors"
                    >
                      {link}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>
          {/* Newsletter */}
          <div className="flex-1 min-w-[220px]">
            <h3 className="text-white text-lg font-semibold mb-4">
              Subscribe Our Newsletter
            </h3>
            <form className="flex mb-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="rounded-l-md px-4 py-2 bg-transparent border border-white/20 text-white focus:outline-none focus:border-[#bff747] w-full"
              />
              <button
                type="submit"
                className="rounded-r-md px-5 py-2 bg-[#bff747] text-black font-semibold hover:bg-[#d4ff6b] transition-colors"
              >
                Subscribe
              </button>
            </form>
            <div className="flex gap-4 mt-2">
              <Link
                href="#"
                className="w-8 h-8 rounded-full border border-[#bff747] flex items-center justify-center hover:bg-[#bff747] hover:text-black transition-colors"
              >
                <X className="w-4 h-4" />
              </Link>
              <Link
                href="#"
                className="w-8 h-8 rounded-full border border-[#bff747] flex items-center justify-center hover:bg-[#bff747] hover:text-black transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </Link>
              <Link
                href="#"
                className="w-8 h-8 rounded-full border border-[#bff747] flex items-center justify-center hover:bg-[#bff747] hover:text-black transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
        <hr className="my-8 border-white/10" />
        <div className="flex flex-col md:flex-row justify-center items-center gap-4">
          <p className="text-gray-400 text-sm text-center">
            Copyright © {currentYear} Pouch Care.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
