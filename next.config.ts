import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      // Imágenes generadas con Higgsfield (ver src/lib/media.ts)
      { protocol: "https", hostname: "d8j0ntlcm91z4.cloudfront.net", pathname: "/**" },
    ],
  },

  // URLs antiguas con erratas → URLs corregidas (301, conserva el posicionamiento)
  async redirects() {
    return [
      { source: "/eliminscion-de-tatuajes", destination: "/eliminacion-de-tatuajes", permanent: true },
      { source: "/sobre-nostros", destination: "/sobre-nosotros", permanent: true },
      { source: "/microneedlin-pen", destination: "/microneedling-pen", permanent: true },
      { source: "/ultraformer-lll", destination: "/ultraformer-iii", permanent: true },
    ];
  },

  async headers() {
    return [
      {
        source: "/videos/:path*",
        headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
      },
    ];
  },
};

export default nextConfig;
