import TreatmentPage from "../components/TreatmentPage";

export const metadata = { title: "EXILIS ULTRA 360 · VEME Beauty" };

export default function ExilisUltra360() {
  return (
    <TreatmentPage
      category="Medicina Estética · Antienvejecimiento"
      title="EXILIS ULTRA 360"
      subtitle="Sinergia de radiofrecuencia y ultrasonido para rejuvenecer y esculpir"
      description="EXILIS ULTRA 360 es el único dispositivo que combina radiofrecuencia monopolar y ultrasonido enfocado en un mismo aplicador, con tecnología 360° de control de energía. Esta combinación única permite tratar tanto la flacidez cutánea como la grasa localizada de forma no invasiva, en rostro y cuerpo, con resultados clínicamente demostrados."
      benefits={[
        "Combina radiofrecuencia y ultrasonido en un mismo paso",
        "Reafirma la piel y reduce grasa simultáneamente",
        "Tratamiento indoloro y sin recuperación",
        "Apto para rostro y cuerpo",
        "Estimulación de colágeno y elastina",
        "Tecnología de control 360° para máxima eficacia",
      ]}
      details={[
        { label: "Duración de sesión", value: "30 – 60 minutos" },
        { label: "Número de sesiones", value: "4 – 6 sesiones" },
        { label: "Tecnología", value: "Radiofrecuencia + Ultrasonido 360°" },
        { label: "Zonas", value: "Rostro, cuello, abdomen, muslos, brazos" },
        { label: "Recuperación", value: "Ninguna" },
      ]}
    />
  );
}
