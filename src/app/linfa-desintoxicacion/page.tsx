import TreatmentPage from "../components/TreatmentPage";

export const metadata = { title: "Linfa Desintoxicación · VEME Beauty" };

export default function LinfaDesintoxicacion() {
  return (
    <TreatmentPage
      category="Estética · Tratamientos Faciales"
      title="Linfa Desintoxicación"
      subtitle="Drenaje linfático facial para desintoxicar, desinflamar y revitalizar tu piel"
      description="El tratamiento de Linfa Desintoxicación facial es una técnica especializada de drenaje linfático que elimina toxinas, reduce la retención de líquidos y la inflamación, mejora la circulación y activa el sistema inmune local de la piel. Ideal para pieles apagadas, congestionadas o con tendencia al edema facial."
      benefits={[
        "Elimina toxinas y líquidos retenidos",
        "Reduce la hinchazón e inflamación facial",
        "Mejora la circulación y oxigenación cutánea",
        "Activa el sistema inmunitario de la piel",
        "Piel más luminosa e hidratada",
        "Efecto relajante y desestresante",
      ]}
      details={[
        { label: "Duración de sesión", value: "60 minutos" },
        { label: "Frecuencia recomendada", value: "Semanal o quincenal" },
        { label: "Recuperación", value: "Ninguna" },
        { label: "Indicaciones", value: "Piel congestionada, retención, fatiga, estrés" },
      ]}
    />
  );
}
