import React from "react";
import Image from "next/image";
import { SeoServiceData } from "@/data";
import SectionHeading from "@/moduels/Header";

const HowItWorks = () => {
  return (
    <section
      className="bg-black text-white py-24 relative overflow-hidden"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      {/* Background Layer Effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(37,211,102,0.15),transparent_50%)]"></div>

      {/* Background Shape */}
      <div
        className="absolute -right-[0vw] top-[20vh] w-[80vw] h-full hidden md:block"
        data-aos="fade-left"
        data-aos-duration="1200"
      >
        <div className="relative w-40 h-40">
          <div className="absolute inset-0 bg-[#c5ff00] opacity-20 blur-[100px] rounded-full"></div>
          <Image
            src="https://demo.awaikenthemes.com/artistics/seo/wp-content/uploads/2024/12/demo-2-section-bg-shape-7.png"
            alt="Background Shape"
            fill
            className="object-contain relative z-10"
          />
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="mb-16" data-aos="fade-down" data-aos-duration="1000">
          <SectionHeading title="How it Works" />
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8">
            <h2 className="text-4xl lg:text-5xl font-bold">
              Step by Step <span className="text-[#c5ff00]">guide</span> to
              <br />
              SEO success
            </h2>
            <p className="text-gray-400 max-w-xl">
              Our process simplifies SEO into clear, actionable steps keyword
              research and content optimization to link building and performance
              tracking, we ensure your website achieves sustainable.
            </p>
          </div>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SeoServiceData.map((step, index) => (
            <div
              key={step.number}
              className="relative group"
              data-aos="zoom-in-up"
              data-aos-delay={index * 150}
              data-aos-duration="800"
            >
              <div className="absolute -top-4 -left-4 w-8 h-8 rounded-full bg-[#c5ff00]/40 group-hover:scale-[1.2] transition-transform duration-300"></div>
              <div className="bg-zinc-900/30 backdrop-blur-sm rounded-2xl p-8 border border-white/5 group-hover:border-[#c5ff00]/20 transition-colors">
                <div className="text-[64px] font-bold text-[#c5ff00] opacity-90 mb-4 font-mono">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                <p className="text-gray-400">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
