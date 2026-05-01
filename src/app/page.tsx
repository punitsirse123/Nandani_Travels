"use client";

import { BookingWidget } from "@/components/BookingWidget";
import { LanguageToggle } from "@/components/LanguageToggle";
import { useLanguage } from "@/context/LanguageContext";
import { FeaturesSection } from "@/components/FeaturesSection";
import { HowItWorks } from "@/components/HowItWorks";
import { PopularRoutes } from "@/components/PopularRoutes";
import { Testimonials } from "@/components/Testimonials";
import { Footer } from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const { t } = useLanguage();

  return (
    <div className="relative min-h-screen bg-black overflow-hidden flex flex-col font-outfit">

      {/* Hero Section */}
      <div className="relative min-h-[85vh] flex flex-col pb-16">
        {/* Background Image & Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/highway_drive.png"
            alt="Premium Car driving on highway"
            fill
            className="object-cover opacity-[0.55]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/60"></div>
        </div>

        {/* Header */}
        <header className="relative z-20 p-6 flex justify-between items-center max-w-[1400px] mx-auto w-full">
          <div className="text-3xl font-extrabold tracking-tight text-white flex items-center gap-2">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-gold to-yellow-200 drop-shadow-md">
              {t.brandName}
            </span>
          </div>
          <div className="flex items-center gap-6">
            <div className="hidden md:flex gap-6 mr-4">
              <Link href="/" className="text-sm font-medium text-white hover:text-gold transition-colors duration-300">
                {t.navHome}
              </Link>
              <Link href="/about" className="text-sm font-medium text-gray-300 hover:text-gold transition-colors duration-300">
                {t.navAbout}
              </Link>
              <Link href="/contact" className="text-sm font-medium text-gray-300 hover:text-gold transition-colors duration-300">
                {t.navContact}
              </Link>
            </div>
            <LanguageToggle />
          </div>
        </header>

        {/* Main Hero Content (Split Screen) */}
        <main className="relative z-10 flex-1 flex flex-col lg:flex-row items-center lg:items-start justify-center p-6 max-w-[1400px] mx-auto w-full gap-12 lg:gap-16 pt-12 lg:pt-28">

          {/* Left: Copywriting */}
          <div className="flex-1 text-left max-w-2xl flex flex-col justify-start pt-4">
            <div className="inline-block max-w-full whitespace-normal px-4 md:px-5 py-2 md:py-2.5 rounded-full bg-gold/10 border border-gold/30 text-gold text-[10px] md:text-xs font-bold tracking-wider md:tracking-[0.2em] uppercase mb-6 md:mb-8 shadow-[0_0_20px_rgba(212,175,55,0.15)] backdrop-blur-sm">
              Outstation Cab Service from Ahmedabad
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-[75px] font-black text-transparent bg-clip-text bg-gradient-to-br from-white via-gray-100 to-gray-400 mb-6 tracking-tight md:tracking-tighter leading-[1.1] md:leading-[1.05] drop-shadow-2xl py-1 px-1 -ml-1">
              {t.heroTitle}
            </h1>
            <p className="text-lg md:text-2xl text-gray-300 mb-10 font-light leading-relaxed max-w-xl border-l-4 border-gold pl-6">
              {t.heroSubtitle}
            </p>
            <div className="flex flex-col items-start gap-4">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8 text-sm font-medium text-gray-400 bg-black/40 p-4 rounded-2xl w-full sm:w-max backdrop-blur-sm border border-white/5">
                <div className="flex items-center gap-3">
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-gold/20 shrink-0"><span className="w-2 h-2 rounded-full bg-gold"></span></span> Instant Booking
                </div>
                <div className="flex items-center gap-3">
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-gold/20 shrink-0"><span className="w-2 h-2 rounded-full bg-gold"></span></span> Transparent Fare
                </div>
              </div>
              <div className="mt-2 text-sm text-gray-400">
                or call us directly: <a href="tel:+919426590305" className="text-gray-300 hover:text-white underline">+91 94265 90305</a>
              </div>
            </div>
          </div>

          {/* Right: Booking Widget */}
          <div className="w-full lg:w-[500px] xl:w-[600px] shrink-0" id="booking">
            <BookingWidget />
          </div>

        </main>
      </div>

      {/* Value Proposition Sections */}
      <FeaturesSection />
      <PopularRoutes />
      <HowItWorks />
      <Testimonials />

      {/* Footer */}
      <Footer />

    </div>
  );
}
