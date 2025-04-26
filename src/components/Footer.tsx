import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="bg-black/30 backdrop-blur-lg border-t border-white/10">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Image 
                src="/logo.png" 
                alt="Artistic" 
                width={40} 
                height={40}
              />
              <span className="text-white text-2xl font-bold">artistic.</span>
            </div>
            <p className="text-gray-400 mb-6">
              Lorem ipsum has been the industry's standard dummy text ever since the
            </p>
            <div className="flex gap-4">
              {['pinterest', 'twitter', 'facebook', 'instagram'].map((social) => (
                <Link 
                  key={social}
                  href={`#${social}`}
                  className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center hover:bg-[#c5ff00] transition-colors"
                >
                  <span className="text-white text-sm">{social[0].toUpperCase()}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-6">Quick Link</h3>
            <ul className="space-y-3">
              {['Home', 'About Us', 'Services', 'Blog'].map((link) => (
                <li key={link}>
                  <Link href={`#${link}`} className="text-gray-400 hover:text-[#c5ff00] transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-3">
              {[
                'Keywords Research',
                'SEO Consultation',
                'SEO Performance Tracking',
                'Content Creation'
              ].map((service) => (
                <li key={service}>
                  <Link href={`#${service}`} className="text-gray-400 hover:text-[#c5ff00] transition-colors">
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-6">Have Questions?</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-2">
                <span className="text-[#c5ff00]">Phone:</span>
                <a href="tel:+123456789" className="text-gray-400 hover:text-[#c5ff00] transition-colors">
                  +123 456 7890
                </a>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#c5ff00]">E-mail:</span>
                <a href="mailto:info@domainname@gmail.com" className="text-gray-400 hover:text-[#c5ff00] transition-colors">
                  info@domainname@gmail.com
                </a>
              </li>
              <li>
                <span className="text-[#c5ff00] block mb-1">Address:</span>
                <address className="text-gray-400 not-italic">
                  123 Creative Lane London,<br />
                  SW1A 1AA United Kingdom
                </address>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400">Copyright © 2024 All Rights Reserved.</p>
          <div className="flex gap-4">
            <Link href="#help" className="text-gray-400 hover:text-[#c5ff00] transition-colors">Help</Link>
            <span className="text-gray-600">/</span>
            <Link href="#privacy" className="text-gray-400 hover:text-[#c5ff00] transition-colors">Privacy Policy</Link>
            <span className="text-gray-600">/</span>
            <Link href="#terms" className="text-gray-400 hover:text-[#c5ff00] transition-colors">Term & Cond.</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer