import TreatmentPage from "../components/TreatmentPage";

export const metadata = { title: "PICOCARE · VEME Beauty" };

export default function Picocare() {
  return (
    <TreatmentPage
      category="Medicina Estética"
      title="PICOCARE"
      subtitle="El láser picosegundo más avanzado para pigmentaciones, rejuvenecimiento y eliminación de tatuajes"
      description="PICOCARE es el sistema láser picosegundo de referencia mundial. Emite pulsos de energía de una duración extremadamente corta (picosegundos), lo que permite tratar pigmentaciones, melasma, manchas solares, rejuvenecimiento cutáneo y eliminación de tatuajes con una eficacia sin precedentes y mínimo riesgo térmico sobre la piel."
      benefits={[
        "Elimina manchas y pigmentaciones resistentes",
        "Tratamiento del melasma con máxima seguridad",
        "Rejuvenecimiento global de la piel",
        "Estimulación de colágeno y elastina",
        "Eliminación de tatuajes multicolor",
        "Resultados visibles desde la primera sesión",
        "Mínimo tiempo de inactividad",
      ]}
      details={[
        { label: "Duración de sesión", value: "20 – 45 minutos" },
        { label: "Número de sesiones", value: "3 – 6 sesiones" },
        { label: "Tecnología", value: "Láser picosegundo Nd:YAG" },
        { label: "Indicaciones", value: "Manchas, melasma, tatuajes, rejuvenecimiento" },
        { label: "Recuperación", value: "Mínima, 1 – 3 días" },
      ]}
      video="/videos/PicoSegundo.mp4"
      image="/images/Diseno-sin-titulo-300x300.png"
    />
  );
}
