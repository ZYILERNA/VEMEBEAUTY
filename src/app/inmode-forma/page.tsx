import TreatmentPage from "../components/TreatmentPage";

export const metadata = { title: "INMODE Forma · VEME Beauty" };

export default function InmodeForma() {
  return (
    <TreatmentPage
      category="Medicina Estética · Antienvejecimiento · INMODE"
      title="INMODE Forma"
      subtitle="Radiofrecuencia continua para lifting y reafirmación facial sin dolor"
      description="INMODE Forma utiliza radiofrecuencia de 40.68 MHz con control inteligente de temperatura para calentar de forma homogénea las capas profundas de la piel. El resultado es una estimulación intensa del colágeno que produce un efecto lifting, reafirmante y rejuvenecedor de forma no invasiva y totalmente indolora."
      benefits={[
        "Tratamiento completamente indoloro y relajante",
        "Control inteligente de temperatura en tiempo real",
        "Reafirmación y lifting progresivos",
        "Estimulación del colágeno en profundidad",
        "Sin tiempo de recuperación",
        "Resultados mejoran con el tiempo",
      ]}
      details={[
        { label: "Duración de sesión", value: "30 – 45 minutos" },
        { label: "Número de sesiones", value: "6 – 8 sesiones" },
        { label: "Tecnología", value: "Radiofrecuencia 40.68 MHz INMODE" },
        { label: "Zonas", value: "Rostro, cuello, escote, párpados" },
        { label: "Recuperación", value: "Ninguna" },
      ]}
    />
  );
}
