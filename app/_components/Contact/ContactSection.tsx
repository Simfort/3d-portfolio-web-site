"use client";
import { lazy, Suspense, useRef } from "react";
import ContactForm from "./ContactForm";
import { useInView } from "framer-motion";
import LoadingCanvas from "../LoadingCanvas";

const ContactCanvas = lazy(() => import("./ContactCanvas"));

export default function ContactSection() {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });
  return (
    <section ref={ref} className="h-screen col-span-full  relative  bg-black">
      <div className="bg-[url(/partBgHeader.png)] bg-size-[20%] rotate-180 bg-no-repeat top-0 bottom-0 bg-bottom-right z-2 absolute h-full w-full"></div>
      <div className="grid grid-cols-8 h-full items-center relative z-10">
        <ContactForm />
        <div className="col-start-5 col-span-full h-full">
          {inView && (
            <Suspense fallback={<LoadingCanvas />}>
              {" "}
              <ContactCanvas />
            </Suspense>
          )}
        </div>
      </div>
      <div className="bg-[url(/partBgHeader.png)] bg-size-[20%]  bg-no-repeat bg-bottom-right z-2 absolute h-full bottom-0 top-0 w-full"></div>
      <div className="absolute top-0 bottom-0 z-2 h-full w-full flex items-center justify-center">
        <div className="h-1/3 animate-pulse  w-1/3 bg-yellow-100 blur-[300px] rounded-full"></div>
      </div>
    </section>
  );
}
