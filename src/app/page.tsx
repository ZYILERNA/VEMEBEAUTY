import Image from "next/image";
import Link from "next/link";
import HeroSection from "./components/HeroSection";
import Reveal from "./components/Reveal";
import TreatmentCard from "./components/TreatmentCard";
import BrandStrip from "./components/BrandStrip";
import BookingCTA from "./components/BookingCTA";
import ReelStrip from "./components/ReelStrip";
import { FEATURED, HOME_CATEGORIES, TREATMENTS, BRANDS } from "@/lib/treatments";
import { CATEGORY_IMAGES } from "@/lib/media";
import { SITE, fullAddress } from "@/lib/site";

export const metadata = {
  alternates: { canonical: "/" },
};

const PILLARS = [
  {
    title: "Diagnóstico personalizado",
    text: "Analizamos tu piel y tus objetivos antes de cada tratamiento para diseñar un protocolo a tu medida.",
  },
  {
    title: "Tecnología de referencia",
    text: "Thermage FLX, Morpheus8, Fotona 4D, Ultraformer III, PicoCare o Hydrafacial: las plataformas más avanzadas.",
  },
  {
    title: "Firmas de alta cosmética",
    text: "Valmont, Biologique Recherche, Natura Bissé, SkinCeuticals, Kérastase y más firmas de prestigio.",
  },
  {
    title: "Equipo médico y estético",
    text: "Profesionales de la estética y de la medicina estética trabajando juntos para resultados naturales.",
  },
];

const REELS = [
  { src: "/videos/reel-dia.mp4", poster: "/images/posters/reel-dia.jpg", title: "Un día en VEME" },
  { src: "/videos/reel-presentacion.mp4", poster: "/images/posters/reel-presentacion.jpg", title: "Nuestro centro" },
  { src: "/videos/reel-luis.mp4", poster: "/images/posters/reel-luis.jpg", title: "Láser con Luis" },
  { src: "/videos/reel-pico.mp4", poster: "/images/posters/reel-pico.jpg", title: "Pico tatuajes" },
];

export default function Home() {
  return (
    <>
      <HeroSection />

      {/* Introducción */}
      <section id="descubre" className="bg-cream py-24 md:py-36">
        <div className="container-luxe grid items-center gap-16 lg:grid-cols-2">
          <Reveal>
            <p className="eyebrow">Bienvenida a VEME Beauty</p>
            <h2 className="mt-6 font-display text-4xl leading-tight md:text-6xl">
              Belleza consciente, <em className="text-gold-deep">resultados reales</em>
            </h2>
            <p className="mt-8 text-lg font-light leading-relaxed text-stone">
              En VEME Beauty unimos la estética avanzada y la medicina estética en un espacio cálido y luminoso junto al
              Arc de Triomf. Cada tratamiento empieza escuchándote: estudiamos tu piel, tu cabello y tu estilo de vida
              para recomendarte solo lo que de verdad necesitas.
            </p>
            <dl className="mt-12 grid grid-cols-3 gap-6 border-t border-line pt-10">
              {[
                { n: `${TREATMENTS.length}`, l: "tratamientos" },
                { n: `${BRANDS.length}`, l: "firmas premium" },
                { n: SITE.reviews.rating.toLocaleString("es-ES"), l: `valoración en ${SITE.reviews.source}` },
              ].map((s) => (
                <div key={s.l}>
                  <dt className="sr-only">{s.l}</dt>
                  <dd className="font-display text-4xl text-ink md:text-5xl">{s.n}</dd>
                  <dd className="mt-2 text-[0.62rem] uppercase leading-snug tracking-[0.12em] text-mist sm:text-xs sm:tracking-[0.18em]">{s.l}</dd>
                </div>
              ))}
            </dl>
            <Link href="/sobre-nosotros" className="btn btn-outline mt-12">
              Conoce el centro
            </Link>
          </Reveal>
          <Reveal delay={150} className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
              <Image
                src={CATEGORY_IMAGES.clinica}
                alt="Recepción del centro VEME Beauty en Barcelona"
                fill
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover object-[65%_center]"
              />
            </div>
            <div className="absolute -bottom-10 -left-6 hidden w-56 overflow-hidden rounded-sm shadow-2xl ring-8 ring-cream md:block">
              <Image
                src="/images/imagen_2024-08-08_134248810-1024x682.png"
                alt="Detalle del centro VEME Beauty"
                width={1024}
                height={682}
                sizes="224px"
                className="h-auto w-full"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Categorías */}
      <section aria-labelledby="categorias" className="bg-white py-24 md:py-32">
        <div className="container-luxe">
          <Reveal className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="eyebrow">Nuestros servicios</p>
              <h2 id="categorias" className="mt-6 font-display text-4xl md:text-6xl">
                Un tratamiento para cada momento
              </h2>
            </div>
            <Link href="/tratamientos" className="btn btn-outline">
              Ver los {TREATMENTS.length} tratamientos
            </Link>
          </Reveal>

          <ul className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {HOME_CATEGORIES.map((c, i) => (
              <Reveal as="li" key={c.title} delay={(i % 3) * 120}>
                <Link
                  href={c.href}
                  className="group relative block aspect-[4/5] overflow-hidden rounded-sm bg-ink text-white sm:aspect-[3/4]"
                >
                  {c.image && (
                    <Image
                      src={c.image}
                      alt=""
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover object-[68%_center] opacity-85 transition-transform duration-[1.6s] ease-[var(--ease-luxe)] group-hover:scale-105"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-8">
                    <h3 className="font-display text-4xl">{c.title}</h3>
                    <p className="mt-3 max-w-xs text-sm font-light text-white/80">{c.text}</p>
                    <span className="mt-6 inline-flex items-center gap-2 text-[0.7rem] uppercase tracking-[0.22em] text-gold-light">
                      Explorar
                      <span className="transition-transform duration-500 group-hover:translate-x-1" aria-hidden>
                        →
                      </span>
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <BrandStrip />

      {/* Destacados */}
      <section aria-labelledby="destacados" className="bg-cream py-24 md:py-32">
        <div className="container-luxe">
          <Reveal className="max-w-2xl">
            <p className="eyebrow">Los más solicitados</p>
            <h2 id="destacados" className="mt-6 font-display text-4xl md:text-6xl">
              Tratamientos destacados
            </h2>
            <p className="mt-6 text-stone font-light">
              Los favoritos de nuestras clientas: resultados visibles, protocolos seguros y la tecnología más avanzada.
            </p>
          </Reveal>
          <ul className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {FEATURED.map((t, i) => (
              <Reveal as="li" key={t.slug} delay={(i % 4) * 100}>
                <TreatmentCard t={t} />
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Por qué VEME */}
      <section aria-labelledby="porque" className="relative overflow-hidden bg-ink py-24 text-white md:py-32">
        <div className="container-luxe grid gap-16 lg:grid-cols-[1fr_1.2fr]">
          <Reveal>
            <p className="eyebrow eyebrow-light">Por qué VEME</p>
            <h2 id="porque" className="mt-6 font-display text-4xl md:text-6xl">
              La excelencia está en <em className="text-gold-light">los detalles</em>
            </h2>
            <p className="mt-8 max-w-md font-light text-white/75">
              Desde la primera consulta hasta el seguimiento, cuidamos cada paso para que te sientas en las mejores manos.
            </p>
          </Reveal>
          <ol className="grid gap-px overflow-hidden rounded-sm bg-white/10 sm:grid-cols-2">
            {PILLARS.map((p, i) => (
              <Reveal as="li" key={p.title} delay={i * 100} className="bg-ink p-8 md:p-10">
                <span className="font-display text-5xl text-gold/70">0{i + 1}</span>
                <h3 className="mt-6 font-display text-2xl">{p.title}</h3>
                <p className="mt-3 text-sm font-light leading-relaxed text-white/70">{p.text}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Reels / Instagram */}
      <section aria-labelledby="asi-es-veme" className="bg-white py-24 md:py-32">
        <div className="container-luxe">
          <Reveal className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="eyebrow">{SITE.instagram.handle}</p>
              <h2 id="asi-es-veme" className="mt-6 font-display text-4xl md:text-6xl">
                Así es VEME
              </h2>
              <p className="mt-6 max-w-lg text-stone font-light">
                El día a día del centro, nuestro equipo y los resultados de nuestras clientas.
              </p>
            </div>
            <a href={SITE.instagram.url} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
              Síguenos en Instagram
            </a>
          </Reveal>
          <Reveal delay={120} className="mt-14">
            <ReelStrip reels={REELS} />
          </Reveal>
        </div>
      </section>

      <BookingCTA />

      {/* Ubicación */}
      <section aria-labelledby="ubicacion" className="bg-cream py-24 md:py-32">
        <div className="container-luxe grid gap-14 lg:grid-cols-[1fr_1.4fr] lg:items-center">
          <Reveal>
            <p className="eyebrow">Encuéntranos</p>
            <h2 id="ubicacion" className="mt-6 font-display text-4xl md:text-6xl">
              En el corazón de Barcelona
            </h2>
            <address className="mt-8 not-italic text-lg font-light text-stone">
              {fullAddress}
              <span className="block text-base text-mist">{SITE.address.area} · Metro L1 Arc de Triomf</span>
            </address>
            <dl className="mt-8 space-y-3 text-sm">
              {SITE.hours.map((h) => (
                <div key={h.days} className="flex max-w-sm justify-between border-b border-line pb-3">
                  <dt className="text-stone">{h.days}</dt>
                  <dd className={h.spec ? "text-ink" : "text-mist"}>{h.time}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href={SITE.mapsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                Cómo llegar
              </a>
              <a href={SITE.phones[0].href} className="btn btn-outline">
                Llamar
              </a>
            </div>
          </Reveal>
          <Reveal delay={150} className="relative aspect-[4/3] overflow-hidden rounded-sm ring-1 ring-line">
            <iframe
              src={SITE.mapsEmbed}
              title="Mapa de VEME Beauty en Barcelona"
              className="absolute inset-0 h-full w-full grayscale-[0.6] sepia-[0.15]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </Reveal>
        </div>
      </section>
    </>
  );
}
