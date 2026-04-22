import TreatmentPage from "../components/TreatmentPage";

export const metadata = { title: "Luz Terapia · VEME Beauty" };

export default function LuzTerapia() {
  return (
    <TreatmentPage
      category="Medicina Estética"
      title="Luz Terapia"
      subtitle="Fototerapia LED para regenerar, calmar y rejuvenecer la piel sin agresión"
      description="La fototerapia LED utiliza longitudes de onda específicas de luz para estimular los procesos naturales de regeneración celular de la piel. La luz roja estimula el colágeno y el rejuvenecimiento, la azul combate el acné, la infrarroja actúa en capas profundas y la amarilla reduce rojeces e inflamación. Es un tratamiento 100% indoloro y sin efectos secundarios."
      benefits={[
        "Estimula la producción de colágeno (luz roja)",
        "Elimina bacterias causantes del acné (luz azul)",
        "Reduce rojeces e inflamación (luz amarilla)",
        "Regeneración celular profunda (infrarrojo)",
        "100% indoloro y relajante",
        "Complemento ideal a cualquier tratamiento",
      ]}
      details={[
        { label: "Duración de sesión", value: "20 – 30 minutos" },
        { label: "Frecuencia recomendada", value: "2 – 3 veces por semana inicialmente" },
        { label: "Tecnología", value: "LED fototerapia multiespectro" },
        { label: "Recuperación", value: "Ninguna" },
        { label: "Indicaciones", value: "Acné, arrugas, rojeces, cicatrización" },
      ]}
    />
  );
}
