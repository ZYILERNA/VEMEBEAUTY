import { SITE } from "@/lib/site";

/** Barra fija inferior en móvil: llamar o reservar con un toque. */
export default function MobileBookingBar() {
  return (
    <div className="lg:hidden fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-ink/95 backdrop-blur-md pb-[env(safe-area-inset-bottom)]">
      <div className="grid grid-cols-2">
        <a
          href={SITE.phones[0].href}
          className="flex items-center justify-center gap-2 py-4 text-[0.7rem] font-medium uppercase tracking-[0.2em] text-white/90"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" aria-hidden>
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
          </svg>
          Llamar
        </a>
        <a
          href={SITE.bookingUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 py-4 bg-gold text-ink text-[0.7rem] font-medium uppercase tracking-[0.2em]"
        >
          Reservar cita
        </a>
      </div>
    </div>
  );
}
