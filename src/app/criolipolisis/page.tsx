import TreatmentPage from "../components/TreatmentPage";

export const metadata = { title: "Criolipólisis · VEME Beauty" };

export default function Criolipolisis() {
  return (
    <TreatmentPage
      category="Estética · Dispositivos"
      title="Criolipólisis"
      subtitle="Eliminación de grasa localizada mediante frío controlado sin cirugía"
      description="La criolipólisis es la técnica no invasiva más efectiva para eliminar depósitos de grasa localizada. Mediante la aplicación de frío controlado, destruye selectivamente las células grasas (adipocitos) sin dañar la piel ni los tejidos adyacentes. Las células destruidas son eliminadas de forma natural por el organismo en las semanas siguientes."
      benefits={[
        "Elimina hasta un 25% de la grasa localizada por sesión",
        "Sin cirugía, sin agujas, sin anestesia",
        "Resultados visibles a partir de las 3 – 4 semanas",
        "Resultados definitivos a los 2 – 3 meses",
        "Sin tiempo de recuperación",
        "Tratamiento cómodo, se puede leer o usar el móvil durante la sesión",
      ]}
      details={[
        { label: "Duración de sesión", value: "45 – 60 minutos por zona" },
        { label: "Número de sesiones", value: "1 – 3 sesiones por zona" },
        { label: "Resultados", value: "Visibles a las 3 – 4 semanas, definitivos a los 3 meses" },
        { label: "Zonas tratables", value: "Abdomen, flancos, muslos, brazos, papada" },
        { label: "Recuperación", value: "Ninguna (posible enrojecimiento temporal)" },
      ]}
    />
  );
}
