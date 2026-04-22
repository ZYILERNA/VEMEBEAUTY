import TreatmentPage from "../components/TreatmentPage";

export const metadata = { title: "THERMAGE FLX · VEME Beauty" };

export default function ThermageFLX() {
  return (
    <TreatmentPage
      category="Medicina Estética · Antienvejecimiento"
      title="THERMAGE FLX"
      subtitle="Lifting sin cirugía con radiofrecuencia monopolar de última generación"
      description="THERMAGE FLX es el estándar de oro en el tratamiento no invasivo de flacidez. Utiliza radiofrecuencia monopolar para calentar las capas profundas de la piel, estimulando la producción de colágeno nuevo y remodelando el existente. El resultado es una piel más firme, tersa y rejuvenecida con una sola sesión."
      benefits={[
        "Lifting y reafirmación sin cirugía ni agujas",
        "Resultados progresivos durante 3 – 6 meses",
        "Una sola sesión es suficiente",
        "Apto para rostro, párpados, cuello, escote y cuerpo",
        "Sin tiempo de inactividad",
        "Tecnología COMFORT PULSE para máximo confort",
      ]}
      details={[
        { label: "Duración de sesión", value: "45 – 90 minutos" },
        { label: "Número de sesiones", value: "1 sesión anual" },
        { label: "Resultados visibles", value: "Inmediatos y progresivos hasta 6 meses" },
        { label: "Tecnología", value: "Radiofrecuencia monopolar 6ª generación" },
        { label: "Zonas", value: "Rostro, ojos, cuello, cuerpo" },
        { label: "Recuperación", value: "Ninguna" },
      ]}
      image="/images/Thermage-FLX-Tedavi-Sonrasi-Bakim-ve-Sonuclar-684x1024-1-200x300.jpg"
    />
  );
}
