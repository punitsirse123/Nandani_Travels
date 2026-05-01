import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "Nandani Travels – Outstation Cab from Ahmedabad | One-Way & Round Trip",
  description: "Book outstation cab from Ahmedabad to Rajkot, Surat, Mumbai, Udaipur, Jaipur & across India. AC cars, verified drivers, honest pricing. WhatsApp booking available. Call +91 95893 37752.",
  keywords: ["outstation cab from Ahmedabad", "car rental Ahmedabad", "one way taxi Ahmedabad", "Ahmedabad to Rajkot cab", "Ahmedabad to Surat taxi", "Ahmedabad to Mumbai cab", "Ahmedabad to Udaipur cab", "Ahmedabad to Jaipur taxi", "intercity cab Ahmedabad", "cab booking Ahmedabad", "Ahmedabad to Vadodara taxi", "Ahmedabad outstation taxi service"],
  openGraph: {
    title: "Nandani Travels – Outstation Cab from Ahmedabad",
    description: "AC cars, verified drivers, transparent pricing. Book one-way or round trip cab from Ahmedabad across India.",
    url: "https://nandani-travels.vercel.app",
    siteName: "Nandani Travels",
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} h-full antialiased font-sans`} suppressHydrationWarning>
      <body className="min-h-full flex flex-col bg-black text-white selection:bg-gold selection:text-black" suppressHydrationWarning>
        <LanguageProvider>
          {children}
          <FloatingWhatsApp />
        </LanguageProvider>
      </body>
    </html>
  );
}
