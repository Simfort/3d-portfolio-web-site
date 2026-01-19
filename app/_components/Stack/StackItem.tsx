"use client";

import { Canvas } from "@react-three/fiber";
import { TextureLoader } from "three";
import { OrbitControls, Decal } from "@react-three/drei";
import { useState, useEffect } from "react";

export default function StackItem({ path }: { path: string }) {
  const [texture, setTexture] = useState(null);

  useEffect(() => {
    const loader = new TextureLoader();
    loader.load(
      path,
      (tex) => {
        tex.colorSpace = "sRGB";
        console.log("Текстура загружена:", tex);
        setTexture(tex);
      },
      undefined,
      (err) => console.error("Ошибка загрузки текстуры:", err),
    );
  }, []);

  if (!texture) {
    return <div className="text-white">Загружаем текстуру...</div>;
  }

  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
      <mesh>
        {/* Уменьшенная сфера (радиус = 1) */}
        <sphereGeometry args={[1, 16, 32]} />

        {/* Материал сферы */}
        <meshStandardMaterial color="#ddd" />

        {/* Декаль — наклейка с картинкой */}
        <Decal
          position={[0.4, 0.25, 0.9]} // Скорректировали позицию под меньший шар
          rotation={[0, 0.2, 0]}
          scale={[1, 1, 1]} // Уменьшили масштаб декаля
          map={texture}>
          <planeGeometry args={[1, 1]} />
          <meshStandardMaterial
            map={texture}
            color="white"
            transparent={true}
            alphaTest={0.5}
          />
        </Decal>
      </mesh>

      <ambientLight intensity={1} />
      <directionalLight position={[5, 5, 5]} intensity={0.5} />

      <OrbitControls enablePan={false} enableZoom={false} />
    </Canvas>
  );
}
