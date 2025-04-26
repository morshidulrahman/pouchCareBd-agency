import React from "react";

const TopGradientLayers = () => {
  return (
    <div className="absolute inset-0 z-0">
      <div className="absolute left-0 top-0 w-full h-full bg-gradient-to-br from-[#bff747]/10 via-transparent to-transparent pointer-events-none" />
    </div>
  );
};

export default TopGradientLayers;
