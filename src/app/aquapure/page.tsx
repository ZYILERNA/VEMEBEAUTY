import TreatmentPage from "../components/TreatmentPage";

export const metadata = { title: "Aquapure · VEME Beauty" };

export default function Aquapure() {
  return (
    <TreatmentPage
      category="Estética · Dispositivos"
      title="Aquapure"
      subtitle="4 tecnologías en un solo dispositivo para una piel completamente renovada"
      description="Aquapure by Classys es un sistema facial avanzado que combina cuatro tecnologías de vanguardia en un único dispositivo: hidrodermoabrasión con agua, radiofrecuencia, ultrasonidos y microcorrientes. Cada tecnología actúa en una capa diferente de la piel para ofrecer resultados globales que van desde la limpieza más profunda hasta la tonificación muscular y el rejuvenecimiento."
      benefits={[
        "Hidrodermoabrasión: limpieza profunda de poros con agua y sueros a presión",
        "Radiofrecuencia: estimulación de colágeno y elastina en capas profundas",
        "Ultrasonidos: penetración máxima de activos cosméticos",
        "Microcorrientes: tonificación muscular y regeneración celular",
        "Tratamiento personalizable según tipo de piel",
        "Sin dolor ni tiempo de recuperación, resultados inmediatos",
      ]}
      details={[
        { label: "Duración de sesión", value: "60 minutos" },
        { label: "Frecuencia recomendada", value: "Cada 2 – 4 semanas" },
        { label: "Tecnologías", value: "Hidrodermoabrasión + RF + Ultrasonidos + Microcorrientes" },
        { label: "Recuperación", value: "Ninguna" },
        { label: "Indicaciones", value: "Poros dilatados, flacidez, deshidratación, envejecimiento" },
      ]}
      image="/images/AQUAPURE-BY-CLASSYS-1-105x300.png"
    />
  );
}
