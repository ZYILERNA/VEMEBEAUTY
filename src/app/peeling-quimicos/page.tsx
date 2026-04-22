import TreatmentPage from "../components/TreatmentPage";

export const metadata = { title: "Peeling Químicos · VEME Beauty" };

export default function PeelingQuimicos() {
  return (
    <TreatmentPage
      category="Medicina Estética"
      title="Peeling Químicos"
      subtitle="Renovación celular controlada con ácidos para transformar la piel"
      description="Los peelings químicos utilizan soluciones ácidas a distintas concentraciones para exfoliar y renovar la piel en profundidad. En VEME Beauty realizamos peelings superficiales (AHA, BHA, mandélico), medios (TCA) y personalizados según el diagnóstico de cada piel. Son tratamientos altamente efectivos para manchas, acné, envejecimiento y mejora de la textura."
      benefits={[
        "Renovación celular controlada y profunda",
        "Reduce manchas, melasma y discromías",
        "Trata el acné activo y sus secuelas",
        "Mejora arrugas finas y textura rugosa",
        "Piel más luminosa, uniforme y renovada",
        "Personalizables según tipo y necesidad de cada piel",
      ]}
      details={[
        { label: "Duración de sesión", value: "30 – 45 minutos" },
        { label: "Número de sesiones", value: "3 – 6 sesiones según protocolo" },
        { label: "Tipos disponibles", value: "Superficial, medio, personalizado" },
        { label: "Recuperación", value: "1 – 7 días según profundidad" },
        { label: "Indicaciones", value: "Manchas, acné, arrugas, textura, luminosidad" },
      ]}
    />
  );
}
