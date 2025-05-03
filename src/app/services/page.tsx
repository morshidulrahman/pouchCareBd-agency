import About from "@/components/About";
import AboutAGencyComponent from "@/components/AboutAGencyComponent";
import AgencyHowItWorks from "@/components/AgencyHowItWorks";
import BannerMarque from "@/components/BannerMarque";
import HowItWorks from "@/components/HowItWorks";
import LetsWorkTogether from "@/components/LetsWorkTogether";
import OurService from "@/components/OurService";
import ServiceComponents from "@/components/Service";
import TestimonialSection from "@/components/TestimonialSection";
import WebsiteService from "@/components/WebsiteService";
import HeaderComponent from "@/moduels/HeaderComponent";
import WhoWerAre from "@/moduels/WhoWerAre";
import React from "react";

const page = () => {
  return (
    <div>
      <HeaderComponent
        title="Our"
        highlight="Services"
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Services" }]}
      />
      <BannerMarque />
      <OurService />
      <WebsiteService />
      <AboutAGencyComponent />
      <WhoWerAre />
      <About />
      <ServiceComponents />
      <HowItWorks />
      <AgencyHowItWorks />
      <TestimonialSection />
      <LetsWorkTogether />
    </div>
  );
};

export default page;
