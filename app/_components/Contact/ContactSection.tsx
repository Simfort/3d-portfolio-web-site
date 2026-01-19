import { lazy } from "react";
import ContactForm from "./ContactForm";

const ContactCanvas = lazy(() => import("./ContactCanvas"));

export default function ContactSection() {
  return (
    <section className="h-screen col-span-full  relative  bg-black">
      <div className="bg-[url(/partBgHeader.png)] bg-size-[20%] rotate-180 bg-no-repeat top-0 bottom-0 bg-bottom-right z-2 absolute h-full w-full"></div>
      <div className="grid grid-cols-8 h-full items-center relative z-10">
        <ContactForm />
        <div className="col-start-5 col-span-full h-full">
          <ContactCanvas />
        </div>
      </div>
      <div className="bg-[url(/partBgHeader.png)] bg-size-[20%] rotateY-180 bg-no-repeat bg-bottom-right z-2 absolute h-full bottom-0 top-0 w-full"></div>
    </section>
  );
}
