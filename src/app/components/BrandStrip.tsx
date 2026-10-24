import Image from "next/image";
import { BRANDS } from "@/lib/treatments";

/** Carrusel infinito de las firmas con las que trabaja el centro. */
export default function BrandStrip() {
  const row = [...BRANDS, ...BRANDS];
  return (
    <section aria-labelledby="marcas" className="border-y border-line bg-white py-14">
      <h2 id="marcas" className="eyebrow eyebrow-center w-full justify-center">
        Firmas con las que trabajamos
      </h2>
      <div className="relative mt-10 overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_12%,black_88%,transparent)]">
        <ul className="flex w-max items-center gap-16 animate-[marquee_45s_linear_infinite] hover:[animation-play-state:paused] motion-reduce:animate-none">
          {row.map((b, i) => (
            <li key={`${b.alt}-${i}`} aria-hidden={i >= BRANDS.length} className="shrink-0">
              <Image
                src={b.src}
                alt={i < BRANDS.length ? b.alt : ""}
                width={130}
                height={130}
                className="h-20 w-auto object-contain opacity-60 grayscale transition duration-500 hover:opacity-100 hover:grayscale-0"
              />
            </li>
          ))}
        </ul>
      </div>
      <style>{`@keyframes marquee{from{transform:translateX(0)}to{transform:translateX(-50%)}}`}</style>
    </section>
  );
}
