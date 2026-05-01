"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { Car, MapPin, Mail, Phone } from "lucide-react";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-black border-t border-dark-border py-16 px-6 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-gold to-transparent opacity-50"></div>
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">
        
        {/* Brand */}
        <div className="col-span-1 md:col-span-1">
          <Link href="/" className="text-2xl font-bold tracking-tight text-white flex items-center gap-2 mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-gold to-yellow-200">
              {t.brandName}
            </span>
          </Link>
          <p className="text-gray-400 text-sm leading-relaxed mb-6">
            {t.footerDesc}
          </p>
          <div className="flex gap-4">
            {/* Social Icons Placeholder */}
            <div className="w-8 h-8 rounded-full bg-dark-bg flex items-center justify-center border border-dark-border hover:border-gold cursor-pointer transition">
              <Car className="w-4 h-4 text-gold" />
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">Quick Links</h4>
          <ul className="space-y-4">
            <li>
              <Link href="/" className="text-gray-400 hover:text-gold transition text-sm flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-gold/50"></span> {t.navHome}
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-gray-400 hover:text-gold transition text-sm flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-gold/50"></span> {t.navAbout}
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-gray-400 hover:text-gold transition text-sm flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-gold/50"></span> {t.navContact}
              </Link>
            </li>
            <li>
              <Link href="/admin" className="text-gray-400 hover:text-gold transition text-sm flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-600"></span> {t.adminLink}
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="col-span-1 md:col-span-2">
          <h4 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">Contact Us</h4>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-gold shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-medium text-gray-300">{t.addressLabel}</p>
                <p className="text-sm text-gray-500">{t.addressValue}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Phone className="w-5 h-5 text-gold shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-medium text-gray-300">{t.phoneLabel}</p>
                <p className="text-sm text-gray-500">{t.phoneValue}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Mail className="w-5 h-5 text-gold shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-medium text-gray-300">{t.emailLabel}</p>
                <p className="text-sm text-gray-500">{t.emailValue}</p>
              </div>
            </div>
          </div>
        </div>

      </div>

      <div className="max-w-7xl mx-auto border-t border-dark-border mt-12 pt-8 text-center text-xs text-gray-600 flex flex-col md:flex-row justify-between items-center gap-4">
        <p>&copy; {new Date().getFullYear()} {t.brandName}. All rights reserved.</p>
        <div className="flex gap-4">
          <Link href="/privacy" className="hover:text-gray-400 transition">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-gray-400 transition">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
