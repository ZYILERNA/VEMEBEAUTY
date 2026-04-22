import TreatmentPage from "../components/TreatmentPage";

export const metadata = { title: "Depilación Diodo · VEME Beauty" };

export default function DepilacionDiodo() {
  return (
    <TreatmentPage
      category="Estética · Dispositivos"
      title="Depilación Láser Diodo"
      subtitle="Eliminación permanente del vello con la tecnología láser más segura y eficaz"
      description="La depilación con láser de diodo es el método más eficaz y seguro para la eliminación permanente del vello no deseado. El láser actúa directamente sobre el folículo piloso destruyéndolo sin dañar la piel circundante. En VEME Beauty utilizamos equipos de última generación con sistema de enfriamiento integrado para mayor confort durante el tratamiento."
      benefits={[
        "Eliminación permanente del vello",
        "Apto para todo tipo de pieles y fototipos",
        "Sistema de enfriamiento integrado para máximo confort",
        "Tratamiento rápido — piernas completas en 30 minutos",
        "Sin ingrown hairs ni irritaciones posteriores",
        "Resultados desde la primera sesión",
      ]}
      details={[
        { label: "Duración de sesión", value: "15 – 60 minutos según zona" },
        { label: "Número de sesiones", value: "6 – 10 sesiones" },
        { label: "Intervalo entre sesiones", value: "4 – 8 semanas" },
        { label: "Tecnología", value: "Láser de diodo 808nm" },
        { label: "Zonas tratables", value: "Todo el cuerpo y cara" },
        { label: "Recuperación", value: "Ninguna" },
      ]}
    />
  );
}
