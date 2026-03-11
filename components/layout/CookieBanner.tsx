"use client";

import { useState, useEffect } from "react";

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const dismissed = localStorage.getItem("cookieBannerDismissed");
    if (!dismissed) {
      setTimeout(() => setIsVisible(true), 1000);
    } else {
      setIsDismissed(true);
    }
  }, []);

  const handleDismiss = () => {
    localStorage.setItem("cookieBannerDismissed", "true");
    setIsVisible(false);
    setTimeout(() => setIsDismissed(true), 400);
  };

  if (isDismissed) return null;

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 cookie-banner ${
        isVisible ? "translate-y-0" : "translate-y-full"
      } transition-transform duration-400`}
    >
      <div className="bg-bm-blue text-white px-4 py-4">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-center md:text-left">
            This website uses cookies to ensure you get the best experience on
            our website.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="/privacy"
              className="text-sm text-white underline hover:text-white/80 transition-colors"
            >
              More info
            </a>
            <button
              onClick={handleDismiss}
              className="px-6 py-2 bg-white text-bm-blue font-medium rounded hover:bg-gray-100 transition-colors"
            >
              OK
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
