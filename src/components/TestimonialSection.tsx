import Image from "next/image";

import "swiper/css";
import "swiper/css/navigation";
import Marquee from "react-fast-marquee";
import { TestimonialData } from "@/data";
import { Star } from "lucide-react";
import TestimonialFeature from "@/moduels/TestimonialFeature";
import SectionHeading from "@/moduels/Header";
import Button from "./Button";

export default function TestimonialSection() {
  return (
    <section className="py-16 bg-black text-white relative">
      <div className="container mx-auto px-4">
        <div
          className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-10"
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          <div>
            <SectionHeading title="TESTIMONIALS" />
            <h2 className="text-4xl md:text-5xl font-bold mb-2">
              Our <span className="text-[#bff747]">digital services</span> to
              grow
              <br className="hidden md:block" /> your brand
            </h2>
          </div>
          <div className="flex flex-col  gap-2">
            <p className="text-gray-300 max-w-md mb-2">
              Join our creative community to collaborate, innovate, and thrive
              together. We welcome passionate individuals eager to make.
            </p>
            <Button text="All Services" href="/services" />
          </div>
        </div>
        {/* Top Section */}
        <div className="flex flex-col md:flex-row gap-8 mb-12">
          {/* Review Score Card */}
          <div className="flex-1 bg-zinc-900/60 rounded-2xl p-8 flex flex-col items-center justify-center border border-white/10 min-w-[300px] max-w-[350px] mx-auto md:mx-0">
            <div className="text-6xl font-bold mb-2">4.9</div>
            <div className="flex items-center mb-2">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={20}
                  className="text-[#bff747] fill-[#bff747]"
                />
              ))}
            </div>
            <div className="text-gray-300 mb-4">(40+ Reviews)</div>
            <div className="font-semibold text-center mb-4">
              Customer experiences that
              <br />
              speak for themselves
            </div>
            <div className="flex -space-x-2">
              <Image
                src="/clients/satisfy-client-img-1.jpg"
                alt="user1"
                width={20}
                height={20}
                className="w-8 h-8 rounded-full border-2 border-black"
              />
              <Image
                src="/clients/satisfy-client-img-2.jpg"
                alt="user1"
                width={20}
                height={20}
                className="w-8 h-8 rounded-full border-2 border-black"
              />
              <Image
                src="/clients/satisfy-client-img-3.jpg"
                alt="user1"
                width={20}
                height={20}
                className="w-8 h-8 rounded-full border-2 border-black"
              />
              <Image
                src="/clients/satisfy-client-img-4.jpg"
                alt="user1"
                width={20}
                height={20}
                className="w-8 h-8 rounded-full border-2 border-black"
              />
            </div>
          </div>
          {/* Testimonial Card */}
          <div className="flex-1 bg-zinc-900/60 rounded-2xl p-8 border border-white/10 flex flex-col justify-between relative overflow-hidden">
            <Marquee gradient={false} speed={50} pauseOnHover>
              <div className="flex gap-8 px-4">
                {TestimonialData.map((testimonial, index) => (
                  <div
                    key={index}
                    className="relative bg-white/10 backdrop-blur-md rounded-lg p-8 shadow-lg w-[350px] sm:w-[400px] border border-white/10 mx-2"
                  >
                    <div className="pt-4">
                      <p className="text-gray-100 mb-6" itemProp="reviewBody">
                        {testimonial.content}
                      </p>
                      <div className="flex items-center">
                        <div className="flex-shrink-0">
                          <Image
                            className="w-10 h-10 rounded-full bg-gray-200 object-cover"
                            src={testimonial.image}
                            alt={testimonial.name}
                            width={100}
                            height={100}
                          />
                        </div>
                        <div className="ml-3">
                          <h4
                            className="text-sm font-medium text-white"
                            itemProp="author"
                          >
                            {testimonial.name}
                          </h4>
                          <p
                            className="text-sm text-gray-300"
                            itemProp="reviewRating"
                          >
                            {testimonial.role}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Marquee>
          </div>
        </div>
        <TestimonialFeature />
      </div>
      {/* Optional: Decorative background */}
      <div className="absolute left-0 bottom-0 w-80 h-80 bg-gradient-to-br from-[#bff747]/20 to-transparent rounded-full blur-3xl pointer-events-none -z-10"></div>
    </section>
  );
}
