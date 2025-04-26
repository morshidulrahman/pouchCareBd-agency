import React from "react";
import Marquee from "react-fast-marquee";

const services = [
  "Analytics & Reporting",
  "Website Design",
  "Digital Marketing",
  "Strategy Consulting",
  "Custom Branding",
  "SEO Optimization",
];

const BannerMarque = () => {
  return (
    <div className="w-full bg-[#bff747] py-4 overflow-hidden">
      <Marquee gradient={false} speed={60}>
        <div className="pl-4 flex items-center gap-8 text-black font-semibold text-xl">
          {services.map((service, idx) => (
            <div key={service} className="flex gap-1 text-2xl font-bold">
              <p className="text-4xl font-bold block mt-0.5">*</p>
              <p className="block">{service}</p>
            </div>
          ))}
        </div>
      </Marquee>
    </div>
  );
};

export default BannerMarque;
