import { Mail, Phone, MapPin } from "lucide-react";
import Image from "next/image";
import TopGradientLayers from "./TopGradientLayer";

const ContactUs = () => {
  return (
    <section className="relative py-20 bg-black text-white overflow-hidden">
      <TopGradientLayers />
      <div className="container mx-auto px-4">
        {/* Main Contact Card */}
        <div className="custom-glass-card p-4">
          <div className="flex flex-col md:flex-row gap-10">
            {/* Left Side - Image and Contact Info */}
            <div className="md:w-1/2 relative">
              <div className="relative h-full rounded-2xl overflow-hidden">
                <Image
                  src="https://demo.awaikenthemes.com/artistics/seo/wp-content/uploads/2024/12/contect-img.jpg"
                  alt="Customer support"
                  width={600}
                  height={800}
                  className="object-cover h-[200px] md:h-[300px] w-full"
                />

                {/* Contact Info Overlay */}
                <div className="mt-2">
                  <div className="flex flex-col gap-y-6">
                    {/* Phone */}
                    <div className="flex items-center gap-4 border-b border-[#c5ff00]/30 py-4">
                      <div className="bg-[#c5ff00] rounded-full p-3">
                        <Phone className="w-5 h-5 text-black" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-300">Phone Number</p>
                        <p className="text-white font-medium">+987 654 3210</p>
                      </div>
                    </div>

                    {/* Email */}
                    <div className="flex items-center gap-4 border-b border-[#c5ff00]/30 py-4">
                      <div className="bg-[#c5ff00] rounded-full p-3">
                        <Mail className="w-5 h-5 text-black" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-300">Email Us</p>
                        <p className="text-white font-medium">
                          info@domainname.com
                        </p>
                      </div>
                    </div>

                    {/* Address */}
                    <div className="flex items-center gap-4 border-b border-[#c5ff00]/30 py-6">
                      <div className="bg-[#c5ff00] rounded-full p-3">
                        <MapPin className="w-5 h-5 text-black" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-300">Address</p>
                        <p className="text-white font-medium">
                          7676 Arden Avenue, Ginashire
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Contact Form */}
            <div className="md:w-1/2 ">
              <div className="mb-8">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[#c5ff00] text-sm">* CONTACT US</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold">
                  Our <span className="text-[#c5ff00]">team</span> is ready to
                  help
                </h2>
                <p className="text-gray-300 mt-3">
                  We're here to help! Reach out to us for expert guidance,
                  personalized SEO solutions, or any questions you have.
                </p>
              </div>

              <form className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-md bg-black/60 border border-white/10 text-white focus:outline-none focus:border-[#c5ff00]"
                      placeholder="First Name"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-md bg-black/60 border border-white/10 text-white focus:outline-none focus:border-[#c5ff00]"
                      placeholder="Last Name"
                    />
                  </div>
                </div>

                <div>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 rounded-md bg-black/60 border border-white/10 text-white focus:outline-none focus:border-[#c5ff00]"
                    placeholder="Phone No"
                  />
                </div>

                <div>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-md bg-black/60 border border-white/10 text-white focus:outline-none focus:border-[#c5ff00]"
                    placeholder="E-mail"
                  />
                </div>

                <div>
                  <textarea
                    className="w-full px-4 py-3 rounded-md bg-black/60 border border-white/10 text-white focus:outline-none focus:border-[#c5ff00]"
                    rows={4}
                    placeholder="Message"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-md bg-[#c5ff00] text-black font-semibold hover:bg-[#d4ff6b] transition-colors flex items-center justify-center"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
