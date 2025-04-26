"use client";
import SectionHeading from "@/moduels/Header";
import TopGradientLayers from "@/moduels/TopGradientLayer";
import React, { useState } from "react";

const TABS = [
  { label: "All", value: "all" },
  { label: "Branding & Identity", value: "branding" },
  { label: "Digital Marketing", value: "marketing" },
  { label: "SEO & Analytics", value: "seo" },
  { label: "Web Design", value: "web" },
];

const FEATURES = [
  {
    title: "Dynamic E-Commerce Platform",
    category: "branding",
    image:
      "https://demo.awaikenthemes.com/artistics/wp-content/uploads/2024/11/digital-features-img-1.jpg",
    tag: "Branding & Identity",
  },
  {
    title: "Innovative Identity Design",
    category: "marketing",
    image:
      "https://demo.awaikenthemes.com/artistics/wp-content/uploads/2024/11/digital-features-img-1.jpg",
    tag: "Digital Marketing",
  },
  {
    title: "Dynamic Digital Campaign",
    category: "branding",
    image:
      "https://demo.awaikenthemes.com/artistics/wp-content/uploads/2024/11/digital-features-img-1.jpg",
    tag: "Branding & Identity",
  },
  {
    title: "SEO Optimization Suite",
    category: "seo",
    image:
      "https://demo.awaikenthemes.com/artistics/wp-content/uploads/2024/11/digital-features-img-1.jpg",
    tag: "SEO & Analytics",
  },
  {
    title: "Modern Web Design",
    category: "web",
    image:
      "https://demo.awaikenthemes.com/artistics/wp-content/uploads/2024/11/digital-features-img-1.jpg",
    tag: "Web Design",
  },
  {
    title: "Branding Refresh",
    category: "branding",
    image:
      "https://demo.awaikenthemes.com/artistics/wp-content/uploads/2024/11/digital-features-img-1.jpg",
    tag: "Branding & Identity",
  },
];

const AgencyFeature = () => {
  const [activeTab, setActiveTab] = useState("all");

  const filteredFeatures =
    activeTab === "all"
      ? FEATURES
      : FEATURES.filter((item) => item.category === activeTab);

  return (
    <section className="relative bg-black text-white py-20 overflow-hidden">
      <TopGradientLayers />
      <div className="container mx-auto px-4">
        {/* Header */}
        <div
          className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-10"
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          <div>
            <SectionHeading title="How it Works" />
            <h2 className="text-4xl md:text-5xl font-bold mb-2">
              Our proven <span className="text-primary">process</span> for
              <br className="hidden md:block" /> achieving success
            </h2>
          </div>
          <div className="flex flex-col md:items-end gap-2">
            <p className="text-gray-300 max-w-md">
              Our proven process combines research, strategy, and creativity to
              deliver tailored solutions that drive measurable results.
            </p>
          </div>
        </div>
        {/* Tabs */}
        <div className="flex flex-wrap gap-3 mb-10 items-center mx-auto w-full justify-center">
          {TABS.map((tab) => (
            <button
              key={tab.value}
              onClick={() => setActiveTab(tab.value)}
              className={`px-5 py-2 rounded-lg  transition-colors ${
                activeTab === tab.value
                  ? "bg-[#bff747] text-black"
                  : "bg-zinc-900/20  text-white border border-white/10 hover:bg-[#bff747]/10"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {filteredFeatures.map((feature, idx) => (
            <div
              key={idx}
              className="relative rounded-2xl overflow-hidden bg-zinc-900/60 shadow-lg group "
              data-aos="fade-up"
              data-aos-delay={idx * 100}
              data-aos-duration="800"
            >
              <img
                src={feature.image}
                alt={feature.title}
                className="w-full h-56 object-cover group-hover:transition-all duration-300 hover:scale-[1.03]"
              />
              <span className="absolute top-4 right-4 bg-zinc-700/70 text-white text-xs px-3 py-1 rounded-lg font-semibold z-10">
                {feature.tag}
              </span>
              <div className="p-5">
                <h3 className="text-lg font-bold mb-1">{feature.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AgencyFeature;
