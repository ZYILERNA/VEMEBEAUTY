import TreatmentPage from "../components/TreatmentPage";
import { treatmentMetadata } from "@/lib/seo";

export const metadata = treatmentMetadata("tratamiento-dmk");

export default function TratamientoDMK() {
  return (
    <TreatmentPage
      slug="tratamiento-dmk"
      category="Estética · Tratamientos Faciales"
      title="Tratamiento DMK"
      subtitle="Paramedical skincare para transformar la piel desde la raíz"
      description="DMK (Danné Montague-King) es un sistema de skincare paramédico que trabaja con la química natural de la piel para tratar sus disfunciones desde la raíz. A través de enzimas y plasmas de oxígeno, DMK elimina células muertas, estimula la circulación, refuerza la barrera cutánea y revierte el daño celular. Apto para condiciones difíciles como acné, rosácea, hiperpigmentación y envejecimiento severo."
      benefits={[
        "Trata condiciones difíciles (acné severo, rosácea, manchas resistentes)",
        "Enzimoterapia para renovación celular profunda",
        "Efecto plasmalifting de oxigenación cutánea",
        "Refuerza la barrera cutánea",
        "Resultados transformadores y progresivos",
        "Protocolo personalizado para cada piel",
      ]}
      details={[
        { label: "Duración de sesión", value: "90 minutos" },
        { label: "Número de sesiones", value: "6 – 12 sesiones según diagnóstico" },
        { label: "Marca", value: "DMK (Danné Montague-King)" },
        { label: "Recuperación", value: "Variable según protocolo" },
        { label: "Indicaciones", value: "Acné, rosácea, manchas, envejecimiento, cicatrices" },
      ]}
    />
  );
}
