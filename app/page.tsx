import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { BeamsBackground } from "@/components/ui/beams-background";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#0D0D0F] text-[#F0EEE8] font-[family-name:var(--font-geist-sans)]">
      <BeamsBackground />
      <Navbar />
      <Hero />
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
    </main>
  );
}
