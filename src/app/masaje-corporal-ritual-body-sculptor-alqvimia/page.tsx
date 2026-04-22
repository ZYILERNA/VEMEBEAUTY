import TreatmentPage from "../components/TreatmentPage";

export const metadata = { title: "Masaje Body Sculptor Alqvimia · VEME Beauty" };

export default function MasajeAlqvimia() {
  return (
    <TreatmentPage
      category="Estética · Tratamientos Corporales"
      title="Masaje Body Sculptor Alqvimia"
      subtitle="Ritual corporal reafirmante y modelador con la exclusiva fórmula Alqvimia"
      description="El Masaje Corporal Ritual Body Sculptor de Alqvimia es un tratamiento de lujo que combina técnicas de masaje reafirmante con los aceites y bálsamos de la prestigiosa marca española Alqvimia. Sus activos naturales — algas, cafeína, aceites esenciales botánicos — trabajan en sinergia con las maniobras de modelado para reducir la apariencia de la celulitis, reafirmar y nutrir la piel."
      benefits={[
        "Efecto reafirmante y tensor visible",
        "Reduce la apariencia de la celulitis",
        "Modelado y esculpido de la silueta",
        "Nutrición profunda de la piel",
        "Drenaje linfático integrado",
        "Experiencia sensorial de lujo",
      ]}
      details={[
        { label: "Duración de sesión", value: "75 – 90 minutos" },
        { label: "Frecuencia recomendada", value: "Quincenal" },
        { label: "Marca", value: "Alqvimia" },
        { label: "Recuperación", value: "Ninguna" },
        { label: "Indicaciones", value: "Celulitis, flacidez, retención, modelado" },
      ]}
    />
  );
}
