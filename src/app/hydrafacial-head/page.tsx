import TreatmentPage from "../components/TreatmentPage";

export const metadata = { title: "Hydrafacial Head · VEME Beauty" };

export default function HydrafacialHead() {
  return (
    <TreatmentPage
      category="Estética · Tratamientos Capilares"
      title="Hydrafacial Head"
      subtitle="La limpieza capilar más avanzada para un cuero cabelludo sano y un cabello espectacular"
      description="Hydrafacial Head adapta la tecnología Vortex-Fusion al cuero cabelludo, ofreciendo una limpieza profunda de los folículos pilosos, eliminación de sebo acumulado, células muertas e impurezas, e infusión de sueros nutritivos directamente en el cuero cabelludo. El resultado es un cuero cabelludo equilibrado, sano y un cabello con más volumen, brillo y vitalidad."
      benefits={[
        "Limpieza profunda del cuero cabelludo y folículos",
        "Elimina exceso de sebo y residuos de productos",
        "Infusión de activos nutritivos y revitalizantes",
        "Estimula el crecimiento capilar",
        "Cabello con más volumen, brillo y suavidad",
        "Apto para todo tipo de cabellos",
      ]}
      details={[
        { label: "Duración de sesión", value: "60 minutos" },
        { label: "Frecuencia recomendada", value: "Mensual" },
        { label: "Tecnología", value: "Vortex-Fusion capilar" },
        { label: "Recuperación", value: "Ninguna" },
        { label: "Indicaciones", value: "Seborrea, caspa, caída, cuero cabelludo graso" },
      ]}
    />
  );
}
