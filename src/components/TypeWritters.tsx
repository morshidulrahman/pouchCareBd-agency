"use client";

import { Typewriter } from "react-simple-typewriter";

const TypeWritters = () => {
  return (
    <span className="text-[#c5ff00] inline-flex">
      <Typewriter
        words={[
          "Digital Marketing",
          "SEO Solutions",
          "Web Development",
          "Brand Strategy",
        ]}
        loop={0}
        cursor
        cursorStyle="_"
        typeSpeed={70}
        deleteSpeed={50}
        delaySpeed={1000}
      />
    </span>
  );
};

export default TypeWritters;
