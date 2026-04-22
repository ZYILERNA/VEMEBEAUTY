import TreatmentPage from "../components/TreatmentPage";

export const metadata = { title: "MORPHEUS8 · VEME Beauty" };

export default function Morpheus8() {
  return (
    <TreatmentPage
      category="Medicina Estética · Antienvejecimiento"
      title="MORPHEUS8"
      subtitle="Microagujas con radiofrecuencia fraccionada para remodelación profunda de la piel"
      description="MORPHEUS8 combina microagujas con radiofrecuencia fraccionada para remodelar la piel y el tejido subyacente desde el interior. Actúa a diferentes profundidades para tratar arrugas, flacidez, cicatrices de acné, estrías y mejorar la textura general de la piel con resultados extraordinarios."
      benefits={[
        "Remodelación profunda del tejido adiposo y dermo-epidérmico",
        "Reduce arrugas y líneas de expresión",
        "Mejora cicatrices de acné y estrías",
        "Efecto lifting y reafirmante",
        "Apto para rostro y cuerpo",
        "Personalizable en profundidad y energía",
      ]}
      details={[
        { label: "Duración de sesión", value: "45 – 60 minutos" },
        { label: "Número de sesiones", value: "3 sesiones (intervalos de 4 – 6 semanas)" },
        { label: "Tecnología", value: "Microagujas + Radiofrecuencia fraccionada" },
        { label: "Profundidad de actuación", value: "Hasta 8mm" },
        { label: "Recuperación", value: "3 – 5 días de enrojecimiento" },
      ]}
    />
  );
}
