import TreatmentPage from "../components/TreatmentPage";

export const metadata = { title: "Microneedling Pen · VEME Beauty" };

export default function MicroneedlingPen() {
  return (
    <TreatmentPage
      category="Estética · Tratamientos Faciales"
      title="Microneedling Pen"
      subtitle="Bioestimulación cutánea para rejuvenecer, reparar y transformar la piel"
      description="El Microneedling Pen es una técnica de bioestimulación que crea microperforaciones controladas en la piel, activando los mecanismos naturales de reparación y generando nuevo colágeno y elastina. Es un tratamiento versátil que mejora arrugas, cicatrices, poros dilatados, manchas y la textura global de la piel."
      benefits={[
        "Estimula la producción natural de colágeno y elastina",
        "Reduce arrugas y líneas de expresión",
        "Minimiza poros dilatados",
        "Mejora cicatrices de acné y estrías",
        "Unifica el tono y la textura de la piel",
        "Potencia la absorción de activos cosméticos",
      ]}
      details={[
        { label: "Duración de sesión", value: "60 minutos" },
        { label: "Número de sesiones", value: "3 – 6 sesiones" },
        { label: "Intervalo entre sesiones", value: "3 – 4 semanas" },
        { label: "Recuperación", value: "24 – 48h de enrojecimiento" },
        { label: "Indicaciones", value: "Arrugas, cicatrices, poros, manchas, estrías" },
      ]}
    />
  );
}
