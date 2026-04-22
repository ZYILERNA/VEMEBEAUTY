# Video Prompts Resource

Ready-to-use prompt library for generating animated videos with AI tools.

## Supported tools

| Tool | Best for |
|------|----------|
| **Sora** (OpenAI) | Cinematic, realistic motion, long clips |
| **RunwayML Gen-3** | Product shots, UI concepts |
| **Kling** | 3D objects, product reveals |
| **Pika** | Short loops, abstract, quick iterations |
| **Luma Dream Machine** | Nature, organic motion |
| **Hailuo** (MiniMax) | Fast generation, loops |

## Categories

- `ui` — hero sections, cards, web animations
- `abstract` — ink, geometry, aurora, fluid
- `product` — beauty/cosmetic product reveals
- `cinematic` — city, nature, drone shots
- `loop` — seamless background loops

## Usage in code

```ts
import { VIDEO_PROMPTS, getByCategory, getByTool } from "@/resources/video-prompts/prompts";

// All prompts
VIDEO_PROMPTS

// Only product prompts
getByCategory("product")

// Only prompts that work with Sora
getByTool("Sora")
```

## Tips for better results

1. **Motion strength low** = background loops, ambient video
2. **Motion strength high** = splashes, reveals, action
3. Always add `negativePrompt` when the tool supports it
4. For seamless loops: mention "seamless loop" explicitly in the prompt
5. For product shots: always specify lighting (studio, rim, backlit)
