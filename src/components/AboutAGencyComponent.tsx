import Image from "next/image";
import React from "react";
import Button from "./Button";
import SectionHeading from "@/moduels/Header";
import TopGradientLayers from "@/moduels/TopGradientLayer";

const cardData = [
  {
    title: "Results–Driven Optimization",
    desc: "We focus on delivering measurable results by optimizing website to achieve higher rankings, increased traffic.",
    colSpan: "md:col-span-2",
  },
  {
    title: "Tailored Marketing Solutions",
    desc: "We focus on delivering measurable results by optimizing website to achieve higher rankings, increased traffic.",
    colSpan: "md:col-span-2",
  },
  {
    title: "Keyword Research Excellence",
    desc: "We focus on delivering measurable results by optimizing website to achieve higher rankings, increased traffic.",
    colSpan: "md:col-span-2",
  },
];

const AboutAGencyComponent = () => {
  return (
    <section className="bg-black text-white py-24 relative overflow-hidden">
      <TopGradientLayers />
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between lg:flex-row flex-col gap-6">
          <div className="lg:w-1/2">
            <SectionHeading title="Why Choose Us" />
            <h3 className="text-4xl lg:text-5xl font-bold mb-6">
              Expertise for <span className="text-primary">your digital</span>
              <br />
              growth journey
            </h3>
          </div>
          <div className="lg:w-1/2">
            <p className="text-gray-300 mb-4">
              Our digital services empower brands with innovative strategies and
              solutions for sustainable growth and engagement.
            </p>
            <Button text="More About" href="/about" />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row items-center gap-6 lg:mt-0 mt-6">
          <div
            className="lg:w-1/2 flex flex-col gap-8"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <div className="grid md:grid-cols-2 gap-6">
              {cardData.map((card, idx) => (
                <div
                  key={idx}
                  className={`group relative bg-zinc-900/30 backdrop-blur-lg rounded-2xl p-6 border border-white/10 flex flex-col gap-2 shadow-lg ${card.colSpan} transition-all duration-300 hover:bg-zinc-800/40`}
                  data-aos="fade-up"
                  data-aos-delay={idx * 200}
                  data-aos-duration="800"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#bff747]/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10 flex items-center gap-3 mb-2">
                    <h3 className="text-lg font-semibold">{card.title}</h3>
                  </div>
                  <p className="relative z-10 text-gray-300 text-sm">
                    {card.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
          {/* Left Images */}
          <div className="lg:w-1/2 flex flex-col items-center relative">
            {/* You can add images here */}
            <div className=" gap-4 overflow-hidden rounded-2xl w-full">
              <Image
                alt="seo team"
                src="https://demo.awaikenthemes.com/artistics/wp-content/uploads/2024/11/why-choose-image.jpg"
                width={600}
                height={600}
                className=" w-full h-full"
                data-aos="fade-left"
                data-aos-duration="1300"
              ></Image>
            </div>
          </div>
          {/* Right Content */}
        </div>
      </div>
    </section>
  );
};

export default AboutAGencyComponent;
