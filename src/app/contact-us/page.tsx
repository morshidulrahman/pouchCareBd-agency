import BannerMarque from "@/components/BannerMarque";
import LetsWorkTogether from "@/components/LetsWorkTogether";
import ContactUs from "@/moduels/ContactUs";
import HeaderComponent from "@/moduels/HeaderComponent";
import React from "react";

const page = () => {
  return (
    <div>
      <HeaderComponent
        title="Contact"
        highlight="us"
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Contact us" }]}
      />
      <BannerMarque />
      <ContactUs />
      <LetsWorkTogether />
    </div>
  );
};

export default page;
