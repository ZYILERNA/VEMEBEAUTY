import Image from "next/image";
import { SITE } from "@/lib/site";
import { CATEGORY_IMAGES } from "@/lib/media";

export default function BookingCTA({
  title = "Tu momento empieza aquí",
  text = "Reserva online en menos de un minuto o llámanos y te asesoramos sobre el tratamiento ideal para ti.",
  image = CATEGORY_IMAGES.corporal,
}: {
  title?: string;
  text?: string;
  image?: string;
}) {
  return (
    <section className="relative isolate overflow-hidden bg-ink text-white">
      <Image src={image} alt="" fill sizes="100vw" className="-z-10 object-cover opacity-45" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink via-ink/80 to-ink/30" />
      <div className="container-luxe py-24 md:py-32">
        <div className="max-w-xl">
          <p className="eyebrow eyebrow-light">Reserva tu cita</p>
          <h2 className="mt-6 font-display text-4xl md:text-6xl">{title}</h2>
          <p className="mt-6 text-white/80 font-light">{text}</p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href={SITE.bookingUrl} target="_blank" rel="noopener noreferrer" className="btn btn-gold">
              Reservar online
            </a>
            <a href={SITE.phones[0].href} className="btn btn-outline-light">
              {SITE.phones[0].label}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
