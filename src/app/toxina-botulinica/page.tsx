import TreatmentPage from "../components/TreatmentPage";

export const metadata = { title: "Toxina Botulínica · VEME Beauty" };

export default function ToxinaBotulinica() {
  return (
    <TreatmentPage
      category="Medicina Estética"
      title="Toxina Botulínica"
      subtitle="El tratamiento médico-estético más popular del mundo para suavizar arrugas de expresión"
      description="La toxina botulínica (bótox) es el tratamiento médico-estético más realizado a nivel mundial. Aplicada por nuestros médicos especialistas, relaja de forma selectiva los músculos responsables de las arrugas de expresión, produciendo un resultado natural, rejuvenecido y sin gestos congelados. En VEME Beauty priorizamos siempre la naturalidad y la expresividad."
      benefits={[
        "Suaviza arrugas frontales, entrecejo y patas de gallo",
        "Resultado natural sin pérdida de expresividad",
        "Tratamiento rápido — menos de 30 minutos",
        "Sin recuperación — efecto 'lunch-break'",
        "También útil para hiperhidrosis y bruxismo",
        "Resultados visibles a los 3 – 7 días",
      ]}
      details={[
        { label: "Duración de sesión", value: "15 – 30 minutos" },
        { label: "Duración del resultado", value: "4 – 6 meses" },
        { label: "Recuperación", value: "Ninguna (evitar esfuerzo 24h)" },
        { label: "Aplicación", value: "Médico especialista" },
        { label: "Zonas", value: "Frente, entrecejo, patas de gallo, cuello, labios" },
      ]}
    />
  );
}
