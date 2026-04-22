import TreatmentPage from "../components/TreatmentPage";

export const metadata = { title: "Tratamiento Valmont · VEME Beauty" };

export default function TratamientoValmont() {
  return (
    <TreatmentPage
      category="Estética · Tratamientos Faciales"
      title="Tratamiento Valmont"
      subtitle="Alta cosmética suiza para un rejuvenecimiento celular profundo"
      description="Los tratamientos Valmont combinan la ciencia suiza más avanzada con ingredientes activos de máxima pureza. Basados en el ADN bicatenario y el método de doble ADN exclusivo de Valmont, estos tratamientos actúan en profundidad para regenerar, reparar e iluminar la piel desde el interior, con resultados visibles y duraderos."
      benefits={[
        "Regeneración celular profunda con tecnología DNA",
        "Efecto lifting y reafirmante inmediato",
        "Hidratación profunda y duradera",
        "Reduce arrugas y líneas de expresión",
        "Mejora la luminosidad y uniformidad del tono",
        "Experiencia sensorial única y relajante",
      ]}
      details={[
        { label: "Duración de sesión", value: "60 – 90 minutos" },
        { label: "Frecuencia recomendada", value: "Mensual o según protocolo" },
        { label: "Marca", value: "Valmont (Suiza)" },
        { label: "Recuperación", value: "Ninguna" },
        { label: "Indicaciones", value: "Envejecimiento, deshidratación, pérdida de firmeza" },
      ]}
      image="/images/valmont-300x300.png"
    />
  );
}
