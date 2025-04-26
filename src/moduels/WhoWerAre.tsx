"use client";
import React from "react";
import { UserPlus, Clock, Users, ThumbsUp } from "lucide-react";
import Image from "next/image";
import SectionHeading from "./Header";
import TopGradientLayers from "./TopGradientLayer";
import CountUp from "react-countup";
import Partner from "./Partner";

const stats = [
  {
    icon: <UserPlus className="w-7 h-7 text-[#bff747]" />,
    value: 35,
    suffix: "k+",
    label: "Happy Customer Around the Word",
    gradient: "from-[#bff747]/20 to-transparent",
    duration: 1.2,
  },
  {
    icon: <Clock className="w-7 h-7 text-[#bff747]" />,
    value: 120,
    suffix: "+",
    label: "best client support award achieved",
    gradient: "",
    duration: 1.4,
  },
  {
    icon: <Users className="w-7 h-7 text-[#bff747]" />,
    value: 250,
    suffix: "+",
    label: "trusted best partners and sponsors",
    gradient: "",
    duration: 1.6,
  },
  {
    icon: <ThumbsUp className="w-7 h-7 text-[#bff747]" />,
    value: 5,
    suffix: "k+",
    label: "active users using our best services",
    gradient: "from-[#bff747]/20 to-transparent",
    duration: 1.8,
  },
];

const WhoWerAre = () => {
  return (
    <section className="relative py-20 bg-black text-white overflow-hidden">
      <TopGradientLayers />
      <div className="container mx-auto px-4 flex flex-col md:flex-row gap-12 items-center">
        {/* Left Content */}
        <div
          className="flex-1 max-w-xl"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <SectionHeading title="Who we Are" />
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Experts in <span className="text-[#bff747]">digital</span> brand
            innovation
          </h2>
          <p className="text-gray-300 mb-8">
            We specialize in transforming brands through cutting-edge digital
            strategies, blending creativity with technology to drive growth,
            enhance engagement, and deliver memorable experiences.
          </p>
          {/* Video Card & Reviews */}
          <div className="flex flex-col sm:flex-row items-center gap-6">
            {/* Video Card */}
            <div
              className="relative rounded-2xl overflow-hidden w-[220px] h-[120px]"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <Image
                src="/clients/satisfy-client-img-1.jpg"
                alt="Video"
                fill
                className="object-cover"
              />
              <button className="absolute inset-0 flex items-center justify-center">
                <span className="w-12 h-12 rounded-full bg-[#bff747] flex items-center justify-center shadow-lg">
                  <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="12" fill="#bff747" />
                    <polygon points="10,8 18,12 10,16" fill="#000" />
                  </svg>
                </span>
              </button>
            </div>
            {/* Reviews */}
            <div
              className="flex flex-col gap-2"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div className="flex items-center gap-2">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    width="18"
                    height="18"
                    fill="#bff747"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
                <span className="text-gray-300 text-sm ml-2">
                  (40+ Reviews)
                </span>
              </div>
              <div className="flex items-center mt-1">
                {[
                  "/clients/satisfy-client-img-1.jpg",
                  "/clients/satisfy-client-img-2.jpg",
                  "/clients/satisfy-client-img-3.jpg",
                  "/clients/satisfy-client-img-4.jpg",
                ].map((img, idx) => (
                  <Image
                    key={img}
                    src={img}
                    alt={`client${idx}`}
                    width={28}
                    height={28}
                    className="rounded-full border-2 border-black -ml-2 first:ml-0"
                  />
                ))}
              </div>
              <a
                href="/contact"
                className="text-[#bff747] font-semibold flex items-center gap-1 mt-2 hover:underline"
              >
                Contact Now
                <svg width="18" height="18" fill="none" viewBox="0 0 24 24">
                  <path
                    d="M5 12h14M13 6l6 6-6 6"
                    stroke="#bff747"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
        {/* Right Stats */}
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-lg">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className={`relative rounded-2xl bg-zinc-900/80 border border-white/10 p-8 flex flex-col gap-3 shadow-lg ${
                stat.gradient ? "bg-gradient-to-br " + stat.gradient : ""
              }`}
              data-aos="fade-up"
              data-aos-delay={200 + idx * 150}
            >
              <div>{stat.icon}</div>
              <div className="text-3xl font-bold text-[#bff747] flex items-end">
                <CountUp
                  end={stat.value}
                  duration={stat.duration}
                  enableScrollSpy={true}
                  scrollSpyOnce={true}
                />
                <span className="ml-1">{stat.suffix}</span>
              </div>
              <div className="text-gray-200 text-base">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
      {/* Optional: Decorative background */}
      <Partner />
    </section>
  );
};

export default WhoWerAre;
