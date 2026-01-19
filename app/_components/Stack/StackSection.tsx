"use client";
import { lazy, Suspense, useRef } from "react";
import STACK_LOGOS from "@/lib/STACK_LOGOS";
import { useInView } from "framer-motion";
import LoadingCanvas from "../LoadingCanvas";
import { motion } from "framer-motion";

const StackItem = lazy(() => import("./StackItem"));

export default function StackSection() {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section
      ref={ref}
      className="col-span-full grid grid-cols-7 pb-[50px] grid-rows-[1fr_10fr] bg-[url(/stackBg.jpg)] gap-5 bg-no-repeat bg-cover bg-center border-green-950 border-b-2 border-t-2 ">
      <div className="col-span-full">
        <h2 className="text-center  text-6xl  p-6  ">My stack</h2>
        <p className="opacity-50 text-center">
          Insrumentation and techonologies
        </p>
      </div>
      <div
        className="grid grid-rows-3 grid-cols-6 justify-center col-start-2 col-span-5 w-full
          rounded-full
          bg-linear-to-br from-green-400/20 via-emerald-500/30 to-teal-600/40
          shadow-2xl shadow-teal-500/25
          backdrop-blur-sm
          border border-white/10">
        {inView && (
          <Suspense fallback={<LoadingCanvas />}>
            {STACK_LOGOS.map((logo, i) => (
              <StackItem key={i} path={`/logosStack/${logo}logo.svg`} />
            ))}
          </Suspense>
        )}
      </div>
    </section>
  );
}
