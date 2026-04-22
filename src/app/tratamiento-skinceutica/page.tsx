import TreatmentPage from "../components/TreatmentPage";

export const metadata = { title: "Tratamiento SkinCeuticals · VEME Beauty" };

export default function TratamientoSkinCeutica() {
  return (
    <TreatmentPage
      category="Estética · Tratamientos Faciales"
      title="Tratamiento SkinCeuticals"
      subtitle="Cosmética clínica respaldada por la ciencia para resultados reales"
      description="SkinCeuticals es la marca de referencia en cosmética clínica avanzada, desarrollada con los estándares más rigurosos de la dermatología. Sus tratamientos en cabina combinan activos de altísima eficacia como la vitamina C, los retinoides, los ácidos y los antioxidantes para prevenir y corregir los signos del envejecimiento, manchas y pérdida de firmeza."
      benefits={[
        "Prevención y corrección del envejecimiento",
        "Vitamina C pura para antioxidación e iluminación",
        "Tratamiento de manchas y melasma",
        "Mejora de la firmeza y elasticidad",
        "Respaldado por más de 30 años de investigación clínica",
        "Complemento perfecto a tratamientos médico-estéticos",
      ]}
      details={[
        { label: "Duración de sesión", value: "60 minutos" },
        { label: "Frecuencia recomendada", value: "Mensual" },
        { label: "Marca", value: "SkinCeuticals" },
        { label: "Recuperación", value: "Ninguna o mínima" },
        { label: "Indicaciones", value: "Manchas, envejecimiento, deshidratación, firmeza" },
      ]}
      image="/images/skin-300x300.png"
    />
  );
}
