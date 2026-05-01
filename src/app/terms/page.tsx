"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useLanguage } from "@/context/LanguageContext";

export default function TermsOfService() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-black flex flex-col font-outfit">
      <Header />
      
      <main className="flex-1 max-w-4xl mx-auto w-full p-6 py-20">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4">Terms of Service</h1>
          <div className="w-16 h-1 bg-gold rounded-full"></div>
        </div>

        <div className="space-y-8 text-gray-300 leading-relaxed font-light">
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">1. Acceptance of Terms</h2>
            <p>By accessing and using the {t.brandName} website and services, you accept and agree to be bound by the terms and provision of this agreement. In addition, when using these particular services, you shall be subject to any posted guidelines or rules applicable to such services.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">2. Provision of Services</h2>
            <p>{t.brandName} provides luxury intercity car rental and chauffeur services. We reserve the right to modify, suspend or discontinue any part of our service at any time without prior notice.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">3. Booking and Cancellation</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>All bookings are subject to vehicle availability.</li>
              <li>Estimated fares provided by the booking widget are calculated based on standard distance metrics. The final fare may vary slightly due to detours, waiting times, or toll charges not included in the base calculation.</li>
              <li>Cancellations must be made at least 12 hours prior to the scheduled pickup time to avoid cancellation fees.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">4. User Responsibilities</h2>
            <p>Users agree to provide accurate and complete information when making a booking. Users are responsible for maintaining the condition of the rented vehicles during transit. Any damages caused by the user or their party will be billed directly to the user.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">5. Limitation of Liability</h2>
            <p>In no event shall {t.brandName}, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.</p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
