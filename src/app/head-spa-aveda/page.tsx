import TreatmentPage from "../components/TreatmentPage";

export const metadata = { title: "Head Spa Aveda · VEME Beauty" };

export default function HeadSpaAveda() {
  return (
    <TreatmentPage
      category="Estética · Tratamientos Capilares"
      title="Head Spa Aveda"
      subtitle="Ritual capilar holístico con los productos botánicos más puros de Aveda"
      description="El Head Spa Aveda es un ritual capilar completo que combina técnicas de masaje del cuero cabelludo con los tratamientos botánicos de alta performance de Aveda. Inspirado en las tradiciones de bienestar de la India y Japón, este tratamiento equilibra el cuero cabelludo, nutre el cabello en profundidad y ofrece una experiencia de relajación total."
      benefits={[
        "Equilibra el cuero cabelludo (graso, seco o sensible)",
        "Nutrición profunda del cabello",
        "Masaje de cuero cabelludo estimulante",
        "Fórmulas 100% botánicas y sostenibles",
        "Mejora la circulación y estimula el crecimiento",
        "Experiencia de bienestar completa",
      ]}
      details={[
        { label: "Duración de sesión", value: "60 – 90 minutos" },
        { label: "Frecuencia recomendada", value: "Mensual" },
        { label: "Marca", value: "Aveda" },
        { label: "Recuperación", value: "Ninguna" },
      ]}
      image="/images/aveda-300x300.png"
    />
  );
}
