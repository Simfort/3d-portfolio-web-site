"use client";

import { useState, useRef, useEffect } from "react";

import { motion } from "framer-motion";

export default function Card({ text }: { text: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  // Плавное сглаживание движений (демпфирование)
  const smoothRotate = (targetX: number, targetY: number) => {
    setRotation((prev) => ({
      x: prev.x * 0.7 + targetX * 0.3,
      y: prev.y * 0.7 + targetY * 0.3,
    }));
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current || !cardRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();

    // Нормализованные координаты (от -1 до 1)
    const normalizedX = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    const normalizedY = ((e.clientY - rect.top) / rect.height - 0.5) * 2;

    // Максимальные углы поворота (в градусах)
    const maxAngle = 15;

    const targetX = -normalizedY * maxAngle;
    const targetY = normalizedX * maxAngle;

    smoothRotate(targetX, targetY);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    // Плавный возврат в исходное положение
    setRotation({ x: 0, y: 0 });
  };

  useEffect(() => {
    // Плавное затухание при потере фокуса
    const timer = setTimeout(() => {
      if (!isHovered) {
        setRotation((prev) => ({
          x: prev.x * 0.8,
          y: prev.y * 0.8,
        }));
      }
    }, 50);
    return () => clearTimeout(timer);
  }, [isHovered]);

  const cardStyle = {
    transform: `
      perspective(1000px)
      rotateX(${rotation.x}deg)
      rotateY(${rotation.y}deg)
      scale(${isHovered ? 1.03 : 1})
    `,
    transformStyle: "preserve-3d",
    transition: "transform 0.1s ease-out",
    willChange: "transform",
  };

  const shadowStyle = {
    transform: `translateZ(-30px) rotateX(40deg)`,
    filter: "blur(12px)",
    opacity: isHovered ? 0.4 : 0.25,
    transition: "all 0.3s ease-out",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 200 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.7, duration: 2 }}
      ref={containerRef}
      className="
        w-full
        max-w-sm
        h-[500px] max-md:h-[300px]  relative z-20
        perspective-[1000px]
        mx-auto
        mt-20
        max-md:mt-0
        cursor-grab  text-black
        active:cursor-grabbing
      "
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>
      <div ref={cardRef} className="relative w-full b h-full" style={cardStyle}>
        {/* Объёмная тень */}
        <div
          className="absolute inset-0 rounded-2xl bg-black/40"
          style={shadowStyle}
        />

        {/* Основная карточка */}
        <div
          className="
            w-full
            h-full
            rounded-bl-[50px]
            rounded-br-[10px]
            rounded-tr-[50px]
             bg-[url(/cardBg.jpg)]
          
            shadow-2xl
            shadow-black/30
            relative
            overflow-hidden
            backface-visibility-hidden
          ">
          {" "}
          <div className="flex p-5 ">
            <div
              className="
                text-4xl
                font-bold
                tracking-wide
               flex flex-col gap-5
                drop-shadow-[0_4px_8px_rgba(0,0,0,0.2)]
              ">
              {text}{" "}
              <div className=" flex text-[19px]  flex-col relative z-20">
                <p>+ 1000 aura</p>
                <p>+ 67</p>
                <p>+ money</p>
              </div>
            </div>
            <ul className="flex flex-col list-disc gap-5">
              <li>Frontend Developing</li>
              <li>Backend Developing</li>
              <li>Patterns</li>
              <li>Algoritms</li>
            </ul>{" "}
          </div>
          <div className="bg-[url(/eyeMy.png)] h-[150px] w-full bg-no-repeat bg-contain bg-center"></div>
        </div>
      </div>
    </motion.div>
  );
}
