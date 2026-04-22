import TreatmentPage from "../components/TreatmentPage";

export const metadata = { title: "Rellenos Inductores de Colágeno · VEME Beauty" };

export default function RellenosColagenoInductores() {
  return (
    <TreatmentPage
      category="Medicina Estética"
      title="Rellenos Inductores de Colágeno"
      subtitle="Bioestimulación profunda para rejuvenecer la piel desde dentro"
      description="Los rellenos inductores de colágeno (como Sculptra o PLLA) son tratamientos médico-estéticos que estimulan la producción de colágeno propio de forma progresiva y natural. A diferencia de los rellenos convencionales, no aportan volumen inmediato sino que actúan como bioestimuladores, mejorando la calidad, firmeza y densidad de la piel a lo largo de varios meses con resultados muy naturales y duraderos."
      benefits={[
        "Rejuvenecimiento progresivo y de aspecto natural",
        "Estimulación intensa del colágeno propio",
        "Resultados duraderos hasta 2 años",
        "Mejora la calidad, firmeza y densidad cutánea",
        "Apto para rostro, escote y manos",
        "Sin efecto 'relleno' artificial",
      ]}
      details={[
        { label: "Duración de sesión", value: "30 – 45 minutos" },
        { label: "Número de sesiones", value: "2 – 3 sesiones (cada 6 – 8 semanas)" },
        { label: "Duración del resultado", value: "Hasta 2 años" },
        { label: "Recuperación", value: "Leve inflamación 24 – 48h" },
        { label: "Indicaciones", value: "Flacidez, pérdida de firmeza, rejuvenecimiento global" },
      ]}
    />
  );
}
