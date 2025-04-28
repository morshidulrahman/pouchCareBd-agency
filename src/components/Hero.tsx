import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";
import TypeWritters from "./TypeWritters";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-black overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-screen overflow-hidden z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute min-w-full min-h-full object-cover"
        >
          <source
            src="https://demo.awaikenthemes.com/assets/videos/artistic-seo-video.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 h-screen flex flex-col justify-center">
        <div className="max-w-4xl" data-aos="fade-up">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6">
            Elevate your business
            <br className="hidden sm:block" />
            with our tailored <br />
            <TypeWritters />
          </h1>
          <p
            className="text-gray-300 text-base md:text-lg mb-6 md:mb-8 max-w-2xl"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Elevate your brand's online presence with our expert SEO solutions.
            We help you attract the right audience, improve search rankings, and
            drive sustainable growth for your business.
          </p>
          <div
            className="flex flex-col sm:flex-row gap-4"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <button className="bg-transparent border border-white/20 cursor-pointer text-white px-5 py-2.5 sm:px-6 sm:py-3 rounded-full flex items-center justify-center sm:justify-start gap-2 hover:bg-zinc-700 transition-colors group">
              <span>Get Started</span>
              <span className="bg-[#c5ff00] rounded-full p-1 group-hover:bg-[#b3e600] transition-colors">
                <ArrowRight className="h-4 w-4 text-black" />
              </span>
            </button>
            <Link href="/about">
              <button className="w-full bg-transparent cursor-pointer border border-white/20 text-white px-5 py-2.5 sm:px-6 sm:py-3 rounded-full flex items-center justify-center sm:justify-start gap-2 hover:bg-white/10 transition-colors">
                <span>Explore Our Services</span>
                <span className="bg-[#c5ff00] rounded-full p-1 group-hover:bg-[#b3e600] transition-colors">
                  <ArrowRight className="h-4 w-4 text-black" />
                </span>
              </button>
            </Link>
          </div>
        </div>

        {/* Floating Badge */}
        <div
          className=" absolute bottom-10 right-4 sm:bottom-16 sm:right-12 md:bottom-24 md:right-24 animate-spin-slow"
          data-aos="zoom-in"
          data-aos-delay="400"
        >
          <div className="md:visible flex md:relative w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32">
            <svg className="w-full h-full" viewBox="0 0 100 100">
              <defs>
                <path
                  id="circle"
                  d="M50,50 m-40,0 a40,40 0 1,1 80,0 a40,40 0 1,1 -80,0"
                />
              </defs>
              <text className="text-[7px] sm:text-[8px] fill-white">
                <textPath href="#circle" startOffset="0">
                  Digital Marketing • SEO Experts • Web Design Solutions • Since
                  2024•
                </textPath>
              </text>
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-[#c5ff00] rounded-full w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex items-center justify-center">
                <ArrowRight className="text-black w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 -rotate-45" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
