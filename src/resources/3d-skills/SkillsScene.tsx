"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import SkillBall from "./SkillBall";
import Particles from "./Particles";
import { SKILLS } from "./skills-data";

export default function SkillsScene() {
  return (
    <div className="w-full h-full bg-[#0a0a0a]">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 60 }}
        gl={{ antialias: true }}
      >
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#8888ff" />

        <Suspense fallback={null}>
          <Environment preset="night" />
          {SKILLS.map((skill) => (
            <SkillBall key={skill.name} skill={skill} />
          ))}
          <Particles />
        </Suspense>

        <OrbitControls
          enableZoom={false}
          autoRotate
          autoRotateSpeed={0.5}
          maxPolarAngle={Math.PI / 1.5}
          minPolarAngle={Math.PI / 3}
        />
      </Canvas>
    </div>
  );
}
