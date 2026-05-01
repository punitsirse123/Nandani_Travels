"use client";

import Link from "next/link";
import { LanguageToggle } from "./LanguageToggle";
import { useLanguage } from "@/context/LanguageContext";

export function Header() {
  const { t } = useLanguage();
  
  return (
    <header className="relative z-50 p-6 flex justify-between items-center max-w-[1400px] mx-auto w-full">
      <Link href="/" className="text-3xl font-extrabold tracking-tight text-white flex items-center gap-2">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-gold to-yellow-200 drop-shadow-md">
          {t.brandName}
        </span>
      </Link>
      <div className="flex items-center gap-6">
        <div className="hidden md:flex gap-6 mr-4">
          <Link href="/" className="text-sm font-medium text-gray-300 hover:text-gold transition-colors duration-300">
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
  );
}
