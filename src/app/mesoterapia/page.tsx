import TreatmentPage from "../components/TreatmentPage";

export const metadata = { title: "Mesoterapia · VEME Beauty" };

export default function Mesoterapia() {
  return (
    <TreatmentPage
      category="Medicina Estética"
      title="MESOTERAPIA"
      subtitle="Microinyecciones de activos regeneradores para revitalizar la piel desde dentro"
      description="La mesoterapia consiste en la microinyección de cócteles de vitaminas, minerales, aminoácidos, ácido hialurónico y otros activos directamente en la dermis. Al introducir estos nutrientes en la capa donde actúan las células de la piel, se consigue una hidratación, luminosidad y regeneración celular que ningún cosmético tópico puede igualar."
      benefits={[
        "Hidratación profunda desde el interior",
        "Mejora la luminosidad y el tono de la piel",
        "Estimula la síntesis de colágeno y elastina",
        "Reduce arrugas finas y signos de fatiga",
        "Trata la caída del cabello (mesoterapia capilar)",
        "Cóctel personalizado según necesidades",
      ]}
      details={[
        { label: "Duración de sesión", value: "30 – 45 minutos" },
        { label: "Número de sesiones", value: "4 – 6 sesiones (cada 2 semanas)" },
        { label: "Recuperación", value: "Pequeños hematomas posibles (24 – 48h)" },
        { label: "Aplicación", value: "Médico especialista" },
        { label: "Indicaciones", value: "Envejecimiento, deshidratación, caída capilar" },
      ]}
    />
  );
}
