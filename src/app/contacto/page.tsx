import type { Metadata } from "next";
import Image from "next/image";
import Reveal from "../components/Reveal";
import { SITE, fullAddress } from "@/lib/site";
import { CATEGORY_IMAGES } from "@/lib/media";

export const metadata: Metadata = {
  title: "Contacto y cómo llegar",
  description: `Contacta con VEME Beauty: ${fullAddress}, junto al Arc de Triomf. Teléfono ${SITE.phones[0].label}. Horario, mapa y reserva online.`,
  alternates: { canonical: "/contacto" },
};

export default function Contacto() {
  return (
    <>
      <section className="relative isolate flex min-h-[56svh] items-end overflow-hidden bg-ink pt-28 text-white">
        <Image src={CATEGORY_IMAGES.clinica} alt="" fill priority sizes="100vw" className="-z-10 object-cover animate-slow-zoom" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/80 via-black/50 to-black/20" />
        <div className="container-luxe pb-16 md:pb-20">
          <p className="eyebrow eyebrow-light animate-fade-up">Contacto</p>
          <h1 className="mt-7 font-display text-5xl leading-none sm:text-7xl animate-fade-up" style={{ animationDelay: "120ms" }}>
            Te esperamos
          </h1>
        </div>
      </section>

      <section className="bg-cream py-20 md:py-28">
        <div className="container-luxe grid gap-14 lg:grid-cols-[1fr_1.3fr]">
          <Reveal className="space-y-12">
            <div>
              <h2 className="eyebrow">Dirección</h2>
              <address className="mt-4 not-italic font-display text-3xl leading-snug">
                {SITE.address.street}
                <br />
                {SITE.address.postalCode} {SITE.address.city}
              </address>
              <p className="mt-2 text-stone">{SITE.address.area} · Metro L1 Arc de Triomf</p>
              <a href={SITE.mapsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary mt-6">
                Cómo llegar
              </a>
            </div>
            <div>
              <h2 className="eyebrow">Teléfono</h2>
              <ul className="mt-4 space-y-2">
                {SITE.phones.map((p) => (
                  <li key={p.href}>
                    <a href={p.href} className="font-display text-3xl hover:text-gold-deep transition-colors">
                      {p.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="eyebrow">Horario</h2>
              <dl className="mt-4 max-w-sm space-y-3">
                {SITE.hours.map((h) => (
                  <div key={h.days} className="flex justify-between border-b border-line pb-3">
                    <dt className="text-stone">{h.days}</dt>
                    <dd className={h.spec ? "text-ink" : "text-mist"}>{h.time}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <div className="flex flex-wrap gap-4">
              <a href={SITE.bookingUrl} target="_blank" rel="noopener noreferrer" className="btn btn-gold">
                Reservar online
              </a>
              <a href={SITE.instagram.url} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                Instagram
              </a>
            </div>
          </Reveal>
          <Reveal delay={150} className="relative min-h-[420px] overflow-hidden rounded-sm ring-1 ring-line">
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
