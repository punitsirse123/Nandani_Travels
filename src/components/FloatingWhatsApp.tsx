"use client";

import React from "react";

export function FloatingWhatsApp() {
  const message = encodeURIComponent("I would like to book a cab from Ahmedabad.");
  const phone = "+919724945267";

  return (
    <a
      href={`https://wa.me/${phone}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-[#25D366] hover:bg-[#128C7E] text-white p-4 rounded-full shadow-[0_0_20px_rgba(37,211,102,0.4)] z-50 transition-all hover:scale-110 flex items-center justify-center"
      aria-label="Chat on WhatsApp"
    >
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.031 0C5.395 0 0 5.395 0 12.031c0 2.128.55 4.195 1.597 6.012L.15 24l6.108-1.602A11.94 11.94 0 0012.031 24c6.635 0 12.031-5.396 12.031-12.031C24.062 5.395 18.666 0 12.031 0zm6.541 17.202c-.279.791-1.61 1.503-2.222 1.564-.543.053-1.228.165-3.666-.845-2.996-1.242-4.945-4.298-5.093-4.496-.148-.198-1.217-1.62-1.217-3.093 0-1.472.766-2.197 1.042-2.485.275-.287.603-.358.802-.358.199 0 .398.003.568.01.185.008.431-.072.673.513.309.742 1.048 2.56 1.14 2.748.092.189.155.409.043.633-.112.224-.171.358-.339.553-.169.195-.355.422-.505.578-.162.167-.333.348-.142.678.192.33.854 1.411 1.83 2.285 1.258 1.127 2.316 1.473 2.651 1.629.336.155.534.128.736-.102.201-.231.867-1.01 1.098-1.358.232-.349.464-.29.765-.178.301.112 1.905.898 2.233 1.063.328.165.547.247.627.385.08.138.08.8-.199 1.591z" />
      </svg>
    </a>
  );
}
