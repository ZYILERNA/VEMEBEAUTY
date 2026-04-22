import TreatmentPage from "../components/TreatmentPage";

export const metadata = { title: "Eliminación de Tatuajes · VEME Beauty" };

export default function EliminacionTatuajes() {
  return (
    <TreatmentPage
      category="Tratamientos especiales"
      title="Eliminación de Tatuajes"
      subtitle='"Eliminar el tatuaje sin dejar huella. Y si la hay, la mejoramos."'
      description="En VEME Beauty combinamos las tecnologías más avanzadas para eliminar tatuajes de todos los colores, tipos y profundidades sin dañar la piel. No existe un protocolo universal: diseñamos un plan personalizado para cada caso combinando láser picosegundo, láser fraccionado Fotona, crioterapia y LED terapéutico según las características del tatuaje y el tipo de piel."
      benefits={[
        "Elimina tatuajes de todos los colores, incluyendo verde, azul y amarillo",
        "Láser picosegundo Pico Wonte con múltiples longitudes de onda",
        "Fotona Dynamis SP para eliminación fraccionada avanzada",
        "Crioterapia para prevenir ampollas y proteger la piel",
        "LED terapéutico para acelerar la recuperación",
        "Protocolo especial para tatuajes perioculares con supervisión oftalmológica",
        "Tratamos casos complejos incluyendo corrección de tatuajes recientes",
      ]}
      details={[
        { label: "Duración de sesión", value: "30 – 60 minutos según tamaño" },
        { label: "Número de sesiones", value: "4 – 10 sesiones (según tatuaje)" },
        { label: "Intervalo entre sesiones", value: "6 – 8 semanas" },
        { label: "Tecnologías", value: "Láser picosegundo + Fotona Dynamis SP + Crioterapia + LED" },
        { label: "Recuperación", value: "2 – 5 días de enrojecimiento leve" },
        { label: "Filosofía", value: "Eliminar el tatuaje sin dejar huella. Y si la hay, la mejoramos." },
      ]}
      video="/videos/FinalTatuaje.mp4"
    />
  );
}
