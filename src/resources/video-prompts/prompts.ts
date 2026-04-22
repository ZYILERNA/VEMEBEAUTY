// Prompt templates for AI video generation with animation
// Compatible with: Sora, RunwayML Gen-3, Kling, Pika, Luma Dream Machine, Hailuo

export type VideoPrompt = {
  id: string;
  label: string;
  category: "ui" | "nature" | "abstract" | "product" | "cinematic" | "loop";
  tools: string[];
  prompt: string;
  negativePrompt?: string;
  settings?: {
    duration?: string;
    aspectRatio?: string;
    motionStrength?: "low" | "medium" | "high";
  };
};

export const VIDEO_PROMPTS: VideoPrompt[] = [
  // ─── UI / WEB ANIMATIONS ───────────────────────────────────────────────────
  {
    id: "ui-hero-particles",
    label: "Hero section with floating particles",
    category: "ui",
    tools: ["Sora", "RunwayML", "Pika"],
    prompt:
      "A dark elegant website hero section with dozens of small glowing particles slowly floating upward, soft blue and purple light orbs drifting in the background, smooth looping motion, ultra HD, cinematic depth of field",
    negativePrompt: "text, watermark, distortion, flickering",
    settings: { duration: "4s", aspectRatio: "16:9", motionStrength: "low" },
  },
  {
    id: "ui-3d-logo-reveal",
    label: "3D logo reveal animation",
    category: "ui",
    tools: ["Sora", "Kling"],
    prompt:
      "A sleek metallic 3D logo slowly rotating and revealing itself from darkness, dramatic rim lighting, smooth camera pull-back, luxury brand feel, black background, 4K cinematic",
    negativePrompt: "blurry, low quality, artifacts",
    settings: { duration: "5s", aspectRatio: "1:1", motionStrength: "medium" },
  },
  {
    id: "ui-card-hover-flow",
    label: "Flowing gradient cards animation",
    category: "ui",
    tools: ["Pika", "Hailuo", "RunwayML"],
    prompt:
      "Three floating glass morphism cards with animated gradient backgrounds that slowly shift colors between purple, pink and blue, cards gently bob up and down, frosted glass effect, dark background, seamless loop",
    settings: { duration: "6s", aspectRatio: "16:9", motionStrength: "low" },
  },

  // ─── ABSTRACT / ARTISTIC ───────────────────────────────────────────────────
  {
    id: "abstract-fluid-ink",
    label: "Fluid ink in water",
    category: "abstract",
    tools: ["Sora", "Luma Dream Machine", "RunwayML"],
    prompt:
      "Macro shot of black ink slowly dissolving in clear water, swirling fluid dynamics, dramatic contrast, backlit, ultra slow motion, 4K, mesmerizing loop",
    negativePrompt: "fast motion, noise, grain",
    settings: { duration: "6s", aspectRatio: "9:16", motionStrength: "low" },
  },
  {
    id: "abstract-neon-geometry",
    label: "Neon geometric shapes",
    category: "abstract",
    tools: ["Pika", "Kling", "Sora"],
    prompt:
      "Abstract neon geometric shapes — triangles, cubes and spheres — slowly rotating and intersecting in a dark void, glowing edges in cyan and magenta, synthwave aesthetic, seamless loop, 4K",
    settings: { duration: "8s", aspectRatio: "16:9", motionStrength: "medium" },
  },
  {
    id: "abstract-aurora",
    label: "Aurora borealis loop",
    category: "abstract",
    tools: ["Sora", "Luma Dream Machine"],
    prompt:
      "Time-lapse of aurora borealis dancing across a starry night sky, vivid greens and purples, silhouette of mountains below, ethereal and calming motion, cinematic, seamless loop",
    settings: { duration: "10s", aspectRatio: "16:9", motionStrength: "medium" },
  },

  // ─── PRODUCT ───────────────────────────────────────────────────────────────
  {
    id: "product-beauty-serum",
    label: "Beauty serum product reveal",
    category: "product",
    tools: ["RunwayML", "Kling", "Sora"],
    prompt:
      "Luxury glass serum bottle slowly rotating on a reflective black surface, dramatic studio lighting, golden liquid inside, small droplets of water on the bottle, macro lens, cinematic product shot, 4K",
    negativePrompt: "text, brand logos, blurry, distortion",
    settings: { duration: "5s", aspectRatio: "1:1", motionStrength: "low" },
  },
  {
    id: "product-cosmetics-splash",
    label: "Cosmetics with liquid splash",
    category: "product",
    tools: ["Sora", "Kling"],
    prompt:
      "Beauty product surrounded by a slow-motion splash of milky white liquid, dramatic backlight, black background, ultra slow motion, studio quality, hyper realistic, luxury cosmetics advertisement",
    settings: { duration: "4s", aspectRatio: "9:16", motionStrength: "high" },
  },

  // ─── CINEMATIC ─────────────────────────────────────────────────────────────
  {
    id: "cinematic-city-rain",
    label: "Rainy city at night",
    category: "cinematic",
    tools: ["Sora", "RunwayML Gen-3"],
    prompt:
      "Cinematic aerial shot of a city at night in the rain, neon signs reflected on wet streets, slow camera drift, bokeh lights, moody atmosphere, 24fps film grain, anamorphic lens flares",
    settings: { duration: "8s", aspectRatio: "2.39:1", motionStrength: "low" },
  },
  {
    id: "cinematic-forest-fog",
    label: "Misty forest at dawn",
    category: "cinematic",
    tools: ["Sora", "Luma Dream Machine", "Kling"],
    prompt:
      "Slow camera glide through a misty ancient forest at golden hour, shafts of light breaking through tall trees, soft fog rolling along the forest floor, birds chirping implied, cinematic color grade, 4K",
    settings: { duration: "10s", aspectRatio: "16:9", motionStrength: "low" },
  },

  // ─── SEAMLESS LOOPS ────────────────────────────────────────────────────────
  {
    id: "loop-fire",
    label: "Fire embers loop",
    category: "loop",
    tools: ["Pika", "RunwayML", "Hailuo"],
    prompt:
      "Close-up of glowing orange and red embers slowly pulsing and floating upward against a dark background, seamless loop, warm cinematic tones, no smoke",
    settings: { duration: "4s", aspectRatio: "16:9", motionStrength: "low" },
  },
  {
    id: "loop-ocean-waves",
    label: "Ocean waves seamless loop",
    category: "loop",
    tools: ["Sora", "Luma Dream Machine"],
    prompt:
      "Aerial top-down view of turquoise ocean waves gently rolling, white foam patterns, seamless loop, calming and meditative, 4K ultra HD",
    settings: { duration: "6s", aspectRatio: "1:1", motionStrength: "low" },
  },
];

// Helper — filter by category
export function getByCategory(category: VideoPrompt["category"]) {
  return VIDEO_PROMPTS.filter((p) => p.category === category);
}

// Helper — filter by tool
export function getByTool(tool: string) {
  return VIDEO_PROMPTS.filter((p) =>
    p.tools.some((t) => t.toLowerCase() === tool.toLowerCase())
  );
}
