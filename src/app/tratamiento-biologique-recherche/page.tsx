import TreatmentPage from "../components/TreatmentPage";

export const metadata = { title: "Tratamiento Biologique Recherche · VEME Beauty" };

export default function TratamientoBR() {
  return (
    <TreatmentPage
      category="Estética · Tratamientos Faciales"
      title="Tratamiento Biologique Recherche"
      subtitle="El protocolo facial más exclusivo del mundo, personalizado al máximo"
      description="Biologique Recherche es la marca de referencia de los mejores spas y centros de estética del mundo. Su filosofía se basa en el diagnóstico profundo del estado de la piel (momento biologique) para diseñar un protocolo 100% personalizado. Sus activos de altísima concentración y sus técnicas manuales exclusivas producen resultados inmediatos y transformadores."
      benefits={[
        "Diagnóstico preciso del 'momento biologique' de tu piel",
        "Protocolo 100% personalizado y único",
        "Activos de altísima concentración y pureza",
        "Resultados visibles desde la primera sesión",
        "Trata cualquier tipo de piel y problemática",
        "Experiencia de lujo y bienestar",
      ]}
      details={[
        { label: "Duración de sesión", value: "60 – 90 minutos" },
        { label: "Frecuencia recomendada", value: "Quincenal o mensual" },
        { label: "Marca", value: "Biologique Recherche (Francia)" },
        { label: "Recuperación", value: "Ninguna" },
        { label: "Indicaciones", value: "Todos los tipos de piel y problemáticas" },
      ]}
      image="/images/biologiq-300x300.png"
    />
  );
}
