import TreatmentPage from "../components/TreatmentPage";
import { treatmentMetadata } from "@/lib/seo";

export const metadata = treatmentMetadata("fotona-4d-pro");

export default function Fotona4D() {
  return (
    <TreatmentPage
      slug="fotona-4d-pro"
      category="Medicina Estética · Antienvejecimiento"
      title="FOTONA 4D PRO"
      subtitle="El tratamiento láser de rejuvenecimiento facial más completo del mercado"
      description="FOTONA 4D PRO es el único tratamiento que combina cuatro modalidades de láser en una sola sesión: SmoothLiftin (interior de la boca), FRAC3 (rejuvenecimiento en profundidad), PIANO (calentamiento profundo) y SupErficial (resurfacing superficial). El resultado es un rejuvenecimiento global sin igual, actuando desde dentro y fuera de la piel."
      benefits={[
        "Rejuvenecimiento facial completo en una sesión",
        "Actúa desde el interior de la boca para tratar la flacidez oral",
        "Resurfacing superficial para mejorar textura y tono",
        "Estimulación profunda de colágeno",
        "Sin inyecciones ni cirugía",
        "Resultados naturales y duraderos",
      ]}
      details={[
        { label: "Duración de sesión", value: "60 – 90 minutos" },
        { label: "Número de sesiones", value: "3 – 4 sesiones" },
        { label: "Tecnología", value: "Láser Nd:YAG + Er:YAG (4 modalidades)" },
        { label: "Recuperación", value: "Mínima, leve enrojecimiento 24 – 48h" },
        { label: "Indicaciones", value: "Flacidez, arrugas, textura, manchas" },
      ]}
    />
  );
}
