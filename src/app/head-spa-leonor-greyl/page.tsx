import TreatmentPage from "../components/TreatmentPage";
import { treatmentMetadata } from "@/lib/seo";

export const metadata = treatmentMetadata("head-spa-leonor-greyl");

export default function HeadSpaLeonorGreyl() {
  return (
    <TreatmentPage
      slug="head-spa-leonor-greyl"
      category="Estética · Tratamientos Capilares"
      title="Head Spa Leonor Greyl"
      subtitle="El ritual capilar más exclusivo de París para cabellos exigentes"
      description="Leonor Greyl es la maison capilar de lujo parisina con más de 50 años de historia. Sus tratamientos en cabina son legendarios: combinan aceites naturales de altísima calidad, técnicas manuales ancestrales y una experiencia sensorial única. El Head Spa Leonor Greyl transforma en profundidad la fibra capilar y el cuero cabelludo, para un cabello sublime."
      benefits={[
        "Reparación profunda de la fibra capilar",
        "Nutrición intensiva con aceites naturales puros",
        "Rituales de masaje parisinos exclusivos",
        "Resultados desde la primera sesión",
        "Ideal para cabellos dañados, secos o con falta de vida",
        "Fragancia y textura de lujo incomparables",
      ]}
      details={[
        { label: "Duración de sesión", value: "60 – 90 minutos" },
        { label: "Frecuencia recomendada", value: "Mensual" },
        { label: "Marca", value: "Leonor Greyl (París)" },
        { label: "Recuperación", value: "Ninguna" },
      ]}
    />
  );
}
