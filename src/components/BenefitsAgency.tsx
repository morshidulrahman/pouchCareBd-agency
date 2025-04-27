import SectionHeading from "@/moduels/Header";
import TopGradientLayers from "@/moduels/TopGradientLayer";
import {
  ClipboardList,
  Settings,
  ClipboardCheck,
  Headphones,
} from "lucide-react";

const features = [
  {
    id: 1,
    title: "Personalized Approach",
    description:
      "We customize strategies to fit your brand's specific needs, ensuring alignment.",
    icon: ClipboardList,
  },
  {
    id: 2,
    title: "Experienced Team",
    description:
      "Combines industry knowledge and creativity to exceptional results for your brand.",
    icon: Settings,
  },
  {
    id: 3,
    title: "Data–Driven Decisions",
    description:
      "We utilize data insights to refine strategies, optimize and ensure impactful, measurable results.",
    icon: ClipboardCheck,
  },
  {
    id: 4,
    title: "Ongoing Support",
    description:
      "We provide continuous support and maintenance on digital assets and strategies.",
    icon: Headphones,
  },
];

const BenefitsAgency = () => {
  return (
    <section className="py-12 text-white relative bg-black">
      <TopGradientLayers />
      <div className="container mx-auto px-4">
        <div
          className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-10"
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          <div>
            <SectionHeading title="KEY BENEFITS" />
            <h2 className="text-4xl md:text-5xl font-bold mb-2">
              Our proven <span className="text-primary">process</span> for
              <br className="hidden md:block" /> achieving success
            </h2>
          </div>
          <div className="flex flex-col md:items-end gap-2">
            <p className="text-gray-300 max-w-md">
              Our proven process combines research, strategy, and creativity to
              deliver tailored solutions that drive measurable results.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.id}
                className="bg-[#111] rounded-2xl p-6 flex flex-col items-start gap-4 hover:bg-[#1a1a1a] transition-colors"
              >
                <div className="text-lime-400">
                  <Icon size={40} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-semibold">{feature.title}</h3>
                <p className="text-sm text-gray-400">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BenefitsAgency;
