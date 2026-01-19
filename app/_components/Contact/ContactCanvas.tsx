"use client";

import { Canvas } from "@react-three/fiber";
import { useEffect, useState } from "react";
import { Group, Object3DEventMap } from "three";
import { MTLLoader, OBJLoader } from "three/examples/jsm/Addons.js";

function Model() {
  const [scene, setScene] = useState<Group<Object3DEventMap> | null>(null);

  useEffect(() => {
    const load = async () => {
      const mtl = await new MTLLoader().loadAsync("/cameraModel/camera.mtl");
      mtl.preload();

      const obj = await new OBJLoader()
        .setMaterials(mtl)
        .loadAsync("/cameraModel/camera.obj");

      setScene(obj);
    };
    load();
  }, []);

  return scene ? <primitive object={scene} scale={0.8} /> : null;
}
export default function ContactCanvas() {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 50 }} shadows>
      <mesh rotation={[0, 2.5, 0]}>
        <ambientLight intensity={7} />
        <directionalLight position={[5, 5, 5]} intensity={1} />{" "}
        <pointLight
          position={[0, 3, 0]}
          intensity={2}
          distance={3}
          decay={1}
          color="#ffffcc"
        />
        <Model />
      </mesh>
    </Canvas>
  );
}
