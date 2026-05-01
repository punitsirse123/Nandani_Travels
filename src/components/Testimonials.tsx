"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";

export function Testimonials() {
  const { t } = useLanguage();
  
  const reviews = [
    {
      name: "Ramesh P.",
      location: "Ahmedabad",
      quote: "Booked a cab to Udaipur for a family trip. Driver was on time, car was clean and comfortable throughout the journey. Will book again.",
    },
    {
      name: "Priya S.",
      location: "Surat",
      quote: "Used Nandani Travels for Ahmedabad to Mumbai. Fare was exactly what was shown at booking. No issues at all — smooth experience.",
    },
    {
      name: "Ankit M.",
      location: "Gandhinagar",
      quote: "Driver was very polite and knew the route well. The car was well-maintained. Good service for the price. Recommended.",
    },
  ];

  return (
    <section className="py-24 px-6 bg-black relative border-t border-dark-border">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">{t.testimonialsTitle}</h2>
          <div className="w-24 h-1 bg-gold mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <div key={idx} className="bg-dark-bg border border-dark-border p-8 rounded-3xl shadow-2xl flex flex-col justify-between h-full relative">
              <div className="text-gold text-2xl mb-6">
                ⭐⭐⭐⭐⭐
              </div>
              <p className="text-gray-300 leading-relaxed font-light mb-8 italic">
                "{review.quote}"
              </p>
              <div>
                <h4 className="text-white font-bold">{review.name}</h4>
                <p className="text-gray-500 text-sm">{review.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
