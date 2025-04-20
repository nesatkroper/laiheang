import type { Metadata } from "next";
import Hero from "@/components/hero";
import About from "@/components/about";
import Experience from "@/components/experience";
import Skills from "@/components/skills";
import Projects from "@/components/projects";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Ho Laiheang",
  description:
    "Portfolio website for a bank teller and accountant professional",
};

export default function Home() {
  return (
    <main className='min-h-screen'>
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
