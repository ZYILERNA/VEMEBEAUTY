import Link from "next/link";
import { FEATURED } from "@/lib/treatments";

export default function NotFound() {
  return (
    <section className="flex min-h-[80svh] items-center bg-ink pt-28 pb-20 text-white">
      <div className="container-luxe max-w-3xl text-center">
        <p className="eyebrow eyebrow-light eyebrow-center justify-center">Error 404</p>
        <h1 className="mt-7 font-display text-5xl sm:text-7xl">Esta página no existe</h1>
        <p className="mx-auto mt-6 max-w-md font-light text-white/75">
          Puede que el enlace haya cambiado. Te dejamos algunos de nuestros tratamientos más solicitados.
        </p>
        <ul className="mt-10 flex flex-wrap justify-center gap-3">
          {FEATURED.slice(0, 5).map((t) => (
            <li key={t.slug}>
              <Link href={`/${t.slug}`} className="btn btn-outline-light !min-h-0 !py-2.5">
                {t.name}
              </Link>
            </li>
          ))}
        </ul>
        <div className="mt-12 flex flex-wrap justify-center gap-4">
          <Link href="/" className="btn btn-gold">
            Volver al inicio
          </Link>
          <Link href="/tratamientos" className="btn btn-outline-light">
            Ver tratamientos
          </Link>
        </div>
      </div>
    </section>
  );
}
