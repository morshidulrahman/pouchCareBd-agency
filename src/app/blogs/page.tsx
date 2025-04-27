import { BlogsData } from "@/data";
import HeaderComponent from "@/moduels/HeaderComponent";
import LatestNewsCard from "@/moduels/LatestNewsCard";
import React from "react";

const page = () => {
  return (
    <div className="bg-zinc-950">
      <HeaderComponent
        title="Our"
        highlight="blogs"
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Blogs" }]}
      />
      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-10 sm:grid-cols-2">
          <LatestNewsCard newsData={BlogsData} />
        </div>
      </div>
    </div>
  );
};

export default page;
