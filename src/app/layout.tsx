import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import AosProvider from "@/provider/AosProvider";
import ThemeProvider from "@/provider/ThemeProvider";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import GoogleAnalytics from "@/components/GoogleAnalytics";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pouchcare | Digital Marketing, SEO, and Web Development Experts",
  description:
    "Pouchcare specializes in digital marketing, SEO optimization, and web development services. Helping businesses across India and Pakistan grow their online presence and achieve success.",
  keywords:
    "Pouchcare, digital marketing, web development, SEO, SEO agency, Pakistan, India, business growth, online marketing",
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    title: "Pouchcare | Digital Marketing, SEO, and Web Development Experts",
    description:
      "Pouchcare specializes in digital marketing, SEO optimization, and web development services. Helping businesses across India and Pakistan grow their online presence and achieve success.",
    type: "website",
    locale: "en_US",
    siteName: "Pouchcare",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pouchcare | Digital Marketing, SEO, and Web Development Experts",
    description:
      "Grow your business with Pouchcare's expert digital marketing, SEO, and web development solutions.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head></head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <GoogleAnalytics ga_id="G-PY485TY76C" />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <AosProvider>
            <Navbar />
            {children}
            <Footer />
          </AosProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
