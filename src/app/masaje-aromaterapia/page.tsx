import TreatmentPage from "../components/TreatmentPage";

export const metadata = { title: "Masaje Aromaterapia · VEME Beauty" };

export default function MasajeAromaterapia() {
  return (
    <TreatmentPage
      category="Estética · Tratamientos Corporales"
      title="Masaje Aromaterapia"
      subtitle="Relajación profunda del cuerpo y la mente con aceites esenciales naturales"
      description="El masaje de aromaterapia combina las propiedades terapéuticas de los aceites esenciales naturales con técnicas de masaje sueco y drenaje para ofrecer una experiencia de bienestar total. Los aceites esenciales se seleccionan en función de las necesidades de cada persona — relajantes, revitalizantes o desintoxicantes — potenciando los efectos del masaje a nivel físico y emocional."
      benefits={[
        "Relajación profunda del sistema nervioso",
        "Alivio de tensiones musculares",
        "Mejora de la circulación sanguínea y linfática",
        "Reducción del estrés y la ansiedad",
        "Piel más suave e hidratada",
        "Equilibrio emocional y bienestar general",
      ]}
      details={[
        { label: "Duración de sesión", value: "60 – 90 minutos" },
        { label: "Frecuencia recomendada", value: "Semanal o quincenal" },
        { label: "Recuperación", value: "Ninguna" },
        { label: "Indicaciones", value: "Estrés, tensión muscular, insomnio, bienestar" },
      ]}
    />
  );
}
