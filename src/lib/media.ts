/**
 * Imágenes y vídeos generados con Higgsfield para VEME Beauty.
 * Se sirven desde el CDN de Higgsfield. Para alojarlos en la propia web,
 * ejecuta `node scripts/download-media.mjs` (descarga todo a public/media y actualiza HF).
 */

export const HF = "https://d8j0ntlcm91z4.cloudfront.net/user_3FdU1edGOT2szv0kAPOIS4qsRcH/";

export const HERO_CLIPS: Record<string, { video: string; poster: string }> = {
  sala: { video: HF + "hf_20261024_155130_f2e838a8-2ed0-486f-bb95-8598ede2e058.mp4", poster: HF + "hf_20261024_154936_7bd97983-4128-4743-b492-b5d00554f5a6.png" },
  facial: { video: HF + "hf_20261024_155130_45d78a20-4a6a-4a14-8665-8d2b0b3728b8.mp4", poster: HF + "hf_20261024_154936_ab23c6ac-cea1-4679-9f26-0c6f562be30d.png" },
  serum: { video: HF + "hf_20261024_155117_1319cd62-1478-47e1-82e0-3f85354d0782.mp4", poster: HF + "hf_20261024_154936_b1e400b2-2a29-4467-8430-be23692ddb62.png" },
  headspa: { video: HF + "hf_20261024_155130_ed0ebd61-9c32-407e-b881-503fe98d900e.mp4", poster: HF + "hf_20261024_154935_90815dee-0f09-45a6-befd-6c44aeca2999.png" },
  terraza: { video: HF + "hf_20261024_155130_392bbe78-b3e8-4cda-a594-3941b38ec959.mp4", poster: HF + "hf_20261024_154936_0d1e11f1-0b4e-4b85-ba59-4985dd473d90.png" },
  bodegon: { video: HF + "hf_20261024_155117_1b58b335-6332-4cfd-a238-1b58e576e407.mp4", poster: HF + "hf_20261024_154937_02fc8168-15fb-448e-ba5e-de19ee7ac3dd.png" },
};

export const TREATMENT_IMAGES: Record<string, string> = {
  "aquapure": HF + "hf_20261024_155253_9ed80deb-1093-4ffa-ab1c-8cf400bb2516.png",
  "btl-corporal": HF + "hf_20261024_160004_75f6f8be-b4f8-4c4c-9d4c-b75f938c4ff9.png",
  "btl-facial": HF + "hf_20261024_155255_195f37a8-e351-45f2-a896-fe5fec6d9c0e.png",
  "criolipolisis": HF + "hf_20261024_160005_1e7085d1-0141-4166-9995-a22ea655e0b2.png",
  "depilacion-diodo": HF + "hf_20261024_160005_5fe68932-6c0c-4449-b8b5-885f9b8d90a2.png",
  "eliminacion-de-tatuajes": HF + "hf_20261024_155253_d16cc54b-e53e-4cfe-acc4-1e492ec70551.png",
  "exilis-ultra-360": HF + "hf_20261024_155254_33ed74ef-36aa-440c-8187-f2db653c01a2.png",
  "fotona-4d-pro": HF + "hf_20261024_155253_49aa71d5-09de-4906-a7a6-89ac8de3fd3c.png",
  "head-spa-aveda": HF + "hf_20261024_155254_e39050f0-e18e-4a03-9ba9-bb2c1ac00925.png",
  "head-spa-kerastase": HF + "hf_20261024_155255_7f645ff4-330c-413f-be2d-7699bf64d411.png",
  "head-spa-leonor-greyl": HF + "hf_20261024_155255_8f914951-0976-4187-94b7-bee67e15897e.png",
  "head-spa-miriamquevedo": HF + "hf_20261024_155254_c3816a2c-bde3-46da-a9b8-520f84114f52.png",
  "hidroxiapatita-calcica": HF + "hf_20261024_155332_f528ff7b-67b3-4680-a244-98cf68dddd29.png",
  "hydrafacial": HF + "hf_20261024_155332_9c9bdd80-49f6-4a01-be97-d94aabaf7f08.png",
  "hydrafacial-head": HF + "hf_20261024_155334_d28b7b1c-69f5-476b-bca6-a80a388bb1e7.png",
  "inmode-forma": HF + "hf_20261024_160005_6ddd5a3f-4c7d-466f-8ef6-6fc9a7633cd2.png",
  "inmode-minifx": HF + "hf_20261024_155334_7cc15a53-498d-4de5-af99-44164a6254a1.png",
  "linfa-desintoxicacion": HF + "hf_20261024_155335_27157f3a-2962-49ef-9577-1ea789ff22d0.png",
  "luz-terapia": HF + "hf_20261024_155333_93a9cbf4-26c3-4514-98b7-8bb40a48fd0a.png",
  "masaje-aromaterapia": HF + "hf_20261024_155332_b75091e9-6caf-4165-870b-7584aaee5e0a.png",
  "masaje-corporal-ritual-body-sculptor-alqvimia": HF + "hf_20261024_160004_e39c92cf-132f-4d15-9910-da029b2e376c.png",
  "mesoterapia": HF + "hf_20261024_155335_be95cca1-aabb-49d6-8313-1ea78a74c6c5.png",
  "microneedling-pen": HF + "hf_20261024_155334_d35bfb89-67dc-4b39-8375-4100d74a6a00.png",
  "micropigmentacion": HF + "hf_20261024_155335_9a20039e-2eb4-4d39-8a1a-d1dc8ef3ef5a.png",
  "morpheus8": HF + "hf_20261024_155407_c3f28e60-089c-4ac8-863b-93bb07e5048e.png",
  "ondas-electromagneticas": HF + "hf_20261024_155406_046e3ae2-5f5d-4148-894c-80a6d5b23fb7.png",
  "peeling-enzimatico": HF + "hf_20261024_155405_20b7c73a-2654-4ecd-a68c-ce9cfd9351f8.png",
  "peeling-enzimatico-corporal": HF + "hf_20261024_160005_a66b61d5-6410-4ee2-a13e-f8b3882cbef6.png",
  "peeling-quimicos": HF + "hf_20261024_155409_789565b5-9c65-496f-ab57-4add413edf06.png",
  "picocare": HF + "hf_20261024_155407_fbc6944a-dd82-4558-97be-726c80811e86.png",
  "rellenos-con-acido-hialuronico": HF + "hf_20261024_155405_ccca3783-cceb-4dec-9e6b-cc48772deef4.png",
  "rellenos-inductores-de-colageno": HF + "hf_20261024_155406_b92767e3-c2c0-47a0-bbf4-98376bb71058.png",
  "stellar-m22": HF + "hf_20261024_155408_407826b3-2893-4804-8dc7-6dfae2181aa3.png",
  "terapia-regenerativa-con-exosomas": HF + "hf_20261024_155406_57e6c6b5-0329-4569-8cbf-5b99e677ac0f.png",
  "thermage-flx": HF + "hf_20261024_155406_61c2e82c-5d96-4bae-b504-2df738cdf189.png",
  "toxina-botulinica": HF + "hf_20261024_155407_f6141712-7cb3-44e5-8408-4c3353328d88.png",
  "tratamiento-biologique-recherche": HF + "hf_20261024_155437_c6a585f0-6934-4fe0-81c3-effe938498fb.png",
  "tratamiento-dmk": HF + "hf_20261024_155439_c1f6b4f1-2398-4395-8978-7ef96a2d6a2e.png",
  "tratamiento-skinceutica": HF + "hf_20261024_155437_0c53362e-20aa-45ca-8ca1-3b32508c60ee.png",
  "tratamiento-valmont": HF + "hf_20261024_155437_c844355a-4055-45ac-88bb-7883746db05a.png",
  "ultraformer-iii": HF + "hf_20261024_155437_fed145a9-e204-4c25-b7b3-8a058dfe47c9.png",
};

export const CATEGORY_IMAGES = {
  capilar: HF + "hf_20261024_155438_0edbfe07-082a-4139-9ce0-993bc235bbf4.png",
  clinica: HF + "hf_20261024_155438_9a698555-8e38-4253-8437-4366d8d925ae.png",
  corporal: HF + "hf_20261024_155438_381a166e-c8b1-4391-8422-65533a3762ad.png",
  facial: HF + "hf_20261024_155437_92f5ba50-5637-4843-b434-63945c437fc9.png",
  laser: HF + "hf_20261024_155437_30d2f99d-25f3-437b-b164-a6897eef0bec.png",
  medicina: HF + "hf_20261024_155438_145525c4-e391-419b-a553-1fc2be2f2082.png",
} as const;
