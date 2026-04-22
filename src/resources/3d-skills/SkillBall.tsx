"use client";

import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { Float, Text, Sphere } from "@react-three/drei";
import * as THREE from "three";
import type { Skill } from "./skills-data";

type Props = { skill: Skill };

export default function SkillBall({ skill }: Props) {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((_, delta) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.y += delta * 0.4;
    const target = hovered ? 1.3 : 1;
    meshRef.current.scale.lerp(new THREE.Vector3(target, target, target), 0.1);
  });

  return (
    <Float speed={2} rotationIntensity={0.4} floatIntensity={0.8}>
      <group position={skill.position}>
        <Sphere
          ref={meshRef}
          args={[0.6, 32, 32]}
          onPointerOver={() => setHovered(true)}
          onPointerOut={() => setHovered(false)}
        >
          <meshStandardMaterial
            color={skill.color}
            roughness={0.2}
            metalness={0.8}
            emissive={skill.color}
            emissiveIntensity={hovered ? 0.4 : 0.1}
          />
        </Sphere>

        <Text
          position={[0, -0.9, 0]}
          fontSize={0.22}
          color="white"
          anchorX="center"
          anchorY="middle"
          outlineWidth={0.02}
          outlineColor="#000000"
        >
          {skill.name}
        </Text>
      </group>
    </Float>
  );
}
