"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const slides = [
  {
    id: 1,
    image: "https://www.bmestates.com/content/images/slideshow/5.jpg",
    title: "",
    subtitle: "",
    cta: "",
    ctaLink: "",
  },
  {
    id: 2,
    image: "https://www.bmestates.com/content/images/slideshow/1.jpg",
    title: "Welcome to BM Estates",
    subtitle: "Specialist in Sales and Lettings",
    cta: "Get a free valuation",
    ctaLink: "/valuation",
  },
  {
    id: 3,
    image: "https://www.bmestates.com/content/images/slideshow/2.jpg",
    title: "Thinking of letting?",
    subtitle: "Read our in-depth landlords guide",
    cta: "Landlord guide",
    ctaLink: "/landlord-process",
  },
  {
    id: 4,
    image: "https://www.bmestates.com/content/images/slideshow/3.jpg",
    title: "Thinking of buying?",
    subtitle: "Read our in-depth buying guide",
    cta: "Buying guide",
    ctaLink: "/buying-process",
  },
  {
    id: 5,
    image: "https://www.bmestates.com/content/images/slideshow/4.jpg",
    title: "Where dreams come true",
    subtitle: "Time to take that opportunity",
    cta: "Contact Us",
    ctaLink: "/contact",
  },
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleImageLoad = (id: number) => {
    setLoadedImages(prev => new Set(prev).add(id));
  };

  return (
    <section className="home-slider-contain relative overflow-hidden" style={{ height: "calc(100vh - 80px)", marginTop: "80px" }}>
      <div className="slider-pro home-slider absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`sp-slide absolute inset-0 ${index === currentSlide ? "active" : ""}`}
            style={{ opacity: index === currentSlide ? 1 : 0, transition: "opacity 1s ease-in-out" }}
          >
            <img
              className="sp-image absolute inset-0 w-full h-full"
              src={slide.image}
              alt={slide.title || "BM Estates"}
              onLoad={() => handleImageLoad(slide.id)}
              style={{ 
                objectFit: "cover",
                backgroundColor: loadedImages.has(slide.id) ? "transparent" : "#1e7ce8"
              }}
            />
            <div className="custom-slider-layer absolute inset-0 flex items-center justify-center" style={{ backgroundColor: "rgba(0,0,0,0.3)" }}>
              <div className="text-center text-white max-w-3xl px-4">
                {slide.title && (
                  <>
                    <h2 
                      className="slider-title text-4xl md:text-6xl font-bold uppercase mb-4"
                      style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.5)" }}
                      dangerouslySetInnerHTML={{ __html: slide.title.replace("<br>", "<br/>") }}
                    />
                  </>
                )}
                {slide.subtitle && (
                  <h3 className="slider-subtitle text-xl md:text-2xl mb-6" style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.5)" }}>
                    {slide.subtitle}
                  </h3>
                )}
                {slide.cta && (
                  <Link
                    href={slide.ctaLink}
                    className="slider-btn inline-block px-8 py-3 bg-[#1e7ce8] text-white font-semibold rounded hover:bg-[#1565c0] transition-colors"
                  >
                    {slide.cta}
                  </Link>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="scroll-down absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white text-center" style={{ animation: "bounce 2s infinite" }}>
        <span className="block text-2xl mb-1">⬇</span>
        <p className="text-sm">Scroll Down</p>
      </div>
    </section>
  );
}
