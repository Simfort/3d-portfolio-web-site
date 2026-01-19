"use client";
import { useInView } from "framer-motion";
import { lazy, Suspense, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import LoadingCanvas from "../LoadingCanvas";

const CoolWoman = lazy(() => import("./CoolWomanModel"));

export default function WorkSection() {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });
  const bgVariants = {
    hidden: {
      y: -200,
      x: -200,
    },
    visible: {
      x: 0,
      y: 0,
    },
  };
  const paragraphVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    },
  };
  const titleVariants = {
    hidden: {
      y: -50,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
    },
  };
  const subVariants = {
    hidden: {
      y: -50,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 0.6,
    },
  };
  return (
    <section
      id="work"
      ref={ref}
      className="col-span-full grid grid-cols-7 min-h-screen overflow-hidden  relative z-10">
      <motion.div
        style={{ rotateY: 180 }}
        variants={bgVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        transition={{ type: "keyframes", duration: 2 }}
        className="absolute w-full min-h-full bg-[url(/aboutPart.png)] max-md:bg-size-[30%] bg-no-repeat  top-0 bottom-0 bg-top-right  "></motion.div>
      <div className="grid grid-cols-[1fr_400px] col-start-2 max-md:grid-cols-1 col-span-5 p-5 relative  min-h-screen ">
        <div className="mt-[20%] flex max-md:items-center flex-col">
          <div className="ml-[25%] max-md:ml-0 ">
            <motion.h3
              variants={subVariants}
              initial={"hidden"}
              transition={{ type: "keyframes", duration: 2 }}
              animate={inView ? "visible" : "hidden"}
              className="text-xl opacity-60 ">
              Work
            </motion.h3>
            <motion.h2
              variants={titleVariants}
              initial={"hidden"}
              animate={inView ? "visible" : "hidden"}
              transition={{ type: "keyframes", duration: 2 }}
              className="text-5xl max-md:text-3xl">
              My Experince Work
            </motion.h2>
            <motion.p
              variants={paragraphVariants}
              initial={"hidden"}
              animate={inView ? "visible" : "hidden"}
              transition={{ type: "keyframes", duration: 2 }}>
              I make money on freelance platforms
            </motion.p>
            <motion.div
              variants={paragraphVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              transition={{
                type: "keyframes",
                duration: 2,
              }}
              className="flex   w-full justify-center flex-col items-center p-10">
              <motion.div
                variants={paragraphVariants}
                initial={"hidden"}
                animate={inView ? "visible" : "hidden"}
                transition={{
                  type: "keyframes",
                  duration: 2,
                  delay: 0.5,
                }}>
                <Image
                  src={"/fiverr.webp"}
                  alt=" Fiverr logo"
                  className="shadow-2xl shadow-green-500 rounded-full"
                  width={50}
                  height={50}
                />
              </motion.div>{" "}
              <motion.div
                variants={paragraphVariants}
                initial={"hidden"}
                animate={inView ? "visible" : "hidden"}
                transition={{
                  type: "keyframes",
                  duration: 2,
                  delay: 0.8,
                }}
                className="w-[2px] h-[120px] bg-green-300 shadow-2xl shadow-green-500"></motion.div>
              <motion.div
                variants={paragraphVariants}
                initial={"hidden"}
                animate={inView ? "visible" : "hidden"}
                transition={{
                  type: "keyframes",
                  duration: 2,
                  delay: 1,
                }}>
                <Image
                  src={"/kwork.webp"}
                  alt=" Fiverr logo"
                  className="rounded-full shadow-2xl shadow-green-500"
                  width={50}
                  height={50}
                />{" "}
              </motion.div>{" "}
              <motion.div
                variants={paragraphVariants}
                initial={"hidden"}
                animate={inView ? "visible" : "hidden"}
                transition={{
                  type: "keyframes",
                  duration: 2,
                  delay: 2,
                }}
                className="w-[2px]  h-[120px] bg-green-300 shadow-2xl shadow-green-500"></motion.div>{" "}
              <motion.p
                variants={paragraphVariants}
                initial={"hidden"}
                animate={inView ? "visible" : "hidden"}
                transition={{
                  type: "keyframes",
                  duration: 2,
                  delay: 2,
                }}
                className="text-2xl text-green-400 text-shadow-sm text-shadow-green-500">
                This is only start...
              </motion.p>
            </motion.div>
          </div>
          <div className="ml-4">
            {" "}
            <motion.h2
              variants={titleVariants}
              initial={"hidden"}
              animate={inView ? "visible" : "hidden"}
              transition={{ type: "keyframes", duration: 2.2 }}
              className="text-5xl max-md:text-3xl">
              I have my <span className="text-green-400">telegram</span> channel
            </motion.h2>
            <motion.p
              variants={paragraphVariants}
              initial={"hidden"}
              animate={inView ? "visible" : "hidden"}
              transition={{ type: "keyframes", duration: 2 }}>
              Let`s go{" "}
              <a
                href="https://t.me/web_serfer"
                className="text-green-400 hover:opacity-50 underline">
                my telegram!
              </a>
            </motion.p>
          </div>
        </div>
        <div className="bg-green-950 rounded-full h-1/2  max-md:h-[400px] self-center ">
          {inView && (
            <Suspense fallback={<LoadingCanvas />}>
              {" "}
              <CoolWoman />
            </Suspense>
          )}
        </div>{" "}
      </div>{" "}
    </section>
  );
}
