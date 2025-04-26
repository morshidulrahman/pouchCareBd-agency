import Hero from "@/components/Hero";
import React from "react";
import AboutAgency from "@/components/AboutAgency";
import OurService from "@/components/OurService";
import AgencyHowItWorks from "@/components/AgencyHowItWorks";
import JoinAgency from "@/components/JoinAgency";
import Features from "@/components/Features";
import BenefitsAgency from "@/components/BenefitsAgency";
import TestimonialsSlider from "@/components/TestimonialSection";
import LatestNews from "@/components/LatestNews";
import LetsWorkTogether from "@/components/LetsWorkTogether";
import AboutAGencyComponent from "@/components/AboutAGencyComponent";
import BannerMarque from "@/components/BannerMarque";

const Page = () => {
  return (
    <main className="min-h-screen relative">
      {/* Video Background */}
      <Hero />
      <BannerMarque />
      <AboutAGencyComponent />
      <AboutAgency />
      <OurService />
      <AgencyHowItWorks />
      <JoinAgency />
      <Features />
      <BenefitsAgency />
      <TestimonialsSlider />
      <LatestNews />
      <LetsWorkTogether />
    </main>
  );
};

export default Page;
