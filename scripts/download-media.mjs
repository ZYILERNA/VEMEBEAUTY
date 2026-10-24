#!/usr/bin/env node
/**
 * Descarga a public/media/ todas las imágenes y vídeos generados con Higgsfield
 * que usa la web (src/lib/media.ts) y hace que la web los sirva desde su propio dominio.
 *
 *   node scripts/download-media.mjs
 *
 * Las imágenes PNG se guardan tal cual; Next.js las optimiza (AVIF/WebP) al servirlas.
 */
import { readFile, writeFile, mkdir, stat } from "node:fs/promises";
import path from "node:path";

const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), "..");
const mediaFile = path.join(root, "src/lib/media.ts");
const outDir = path.join(root, "public/media");

const src = await readFile(mediaFile, "utf8");
const base = src.match(/export const HF = "([^"]+)";/)?.[1];
if (!base) throw new Error("No se encontró la constante HF en src/lib/media.ts");
if (base === "/media/") {
  console.log("Los medios ya están alojados localmente (HF = \"/media/\").");
  process.exit(0);
}

const files = [...new Set([...src.matchAll(/HF \+ "([^"]+)"/g)].map((m) => m[1]))];
await mkdir(outDir, { recursive: true });

let ok = 0;
for (const name of files) {
  const dest = path.join(outDir, name);
  try {
    await stat(dest);
    ok++;
    continue;
  } catch {}
  const res = await fetch(base + name);
  if (!res.ok) {
    console.error(`✗ ${name}: HTTP ${res.status}`);
    continue;
  }
  await writeFile(dest, Buffer.from(await res.arrayBuffer()));
  ok++;
  console.log(`✓ ${name}`);
}

if (ok !== files.length) {
  console.error(`Descargados ${ok}/${files.length}. No se modifica media.ts.`);
  process.exit(1);
}

await writeFile(mediaFile, src.replace(/export const HF = "[^"]+";/, 'export const HF = "/media/";'));
console.log(`\nListo: ${ok} archivos en public/media y media.ts apunta a /media/.`);
