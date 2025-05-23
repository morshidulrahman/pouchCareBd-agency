import AboutAgency from "@/components/AboutAgency";
import AgencyFeature from "@/components/AgencyFeature";
import BannerMarque from "@/components/BannerMarque";
import Features from "@/components/Features";
import LetsWorkTogether from "@/components/LetsWorkTogether";
import TestimonialSection from "@/components/TestimonialSection";
import HeaderComponent from "@/moduels/HeaderComponent";
import OurApproach from "@/moduels/OurApproach";
import OurTeams from "@/moduels/OurTeams";
import WhoWerAre from "@/moduels/WhoWerAre";
import React from "react";

const page = () => {
  return (
    <div>
      <HeaderComponent
        title="About"
        highlight="us"
        breadcrumb={[{ label: "Home", href: "/" }, { label: "About Us" }]}
      />
      <BannerMarque />
      <AboutAgency />
      <OurApproach />
      <WhoWerAre />
      <Features />
      <OurTeams />
      <TestimonialSection />
      <LetsWorkTogether />
    </div>
  );
};

export default page;
