"use client";

import { Canvas } from "@react-three/fiber";

import { useEffect, useRef, useState } from "react";
import { MTLLoader, OBJLoader } from "three/examples/jsm/Addons.js";
import HeaderText from "./HeaderText";
import { Group, Object3DEventMap } from "three";
import HeaderSwapAnimated from "./HeaderSwapAnimated";
import { useInView } from "framer-motion";

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

  return scene ? <primitive object={scene} scale={1} /> : null;
}

export default function Header() {
  const [rotationY, setRotationY] = useState(0);
  const [rotationX, setRotationX] = useState(0);

  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const angleY = (e.clientX / window.innerWidth) * Math.PI * 0.6;
    const angleX = (e.clientY / window.innerHeight) * Math.PI * 0.6;
    setRotationY(angleY);
    setRotationX(angleX);
  };

  return (
    <div
      id="home"
      ref={ref}
      className="bg-[url(/bgHeader.jpg)] select-none bg-no-repeat  bg-cover relative col-span-full"
      onMouseMove={handleMouseMove} // Вешаем обработчик на весь header
    >
      <div className="bg-[url(/partBgHeader.png)] bg-no-repeat top-0 bottom-0 z-10 h-full w-full bg-bottom-right absolute rotate-180 bg-size-[20%]"></div>

      <div className="h-screen flex z-100 bg-[#0000008d] items-center justify-center p-5 flex-col relative">
        <header className="flex bg-[#05360f5e] fixed p-5 gap-5 top-0 text-xl max-md:text-[15px] items-center justify-around w-full z-200">
          <a href="#home" className="font-bold  text-green-700">
            David Lemonjava - portfolio 3D
          </a>
          <nav className="flex gap-5 ">
            {" "}
            <a href="#about" className="hover:text-green-500 transition-colors">
              About
            </a>
            <a href="#work" className="hover:text-green-500 transition-colors">
              Work
            </a>{" "}
            <a
              href="#contact"
              className="hover:text-green-500 transition-colors">
              Contact
            </a>
          </nav>
        </header>
        <HeaderText />
        {inView && (
          <Canvas
            className="absolute w-full h-full  z-100"
            camera={{ position: [0, 0, 5], fov: 50 }}
            shadows>
            <mesh
              rotation={[-Math.PI / 2, 0, 0]}
              position={[-2, 0, 0]}
              receiveShadow>
              {" "}
              <sphereGeometry args={[0.5, 32, 32]} />
              <meshStandardMaterial
                color="#706909"
                emissive="#a35c00" // Тёплое свечение
                emissiveIntensity={1.0}
                metalness={2}
                roughness={0.6}
              />
            </mesh>
            <mesh
              rotation={[-Math.PI / 2, 0, 0]}
              position={[2, 0, 0]}
              receiveShadow>
              {" "}
              <sphereGeometry args={[0.5, 32, 32]} />
              <meshStandardMaterial
                color="#706909"
                emissive="#a35c00" // Тёплое свечение
                emissiveIntensity={1.0}
                metalness={2}
                roughness={0.6}
              />
            </mesh>
            <mesh rotation={[rotationX - 1, rotationY + 2.2, 0]}>
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
            <group position={[0, -1, 0]}>
              {Array.from({ length: 5 }).map((_, i) => {
                const radius = 1.5 - i * 0.25;
                return (
                  <mesh
                    key={i}
                    rotation={[-Math.PI / 2, 0, 0]}
                    position={[0, i * 0.02, 0]} // Слегка смещаем по высоте
                  >
                    <ringGeometry args={[radius - 0.05, radius + 0.05, 32]} />
                    <meshStandardMaterial
                      color={i % 2 === 0 ? "#bcbcbc" : "#00ff55"}
                      metalness={0.8}
                      roughness={0.2}
                      opacity={0.8}
                      transparent
                    />
                  </mesh>
                );
              })}
            </group>
          </Canvas>
        )}

        <HeaderSwapAnimated path="#about" />
      </div>
      <div className="bg-[url(/partBgHeader.png)] bg-no-repeat top-0 bottom-0 drop-shadow-2xl h-full w-full bg-bottom-right absolute bg-size-[20%]"></div>
    </div>
  );
}
