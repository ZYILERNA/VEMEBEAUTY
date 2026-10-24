import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Reveal from "../components/Reveal";
import BrandStrip from "../components/BrandStrip";
import BookingCTA from "../components/BookingCTA";
import ReelStrip from "../components/ReelStrip";
import { CATEGORY_IMAGES } from "@/lib/media";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Sobre nosotros",
  description:
    "Conoce VEME Beauty: un centro de estética y medicina estética junto al Arc de Triomf de Barcelona, con un equipo especializado, las mejores firmas y tecnología de referencia.",
  alternates: { canonical: "/sobre-nosotros" },
};

const VALUES = [
  { title: "Excelencia", text: "Seleccionamos únicamente los dispositivos y productos con mayor evidencia científica y resultados probados." },
  { title: "Personalización", text: "Cada persona es única. Diseñamos protocolos a medida para cada piel, cada cabello y cada objetivo." },
  { title: "Naturalidad", text: "Buscamos que te veas como tú, en tu mejor versión. Sin excesos, sin gestos congelados." },
  { title: "Confianza", text: "Transparencia total en cada recomendación. Tu salud y tu bienestar son siempre lo primero." },
];

export default function SobreNosotros() {
  return (
    <>
      <section className="relative isolate flex min-h-[78svh] items-end overflow-hidden bg-ink pt-28 text-white">
        <video
          src="/videos/veme-clinica.mp4"
          poster="/images/posters/veme-clinica.jpg"
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 -z-10 h-full w-full object-cover"
          aria-hidden
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/80 via-black/50 to-black/20" />
        <div className="container-luxe pb-16 md:pb-24">
          <p className="eyebrow eyebrow-light animate-fade-up">Quiénes somos</p>
          <h1 className="mt-7 max-w-3xl font-display text-5xl leading-none sm:text-7xl animate-fade-up" style={{ animationDelay: "120ms" }}>
            Un refugio de belleza en <em className="text-gold-light">Barcelona</em>
          </h1>
        </div>
      </section>

      <section className="bg-cream py-24 md:py-32">
        <div className="container-luxe grid items-center gap-16 lg:grid-cols-2">
          <Reveal>
            <p className="eyebrow">Nuestra historia</p>
            <h2 className="mt-6 font-display text-4xl md:text-5xl">Estética avanzada con alma</h2>
            <div className="mt-8 space-y-5 text-lg font-light leading-relaxed text-stone">
              <p>
                VEME Beauty nació con una misión clara: ofrecer los tratamientos estéticos y de medicina estética más
                avanzados en un entorno exclusivo, cálido y profesional.
              </p>
              <p>
                Junto al Arc de Triomf, nuestro equipo combina años de experiencia con la tecnología más innovadora para
                ofrecerte resultados reales, naturales y duraderos.
              </p>
              <p>
                Trabajamos con las firmas más prestigiosas del sector —Valmont, Biologique Recherche, Natura Bissé,
                SkinCeuticals, DMK, Kérastase, Aveda, Leonor Greyl o Miriamquevedo— para garantizar la máxima calidad en
                cada tratamiento.
              </p>
            </div>
            <Link href="/tratamientos" className="btn btn-outline mt-10">
              Descubrir tratamientos
            </Link>
          </Reveal>
          <Reveal delay={150} className="grid grid-cols-2 gap-4">
            <div className="relative col-span-2 aspect-[16/10] overflow-hidden rounded-sm">
              <Image src={CATEGORY_IMAGES.clinica} alt="Espacio de VEME Beauty" fill sizes="(min-width: 1024px) 45vw, 100vw" className="object-cover" />
            </div>
            <div className="relative aspect-square overflow-hidden rounded-sm">
              <Image
                src="/images/imagen_2024-08-08_134248810-1024x682.png"
                alt="Zapatillas de cortesía con el logotipo de VEME"
                fill
                sizes="(min-width: 1024px) 22vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="relative aspect-square overflow-hidden rounded-sm">
              <Image src="/images/posters/reel-dia.jpg" alt="Un día en el centro VEME Beauty" fill sizes="(min-width: 1024px) 22vw, 50vw" className="object-cover" />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-ink py-24 text-white md:py-32">
        <div className="container-luxe">
          <Reveal className="max-w-2xl">
            <p className="eyebrow eyebrow-light">Lo que nos define</p>
            <h2 className="mt-6 font-display text-4xl md:text-5xl">Nuestros valores</h2>
          </Reveal>
          <ul className="mt-14 grid gap-px overflow-hidden rounded-sm bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((v, i) => (
              <Reveal as="li" key={v.title} delay={i * 100} className="bg-ink p-8 md:p-10">
                <span className="font-display text-5xl text-gold/70">0{i + 1}</span>
                <h3 className="mt-6 font-display text-2xl">{v.title}</h3>
                <p className="mt-3 text-sm font-light leading-relaxed text-white/70">{v.text}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-white py-24 md:py-32">
        <div className="container-luxe">
          <Reveal className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="eyebrow">El equipo</p>
              <h2 className="mt-6 font-display text-4xl md:text-5xl">Conoce a quienes te cuidan</h2>
            </div>
            <a href={SITE.instagram.url} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
              Más en Instagram
            </a>
          </Reveal>
          <Reveal delay={120} className="mt-14">
            <ReelStrip
              reels={[
                { src: "/videos/reel-luis.mp4", poster: "/images/posters/reel-luis.jpg", title: "Luis, especialista láser" },
                { src: "/videos/reel-dia.mp4", poster: "/images/posters/reel-dia.jpg", title: "Un día en VEME" },
                { src: "/videos/reel-presentacion.mp4", poster: "/images/posters/reel-presentacion.jpg", title: "Nuestro espacio" },
                { src: "/videos/reel-tatuaje.mp4", poster: "/images/posters/reel-tatuaje.jpg", title: "Eliminación de tatuajes" },
              ]}
            />
          </Reveal>
        </div>
      </section>

      <BrandStrip />
      <BookingCTA />
    </>
  );
}
