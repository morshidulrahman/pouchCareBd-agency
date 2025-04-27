import { ArrowRight } from "lucide-react";
import Image from "next/image";
import React from "react";
import "aos/dist/aos.css";

interface NewsItem {
  image: string;
  title: string;
}

const LatestNewsCard = ({ newsData }: { newsData: NewsItem[] }) => {
  return (
    <>
      {newsData.map((news, index) => (
        <div 
          className="group" 
          key={index}
          data-aos="fade-up"
          data-aos-delay={index * 100}
          data-aos-duration="800"
        >
          <div className="overflow-hidden rounded-2xl h-60">
            <Image
              src={news.image}
              alt="News 1"
              className="w-full rounded-lg transition-all duration-300 ease-in-out group-hover:scale-110"
              width={300}
              height={200}
            />
          </div>
          <h3 className="text-xl font-semibold mt-2">{news.title}</h3>
          <p className="text-gray-400 mt-1 flex gap-1 items-center duration-300 transition-all">
            <span className="text-primary group-hover:text-white text-sm">
              Read More
            </span>{" "}
            <ArrowRight className="w-4 h-4 -rotate-45 text-primary group-hover:rotate-0 duration-300 transition-all" />
          </p>
        </div>
      ))}
    </>
  );
};

export default LatestNewsCard;
