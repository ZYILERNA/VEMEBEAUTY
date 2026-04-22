import TreatmentPage from "../components/TreatmentPage";

export const metadata = { title: "BTL Corporal · VEME Beauty" };

export default function BTLCorporal() {
  return (
    <TreatmentPage
      category="Medicina Estética · Antienvejecimiento"
      title="BTL Corporal"
      subtitle="Tres tecnologías avanzadas para esculpir el cuerpo sin cirugía"
      description="BTL Corporal es una plataforma de tratamientos corporales no invasivos que integra tres tecnologías de vanguardia: BTL Exilis (radiofrecuencia + ultrasonido), BTL Vanquish (radiofrecuencia selectiva sin contacto) y BTL Emsculpt (estimulación electromagnética para construcción muscular). Cada tecnología se aplica según los objetivos específicos de cada paciente para lograr un contorno corporal mejorado de forma natural y progresiva."
      benefits={[
        "BTL Exilis: destrucción de grasa + estimulación de colágeno simultánea",
        "BTL Vanquish: radiofrecuencia selectiva sin contacto para destrucción de grasa",
        "BTL Emsculpt: 20.000 contracciones musculares por sesión para tonificar",
        "Sin cirugía, sin anestesia, sin incisiones",
        "Sin tiempo de recuperación — actividad normal inmediata",
        "Resultados progresivos y naturales",
      ]}
      details={[
        { label: "Duración de sesión", value: "30 – 45 minutos" },
        { label: "Número de sesiones", value: "4 – 8 sesiones según tecnología" },
        { label: "Tecnologías", value: "BTL Exilis + BTL Vanquish + BTL Emsculpt" },
        { label: "Zonas", value: "Abdomen, flancos, glúteos, muslos, brazos, espalda" },
        { label: "Recuperación", value: "Ninguna" },
      ]}
    />
  );
}
