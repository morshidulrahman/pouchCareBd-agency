import SectionHeading from "@/moduels/Header";
import React from "react";
import { Twitter, Linkedin, Instagram } from "lucide-react";

const socials = [
  {
    icon: <Twitter className="w-8 h-8" />,
    label: "Follow Us On Twitter",
    username: "@pourchcare_official",
    href: "https://twitter.com/pourchcare_official",
    iconBg: "bg-[#bff747]",
    iconText: "X",
  },
  {
    icon: <Linkedin className="w-8 h-8" />,
    label: "Join Us On Linked In",
    username: "user.pourchcare_official",
    href: "https://linkedin.com/in/user.pourchcare_official",
    iconBg: "bg-[#bff747]",
    iconText: "in",
  },
  {
    icon: <Instagram className="w-8 h-8" />,
    label: "Follow On Instagram",
    username: "@pourchcare_insta_official",
    href: "https://instagram.com/pourchcare_insta_official",
    iconBg: "bg-[#bff747]",
    iconText: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24">
        <rect
          x="2"
          y="2"
          width="20"
          height="20"
          rx="6"
          stroke="#000"
          strokeWidth="2"
        />
        <circle cx="12" cy="12" r="5" stroke="#000" strokeWidth="2" />
        <circle cx="17" cy="7" r="1.5" fill="#000" />
      </svg>
    ),
  },
];

const JoinAgency = () => {
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
            <SectionHeading title="Join Agency" />
            <h2 className="text-4xl md:text-5xl font-bold mb-2">
              Join our <span className="text-primary">agency</span> of creative
              innovators
            </h2>
          </div>
          <div className="flex flex-col md:items-end gap-2">
            <p className="text-gray-300 max-w-md">
              Join our creative community to collaborate, innovate, and thrive
              together We welcome passionate individuals eager to make.
            </p>
          </div>
        </div>
        {/* Social Media Cards */}
        <div className="flex flex-col md:flex-row gap-8 justify-center items-center mt-16">
          {socials.map((item, idx) => (
            <a
              key={idx}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-black border border-white/10 rounded-full px-8 py-6 min-w-[340px] max-w-full shadow-lg transition-all duration-300 hover:border-[#bff747] group"
              data-aos="fade-up"
              data-aos-delay={idx * 200}
              data-aos-duration="800"
            >
              <span className="flex items-center justify-center w-14 h-14 rounded-full bg-[#bff747] text-black text-2xl font-bold shrink-0">
                {item.iconText}
              </span>
              <div className="flex-1">
                <div className="font-semibold text-lg text-white">
                  {item.label}
                </div>
                <div className="text-gray-400 text-sm">{item.username}</div>
              </div>
              <span className="ml-4 flex items-center justify-center w-8 h-8 rounded-full border border-white/10 group-hover:border-[#bff747] transition-colors">
                <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
                  <path
                    d="M5 12h14M13 6l6 6-6 6"
                    stroke="#fff"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JoinAgency;
