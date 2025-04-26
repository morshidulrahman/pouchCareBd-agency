import React from "react";
import { Zap, Sun, Waves, RotateCcw } from "lucide-react";
import Marquee from "react-fast-marquee";
import SectionHeading from "./Header";
import TopGradientLayers from "./TopGradientLayer";

const partners = [
  { icon: <Zap className="w-6 h-6 text-[#bff747]" />, name: "Logoipsum" },
  { icon: <Sun className="w-6 h-6 text-[#bff747]" />, name: "Logoipsum" },
  { icon: <Waves className="w-6 h-6 text-[#bff747]" />, name: "Logoipsum" },
  { icon: <Waves className="w-6 h-6 text-[#bff747]" />, name: "Logoipsum" },
  { icon: <RotateCcw className="w-6 h-6 text-[#bff747]" />, name: "Logoipsum" },
  { icon: <Zap className="w-6 h-6 text-[#bff747]" />, name: "Logoipsum" },
];

const Partner = () => {
  return (
    <>
      <section className=" flex justify-center items-center py-20 bg-transparent relative">
        <div className="container mx-auto px-4">
          <div
            className="bg-zinc-900/80 rounded-xl border border-white/10 shadow-lg px-8 py-12  w-full flex flex-col md:flex-row gap-8 items-center"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            {/* Left: Title */}
            <div
              className="flex-1 flex flex-col justify-center items-start mb-8 md:mb-0"
              data-aos="fade-right"
              data-aos-delay="100"
            >
              <SectionHeading title="Executive Partners" />
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                100+ <span className="text-[#bff747]">partners</span> &<br />{" "}
                supporters
              </h2>
            </div>
            {/* Right: Partner Logos */}
            <div
              className="flex-1 grid grid-cols-2 sm:grid-cols-3 gap-4"
              data-aos="fade-left"
              data-aos-delay="200"
            >
              {partners.map((partner, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 bg-black/80 rounded-xl px-4 py-3 border border-white/10"
                >
                  {partner.icon}
                  <span className="text-white font-semibold text-base">
                    {partner.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Marquee Section */}
      <div className="w-full py-4 bg-transparent">
        <Marquee gradient={false} speed={50} pauseOnHover>
          <div className="flex gap-8 px-4">
            {partners.concat(partners).map((partner, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2 bg-black/80 rounded-xl px-6 py-3 border border-white/10 min-w-[160px] mx-2"
              >
                {partner.icon}
                <span className="text-white font-semibold text-base">
                  {partner.name}
                </span>
              </div>
            ))}
          </div>
        </Marquee>
      </div>
    </>
  );
};

export default Partner;
