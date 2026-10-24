"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Vídeo de ambiente para cabeceras. Se coloca sobre la imagen fija y aparece con un fundido
 * cuando ya puede reproducirse. No se carga en móvil, con ahorro de datos o con movimiento reducido.
 */
export default function AmbientVideo({ src, className = "" }: { src: string; className?: string }) {
  const [enabled, setEnabled] = useState(false);
  const [ready, setReady] = useState(false);
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const wide = window.matchMedia("(min-width: 768px)").matches;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const saveData = (navigator as any).connection?.saveData === true;
    setEnabled(!reduce && wide && !saveData);
  }, []);

  useEffect(() => {
    if (enabled) ref.current?.play().catch(() => {});
  }, [enabled]);

  if (!enabled) return null;

  return (
    <video
      ref={ref}
      src={src}
      muted
      loop
      playsInline
      autoPlay
      preload="auto"
      aria-hidden
      onCanPlay={() => setReady(true)}
      className={`transition-opacity duration-[1500ms] ${ready ? "opacity-100" : "opacity-0"} ${className}`}
    />
  );
}
