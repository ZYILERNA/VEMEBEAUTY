import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import MobileBookingBar from "./components/MobileBookingBar";
import JsonLd from "./components/JsonLd";
import { SITE } from "@/lib/site";
import { CATEGORY_IMAGES } from "@/lib/media";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "VEME Beauty · Centro de estética y medicina estética en Barcelona",
    template: "%s · VEME Beauty Barcelona",
  },
  description: SITE.description,
  applicationName: SITE.name,
  keywords: [
    "centro de estética Barcelona",
    "medicina estética Barcelona",
    "Hydrafacial Barcelona",
    "head spa Barcelona",
    "depilación láser Barcelona",
    "eliminación de tatuajes Barcelona",
    "Thermage Barcelona",
    "Morpheus8 Barcelona",
  ],
  icons: { icon: "/images/favicon.png", apple: "/images/favicon.png" },
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "es_ES",
    siteName: SITE.name,
    title: "VEME Beauty · Centro de estética y medicina estética en Barcelona",
    description: SITE.description,
    images: [{ url: CATEGORY_IMAGES.clinica, width: 1536, height: 864, alt: "VEME Beauty Barcelona" }],
  },
  twitter: { card: "summary_large_image" },
  formatDetection: { telephone: true },
};

export const viewport: Viewport = {
  themeColor: "#1b1714",
  width: "device-width",
  initialScale: 1,
};

const localBusiness = {
  "@context": "https://schema.org",
  "@type": ["BeautySalon", "MedicalBusiness"],
  "@id": `${SITE.url}/#negocio`,
  name: SITE.name,
  description: SITE.description,
  url: SITE.url,
  image: CATEGORY_IMAGES.clinica,
  logo: `${SITE.url}/images/favicon.png`,
  telephone: SITE.phones[0].href.replace("tel:", ""),
  priceRange: "€€€",
  address: {
    "@type": "PostalAddress",
    streetAddress: SITE.address.street,
    postalCode: SITE.address.postalCode,
    addressLocality: SITE.address.city,
    addressRegion: SITE.address.region,
    addressCountry: SITE.address.country,
  },
  geo: { "@type": "GeoCoordinates", latitude: SITE.geo.lat, longitude: SITE.geo.lng },
  openingHoursSpecification: SITE.hours
    .filter((h) => h.spec)
    .map((h) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: h.spec!.days,
      opens: h.spec!.opens,
      closes: h.spec!.closes,
    })),
  sameAs: [SITE.instagram.url, SITE.reviews.url],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={`${cormorant.variable} ${jost.variable} antialiased`}>
      <body className="min-h-dvh flex flex-col">
        <a
          href="#contenido"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-ink focus:text-white focus:px-5 focus:py-3 focus:rounded-full"
        >
          Saltar al contenido
        </a>
        <JsonLd data={localBusiness} />
        <Navbar />
        <main id="contenido" className="flex-1">
          {children}
        </main>
        <Footer />
        <MobileBookingBar />
      </body>
    </html>
  );
}
