/** Logotipo VEME Beauty como texto: nítido a cualquier tamaño y sobre cualquier fondo. */
export default function Logo({ className = "", tone = "dark" }: { className?: string; tone?: "dark" | "light" }) {
  const color = tone === "light" ? "text-white" : "text-ink";
  return (
    <span className={`inline-flex flex-col items-center leading-none ${color} ${className}`} aria-label="VEME Beauty">
      <span className="font-display text-[1.65rem] font-medium tracking-[0.42em] pl-[0.42em]" aria-hidden>
        VEME
      </span>
      <span className="mt-1 text-[0.52rem] font-normal tracking-[0.72em] pl-[0.72em] opacity-80" aria-hidden>
        BEAUTY
      </span>
    </span>
  );
}
