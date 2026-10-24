import type { Metadata } from "next";
import { getGroup, getTreatment } from "./treatments";

/** Metadatos SEO de una página de tratamiento a partir del catálogo. */
export function treatmentMetadata(slug: string): Metadata {
  const t = getTreatment(slug);
  if (!t) return {};
  const group = getGroup(t.group);
  const title = `${t.name} en Barcelona`;
  const description = `${t.summary} ${group.label} en VEME Beauty, junto al Arc de Triomf. Reserva tu cita online.`;
  return {
    title,
    description,
    alternates: { canonical: `/${slug}` },
    openGraph: {
      title: `${t.name} · VEME Beauty Barcelona`,
      description,
      url: `/${slug}`,
      images: t.image ? [{ url: t.image, width: 1536, height: 864, alt: t.name }] : undefined,
    },
  };
}
