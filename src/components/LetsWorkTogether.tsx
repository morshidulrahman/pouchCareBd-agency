import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";

const LetsWorkTogether = () => {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center bg-black overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 z-0">
        <div className="absolute left-0 top-0 w-full h-full bg-gradient-to-br from-[#bff747]/10 via-transparent to-transparent pointer-events-none" />
      </div>
      {/* Left Decorative Image */}
      <div className="absolute left-0 bottom-0 z-10 hidden md:block">
        <img
          src="https://demo.awaikenthemes.com/artistics/wp-content/uploads/2024/11/work-together-bg.png"
          alt="Decorative Globe"
          className="w-64 opacity-80"
        />
      </div>
      {/* Content */}
      <div className="relative z-20 flex flex-col items-center w-full">
        <div className="uppercase text-white text-sm font-semibold tracking-widest mb-4 text-center">
          LET&apos;S COLLABORATE
        </div>
        <div className="relative flex flex-col items-center">
          <h1 className="text-white text-[2.5rem] md:text-[7rem] font-bold leading-[150px] text-center">
            LET&apos;S WORK
            <br />
            TOGETHER
          </h1>
          {/* Neon Button */}
          <Link
            href="/contact"
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-30"
            style={{ marginTop: "1.5rem" }}
          >
            <div className="flex flex-col items-center justify-center w-32 h-32 rounded-full bg-[#bff747] text-black font-bold text-lg shadow-lg  hover:bg-zinc-700 group duration-300 transition-all">
              <ArrowRight className="w-6 h-6 -rotate-45 group-hover:rotate-0 duration-300 transition-all group-hover:text-white" />
              <span className="text-sm duration-300 transition-all group-hover:text-white">
                Get In Touch
              </span>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LetsWorkTogether;
