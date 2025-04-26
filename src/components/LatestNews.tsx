import { newsData } from "@/data";
import SectionHeading from "@/moduels/Header";
import LatestNewsCard from "@/moduels/LatestNewsCard";
import TopGradientLayers from "@/moduels/TopGradientLayer";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import React from "react";

const LatestNews = () => {
  return (
    <section className="py-16 bg-black text-white relative">
      <TopGradientLayers />
      <div className="container mx-auto px-4">
        <div
          className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-10"
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          <div>
            <SectionHeading title="LATEST NEWS" />
            <h2 className="text-4xl md:text-5xl font-bold mb-2">
              Our <span className="text-[#bff747]">digital services</span> to
              grow
              <br className="hidden md:block" /> your brand
            </h2>
          </div>
          <div className="flex flex-col  gap-2">
            <p className="text-gray-300 max-w-md mb-2">
              Join our creative community to collaborate, innovate, and thrive
              together. We welcome passionate individuals eager to make.
            </p>
          </div>
        </div>
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:grid-cols-2">
          <LatestNewsCard newsData={newsData} />
        </div>
      </div>
      {/* Optional: Decorative background */}
      <div className="absolute left-0 bottom-0 w-80 h-80 bg-gradient-to-br from-[#bff747]/20 to-transparent rounded-full blur-3xl pointer-events-none -z-10"></div>
    </section>
  );
};

export default LatestNews;
