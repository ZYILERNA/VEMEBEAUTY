import { TREATMENT_IMAGES, CATEGORY_IMAGES } from "./media";

export type GroupKey =
  | "facial"
  | "corporal"
  | "capilar"
  | "dispositivos"
  | "maquillaje"
  | "antiaging"
  | "medicina"
  | "tatuajes";

export type Section = "estetica" | "medicina" | "tatuajes";

export interface Group {
  key: GroupKey;
  label: string;
  section: Section;
  intro: string;
}

export const GROUPS: Group[] = [
  { key: "facial", label: "Tratamientos faciales", section: "estetica", intro: "Rituales faciales con firmas de alta cosmética y protocolos personalizados para cada tipo de piel." },
  { key: "corporal", label: "Tratamientos corporales", section: "estetica", intro: "Masajes y rituales que relajan, depuran y modelan la silueta." },
  { key: "capilar", label: "Head Spa y capilar", section: "estetica", intro: "Rituales de cuero cabelludo y cabello con las firmas capilares más exclusivas." },
  { key: "dispositivos", label: "Aparatología estética", section: "estetica", intro: "Tecnología de última generación para la piel, la silueta y la depilación." },
  { key: "maquillaje", label: "Maquillaje permanente", section: "estetica", intro: "Micropigmentación de cejas, ojos y labios con un acabado natural." },
  { key: "antiaging", label: "Antienvejecimiento", section: "medicina", intro: "Lifting no quirúrgico, tensado y redensificación con las plataformas médicas más avanzadas." },
  { key: "medicina", label: "Medicina estética", section: "medicina", intro: "Inyectables, láseres y terapias regenerativas realizadas por profesionales médicos." },
  { key: "tatuajes", label: "Eliminación de tatuajes", section: "tatuajes", intro: "Protocolos combinados para eliminar tatuajes de todos los colores sin dejar huella." },
];

export interface Treatment {
  slug: string;
  name: string;
  group: GroupKey;
  summary: string;
  /** Foto real del equipo (si existe) */
  device?: string;
  /** Logotipo de la firma cosmética (si aplica) */
  brand?: { name: string; logo: string };
  featured?: boolean;
}

const T: Treatment[] = [
  // Faciales
  { slug: "microneedling-pen", name: "Microneedling Pen", group: "facial", summary: "Micropunciones controladas que estimulan colágeno y mejoran textura, poros y cicatrices." },
  { slug: "linfa-desintoxicacion", name: "Linfa Desintoxicación", group: "facial", summary: "Drenaje facial que desinflama, depura y devuelve la luminosidad al rostro." },
  { slug: "peeling-enzimatico", name: "Peeling Enzimático", group: "facial", summary: "Exfoliación suave con enzimas naturales para una piel más lisa y radiante." },
  { slug: "tratamiento-valmont", name: "Tratamiento Valmont", group: "facial", summary: "Ritual suizo de alta cosmética celular para una piel firme, nutrida y luminosa.", brand: { name: "Valmont", logo: "/images/valmont-300x300.png" } },
  { slug: "tratamiento-dmk", name: "Tratamiento DMK", group: "facial", summary: "Terapia enzimática que reeduca la piel desde dentro para resultados duraderos.", brand: { name: "DMK", logo: "/images/dmk-300x300.png" } },
  { slug: "tratamiento-biologique-recherche", name: "Biologique Recherche", group: "facial", summary: "Protocolos franceses a medida según el estado real de tu piel en cada momento.", brand: { name: "Biologique Recherche", logo: "/images/biologiq-300x300.png" } },
  { slug: "tratamiento-skinceutica", name: "Tratamiento SkinCeuticals", group: "facial", summary: "Antioxidantes y activos con respaldo científico para corregir y proteger la piel.", brand: { name: "SkinCeuticals", logo: "/images/skin-300x300.png" } },
  // Corporales
  { slug: "masaje-aromaterapia", name: "Masaje Aromaterapia", group: "corporal", summary: "Masaje relajante con aceites esenciales para liberar tensiones y equilibrar cuerpo y mente." },
  { slug: "peeling-enzimatico-corporal", name: "Peeling Enzimático Corporal", group: "corporal", summary: "Renovación corporal con enzimas que deja la piel suave, uniforme y luminosa." },
  { slug: "masaje-corporal-ritual-body-sculptor-alqvimia", name: "Body Sculptor Alqvimia", group: "corporal", summary: "Ritual modelador con aceites naturales Alqvimia para reafirmar y definir la silueta.", brand: { name: "Alqvimia", logo: "/images/Diseno-sin-titulo-300x300.png" } },
  // Capilar
  { slug: "hydrafacial-head", name: "Hydrafacial Head", group: "capilar", summary: "Limpieza e hidratación profunda del cuero cabelludo con tecnología Hydrafacial." },
  { slug: "head-spa-aveda", name: "Head Spa Aveda", group: "capilar", summary: "Ritual botánico y aromático de cuero cabelludo con la filosofía natural de Aveda.", brand: { name: "Aveda", logo: "/images/aveda-300x300.png" }, featured: true },
  { slug: "head-spa-kerastase", name: "Head Spa Kérastase", group: "capilar", summary: "Diagnóstico y ritual de lujo parisino para un cabello fuerte, brillante y sano.", brand: { name: "Kérastase", logo: "/images/kerastase-300x300.png" } },
  { slug: "head-spa-leonor-greyl", name: "Head Spa Leonor Greyl", group: "capilar", summary: "Cuidado capilar de origen vegetal y tradición parisina para cabello y cuero cabelludo.", brand: { name: "Leonor Greyl", logo: "/images/leonor-300x300.png" } },
  { slug: "head-spa-miriamquevedo", name: "Head Spa Miriamquevedo", group: "capilar", summary: "Ritual capilar con activos preciosos como caviar y oro para un brillo extraordinario.", brand: { name: "Miriamquevedo", logo: "/images/miriam-300x300.png" } },
  // Aparatología
  { slug: "aquapure", name: "Aquapure", group: "dispositivos", summary: "Hidrodermoabrasión que limpia, exfolia e hidrata en una sola sesión.", device: "/images/AQUAPURE-BY-CLASSYS-1-105x300.png" },
  { slug: "hydrafacial", name: "Hydrafacial", group: "dispositivos", summary: "La limpieza facial más avanzada: extracción, exfoliación e hidratación profunda en un paso.", device: "/images/LHP_Hydrafacial_Syndeo_Hero_Angle_03-FNL1-225x300.jpg", featured: true },
  { slug: "depilacion-diodo", name: "Depilación Láser Diodo", group: "dispositivos", summary: "Depilación láser segura y eficaz para todo tipo de piel, durante todo el año.", featured: true },
  { slug: "criolipolisis", name: "Criolipólisis", group: "dispositivos", summary: "Reducción de grasa localizada mediante frío controlado, sin cirugía." },
  { slug: "ondas-electromagneticas", name: "Ondas Electromagnéticas", group: "dispositivos", summary: "Tonificación muscular y reducción de grasa con energía electromagnética de alta intensidad." },
  // Maquillaje permanente
  { slug: "micropigmentacion", name: "Micropigmentación", group: "maquillaje", summary: "Cejas, ojos y labios definidos con un resultado natural y duradero." },
  // Antienvejecimiento
  { slug: "thermage-flx", name: "Thermage FLX", group: "antiaging", summary: "Radiofrecuencia monopolar que tensa y redensifica la piel en una sola sesión.", device: "/images/Thermage-FLX-Tedavi-Sonrasi-Bakim-ve-Sonuclar-684x1024-1-200x300.jpg", featured: true },
  { slug: "ultraformer-iii", name: "Ultraformer III", group: "antiaging", summary: "Ultrasonidos focalizados para un efecto lifting sin cirugía en rostro y cuerpo.", device: "/images/EQUIPO-ULTRAFORMER-III-199x300.png" },
  { slug: "fotona-4d-pro", name: "Fotona 4D Pro", group: "antiaging", summary: "Lifting láser en cuatro dimensiones, por dentro y por fuera de la piel." },
  { slug: "morpheus8", name: "Morpheus8", group: "antiaging", summary: "Microagujas con radiofrecuencia fraccionada para remodelar y tensar la piel en profundidad.", featured: true },
  { slug: "inmode-forma", name: "InMode Forma", group: "antiaging", summary: "Radiofrecuencia térmica que reafirma y mejora la elasticidad del rostro y el cuello." },
  { slug: "inmode-minifx", name: "InMode MiniFX", group: "antiaging", summary: "Remodelación de papada y pequeñas zonas para un contorno más definido." },
  { slug: "exilis-ultra-360", name: "Exilis Ultra 360", group: "antiaging", summary: "Radiofrecuencia y ultrasonido combinados para tensar la piel y reducir grasa.", device: "/images/1665650091aYpt88w5-1-208x300.jpg" },
  { slug: "btl-facial", name: "BTL Facial", group: "antiaging", summary: "Tonificación muscular facial no invasiva para un rostro más firme y elevado." },
  { slug: "btl-corporal", name: "BTL Corporal", group: "antiaging", summary: "Modelado corporal con tecnología BTL para tonificar y reafirmar." },
  // Medicina estética
  { slug: "picocare", name: "PicoCare", group: "medicina", summary: "Láser picosegundo para manchas, melasma, rejuvenecimiento y tatuajes.", featured: true },
  { slug: "stellar-m22", name: "Stellar M22", group: "medicina", summary: "Luz pulsada intensa para manchas, rojeces y un tono de piel uniforme.", device: "/images/lumenis_StellarM22_device-300x220.webp" },
  { slug: "toxina-botulinica", name: "Toxina Botulínica", group: "medicina", summary: "Suaviza las arrugas de expresión con un resultado natural y descansado.", featured: true },
  { slug: "rellenos-con-acido-hialuronico", name: "Ácido Hialurónico", group: "medicina", summary: "Hidratación, volumen y armonía facial con resultados naturales." },
  { slug: "mesoterapia", name: "Mesoterapia", group: "medicina", summary: "Microinyecciones de vitaminas y activos que revitalizan la piel desde dentro." },
  { slug: "luz-terapia", name: "Luz Terapia LED", group: "medicina", summary: "Fototerapia LED que calma, regenera y potencia el resto de tratamientos." },
  { slug: "hidroxiapatita-calcica", name: "Hidroxiapatita Cálcica", group: "medicina", summary: "Bioestimulador que redefine el contorno y estimula la producción de colágeno." },
  { slug: "rellenos-inductores-de-colageno", name: "Inductores de Colágeno", group: "medicina", summary: "Bioestimulación progresiva para una piel más firme, densa y joven." },
  { slug: "terapia-regenerativa-con-exosomas", name: "Terapia con Exosomas", group: "medicina", summary: "Medicina regenerativa de última generación para reparar y rejuvenecer la piel." },
  { slug: "peeling-quimicos", name: "Peelings Químicos", group: "medicina", summary: "Renovación profunda para manchas, acné y textura irregular." },
  // Tatuajes
  { slug: "eliminacion-de-tatuajes", name: "Eliminación de Tatuajes", group: "tatuajes", summary: "Protocolo combinado con láser picosegundo y Fotona para borrar tatuajes sin dejar huella.", featured: true },
];

export const TREATMENTS: (Treatment & { image?: string })[] = T.map((t) => ({
  ...t,
  image: TREATMENT_IMAGES[t.slug],
}));

export function getTreatment(slug: string) {
  return TREATMENTS.find((t) => t.slug === slug);
}

export function getGroup(key: GroupKey) {
  return GROUPS.find((g) => g.key === key)!;
}

export function treatmentsByGroup(key: GroupKey) {
  return TREATMENTS.filter((t) => t.group === key);
}

export function relatedTreatments(slug: string, limit = 3) {
  const current = getTreatment(slug);
  if (!current) return [];
  const sameGroup = TREATMENTS.filter((t) => t.group === current.group && t.slug !== slug);
  const sameSection = TREATMENTS.filter(
    (t) => getGroup(t.group).section === getGroup(current.group).section && t.group !== current.group,
  );
  return [...sameGroup, ...sameSection].slice(0, limit);
}

export const FEATURED = TREATMENTS.filter((t) => t.featured);

/** Categorías que se muestran en la portada */
export const HOME_CATEGORIES = [
  { title: "Facial", text: "Hydrafacial, Valmont, DMK, Biologique Recherche y más.", href: "/tratamientos#facial", image: CATEGORY_IMAGES.facial },
  { title: "Medicina estética", text: "Inyectables, bioestimuladores y terapias regenerativas.", href: "/tratamientos#medicina", image: CATEGORY_IMAGES.medicina },
  { title: "Antienvejecimiento", text: "Thermage, Morpheus8, Ultraformer y Fotona.", href: "/tratamientos#antiaging", image: CATEGORY_IMAGES.laser },
  { title: "Head Spa", text: "Rituales capilares Aveda, Kérastase, Leonor Greyl y Miriamquevedo.", href: "/tratamientos#capilar", image: CATEGORY_IMAGES.capilar },
  { title: "Corporal", text: "Masajes, criolipólisis y modelado de la silueta.", href: "/tratamientos#corporal", image: CATEGORY_IMAGES.corporal },
  { title: "Tatuajes", text: "Eliminación sin huella con láser picosegundo y Fotona.", href: "/eliminacion-de-tatuajes", image: TREATMENT_IMAGES["eliminacion-de-tatuajes"] },
] as const;

export const BRANDS = [
  { src: "/images/valmont-300x300.png", alt: "Valmont" },
  { src: "/images/biologiq-300x300.png", alt: "Biologique Recherche" },
  { src: "/images/natura-300x300.png", alt: "Natura Bissé" },
  { src: "/images/skin-300x300.png", alt: "SkinCeuticals" },
  { src: "/images/dmk-300x300.png", alt: "DMK" },
  { src: "/images/helena-300x300.png", alt: "Helena Rubinstein" },
  { src: "/images/kerastase-300x300.png", alt: "Kérastase" },
  { src: "/images/aveda-300x300.png", alt: "Aveda" },
  { src: "/images/leonor-300x300.png", alt: "Leonor Greyl" },
  { src: "/images/miriam-300x300.png", alt: "Miriamquevedo" },
  { src: "/images/evidens-300x300.png", alt: "Evidens de Beauté" },
  { src: "/images/Diseno-sin-titulo-300x300.png", alt: "Alqvimia" },
];
