import Image from "next/image";
import Link from "next/link";
import Reveal from "./Reveal";
import TreatmentCard from "./TreatmentCard";
import BookingCTA from "./BookingCTA";
import JsonLd from "./JsonLd";
import { getGroup, getTreatment, relatedTreatments } from "@/lib/treatments";
import { SITE } from "@/lib/site";

export interface TreatmentPageProps {
  slug: string;
  title: string;
  subtitle?: string;
  /** Texto antiguo de categoría; se ignora si el tratamiento está en el catálogo */
  category?: string;
  description: string;
  benefits?: string[];
  details?: { label: string; value: string }[];
  image?: string;
  video?: string;
  videoPoster?: string;
  extra?: React.ReactNode;
}

export default function TreatmentPage({
  slug,
  title,
  subtitle,
  category,
  description,
  benefits = [],
  details = [],
  image,
  video,
  videoPoster,
  extra,
}: TreatmentPageProps) {
  const t = getTreatment(slug);
  title = t?.name ?? title;
  const group = t ? getGroup(t.group) : null;
  const heroImage = t?.image ?? image;
  const related = relatedTreatments(slug, 3);
  const quote = subtitle?.startsWith('"') ? subtitle.replace(/^"|"$/g, "") : null;

  const breadcrumbs = [
    { name: "Inicio", href: "/" },
    { name: "Tratamientos", href: "/tratamientos" },
    ...(group ? [{ name: group.label, href: `/tratamientos#${group.key}` }] : []),
    { name: title, href: `/${slug}` },
  ];

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "BreadcrumbList",
              itemListElement: breadcrumbs.map((b, i) => ({
                "@type": "ListItem",
                position: i + 1,
                name: b.name,
                item: `${SITE.url}${b.href}`,
              })),
            },
            {
              "@type": "Service",
              name: title,
              description,
              serviceType: group?.label ?? category,
              image: heroImage,
              areaServed: "Barcelona",
              provider: { "@id": `${SITE.url}/#negocio` },
            },
          ],
        }}
      />

      {/* Cabecera */}
      <section className="relative isolate flex min-h-[78svh] items-end overflow-hidden bg-ink pt-28 text-white md:min-h-[86svh]">
        {heroImage && (
          <Image
            src={heroImage}
            alt={title}
            fill
            priority
            sizes="100vw"
            className="-z-10 object-cover object-[70%_center] animate-slow-zoom"
          />
        )}
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/80 via-black/45 to-black/5" />
        <div className="absolute inset-x-0 bottom-0 -z-10 h-1/2 bg-gradient-to-t from-black/70 to-transparent" />

        <div className="container-luxe pb-16 md:pb-24">
          <nav aria-label="Ruta de navegación" className="animate-fade-up">
            <ol className="flex flex-wrap items-center gap-2 text-[0.68rem] uppercase tracking-[0.2em] text-white/60">
              {breadcrumbs.slice(0, -1).map((b) => (
                <li key={b.href} className="flex items-center gap-2">
                  <Link href={b.href} className="hover:text-white transition-colors">
                    {b.name}
                  </Link>
                  <span aria-hidden>/</span>
                </li>
              ))}
              <li aria-current="page" className="text-gold-light">
                {title}
              </li>
            </ol>
          </nav>
          <h1
            className="mt-8 max-w-4xl font-display text-5xl leading-[1] sm:text-6xl lg:text-8xl animate-fade-up"
            style={{ animationDelay: "120ms" }}
          >
            {title}
          </h1>
          {subtitle && (
            <p
              className={`mt-6 max-w-2xl text-lg font-light text-white/85 md:text-xl animate-fade-up ${quote ? "font-display italic text-2xl md:text-3xl" : ""}`}
              style={{ animationDelay: "240ms" }}
            >
              {quote ?? subtitle}
            </p>
          )}
          <div className="mt-10 flex flex-wrap gap-4 animate-fade-up" style={{ animationDelay: "360ms" }}>
            <a href={SITE.bookingUrl} target="_blank" rel="noopener noreferrer" className="btn btn-gold">
              Reservar este tratamiento
            </a>
            <a href={SITE.phones[0].href} className="btn btn-outline-light">
              Pedir información
            </a>
          </div>
        </div>
      </section>

      {/* Descripción + ficha */}
      <section className="bg-cream py-20 md:py-28">
        <div className="container-luxe grid gap-14 lg:grid-cols-[1.5fr_1fr]">
          <Reveal>
            <p className="eyebrow">{group?.label ?? category ?? "Tratamiento"}</p>
            <h2 className="mt-6 font-display text-3xl md:text-5xl">¿En qué consiste?</h2>
            <p className="mt-8 text-lg font-light leading-relaxed text-stone md:text-xl">{description}</p>

            {benefits.length > 0 && (
              <>
                <h2 className="mt-16 font-display text-3xl md:text-4xl">Beneficios</h2>
                <ul className="mt-8 grid gap-x-10 gap-y-5 sm:grid-cols-2">
                  {benefits.map((b) => (
                    <li key={b} className="flex gap-4 text-stone">
                      <svg className="mt-1 h-5 w-5 shrink-0 text-gold" fill="none" stroke="currentColor" strokeWidth={1.4} viewBox="0 0 24 24" aria-hidden>
                        <circle cx="12" cy="12" r="10" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="m8 12.5 2.6 2.5L16 9.5" />
                      </svg>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </Reveal>

          <Reveal delay={150} as="article">
            <div className="lg:sticky lg:top-28 space-y-6">
              {details.length > 0 && (
                <div className="rounded-sm bg-white p-8 ring-1 ring-line">
                  <h2 className="font-display text-2xl">Ficha del tratamiento</h2>
                  <dl className="mt-6 divide-y divide-line">
                    {details.map((d) => (
                      <div key={d.label} className="py-4 first:pt-0">
                        <dt className="text-[0.66rem] uppercase tracking-[0.2em] text-gold-deep">{d.label}</dt>
                        <dd className="mt-1.5 text-ink">{d.value}</dd>
                      </div>
                    ))}
                  </dl>
                  <a href={SITE.bookingUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary mt-6 w-full">
                    Reservar cita
                  </a>
                  <p className="mt-4 text-center text-xs text-mist">
                    o llámanos al{" "}
                    <a href={SITE.phones[0].href} className="text-ink underline-offset-4 hover:underline">
                      {SITE.phones[0].label}
                    </a>
                  </p>
                </div>
              )}

              {(t?.device || t?.brand) && (
                <div className="flex items-center gap-6 rounded-sm bg-white p-6 ring-1 ring-line">
                  <div className="relative h-24 w-24 shrink-0">
                    <Image
                      src={(t.device ?? t.brand?.logo)!}
                      alt={t.device ? `Equipo ${title}` : t.brand!.name}
                      fill
                      sizes="96px"
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <p className="text-[0.66rem] uppercase tracking-[0.2em] text-gold-deep">
                      {t.device ? "Tecnología original" : "Firma"}
                    </p>
                    <p className="mt-1 font-display text-xl">{t.device ? title : t.brand!.name}</p>
                    <p className="mt-1 text-xs text-mist">
                      {t.device ? "Equipo certificado utilizado en el centro" : "Productos y protocolos oficiales"}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </Reveal>
        </div>
      </section>

      {video && (
        <section className="bg-white py-20 md:py-28">
          <div className="container-luxe">
            <Reveal className="mx-auto max-w-5xl">
              <p className="eyebrow">En vídeo</p>
              <h2 className="mt-6 mb-10 font-display text-3xl md:text-5xl">Así lo hacemos en VEME</h2>
              <video
                src={video}
                poster={videoPoster}
                controls
                playsInline
                preload="metadata"
                className="mx-auto max-h-[80vh] w-auto max-w-full rounded-sm bg-ink shadow-[0_40px_80px_-40px_rgb(0_0_0/0.5)]"
              />
            </Reveal>
          </div>
        </section>
      )}

      {extra && <section className="container-luxe py-16">{extra}</section>}

      {related.length > 0 && (
        <section aria-labelledby="relacionados" className="bg-cream py-20 md:py-28">
          <div className="container-luxe">
            <Reveal className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
              <div>
                <p className="eyebrow">Te puede interesar</p>
                <h2 id="relacionados" className="mt-6 font-display text-3xl md:text-5xl">
                  Tratamientos relacionados
                </h2>
              </div>
              <Link href="/tratamientos" className="btn btn-outline">
                Ver todos
              </Link>
            </Reveal>
            <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((r, i) => (
                <Reveal as="li" key={r.slug} delay={i * 100}>
                  <TreatmentCard t={r} />
                </Reveal>
              ))}
            </ul>
          </div>
        </section>
      )}

      <BookingCTA
        title={`¿Quieres probar ${title}?`}
        text="Te asesoramos sin compromiso y diseñamos un plan adaptado a ti."
        image={heroImage}
      />
    </>
  );
}
