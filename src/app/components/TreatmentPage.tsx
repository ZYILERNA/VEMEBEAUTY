import Image from "next/image";
import Link from "next/link";
import Navbar from "./Navbar";
import Footer from "./Footer";

export interface TreatmentPageProps {
  title: string;
  subtitle?: string;
  category: string;
  description: string;
  benefits?: string[];
  details?: { label: string; value: string }[];
  image?: string;
  video?: string;
  extra?: React.ReactNode;
}

export default function TreatmentPage({
  title,
  subtitle,
  category,
  description,
  benefits = [],
  details = [],
  image,
  video,
  extra,
}: TreatmentPageProps) {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="relative pt-20 min-h-[45vh] flex items-end bg-[#1a1a1a] overflow-hidden">
        {image && (
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover opacity-40"
            priority
          />
        )}
        <div className="relative z-10 max-w-5xl mx-auto px-6 pb-14 w-full">
          <p className="text-xs uppercase tracking-[0.4em] text-[#b89b6e] mb-3">{category}</p>
          <h1
            className="text-4xl md:text-6xl font-bold text-white"
            style={{ fontFamily: "Georgia, serif" }}
          >
            {title}
          </h1>
          {subtitle && (
            <p className="mt-3 text-lg text-gray-300 font-light">{subtitle}</p>
          )}
        </div>
      </section>

      <main className="bg-white">
        {/* Description */}
        <section className="max-w-4xl mx-auto px-6 py-16">
          <p className="text-gray-600 text-lg leading-relaxed">{description}</p>
        </section>

        {/* Video */}
        {video && (
          <section className="max-w-5xl mx-auto px-6 pb-16">
            <video
              src={video}
              controls
              className="w-full rounded-lg shadow-xl"
              playsInline
            />
          </section>
        )}

        {/* Benefits + Details */}
        {(benefits.length > 0 || details.length > 0) && (
          <section className="bg-[#faf7f4] py-16">
            <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-12">
              {benefits.length > 0 && (
                <div>
                  <h2
                    className="text-2xl font-bold text-gray-800 mb-6"
                    style={{ fontFamily: "Georgia, serif" }}
                  >
                    Beneficios
                  </h2>
                  <ul className="space-y-3">
                    {benefits.map((b) => (
                      <li key={b} className="flex items-start gap-3 text-gray-600">
                        <span className="mt-1 w-2 h-2 rounded-full bg-[#b89b6e] flex-shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {details.length > 0 && (
                <div>
                  <h2
                    className="text-2xl font-bold text-gray-800 mb-6"
                    style={{ fontFamily: "Georgia, serif" }}
                  >
                    Información del tratamiento
                  </h2>
                  <dl className="space-y-4">
                    {details.map((d) => (
                      <div key={d.label} className="border-b border-gray-200 pb-3">
                        <dt className="text-xs uppercase tracking-wider text-[#b89b6e] mb-1">
                          {d.label}
                        </dt>
                        <dd className="text-gray-700">{d.value}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              )}
            </div>
          </section>
        )}

        {/* Extra content slot */}
        {extra && <section className="max-w-5xl mx-auto px-6 py-16">{extra}</section>}

        {/* CTA */}
        <section className="py-16 text-center bg-white border-t border-gray-100">
          <p className="text-xs uppercase tracking-[0.4em] text-[#b89b6e] mb-3">¿Te interesa?</p>
          <h2
            className="text-2xl font-bold text-gray-800 mb-6"
            style={{ fontFamily: "Georgia, serif" }}
          >
            Reserva tu cita
          </h2>
          <a
            href="https://widget.treatwell.es/establecimiento/veme-beauty"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#b89b6e] hover:bg-[#a08558] text-white font-semibold uppercase tracking-widest text-sm px-10 py-4 transition-colors duration-300"
          >
            Reservar ahora
          </a>
          <div className="mt-6">
            <Link href="/" className="text-sm text-gray-400 hover:text-[#b89b6e] transition-colors">
              ← Volver al inicio
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
