import TreatmentPage from "../components/TreatmentPage";
import { treatmentMetadata } from "@/lib/seo";

export const metadata = treatmentMetadata("hidroxiapatita-calcica");

export default function HidroxiapatitaCalcica() {
  return (
    <TreatmentPage
      slug="hidroxiapatita-calcica"
      category="Medicina Estética"
      title="Hidroxiapatita Cálcica"
      subtitle="El relleno bioestimulador más eficaz para recuperar estructura y firmeza"
      description="La hidroxiapatita cálcica (Radiesse) es un relleno bioestimulador de última generación que no solo aporta volumen inmediato, sino que estimula de forma intensa la producción de colágeno propio. Sus microesferas de calcio actúan como andamiaje para que los fibroblastos generen nuevo tejido, consiguiendo una mejoría progresiva y muy duradera de la firmeza y la calidad cutánea."
      benefits={[
        "Efecto relleno inmediato + bioestimulación a largo plazo",
        "Estimula la producción de colágeno propio",
        "Resultados muy duraderos (12 – 18 meses)",
        "Mejora la calidad global de la piel",
        "Apto para rostro y manos",
        "Compatible con otros tratamientos",
      ]}
      details={[
        { label: "Duración de sesión", value: "30 – 45 minutos" },
        { label: "Duración del resultado", value: "12 – 18 meses" },
        { label: "Producto", value: "Radiesse (hidroxiapatita cálcica)" },
        { label: "Recuperación", value: "Leve inflamación 24 – 72h" },
        { label: "Zonas", value: "Rostro, escote, manos" },
      ]}
    />
  );
}
