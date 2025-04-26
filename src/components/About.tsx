import Image from "next/image";
import React from "react";
import Button from "./Button";
import SectionHeading from "@/moduels/Header";

const cardData = [
  {
    icon: (
      <svg
        className="h-6 w-6 text-[#bff747]"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
        />
      </svg>
    ),
    title: "Results–Driven Optimization",
    desc: "We focus on delivering measurable results by optimizing website to achieve higher rankings, increased traffic.",
    colSpan: "md:col-span-2",
  },
  {
    icon: (
      <svg
        className="h-6 w-6 text-[#bff747]"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
    title: "Tailored Marketing Solutions",
    desc: "We focus on delivering measurable results by optimizing website to achieve higher rankings, increased traffic.",
    colSpan: "md:col-span-2",
  },
  {
    icon: (
      <svg
        className="h-6 w-6 text-[#bff747]"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <circle
          cx="12"
          cy="12"
          r="10"
          stroke="#bff747"
          strokeWidth="2"
          fill="none"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M8 12l2 2 4-4"
        />
      </svg>
    ),
    title: "Keyword Research Excellence",
    desc: "We focus on delivering measurable results by optimizing website to achieve higher rankings, increased traffic.",
    colSpan: "md:col-span-2",
  },
];

const About = () => {
  return (
    <section className="bg-black text-white py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between lg:flex-row flex-col">
          <div className="lg:w-1/2">
            <SectionHeading title="Seo" />
            <h3 className="text-4xl lg:text-5xl font-bold mb-6">
              Driving <span className="text-primary">growth</span> through
              <br />
              smarter SEO
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
        <div className="flex flex-col lg:flex-row items-center gap-6">
          {/* Left Images */}
          <div className="lg:w-1/2 hidden lg:flex flex-col items-center relative">
            {/* You can add images here */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <Image
                alt="seo team"
                src="https://demo.awaikenthemes.com/artistics/seo/wp-content/uploads/2024/12/demo-2-about-img-1.jpg"
                width={400}
                height={400}
                className="rounded-t-full rounded-b-full h-[400px] w-[290px]"
                data-aos="fade-right"
                data-aos-duration="1300"
              ></Image>
              <div
                className="flex flex-col gap-4 "
                data-aos="fade-right"
                data-aos-duration="1000"
              >
                <Image
                  alt="staricon"
                  src="/demo-2-about-bg-star.svg"
                  className="w-24 h-24"
                  width={100}
                  height={100}
                ></Image>
                <Image
                  alt="seo team"
                  src="https://demo.awaikenthemes.com/artistics/seo/wp-content/uploads/2024/12/demo-2-about-img-1.jpg"
                  width={400}
                  height={400}
                  className="rounded-t-full rounded-b-full w-[290px] h-[400px]"
                ></Image>
              </div>
            </div>
          </div>
          {/* Right Content */}
          <div
            className="lg:w-1/2 flex flex-col gap-8"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            <div>{/* Additional content if needed */}</div>
            {/* Glassy Cards */}
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
                    {card.icon}
                    <h3 className="text-lg font-semibold">{card.title}</h3>
                  </div>
                  <p className="relative z-10 text-gray-300 text-sm">
                    {card.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
