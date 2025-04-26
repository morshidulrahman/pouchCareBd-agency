import { Star, DollarSign, Unlock, Shield, Headphones } from "lucide-react";
import Image from "next/image";

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
const TestimonialFeature = () => {
  return (
    <div className="bg-zinc-900/60 rounded-2xl border border-white/10 grid grid-cols-1 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-white/10">
      {features.map((feature, idx) => (
        <div key={idx} className="flex flex-col items-center p-8">
          <div className="mb-4">{feature.icon}</div>
          <div className="font-semibold text-lg mb-2">{feature.title}</div>
          <ul className="text-gray-300 text-sm space-y-1 text-center">
            {feature.points.map((point, i) => (
              <li key={i} className="flex items-center gap-1">
                <Image
                  src="/icon-sub-heading.svg"
                  alt="staricon"
                  width={16}
                  height={16}
                  className="w-2 h-2"
                ></Image>
                {point}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default TestimonialFeature;
