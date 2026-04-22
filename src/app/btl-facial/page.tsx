import TreatmentPage from "../components/TreatmentPage";

export const metadata = { title: "BTL Facial · VEME Beauty" };

export default function BTLFacial() {
  return (
    <TreatmentPage
      category="Medicina Estética · Antienvejecimiento"
      title="BTL Facial"
      subtitle="Rejuvenecimiento facial no invasivo con tecnología BTL"
      description="El tratamiento BTL Facial utiliza tecnología de radiofrecuencia avanzada para estimular la producción de colágeno y elastina en el rostro, produciendo un efecto lifting, reafirmante y rejuvenecedor. Es un tratamiento cómodo, sin agujas y sin recuperación, ideal para quienes buscan mejorar su aspecto de forma progresiva y natural."
      benefits={[
        "Lifting facial no invasivo",
        "Estimulación profunda de colágeno y elastina",
        "Mejora el óvalo facial y la firmeza",
        "Sin agujas, sin dolor, sin recuperación",
        "Resultados progresivos y acumulativos",
        "Apto para todo tipo de pieles",
      ]}
      details={[
        { label: "Duración de sesión", value: "30 – 45 minutos" },
        { label: "Número de sesiones", value: "6 – 8 sesiones" },
        { label: "Tecnología", value: "Radiofrecuencia BTL" },
        { label: "Zonas", value: "Rostro, cuello y escote" },
        { label: "Recuperación", value: "Ninguna" },
      ]}
    />
  );
}
