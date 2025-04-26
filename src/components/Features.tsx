import SectionHeading from "@/moduels/Header";
import React from "react";
import Button from "./Button";
import Image from "next/image";

const Features = () => {
  return (
    <section
      className="relative bg-black text-white py-20 overflow-hidden"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
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
              Innovative<span className="text-primary">features</span> for
              <br className="hidden md:block" /> your digital success
            </h2>
          </div>
          <div className="flex flex-col md:items-end gap-2">
            <p className="text-gray-300 max-w-md">
              Our proven process combines research, strategy, and creativity to
              deliver tailored solutions that drive measurable results.
            </p>
            <Button text="Learn More" href="/services"></Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="col-span-2 custom-glass-card p-6">
            <div className="overflow-hidden rounded-2xl group h-66">
              <Image
                src="https://demo.awaikenthemes.com/artistics/wp-content/uploads/2024/11/digital-features-img-1.jpg"
                alt="servicesImage"
                width={200}
                height={200}
                className="transition-transform duration-500 group-hover:scale-110 w-full h-full object-cover"
              ></Image>
            </div>
            <h3 className="text-lg mt-4 font-bold mb-2">
              Custom Branding Solutions
            </h3>
            <p className="text-gray-300">
              Unique brand identity development, including logos, color
              palettes.
            </p>
          </div>
          <div className="col-span-1 custom-glass-card p-6">
            <div className="overflow-hidden rounded-2xl group h-66">
              <Image
                src="https://demo.awaikenthemes.com/artistics/wp-content/uploads/2024/11/digital-features-img-1.jpg"
                alt="servicesImage"
                width={200}
                height={200}
                className="transition-transform duration-500 group-hover:scale-110 w-full h-full object-cover"
              ></Image>
            </div>
            <h3 className="text-lg mt-4 font-bold mb-2">
              Data-Driven Digital Marketing
            </h3>
            <p className="text-gray-300">
              Strategies combining SEO, PPC, content marketing
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
