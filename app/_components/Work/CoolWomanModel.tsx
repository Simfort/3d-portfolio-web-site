"use client";

import { OrbitControls, useAnimations, useGLTF } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useEffect } from "react";

function Model() {
  const gltf = useGLTF("/inoModel/ino.glb");
  const { actions } = useAnimations(gltf.animations, gltf.scene);

  useFrame(() => {
    if (actions && actions.Audience_M_18) {
      actions.Audience_M_18.play();
    }
  });

  return <primitive position={[0, -1, 0]} object={gltf.scene} scale={0.01} />;
}

export default function CoolWomanModel() {
  return (
    <Canvas
      className="relative   z-100"
      camera={{ position: [0, 0, 5], fov: 50 }}
      shadows>
      <ambientLight intensity={10} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <Model />
      <OrbitControls
        minPolarAngle={Math.PI / 2}
        maxPolarAngle={Math.PI / 2}
        enablePan={false}
        enableZoom={false}
      />
    </Canvas>
  );
}
