import type { Metadata } from "next";
import Image from "next/image";
import Reveal from "../components/Reveal";
import TreatmentCard from "../components/TreatmentCard";
import BookingCTA from "../components/BookingCTA";
import { GROUPS, TREATMENTS, treatmentsByGroup } from "@/lib/treatments";
import { CATEGORY_IMAGES } from "@/lib/media";

export const metadata: Metadata = {
  title: "Tratamientos de estética y medicina estética",
  description: `Descubre los ${TREATMENTS.length} tratamientos de VEME Beauty en Barcelona: faciales, corporales, head spa, aparatología, antienvejecimiento, medicina estética y eliminación de tatuajes.`,
  alternates: { canonical: "/tratamientos" },
};

export default function Tratamientos() {
  return (
    <>
      <section className="relative isolate flex min-h-[64svh] items-end overflow-hidden bg-ink pt-28 text-white">
        <Image src={CATEGORY_IMAGES.facial} alt="" fill priority sizes="100vw" className="-z-10 object-cover object-[70%_center] animate-slow-zoom" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/80 via-black/45 to-black/10" />
        <div className="container-luxe pb-16 md:pb-24">
          <p className="eyebrow eyebrow-light animate-fade-up">Carta de tratamientos</p>
          <h1 className="mt-7 max-w-3xl font-display text-5xl leading-none sm:text-7xl animate-fade-up" style={{ animationDelay: "120ms" }}>
            {TREATMENTS.length} formas de <em className="text-gold-light">cuidarte</em>
          </h1>
          <p className="mt-6 max-w-xl text-lg font-light text-white/80 animate-fade-up" style={{ animationDelay: "240ms" }}>
            Estética avanzada, rituales de alta cosmética y medicina estética bajo un mismo techo.
          </p>
        </div>
      </section>

      {/* Índice de categorías */}
      <nav aria-label="Categorías" className="sticky top-20 z-30 border-b border-line bg-cream/95 backdrop-blur-md">
        <ul className="no-scrollbar container-luxe flex gap-8 overflow-x-auto py-4 text-[0.72rem] uppercase tracking-[0.18em] text-stone">
          {GROUPS.map((g) => (
            <li key={g.key} className="shrink-0">
              <a href={`#${g.key}`} className="link-underline hover:text-ink transition-colors">
                {g.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="bg-cream">
        {GROUPS.map((g, gi) => {
          const items = treatmentsByGroup(g.key);
          return (
            <section key={g.key} id={g.key} aria-labelledby={`h-${g.key}`} className={`scroll-mt-36 py-20 md:py-24 ${gi % 2 ? "bg-white" : ""}`}>
              <div className="container-luxe">
                <Reveal className="grid gap-6 md:grid-cols-[1fr_1.2fr] md:items-end">
                  <div>
                    <p className="eyebrow">{g.section === "medicina" ? "Medicina estética" : g.section === "tatuajes" ? "Especialidad" : "Estética"}</p>
                    <h2 id={`h-${g.key}`} className="mt-5 font-display text-4xl md:text-5xl">
                      {g.label}
                    </h2>
                  </div>
                  <p className="text-stone font-light md:text-lg">{g.intro}</p>
                </Reveal>
                <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {items.map((t, i) => (
                    <Reveal as="li" key={t.slug} delay={(i % 3) * 100}>
                      <TreatmentCard t={t} />
                    </Reveal>
                  ))}
                </ul>
              </div>
            </section>
          );
        })}
      </div>

      <BookingCTA title="¿No sabes cuál elegir?" text="Ven a conocernos: te hacemos un diagnóstico y te recomendamos el tratamiento ideal para ti." />
    </>
  );
}
