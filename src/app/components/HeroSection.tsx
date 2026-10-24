"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { HERO_CLIPS } from "@/lib/media";
import { SITE } from "@/lib/site";

/** Orden de los clips de la portada (claves de HERO_CLIPS en lib/media.ts) */
const SEQUENCE = ["sala", "facial", "headspa", "terraza"] as const;
const CROSSFADE = 1.4; // segundos de fundido entre clips

export default function HeroSection() {
  const clips = SEQUENCE.map((k) => HERO_CLIPS[k]);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const [active, setActive] = useState(0);
  const [motion, setMotion] = useState(false);

  // Sólo reproducimos vídeo si el usuario no pide menos movimiento ni ahorro de datos
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const saveData = (navigator as any).connection?.saveData === true;
    setMotion(!reduce && !saveData);
  }, []);

  useEffect(() => {
    if (!motion) return;
    const current = videoRefs.current[active];
    const nextIndex = (active + 1) % clips.length;
    const next = videoRefs.current[nextIndex];
    if (!current) return;

    current.play().catch(() => {});
    if (next) next.preload = "auto";

    let advanced = false;
    const onTime = () => {
      if (advanced || !current.duration) return;
      if (current.currentTime >= current.duration - CROSSFADE) {
        advanced = true;
        if (next) {
          next.currentTime = 0;
          next.play().catch(() => {});
        }
        setActive(nextIndex);
      }
    };
    current.addEventListener("timeupdate", onTime);
    return () => current.removeEventListener("timeupdate", onTime);
  }, [active, motion, clips.length]);

  return (
    <section className="relative h-[100svh] min-h-[640px] w-full overflow-hidden bg-ink text-white">
      {/* Fondo: imagen fija siempre presente (carga instantánea) + vídeos encima */}
      <div className="absolute inset-0 animate-slow-zoom">
        <Image src={clips[0].poster} alt="" fill priority sizes="100vw" className="object-cover" />
        {motion &&
          clips.map((c, i) => (
            <video
              key={c.video}
              ref={(el) => {
                videoRefs.current[i] = el;
              }}
              className="absolute inset-0 h-full w-full object-cover transition-opacity ease-in-out"
              style={{ opacity: i === active ? 1 : 0, transitionDuration: `${CROSSFADE * 1000}ms` }}
              src={c.video}
              muted
              playsInline
              preload={i === 0 ? "auto" : "none"}
              aria-hidden
            />
          ))}
      </div>

      {/* Velos para legibilidad */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/35 to-black/10" />
      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/60 to-transparent" />

      <div className="relative z-10 flex h-full items-center">
        <div className="container-luxe">
          <div className="max-w-2xl">
            <p className="eyebrow eyebrow-light animate-fade-up">Estética &amp; medicina estética · Barcelona</p>
            <h1
              className="mt-7 font-display text-[3.2rem] leading-[0.98] sm:text-7xl lg:text-[5.6rem] animate-fade-up"
              style={{ animationDelay: "120ms" }}
            >
              El arte de cuidar
              <span className="block italic text-gold-light">tu belleza</span>
            </h1>
            <p
              className="mt-7 max-w-lg text-base sm:text-lg font-light text-white/85 animate-fade-up"
              style={{ animationDelay: "240ms" }}
            >
              Más de 40 tratamientos faciales, corporales, capilares y de medicina estética con las firmas y
              tecnologías más avanzadas, junto al Arc de Triomf.
            </p>
            <div className="mt-10 flex flex-wrap gap-4 animate-fade-up" style={{ animationDelay: "360ms" }}>
              <a href={SITE.bookingUrl} target="_blank" rel="noopener noreferrer" className="btn btn-gold">
                Reservar cita
              </a>
              <a href="/tratamientos" className="btn btn-outline-light">
                Ver tratamientos
              </a>
            </div>
            <a
              href={SITE.reviews.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-12 inline-flex items-center gap-3 text-sm text-white/80 hover:text-white transition-colors animate-fade-up"
              style={{ animationDelay: "480ms" }}
            >
              <span className="flex text-gold-light" aria-hidden>
                {"★★★★★"}
              </span>
              <span>
                <strong className="font-medium text-white">{SITE.reviews.rating.toLocaleString("es-ES")}</strong> ·{" "}
                {SITE.reviews.count} reseñas en {SITE.reviews.source}
              </span>
            </a>
          </div>
        </div>
      </div>

      <a
        href="#descubre"
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 flex flex-col items-center gap-3 text-[0.65rem] uppercase tracking-[0.3em] text-white/70 hover:text-white"
        aria-label="Bajar al contenido"
      >
        Descubre
        <span className="block h-10 w-px bg-white/60 animate-scroll-cue" />
      </a>
    </section>
  );
}
