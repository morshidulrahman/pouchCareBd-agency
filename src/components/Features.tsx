import SectionHeading from "@/moduels/Header";
import React from "react";
import Button from "./Button";
import Image from "next/image";
import TopGradientLayers from "@/moduels/TopGradientLayer";
import {
  ArrowRight,
  Zap,
  BarChart3,
  Globe,
  Palette,
  Search,
  MessageSquare,
} from "lucide-react";

const featuresList = [
  {
    id: 1,
    title: "Custom Branding Solutions",
    description:
      "Unique brand identity development, including logos, color palettes, typography, and brand guidelines that capture your company's essence and resonate with your target audience.",
    image:
      "https://demo.awaikenthemes.com/artistics/wp-content/uploads/2024/11/digital-features-img-1.jpg",
    icon: <Palette className="w-5 h-5" />,
    size: "large",
  },
  {
    id: 2,
    title: "Data-Driven Digital Marketing",
    description:
      "Strategies combining SEO, PPC, content marketing, and social media to maximize ROI and drive measurable business growth through targeted campaigns.",
    image:
      "https://demo.awaikenthemes.com/artistics/wp-content/uploads/2024/11/digital-features-img-1.jpg",
    icon: <BarChart3 className="w-5 h-5" />,
    size: "small",
  },
  {
    id: 3,
    title: "SEO Optimization",
    description:
      "Comprehensive search engine optimization services that improve your website's visibility, drive organic traffic, and help you rank higher for relevant keywords.",
    image:
      "https://demo.awaikenthemes.com/artistics/wp-content/uploads/2024/11/digital-features-img-2.jpg",
    icon: <Search className="w-5 h-5" />,
    size: "small",
  },
  {
    id: 4,
    title: "Website Development",
    description:
      "Custom, responsive website design and development that delivers exceptional user experiences across all devices while reflecting your brand identity.",
    image:
      "https://demo.awaikenthemes.com/artistics/wp-content/uploads/2024/11/why-choose-image.jpg",
    icon: <Globe className="w-5 h-5" />,
    size: "large",
  },
];

const Features = () => {
  return (
    <section className="relative py-12 sm:py-16 md:py-20 overflow-hidden bg-zinc-950">
      <TopGradientLayers />
      <div className="container mx-auto px-4">
        {/* Header */}
        <div
          className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 sm:gap-6 mb-8 sm:mb-10"
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          <div>
            <SectionHeading title="Features" />
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2">
              Innovative <span className="text-[#c5ff00]">features</span> for
              <br className="hidden md:block" /> your digital success
            </h2>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-gray-300 max-w-md text-sm sm:text-base">
              Our proven process combines research, strategy, and creativity to
              deliver tailored solutions that drive measurable results for
              businesses of all sizes.
            </p>
            <Button text="Learn More" href="/services"></Button>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {featuresList.map((feature) => (
            <div
              key={feature.id}
              className={`custom-glass-card p-4 sm:p-6 ${
                feature.size === "large"
                  ? "col-span-1 md:col-span-2"
                  : "col-span-1"
              }`}
              data-aos="fade-up"
              data-aos-delay={feature.id * 100}
            >
              <div className="overflow-hidden rounded-2xl group h-48 sm:h-56 md:h-64 relative">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  width={800}
                  height={600}
                  className="transition-transform duration-500 group-hover:scale-110 w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-[#c5ff00] rounded-full p-2">
                  {feature.icon}
                </div>
              </div>
              <div className="mt-4 flex flex-col gap-2">
                <h3 className="text-lg sm:text-xl font-bold">
                  {feature.title}
                </h3>
                <p className="text-gray-300 text-sm sm:text-base">
                  {feature.description}
                </p>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-[#c5ff00] mt-2 group/link"
                >
                  <span>Learn more</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-12 sm:mt-16 text-center" data-aos="fade-up">
          <div className="custom-glass-card p-6 sm:p-8 md:p-10 rounded-2xl">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">
              Ready to transform your digital presence?
            </h3>
            <p className="text-gray-300 max-w-2xl mx-auto mb-6">
              Our team of experts is ready to help you achieve your business
              goals with our comprehensive suite of digital marketing services.
            </p>
            <Button text="Get Started Today" href="/contact-us"></Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
