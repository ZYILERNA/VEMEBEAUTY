# 3D Skills Resource

Reusable 3D skills showcase component built with React Three Fiber.

## Install dependencies first

```bash
pnpm add three @react-three/fiber @react-three/drei
pnpm add -D @types/three
```

## Usage

Copy the components into your project and import `SkillsScene`:

```tsx
import SkillsScene from "@/resources/3d-skills/SkillsScene";

export default function Page() {
  return (
    <section className="w-full h-screen">
      <SkillsScene />
    </section>
  );
}
```

> **Important:** The canvas must be inside a `"use client"` boundary.
> `SkillsScene` already has `"use client"` at the top.

## Customization

Edit `skills-data.ts` to change skill names, colors, and positions.

## Files

- `SkillsScene.tsx` — main canvas + scene setup
- `SkillBall.tsx`   — individual 3D floating skill sphere
- `Particles.tsx`   — background particle field
- `skills-data.ts`  — skill definitions (name, color, position)
