import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Clock3, MapPin, MessageCircleMore, ShieldCheck } from "lucide-react";
import { BUSINESS_PHONE, WHATSAPP_URL, trackLeadClick } from "@/lib/leadTracking";
import { toImageSrc } from "@/lib/image";

import heroBg from "@/assets/hero-bg.jpg";
import balconyNets from "@/assets/balcony-nets.jpg";
import pigeonNets from "@/assets/pigeon-nets.jpg";
import cricketNets from "@/assets/cricket-nets.jpg";
import heroBalconyHanger from "@/assets/hero-balcony-hanger.png";
import heroInvisibleGrilles from "@/assets/hero-invisible-grilles.jpg";

const slides = [
  { image: heroBg, title: "Balcony Safety Nets", subtitle: "Professional Installation in Chennai" },
  { image: balconyNets, title: "Children Safety Nets", subtitle: "Keep Your Kids Safe at Home" },
  { image: pigeonNets, title: "Pigeon Protection Nets", subtitle: "Stop Birds from Entering Your Balcony" },
  { image: cricketNets, title: "Cricket Practice Nets", subtitle: "Terrace & Ground Cricket Nets" },
  { image: heroBalconyHanger, title: "Balcony Hanger", subtitle: "Secure Storage Solution for Your Balcony" },
  { image: heroInvisibleGrilles, title: "Invisible Grilles", subtitle: "Transparent Safety Without Obstruction" },
];

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((p) => (p + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[85vh] md:h-[75vh] overflow-hidden">
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-1000 ${i === current ? 'opacity-100' : 'opacity-0'}`}
        >
          <img src={toImageSrc(slide.image)} alt={slide.title} className="w-full h-full object-cover" />
          <div className="parallax-overlay" />
        </div>
      ))}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10 px-4">
        <div className="mb-4 flex flex-wrap items-center justify-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-background/90">
          <span className="inline-flex items-center gap-1 rounded-full bg-background/10 px-3 py-1 backdrop-blur">
            <MapPin className="h-3.5 w-3.5" />
            Chennai Service
          </span>
          <span className="inline-flex items-center gap-1 rounded-full bg-background/10 px-3 py-1 backdrop-blur">
            <Clock3 className="h-3.5 w-3.5" />
            Free Site Visit
          </span>
          <span className="inline-flex items-center gap-1 rounded-full bg-background/10 px-3 py-1 backdrop-blur">
            <ShieldCheck className="h-3.5 w-3.5" />
            Professional Installation
          </span>
        </div>
        <h1 className="text-4xl md:text-6xl font-heading font-bold text-cta drop-shadow-lg mb-4">
          {slides[current].title}
        </h1>
        <p className="text-lg md:text-2xl font-heading text-background/90 mb-4">
          {slides[current].subtitle}
        </p>
        <p className="mb-8 max-w-xl text-sm leading-6 text-background/85 md:text-base">
          Call now for a fast quote, free inspection, and same-day installation support across Chennai.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <a
            href={`tel:${BUSINESS_PHONE}`}
            onClick={() => trackLeadClick("call", "hero")}
            className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-base font-semibold uppercase tracking-[0.05em] text-primary-foreground transition-colors hover:bg-primary/90 md:text-lg"
          >
            Call Now - Free Quote
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            onClick={() => trackLeadClick("whatsapp", "hero")}
            className="inline-flex items-center justify-center gap-2 rounded-md bg-[#25D366] px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-[#1ebe5a] md:text-lg"
          >
            <MessageCircleMore className="h-5 w-5" />
            WhatsApp Us
          </a>
        </div>
      </div>

      <button
        onClick={() => setCurrent((p) => (p - 1 + slides.length) % slides.length)}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-foreground/50 hover:bg-foreground/70 text-background rounded-full p-2 transition-colors"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={() => setCurrent((p) => (p + 1) % slides.length)}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-foreground/50 hover:bg-foreground/70 text-background rounded-full p-2 transition-colors"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    </section>
  );
};

export default HeroSlider;
