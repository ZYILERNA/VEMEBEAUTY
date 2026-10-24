import TreatmentPage from "../components/TreatmentPage";
import { treatmentMetadata } from "@/lib/seo";

export const metadata = treatmentMetadata("ultraformer-iii");

export default function UltraformerIII() {
  return (
    <TreatmentPage
      slug="ultraformer-iii"
      category="Medicina Estética · Antienvejecimiento"
      title="ULTRAFORMER III"
      subtitle="HIFU de última generación para lifting facial y corporal sin cirugía"
      description="ULTRAFORMER III es un sistema de ultrasonido microfocalizado de alta intensidad (HIFU) que actúa en distintas profundidades de la piel para estimular el colágeno y producir un efecto lifting significativo. Trata el rostro, cuello, escote y cuerpo con un efecto tensor visible y progresivo, sin incisiones ni tiempo de recuperación."
      benefits={[
        "Lifting facial y corporal sin cirugía",
        "Actúa a 4 profundidades distintas (1,5mm / 3mm / 4,5mm / 6mm)",
        "Estimulación intensa de colágeno",
        "Resultados duraderos 12 – 18 meses",
        "Sin tiempo de recuperación",
        "Tratamiento en una sola sesión",
      ]}
      details={[
        { label: "Duración de sesión", value: "60 – 90 minutos" },
        { label: "Número de sesiones", value: "1 – 2 sesiones al año" },
        { label: "Tecnología", value: "HIFU microfocalizado" },
        { label: "Zonas", value: "Rostro, cuello, escote, abdomen, muslos" },
        { label: "Recuperación", value: "Mínima, leve enrojecimiento 24h" },
      ]}
    />
  );
}
