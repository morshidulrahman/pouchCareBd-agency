import SectionHeading from "@/moduels/Header";
import React from "react";
import Image from "next/image";
import TopGradientLayers from "@/moduels/TopGradientLayer";
import { Facebook, Instagram, Linkedin } from "lucide-react";

const teamMembers = [
  {
    name: "John Doe",
    role: "Lead Designer",
    image:
      "https://demo.awaikenthemes.com/artistics/wp-content/uploads/2024/11/team-1.jpg",
    socials: [
      { icon: <Facebook className="w-5 h-5" />, href: "#" },
      { icon: <Instagram className="w-5 h-5" />, href: "#" },
      { icon: <Linkedin className="w-5 h-5" />, href: "#" },
    ],
    aos: "fade-up",
    aosDelay: 0,
  },
  {
    name: "Jane Smith",
    role: "Project Manager",
    image:
      "https://demo.awaikenthemes.com/artistics/wp-content/uploads/2024/11/team-2.jpg",
    socials: [
      { icon: <Facebook className="w-5 h-5" />, href: "#" },
      { icon: <Instagram className="w-5 h-5" />, href: "#" },
      { icon: <Linkedin className="w-5 h-5" />, href: "#" },
    ],
    aos: "fade-up",
    aosDelay: 100,
  },
  {
    name: "Alex Lee",
    role: "Developer",
    image:
      "https://demo.awaikenthemes.com/artistics/wp-content/uploads/2024/11/team-3.jpg",
    socials: [
      { icon: <Facebook className="w-5 h-5" />, href: "#" },
      { icon: <Instagram className="w-5 h-5" />, href: "#" },
      { icon: <Linkedin className="w-5 h-5" />, href: "#" },
    ],
    aos: "fade-up",
    aosDelay: 200,
  },
  {
    name: "Sara Kim",
    role: "Marketing",
    image:
      "https://demo.awaikenthemes.com/artistics/wp-content/uploads/2024/11/team-4.jpg",
    socials: [
      { icon: <Facebook className="w-5 h-5" />, href: "#" },
      { icon: <Instagram className="w-5 h-5" />, href: "#" },
      { icon: <Linkedin className="w-5 h-5" />, href: "#" },
    ],
    aos: "fade-up",
    aosDelay: 300,
  },
];

const OurTeams = () => {
  return (
    <section className="relative py-20 overflow-hidden bg-black">
      <TopGradientLayers />
      <div className="container mx-auto px-4">
        {/* Header */}
        <div
          className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-10"
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          <div>
            <SectionHeading title="OurTeams" />
            <h2 className="text-4xl md:text-5xl font-bold mb-2">
              Innovative<span className="text-primary">features</span> for
              <br className="hidden md:block" /> your digital success
            </h2>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-gray-300 max-w-md">
              Our proven process combines research, strategy, and creativity to
              deliver tailored solutions that drive measurable results.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
          {teamMembers.map((member, idx) => (
            <div
              key={member.name}
              className="h-[400px] relative overflow-hidden group rounded-2xl bg-zinc-900/60 border border-white/10"
              data-aos={member.aos}
              data-aos-delay={member.aosDelay}
              data-aos-duration="900"
            >
              <Image
                src={member.image}
                alt={member.name}
                width={400}
                height={500}
                className="w-full h-full duration-300 transition-all group-hover:scale-110 object-cover rounded-2xl"
              />
              {/* Social Icons on Hover */}
              <div className="absolute inset-0 flex flex-col justify-end items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-black/70 via-black/30 to-transparent p-4">
                <div className="flex gap-3 mb-4">
                  {member.socials.map((social, i) => (
                    <a
                      key={i}
                      href={social.href}
                      className="bg-[#bff747] text-black rounded-full p-2 hover:bg-white transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
                <div className="text-center text-white">
                  <div className="font-bold text-lg">{member.name}</div>
                  <div className="text-sm text-gray-300">{member.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurTeams;
