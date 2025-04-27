import SectionHeading from "@/moduels/Header";
import React from "react";
import { Twitter, Linkedin, Instagram, ArrowRight } from "lucide-react";
import TopGradientLayers from "@/moduels/TopGradientLayer";

const socials = [
  {
    icon: <Twitter className="w-5 h-5 sm:w-6 sm:h-6" />,
    label: "Follow Us On Twitter",
    username: "@pourchcare_official",
    href: "https://twitter.com/pourchcare_official",
    iconBg: "bg-[#bff747]",
  },
  {
    icon: <Linkedin className="w-5 h-5 sm:w-6 sm:h-6" />,
    label: "Join Us On Linked In",
    username: "user.pourchcare_official",
    href: "https://linkedin.com/in/user.pourchcare_official",
    iconBg: "bg-[#bff747]",
  },
  {
    icon: <Instagram className="w-5 h-5 sm:w-6 sm:h-6" />,
    label: "Follow On Instagram",
    username: "@pourchcare_insta_official",
    href: "https://instagram.com/pourchcare_insta_official",
    iconBg: "bg-[#bff747]",
  },
];

const JoinAgency = () => {
  return (
    <section className="relative bg-black text-white py-12 md:py-20 overflow-hidden">
      <TopGradientLayers />
      <div className="container mx-auto px-4">
        {/* Header */}
        <div
          className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 md:gap-6 mb-6 md:mb-10"
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          <div>
            <SectionHeading title="Join Agency" />
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2">
              Join our <span className="text-[#bff747]">agency</span> of creative
              innovators
            </h2>
          </div>
          <div className="flex flex-col md:items-end gap-2">
            <p className="text-gray-300 max-w-md text-sm sm:text-base">
              Join our creative community to collaborate, innovate, and thrive
              together We welcome passionate individuals eager to make.
            </p>
          </div>
        </div>
        {/* Social Media Cards */}
        <div className="flex flex-col md:flex-row gap-4 md:gap-8 justify-center items-center mt-10 md:mt-16">
          {socials.map((item, idx) => (
            <a
              key={idx}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 md:gap-4 bg-black border border-white/10 rounded-full px-4 sm:px-6 md:px-8 py-3 sm:py-4 md:py-6 w-full sm:min-w-[300px] md:min-w-[340px] max-w-full shadow-lg transition-all duration-300 hover:border-[#bff747] group"
              data-aos="fade-up"
              data-aos-delay={idx * 200}
              data-aos-duration="800"
            >
              <span className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-[#bff747] text-black shrink-0">
                {item.icon}
              </span>
              <div className="flex-1 min-w-0">
                <div className="font-semibold text-base sm:text-lg text-white truncate">
                  {item.label}
                </div>
                <div className="text-gray-400 text-xs sm:text-sm truncate">
                  {item.username}
                </div>
              </div>
              <span className="ml-2 md:ml-4 flex items-center justify-center w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-full border border-white/10 group-hover:border-[#bff747] transition-colors">
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JoinAgency;
