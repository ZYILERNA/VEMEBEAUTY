import TreatmentPage from "../components/TreatmentPage";

export const metadata = { title: "Micropigmentación · VEME Beauty" };

export default function Micropigmentacion() {
  return (
    <TreatmentPage
      category="Estética · Maquillaje Permanente"
      title="Micropigmentación"
      subtitle="Maquillaje semipermanente para cejas, labios y ojos con resultados naturales"
      description="La micropigmentación es una técnica de maquillaje semipermanente que introduce pigmentos naturales en las capas superficiales de la piel mediante microagujas. En VEME Beauty realizamos micropigmentación de cejas (efecto pelo a pelo, sombra o combinado), labios y delineado de ojos, siempre buscando el resultado más natural y adaptado a los rasgos de cada persona."
      benefits={[
        "Cejas perfectas todos los días sin esfuerzo",
        "Técnica pelo a pelo para un resultado hiperrealista",
        "Labios definidos con color natural",
        "Delineado permanente de ojos",
        "Ahorra tiempo en tu rutina diaria",
        "Resultados duraderos 1 – 3 años",
      ]}
      details={[
        { label: "Duración de sesión", value: "90 – 120 minutos (incluye diseño)" },
        { label: "Retoque", value: "A las 4 – 6 semanas" },
        { label: "Duración del resultado", value: "1 – 3 años" },
        { label: "Recuperación", value: "5 – 7 días de costra superficial" },
        { label: "Zonas", value: "Cejas, labios, ojos" },
      ]}
    />
  );
}
