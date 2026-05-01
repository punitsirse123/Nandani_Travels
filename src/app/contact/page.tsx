"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useLanguage } from "@/context/LanguageContext";
import { MapPin, Mail, Phone } from "lucide-react";
import Image from "next/image";

export default function ContactPage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-black flex flex-col font-outfit">
      <Header />

      <main className="flex-1 max-w-7xl mx-auto w-full p-6 py-20">
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500 mb-6">
            {t.contactTitle}
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light">
            {t.contactSubtitle}
          </p>
          <div className="w-24 h-1 bg-gold mx-auto rounded-full mt-8"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Contact Details Cards */}
          <div className="space-y-6">
            <div className="bg-dark-bg border border-dark-border p-8 rounded-3xl flex items-start gap-6 hover:border-gold/30 transition-colors group">
              <div className="w-16 h-16 rounded-2xl bg-black flex items-center justify-center shrink-0 border border-dark-border group-hover:border-gold/50 transition-colors shadow-lg">
                <MapPin className="w-7 h-7 text-gold" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">{t.addressLabel}</h3>
                <p className="text-gray-400 leading-relaxed text-lg">{t.addressValue}</p>
              </div>
            </div>

            <div className="bg-dark-bg border border-dark-border p-8 rounded-3xl flex items-start gap-6 hover:border-gold/30 transition-colors group">
              <div className="w-16 h-16 rounded-2xl bg-black flex items-center justify-center shrink-0 border border-dark-border group-hover:border-gold/50 transition-colors shadow-lg">
                <Phone className="w-7 h-7 text-gold" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">{t.phoneLabel}</h3>
                <p className="text-gray-400 leading-relaxed text-lg">{t.phoneValue}</p>
              </div>
            </div>

            <div className="bg-dark-bg border border-dark-border p-8 rounded-3xl flex items-start gap-6 hover:border-gold/30 transition-colors group">
              <div className="w-16 h-16 rounded-2xl bg-black flex items-center justify-center shrink-0 border border-dark-border group-hover:border-gold/50 transition-colors shadow-lg">
                <Mail className="w-7 h-7 text-gold" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">{t.emailLabel}</h3>
                <p className="text-gray-400 leading-relaxed text-lg">{t.emailValue}</p>
              </div>
            </div>
          </div>

          {/* Visuals */}
          <div className="relative h-full min-h-[500px] w-full rounded-3xl overflow-hidden border border-dark-border/50 shadow-2xl">
            <Image
              src="/images/chauffeur_service.png"
              alt="Professional Chauffeur Service"
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            <div className="absolute bottom-8 left-8 right-8">
              <div className="bg-black/60 backdrop-blur-md border border-white/10 p-6 rounded-2xl">
                <h4 className="text-gold font-bold text-lg mb-2">We Respond Quickly</h4>
                <p className="text-gray-300">Whether it’s a booking, inquiry, or complaint, send us a message and we’ll get back to you as soon as possible with the right support and resolution.</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
