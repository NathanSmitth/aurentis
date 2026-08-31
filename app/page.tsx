import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhatWeDo from "@/components/WhatWeDo";
import WebDesign from "@/components/WebDesign";
import Automations from "@/components/Automations";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { BeamsBackground } from "@/components/ui/beams-background";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#0D0D0F] text-[#F0EEE8] font-[family-name:var(--font-geist-sans)]">
      <BeamsBackground />
      <Navbar />
      <Hero />
      <WhatWeDo />
      <WebDesign />
      <Automations />
      <Contact />
      <Footer />
    </main>
  );
}
