import React from "react";
import Image from "next/image";
import { Gem, Eye, Target } from "lucide-react";
import TopGradientLayers from "./TopGradientLayer";
import SectionHeading from "./Header";

const cards = [
  {
    title: "Our Mission",
    desc: "Delivering transformative digital solutions that elevate brands connections.",
    icon: <Target className="w-7 h-7 text-[#bff747]" />,
    img: "https://demo.awaikenthemes.com/artistics/wp-content/uploads/2024/11/our-mission-img.jpg",
  },
  {
    title: "Our Vision",
    desc: "Shaping the future through innovative and impactful digital experiences.",
    icon: <Eye className="w-7 h-7 text-[#bff747]" />,
    img: "https://demo.awaikenthemes.com/artistics/wp-content/uploads/2024/11/our-vision-img.jpg",
  },
  {
    title: "Our Value",
    desc: "Integrity, creativity, innovation, collaboration, excellence, results.",
    icon: <Gem className="w-7 h-7 text-[#bff747]" />,
    img: "https://demo.awaikenthemes.com/artistics/wp-content/uploads/2024/11/our-value-img.jpg",
  },
];

const OurApproach = () => {
  return (
    <section className="w-full py-16 bg-black  flex items-center justify-center relative">
      <TopGradientLayers />
      <div className="container mx-auto px-4">
        <div
          className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-10"
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          <div>
            <SectionHeading title="Our Approach" />
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, idx) => (
            <div
              key={card.title}
              className={`group relative bg-zinc-900/30 backdrop-blur-lg rounded-2xl p-6 border border-white/10 flex flex-col gap-2 shadow-lg  transition-all duration-300 hover:bg-zinc-800/40`}
            >
              <div className="relative w-full h-56 overflow-hidden">
                <Image
                  src={card.img}
                  alt={card.title}
                  fill
                  className="object-cover rounded-2xl group-hover:scale-110 duration-300 transition-all"
                />
                <span className="absolute bottom-3 left-3 bg-black/70 rounded-full p-2">
                  {card.icon}
                </span>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-white text-xl font-semibold mb-2">
                  {card.title}
                </h3>
                <p className="text-gray-300">{card.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurApproach;
