import Link from "next/link";
import Logo from "./Logo";
import { SITE, fullAddress } from "@/lib/site";
import { GROUPS } from "@/lib/treatments";

export default function Footer() {
  return (
    <footer className="relative bg-ink text-white/70 pb-20 lg:pb-0">
      <div className="container-luxe grid gap-14 py-20 md:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">
        <div>
          <Logo tone="light" />
          <p className="mt-6 max-w-xs text-sm leading-relaxed">
            Estética avanzada y medicina estética en el corazón de Barcelona, con las mejores firmas y la tecnología más innovadora.
          </p>
          <a
            href={SITE.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-3 text-sm text-white hover:text-gold-light transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" aria-hidden>
              <rect x="3" y="3" width="18" height="18" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" />
            </svg>
            {SITE.instagram.handle}
          </a>
        </div>

        <div>
          <h2 className="eyebrow eyebrow-light mb-6">Tratamientos</h2>
          <ul className="space-y-3 text-sm">
            {GROUPS.map((g) => (
              <li key={g.key}>
                <Link href={g.key === "tatuajes" ? "/eliminacion-de-tatuajes" : `/tratamientos#${g.key}`} className="link-underline hover:text-white transition-colors">
                  {g.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="eyebrow eyebrow-light mb-6">Horario</h2>
          <dl className="space-y-3 text-sm">
            {SITE.hours.map((h) => (
              <div key={h.days} className="flex justify-between gap-4 border-b border-white/10 pb-3">
                <dt>{h.days}</dt>
                <dd className={h.spec ? "text-white" : "text-white/40"}>{h.time}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div>
          <h2 className="eyebrow eyebrow-light mb-6">Visítanos</h2>
          <address className="not-italic space-y-3 text-sm">
            <a href={SITE.mapsUrl} target="_blank" rel="noopener noreferrer" className="block hover:text-white transition-colors">
              {fullAddress}
              <span className="block text-white/45">{SITE.address.area}</span>
            </a>
            {SITE.phones.map((p) => (
              <a key={p.href} href={p.href} className="block text-white hover:text-gold-light transition-colors">
                {p.label}
              </a>
            ))}
          </address>
          <a href={SITE.bookingUrl} target="_blank" rel="noopener noreferrer" className="btn btn-gold mt-8">
            Reservar cita
          </a>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-luxe flex flex-col gap-3 py-6 text-xs text-white/40 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} VEME Beauty · Barcelona</p>
          <nav aria-label="Pie de página" className="flex flex-wrap gap-6">
            <Link href="/tratamientos" className="hover:text-white transition-colors">Tratamientos</Link>
            <Link href="/sobre-nosotros" className="hover:text-white transition-colors">Sobre nosotros</Link>
            <Link href="/contacto" className="hover:text-white transition-colors">Contacto</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
