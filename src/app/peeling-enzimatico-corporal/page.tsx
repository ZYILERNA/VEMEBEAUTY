import TreatmentPage from "../components/TreatmentPage";

export const metadata = { title: "Peeling Enzimático Corporal · VEME Beauty" };

export default function PeelingCorporal() {
  return (
    <TreatmentPage
      category="Estética · Tratamientos Corporales"
      title="Peeling Enzimático Corporal"
      subtitle="Renovación total de la piel del cuerpo con enzimas naturales"
      description="El Peeling Enzimático Corporal es un tratamiento de exfoliación suave y eficaz que utiliza enzimas proteolíticas para disolver células muertas y renovar la superficie cutánea de todo el cuerpo. Ideal como preparación para otros tratamientos corporales o como ritual de mantenimiento para mantener la piel suave, uniforme y luminosa."
      benefits={[
        "Elimina células muertas de forma suave",
        "Piel inmediatamente más suave y luminosa",
        "Mejora la absorción de activos corporales",
        "Tono y textura más uniformes",
        "Ideal para pieles secas, rugosas o con queratosis",
        "Sin tiempo de recuperación",
      ]}
      details={[
        { label: "Duración de sesión", value: "60 minutos" },
        { label: "Frecuencia recomendada", value: "Mensual" },
        { label: "Recuperación", value: "Ninguna" },
        { label: "Indicaciones", value: "Piel seca, rugosa, apagada, queratosis pilaris" },
      ]}
    />
  );
}
