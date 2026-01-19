"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Card from "./Card";

export default function AboutSection() {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: 0.3 },
    },
  };
  const bgVariants = {
    hidden: {
      y: -200,
      x: 200,
    },
    visible: {
      x: 0,
      y: 0,
    },
  };
  const bgTopVariants = {
    hidden: {
      y: -20,
      x: 20,
    },
    visible: {
      x: 0,
      y: 0,
    },
  };
  const introVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 0.6,
      y: 0,
      transition: { duration: 0.6, delay: 0.3 },
    },
  };
  const paragraphVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.6, delay: 0.5 },
    },
  };
  return (
    <section
      ref={ref}
      id="about"
      className=" col-span-full overflow-hidden min-h-screen relative grid-cols-subgrid grid ">
      <motion.div
        variants={bgVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        transition={{ type: "keyframes", duration: 2 }}
        className="absolute w-full h-full bg-[url(/aboutPart.png)] bg-no-repeat  top-0 bottom-0 bg-top-right rotate-180 max-md:bg-size-[30%]"></motion.div>
      <div className="col-start-2 flex flex-col gap-5 col-span-4 relative z-20 mt-37.5 max-md:mt-20">
        <motion.h4
          variants={introVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-xl opacity-60">
          Introduction
        </motion.h4>
        <motion.h2
          variants={titleVariants}
          initial={"hidden"}
          animate={isInView ? "visible" : "hidden"}
          className="text-5xl">
          Overview.
        </motion.h2>
        <motion.p
          variants={paragraphVariants}
          initial={"hidden"}
          animate={isInView ? "visible" : "hidden"}>
          I`m a skilled software developer with experience in{" "}
          <span className="text-blue-500">TypeScript</span> and{" "}
          <span className="text-yellow-400">JavaScript</span>, and expertise in
          frameworks like <span className="text-blue-300">React</span>,
          <span className="text-gray-400">Next.js</span>,
          <span className="text-green-800">Node.js</span>, and{" "}
          <span className="text-gray-500">Three.js</span>. I`m a quick learner
          and collaborate closely with clients to create efficient, scalable,
          and user-friendly solutions that solve real-world problems. Let`s work
          together to bring your ideas to life!
        </motion.p>
      </div>
      <div className=" col-start-3 max-md:col-start-2 max-md:col-span-5 col-span-3 relative">
        {isInView && <Card text="Fullstack Developer" />}
      </div>
      <motion.div
        style={{ rotateX: 180, backgroundPosition: "bottom right" }}
        variants={bgTopVariants}
        initial={"hidden"}
        animate={isInView ? "visible" : "hidden"}
        transition={{ type: "keyframes", duration: 2 }}
        className="h-full w-full bg-[url(/partBgHeader.png)] bg-size-[20%] bg-no-repeat rotate-x-180  absolute top-0 left-0 right-0 bottom-0 bg-bottom-right ">
        {" "}
      </motion.div>
    </section>
  );
}
