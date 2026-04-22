import TreatmentPage from "../components/TreatmentPage";

export const metadata = { title: "INMODE MINI FX · VEME Beauty" };

export default function InmodeMiniFX() {
  return (
    <TreatmentPage
      category="Medicina Estética · Antienvejecimiento · INMODE"
      title="INMODE MINI FX"
      subtitle="Eliminación de grasa localizada con radiofrecuencia subdermal en zonas pequeñas"
      description="MINI FX de INMODE es un tratamiento minimente invasivo que combina radiofrecuencia subdermal con succión para tratar depósitos de grasa en zonas pequeñas como la papada, la parte interna de las rodillas o los brazos. Actúa directamente sobre el tejido adiposo y estimula la retracción cutánea para un resultado lifting y reafirmante."
      benefits={[
        "Reduce la grasa en zonas pequeñas difíciles de tratar",
        "Efecto reafirmante de la piel simultáneo",
        "Mínimamente invasivo (microagujas)",
        "Resultados en 1 – 2 sesiones",
        "Ideal para papada, rodillas internas y brazos",
        "Mínima recuperación",
      ]}
      details={[
        { label: "Duración de sesión", value: "30 – 60 minutos" },
        { label: "Número de sesiones", value: "1 – 2 sesiones" },
        { label: "Tecnología", value: "Radiofrecuencia subdermal + aspiración INMODE" },
        { label: "Zonas", value: "Papada, brazos, rodillas, zonas pequeñas" },
        { label: "Recuperación", value: "1 – 3 días de leve inflamación" },
      ]}
    />
  );
}
