import { useState, useEffect } from "react";
import { toImageSrc, type ImageLike } from "@/lib/image";
import logo1 from "@/assets/1.png";
import logo2 from "@/assets/2.png";
import logo3 from "@/assets/3.png";
import logo4 from "@/assets/4.png";
import logo5 from "@/assets/5.png";
import logo6 from "@/assets/6.png";
import logo7 from "@/assets/7.png";
import logo8 from "@/assets/8.png";
import logo9 from "@/assets/9.png";
import logo10 from "@/assets/10.png";

interface Logo {
  id: number;
  name: string;
  src: ImageLike;
}

interface LogoCarouselProps {
  logos?: Logo[];
}

const defaultLogos: Logo[] = [
  {
    id: 1,
    name: "Logo 1",
    src: logo1,
  },
  {
    id: 2,
    name: "Logo 2",
    src: logo2,
  },
  {
    id: 3,
    name: "Logo 3",
    src: logo3,
  },
  {
    id: 4,
    name: "Logo 4",
    src: logo4,
  },
  {
    id: 5,
    name: "Logo 5",
    src: logo5,
  },
  {
    id: 6,
    name: "Logo 6",
    src: logo6,
  },
  {
    id: 7,
    name: "Logo 7",
    src: logo7,
  },
  {
    id: 8,
    name: "Logo 8",
    src: logo8,
  },
  {
    id: 9,
    name: "Logo 9",
    src: logo9,
  },
  {
    id: 10,
    name: "Logo 10",
    src: logo10,
  },
];

const LogoCarousel: React.FC<LogoCarouselProps> = ({ logos = defaultLogos }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState(0);

  const itemsPerView = isMobile ? 2 : 4;
  const totalSlides = logos.length; // Use total logos for infinite loop

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 639px)");
    const syncViewport = () => setIsMobile(mediaQuery.matches);

    syncViewport();
    mediaQuery.addEventListener("change", syncViewport);

    return () => mediaQuery.removeEventListener("change", syncViewport);
  }, []);

  // Wheel scroll handler
  useEffect(() => {
    const handleWheelScroll = (e: WheelEvent) => {
      e.preventDefault();
      setIsAutoScrolling(false);
      
      if (e.deltaY > 0) {
        setCurrentIndex((prev) => (prev + 1) % totalSlides);
      } else {
        setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
      }
      
      setTimeout(() => setIsAutoScrolling(true), 5000);
    };

    document.addEventListener("wheel", handleWheelScroll, { passive: false });
    return () => document.removeEventListener("wheel", handleWheelScroll);
  }, [totalSlides]);

  useEffect(() => {
    if (!isAutoScrolling) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalSlides);
    }, 2000); // Auto scroll every 2 seconds

    return () => clearInterval(interval);
  }, [isAutoScrolling, totalSlides, itemsPerView]);

  const handlePrevious = () => {
    setIsAutoScrolling(false);
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
    // Resume auto-scroll after 10 seconds
    setTimeout(() => setIsAutoScrolling(true), 10000);
  };

  const handleNext = () => {
    setIsAutoScrolling(false);
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
    // Resume auto-scroll after 10 seconds
    setTimeout(() => setIsAutoScrolling(true), 10000);
  };

  // Create visible logos with wrapping using modulo
  const visibleLogos = Array.from({ length: itemsPerView }, (_, i) => 
    logos[(currentIndex + i) % logos.length]
  );

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsDragging(true);
    setDragStart(e.clientX);
    setIsAutoScrolling(false);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    e.preventDefault();
  };

  const handleMouseUp = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) {
      setIsDragging(false);
      return;
    }
    
    const endX = e.clientX;
    const distance = dragStart - endX;
    
    // Drag left (positive distance) - show next logo
    if (distance > 30) {
      setCurrentIndex((prev) => (prev + 1) % totalSlides);
    }
    // Drag right (negative distance) - show previous logo
    else if (distance < -30) {
      setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
    }
    
    setIsDragging(false);
    setTimeout(() => setIsAutoScrolling(true), 5000);
  };

  return (
    <section className="bg-gradient-to-r from-background to-background py-12 md:py-16">
      <div className="container">
        {/* Section Title */}
        <div className="mb-8 text-center md:mb-12">
          <h2 className="section-title mb-4">Our Trusted Partners</h2>
          <p className="text-muted-foreground text-base md:text-lg">
            Working with industry-leading organizations
          </p>
        </div>

        {/* Carousel Container */}
        <div 
          className="relative flex items-center justify-center max-w-4xl mx-auto select-none"
        >

          {/* Logos Container */}
          <div 
            className="flex-1 overflow-hidden cursor-grab active:cursor-grabbing select-none" 
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
          >
            <div 
              className="flex gap-0 transition-transform duration-400 ease-out"
              style={{ transform: `translateX(-${(currentIndex % totalSlides) * (100 / itemsPerView)}%)` }}
            >
              {/* Render logos multiple times for seamless infinite scroll */}
              {[...logos, ...logos, ...logos].map((logo, index) => (
                <div
                  key={`${logo.id}-${Math.floor(index / logos.length)}`}
                  className="flex-shrink-0"
                  style={{ width: `${100 / itemsPerView}%` }}
                >
                  <div className="flex h-28 items-center justify-center rounded-xl bg-white p-2 shadow-sm sm:h-32 sm:p-2 mx-1">
                    <img
                      src={toImageSrc(logo.src)}
                      alt={logo.name}
                      className="max-h-16 max-w-full object-contain sm:max-h-20 md:max-h-24"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogoCarousel;
