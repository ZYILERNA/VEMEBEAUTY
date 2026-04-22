import TreatmentPage from "../components/TreatmentPage";

export const metadata = { title: "Ondas Electromagnéticas · VEME Beauty" };

export default function OndasElectromagneticas() {
  return (
    <TreatmentPage
      category="Estética · Dispositivos"
      title="Ondas Electromagnéticas"
      subtitle="Tonificación muscular intensa y reducción de grasa con tecnología electromagnética"
      description="El tratamiento con ondas electromagnéticas de alta intensidad (HIFEM) provoca contracciones musculares supramáximas imposibles de conseguir con ejercicio voluntario. En una sola sesión se producen miles de contracciones que tonifican y fortalecen la musculatura mientras se reducen los depósitos de grasa circundantes."
      benefits={[
        "Equivale a 20.000 contracciones musculares por sesión",
        "Tonifica y aumenta la masa muscular",
        "Reduce la grasa localizada simultáneamente",
        "Sin esfuerzo físico y sin recuperación",
        "Ideal para abdomen y glúteos",
        "Resultados visibles desde la 3ª – 4ª sesión",
      ]}
      details={[
        { label: "Duración de sesión", value: "30 minutos" },
        { label: "Número de sesiones", value: "4 – 6 sesiones (2 por semana)" },
        { label: "Tecnología", value: "HIFEM (High-Intensity Focused Electromagnetic)" },
        { label: "Zonas", value: "Abdomen, glúteos, muslos, brazos" },
        { label: "Recuperación", value: "Ninguna" },
      ]}
    />
  );
}
