// components/ServiceCard.tsx
import React from "react";

interface ServiceCardProps {
  title: string;
  icon: React.ReactNode;
  imageUrl: string;
  altText: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  icon,
  imageUrl,
  altText,
}) => {
  return (
    <div className="service-card group relative bg-zinc-900/30 backdrop-blur-lg rounded-2xl p-6 hover:bg-zinc-800/40 transition-all duration-300 border border-white/10">
      <div className="absolute inset-0 bg-gradient-to-br from-[#c5ff00]/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <div className="relative z-10">
        <div className="bg-zinc-800/50 w-12 h-12 rounded-lg flex items-center justify-center mb-6 backdrop-blur-sm border border-white/5">
          {icon}
        </div>
        <h3 className="text-xl font-semibold mb-4 text-white/90">{title}</h3>
        <div className="relative overflow-hidden rounded-lg">
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
          <img
            src={imageUrl}
            alt={altText}
            className="w-full h-32 object-cover transform group-hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
