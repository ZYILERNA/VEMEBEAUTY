import TreatmentPage from "../components/TreatmentPage";

export const metadata = { title: "Head Spa KÉRASTASE · VEME Beauty" };

export default function HeadSpaKerastase() {
  return (
    <TreatmentPage
      category="Estética · Tratamientos Capilares"
      title="Head Spa KÉRASTASE"
      subtitle="La excelencia capilar francesa para transformar tu cabello y cuero cabelludo"
      description="El Head Spa KÉRASTASE es el ritual capilar de lujo por excelencia. Utilizando los diagnósticos y protocolos de la marca francesa líder en cosmética capilar de alta gama, este tratamiento identifica las necesidades específicas de tu cabello y cuero cabelludo para aplicar el protocolo KÉRASTASE más adecuado, con resultados inmediatos y acumulativos."
      benefits={[
        "Diagnóstico capilar profesional KÉRASTASE",
        "Tratamiento personalizado según tipo de cabello",
        "Nutrición, reparación o equilibrio según necesidad",
        "Masaje de cuero cabelludo incluido",
        "Brillo, suavidad y manejabilidad incomparables",
        "Olores y texturas de lujo",
      ]}
      details={[
        { label: "Duración de sesión", value: "60 – 75 minutos" },
        { label: "Frecuencia recomendada", value: "Mensual" },
        { label: "Marca", value: "KÉRASTASE (L'Oréal Groupe)" },
        { label: "Recuperación", value: "Ninguna" },
      ]}
      image="/images/kerastase-300x300.png"
    />
  );
}
