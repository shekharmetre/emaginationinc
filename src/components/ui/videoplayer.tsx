"use client";
import React, { useRef, useEffect } from "react";

interface VideoPlayerProps {
  src: string;
  poster?: string;
  className?: string;
  type?: string; // e.g. "video/mp4"
}

export default function VideoPlayer({ src, poster, className, type = "video/mp4" }: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const videoEl = videoRef.current;
    if (!videoEl) return;

    // Callback for IntersectionObserver
    const handleIntersect: IntersectionObserverCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          videoEl.play().catch(() => {
            // Handle play promise rejection silently
          });
        } else {
          videoEl.pause();
          videoEl.currentTime = 0; // optional: reset video time on exit
        }
      });
    };

    // Create observer
    const observer = new IntersectionObserver(handleIntersect, {
      threshold: 0.5, // play when 50% visible
    });

    observer.observe(videoEl);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <video
      ref={videoRef}
      src={src}
      className={className + "w-full object-fill h-[14rem]"}
      muted
      playsInline
      preload="metadata"
      controls={false} // hide controls for cleaner UI or customize
      loop
    />
  );
}
