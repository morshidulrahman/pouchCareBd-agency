import TopGradientLayers from "@/moduels/TopGradientLayer";
import BottomLayer from "@/moduels/BottomLayer";
import Link from "next/link";

const packages = [
  {
    name: "Standard",
    price: "$20,000",
    backlinks: "10,000",
    seo: "Basic SEO",
    delivery: "15 Days",
    appDelivery: "7 Days",
    websites: "3 Websites",
    apks: "1 APK",
    benefits: "Basic SEO, Responsive Design, Support 30 days",
  },
  {
    name: "Premium",
    price: "$35,000",
    backlinks: "25,000",
    seo: "Advanced SEO",
    delivery: "12 Days",
    appDelivery: "5 Days",
    websites: "5 Websites",
    apks: "2 APKs",
    benefits:
      "Advanced SEO, Speed Optimization, Support 60 days, Basic Ads Setup",
  },
  {
    name: "Elite",
    price: "$50,000",
    backlinks: "50,000",
    seo: "Premium SEO + Content",
    delivery: "10 Days",
    appDelivery: "3 Days",
    websites: "7 Websites",
    apks: "3 APKs",
    benefits:
      "Premium SEO + Content, Speed + Security Optimization, Support 90 days, Ads + Analytics Setup, Custom Features",
  },
];

const WebsiteService = () => {
  return (
    <section className="relative bg-black text-white py-20 ">
      {/* <TopGradientLayers /> */}
      <div className="container mx-auto px-4 z-[999]">
        {/* Heading */}
        <div
          className="mb-10 text-center"
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-2">
            Our <span className="text-[#bff747]">Website & App Packages</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Choose the perfect package for your business growth. All packages
            include website and app delivery, SEO, and exclusive benefits.
          </p>
        </div>
        {/* Packages Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg, idx) => (
            <div
              key={pkg.name}
              className="bg-zinc-900/60 rounded-2xl shadow-lg p-8 flex flex-col items-center text-center border border-[#bff747]/10 hover:border-[#bff747] transition-colors h-full"
              data-aos="fade-up"
              data-aos-delay={idx * 200}
              data-aos-duration="800"
            >
              <div className="text-2xl font-bold mb-2 text-[#bff747]">
                {pkg.name}
              </div>
              <div className="text-3xl font-extrabold mb-4">{pkg.price}</div>
              <ul className="text-gray-300 text-sm mb-4 space-y-2 w-full">
                <li>
                  <span className="font-semibold text-white">Backlinks:</span>{" "}
                  {pkg.backlinks}
                </li>
                <li>
                  <span className="font-semibold text-white">SEO:</span>{" "}
                  {pkg.seo}
                </li>
                <li>
                  <span className="font-semibold text-white">
                    Website Delivery:
                  </span>{" "}
                  {pkg.delivery}
                </li>
                <li>
                  <span className="font-semibold text-white">
                    App Delivery:
                  </span>{" "}
                  {pkg.appDelivery}
                </li>
                <li>
                  <span className="font-semibold text-white">
                    Websites Included:
                  </span>{" "}
                  {pkg.websites}
                </li>
                <li>
                  <span className="font-semibold text-white">
                    APK Included:
                  </span>{" "}
                  {pkg.apks}
                </li>
                <li>
                  <span className="font-semibold text-white">
                    Extra Benefits:
                  </span>
                  <br />
                  <span className="text-[#bff747]">{pkg.benefits}</span>
                </li>
              </ul>
              <div className="mt-auto w-full flex justify-center">
                <Link href="/contact-us">
                  <span className="inline-block bg-[#bff747] text-black font-bold px-6 py-2 rounded-full shadow hover:bg-[#d4ff72] transition-colors cursor-pointer">
                    Choose {pkg.name}
                  </span>
                </Link>
              </div>
            </div>
          ))}
        </div>
        {/* CTA */}
        <div
          className="text-center mt-12"
          data-aos="fade-up"
          data-aos-delay="700"
          data-aos-duration="800"
        >
          <Link
            href="/contact-us"
            className="inline-block bg-[#bff747] text-black font-bold px-8 py-3 rounded-full shadow-lg hover:bg-[#d4ff72] transition-colors cursor-pointer"
          >
            Get Your Package Now
          </Link>
        </div>
      </div>
      <BottomLayer />
    </section>
  );
};

export default WebsiteService;
