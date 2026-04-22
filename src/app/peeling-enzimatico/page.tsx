import TreatmentPage from "../components/TreatmentPage";

export const metadata = { title: "Peeling Enzimático · VEME Beauty" };

export default function PeelingEnzimatico() {
  return (
    <TreatmentPage
      category="Estética · Tratamientos Faciales"
      title="Peeling Enzimático"
      subtitle="Exfoliación suave y eficaz para renovar la piel sin irritación"
      description="El Peeling Enzimático es una exfoliación química suave basada en enzimas proteolíticas (principalmente de papaya y piña) que disuelven las células muertas de la superficie cutánea sin agredir la piel. Es el peeling ideal para pieles sensibles, reactivas o con rosácea, dejando la piel más luminosa, suave y uniforme desde la primera sesión."
      benefits={[
        "Exfoliación suave y no abrasiva",
        "Ideal para pieles sensibles y reactivas",
        "Mejora la luminosidad y uniformidad del tono",
        "Reduce manchas superficiales",
        "Prepara la piel para otros tratamientos",
        "Sin tiempo de recuperación",
      ]}
      details={[
        { label: "Duración de sesión", value: "45 – 60 minutos" },
        { label: "Frecuencia recomendada", value: "Mensual" },
        { label: "Recuperación", value: "Ninguna" },
        { label: "Indicaciones", value: "Piel apagada, manchas, rosácea, sensibilidad" },
      ]}
    />
  );
}
