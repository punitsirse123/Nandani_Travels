"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";

export function FeaturesSection() {
  const { t } = useLanguage();
  const features = [
    {
      icon: "👨‍✈️",
      title: t.feature1Title,
      desc: t.feature1Desc,
    },
    {
      icon: "🚗",
      title: t.feature2Title,
      desc: t.feature2Desc,
    },
    {
      icon: "💰",
      title: t.feature3Title,
      desc: t.feature3Desc,
    },
    {
      icon: "📞",
      title: t.feature4Title,
      desc: t.feature4Desc,
    },
  ];

  return (
    <section className="pt-12 pb-24 px-6 bg-black relative border-t border-dark-border">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">{t.featuresTitle}</h2>
          <div className="w-24 h-1 bg-gold mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <div key={idx} className="bg-dark-bg border border-dark-border p-8 rounded-2xl hover:border-gold/50 hover:-translate-y-2 transition-all duration-300 group">
              <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300 drop-shadow-[0_0_15px_rgba(212,175,55,0.2)]">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed text-sm">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
