import TreatmentPage from "../components/TreatmentPage";

export const metadata = { title: "Head Spa Miriamquevedo · VEME Beauty" };

export default function HeadSpaMiriamquevedo() {
  return (
    <TreatmentPage
      category="Estética · Tratamientos Capilares"
      title="Head Spa Miriamquevedo"
      subtitle="La ciencia del cabello más avanzada de España con ingredientes ultra-premium"
      description="Miriamquevedo es la marca española de cosmética capilar de ultra-lujo reconocida internacionalmente. Sus fórmulas únicas incorporan ingredientes como el caviar, el oro y extractos botánicos de rarísima procedencia. El Head Spa Miriamquevedo es el tratamiento capilar más exclusivo de nuestra carta, diseñado para quienes buscan lo mejor de lo mejor."
      benefits={[
        "Ingredientes ultra-premium: caviar, oro, extractos botánicos únicos",
        "Reparación y regeneración total del cabello",
        "Cuero cabelludo equilibrado y sano",
        "Brillo espectacular y suavidad excepcional",
        "Efecto anti-envejecimiento capilar",
        "Una experiencia sensorial de máximo lujo",
      ]}
      details={[
        { label: "Duración de sesión", value: "75 – 90 minutos" },
        { label: "Frecuencia recomendada", value: "Mensual" },
        { label: "Marca", value: "Miriamquevedo" },
        { label: "Recuperación", value: "Ninguna" },
      ]}
      image="/images/miriam-300x300.png"
      video="/videos/miriamhero.mp4"
    />
  );
}
