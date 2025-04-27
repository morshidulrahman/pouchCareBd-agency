import React from "react";
import { CircleEllipsis, Layers, Database } from "lucide-react";
import SectionHeading from "@/moduels/Header";
import TopGradientLayers from "@/moduels/TopGradientLayer";

const steps = [
  {
    title: "Discovery Phase",
    desc: "Initial consultation to understand your brand, goals, and target audience. Conducting research and analysis of market trends.",
    icon: <CircleEllipsis className="w-8 h-8 text-black" />,
    step: "01",
    iconBg: "bg-[#bff747]",
  },
  {
    title: "Implementation",
    desc: "Initial consultation to understand your brand, goals, and target audience. Conducting research and analysis of market trends.",
    icon: <Layers className="w-8 h-8 text-black" />,
    step: "02",
    iconBg: "bg-[#bff747]",
  },
  {
    title: "Collaboration",
    desc: "Initial consultation to understand your brand, goals, and target audience. Conducting research and analysis of market trends.",
    icon: <Database className="w-8 h-8 text-black" />,
    step: "03",
    iconBg: "bg-[#bff747]",
  },
];

const AgencyHowItWorks = () => {
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
        {/* Steps Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="custom-glass-card hover:!-translate-y-2.5 !transition-all !duration-300"
              data-aos="fade-up"
              data-aos-delay={idx * 200}
              data-aos-duration="800"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-white">
                    {step.title}
                  </h3>
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
                <p className="text-gray-300 text-sm mb-8">{step.desc}</p>
              </div>
              <div className="flex items-end justify-between">
                <div>
                  <span className="block text-base text-white font-semibold mb-1">
                    STEP
                  </span>
                  <span className="text-2xl font-bold text-primary">
                    {step.step}
                  </span>
                </div>
                <div
                  className={`rounded-xl w-28 h-20 transition-all duration-300 hover:bg-white flex items-center justify-center bg-primary absolute bottom-0 right-0 rounded-tr-none rounded-bl-none`}
                >
                  {step.icon}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AgencyHowItWorks;
