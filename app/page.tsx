import AboutSection from "./_components/About/AboutSection";
import { lazy } from "react";
import WorkSection from "./_components/Work/WorkSection";
import StackSection from "./_components/Stack/StackSection";
import ContactSection from "./_components/Contact/ContactSection";

const Header = lazy(() => import("./_components/Header"));
export default function Home() {
  return (
    <div className="grid grid-cols-7   w-full h-screen">
      <Header />
      <AboutSection />
      <WorkSection />

      <StackSection />
      <ContactSection />
    </div>
  );
}
