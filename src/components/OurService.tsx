import React from "react";
import { Gem, LineChart, Users } from "lucide-react";
import SectionHeading from "@/moduels/Header";
import Button from "./Button";
import Image from "next/image";
import CountUp from "react-countup";
import ServiceCounter from "@/moduels/ServiceCounter";
import BottomLayer from "@/moduels/BottomLayer";

const services = [
  {
    icon: <Gem className="w-8 h-8 text-[#bff747]" />,
    title: "Branding And Identity",
    desc: "Developing a compelling brand identity through strategy, visuals, and to build strong customer connections.",
  },
  {
    icon: <LineChart className="w-8 h-8 text-[#bff747]" />,
    title: "Digital Marketing",
    desc: "Developing a compelling brand identity through strategy, visuals, and to build strong customer connections.",
  },
  {
    icon: <Users className="w-8 h-8 text-[#bff747]" />,
    title: "Creative Content Production",
    desc: "Developing a compelling brand identity through strategy, visuals, and to build strong customer connections.",
  },
];

const OurService = () => {
  return (
    <section className="relative bg-black text-white py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div
          className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-10"
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          <div>
            <SectionHeading title="Our Services" />
            <h2 className="text-4xl md:text-5xl font-bold mb-2">
              Our <span className="text-[#bff747]">digital services</span> to
              grow
              <br className="hidden md:block" /> your brand
            </h2>
          </div>
          <div className="flex flex-col md:items-end gap-2">
            <p className="text-gray-300 max-w-md">
              Join our creative community to collaborate, innovate, and thrive
              together. We welcome passionate individuals eager to make.
            </p>
            <Button text="All Services" href="/services" />
          </div>
        </div>
        {/* Services Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="custom-glass-card"
              data-aos="fade-up"
              data-aos-delay={idx * 200}
              data-aos-duration="800"
            >
              <div className="flex items-center justify-between mb-4">
                {service.icon}
                <span className="bg-[#bff747]/10 rounded-full p-2">
                  <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
                    <path
                      d="M5 12h14M13 6l6 6-6 6"
                      stroke="#bff747"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">
                {service.title}
              </h3>
              <p className="text-gray-400 text-sm">{service.desc}</p>
            </div>
          ))}
        </div>
        {/* CTA */}
        <div
          className="text-center text-gray-300"
          data-aos="fade-up"
          data-aos-delay={services.length * 200}
          data-aos-duration="800"
        >
          Let&apos;s make something great work together.{" "}
          <a href="#" className="text-[#bff747] font-semibold hover:underline">
            Get Free Quote
          </a>
        </div>

        <div
          className="p-2 mt-16 rounded-2xl max-w-5xl mx-auto"
          style={{
            background: "linear-gradient(90deg, #bff747 0%, #bff747 100%)",
          }}
          data-aos="fade-up"
          data-aos-delay={services.length * 200 + 200}
          data-aos-duration="900"
        >
          <div className="bg-black rounded-2xl p-10 flex flex-col md:flex-row gap-10 items-center">
            {/* Left: Heading and Stats */}
            <ServiceCounter />
            {/* Right: Features */}
            <div className="flex-1 grid grid-cols-1 gap-6">
              <div className="flex items-start gap-3">
                <Image
                  src="/icon-sub-heading.svg"
                  alt="staricon"
                  width={16}
                  height={16}
                  className="w-4 h-4 mt-1"
                ></Image>
                <div>
                  <span className="font-semibold text-white">
                    Social Media Management:{" "}
                  </span>
                  <span className="text-gray-300 text-sm">
                    Our social media management services focus on building and
                    enhancing your brand&apos;s online presence. We create
                    engaging content, manage your social media accounts, and
                    analyze performance.
                  </span>
                </div>
              </div>
              <div className="flex items-star gap-3">
                <Image
                  src="/icon-sub-heading.svg"
                  alt="staricon"
                  width={16}
                  height={16}
                  className="w-4 h-4 mt-1"
                ></Image>
                <div>
                  <span className="font-semibold text-white">
                    E-commerce Solutions:{" "}
                  </span>
                  <span className="text-gray-300 text-sm">
                    Our e-commerce solutions are designed to create seamless
                    online shopping experiences. From user-friendly website
                    design to secure payment processing and inventory
                    management.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Expertise Section */}

      {/* Optional: Decorative background */}
      <BottomLayer />
    </section>
  );
};

export default OurService;
