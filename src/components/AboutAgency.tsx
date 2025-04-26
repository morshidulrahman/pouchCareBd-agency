import React from "react";
import Image from "next/image";

import SectionHeading from "@/moduels/Header";
import { features } from "@/data";
import BottomLayer from "@/moduels/BottomLayer";

// Use Lucide icons for each feature

const AboutAgency = () => {
  return (
    <section
      className="relative bg-black text-white py-20 overflow-hidden"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <div className="container mx-auto px-4 flex flex-col lg:flex-row gap-10 items-center">
        {/* Left Side */}
        <div
          className="flex-1 flex flex-col gap-8"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <SectionHeading title="About Agency" />
          <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Crafting <span className="text-[#bff747]">unique digital</span>
            <br />
            experiences that elevate <br />
            your brand
          </h2>
          <button className="flex items-center gap-2 bg-[#222] text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-[#bff747] hover:text-black transition-colors w-fit">
            Contact Us
            <span className="inline-block bg-[#bff747] rounded-full p-1 ml-2">
              <svg width="18" height="18" fill="none" viewBox="0 0 24 24">
                <path
                  d="M5 12h14M13 6l6 6-6 6"
                  stroke="#222"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </button>
          <div className="mt-8 hidden md:block">
            <Image
              src="https://demo.awaikenthemes.com/artistics/seo/wp-content/uploads/2024/12/section-bg-shape-2.png"
              alt="3D Illustration"
              width={320}
              height={320}
              className="object-contain"
              data-aos="zoom-in"
              data-aos-delay="200"
              data-aos-duration="1000"
            />
          </div>
        </div>
        {/* Right Side Timeline */}
        <div
          className="flex-1 flex flex-col gap-8"
          data-aos="fade-left"
          data-aos-duration="1000"
        >
          <ol className="relative border-s border-[#bff747]/30">
            {features.map((item, idx) => (
              <li
                key={idx}
                className="mb-10 ms-4"
                data-aos="fade-up"
                data-aos-delay={idx * 200}
                data-aos-duration="800"
              >
                <span className="absolute flex items-center justify-center w-6 h-6 bg-[#bff747] rounded-full -start-3 ring-8 ring-black">
                  {item.icon}
                </span>
                <time className="pl-2 mb-1 text-sm font-normal leading-none text-[#bff747]/80">
                  {item.date}
                </time>
                <h3 className="text-lg font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mb-4 text-base font-normal text-gray-400">
                  {item.desc}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
      <BottomLayer />
    </section>
  );
};

export default AboutAgency;
