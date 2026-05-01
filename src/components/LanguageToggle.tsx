"use client";
import { useLanguage } from "@/context/LanguageContext";

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex bg-dark-card border border-dark-border rounded-full p-1 shadow-lg">
      {(["en", "hi", "gu"] as const).map((lang) => (
        <button
          key={lang}
          onClick={() => setLanguage(lang)}
          className={`px-3 py-1 text-sm rounded-full transition ${
            language === lang ? "bg-gold text-black font-semibold" : "text-gray-400 hover:text-white"
          }`}
        >
          {lang.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
