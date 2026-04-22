"use client";

import { useEffect, useRef } from "react";

const SCROLL_DISTANCE = 2000; // px para recorrer el video completo

export default function HeroSection() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.pause();

    // Target progress actualizado en cada scroll (barato)
    let targetProgress = 0;
    // Progress "suavizado" que sigue al target con lerp
    let currentProgress = 0;
    let rafId: number;
    let lastSeekTime = -1;

    const fastSeek = (t: number) => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const v = video as any;
      if (typeof v.fastSeek === "function") {
        v.fastSeek(t);
      } else {
        video.currentTime = t;
      }
    };

    // Loop de animación independiente del scroll
    const loop = () => {
      rafId = requestAnimationFrame(loop);

      // Lerp: acerca currentProgress a targetProgress
      const diff = targetProgress - currentProgress;
      if (Math.abs(diff) > 0.0001) {
        currentProgress += diff * 0.12; // 0.12 = velocidad de suavizado
      } else {
        currentProgress = targetProgress;
      }

      // Sólo hace seek si la diferencia es visible (≥1 frame a 30fps)
      if (video.duration && isFinite(video.duration)) {
        const targetTime = currentProgress * video.duration;
        if (Math.abs(targetTime - lastSeekTime) > 1 / 30) {
          fastSeek(targetTime);
          lastSeekTime = targetTime;
        }
      }

      // Overlay
      if (overlayRef.current) {
        overlayRef.current.style.opacity = String(
          Math.max(0.05, 0.55 - currentProgress * 0.5)
        );
      }

      // Texto
      if (textRef.current) {
        const t = Math.min(currentProgress * 3, 1);
        textRef.current.style.opacity = String(1 - t);
        textRef.current.style.transform = `translateY(${-t * 50}px)`;
      }
    };

    // Scroll: sólo actualiza el target (sin DOM pesado)
    const onScroll = () => {
      const wrapper = wrapperRef.current;
      if (!wrapper) return;
      const scrolled = Math.max(0, -wrapper.getBoundingClientRect().top);
      targetProgress = Math.min(scrolled / SCROLL_DISTANCE, 1);
    };

    rafId = requestAnimationFrame(loop);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div
      ref={wrapperRef}
      style={{ height: `calc(100vh + ${SCROLL_DISTANCE}px)` }}
    >
      <div className="sticky top-0 h-screen overflow-hidden flex items-center justify-center">
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover"
          src="/videos/miriamhero_scrub.mp4"
          muted
          playsInline
          preload="auto"
        />

        <div
          ref={overlayRef}
          className="absolute inset-0 bg-black"
          style={{ opacity: 0.55 }}
        />

        <div
          ref={textRef}
          className="relative z-10 text-center text-white px-4"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-[#d4b896] mb-4 font-light">
            Inicio
          </p>
          <h1
            className="text-5xl md:text-7xl font-bold tracking-wide mb-4"
            style={{ fontFamily: "Georgia, serif" }}
          >
            VEME BEAUTY
          </h1>
          <p className="text-lg md:text-xl font-light text-gray-200 mb-10 tracking-wide">
            Tu centro de estética en Barcelona
          </p>
          <a
            href="https://widget.treatwell.es/establecimiento/veme-beauty"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#b89b6e] hover:bg-[#a08558] text-white font-semibold uppercase tracking-widest text-sm px-10 py-4 transition-colors duration-300"
          >
            Reserva
          </a>
        </div>
      </div>
    </div>
  );
}
