"use client";

import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ScrollableImageGalleryProps {
  images: string[];
  autoScroll?: boolean; // enable/disable auto scroll
  interval?: number; // time in ms
  className?: string;
  imageClassName?: string;
}

export default function ScrollableImageGallery({
  images,
  autoScroll = true,
  interval = 3000,
  className,
  imageClassName = "rounded-2xl ",
}: ScrollableImageGalleryProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { clientWidth } = scrollRef.current;
      const newIndex =
        direction === "left"
          ? Math.max(0, activeIndex - 1)
          : Math.min(images.length - 1, activeIndex + 1);

      setActiveIndex(newIndex);
      scrollRef.current.scrollTo({
        left: newIndex * clientWidth,
        behavior: "smooth",
      });
    }
  };

  // Auto scroll effect
  useEffect(() => {
    if (!autoScroll || images.length <= 1) return;
    const timer = setInterval(() => {
      if (scrollRef.current) {
        const { clientWidth } = scrollRef.current;
        const nextIndex = (activeIndex + 1) % images.length;
        setActiveIndex(nextIndex);
        scrollRef.current.scrollTo({
          left: nextIndex * clientWidth,
          behavior: "smooth",
        });
      }
    }, interval);

    return () => clearInterval(timer);
  }, [activeIndex, autoScroll, interval, images.length]);

  // Track scroll manually (for swipe / drag on mobile)
  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const index = Math.round(scrollLeft / clientWidth);
      setActiveIndex(index);
    }
  };

  return (
    <div className={`relative w-full ${className}`}>
      {/* Scrollable container */}
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        className="flex gap-4 overflow-x-auto scroll-smooth scrollbar-hide lg:overflow-hidden snap-x snap-mandatory"
      >
        {images.map(
          (src, idx) =>
            src && ( // Add a check to ensure src is not an empty string
              <div
                key={idx}
                className={`relative flex-shrink-0 w-full h-48 md:h-64 overflow-hidden snap-center ${imageClassName}`}
              >
                <Image
                  src={src}
                  alt={`Gallery image ${idx + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            )
        )}
      </div>

      {/* Desktop navigation buttons */}
      <button
        onClick={() => scroll("left")}
        className="hidden lg:flex absolute top-1/2 left-2 -translate-y-1/2 p-2 rounded-full bg-black/50 hover:bg-black/70 text-white"
      >
        <ChevronLeft size={24} />
      </button>

      <button
        onClick={() => scroll("right")}
        className="hidden lg:flex absolute top-1/2 right-2 -translate-y-1/2 p-2 rounded-full bg-black/50 hover:bg-black/70 text-white"
      >
        <ChevronRight size={24} />
      </button>

      {/* Bullets */}
      <div className="absolute bottom-2 w-full flex justify-center gap-2">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => {
              if (scrollRef.current) {
                const { clientWidth } = scrollRef.current;
                setActiveIndex(idx);
                scrollRef.current.scrollTo({
                  left: idx * clientWidth,
                  behavior: "smooth",
                });
              }
            }}
            className={`h-2 w-2 rounded-full transition-all ${activeIndex === idx ? "bg-white w-4" : "bg-gray-400"
              }`}
          />
        ))}
      </div>
    </div>
  );
} 