"use client";

import { useState } from "react";
import { Star, ArrowLeft, ArrowRight, DollarSign, Unlock, Shield, Headphones } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Mitchell",
    role: "Marketing Director",
    review:
      "The team transformed our brand's online presence with creativity and precision. The results exceeded our expectations! Their digital marketing strategies helped us reach a broader audience and significantly boosted our sales.",
    rating: 5,
    avatar: "/avatars/avatar1.jpg",
    logo: "/logos/logo1.svg",
    company: "Logoipsum",
  },
  {
    id: 2,
    name: "David Thompson",
    role: "CEO",
    review:
      "Working with them was seamless. Their expertise and innovative solutions were key to our success.",
    rating: 5,
    avatar: "/avatars/avatar2.jpg",
    logo: "/logos/logo2.svg",
    company: "Logoipsum",
  },
  // Add more testimonials as needed
];

const features = [
  {
    icon: <DollarSign className="w-8 h-8 text-[#bff747]" />,
    title: "Low Cost",
    points: ["Competitive fee", "Flexible rates"],
  },
  {
    icon: <Unlock className="w-8 h-8 text-[#bff747]" />,
    title: "Permission Less",
    points: ["Open for integration", "Run your own nodes"],
  },
  {
    icon: <Shield className="w-8 h-8 text-[#bff747]" />,
    title: "Secure Data",
    points: ["Open source sheet", "360 Security"],
  },
  {
    icon: <Headphones className="w-8 h-8 text-[#bff747]" />,
    title: "24 X 7 Support",
    points: ["Toll free number", "Ticket systems"],
  },
];

export default function TestimonialSection() {
  const [current, setCurrent] = useState(0);

  const handlePrev = () => {
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };
  const handleNext = () => {
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-16 bg-black text-white relative">
      <div className="max-w-6xl mx-auto px-4">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row gap-8 mb-12">
          {/* Review Score Card */}
          <div className="flex-1 bg-zinc-900/60 rounded-2xl p-8 flex flex-col items-center justify-center border border-white/10 min-w-[300px] max-w-[350px] mx-auto md:mx-0">
            <div className="text-6xl font-bold mb-2">4.9</div>
            <div className="flex items-center mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={20} className="text-[#bff747] fill-[#bff747]" />
              ))}
            </div>
            <div className="text-gray-300 mb-4">(40+ Reviews)</div>
            <div className="font-semibold text-center mb-4">
              Customer experiences that<br />speak for themselves
            </div>
            <div className="flex -space-x-2">
              <img src="/avatars/avatar1.jpg" alt="user1" className="w-8 h-8 rounded-full border-2 border-black" />
              <img src="/avatars/avatar2.jpg" alt="user2" className="w-8 h-8 rounded-full border-2 border-black" />
              <img src="/avatars/avatar3.jpg" alt="user3" className="w-8 h-8 rounded-full border-2 border-black" />
              <img src="/avatars/avatar4.jpg" alt="user4" className="w-8 h-8 rounded-full border-2 border-black" />
            </div>
          </div>
          {/* Testimonial Card */}
          <div className="flex-1 bg-zinc-900/60 rounded-2xl p-8 border border-white/10 flex flex-col justify-between relative">
            <div className="flex items-center gap-3 mb-2">
              <img src={testimonials[current].logo} alt="logo" className="h-8 w-8" />
              <span className="font-semibold text-white">{testimonials[current].company}</span>
            </div>
            <div className="flex items-center mb-2">
              {[...Array(testimonials[current].rating)].map((_, i) => (
                <Star key={i} size={18} className="text-[#bff747] fill-[#bff747]" />
              ))}
            </div>
            <p className="text-lg font-medium mb-6">{testimonials[current].review}</p>
            <div className="flex items-center gap-4 mt-4">
              <img
                src={testimonials[current].avatar}
                alt={testimonials[current].name}
                className="h-12 w-12 rounded-full object-cover"
              />
              <div>
                <p className="font-semibold">{testimonials[current].name}</p>
                <p className="text-sm text-gray-400">{testimonials[current].role}</p>
              </div>
            </div>
            {/* Navigation */}
            <div className="absolute bottom-8 right-8 flex gap-3">
              <button
                onClick={handlePrev}
                className="bg-zinc-800 hover:bg-zinc-700 p-2 rounded-full transition-colors"
                aria-label="Previous"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                className="bg-zinc-800 hover:bg-zinc-700 p-2 rounded-full transition-colors"
                aria-label="Next"
              >
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
        {/* Features Section */}
        <div className="bg-zinc-900/60 rounded-2xl border border-white/10 grid grid-cols-1 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-white/10">
          {features.map((feature, idx) => (
            <div key={idx} className="flex flex-col items-center p-8">
              <div className="mb-4">{feature.icon}</div>
              <div className="font-semibold text-lg mb-2">{feature.title}</div>
              <ul className="text-gray-300 text-sm space-y-1 text-center">
                {feature.points.map((point, i) => (
                  <li key={i}>* {point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      {/* Optional: Decorative background */}
      <div className="absolute left-0 bottom-0 w-80 h-80 bg-gradient-to-br from-[#bff747]/20 to-transparent rounded-full blur-3xl pointer-events-none -z-10"></div>
    </section>
  );
}
