"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useLanguage } from "@/context/LanguageContext";

export default function PrivacyPolicy() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-black flex flex-col font-outfit">
      <Header />
      
      <main className="flex-1 max-w-4xl mx-auto w-full p-6 py-20">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4">Privacy Policy</h1>
          <div className="w-16 h-1 bg-gold rounded-full"></div>
        </div>

        <div className="space-y-8 text-gray-300 leading-relaxed font-light">
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">1. Information We Collect</h2>
            <p>At {t.brandName}, we collect information you provide directly to us, such as when you create or modify your account, request on-demand services, contact customer support, or otherwise communicate with us. This information may include: name, email, phone number, postal address, profile picture, payment method, and other information you choose to provide.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">2. How We Use Your Information</h2>
            <p>We use the information we collect about you to:</p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>Provide, maintain, and improve our services, including facilitating payments, sending receipts, providing products and services you request.</li>
              <li>Perform internal operations, including to prevent fraud and abuse of our services.</li>
              <li>Send you communications we think will be of interest to you, including information about products, services, promotions, and news.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">3. Sharing of Information</h2>
            <p>We may share the information we collect about you with vendors, consultants, marketing partners, and other service providers who need access to such information to carry out work on our behalf. We may also share information if we believe your actions are inconsistent with our User agreements or policies, or to protect the rights, property, and safety of {t.brandName} or others.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">4. Security</h2>
            <p>We take reasonable measures to help protect information about you from loss, theft, misuse and unauthorized access, disclosure, alteration and destruction.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">5. Contact Us</h2>
            <p>If you have any questions about this Privacy Policy, please contact us at bookings@nandanitravels.com.</p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
