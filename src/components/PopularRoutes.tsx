"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";

export function PopularRoutes() {
  const { t } = useLanguage();

  const routes = [
    { name: "Ahmedabad → Rajkot", distance: "218 km", fare: "₹2,500+" },
    { name: "Ahmedabad → Surat", distance: "265 km", fare: "₹2,800+" },
    { name: "Ahmedabad → Vadodara", distance: "110 km", fare: "₹1,500+" },
    { name: "Ahmedabad → Udaipur", distance: "262 km", fare: "₹3,000+" },
    { name: "Ahmedabad → Mumbai", distance: "524 km", fare: "₹5,500+" },
    { name: "Ahmedabad → Jaipur", distance: "664 km", fare: "₹7,000+" },
    { name: "Ahmedabad → Mount Abu", distance: "221 km", fare: "₹2,800+" },
    { name: "Ahmedabad → Dwarka", distance: "450 km", fare: "₹5,000+" },
  ];

  return (
    <section className="py-24 px-6 bg-black relative border-t border-dark-border">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">{t.popularRoutesTitle}</h2>
          <p className="text-lg text-gray-400 font-light mb-6">{t.popularRoutesSubtitle}</p>
          <div className="w-24 h-1 bg-gold mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {routes.map((route, idx) => (
            <div key={idx} className="bg-dark-bg border border-dark-border p-6 rounded-2xl hover:border-gold/30 transition-colors flex flex-col justify-between h-full">
              <div>
                <h3 className="text-xl font-bold text-white mb-2">{route.name}</h3>
                <div className="flex items-center justify-between text-gray-400 text-sm mb-6">
                  <span>{t.distanceLabel} {route.distance}</span>
                  <span className="font-semibold text-gold">{t.startingFromLabel} {route.fare}</span>
                </div>
              </div>
              <a href="#booking" className="text-sm font-medium text-gold hover:text-white transition-colors uppercase tracking-wider inline-block">
                {t.bookNowLabel}
              </a>
            </div>
          ))}
        </div>

        <div className="text-center mt-16 p-8 bg-dark-bg border border-dark-border rounded-2xl">
          <p className="text-xl text-gray-300 font-light">
            {t.differentDestLabel}
          </p>
          <p className="mt-4">
            <a href="tel:+919426590305" className="inline-block px-8 py-3 rounded-full bg-gold text-black font-bold hover:bg-yellow-500 transition-colors shadow-lg">
              {t.callUsLabel} +91 94265 90305
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
