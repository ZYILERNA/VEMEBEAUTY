# VEME Beauty · web

Web del centro de estética y medicina estética VEME Beauty (Barcelona), hecha con Next.js 16 y Tailwind CSS 4.

## Desarrollo

```bash
pnpm install
pnpm dev        # http://localhost:3001
pnpm build && pnpm start
```

Variable de entorno recomendada en producción (para el SEO: canónicas, sitemap y datos estructurados):

```
NEXT_PUBLIC_SITE_URL=https://tu-dominio.com
```

En Vercel, si no se define, se usa automáticamente el dominio de producción del proyecto.

## Dónde se cambia cada cosa

| Qué | Archivo |
| --- | --- |
| Teléfonos, dirección, horario, Instagram, enlace de reservas, valoración | `src/lib/site.ts` |
| Catálogo de tratamientos (nombre, categoría, resumen, destacados, equipo, marca) | `src/lib/treatments.ts` |
| Imágenes y vídeos generados con Higgsfield | `src/lib/media.ts` |
| Clips del vídeo de portada y su orden | `src/app/components/HeroSection.tsx` (`SEQUENCE`) |
| Contenido de cada tratamiento | `src/app/<tratamiento>/page.tsx` |
| Colores y tipografías | `src/app/globals.css` (`@theme`) |

Para añadir un tratamiento: crea `src/app/<slug>/page.tsx` (copiando uno existente) y añádelo a `src/lib/treatments.ts`. El menú, la página de tratamientos, los relacionados y el sitemap se actualizan solos.

## Imágenes y vídeos de Higgsfield

Las imágenes de cabecera de los tratamientos y los clips de la portada se generaron con Higgsfield y se sirven desde su CDN. Para alojarlos en la propia web:

```bash
node scripts/download-media.mjs
```

Descarga todo a `public/media/` y actualiza `src/lib/media.ts` para usar esas copias locales.

## URLs antiguas

Las URLs con erratas redirigen de forma permanente (301) a las nuevas (ver `next.config.ts`):
`/eliminscion-de-tatuajes`, `/sobre-nostros`, `/microneedlin-pen`, `/ultraformer-lll`.
