"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useLanguage } from "@/context/LanguageContext";
import Image from "next/image";

export default function AboutPage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-black flex flex-col font-outfit">
      <Header />

      <main className="flex-1 max-w-5xl mx-auto w-full p-6 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500 mb-6">
            {t.aboutTitle}
          </h1>
          <div className="w-24 h-1 bg-gold mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <p className="text-lg text-gray-300 leading-relaxed font-light">
              {t.aboutContent1}
            </p>
            <p className="text-lg text-gray-300 leading-relaxed font-light">
              {t.aboutContent2}
            </p>
            <div className="pt-4">
              <div className="inline-block px-8 py-3 rounded-xl bg-gold/10 border border-gold/30 text-gold font-bold uppercase tracking-widest shadow-[0_0_20px_rgba(212,175,55,0.15)]">
                Safe and Comfortable Journeys
              </div>
            </div>
          </div>

          <div className="relative h-[500px] w-full rounded-3xl overflow-hidden border border-dark-border/50 shadow-2xl">
            <Image
              src="/images/luxury_interior.png"
              alt="Luxury Car Interior"
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
