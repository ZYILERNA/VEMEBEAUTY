/**
 * Datos centrales del negocio. Cualquier cambio de teléfono, horario o dirección
 * se hace aquí y se propaga a toda la web (cabecera, pie, portada, SEO).
 */

function resolveSiteUrl() {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL;
  if (explicit) return explicit.replace(/\/$/, "");
  const vercel = process.env.VERCEL_PROJECT_PRODUCTION_URL;
  if (vercel) return `https://${vercel}`;
  return "http://localhost:3001";
}

export const SITE = {
  name: "VEME Beauty",
  url: resolveSiteUrl(),
  tagline: "Centro de estética y medicina estética en Barcelona",
  description:
    "Centro de estética y medicina estética junto al Arc de Triomf, en Barcelona. Tratamientos faciales, corporales, capilares, láser y medicina estética avanzada con las mejores marcas y tecnologías.",
  bookingUrl: "https://widget.treatwell.es/establecimiento/veme-beauty",
  reviews: {
    rating: 4.8,
    count: 39,
    source: "Treatwell",
    url: "https://www.treatwell.es/establecimiento/veme-beauty/",
  },
  instagram: {
    handle: "@veme.beauty",
    url: "https://www.instagram.com/veme.beauty/",
  },
  phones: [
    { label: "+34 685 710 000", href: "tel:+34685710000", whatsapp: "https://wa.me/34685710000" },
    { label: "+34 932 310 745", href: "tel:+34932310745" },
  ],
  address: {
    street: "C/ de Trafalgar, 78",
    area: "Junto al Arc de Triomf",
    postalCode: "08010",
    city: "Barcelona",
    region: "Cataluña",
    country: "ES",
  },
  geo: { lat: 41.3906, lng: 2.1795 },
  hours: [
    { days: "Lunes – Jueves", time: "09:00 – 20:00", spec: { days: ["Monday", "Tuesday", "Wednesday", "Thursday"], opens: "09:00", closes: "20:00" } },
    { days: "Viernes", time: "10:00 – 20:00", spec: { days: ["Friday"], opens: "10:00", closes: "20:00" } },
    { days: "Sábado", time: "09:00 – 20:00", spec: { days: ["Saturday"], opens: "09:00", closes: "20:00" } },
    { days: "Domingo", time: "Cerrado", spec: null },
  ],
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=VEME+Beauty+C%2F+de+Trafalgar+78+08010+Barcelona",
  mapsEmbed: "https://www.google.com/maps?q=C%2F+de+Trafalgar+78,+08010+Barcelona&z=16&output=embed",
} as const;

export const fullAddress = `${SITE.address.street}, ${SITE.address.postalCode} ${SITE.address.city}`;
