"use client";
import React from "react";
import CountUp from "react-countup";

const ServiceCounter = () => {
  return (
    <div className="flex-1">
      <h3 className="text-3xl md:text-4xl font-semibold mb-6">
        Expertise that drives <br />
        digital <span className="text-[#bff747]">success</span>
      </h3>
      <div className="flex gap-8 mb-4">
        <div>
          <div className="text-3xl font-bold text-[#bff747]">
            <CountUp
              end={60}
              duration={1.5}
              separator=","
              decimals={0}
              suffix="%"
              prefix="+"
              enableScrollSpy
              scrollSpyDelay={500}
              scrollSpyOnce={false}
            />
          </div>
          <div className="text-gray-300 text-sm mt-1">
            By optimizing your website for search engines.
          </div>
        </div>
        <div>
          <div className="text-3xl font-bold text-[#bff747]">
            <CountUp
              end={30}
              duration={1.5}
              separator=","
              decimals={0}
              suffix="%"
              prefix="+"
              enableScrollSpy
              scrollSpyDelay={500}
              scrollSpyOnce={false}
            />
          </div>
          <div className="text-gray-300 text-sm mt-1">
            Rise in revenue as more visitors convert into paying customers.
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCounter;
