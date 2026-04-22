export type Skill = {
  name: string;
  color: string;
  position: [number, number, number];
  icon?: string;
};

export const SKILLS: Skill[] = [
  { name: "React",      color: "#61DAFB", position: [-3,  1.5, 0] },
  { name: "Next.js",    color: "#ffffff", position: [ 3,  1.5, 0] },
  { name: "TypeScript", color: "#3178C6", position: [ 0,  2.5, -1] },
  { name: "Three.js",   color: "#049EF4", position: [-2, -1,   1] },
  { name: "Tailwind",   color: "#38BDF8", position: [ 2, -1,   1] },
  { name: "Node.js",    color: "#68A063", position: [ 0, -2,  -1] },
  { name: "CSS",        color: "#264DE4", position: [-4,  0,  -1] },
  { name: "GraphQL",    color: "#E535AB", position: [ 4,  0,  -1] },
];
