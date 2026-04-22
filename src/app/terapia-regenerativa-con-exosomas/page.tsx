import TreatmentPage from "../components/TreatmentPage";

export const metadata = { title: "Terapia Regenerativa con Exosomas · VEME Beauty" };

export default function TerapiaExosomas() {
  return (
    <TreatmentPage
      category="Medicina Estética"
      title="Terapia Regenerativa con Exosomas"
      subtitle="La frontera de la medicina regenerativa para rejuvenecer y reparar la piel"
      description="Los exosomas son nanovesículas extracelulares que actúan como mensajeros entre células, transportando factores de crecimiento, proteínas y ARN que estimulan la regeneración celular. Aplicados en medicina estética, los exosomas representan la última revolución en tratamientos regenerativos: aceleran la recuperación post-procedimiento, estimulan el colágeno, mejoran la calidad cutánea y tratan la alopecia."
      benefits={[
        "Regeneración celular de última generación",
        "Estimulación masiva de colágeno y elastina",
        "Recuperación acelerada post-procedimiento",
        "Tratamiento de alopecia y pérdida capilar",
        "Mejora la calidad, textura y luminosidad",
        "Tecnología punta con evidencia científica creciente",
      ]}
      details={[
        { label: "Duración de sesión", value: "45 – 60 minutos" },
        { label: "Número de sesiones", value: "2 – 4 sesiones" },
        { label: "Aplicación", value: "Microinyecciones o post-láser" },
        { label: "Recuperación", value: "Mínima" },
        { label: "Indicaciones", value: "Rejuvenecimiento, alopecia, post-procedimiento" },
      ]}
    />
  );
}
