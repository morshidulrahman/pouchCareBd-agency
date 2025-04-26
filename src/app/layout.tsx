import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import AosProvider from "@/provider/AosProvider";
import ThemeProvider from "@/provider/ThemeProvider";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Digital Marketing & Web Development Expert | SEO Specialist",
  description:
    "Expert in digital marketing, web development, and SEO optimization. Proven track record in delivering results for businesses across India and Pakistan.",
  keywords:
    "digital marketing, web development, SEO, Pakistan, India, business growth, online presence",
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    title: "Digital Marketing & Web Development Expert | SEO Specialist",
    description:
      "Expert in digital marketing, web development, and SEO optimization. Proven track record in delivering results for businesses across India and Pakistan.",
    type: "website",
    locale: "en_US",
    siteName: "Digital Marketing Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Marketing & Web Development Expert | SEO Specialist",
    description:
      "Expert in digital marketing, web development, and SEO optimization. Proven track record in delivering results.",
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
