"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ServiceCard from "@/moduels/ServiceCard";
import { servicesData } from "@/data";
import SectionHeading from "@/moduels/Header";
import Button from "./Button";
import Image from "next/image";

const ServiceComponents = () => {
  return (
    <main>
      <section
        className="bg-black text-white py-24 relative overflow-hidden"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        {/* Background Layer Effect */}
        <div className="absolute inset-0 bg-gradient bg-[radial-gradient(circle_at_top_left,rgba(37,211,102,0.15),transparent_50%)]"></div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Header */}
          <div className="grid grid-cols-2 gap-6">
            <div>
              <div data-aos="fade-right" data-aos-duration="1000">
                <SectionHeading title="Services" />

                <h2 className="service-heading text-4xl lg:text-5xl font-bold mb-6">
                  Comprehensive SEO
                  <br />
                  <span className="text-[#c5ff00]">services</span> to elevate
                  Your
                  <br />
                  online presence
                </h2>
                <Button text="View All Services" href="/services" />
              </div>
              <div
                className="absolute -right-[0vw] top-[40vh] w-[80vw] h-full hidden md:block"
                data-aos="fade-left"
                data-aos-duration="1200"
              >
                <div className="relative w-40 h-40">
                  <div className="absolute inset-0 bg-[#c5ff00] opacity-20 blur-[100px] rounded-full"></div>
                  <Image
                    src="https://demo.awaikenthemes.com/artistics/seo/wp-content/uploads/2024/12/section-bg-shape-2.png"
                    alt="Background Shape"
                    fill
                    className="object-contain relative z-10"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {servicesData.map((service, index) => (
                <div
                  key={index}
                  data-aos="zoom-in-up"
                  data-aos-delay={index * 150}
                  data-aos-duration="800"
                >
                  <ServiceCard {...service} />
                </div>
              ))}
            </div>
          </div>

          {/* Services Grid */}
        </div>
      </section>
    </main>
  );
};

export default ServiceComponents;
