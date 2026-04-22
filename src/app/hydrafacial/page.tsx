import TreatmentPage from "../components/TreatmentPage";

export const metadata = { title: "Hydrafacial · VEME Beauty" };

export default function Hydrafacial() {
  return (
    <TreatmentPage
      category="Estética · Dispositivos"
      title="Hydrafacial"
      subtitle="La limpieza facial más avanzada del mundo con hidratación profunda en un solo paso"
      description="Hydrafacial es el tratamiento de referencia mundial en limpieza, exfoliación e hidratación facial. Mediante su patentada tecnología Vortex-Fusion, combina limpieza profunda, extracción de impurezas, exfoliación y aplicación de sueros con antioxidantes, péptidos y ácido hialurónico adaptados a cada tipo de piel."
      benefits={[
        "Limpieza profunda de poros y extracción de comedones",
        "Hidratación intensa inmediata y duradera",
        "Mejora la textura y luminosidad de la piel",
        "Reduce líneas finas y arrugas superficiales",
        "Trata manchas y hiperpigmentaciones",
        "Apto para todo tipo de pieles, incluyendo pieles sensibles",
        "Sin tiempo de recuperación, efecto inmediato",
      ]}
      details={[
        { label: "Duración de sesión", value: "45 – 60 minutos" },
        { label: "Frecuencia recomendada", value: "Mensual" },
        { label: "Tecnología", value: "Vortex-Fusion patentada" },
        { label: "Recuperación", value: "Ninguna" },
        { label: "Indicaciones", value: "Poros dilatados, deshidratación, manchas, acné" },
      ]}
      image="/images/LHP_Hydrafacial_Syndeo_Hero_Angle_03-FNL1-225x300.jpg"
    />
  );
}
