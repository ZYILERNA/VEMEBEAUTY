import TreatmentPage from "../components/TreatmentPage";

export const metadata = { title: "Rellenos con Ácido Hialurónico · VEME Beauty" };

export default function RellenosHialuronico() {
  return (
    <TreatmentPage
      category="Medicina Estética"
      title="Rellenos con Ácido Hialurónico"
      subtitle="Restauración del volumen y la hidratación con el relleno más seguro y natural"
      description="El ácido hialurónico es una molécula naturalmente presente en nuestra piel que se va reduciendo con la edad. Los rellenos con ácido hialurónico permiten restaurar el volumen perdido, redefinir contornos, hidratar en profundidad y corregir arrugas y surcos de forma natural y reversible. En VEME Beauty utilizamos las marcas más prestigiosas con los perfiles de seguridad más altos."
      benefits={[
        "Restaura el volumen facial perdido por el envejecimiento",
        "Rellena y suaviza surcos y arrugas profundas",
        "Hidratación intensa desde el interior",
        "Redefine y mejora el contorno facial",
        "Resultado natural y reversible (enzima hialuronidasa)",
        "Efecto inmediato",
      ]}
      details={[
        { label: "Duración de sesión", value: "30 – 60 minutos" },
        { label: "Duración del resultado", value: "9 – 18 meses según zona y producto" },
        { label: "Recuperación", value: "Leve inflamación 24 – 72h" },
        { label: "Aplicación", value: "Médico especialista" },
        { label: "Zonas", value: "Labios, pómulos, ojeras, surcos, mandíbula, manos" },
      ]}
    />
  );
}
