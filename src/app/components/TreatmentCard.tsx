import Image from "next/image";
import Link from "next/link";
import { getGroup, type TREATMENTS } from "@/lib/treatments";

type T = (typeof TREATMENTS)[number];

export default function TreatmentCard({ t, size = "md" }: { t: T; size?: "md" | "lg" }) {
  return (
    <Link
      href={`/${t.slug}`}
      className="group relative flex flex-col overflow-hidden rounded-sm bg-white ring-1 ring-line transition-shadow duration-500 hover:shadow-[0_30px_60px_-35px_rgb(27_23_20/0.45)]"
    >
      <div className={`relative overflow-hidden bg-sand ${size === "lg" ? "aspect-[4/5]" : "aspect-[4/3]"}`}>
        {t.image ? (
          <Image
            src={t.image}
            alt={t.name}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover object-[70%_center] transition-transform duration-[1.4s] ease-[var(--ease-luxe)] group-hover:scale-105"
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-sand via-cream to-gold-light/40" />
        )}
        <span className="absolute left-4 top-4 rounded-full bg-cream/90 px-3 py-1 text-[0.62rem] uppercase tracking-[0.2em] text-ink backdrop-blur">
          {getGroup(t.group).label}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-2xl text-ink">{t.name}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-stone">{t.summary}</p>
        <span className="mt-5 inline-flex items-center gap-2 text-[0.7rem] font-medium uppercase tracking-[0.2em] text-gold-deep">
          Descubrir
          <span className="transition-transform duration-500 group-hover:translate-x-1" aria-hidden>
            →
          </span>
        </span>
      </div>
    </Link>
  );
}
