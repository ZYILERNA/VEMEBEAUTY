import TreatmentPage from "../components/TreatmentPage";

export const metadata = { title: "Stellar M22 · VEME Beauty" };

export default function StellarM22() {
  return (
    <TreatmentPage
      category="Medicina Estética"
      title="Stellar M22"
      subtitle="La plataforma multimodal más versátil para tratamientos de luz y láser"
      description="Stellar M22 de Lumenis es la plataforma de tratamientos con luz más avanzada del mercado. Integra múltiples tecnologías — IPL, Nd:YAG, Er:YAG y ResurFX — en un único dispositivo para tratar una amplia gama de indicaciones: manchas, rojeces, telangiectasias, rejuvenecimiento, depilación y resurfacing cutáneo."
      benefits={[
        "Elimina manchas solares y de edad",
        "Trata rojeces, cuperosis y telangiectasias",
        "Rejuvenecimiento global de la piel",
        "Resurfacing fraccionado para mejorar textura",
        "Depilación con luz pulsada",
        "Tecnología multimodal en un solo dispositivo",
      ]}
      details={[
        { label: "Duración de sesión", value: "30 – 60 minutos" },
        { label: "Número de sesiones", value: "3 – 6 sesiones según indicación" },
        { label: "Tecnología", value: "IPL + Nd:YAG + Er:YAG + ResurFX (Lumenis)" },
        { label: "Recuperación", value: "Variable según modalidad (0 – 5 días)" },
        { label: "Indicaciones", value: "Manchas, rojeces, arrugas, textura, vello" },
      ]}
      image="/images/lumenis_StellarM22_device-300x220.webp"
    />
  );
}
