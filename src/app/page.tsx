import ServiceComponents from "@/components/Service";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import React from "react";
import About from "@/components/About";
import AboutAgency from "@/components/AboutAgency";
import OurService from "@/components/OurService";
import AgencyHowItWorks from "@/components/AgencyHowItWorks";
import JoinAgency from "@/components/JoinAgency";
import Features from "@/components/Features";
import AgencyFeature from "@/components/AgencyFeature";
import BenefitsAgency from "@/components/BenefitsAgency";
import TestimonialsSlider from "@/components/TestimonialSection";

const Page = () => {
  return (
    <main className="min-h-screen relative">
      {/* Video Background */}
      <Hero />
      <About />
      <ServiceComponents />
      <HowItWorks />
      {/* <WhyChooseUs /> */}
      <AboutAgency />
      <OurService />
      <AgencyHowItWorks />
      <JoinAgency />
      <Features />
      <AgencyFeature />
      <BenefitsAgency />
      <TestimonialsSlider />
    </main>
  );
};

export default Page;
