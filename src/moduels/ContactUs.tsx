import React from "react";
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";

const ContactUs = () => {
  return (
    <section className="relative py-20 bg-black text-white overflow-hidden">
      <div className="container mx-auto px-4 flex flex-col md:flex-row gap-12 items-center">
        {/* Contact Info */}
        <div className="flex-1 max-w-md space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h2>
          <div className="flex items-center gap-4">
            <Phone className="w-6 h-6 text-[#bff747]" />
            <span className="text-lg">+1 234 567 890</span>
          </div>
          <div className="flex items-center gap-4">
            <Mail className="w-6 h-6 text-[#bff747]" />
            <span className="text-lg">info@example.com</span>
          </div>
          <div className="flex items-center gap-4">
            <MapPin className="w-6 h-6 text-[#bff747]" />
            <span className="text-lg">123 Main St, City, Country</span>
          </div>
          <div className="flex gap-4 mt-4">
            <a href="#" className="w-9 h-9 rounded-full border border-[#bff747] flex items-center justify-center text-[#bff747] hover:bg-[#bff747] hover:text-black transition-colors">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="w-9 h-9 rounded-full border border-[#bff747] flex items-center justify-center text-[#bff747] hover:bg-[#bff747] hover:text-black transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="w-9 h-9 rounded-full border border-[#bff747] flex items-center justify-center text-[#bff747] hover:bg-[#bff747] hover:text-black transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
        {/* Contact Form */}
        <form className="flex-1 bg-zinc-900/80 rounded-2xl p-8 border border-white/10 shadow-lg space-y-6 w-full max-w-lg">
          <div>
            <label className="block text-sm mb-1">Name</label>
            <input type="text" className="w-full px-4 py-2 rounded bg-black/60 border border-white/10 text-white focus:outline-none focus:border-[#bff747]" placeholder="Your Name" />
          </div>
          <div>
            <label className="block text-sm mb-1">Email</label>
            <input type="email" className="w-full px-4 py-2 rounded bg-black/60 border border-white/10 text-white focus:outline-none focus:border-[#bff747]" placeholder="Your Email" />
          </div>
          <div>
            <label className="block text-sm mb-1">Message</label>
            <textarea className="w-full px-4 py-2 rounded bg-black/60 border border-white/10 text-white focus:outline-none focus:border-[#bff747]" rows={4} placeholder="Your Message"></textarea>
          </div>
          <button type="submit" className="w-full py-3 rounded bg-[#bff747] text-black font-semibold hover:bg-[#d4ff6b] transition-colors">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;