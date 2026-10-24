"use client";

import { useEffect, useRef, useState } from "react";

export interface Reel {
  src: string;
  poster: string;
  title: string;
}

/**
 * Tira de vídeos verticales tipo Instagram. Se reproducen en silencio al entrar en pantalla;
 * un toque activa o quita el sonido.
 */
export default function ReelStrip({ reels }: { reels: Reel[] }) {
  return (
    <ul className="no-scrollbar -mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-2 md:mx-0 md:grid md:grid-cols-4 md:overflow-visible md:px-0">
      {reels.map((r) => (
        <ReelItem key={r.src} reel={r} />
      ))}
    </ul>
  );
}

function ReelItem({ reel }: { reel: Reel }) {
  const ref = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);

  useEffect(() => {
    const v = ref.current;
    if (!v || typeof IntersectionObserver === "undefined") return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting && !reduce) v.play().catch(() => {});
        else v.pause();
      },
      { threshold: 0.5 },
    );
    io.observe(v);
    return () => io.disconnect();
  }, []);

  const toggleSound = () => {
    const v = ref.current;
    if (!v) return;
    v.muted = !v.muted;
    setMuted(v.muted);
    if (v.paused) v.play().catch(() => {});
  };

  return (
    <li className="relative w-[72vw] shrink-0 snap-center sm:w-[45vw] md:w-auto">
      <div className="relative aspect-[9/16] overflow-hidden rounded-sm bg-ink">
        <video
          ref={ref}
          src={reel.src}
          poster={reel.poster}
          muted
          loop
          playsInline
          preload="none"
          className="h-full w-full object-cover"
        />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/70 to-transparent" />
        <p className="pointer-events-none absolute bottom-4 left-4 right-14 font-display text-xl text-white">{reel.title}</p>
        <button
          type="button"
          onClick={toggleSound}
          aria-label={muted ? `Activar sonido: ${reel.title}` : `Silenciar: ${reel.title}`}
          className="absolute bottom-4 right-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur transition hover:bg-white/35"
        >
          {muted ? (
            <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={1.6} viewBox="0 0 24 24" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 9.75 19.5 12m0 0 2.25 2.25M19.5 12l2.25-2.25M19.5 12l-2.25 2.25m-10.5-6 4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z" />
            </svg>
          ) : (
            <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={1.6} viewBox="0 0 24 24" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 0 1 0 12.728M16.463 8.288a5.25 5.25 0 0 1 0 7.424M6.75 8.25l4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z" />
            </svg>
          )}
        </button>
      </div>
    </li>
  );
}
