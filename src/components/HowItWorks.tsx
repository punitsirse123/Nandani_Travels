"use client";

import { useLanguage } from "@/context/LanguageContext";
import { Map, Car, CheckCircle } from "lucide-react";

export function HowItWorks() {
  const { t } = useLanguage();

  const steps = [
    {
      icon: <Map className="w-8 h-8 text-black" />,
      title: t.step1Title,
      desc: t.step1Desc,
    },
    {
      icon: <Car className="w-8 h-8 text-black" />,
      title: t.step2Title,
      desc: t.step2Desc,
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-black" />,
      title: t.step3Title,
      desc: t.step3Desc,
    },
  ];

  return (
    <section className="py-24 px-6 bg-dark-bg relative border-y border-dark-border">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">{t.howItWorksTitle}</h2>
          <div className="w-24 h-1 bg-gold mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 relative">
          {/* Connector Line */}
          <div className="hidden md:block absolute top-12 left-1/6 right-1/6 h-[1px] bg-dark-border z-0 w-2/3 mx-auto"></div>

          {steps.map((step, idx) => (
            <div key={idx} className="relative z-10 flex flex-col items-center text-center">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-gold to-yellow-600 flex items-center justify-center mb-8 shadow-[0_0_30px_rgba(212,175,55,0.3)] relative z-10">
                {step.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 relative z-10">{step.title}</h3>
              <p className="text-gray-400 leading-relaxed max-w-sm relative z-10">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
